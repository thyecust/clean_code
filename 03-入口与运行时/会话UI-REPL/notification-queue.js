// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useSetAppState, useAppState } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, re, De, E, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function C() {
  return { clearTimer: { current: null }, mountCount: { current: 0 } };
}
function removeNotificationFromState(u, r) {
  let c = u.current?.key === r,
    k = u.queue.some((i) => i.key === r),
    m = u.pinned.some((i) => i.key === r);
  if (!c && !k && !m) return u;
  return {
    current: c ? null : u.current,
    queue: u.queue.filter((i) => i.key !== r),
    pinned: m ? u.pinned.filter((i) => i.key !== r) : u.pinned,
  };
}
function shouldShowNotification(u, r) {
  return u !== null && (!r || u.exemptFromDiffPanelHold === !0);
}
var x = 8000,
  h = Qt(null);
function NotificationProvider(Q) {
  let B = _(3),
    { children: S } = Q,
    [P] = d(C),
    R;
  if (B[0] !== S || B[1] !== P)
    ((R = e(h.Provider, { value: P, children: S })),
      (B[0] = S),
      (B[1] = P),
      (B[2] = R));
  else R = B[2];
  return R;
}
function useNotificationQueue() {
  let u = useAppState(),
    r = useSetAppState(),
    c = useClock(),
    k = De(h),
    [m] = d(() => ({
      clearTimer: { current: null },
      mountCount: { current: 0 },
    })),
    { clearTimer: i, mountCount: g } = k ?? m,
    l = re(() => {
      r((o) => {
        let n = p(
          o.diffPanelVisible
            ? o.notifications.queue.filter((s) => s.exemptFromDiffPanelHold)
            : o.notifications.queue,
        );
        if (!n) return o;
        let t =
          o.notifications.current !== null &&
          n.priority === "immediate" &&
          n.heldDuringDiffPanel === !0 &&
          o.notifications.current.priority !== "immediate"
            ? o.notifications.current
            : null;
        if (o.notifications.current !== null && t === null) return o;
        let a = n.key;
        return (
          i.current?.(),
          (i.current = c.setTimeout(() => {
            ((i.current = null),
              r((s) => {
                if (s.notifications.current?.key !== a) return s;
                return {
                  ...s,
                  notifications: { ...s.notifications, current: null },
                };
              }),
              l());
          }, n.timeoutMs ?? x)),
          {
            ...o,
            notifications: {
              ...o.notifications,
              queue: [
                ...(t !== null && q(t, n) ? [t] : []),
                ...o.notifications.queue.filter((s) => s !== n),
              ],
              current: n.heldDuringDiffPanel
                ? { ...n, heldDuringDiffPanel: void 0 }
                : n,
            },
          }
        );
      });
    }, [r, i, c]),
    D = re(
      (o) => {
        if (o.pinned) {
          r((t) => {
            if (t.notifications.pinned.some((a) => a.key === o.key)) return t;
            return {
              ...t,
              notifications: {
                ...t.notifications,
                pinned: [...t.notifications.pinned, o],
              },
            };
          });
          return;
        }
        if (o.priority === "immediate" && !u.getState().diffPanelVisible) {
          if (i.current) (i.current(), (i.current = null));
          ((i.current = c.setTimeout(() => {
            ((i.current = null),
              r((t) => {
                if (t.notifications.current?.key !== o.key) return t;
                return {
                  ...t,
                  notifications: {
                    ...t.notifications,
                    queue: t.notifications.queue.filter(
                      (a) => !o.invalidates?.includes(a.key),
                    ),
                    current: null,
                  },
                };
              }),
              l());
          }, o.timeoutMs ?? x)),
            r((t) => ({
              ...t,
              notifications: {
                ...t.notifications,
                current: o,
                queue: [
                  ...(t.notifications.current ? [t.notifications.current] : []),
                  ...t.notifications.queue,
                ].filter((a) => q(a, o)),
              },
            })));
          return;
        }
        let n =
          o.priority === "immediate" ? { ...o, heldDuringDiffPanel: !0 } : o;
        (r((t) => {
          if (n.fold && t.notifications.current?.key === n.key) {
            let f = n.fold(t.notifications.current, n);
            if (i.current) (i.current(), (i.current = null));
            let y = f.key;
            return (
              (i.current = c.setTimeout(() => {
                ((i.current = null),
                  r((N) => {
                    if (N.notifications.current?.key !== y) return N;
                    return {
                      ...N,
                      notifications: { ...N.notifications, current: null },
                    };
                  }),
                  l());
              }, f.timeoutMs ?? x)),
              { ...t, notifications: { ...t.notifications, current: f } }
            );
          }
          let a = n.fold
            ? t.notifications.queue.findIndex((f) => f.key === n.key)
            : -1;
          if (n.fold && a !== -1) {
            let f = n.fold(t.notifications.queue[a], n),
              y = [...t.notifications.queue];
            return (
              (y[a] = f),
              { ...t, notifications: { ...t.notifications, queue: y } }
            );
          }
          if (!(
            !new Set(t.notifications.queue.map((f) => f.key)).has(n.key) &&
            t.notifications.current?.key !== n.key
          ))
            return t;
          let b =
            t.notifications.current !== null &&
            n.invalidates?.includes(t.notifications.current.key);
          if (b && i.current) (i.current(), (i.current = null));
          return {
            ...t,
            notifications: {
              ...t.notifications,
              current: b ? null : t.notifications.current,
              queue: [...t.notifications.queue.filter((f) => q(f, n)), n],
            },
          };
        }),
          l());
      },
      [r, l, i, c],
    ),
    T = re(
      (o) => {
        (r((n) => {
          let t = removeNotificationFromState(n.notifications, o);
          if (t === n.notifications) return n;
          if (n.notifications.current?.key === o && i.current)
            (i.current(), (i.current = null));
          return { ...n, notifications: t };
        }),
          l());
      },
      [r, l, i],
    );
  return (
    E(() => {
      if ((g.current++, u.getState().notifications.queue.length > 0)) l();
      return () => {
        if ((g.current--, g.current === 0 && i.current))
          (i.current(), (i.current = null));
      };
    }, []),
    { addNotification: D, removeNotification: T, processQueue: l }
  );
}
var NOTIFICATION_PRIORITY_RANK = { immediate: 0, high: 1, medium: 2, low: 3 };
function q(u, r) {
  return (
    (u.priority !== "immediate" ||
      u.requeueOnPreempt === !0 ||
      u.heldDuringDiffPanel === !0) &&
    !r.invalidates?.includes(u.key)
  );
}
function p(u) {
  if (u.length === 0) return;
  return u.reduce((r, c) => (NOTIFICATION_PRIORITY_RANK[c.priority] < NOTIFICATION_PRIORITY_RANK[r.priority] ? c : r));
}
export { removeNotificationFromState, shouldShowNotification, NotificationProvider, useNotificationQueue, NOTIFICATION_PRIORITY_RANK };

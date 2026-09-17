// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 134 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { x, kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { formatDuration, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { Os } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { GIt, iZt, KIt, lZt, pWe, $He } from "./chunk-dyq13fbm.js";
import "./chunk-cd542wve.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { wSt } from "../Teammates团队/chunk-mrfx53ye.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function renderToolUseProgressMessage(a, s) {
  let i = GIt(a.map((l) => l.data));
  if (i.agents.length === 0 && i.logs.length === 0) return null;
  let u = Boolean(s?.verbose || s?.isTranscriptMode);
  if (u) {
    let l = s?.terminalSize?.columns ?? 80,
      f = Math.min(80, Math.max(40, l - 10));
    return e(xe, { children: e(iZt, { collected: i, verbose: u, width: f }) });
  }
  return e(xe, { children: e(E, { collected: i }) });
}
function E(Me) {
  let L = _(23),
    { collected: m } = Me,
    q;
  if (L[0] !== m.agents) ((q = $He(m.agents)), (L[0] = m.agents), (L[1] = q));
  else q = L[1];
  let { done: P, failedCount: Ce, running: j, total: z, complete: g } = q,
    F = Ce > 0 ? "failed" : g ? "done" : "running",
    w,
    k,
    T,
    R,
    M,
    C,
    h;
  if (
    L[2] !== m ||
    L[3] !== g ||
    L[4] !== P ||
    L[5] !== F ||
    L[6] !== j ||
    L[7] !== z
  ) {
    let A = lZt(m);
    w = KIt;
    k = P;
    T = z;
    R = j;
    M = g;
    C = F;
    h = A ? pWe(A) : void 0;
    ((L[2] = m),
      (L[3] = g),
      (L[4] = P),
      (L[5] = F),
      (L[6] = j),
      (L[7] = z),
      (L[8] = w),
      (L[9] = k),
      (L[10] = T),
      (L[11] = R),
      (L[12] = M),
      (L[13] = C),
      (L[14] = h));
  } else
    ((w = L[8]),
      (k = L[9]),
      (T = L[10]),
      (R = L[11]),
      (M = L[12]),
      (C = L[13]),
      (h = L[14]));
  let G;
  if (
    L[15] !== w ||
    L[16] !== k ||
    L[17] !== T ||
    L[18] !== R ||
    L[19] !== M ||
    L[20] !== C ||
    L[21] !== h
  )
    ((G = e(w, {
      done: k,
      total: T,
      running: R,
      complete: M,
      dotState: C,
      phaseText: h,
    })),
      (L[15] = w),
      (L[16] = k),
      (L[17] = T),
      (L[18] = R),
      (L[19] = M),
      (L[20] = C),
      (L[21] = h),
      (L[22] = G));
  else G = L[22];
  return G;
}
function renderToolResultMessage(a) {
  if (a.error)
    return e(xe, {
      children: r(t, {
        color: "error",
        children: [e(et, { status: "error", withSpace: !0 }), kr(a.error)],
      }),
    });
  if (a.status === "remote_launched")
    return e(xe, {
      children: r(o, {
        flexDirection: "column",
        children: [
          r(t, {
            children: [
              e(t, {
                dimColor: !0,
                children: "Running in cloud session \xB7 ",
              }),
              e(t, { color: "suggestion", children: a.sessionUrl }),
            ],
          }),
          a.warning
            ? r(t, {
                color: "warning",
                children: [
                  e(et, { status: "warning", withSpace: !0 }),
                  a.warning,
                ],
              })
            : null,
        ],
      }),
    });
  return e(K, { taskId: a.taskId });
}
function K(he) {
  let c = _(21),
    { taskId: I } = he,
    J;
  if (c[0] !== I) ((J = (ye) => ye.tasks[I]), (c[0] = I), (c[1] = J));
  else J = c[1];
  let n = Os(J);
  if (
    n?.type === "local_workflow" &&
    (n.status === "completed" || n.status === "failed" || n.status === "killed")
  ) {
    let d;
    if (c[2] !== n.endTime || c[3] !== n.startTime)
      ((d = n.endTime && n.startTime ? formatDuration(n.endTime - n.startTime) : void 0),
        (c[2] = n.endTime),
        (c[3] = n.startTime),
        (c[4] = d));
    else d = c[4];
    let Q = d;
    let X = n.status === "failed";
    let Y = n.status === "killed";
    const B = X || Y ? "error" : "success";
    let y;
    if (c[5] !== B)
      ((y = e(et, { status: B, withSpace: !0 })), (c[5] = B), (c[6] = y));
    else y = c[6];
    const U = X ? "Failed" : Y ? "Stopped" : "Completed";
    const D = Q && ` in ${Q}`;
    let S;
    if (c[7] !== n.agentCount)
      ((S =
        n.agentCount > 0 &&
        ` \xB7 ${n.agentCount} ${x(n.agentCount, "agent")}`),
        (c[7] = n.agentCount),
        (c[8] = S));
    else S = c[8];
    let b;
    if (c[9] !== n.totalTokens)
      ((b = n.totalTokens > 0 && ` \xB7 ${formatTokens(n.totalTokens)} tokens`),
        (c[9] = n.totalTokens),
        (c[10] = b));
    else b = c[10];
    let O;
    if (c[11] !== U || c[12] !== D || c[13] !== S || c[14] !== b)
      ((O = r(t, { dimColor: !0, children: [U, D, S, b] })),
        (c[11] = U),
        (c[12] = D),
        (c[13] = S),
        (c[14] = b),
        (c[15] = O));
    else O = c[15];
    let Z;
    if (c[16] !== y || c[17] !== O)
      ((Z = e(xe, { children: r(t, { children: [y, O] }) })),
        (c[16] = y),
        (c[17] = O),
        (c[18] = Z));
    else Z = c[18];
    return Z;
  }
  if (n?.type === "local_workflow") {
    let d;
    if (c[19] === p)
      ((d = e(xe, {
        children: r(t, {
          children: [
            e(t, { dimColor: !0, children: "Running in background \xB7 " }),
            e(t, { color: "suggestion", children: "/workflows" }),
            e(t, { dimColor: !0, children: " to monitor and save" }),
            e(W, {}),
          ],
        }),
      })),
        (c[19] = d));
    else d = c[19];
    return d;
  }
  let d;
  if (c[20] === p)
    ((d = e(xe, {
      children: r(t, {
        children: [
          e(t, { color: "suggestion", children: "/workflows" }),
          e(t, { dimColor: !0, children: " to view dynamic workflow runs" }),
        ],
      }),
    })),
      (c[20] = d));
  else d = c[20];
  return d;
}
function W() {
  let H = _(2),
    oe;
  if (H[0] === p) ((oe = wSt(ee().workflowSizeGuideline)), (H[0] = oe));
  else oe = H[0];
  let { size: te, isDefault: Se } = oe;
  if (!Se || te === "unrestricted") {
    return null;
  }
  let re;
  if (H[1] === p)
    ((re = r(N, {
      children: [
        r(t, { dimColor: !0, children: [" \xB7 ", te, " size ("] }),
        e(t, { color: "suggestion", children: "/config" }),
        e(t, { dimColor: !0, children: ")" }),
      ],
    })),
      (H[1] = re));
  else re = H[1];
  return re;
}
function renderToolUseRejectedMessage() {
  return e(xe, {
    children: e(t, { dimColor: !0, children: "Dynamic workflow cancelled" }),
  });
}
export {
  renderToolResultMessage,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 134 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { pluralize, firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { formatDuration, formatTokens } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { StatusIndicator } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { ToolResultRow } from "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import { useAppStateSelectorUnchecked } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { collectWorkflowProgressEvents, WorkflowProgressView, WorkflowStatusBar, lZt, formatCompactPhaseTitle, summarizeWorkflowAgents } from "./workflow-progress-ui.js";
import "./workflow-script.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getSessionStartWorkflowSizeGuideline } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
function renderToolUseProgressMessage(a, s) {
  let i = collectWorkflowProgressEvents(a.map((l) => l.data));
  if (i.agents.length === 0 && i.logs.length === 0) return null;
  let u = Boolean(s?.verbose || s?.isTranscriptMode);
  if (u) {
    let l = s?.terminalSize?.columns ?? 80,
      f = Math.min(80, Math.max(40, l - 10));
    return e(ToolResultRow, { children: e(WorkflowProgressView, { collected: i, verbose: u, width: f }) });
  }
  return e(ToolResultRow, { children: e(E, { collected: i }) });
}
function E(Me) {
  let L = _(23),
    { collected: m } = Me,
    q;
  if (L[0] !== m.agents) ((q = summarizeWorkflowAgents(m.agents)), (L[0] = m.agents), (L[1] = q));
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
    w = WorkflowStatusBar;
    k = P;
    T = z;
    R = j;
    M = g;
    C = F;
    h = A ? formatCompactPhaseTitle(A) : void 0;
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
    return e(ToolResultRow, {
      children: r(Text, {
        color: "error",
        children: [e(StatusIndicator, { status: "error", withSpace: !0 }), firstLine(a.error)],
      }),
    });
  if (a.status === "remote_launched")
    return e(ToolResultRow, {
      children: r(Box, {
        flexDirection: "column",
        children: [
          r(Text, {
            children: [
              e(Text, {
                dimColor: !0,
                children: "Running in cloud session \xB7 ",
              }),
              e(Text, { color: "suggestion", children: a.sessionUrl }),
            ],
          }),
          a.warning
            ? r(Text, {
                color: "warning",
                children: [
                  e(StatusIndicator, { status: "warning", withSpace: !0 }),
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
  let n = useAppStateSelectorUnchecked(J);
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
      ((y = e(StatusIndicator, { status: B, withSpace: !0 })), (c[5] = B), (c[6] = y));
    else y = c[6];
    const U = X ? "Failed" : Y ? "Stopped" : "Completed";
    const D = Q && ` in ${Q}`;
    let S;
    if (c[7] !== n.agentCount)
      ((S =
        n.agentCount > 0 &&
        ` \xB7 ${n.agentCount} ${pluralize(n.agentCount, "agent")}`),
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
      ((O = r(Text, { dimColor: !0, children: [U, D, S, b] })),
        (c[11] = U),
        (c[12] = D),
        (c[13] = S),
        (c[14] = b),
        (c[15] = O));
    else O = c[15];
    let Z;
    if (c[16] !== y || c[17] !== O)
      ((Z = e(ToolResultRow, { children: r(Text, { children: [y, O] }) })),
        (c[16] = y),
        (c[17] = O),
        (c[18] = Z));
    else Z = c[18];
    return Z;
  }
  if (n?.type === "local_workflow") {
    let d;
    if (c[19] === MEMO_CACHE_SENTINEL)
      ((d = e(ToolResultRow, {
        children: r(Text, {
          children: [
            e(Text, { dimColor: !0, children: "Running in background \xB7 " }),
            e(Text, { color: "suggestion", children: "/workflows" }),
            e(Text, { dimColor: !0, children: " to monitor and save" }),
            e(W, {}),
          ],
        }),
      })),
        (c[19] = d));
    else d = c[19];
    return d;
  }
  let d;
  if (c[20] === MEMO_CACHE_SENTINEL)
    ((d = e(ToolResultRow, {
      children: r(Text, {
        children: [
          e(Text, { color: "suggestion", children: "/workflows" }),
          e(Text, { dimColor: !0, children: " to view dynamic workflow runs" }),
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
  if (H[0] === MEMO_CACHE_SENTINEL) ((oe = getSessionStartWorkflowSizeGuideline(getGlobalConfig().workflowSizeGuideline)), (H[0] = oe));
  else oe = H[0];
  let { size: te, isDefault: Se } = oe;
  if (!Se || te === "unrestricted") {
    return null;
  }
  let re;
  if (H[1] === MEMO_CACHE_SENTINEL)
    ((re = r(N, {
      children: [
        r(Text, { dimColor: !0, children: [" \xB7 ", te, " size ("] }),
        e(Text, { color: "suggestion", children: "/config" }),
        e(Text, { dimColor: !0, children: ")" }),
      ],
    })),
      (H[1] = re));
  else re = H[1];
  return re;
}
function renderToolUseRejectedMessage() {
  return e(ToolResultRow, {
    children: e(Text, { dimColor: !0, children: "Dynamic workflow cancelled" }),
  });
}
export {
  renderToolResultMessage,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
};

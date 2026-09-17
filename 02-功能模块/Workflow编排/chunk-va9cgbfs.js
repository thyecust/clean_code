// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { emitTaskNotification } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { XZe } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import { getTaskOutputPath, evictTaskOutput, writeTaskOutputSnapshot, initTaskOutput } from "../后台任务-Shell管理/chunk-x3txegas.js";
import {
  hasTaskEverBeenRegistered,
  isTaskLoopSettled,
  onTaskLoopSettled,
  startKillEscalation,
  truncateMiddleWithMarker,
  enqueuePendingNotification,
  claimTaskNotification,
  buildTaskNotification,
  TASK_EVICT_GRACE_MS,
  removeKeepaliveReason,
  resolveNotificationTargetAgentId,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isTerminalTaskStatus, createPendingTask } from "../Teammates团队/chunk-mrfx53ye.js";
var I = 500;
function registerWorkflowTask({
  taskId: e,
  script: r,
  scriptPath: o,
  args: t,
  summary: s,
  workflowName: a,
  title: l,
  phases: u,
  defaultModel: k,
  workflowRunId: T,
  ownerAgentId: i,
  spawnerAgentId: p,
  taskRegistry: w,
  toolUseId: c,
  startTime: m,
}) {
  initTaskOutput(e);
  let _ = createAbortController(0),
    h = {
      ...createPendingTask(e, "local_workflow", s ?? "Dynamic workflow", c),
      ...(m !== void 0 && { startTime: m }),
      type: "local_workflow",
      status: "running",
      script: r,
      scriptPath: o,
      args: t,
      prompt: r,
      summary: s,
      workflowName: a,
      title: l,
      phases: u,
      defaultModel: k,
      workflowRunId: T,
      ownerAgentId: i,
      spawnerAgentId: p,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      abortController: _,
      agentControllers: new Map(),
    };
  return (w.register(h), h);
}
function registerAdoptedWorkflowTask(e, r) {
  let o = createPendingTask(e.taskId, "local_workflow", e.description, void 0),
    t = {
      ...o,
      startTime: e.startTime ?? o.startTime,
      type: "local_workflow",
      status: "paused",
      script: "",
      scriptPath: e.scriptPath,
      prompt: "",
      workflowRunId: e.workflowRunId,
      workflowProgress: [],
      progressVersion: 0,
      agentCount: 0,
      totalTokens: 0,
      totalToolCalls: 0,
      logs: [],
      notified: !0,
    };
  r.register(t);
}
function updateWorkflowProgressBatch(e, r, o) {
  if (r.length === 0) return;
  o.update(e, (t) => {
    if (t.status !== "running") return t;
    let s = [...t.workflowProgress],
      a = new Map();
    for (let i = 0; i < s.length; i++) {
      let p = s[i];
      if (p.type === "workflow_agent" || p.type === "workflow_phase")
        a.set(`${p.type}:${p.index}`, i);
    }
    let l = t.agentCount,
      u = !1;
    for (let i of r)
      if (i.type === "workflow_agent" || i.type === "workflow_phase") {
        let p = `${i.type}:${i.index}`,
          w = a.get(p);
        if (w !== void 0) s[w] = i;
        else (a.set(p, s.length), s.push(i));
        if (i.type === "workflow_agent" && i.state === "start")
          l = Math.max(l, i.index);
      } else (s.push(i), (u = !0));
    if (u && s.length > I * 2) {
      let i = s.length - I,
        p = [];
      for (let w = 0; w < s.length; w++) {
        let c = s[w];
        if (i > 0 && c.type === "workflow_log") {
          i--;
          continue;
        }
        p.push(c);
      }
      s = p;
    }
    let k = 0,
      T = 0;
    for (let i of s)
      if (i.type === "workflow_agent") {
        if (i.tokens) k += i.tokens;
        if (i.toolCalls) T += i.toolCalls;
      }
    return {
      ...t,
      workflowProgress: s,
      progressVersion: t.progressVersion + r.length,
      agentCount: l,
      totalTokens: k,
      totalToolCalls: T,
    };
  });
}
function A(e, r, o, t) {
  let s = null,
    a = isTaskLoopSettled(e);
  if (
    (r.update(e, (l) => {
      if (l.status !== "running") return l;
      ((s = l), l.abortController?.abort());
      let u = Date.now(),
        k =
          t.terminal?.summary === void 0
            ? t.terminal
            : { ...t.terminal, summary: truncateMiddleWithMarker(t.terminal.summary) };
      return {
        ...l,
        ...t,
        ...(t.terminal && { terminal: k }),
        ...(t.error !== void 0 && { error: truncateMiddleWithMarker(t.error) }),
        status: o,
        endTime: u,
        ...(isTerminalTaskStatus(o) && a && { evictAfter: u + TASK_EVICT_GRACE_MS }),
        abortController: void 0,
        agentControllers: void 0,
      };
    }),
    s && isTerminalTaskStatus(o) && !a)
  )
    onTaskLoopSettled(e, () => {
      r.update(e, (l) => {
        if (!isTerminalTaskStatus(l.status) || l.evictAfter !== void 0) return l;
        return { ...l, evictAfter: Date.now() + TASK_EVICT_GRACE_MS };
      });
    });
  return s;
}
function completeWorkflowTask(e, r, o, t, s, a) {
  let l = A(e, s, "completed", {
    result: r,
    agentCount: o,
    logs: t,
    terminal: a,
  });
  if (l)
    (writeTaskOutputSnapshot(
      l.outputFile,
      b(
        {
          summary: l.summary,
          agentCount: o,
          logs: t,
          result: r,
          workflowProgress: l.workflowProgress.filter(
            (u) => u.type !== "workflow_log",
          ),
          totalTokens: l.totalTokens,
          totalToolCalls: l.totalToolCalls,
        },
        null,
        2,
      ),
    ).catch((u) =>
      n(
        `Failed to write workflow output for ${e}: ${u instanceof Error ? u.message : u}`,
      ),
    ),
      logFeatureOk("task_local_workflow"));
}
function failWorkflowTask(e, r, o, t, s, a) {
  let l = A(e, s, "failed", { error: r, agentCount: o, logs: t, terminal: a });
  if ((evictTaskOutput(e), l)) logFeatureBad("task_local_workflow", "task_local_workflow_failed");
}
function pauseWorkflowTask(e, r) {
  let o = A(e, r, "paused", { notified: !0 });
  if (o)
    (o.v2Run?.kill("pause"), removeKeepaliveReason(o.ownerAgentId, `workflow:${e}`, r), startKillEscalation(e));
  return o !== null;
}
function buildResumePrompt(e) {
  let r = e.args !== void 0 ? `, args: ${b(e.args)}` : "";
  return `Resume the paused workflow by calling: Workflow({scriptPath: '${e.scriptPath}', resumeFromRunId: '${e.workflowRunId}'${r}}) \u2014 completed agents return cached results.`;
}
function killWorkflowTask(e, r, o) {
  if (r.get(e)?.status === "running" && isTaskLoopSettled(e) && !hasTaskEverBeenRegistered(e))
    logFeatureSad("task_kill_missing_loop_entry", "local_workflow");
  let t = A(e, r, "killed", { notified: !0 });
  if (t)
    (t.v2Run?.kill(o),
      removeKeepaliveReason(t.ownerAgentId, `workflow:${e}`, r),
      evictTaskOutput(e),
      emitTaskNotification(e, "stopped", { toolUseId: t.toolUseId, summary: t.description }),
      startKillEscalation(e));
  return t !== null;
}
function j(e, r, o, t) {
  let s = !1;
  if (
    (t.update(e, (a) => {
      if (a.status !== "running") return a;
      let l = a.agentControllers?.get(r);
      if (l && !l.signal.aborted)
        (l.abort(new DOMException(o, "AbortError")), (s = !0));
      return a;
    }),
    s)
  )
    logFeatureOk(
      o === "user-skip"
        ? "task_local_workflow_skip_agent"
        : "task_local_workflow_retry_agent",
    );
  return s;
}
function skipWorkflowAgent(e, r, o) {
  return j(e, r, "user-skip", o);
}
function retryWorkflowAgent(e, r, o) {
  return j(e, r, "user-retry", o);
}
var N = /^(\[\s*\]|\{\s*\}|\{\s*"[^"]+"\s*:\s*\[\s*\]\s*\})$/,
  H = 4 * XZe;
function enqueueWorkflowNotification({
  taskId: e,
  summary: r,
  status: o,
  result: t,
  failures: s,
  error: a,
  agentCount: l,
  totalTokens: u,
  totalToolCalls: k,
  durationMs: T,
  taskRegistry: i,
  toolUseId: p,
  transcriptDir: w,
  scriptPath: c,
  workflowRunId: m,
  args: _,
  workflowProgress: h,
}) {
  let { claimed: C, task: V } = claimTaskNotification(e, i),
    U = resolveNotificationTargetAgentId({
      ownerAgentId: V?.ownerAgentId,
      keepaliveReason: `workflow:${e}`,
      delivering: C,
      taskRegistry: i,
    });
  if (!C) return;
  let P = truncateMiddleWithMarker(Nt(r ?? "Dynamic workflow")),
    K = truncateMiddleWithMarker(
      o === "completed"
        ? `Dynamic workflow "${P}" completed`
        : o === "failed"
          ? `Dynamic workflow "${P}" failed: ${a ? truncateMiddleWithMarker(Nt(a)) : "Unknown error"}`
          : `Dynamic workflow "${P}" was stopped`,
      3 * XZe,
    ),
    E = "",
    W = [];
  if (o === "failed" || o === "killed") {
    let d = [];
    if (c && m) {
      let S = _ !== void 0 ? `, args: ${b(_)}` : "";
      d.push(
        `To resume after editing the script, call: Workflow({scriptPath: '${c}', resumeFromRunId: '${m}'${S}})`,
      );
    }
    if (w) d.push(`Agent transcripts: ${w}`);
    if (d.length > 0)
      E = `
<recovery>${Nt(
        d.join(`
`),
      )}</recovery>`;
  }
  if (o === "completed" && w) {
    if (
      (W.push(
        `Per-agent results: ${w}/journal.jsonl \u2014 one {"type":"result",...} line per completed agent with its full return value.`,
      ),
      W.push(
        "If the result above is empty or unexpected, Read this file BEFORE diagnosing \u2014 do not assume agents returned non-empty results.",
      ),
      c && m)
    ) {
      let d = _ !== void 0 ? `, args: ${b(_)}` : "";
      W.push(
        `To re-run with edited post-processing: Workflow({scriptPath: '${c}', resumeFromRunId: '${m}'${d}}) \u2014 agents whose (prompt, opts) are unchanged replay from cache.`,
      );
    }
  }
  let D =
      W.length > 0
        ? `
<diagnostics>${Nt(
            W.join(`
`),
          )}</diagnostics>`
        : "",
    x = getTaskOutputPath(e),
    L = "";
  if (o === "completed" && t !== void 0) {
    let d = Nt(b(t)),
      S = 8000;
    if (d.length > 8000) {
      let v = truncateToCodeUnits(d, 8000);
      L = `
<result>${v}
... (truncated ${d.length - v.length} chars, full result in ${x})</result>`;
    } else
      L = `
<result>${d}</result>`;
  }
  let X = s?.length
      ? `
<failures>${truncateMiddleWithMarker(
          Nt(
            s.join(`
`),
          ),
          H,
        )}</failures>`
      : "",
    O = "";
  if (h) {
    let d = 0,
      S = 0,
      v = 0,
      M = 0;
    for (let R of h) {
      if (R.type !== "workflow_agent") continue;
      if (R.state === "done") {
        if ((d++, R.resultPreview === void 0 || N.test(R.resultPreview))) M++;
      } else if (R.state === "error")
        if (R.skipped) v++;
        else S++;
    }
    O = `<agents_done>${d}</agents_done><agents_error>${S}</agents_error><agents_skipped>${v}</agents_skipped><agents_empty_result>${M}</agents_empty_result>`;
  }
  let B = `
<usage><agent_count>${l}</agent_count>${O}<subagent_tokens>${u}</subagent_tokens><tool_uses>${k}</tool_uses><duration_ms>${T}</duration_ms></usage>`;
  enqueuePendingNotification(
    {
      value: buildTaskNotification({
        taskId: e,
        toolUseId: p,
        outputFile: x,
        status: o,
        summary: K,
        body: `${E}${L}${D}${X}${B}`,
      }),
      mode: "task-notification",
      skipAttachments: !0,
      agentId: U,
      priority: "next",
      taskId: e,
    },
    { turnAttribution: "inherit" },
  );
}
export { registerWorkflowTask, registerAdoptedWorkflowTask, updateWorkflowProgressBatch, completeWorkflowTask, failWorkflowTask, pauseWorkflowTask, buildResumePrompt, killWorkflowTask, skipWorkflowAgent, retryWorkflowAgent, enqueueWorkflowNotification };

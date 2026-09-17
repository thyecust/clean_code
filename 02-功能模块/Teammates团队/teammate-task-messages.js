// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { buildAgentId } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { appendTranscriptMessage, findTeammateTaskByAgentId, createUserMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { isTerminalTaskStatus } from "./chunk-mrfx53ye.js";
function appendMessageToTaskTranscript(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (t) => ({ ...t, messages: appendTranscriptMessage(t.messages, a) }));
}
function queueTeammateUserMessage(e, a, s, t) {
  let m = s.get(e);
  if (!m || isTerminalTaskStatus(m.status)) {
    logForDebugging(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);
    return;
  }
  (s.update(e, (r) => ({
    ...r,
    pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: t }],
  })),
    s.updateTranscript(e, (r) => ({
      ...r,
      messages: appendTranscriptMessage(r.messages, createUserMessage({ content: a, origin: t })),
    })));
}
function wakeTeammateTask(e, a, s) {
  let t = findTeammateTaskByAgentId(buildAgentId(a, s), e);
  if (t?.status === "running") t.retryWake?.emit();
}
export { appendMessageToTaskTranscript, queueTeammateUserMessage, wakeTeammateTask };

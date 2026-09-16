// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { ix } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Yue, nY, Re } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { xs } from "./chunk-mrfx53ye.js";
function L1t(e, a, s) {
  if (s.get(e)?.status !== "running") return;
  s.updateTranscript(e, (t) => ({ ...t, messages: Yue(t.messages, a) }));
}
function zqe(e, a, s, t) {
  let m = s.get(e);
  if (!m || xs(m.status)) {
    n(`Dropping message for teammate task ${e}: task status is "${m?.status}"`);
    return;
  }
  (s.update(e, (r) => ({
    ...r,
    pendingUserMessages: [...r.pendingUserMessages, { text: a, origin: t }],
  })),
    s.updateTranscript(e, (r) => ({
      ...r,
      messages: Yue(r.messages, Re({ content: a, origin: t })),
    })));
}
function Nin(e, a, s) {
  let t = nY(ix(a, s), e);
  if (t?.status === "running") t.retryWake?.emit();
}
export { L1t, zqe, Nin };

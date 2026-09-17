// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 210 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { FEEDBACK_DRAFT_TYPES, listQueuedFeedbackDrafts, isSendFeedbackEnabled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { submitFeedbackDraft } from "./feedback-draft-submit.js";
async function submitDraftFromRequest({
  draftId: f,
  description: a,
  type: e,
  title: r,
  area: t,
  attachTranscript: d,
  surface: c,
  messages: u,
  storageV5: n,
  credentials: l,
}) {
  if (!isSendFeedbackEnabled()) return { feedback_id: null, failure_reason: "drafts_disabled" };
  let { queued: m } = await listQueuedFeedbackDrafts(void 0, n),
    o = m.find((b) => b.draft_id === f);
  if (!o) return { feedback_id: null, failure_reason: "draft_not_found" };
  let i = e !== void 0 && FEEDBACK_DRAFT_TYPES.includes(e) ? e : void 0,
    p = {
      ...o,
      ...(i !== void 0 && { type: i }),
      ...(r != null && r !== "" && { title: r }),
      ...(t != null && t !== "" && { area: t }),
      ...(a && { details: a }),
    },
    s = await submitFeedbackDraft({
      draft: p,
      includeTranscript: d == null ? !0 : d === !0,
      currentSessionMessages: u,
      surface: c ?? "sdk",
      storageV5: n,
      credentials: l,
    });
  return s.success
    ? { feedback_id: s.feedbackId }
    : { feedback_id: null, failure_reason: s.error };
}
export { submitDraftFromRequest };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { $On } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Xa } from "./chunk-jzy6p47z.js";
var o = {
  notice: null,
  shownLoggedForDraftId: null,
  promptedCount: 0,
  sessionDraftCount: 0,
  seededFromDisk: !1,
  seedStarted: !1,
  toolCallCount: 0,
};
class n {
  autoDenyPresence = Le();
  mainLoopBusy = Xa({ busy: !1 });
  blockingToolProgress = Xa({ active: !1 });
  dialogHostUnmounted = Xa({ unmounted: !1 });
  onScreenBlockingDialog = Xa({ surfaceMounted: !1, kind: null });
  pendingSurveyFeedbackSource = null;
  terminalFocus = "unknown";
  terminalFocusGainedAt = Number.NEGATIVE_INFINITY;
  terminalFocusChanged = Le();
  feedbackNotice = Xa(o);
  clawdEntranceTaken = !1;
  startupUpdateSummary = void 0;
  experimentEnrollmentsUnseen = void 0;
  orgMemoryWritesRowSeen = !1;
  orgMemoryReadRowSeen = !1;
  remoteHomeSettingsRowSeen = !1;
}
var zs = new n();
function Lyn(e) {
  if (e) zs.terminalFocusGainedAt = Date.now();
  ((zs.terminalFocus = e ? "focused" : "blurred"),
    $On(e),
    zs.terminalFocusChanged.emit());
}
function Pre() {
  return zs.terminalFocus !== "blurred";
}
function $I() {
  return zs.terminalFocus;
}
function kYn() {
  return zs.terminalFocusGainedAt;
}
function V3(e) {
  return zs.terminalFocusChanged.subscribe(e);
}
export { zs, Lyn, Pre, $I, kYn, V3 };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createSystemInfoMessage, createCloudSessionStatusMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
var CLOUD_SESSION_ENTRY_LABELS = {
    create: "Cloud session active",
    attach: "Attached to cloud session",
  },
  CLOUD_SESSION_URL_SEPARATOR = " \xB7 code here or at ";
function a(e, t) {
  return `${CLOUD_SESSION_ENTRY_LABELS[e]}${CLOUD_SESSION_URL_SEPARATOR}${t}`;
}
function buildCloudSessionStatusMessage(e, t, o) {
  let s = a(e, t);
  return o ? createCloudSessionStatusMessage(e, t, s) : createSystemInfoMessage(s, "info");
}
export { CLOUD_SESSION_ENTRY_LABELS, CLOUD_SESSION_URL_SEPARATOR, buildCloudSessionStatusMessage };

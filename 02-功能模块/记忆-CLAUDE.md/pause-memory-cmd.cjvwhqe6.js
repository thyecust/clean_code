// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 3 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { AS, f_e } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
var m = async (t, o) => {
  let e = !AS();
  return (
    f_e(e),
    o.sessionState?.notifyInternalMetadataChanged({
      memory_toggled_off: e ? !0 : null,
    }),
    logEvent("tengu_memory_toggled", { toggled_off: e }),
    {
      type: "text",
      value: e
        ? `Memory paused for this session \xB7 this conversation will not write or read new memories, and previously-loaded memory content should not be referenced.

Run /pause-memory again to resume.`
        : "Memory resumed \xB7 memory content may be referenced and new memories can be saved.",
    }
  );
};
export { m as call };

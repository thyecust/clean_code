// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 210 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { localJsxDialog } from "../上下文压缩-Compact/chunk-1ntrf0ja.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { AR } from "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../../01-核心基础设施/共享小工具-未细化/goal-proposal-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import "../工具Glob-Grep-搜索/chunk-57axeagj.js";
import "../工具WebFetch-WebSearch/clear-session-caches.js";
import { clearConversation, hasAgentTaskSurvivingClear } from "../工具WebFetch-WebSearch/clear-conversation.js";
import "../Teammates团队/agent-lifecycle.js";
import "../权限系统/swarm-permission-poller.js";
var c = async (r, o) => {
  let i = r.trim() || void 0,
    e = K();
  o.dialogStore?.dismissKind(localJsxDialog.kind);
  for await (let s of clearConversation({ ...o, clearedSessionTitle: i }))
    o.onQueryEvent?.(s);
  let a = AR(o.submissionOrigin) && !hasAgentTaskSurvivingClear(o.taskRegistry.all());
  return (
    import("../权限系统/registerChromeTabGroupCleanup.epxd464c.js")
      .then((s) => s.closeSessionTabGroup({ sessionId: e, onlyIfEmpty: !a }))
      .catch(logError),
    { type: "text", value: "" }
  );
};
export { c as call };

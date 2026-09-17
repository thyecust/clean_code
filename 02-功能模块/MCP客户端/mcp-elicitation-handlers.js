// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { RELATED_TASK_META_KEY, RelatedTaskMetadataSchema, ElicitRequestSchema, ElicitationCompleteNotificationSchema } from "./chunk-tv3jbp8f.js";
import { K, he, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logMCPError, logMCPDebug } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { executeElicitationHooks, executeElicitationResultHooks, executeNotificationHooks } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getOrCreateElicitationHandler } from "./mcp-elicitation-request-handler.js";
import { asMcpSdkClient } from "../../01-核心基础设施/共享小工具-未细化/mcp-client-type-casts.js";
function parseRelatedTaskMetadata(e) {
  let t = RelatedTaskMetadataSchema.safeParse(e?.[RELATED_TASK_META_KEY]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function registerElicitationHandler(e, t, r, s) {
  let n = getOrCreateElicitationHandler(e, {
    serverName: t,
    requestDialog: r,
    transportErrorState: s,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks,
  });
  try {
    (e.setRequestHandler(ElicitRequestSchema, (o, i) => n.handle(o, { signal: i.signal })),
      e.setNotificationHandler(ElicitationCompleteNotificationSchema, (o) => {
        let { elicitationId: i } = o.params;
        if (
          (logMCPDebug(t, `Received elicitation completion notification: ${i}`),
          executeNotificationHooks(
            { id: K(), project: { originalCwd: he(), projectRoot: sn() } },
            {
              message: `MCP server "${t}" confirmed elicitation ${i} complete`,
              notificationType: "elicitation_complete",
            },
          ),
          !n.complete(i))
        )
          logMCPDebug(
            t,
            `Ignoring completion notification for unknown elicitation: ${i}`,
          );
      }));
  } catch {
    return;
  }
}
function handleElicitationRequest({
  connected: e,
  params: t,
  signal: r,
  requestDialog: s,
  transportErrorState: n,
}) {
  return getOrCreateElicitationHandler(asMcpSdkClient(e.client), {
    serverName: e.name,
    requestDialog: s,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: runElicitationHooks,
    runElicitationResultHooks: runElicitationResultHooks,
  }).handle({ params: t }, { signal: r, transportErrorState: n });
}
async function runElicitationHooks(e, t, r) {
  let s = { id: K(), project: { originalCwd: he(), projectRoot: sn() } };
  try {
    let n = t.mode === "url" ? "url" : "form",
      o = "url" in t ? t.url : void 0,
      i = "elicitationId" in t ? t.elicitationId : void 0,
      { elicitationResponse: c, blockingError: a } = await executeElicitationHooks({
        session: s,
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: r,
        mode: n,
        url: o,
        elicitationId: i,
      });
    if (a) return { action: "decline" };
    if (c) return { action: c.action, content: c.content };
    return;
  } catch (n) {
    logMCPError(e, `Elicitation hook error: ${n}`);
    return;
  }
}
async function runElicitationResultHooks(e, t, r, s, n) {
  let o = { id: K(), project: { originalCwd: he(), projectRoot: sn() } };
  try {
    let { elicitationResultResponse: i, blockingError: c } = await executeElicitationResultHooks({
      session: o,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: r,
      mode: s,
      elicitationId: n,
    });
    if (c)
      return (
        executeNotificationHooks(o, {
          message: `Elicitation response for server "${e}": decline`,
          notificationType: "elicitation_response",
        }),
        { action: "decline" }
      );
    let a = i ? { action: i.action, content: i.content ?? t.content } : t;
    return (
      executeNotificationHooks(o, {
        message: `Elicitation response for server "${e}": ${a.action}`,
        notificationType: "elicitation_response",
      }),
      a
    );
  } catch (i) {
    return (
      logMCPError(e, `ElicitationResult hook error: ${i}`),
      executeNotificationHooks(o, {
        message: `Elicitation response for server "${e}": ${t.action}`,
        notificationType: "elicitation_response",
      }),
      t
    );
  }
}
export { parseRelatedTaskMetadata, registerElicitationHandler, handleElicitationRequest, runElicitationHooks, runElicitationResultHooks };

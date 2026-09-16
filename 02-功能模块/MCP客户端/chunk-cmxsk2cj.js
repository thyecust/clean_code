// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Wrn, VIe } from "./chunk-5wa92x7d.js";
import { K, he, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Wr, J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { KMe, XMe, gC } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { jIe } from "./chunk-7gw5rbph.js";
import { Yo } from "../../01-核心基础设施/共享小工具-未细化/chunk-1ftn6vfs.js";
function khr(e) {
  let t = VIe.safeParse(e?.[Wrn]);
  return t.success ? { taskId: t.data.taskId } : null;
}
function xhr(e, t, r, c) {
  let n = jIe(e, {
    serverName: t,
    requestDialog: r,
    transportErrorState: c,
    runElicitationHooks: Mct,
    runElicitationResultHooks: Nct,
  });
  try {
    (e.setRequestHandler("elicitation/create", (o, i) =>
      n.handle(o, { signal: i.mcpReq.signal }),
    ),
      e.setNotificationHandler("notifications/elicitation/complete", (o) => {
        let { elicitationId: i } = o.params;
        if (
          (J(t, `Received elicitation completion notification: ${i}`),
          gC(
            { id: K(), project: { originalCwd: he(), projectRoot: sn() } },
            {
              message: `MCP server "${t}" confirmed elicitation ${i} complete`,
              notificationType: "elicitation_complete",
            },
          ),
          !n.complete(i))
        )
          J(
            t,
            `Ignoring completion notification for unknown elicitation: ${i}`,
          );
      }));
  } catch {
    return;
  }
}
function Drn({
  connected: e,
  params: t,
  signal: r,
  requestDialog: c,
  transportErrorState: n,
}) {
  return jIe(Yo(e.client), {
    serverName: e.name,
    requestDialog: c,
    transportErrorState: e.transportErrorState,
    runElicitationHooks: Mct,
    runElicitationResultHooks: Nct,
  }).handle({ params: t }, { signal: r, transportErrorState: n });
}
async function Mct(e, t, r) {
  let c = { id: K(), project: { originalCwd: he(), projectRoot: sn() } };
  try {
    let n = t.mode === "url" ? "url" : "form",
      o = "url" in t ? t.url : void 0,
      i = "elicitationId" in t ? t.elicitationId : void 0,
      { elicitationResponse: s, blockingError: a } = await KMe({
        session: c,
        serverName: e,
        message: t.message,
        requestedSchema: "requestedSchema" in t ? t.requestedSchema : void 0,
        signal: r,
        mode: n,
        url: o,
        elicitationId: i,
      });
    if (a) return { action: "decline" };
    if (s) return { action: s.action, content: s.content };
    return;
  } catch (n) {
    Wr(e, `Elicitation hook error: ${n}`);
    return;
  }
}
async function Nct(e, t, r, c, n) {
  let o = { id: K(), project: { originalCwd: he(), projectRoot: sn() } };
  try {
    let { elicitationResultResponse: i, blockingError: s } = await XMe({
      session: o,
      serverName: e,
      action: t.action,
      content: t.content,
      signal: r,
      mode: c,
      elicitationId: n,
    });
    if (s)
      return (
        gC(o, {
          message: `Elicitation response for server "${e}": decline`,
          notificationType: "elicitation_response",
        }),
        { action: "decline" }
      );
    let a = i ? { action: i.action, content: i.content ?? t.content } : t;
    return (
      gC(o, {
        message: `Elicitation response for server "${e}": ${a.action}`,
        notificationType: "elicitation_response",
      }),
      a
    );
  } catch (i) {
    return (
      Wr(e, `ElicitationResult hook error: ${i}`),
      gC(o, {
        message: `Elicitation response for server "${e}": ${t.action}`,
        notificationType: "elicitation_response",
      }),
      t
    );
  }
}
export { khr, xhr, Drn, Mct, Nct };

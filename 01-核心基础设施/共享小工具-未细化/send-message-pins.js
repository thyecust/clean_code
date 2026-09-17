// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { parseShortId, Qs } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "./lazy-value.js";
import { getTeamName } from "../../02-功能模块/Teammates团队/teammate-context.js";
import { readTeamFileAsync } from "../../02-功能模块/Teammates团队/team-file-store.js";
import { maxSlugLength, slugify, AGENT_REF_PATTERN, parseAgentDisplayName, buildRecipientListing, resolveInProcessRecipient, createShortEntityRef } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { jpe } from "../../02-功能模块/Bridge-RemoteControl/chunk-1yq098a7.js";
import { listPeerSessions, getBridgeSessionRows } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { SEND_MESSAGE_TOOL_NAME } from "./send-message-constants.js";
import { s, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
async function resolveSendMessagePin({
  session: e,
  to: t,
  message: o,
  resolved: r,
  appState: n,
  agentLifecycle: d,
  storageV5: a,
  credentials: l,
}) {
  if (typeof o !== "string") return { kind: "proceed", pin: void 0 };
  let i = b(r);
  if (i === null) return { kind: "proceed", pin: void 0 };
  let g = slugify(i.name),
    p = Object.hasOwn(n.sendMessagePins, g) ? n.sendMessagePins[g] : void 0;
  if (p !== void 0 && p.id === i.id) return { kind: "proceed", pin: p };
  if (p !== void 0) {
    let y = parseAgentDisplayName(t) !== null;
    if (!y && t === i.name && t !== p.name)
      return { kind: "proceed", pin: void 0 };
    if (!y) {
      let S = getTeamName(n.teamContext),
        [P, M, R] = await Promise.all([S ? readTeamFileAsync(S, a) : null, listPeerSessions(), jpe(e, l)]),
        x = buildRecipientListing(n, {
          teamFile: P,
          sessions: M,
          cloud: R.sessions,
          bridge: getBridgeSessionRows(e),
        }),
        f = resolveInProcessRecipient(x.byName, g);
      return {
        kind: "rebound",
        name: i.name,
        previous: p,
        next:
          f?.kind === "one" && f.candidate.id === i.id ? f.candidate : void 0,
      };
    }
  }
  let u = { id: i.id, name: i.name, ref: createShortEntityRef(i.kind, i.id) };
  return (d.setSendMessagePin(g, u), { kind: "proceed", pin: u });
}
function b(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return { kind: "subagent", id: e.agentId, name: e.agentName };
  }
}
var A = createLazyValue(() =>
  c({
    success: k(!0),
    pin: c({
      name: s().min(1).max(maxSlugLength),
      id: s()
        .max(1024)
        .refine((e) => parseShortId(e) !== null),
      ref: s().regex(new RegExp(`^${AGENT_REF_PATTERN}$`)),
    }),
  }),
);
function extractSendMessagePins(e) {
  let t = new Map(),
    o = new Set();
  for (let r of e)
    if (r.type === "assistant") {
      let n = r.message.content;
      if (!Array.isArray(n)) continue;
      for (let d of n) if (d.type === "tool_use" && d.name === SEND_MESSAGE_TOOL_NAME) o.add(d.id);
    } else if (r.type === "user") {
      let n = r.message.content;
      if (!Array.isArray(n)) continue;
      if (
        n.find(
          (l) =>
            l.type === "tool_result" && !l.is_error && o.has(l.tool_use_id),
        ) === void 0
      )
        continue;
      let a = A().safeParse(r.toolUseResult);
      if (!a.success) continue;
      t.set(slugify(a.data.pin.name), {
        id: a.data.pin.id,
        name: a.data.pin.name,
        ref: a.data.pin.ref,
      });
    }
  return Object.fromEntries(t);
}
function getSendMessagePinsIfChanged(e, t) {
  let o = extractSendMessagePins(e);
  return Qs(o, t) ? null : o;
}
export { resolveSendMessagePin, extractSendMessagePins, getSendMessagePinsIfChanged };

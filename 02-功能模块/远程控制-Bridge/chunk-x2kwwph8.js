// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { lit as S } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import {
  getCommandName,
  isCommandEnabled,
  findCommand,
  isSensitiveCommandInput,
  buildSkillNameInfo,
  isOfficialMarketplacePlugin,
  createUserMessage,
  createLocalCommandMessage,
  builtInCommandNames,
  isBridgeSafeCommand,
  findBridgeFallback,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { resolvePromptCommandFromUri, parseSlashCommandInput, resolveSubcommandTarget } from "../用量额度-限额/chunk-1bfn62xh.js";
import { isMcpSkillsEnabled } from "../MCP客户端/mcp-skills-extension.js";
function resolveBridgeSlashOverride(l) {
  let { inputString: t, context: n, uuid: r, origin: m } = l,
    a = p(t, n.options.commands);
  if (a === void 0) return { kind: "none" };
  let { parsed: s, cmd: e, folded: o, effectiveCmd: d } = a;
  if (isBridgeSafeCommand(d))
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: t,
      effectiveContext: n,
    };
  let c = findBridgeFallback(d);
  if (c && isCommandEnabled(d))
    return {
      kind: "updated",
      effectiveSkipSlash: !1,
      effectiveInput: o
        ? `/${c.name}${o.args ? ` ${o.args}` : ""}`
        : t.replace(/^\/\S+/, `/${c.name}`),
      effectiveContext: {
        ...n,
        options: {
          ...n.options,
          commands: [{ ...c, isEnabled: () => isCommandEnabled(d) }, ...n.options.commands],
        },
      },
    };
  let { sanitizedName: g, skillNameHash: v } = buildSkillNameInfo({
    rawName: e.name,
    canonicalName: e.name,
    isMcp: e.loadedFrom === "mcp",
    isBuiltIn: builtInCommandNames().has(e.name),
    isBundled: e.type === "prompt" && e.source === "bundled",
    isOfficial: e.type === "prompt" && isOfficialMarketplacePlugin(e),
  });
  (logEvent("tengu_slash_command_unavailable", {
    command_name: g,
    ...v,
    surface: S("bridge"),
    reason: S("unavailable_over_remote_control"),
  }),
    logFeatureBad("cmd_dispatch", "cmd_unavailable_bridge"));
  let u = o
      ? `/${getCommandName(e)} ${o.consumedToken} isn't available over Remote Control.`
      : `/${getCommandName(d)} isn't available over Remote Control.`,
    C =
      isSensitiveCommandInput(e, s.args) || isSensitiveCommandInput(d, o ? o.args : s.args) ? `/${s.commandName} ***` : t;
  return {
    kind: "blocked",
    result: {
      messages: [
        createUserMessage({ content: C, uuid: r, origin: m }),
        createLocalCommandMessage(`<local-command-stdout>${u}</local-command-stdout>`),
      ],
      shouldQuery: !1,
      resultText: u,
    },
  };
}
function p(l, t) {
  let n = parseSlashCommandInput(l);
  if (n === null) return;
  let r = n.commandName;
  if (isMcpSkillsEnabled()) {
    let o = resolvePromptCommandFromUri(r, t);
    if (o) r = o.commandName;
  }
  let m = findCommand(r, t);
  if (!m) return;
  let a = resolveSubcommandTarget(m, n.args),
    s = a ? findCommand(a.targetName, t) : void 0,
    e =
      a && s && isCommandEnabled(s)
        ? { command: s, consumedToken: a.consumedToken, args: a.remainingArgs }
        : void 0;
  return { parsed: n, cmd: m, folded: e, effectiveCmd: e ? e.command : m };
}
function bridgeSlashLineBuildsRequest(l, t) {
  let n = p(l, t);
  if (n === void 0) return !0;
  let { effectiveCmd: r } = n;
  return r.type === "prompt" && isBridgeSafeCommand(r);
}
export { resolveBridgeSlashOverride, bridgeSlashLineBuildsRequest };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getRuntimeMainLoopModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getMainThreadSystemPrompt, getLastCacheSafeParamsForSameModel, getSystemContext, getUserContext, buildDefaultSystemPrompt } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getToolPermissionContext } from "./chunk-fjrcf22x.js";
async function buildCacheSafeParams({
  toolUseContext: e,
  forkContextMessages: t,
  mainThreadAgentDefinition: o,
}) {
  let {
    systemPrompt: s,
    userContext: r,
    systemContext: m,
  } = getLastCacheSafeParamsForSameModel() ?? (await i(e, o));
  return {
    systemPrompt: s,
    userContext: r,
    systemContext: m,
    toolUseContext: e,
    forkContextMessages: t,
    advisorModel: e.getAdvisorSetting(),
  };
}
async function i(e, t) {
  let [o, s, r] = await Promise.all([
    e.renderedSystemPrompt ?? n(e, t),
    getUserContext(e.session, e.storageV5, e.credentials),
    getSystemContext(e.session, e.options.cacheBreakerPhrase),
  ]);
  return { systemPrompt: o, userContext: s, systemContext: r };
}
async function n(e, t) {
  let o = getToolPermissionContext(e),
    s = await buildDefaultSystemPrompt(
      e.options.tools,
      getRuntimeMainLoopModel({ permissionMode: o.mode, mainLoopModel: e.options.mainLoopModel }),
      Array.from(o.additionalWorkingDirectories.keys()),
    );
  return getMainThreadSystemPrompt({
    mainThreadAgentDefinition: t,
    toolUseContext: e,
    customSystemPrompt: e.options.customSystemPrompt,
    defaultSystemPrompt: s,
    appendSystemPrompt: e.options.appendSystemPrompt,
  });
}
export { buildCacheSafeParams };

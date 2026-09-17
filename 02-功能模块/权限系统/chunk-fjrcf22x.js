// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ya } from "./chunk-t3b7pg2x.js";
import { isBypassPermissionsModeDisabled } from "./chunk-pcxn6gwz.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function d(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysAllowRules: {
      ...e.alwaysAllowRules,
      command: dedupe([...(e.alwaysAllowRules.command || []), ...o]),
    },
  };
}
function u(e, o) {
  if (o.length === 0) return e;
  return {
    ...e,
    alwaysDenyRules: {
      ...e.alwaysDenyRules,
      command: dedupe([...(e.alwaysDenyRules.command || []), ...o]),
    },
  };
}
function createCommandRulesGetAppState(e, o, s, t) {
  if (
    !t?.replaceCommandRules &&
    !t?.replaceDenyRules &&
    t?.frozenCommandDenies === void 0 &&
    o.length === 0 &&
    s.length === 0
  )
    return e;
  return () => {
    let i = e(),
      n =
        i.toolPermissionContext.pollEventDeliveryGuard === !0
          ? i.toolPermissionContext
          : t?.replaceCommandRules
            ? {
                ...i.toolPermissionContext,
                alwaysAllowRules: {
                  ...i.toolPermissionContext.alwaysAllowRules,
                  command: o,
                },
              }
            : d(i.toolPermissionContext, o),
      r = t?.replaceDenyRules
        ? { ...n, alwaysDenyRules: { ...n.alwaysDenyRules, command: s } }
        : t?.frozenCommandDenies !== void 0
          ? {
              ...n,
              alwaysDenyRules: {
                ...n.alwaysDenyRules,
                command: dedupe([
                  ...t.frozenCommandDenies,
                  ...(n.alwaysDenyRules.command ?? []),
                  ...s,
                ]),
              },
            }
          : u(n, s);
    return { ...i, toolPermissionContext: r };
  };
}
var SKILL_TOOL_NAME = "Skill",
  SKILL_TOOL_NAME_PREFIX = "skill__";
function buildSkillToolName(e) {
  return "skill__" + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function getAliasSkillToolNames(e) {
  let o = [
    ...(e.aliases ?? []),
    ...(e.unqualifiedName != null ? [e.unqualifiedName] : []),
  ];
  return o.length ? o.map(buildSkillToolName) : void 0;
}
var y = {
  allowed_tools: "strip",
  avoid_prompts: "strip",
  permission_mode: "strip",
  working_directory: "strip",
  disallowed_tools: "keep",
  bash_command_clamp: "keep",
  sandbox_auto_allow_suspended: "keep",
  effort: "keep",
  model: "keep",
  max_thinking_tokens: "keep",
  flag_settings: "keep",
};
function stripWideningPermissionLayers(e) {
  if (!e) return e;
  return e.filter((o) => y[o.kind] === "keep");
}
function getSuppressedClaudeAiConnectors(e) {
  return e.getAppState?.().mcp?.suppressedClaudeAiConnectors ?? [];
}
function consentAskCanReachUser(e) {
  let o = getToolPermissionContext(e);
  return (
    o.mode !== "bypassPermissions" &&
    !(o.mode === "plan" && o.isBypassPermissionsModeAvailable)
  );
}
function planConsentMustDeny(e) {
  if (getToolPermissionContext(e).mode !== "plan") return !1;
  return consentMustDeny(e);
}
function artifactFilesConsentMarked(e, o, s) {
  let t = e.getAppState();
  return getToolPermissionContext(e).mode === "plan" || s
    ? t.artifactAssetReadHumanConsentSlugs?.[o] === !0
    : t.artifactAssetReadConsentSlugs?.[o] === !0;
}
function consentMustDeny(e) {
  return !consentAskCanReachUser(e) || getToolPermissionContext(e).shouldAvoidPermissionPrompts === !0;
}
function p(e) {
  return e === SKILL_TOOL_NAME || e.startsWith(`${SKILL_TOOL_NAME}(`) || e.startsWith(SKILL_TOOL_NAME_PREFIX);
}
function C(e) {
  let o = p,
    s = !1,
    t = {},
    i = {};
  for (let [n, r] of Object.entries(e.strippedDangerousRules ?? {}))
    if (r !== void 0) i[n] = [...r];
  for (let [n, r] of Object.entries(e.alwaysAllowRules)) {
    if (r === void 0) continue;
    let a = r.filter((l) => !o(l));
    if (a.length !== r.length) {
      s = !0;
      for (let l of r)
        if (o(l)) {
          let f = (i[n] ??= []);
          if (!f.includes(l)) f.push(l);
        }
    }
    t[n] = a;
  }
  if (!s) return e;
  return { ...e, alwaysAllowRules: t, strippedDangerousRules: i };
}
function unstripSkillInvocationAllowRules(e) {
  let o = e.strippedDangerousRules;
  if (o === void 0) return e;
  let s = !1,
    t = {};
  for (let [i, n] of Object.entries(e.alwaysAllowRules))
    if (n !== void 0) t[i] = n;
  for (let [i, n] of Object.entries(o)) {
    if (n === void 0) continue;
    for (let r of n) {
      if (!p(r)) continue;
      let a = [...(t[i] ?? [])];
      if (!a.includes(r)) (a.push(r), (t[i] = a), (s = !0));
    }
  }
  if (!s) return e;
  return { ...e, alwaysAllowRules: t };
}
function getToolPermissionContext(e) {
  let o = e.getAppState().toolPermissionContext,
    s = o !== void 0 && o.pollEventDeliveryGuard === !0;
  if (s) o = C(o);
  let t = e.permissionLayers;
  if (!t) return m(e, o);
  let i = t.findLast((n) => n.kind === "working_directory");
  for (let n of t)
    switch (n.kind) {
      case "allowed_tools":
        if (!s) o = d(o, [...n.allowedTools]);
        break;
      case "disallowed_tools":
        o = u(o, [...n.disallowedTools]);
        break;
      case "bash_command_clamp":
        o = {
          ...o,
          bashCommandClamps: [...(o.bashCommandClamps ?? []), n.rules],
        };
        break;
      case "avoid_prompts":
        if (!o.shouldAvoidPermissionPrompts)
          o = { ...o, shouldAvoidPermissionPrompts: !0 };
        break;
      case "sandbox_auto_allow_suspended":
        if (!o.sandboxAutoAllowSuspended)
          o = { ...o, sandboxAutoAllowSuspended: !0 };
        break;
      case "permission_mode": {
        if (
          n.mode === "bypassPermissions" &&
          (isBypassPermissionsModeDisabled() || !o.isBypassPermissionsModeAvailable)
        )
          break;
        o = { ...o, mode: n.mode };
        break;
      }
      case "working_directory":
        if (n === i && !o.additionalWorkingDirectories.has(n.directory))
          o = {
            ...o,
            additionalWorkingDirectories: new Map([
              ...o.additionalWorkingDirectories,
              [n.directory, { path: n.directory, source: "session" }],
            ]),
          };
        break;
      case "effort":
      case "model":
      case "max_thinking_tokens":
      case "flag_settings":
        break;
    }
  return m(e, o);
}
function m(e, o) {
  if (e.forRemoteExecution !== !0 || o === void 0) return o;
  let { blockReadsOutsideWorkingDirectories: s, ...t } = o;
  return o.mode === "acceptEdits" || o.mode === "bypassPermissions"
    ? { ...t, mode: "default" }
    : t;
}
function getEffortLayerOverride(e) {
  let o;
  if (!e) return o;
  for (let s of e) if (s.kind === "effort") o = s.effort;
  return o;
}
function getEffortValue(e) {
  return getEffortLayerOverride(e.permissionLayers) ?? Ya(e.getAppState(), c(e));
}
function c(e) {
  let o = e.options?.mainLoopModel;
  for (let s of e.permissionLayers ?? [])
    if (s.kind === "model") o = s.mainLoopModel;
  return o;
}
function getSessionEffort(e) {
  return e.getAppState().sessionEffort;
}
function getMainLoopModel(e) {
  return c(e) ?? e.options.mainLoopModel;
}
function getThinkingConfig(e) {
  let o = e.options.thinkingConfig;
  for (let s of e.permissionLayers ?? [])
    if (s.kind === "max_thinking_tokens") o = g(s.maxThinkingTokens);
  return o;
}
function g(e) {
  return e === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: e };
}
function getUltracodeRequested(e) {
  return e.getAppState().ultracode === !0;
}
function applyContextLayers(e, o) {
  if (o.length === 0) return e;
  let s = e.permissionLayers ? [...e.permissionLayers, ...o] : [...o],
    t;
  for (let r = o.length - 1; r >= 0; r--) {
    let a = o[r];
    if (a.kind === "model") {
      t = a.mainLoopModel;
      break;
    }
  }
  let i;
  for (let r = o.length - 1; r >= 0; r--) {
    let a = o[r];
    if (a.kind === "max_thinking_tokens") {
      i = g(a.maxThinkingTokens);
      break;
    }
  }
  return {
    ...e,
    permissionLayers: s,
    ...((t !== void 0 || i !== void 0) && {
      options: {
        ...e.options,
        ...(t !== void 0 && { mainLoopModel: t }),
        ...(i !== void 0 && { thinkingConfig: i }),
      },
    }),
  };
}
export {
  createCommandRulesGetAppState,
  SKILL_TOOL_NAME,
  SKILL_TOOL_NAME_PREFIX,
  buildSkillToolName,
  getAliasSkillToolNames,
  stripWideningPermissionLayers,
  getSuppressedClaudeAiConnectors,
  consentAskCanReachUser,
  planConsentMustDeny,
  artifactFilesConsentMarked,
  consentMustDeny,
  unstripSkillInvocationAllowRules,
  getToolPermissionContext,
  getEffortLayerOverride,
  getEffortValue,
  getSessionEffort,
  getMainLoopModel,
  getThinkingConfig,
  getUltracodeRequested,
  applyContextLayers,
};

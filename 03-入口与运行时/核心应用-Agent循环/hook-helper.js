// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.

// By using Claude Code, you agree that all code acceptance or rejection decisions you make,

// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,

// and may be used to improve Anthropic's products, including training models.

// You are responsible for reviewing any code suggestions before use.



// (c) Anthropic PBC. All rights reserved. Use is subject to Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.



// Version: 2.1.263

import { B, DL, H_, K, LL, Lx, bi, fZ, he, j, yae, zLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";

import { bxt } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";

import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";

import { getSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";

import { isCustomizationDisabled } from "../../02-功能模块/状态栏-主题/chunk-dqyc6kge.js";

import { areDeviceHooksStoodDown, getHooksConfigFromSnapshot, shouldAllowManagedHooksOnly, shouldDisableAllHooksIncludingManaged, shouldSkipSessionHooksByPolicy } from "../../02-功能模块/Skills技能/chunk-sapykxw7.js";

import { isSafeMode } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";

import { fromEnum, fromSanitizer_SANITIZER_OUTPUT_ONLY, pluginIdForAnalytics_GATE_EVALUATED } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";

import { escapeAllControlCharacters, escapeInvisibleCharacters, truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";

import { BELL_CHARACTER, ESCAPE_CHARACTER } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";

import { formatOscSequence, wrapOscForMultiplexer } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";

import { isConnectedMcpServer } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";

import { createLinkedAbortSignal } from "../../01-核心基础设施/核心工具-并发与缓存/linked-abort-signal.js";

import { getMcpTimeoutMs } from "../../02-功能模块/MCP客户端/mcp-timeouts.js";

import { invokeMcpToolRaw } from "../../02-功能模块/MCP客户端/chunk-7wm8t84g.js";

import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";

import { hookModelMatchKey, isProjectScopeTrustAccepted, isRecognizedModelKey } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";

import { expandToolNameAlias, getAliasNamesForToolName, getBuiltinLegacyToolNames, parsePermissionRule, resolveToolNameAlias } from "../../02-功能模块/权限系统/permission-rule-parsing.js";

import { basename as pms, join as Wp } from "path";

import { findToolByName } from "../../02-功能模块/权限系统/chunk-qdy0h5k2.js";

import { getPreferredShellToolName } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";

import { isDeepStrictEqual as _mr } from "util";

import { isOfficialMarketplace } from "../../02-功能模块/插件系统/chunk-33bdfgmx.js";

import { stableStringify } from "../../02-功能模块/编排-Workflow/chunk-0t0sve49.js";

import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";

import { Xd } from "./createTranscriptParser.Ryr.js";

import { getProjectDir, getSessionTranscriptPath } from "../../02-功能模块/Teammates团队/transcript-paths.js";

import { getModelEffortLevelOrDefault, getSessionEffortLevel, modelSupportsEffort } from "../../02-功能模块/权限系统/chunk-t3b7pg2x.js";

import { getScratchpadDir, isScratchpadEnabled } from "../../02-功能模块/记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";



var PPt = {
    ArtifactComments: "Artifact",
    ArtifactData: "Artifact",
    ArtifactCheck: "Artifact",
  },
  IPt = {
    Artifact: {
      comments: "ArtifactComments",
      reply: "ArtifactComments",
      resolve: "ArtifactComments",
      watch: "ArtifactComments",
      unwatch: "ArtifactComments",
      status: "ArtifactComments",
      resume_replies: "ArtifactComments",
      read_db: "ArtifactData",
      write_db: "ArtifactData",
      verify: "ArtifactCheck",
      preview: "ArtifactCheck",
    },
  };


function Ghe(e) {
  return Object.hasOwn(PPt, e) ? PPt[e] : void 0;
}


function MPt(e, t) {
  if (!Object.hasOwn(IPt, e)) return;
  let r = t?.action,
    o = IPt[e];
  return typeof r === "string" && Object.hasOwn(o, r) ? o[r] : void 0;
}


var Zhe = new Set([
  "Notification",
  "SessionStart",
  "SessionEnd",
  "Setup",
  "StopFailure",
  "SubagentStart",
  "PostToolUseFailure",
  "PostCompact",
  "PostModelSwitch",
  "PermissionDenied",
  "WorktreeCreate",
  "WorktreeRemove",
  "InstructionsLoaded",
  "CwdChanged",
  "FileChanged",
  "DirectoryAdded",
  "MessageDisplay",
  "StatusLine",
  "FileSuggestion",
]);


class KPt {
  servers = [];
  unsubscribe = void 0;
  clear() {
    ((this.servers = []), this.unsubscribe?.(), (this.unsubscribe = void 0));
  }
}


var qkr = new j(() => new KPt());


function DWe() {
  return bi(qkr);
}


function YPt(e, t) {
  if (Zhe.has(t)) return;
  try {
    let r = DWe();
    if (!r.servers.some((o) => o.name === e)) return;
    (NWe(r),
      (r.servers = r.servers.filter((o) => {
        if (o.name !== e) return !0;
        let d = bxt(o.pid, o.starttime, o.fs);
        return (
          logForDebugging(
            `tool cgroup: mcp server backing a ${t} hook was still capped at fire time; ${d ? "released now" : "release refused"}`,
          ),
          !d
        );
      })));
  } catch (r) {
    logForDebugging(`tool cgroup: mcp release at hook fire skipped (${r})`);
  }
}


function NWe(e) {
  e.servers = e.servers.filter(
    (t) => t.fs.readStarttime(t.pid) === t.starttime,
  );
}


function getPolicyEnabledPluginIds() {
  let e = getSettingsForSource("policySettings")?.enabledPlugins;
  if (!e) return null;
  let t = new Set();
  for (let [r, o] of Object.entries(e))
    if (o === !0 && r.includes("@")) t.add(r);
  return t.size > 0 ? t : null;
}


function D$(e) {
  if (isCustomizationDisabled("hooks")) return [];
  let t = LL()?.[e] ?? [];
  if (shouldDisableAllHooksIncludingManaged())
    return t.filter((p) => !("pluginRoot" in p) && !("deviceOwner" in p));
  let r = shouldAllowManagedHooksOnly(),
    o = r && !isSafeMode() ? getPolicyEnabledPluginIds() : null,
    d = areDeviceHooksStoodDown();
  return [
    ...(getHooksConfigFromSnapshot()?.[e] ?? []),
    ...(r ? [] : (yae()?.[e] ?? [])),
    ...t.filter(
      (p) =>
        !(r && "pluginRoot" in p && !o?.has(p.pluginId)) &&
        !(d && "deviceOwner" in p),
    ),
  ];
}


function kW(e) {
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(jsonStringify(Object.fromEntries(e)));
}


class gMt {
  pendingUsage = new Map();
  flushTimer = null;
  exitFlushesInFlight = [];
  flushStorageV5 = void 0;
}


var hMt = new j(() => new gMt());


class yMt {
  flushers = null;
  exitFlushRegistered = !1;
}


var I4 = new yMt();


var AEr = 60000;


function tM() {
  return hMt.of(B().host);
}


function recordPluginUsage(e) {
  let t = Date.now(),
    r = tM(),
    o = r.pendingUsage.get(e);
  if (o) (o.count++, (o.lastUsedAt = t));
  else r.pendingUsage.set(e, { count: 1, lastUsedAt: t });
  if (I4.flushers) bMt(r, I4.flushers);
}


function bMt(e, t) {
  if (!I4.exitFlushRegistered)
    ((I4.exitFlushRegistered = !0), process.on("exit", t.flushAtExit));
  if (!e.flushTimer)
    ((e.flushTimer = setTimeout(t.flush, AEr)), e.flushTimer.unref?.());
}


function qb(e) {
  return !("async" in e && e.async === !0);
}


function JR(e) {
  return "async" in e && e.async === !0;
}


function C2e(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "deviceOwner" in e &&
    typeof e.deviceOwner === "string"
  );
}


var Jd = 600000,
  D3e = 30000,
  NOTIFICATION_DELAY_MS = 6000,
  N3e = 30000,
  OYt = 5000;


var x5r = 60;


function formatScriptHookLabel(e) {
  let t =
      escapeInvisibleCharacters(e)
        .split(
          `
`,
        )
        .map((d) => d.trim())
        .find((d) => d.length > 0) ?? "",
    r = truncateToCodeUnits(t, x5r),
    o =
      r.length < t.length ||
      e.trim().includes(`
`);
  return `script: ${r}${o ? "\u2026" : ""}`;
}


function formatHookTarget(e) {
  switch (e.type) {
    case "command":
      return e.args ? [e.command, ...e.args].join(" ") : e.command;
    case "prompt":
      return e.prompt;
    case "agent":
      return e.prompt;
    case "http":
      return e.url;
    case "mcp_tool":
      return `${e.server}/${e.tool}`;
    case "script":
      return e.file !== void 0 ? escapeAllControlCharacters(e.file) : formatScriptHookLabel(e.script ?? "");
    case "callback":
      return "callback";
    case "function":
      return "function";
  }
}


var R5r = new Set([0, 1, 2, 9, 99, 777]),
  P5r = 4096;


function I5r(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) {
    let o = e.charCodeAt(r);
    if (o >= 32 && o !== 127 && !(o >= 128 && o <= 159)) t += e[r];
  }
  return t;
}


function M5r(e) {
  if (/^4;[0-4](;(100|\d{1,2})?)?$/.test(e)) return !0;
  return !/^[\s\u180e\u200b]*[+-]?\p{Nd}/u.test(e);
}


function O5r(e) {
  if (e.length === 0) return null;
  if (Buffer.byteLength(e, "utf8") > P5r) return null;
  let t = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === BELL_CHARACTER) {
      (t.push({ kind: "bel" }), r++);
      continue;
    }
    if (o !== ESCAPE_CHARACTER || e[r + 1] !== "]") return null;
    let d = r + 2,
      p = -1,
      _ = 0;
    while (d < e.length) {
      if (e[d] === BELL_CHARACTER) {
        ((p = d), (_ = 1));
        break;
      }
      if (e[d] === ESCAPE_CHARACTER && e[d + 1] === "\\") {
        ((p = d), (_ = 2));
        break;
      }
      if (e[d] === ESCAPE_CHARACTER) return null;
      d++;
    }
    if (p === -1) return null;
    let E = e.slice(r + 2, p),
      C = E.indexOf(";"),
      I = C === -1 ? E : E.slice(0, C),
      D = C === -1 ? "" : E.slice(C + 1);
    if (!/^\d+$/.test(I)) return null;
    let N = Number(I);
    if (!R5r.has(N)) return null;
    let F = I5r(D);
    if (N === 9 && !M5r(F)) return null;
    (t.push({ kind: "osc", ps: N, payload: F }), (r = p + _));
  }
  return t;
}


function Z3e(e) {
  let t = O5r(e);
  if (t === null) return null;
  return t
    .map((r) => (r.kind === "bel" ? BELL_CHARACTER : wrapOscForMultiplexer(formatOscSequence(r.ps, r.payload))))
    .join("");
}


class lXt {
  writers = [];
  register(e) {
    this.writers.push(e);
  }
  unregister(e) {
    let t = this.writers.lastIndexOf(e);
    if (t >= 0) this.writers.splice(t, 1);
  }
  reset() {
    this.writers.length = 0;
  }
  write(e) {
    this.writers.at(-1)?.(e);
  }
}


var D5r = new j(() => new lXt());


function KSe() {
  return D5r.of(B().host);
}


function eYe(e) {
  KSe().write(e);
}


var unt = new Set([
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PermissionRequest",
    "PermissionDenied",
  ]),
  Xgo = new Set([...unt, "PostToolBatch"]);


function nms(e, t) {
  let r = (d) => {
      let p = t;
      for (let _ of d.split(".")) {
        if (p == null || typeof p !== "object") return;
        p = p[_];
      }
      return p;
    },
    o = (d) => {
      if (typeof d === "string")
        return d.replace(/\$\{([a-zA-Z_][a-zA-Z0-9_.]*)\}/g, (p, _) => {
          let E = r(_);
          if (E === void 0 || E === null) return "";
          return typeof E === "object" ? jsonStringify(E) : String(E);
        });
      if (Array.isArray(d)) return d.map(o);
      if (d !== null && typeof d === "object") {
        let p = {};
        for (let [_, E] of Object.entries(d)) p[_] = o(E);
        return p;
      }
      return d;
    };
  return o(e);
}


async function wvt(e, t, r, o, d, p = Jd) {
  YPt(e.server, t);
  let _ = o ?? DL();
  if (_ === void 0) {
    let F = `mcp_tool hooks are not available for the '${t}' hook event (no MCP client context)`;
    return (
      logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${F}`, { level: "warn" }),
      { ok: !1, body: "", error: F }
    );
  }
  let E = _.find((F) => F.name === e.server);
  if (!E || !isConnectedMcpServer(E)) {
    let F = `MCP server '${e.server}' not connected`;
    return (
      logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${F}`, { level: "warn" }),
      { ok: !1, body: "", error: F }
    );
  }
  let C = e.input ? nms(e.input, r) : {},
    I = e.timeout ? e.timeout * 1000 : p,
    { signal: D, cleanup: N } = createLinkedAbortSignal(d, { timeoutMs: I });
  try {
    logForDebugging(
      `Hooks: mcp_tool calling ${e.server}/${e.tool} with ${Object.keys(C).length} arg(s)`,
    );
    let F = Lx();
    if (!F) {
      N();
      let ue = `MCP server '${e.server}' not connected`;
      return (
        logForDebugging(`Hooks: mcp_tool hook skipped \u2014 ${ue}`, { level: "warn" }),
        { ok: !1, body: "", error: ue }
      );
    }
    let U = await F(E, {
        signal: d,
        timeoutMs: Math.min(I, getMcpTimeoutMs()),
        context: "mcp_tool hook",
      }),
      V = await invokeMcpToolRaw(
        U,
        { name: e.tool, arguments: C },
        { signal: D, timeout: I },
      );
    N();
    let re = Array.isArray(V.content)
      ? V.content.map((ue) => (ue.type === "text" ? ue.text : `[${ue.type}]`))
          .join(`
`)
      : "";
    if (V.isError)
      return { ok: !1, body: re, error: re || "MCP tool returned an error" };
    return { ok: !0, body: re };
  } catch (F) {
    if ((N(), D.aborted)) return { ok: !1, body: "", aborted: !0 };
    let U = l(F);
    return (
      logForDebugging(`Hooks: mcp_tool hook error: ${U}`, { level: "error" }),
      { ok: !1, body: "", error: U }
    );
  }
}


function shouldSkipHookDueToTrust() {
  return !isProjectScopeTrustAccepted();
}


var _ms = /^[A-Za-z0-9][A-Za-z0-9_.-]{0,255}$/;


function Tms(e, t, r) {
  if (!(t ? /^[a-zA-Z0-9_|, -]+$/ : /^[a-zA-Z0-9_|]+$/).test(e)) return;
  return e
    .split(t ? /[|,]/ : "|")
    .map((d) => d.trim())
    .filter(Boolean)
    .flatMap((d) => expandToolNameAlias(resolveToolNameAlias(d), r));
}


function Tmr(e, t) {
  if (e !== "PreModelSwitch" && e !== "PostModelSwitch") return t;
  let r = t.replace(/\[[12]m\](?=\s*(?:[|,]|$))/gi, "");
  return r.trim() === "" ? t : r;
}


function vmr(e) {
  switch (e.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return e.tool_name;
    case "UserPromptExpansion":
      return e.command_name;
    case "SessionStart":
      return e.source;
    case "Setup":
      return e.trigger;
    case "PreCompact":
    case "PostCompact":
      return e.trigger;
    case "PreModelSwitch": {
      let t = hookModelMatchKey(e.to_model);
      return isRecognizedModelKey(t) ? t : void 0;
    }
    case "PostModelSwitch": {
      let t = hookModelMatchKey(e.to_model);
      return isRecognizedModelKey(t) ? t : void 0;
    }
    case "Notification":
      return e.notification_type;
    case "SessionEnd":
      return e.reason;
    case "StopFailure":
      return e.error;
    case "SubagentStart":
      return e.agent_type;
    case "SubagentStop":
      return e.agent_type;
    case "TeammateIdle":
    case "TaskCreated":
    case "TaskCompleted":
      return;
    case "Elicitation":
      return e.mcp_server_name;
    case "ElicitationResult":
      return e.mcp_server_name;
    case "ConfigChange":
      return e.source;
    case "DirectoryAdded":
      return e.source;
    case "InstructionsLoaded":
      return e.load_reason;
    case "FileChanged":
      return pms(e.file_path);
    default:
      return;
  }
}


var Amr = new Set([
  "PreToolUse",
  "PostToolUse",
  "PostToolUseFailure",
  "PermissionRequest",
  "PermissionDenied",
  "UserPromptExpansion",
  "SessionStart",
  "SessionEnd",
  "Setup",
  "PreCompact",
  "PostCompact",
  "PreModelSwitch",
  "PostModelSwitch",
  "Notification",
  "SubagentStart",
  "SubagentStop",
  "Elicitation",
  "ElicitationResult",
  "ConfigChange",
  "InstructionsLoaded",
  "DirectoryAdded",
]);


function vms(e) {
  if (!/^[a-zA-Z0-9_|, -]+$/.test(e)) return !1;
  return e
    .split(/[|,]/)
    .map((t) => t.trim())
    .some((t) => t.startsWith("mcp__") && !t.slice(5).includes("__"));
}


function Cms(e, t) {
  if (!t || !unt.has(e)) return;
  let r = zLn();
  if (r.has(t) || !vms(t)) return;
  r.add(t);
  let o =
    t
      .split(/[|,]/)
      .map((d) => d.trim())
      .find((d) => d.startsWith("mcp__") && !d.slice(5).includes("__")) ?? t;
  logForDebugging(
    `Hook matcher \`${o}\` matches no tool (it is compared as an exact string). To match all tools from this server, use \`${o}__.*\`. See CHANGELOG v2.1.195.`,
    { level: "warn" },
  );
}


var xms = /^\^?(?:\((?:\?:)?)?\^?\w+\$?(?:\|\^?\w+\$?)*\)?\$?$/;


function Ams(e, t) {
  let r = t === void 0 ? void 0 : findToolByName(t, e);
  if (r !== void 0)
    return r.mcpInfo === void 0 ? r.familyParentToolName : void 0;
  return Ghe(e);
}


function Rmr(e, t, r) {
  let o = [],
    d = Ams(e, t);
  if (d !== void 0) o.push(d);
  let p = t === void 0 ? void 0 : findToolByName(t, e);
  if (p !== void 0) {
    if (p.mcpInfo === void 0) o.push(...(p.hookMatcherFamilyNames?.(r) ?? []));
  } else {
    let _ = MPt(e, r);
    if (_ !== void 0) o.push(_);
  }
  return o;
}


function Mmr(e, t, r, o, d, p) {
  if (!t || t === "*") return !0;
  let _ = Tms(t, r, o),
    E = Rmr(e, d, p);
  if (_ !== void 0) return _.includes(e) || E.some((C) => _.includes(C));
  try {
    let C = new RegExp(t);
    if (C.test(e)) return !0;
    if (xms.test(t) && E.some((I) => C.test(I))) return !0;
    for (let I of getBuiltinLegacyToolNames(e)) if (C.test(I)) return !0;
    for (let I of getAliasNamesForToolName(e, o)) if (C.test(I)) return !0;
    return !1;
  } catch {
    return (logForDebugging(`Invalid regex pattern in hook matcher: ${t}`), !1);
  }
}


async function Rms(e, t) {
  let r = await Lmr(e, t);
  if (r === void 0) return;
  let { names: o, patternMatcher: d } = r;
  return (p) => {
    let _ = parsePermissionRule(p);
    if (!o.includes(resolveToolNameAlias(_.toolName))) return !1;
    if (!_.ruleContent) return !0;
    return d ? d(_.ruleContent) : !1;
  };
}


async function Lmr(e, t) {
  if (
    e.hook_event_name !== "PreToolUse" &&
    e.hook_event_name !== "PostToolUse" &&
    e.hook_event_name !== "PostToolUseFailure" &&
    e.hook_event_name !== "PermissionRequest" &&
    e.hook_event_name !== "PermissionDenied"
  )
    return;
  let r = resolveToolNameAlias(e.tool_name),
    o = t && findToolByName(t, e.tool_name),
    d = o?.inputSchema.safeParse(e.tool_input),
    p =
      d?.success && o?.preparePermissionMatcher
        ? await o.preparePermissionMatcher(d.data)
        : void 0;
  return {
    names: [r, ...Rmr(r, t, e.tool_input)],
    patternMatcher: p,
    judgeable: d?.success === !0,
  };
}


function Ej(e) {
  switch (e.type) {
    case "command":
      return `command\x00${e.shell ?? getPreferredShellToolName()}\x00${e.command}\x00${jsonStringify(e.args ?? null)}\x00${e.if ?? ""}`;
    case "http":
      return `http\x00${e.url}\x00${e.if ?? ""}`;
    case "mcp_tool":
      return `mcp_tool\x00${e.server}\x00${e.tool}\x00${jsonStringify(e.input ?? {})}\x00${e.if ?? ""}`;
    case "script":
      return `script\x00${jsonStringify(e.script ?? null)}\x00${jsonStringify(e.file ?? null)}\x00${e.if ?? ""}`;
    default:
      return;
  }
}


function Lms(e, t) {
  if (
    e.type === "callback" ||
    e.type === "function" ||
    t.type === "callback" ||
    t.type === "function"
  )
    return e === t;
  let r = Ej(e);
  return r !== void 0 ? r === Ej(t) : _mr(e, t);
}


function Fms(e, t, r, o) {
  if (e.type === "callback" || e.type === "function") return;
  let d = Ej(e);
  if (d === void 0) return;
  for (let p of [...o].reverse())
    for (let _ of getSettingsForSource(p)?.hooks?.[t] ?? []) {
      if (!r.includes(_.matcher ?? "")) continue;
      let E = _.hooks.find((C) => Ej(C) === d);
      if (E !== void 0) return E;
    }
  return;
}


function Bmr(e) {
  return e.hook.type === "callback" && e.hook.internal === !0;
}


function xZ(e, t) {
  return `${e.pluginRoot ?? e.skillRoot ?? ""}\x00${t}`;
}


function z1e(e) {
  let t = e.lastIndexOf("@");
  if (t <= 0) return !1;
  let r = e.slice(t + 1);
  if (isOfficialMarketplace(r)) return !0;
  return !1;
}


function Umr(e) {
  let t = e.filter((o) => o.pluginId);
  if (t.length === 0) return;
  let r = new Map();
  for (let o of t) {
    let d = pluginIdForAnalytics_GATE_EVALUATED(o.pluginId, z1e(o.pluginId));
    r.set(d, (r.get(d) ?? 0) + 1);
  }
  return r;
}


function jmr(e) {
  let t = new Map();
  for (let r of e) {
    let o = fromEnum(r.hook.type);
    t.set(o, (t.get(o) ?? 0) + 1);
  }
  return t;
}


function qms(e, t) {
  let r = new Set((getSettingsForSource("policySettings")?.hooks?.[t] ?? []).map((o) => stableStringify(o)));
  return e.filter((o) => !r.has(stableStringify(o)));
}


function W1e(e, t, r, o) {
  if (o?.managedHooksOnly) {
    let E = getSettingsForSource("policySettings");
    if (E?.disableAllHooks === !0) return [];
    return [...(E?.hooks?.[r] ?? [])];
  }
  let d = o?.managedHooksExcluded ? qms(D$(r), r) : [...D$(r)],
    p = typeof t === "string" ? [t] : t;
  if (e === void 0 || shouldSkipSessionHooksByPolicy()) return d;
  for (let E of p) {
    let C = e.get(E, r).get(r);
    if (C) d.push(...C);
  }
  let _ = p[0];
  if (_ !== void 0) {
    let E = e.getFunctionHooks(_, r).get(r);
    if (E) d.push(...E);
  }
  return d;
}


async function Wmr(e, t, r, o, d, p) {
  try {
    let _ = W1e(e, t, r, p),
      E = vmr(o),
      C = Amr.has(o.hook_event_name);
    for (let je of _) Cms(r, je.matcher);
    (logForDebugging(`Getting matching hook commands for ${r} with query: ${E}`, {
      level: "verbose",
    }),
      logForDebugging(`Found ${_.length} hook matchers in settings`, { level: "verbose" }));
    let I = p?.getToolAliases?.(),
      N = (
        E
          ? _.filter(
              (je) =>
                !je.matcher ||
                Mmr(
                  E,
                  Tmr(r, je.matcher),
                  C,
                  I,
                  d,
                  "tool_input" in o ? o.tool_input : void 0,
                ),
            )
          : _
      ).flatMap((je) => {
        let Ke = "pluginRoot" in je ? je.pluginRoot : void 0,
          ct = "pluginId" in je ? je.pluginId : void 0,
          vt = "skillRoot" in je ? je.skillRoot : void 0,
          ut = Ke
            ? "pluginName" in je
              ? `plugin:${je.pluginName}`
              : "plugin"
            : vt
              ? "skillName" in je
                ? `skill:${je.skillName}`
                : "skill"
              : "settings",
          Wt = !je.matcher || je.matcher === "*" || je.matcher === ".*",
          en = C2e(je);
        return je.hooks.map((tn) => ({
          hook: tn,
          pluginRoot: Ke,
          pluginId: ct,
          skillRoot: vt,
          hookSource: ut,
          matcherIsMatchAll: Wt,
          ...(p?.recordMatchers && { matcherTexts: [je.matcher ?? ""] }),
          ...(en && { deviceForwarded: en }),
        }));
      });
    if (
      N.every(
        (je) => je.hook.type === "callback" || je.hook.type === "function",
      )
    )
      return N;
    let F = (je) => je.if ?? "",
      U = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "command").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      V = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "prompt").map((je) => [
            xZ(je, `${je.hook.prompt}\x00${F(je.hook)}`),
            je,
          ]),
        ).values(),
      ),
      re = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "agent").map((je) => [
            xZ(je, `${je.hook.prompt}\x00${F(je.hook)}`),
            je,
          ]),
        ).values(),
      ),
      ue = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "http").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      de = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "mcp_tool").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      _e = Array.from(
        new Map(
          N.filter((je) => je.hook.type === "script").map((je) => [
            xZ(je, Ej(je.hook) ?? ""),
            je,
          ]),
        ).values(),
      ),
      Se = N.filter((je) => je.hook.type === "callback"),
      ve = N.filter((je) => je.hook.type === "function"),
      Me = (je) => {
        if (p?.recordMatchers !== !0) return je;
        try {
          let Ke = dedupe(
              N.filter(
                (vt) =>
                  vt.pluginRoot === je.pluginRoot &&
                  vt.skillRoot === je.skillRoot &&
                  Lms(vt.hook, je.hook),
              ).flatMap((vt) => vt.matcherTexts ?? []),
            ),
            ct =
              je.pluginRoot === void 0 && je.skillRoot === void 0
                ? Fms(je.hook, r, Ke, p.ownSources ?? [])
                : void 0;
          return { ...je, matcherTexts: Ke, hook: ct ?? je.hook };
        } catch (Ke) {
          return (
            logForDebugging(
              `Hooks: could not establish whose settings define a hook (${l(Ke)}); treating it as the project's`,
            ),
            { ...je, matcherTexts: [] }
          );
        }
      },
      xe = [
        ...U.map(Me),
        ...V,
        ...re,
        ...ue.map(Me),
        ...de.map(Me),
        ..._e.map(Me),
        ...Se,
        ...ve,
      ],
      Ne = xe.some(
        (je) =>
          (je.hook.type === "command" ||
            je.hook.type === "prompt" ||
            je.hook.type === "agent" ||
            je.hook.type === "http" ||
            je.hook.type === "mcp_tool" ||
            je.hook.type === "script") &&
          je.hook.if,
      )
        ? await Rms(o, d)
        : void 0,
      De = xe.filter((je) => {
        if (
          je.hook.type !== "command" &&
          je.hook.type !== "prompt" &&
          je.hook.type !== "agent" &&
          je.hook.type !== "http" &&
          je.hook.type !== "mcp_tool" &&
          je.hook.type !== "script"
        )
          return !0;
        let Ke = je.hook.if;
        if (!Ke) return !0;
        if (!Ne)
          return (
            logForDebugging(
              `Hook if condition "${Ke}" cannot be evaluated for non-tool event ${o.hook_event_name}`,
            ),
            !1
          );
        if (Ne(Ke)) return !0;
        return (
          logForDebugging(`Skipping hook due to if condition "${Ke}" not matching`),
          !1
        );
      }),
      He =
        r === "SessionStart" || r === "Setup"
          ? De.filter((je) => {
              if (je.hook.type === "http")
                return (
                  logForDebugging(
                    `Skipping HTTP hook ${je.hook.url} \u2014 HTTP hooks are not supported for ${r}`,
                  ),
                  !1
                );
              return !0;
            })
          : De;
    return (
      logForDebugging(
        `Matched ${He.length} unique hooks for query "${E || "no match query"}" (${N.length} before deduplication)`,
        { level: "verbose" },
      ),
      He
    );
  } catch {
    return [];
  }
}


function H1e(e, t) {
  if (!e || !qb(e) || !e.terminalSequence) return;
  let r = Z3e(e.terminalSequence);
  if (r !== null) eYe(r);
  else
    logForDebugging(
      `Hook ${t} returned a terminalSequence that was rejected by the allowlist (only OSC 0/1/2/9/99/777 and BEL are permitted, and OSC 9 bodies may not begin with a digit unless in the 9;4 progress form)`,
    );
}


function getMaterializedSessionFile() {
  return Xd().project?.sessionFile ?? null;
}


function getTranscriptPathForSession(e) {
  if (e === K()) return getMaterializedSessionFile() ?? getSessionTranscriptPath();
  let t = getProjectDir(he());
  return Wp(t, `${e}.jsonl`);
}


function createBaseHookInput(e, t, r, o) { // good, used 33 times
  let d = o?.agentType ?? H_(),
    p = o?.options?.mainLoopModel,
    _ = getSessionEffortLevel(o?.getAppState?.() ?? {}, p);
  for (let I of o?.permissionLayers ?? [])
    if (I.kind === "effort" && I.effort !== void 0) _ = I.effort;
  let E = p && o?.getAppState && modelSupportsEffort(p) ? { level: getModelEffortLevelOrDefault(p, _) } : void 0,
    C = o?.remoteCall;
  if (C !== void 0)
    return {
      session_id: `served:${(_ms.test(C.origin.callerSessionId ?? "") ? C.origin.callerSessionId : void 0) ?? "unknown"}`,
      transcript_path: "",
      cwd: t,
      permission_mode: r,
      agent_id: o?.agentId,
      effort: E,
    };
  return {
    session_id: e.id,
    transcript_path: getTranscriptPathForSession(e.id),
    cwd: t,
    scratchpad_dir: isScratchpadEnabled() ? (getScratchpadDir(e.id) ?? void 0) : void 0,
    prompt_id: fZ() ?? void 0,
    permission_mode: r,
    agent_id: o?.agentId,
    agent_type: d,
    effort: E,
  };
}




export { Amr, Bmr, C2e, D$, D3e, DWe, Ghe, H1e, I4, JR, Jd, KSe, Lmr, Mmr, N3e, NOTIFICATION_DELAY_MS, NWe, OYt, Tmr, Umr, W1e, Wmr, Xgo, Z3e, Zhe, bMt, createBaseHookInput, eYe, formatHookTarget, formatScriptHookLabel, getMaterializedSessionFile, getPolicyEnabledPluginIds, getTranscriptPathForSession, jmr, kW, qb, recordPluginUsage, shouldSkipHookDueToTrust, tM, vmr, wvt, z1e };


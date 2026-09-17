// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as RT } from "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { satisfiesSemverRange, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { isRunningWithBun, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { l, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, registerCleanup, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, beforeFirst, normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { isCustomizationDisabled } from "../状态栏-主题/chunk-dqyc6kge.js";
import { s, Uf, v, c, $e, fe, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
function parseKeybindingKey(e) {
  let r = e.split("+"),
    t = { key: "", ctrl: !1, alt: !1, shift: !1, meta: !1, super: !1 };
  for (let o of r) {
    let p = o.toLowerCase();
    switch (p) {
      case "ctrl":
      case "control":
        t.ctrl = !0;
        break;
      case "alt":
      case "opt":
      case "option":
        t.alt = !0;
        break;
      case "shift":
        t.shift = !0;
        break;
      case "meta":
        t.meta = !0;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        t.super = !0;
        break;
      case "esc":
        t.key = "escape";
        break;
      case "return":
        t.key = "enter";
        break;
      case "del":
        t.key = "delete";
        break;
      case "space":
        t.key = " ";
        break;
      case "\u2191":
        t.key = "up";
        break;
      case "\u2193":
        t.key = "down";
        break;
      case "\u2190":
        t.key = "left";
        break;
      case "\u2192":
        t.key = "right";
        break;
      default:
        t.key = p;
        break;
    }
  }
  return t;
}
function parseKeybindingChord(e) {
  if (e === " ") return [parseKeybindingKey("space")];
  return e.trim().split(/\s+/).map(parseKeybindingKey);
}
function ce(e) {
  let r = [];
  if (e.ctrl) r.push("ctrl");
  if (e.alt) r.push("alt");
  if (e.shift) r.push("shift");
  if (e.meta) r.push("meta");
  if (e.super) r.push("cmd");
  let t = V(e.key);
  return (r.push(t), r.join("+"));
}
function V(e) {
  switch (e) {
    case "escape":
      return "Esc";
    case " ":
      return "space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return e;
  }
}
function formatKeybindingChordText(e) {
  return e.map(ce).join(" ");
}
function formatKeybindingKeyForPlatform(e, r = "linux") {
  let t = [];
  if (e.ctrl) t.push("ctrl");
  if (e.alt || e.meta) t.push(r === "macos" ? "opt" : "alt");
  if (e.shift) t.push("shift");
  if (e.super) t.push(r === "macos" ? "cmd" : "super");
  let o = V(e.key);
  return (t.push(o), t.join("+"));
}
function formatKeybindingChordForPlatform(e, r = "linux") {
  return e.map((t) => formatKeybindingKeyForPlatform(t, r)).join(" ");
}
function expandKeybindingBlocks(e) {
  let r = [];
  for (let t of e)
    for (let [o, p] of Object.entries(t.bindings))
      r.push({ chord: parseKeybindingChord(o), action: p, context: t.context });
  return r;
}
import { readFileSync } from "fs";
import { readFile, stat as Ie } from "fs/promises";
import { dirname, join as Oe } from "path";
var B = getCurrentPlatform(),
  le = B === "windows" || B === "wsl",
  de = le ? "alt+v" : "ctrl+v",
  ge =
    B !== "windows" ||
    (isRunningWithBun()
      ? satisfiesSemverRange("1.4.1", ">=1.2.23")
      : satisfiesSemverRange(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0")),
  q = ge ? "shift+tab" : "meta+m",
  DEFAULT_KEYBINDINGS = [
    {
      context: "Global",
      bindings: {
        "ctrl+c": "app:interrupt",
        "ctrl+d": "app:exit",
        "ctrl+t": "app:toggleTodos",
        "ctrl+o": "app:toggleTranscript",
        "ctrl+shift+b": "app:toggleBrief",
        "ctrl+r": "history:search",
        "ctrl+up": "app:diffFileListUp",
        "ctrl+down": "app:diffFileListDown",
        "meta+up": "app:diffFileListUp",
        "meta+down": "app:diffFileListDown",
        ...{},
        ...{ "ctrl+]": "app:openArtifact" },
        ...{},
      },
    },
    { context: "DiffPanel", bindings: { "ctrl+x b": "app:cycleDiffBase" } },
    {
      context: "Chat",
      bindings: {
        escape: "chat:cancel",
        "ctrl+l": "chat:clearInput",
        "cmd+k": "chat:clearScreen",
        "ctrl+x ctrl+k": "chat:killAgents",
        ...{ [q]: "chat:cycleMode" },
        ...{},
        "meta+p": "chat:modelPicker",
        "meta+o": "chat:fastMode",
        "meta+t": "chat:thinkingToggle",
        "meta+w": "chat:workflowKeywordToggle",
        enter: "chat:submit",
        "ctrl+x enter": "chat:queueSubmit",
        "ctrl+j": "chat:newline",
        up: "history:previous",
        down: "history:next",
        "ctrl+_": "chat:undo",
        "ctrl+-": "chat:undo",
        "ctrl+shift+-": "chat:undo",
        "ctrl+shift+_": "chat:undo",
        "ctrl+x ctrl+e": "chat:externalEditor",
        "ctrl+x ctrl+a": "abovePrompt:toggle",
        "ctrl+x tab": "abovePrompt:focus",
        "ctrl+g": "chat:externalEditor",
        "ctrl+s": "chat:stash",
        [de]: "chat:imagePaste",
        ...(B === "wsl" && { "ctrl+v": "chat:imagePaste" }),
        space: "voice:pushToTalk",
      },
    },
    {
      context: "Autocomplete",
      bindings: {
        tab: "autocomplete:accept",
        escape: "autocomplete:dismiss",
        up: "autocomplete:previous",
        down: "autocomplete:next",
      },
    },
    {
      context: "Settings",
      bindings: {
        escape: "confirm:no",
        up: "select:previous",
        down: "select:next",
        k: "select:previous",
        j: "select:next",
        "ctrl+p": "select:previous",
        "ctrl+n": "select:next",
        space: "select:accept",
        enter: "select:accept",
        "/": "settings:search",
        r: "settings:retry",
        d: "settings:periodDay",
        w: "settings:periodWeek",
        t: "settings:sortByTokens",
        "ctrl+u": "scroll:halfPageUp",
        "ctrl+d": "scroll:halfPageDown",
      },
    },
    {
      context: "Confirmation",
      bindings: {
        y: "confirm:yes",
        n: "confirm:no",
        enter: "confirm:yes",
        escape: "confirm:no",
        up: "confirm:previous",
        down: "confirm:next",
        tab: "confirm:nextField",
        space: "confirm:toggle",
        [q]: "confirm:cycleMode",
      },
    },
    {
      context: "Tabs",
      bindings: {
        tab: "tabs:next",
        "shift+tab": "tabs:previous",
        right: "tabs:next",
        left: "tabs:previous",
      },
    },
    {
      context: "Transcript",
      bindings: {
        "ctrl+e": "transcript:toggleShowAll",
        "ctrl+c": "transcript:exit",
        escape: "transcript:exit",
        q: "transcript:exit",
        "ctrl+u": "scroll:halfPageUp",
        "ctrl+d": "scroll:halfPageDown",
        "ctrl+b": "scroll:fullPageUp",
        "ctrl+f": "scroll:fullPageDown",
        "ctrl+n": "scroll:lineDown",
        "ctrl+p": "scroll:lineUp",
        g: "scroll:top",
        "shift+g": "scroll:bottom",
        j: "scroll:lineDown",
        k: "scroll:lineUp",
        space: "scroll:fullPageDown",
        b: "scroll:fullPageUp",
        up: "scroll:lineUp",
        down: "scroll:lineDown",
        home: "scroll:top",
        end: "scroll:bottom",
      },
    },
    {
      context: "HistorySearch",
      bindings: {
        "ctrl+r": "historySearch:next",
        escape: "historySearch:accept",
        tab: "historySearch:accept",
        "ctrl+c": "historySearch:cancel",
        enter: "historySearch:execute",
        "ctrl+s": "historySearch:cycleScope",
      },
    },
    {
      context: "Task",
      bindings: {
        "ctrl+x ctrl+b": "task:background",
        "ctrl+b": "task:background",
      },
    },
    {
      context: "ThemePicker",
      bindings: {
        "ctrl+t": "theme:toggleSyntaxHighlighting",
        "ctrl+e": "theme:editCustom",
      },
    },
    {
      context: "Scroll",
      bindings: {
        pageup: "scroll:pageUp",
        pagedown: "scroll:pageDown",
        wheelup: "scroll:lineUp",
        wheeldown: "scroll:lineDown",
        "ctrl+home": "scroll:top",
        "ctrl+end": "scroll:bottom",
        "ctrl+shift+c": "selection:copy",
        "cmd+c": "selection:copy",
        "shift+left": "selection:extendLeft",
        "shift+right": "selection:extendRight",
        "shift+up": "selection:extendUp",
        "shift+down": "selection:extendDown",
        "shift+home": "selection:extendLineStart",
        "shift+end": "selection:extendLineEnd",
      },
    },
    { context: "Help", bindings: { escape: "help:dismiss" } },
    {
      context: "Attachments",
      bindings: {
        right: "attachments:next",
        left: "attachments:previous",
        backspace: "attachments:remove",
        delete: "attachments:remove",
        down: "attachments:exit",
        escape: "attachments:exit",
      },
    },
    {
      context: "Footer",
      bindings: {
        up: "footer:up",
        "ctrl+p": "footer:up",
        down: "footer:down",
        "ctrl+n": "footer:down",
        right: "footer:next",
        left: "footer:previous",
        enter: "footer:openSelected",
        escape: "footer:clearSelection",
        x: "footer:close",
        backspace: "footer:dismiss",
        delete: "footer:dismiss",
      },
    },
    {
      context: "AbovePrompt",
      bindings: {
        tab: "abovePrompt:next",
        right: "abovePrompt:next",
        down: "abovePrompt:next",
        "shift+tab": "abovePrompt:previous",
        left: "abovePrompt:previous",
        up: "abovePrompt:previous",
        enter: "abovePrompt:press",
        space: "abovePrompt:press",
        escape: "abovePrompt:leave",
      },
    },
    {
      context: "AbovePromptInput",
      bindings: {
        tab: "abovePrompt:next",
        down: "abovePrompt:next",
        "shift+tab": "abovePrompt:previous",
        up: "abovePrompt:previous",
        enter: "abovePrompt:press",
        escape: "abovePrompt:leave",
      },
    },
    {
      context: "AbovePromptSelect",
      bindings: {
        tab: "abovePrompt:next",
        "shift+tab": "abovePrompt:previous",
        down: "abovePrompt:highlightNext",
        up: "abovePrompt:highlightPrevious",
        enter: "abovePrompt:press",
        escape: "abovePrompt:leave",
      },
    },
    {
      context: "MessageSelector",
      bindings: {
        up: "messageSelector:up",
        down: "messageSelector:down",
        k: "messageSelector:up",
        j: "messageSelector:down",
        "ctrl+p": "messageSelector:up",
        "ctrl+n": "messageSelector:down",
        "ctrl+up": "messageSelector:top",
        "shift+up": "messageSelector:top",
        "meta+up": "messageSelector:top",
        "shift+k": "messageSelector:top",
        "ctrl+down": "messageSelector:bottom",
        "shift+down": "messageSelector:bottom",
        "meta+down": "messageSelector:bottom",
        "shift+j": "messageSelector:bottom",
        enter: "messageSelector:select",
      },
    },
    {
      context: "DiffDialog",
      bindings: {
        escape: "diff:dismiss",
        left: "diff:previousSource",
        right: "diff:nextSource",
        up: "diff:previousFile",
        down: "diff:nextFile",
        enter: "diff:viewDetails",
        j: "diff:nextFile",
        k: "diff:previousFile",
        pageup: "scroll:pageUp",
        pagedown: "scroll:pageDown",
        space: "scroll:fullPageDown",
        "shift+space": "scroll:fullPageUp",
        b: "scroll:fullPageUp",
        g: "scroll:top",
        "shift+g": "scroll:bottom",
        home: "scroll:top",
        end: "scroll:bottom",
      },
    },
    {
      context: "ModelPicker",
      bindings: {
        left: "modelPicker:decreaseEffort",
        right: "modelPicker:increaseEffort",
        s: "modelPicker:thisSessionOnly",
      },
    },
    {
      context: "EffortSlider",
      bindings: { s: "effortSlider:thisSessionOnly" },
    },
    {
      context: "Select",
      bindings: {
        up: "select:previous",
        down: "select:next",
        j: "select:next",
        k: "select:previous",
        "ctrl+n": "select:next",
        "ctrl+p": "select:previous",
        pageup: "select:pageUp",
        pagedown: "select:pageDown",
        home: "select:first",
        end: "select:last",
        enter: "select:accept",
        escape: "select:cancel",
      },
    },
    {
      context: "Plugin",
      bindings: {
        space: "plugin:toggle",
        i: "plugin:install",
        f: "plugin:favorite",
      },
    },
    {
      context: "Agents",
      bindings: { "ctrl+s": "agents:switchView", "ctrl+t": "agents:togglePin" },
    },
  ];
var KEYBINDING_CONTEXT_NAMES = [
    "Global",
    "Chat",
    "Autocomplete",
    "Confirmation",
    "Help",
    "ProactivityMenu",
    "Transcript",
    "HistorySearch",
    "Task",
    "ThemePicker",
    "Settings",
    "Tabs",
    "Attachments",
    "Footer",
    "AbovePrompt",
    "AbovePromptInput",
    "AbovePromptSelect",
    "MessageSelector",
    "DiffDialog",
    "DiffPanel",
    "ModelPicker",
    "EffortSlider",
    "Select",
    "Plugin",
    "Scroll",
    "Agents",
  ],
  ue = new Set(KEYBINDING_CONTEXT_NAMES);
function isKeybindingContextName(e) {
  return ue.has(e);
}
var KEYBINDING_CONTEXT_DESCRIPTIONS = {
    Global: "Active everywhere, regardless of focus",
    Chat: "When the chat input is focused",
    Autocomplete: "When autocomplete menu is visible",
    Confirmation: "When a confirmation/permission dialog is shown",
    Help: "When the help overlay is open",
    ProactivityMenu: "When the proactivity dialog is open",
    Transcript: "When viewing the transcript",
    HistorySearch: "When searching command history (ctrl+r)",
    Task: "When a task/agent is running in the foreground",
    ThemePicker: "When the theme picker is open",
    Settings: "When the settings menu is open",
    Tabs: "When tab navigation is active",
    Attachments: "When navigating image attachments in a select dialog",
    Footer: "When footer indicators are focused",
    AbovePrompt: "When a plugin's button above the prompt has keyboard focus",
    AbovePromptInput:
      "When a plugin's input field above the prompt has keyboard focus",
    AbovePromptSelect:
      "When a plugin's select above the prompt has keyboard focus",
    MessageSelector: "When the message selector (rewind) is open",
    DiffDialog: "When the diff dialog is open",
    DiffPanel: "When the diff sidebar panel is open",
    ModelPicker: "When the model picker is open",
    EffortSlider: "When the effort slider is open",
    Select: "When a select/list component is focused",
    Plugin: "When the plugin dialog is open",
    Scroll: "When a scrollable view is focused (fullscreen layout)",
    Agents: "When the agents view (`claude agents`) is open",
  },
  KEYBINDING_ACTION_IDS = [
    "app:interrupt",
    "app:exit",
    "app:toggleTodos",
    "app:toggleTranscript",
    "app:toggleBrief",
    "app:toggleReplTab",
    "app:toggleDiffNoiseFilter",
    "app:diffFileListUp",
    "app:diffFileListDown",
    "app:toggleDiffPreSession",
    "app:cycleDiffBase",
    "app:toggleTerminal",
    "app:redraw",
    "app:openArtifact",
    "strip:jump1",
    "strip:jump2",
    "strip:jump3",
    "strip:jump4",
    "strip:jump5",
    "strip:jump6",
    "strip:jump7",
    "strip:jump8",
    "strip:jump9",
    "strip:next",
    "strip:previous",
    "strip:toggle",
    "strip:new",
    "history:search",
    "history:previous",
    "history:next",
    "chat:cancel",
    "chat:killAgents",
    "chat:cycleMode",
    "chat:cycleProactivity",
    "chat:attentionUp",
    "chat:attentionDown",
    "chat:modelPicker",
    "chat:fastMode",
    "chat:thinkingToggle",
    "chat:workflowKeywordToggle",
    "chat:submit",
    "chat:queueSubmit",
    "chat:newline",
    "chat:undo",
    "chat:externalEditor",
    "chat:stash",
    "chat:imagePaste",
    "chat:clearInput",
    "chat:clearScreen",
    "autocomplete:accept",
    "autocomplete:dismiss",
    "autocomplete:previous",
    "autocomplete:next",
    "confirm:yes",
    "confirm:no",
    "confirm:previous",
    "confirm:next",
    "confirm:nextField",
    "confirm:previousField",
    "confirm:cycleMode",
    "confirm:toggle",
    "tabs:next",
    "tabs:previous",
    "transcript:toggleShowAll",
    "transcript:exit",
    "historySearch:next",
    "historySearch:accept",
    "historySearch:cancel",
    "historySearch:execute",
    "historySearch:cycleScope",
    "task:background",
    "theme:toggleSyntaxHighlighting",
    "theme:editCustom",
    "help:dismiss",
    "proactivityMenu:previousMode",
    "proactivityMenu:nextMode",
    "attachments:next",
    "attachments:previous",
    "attachments:remove",
    "attachments:exit",
    "footer:up",
    "footer:down",
    "footer:next",
    "footer:previous",
    "footer:openSelected",
    "footer:clearSelection",
    "footer:close",
    "footer:dismiss",
    "abovePrompt:toggle",
    "abovePrompt:focus",
    "abovePrompt:next",
    "abovePrompt:previous",
    "abovePrompt:press",
    "abovePrompt:leave",
    "abovePrompt:highlightNext",
    "abovePrompt:highlightPrevious",
    "messageSelector:up",
    "messageSelector:down",
    "messageSelector:top",
    "messageSelector:bottom",
    "messageSelector:select",
    "diff:dismiss",
    "diff:previousSource",
    "diff:nextSource",
    "diff:back",
    "diff:viewDetails",
    "diff:previousFile",
    "diff:nextFile",
    "modelPicker:decreaseEffort",
    "modelPicker:increaseEffort",
    "modelPicker:thisSessionOnly",
    "effortSlider:thisSessionOnly",
    "select:next",
    "select:previous",
    "select:pageUp",
    "select:pageDown",
    "select:first",
    "select:last",
    "select:accept",
    "select:cancel",
    "plugin:toggle",
    "plugin:install",
    "plugin:favorite",
    "permission:toggleDebug",
    "settings:search",
    "settings:retry",
    "settings:periodDay",
    "settings:periodWeek",
    "settings:sortByTokens",
    "voice:pushToTalk",
    "scroll:pageUp",
    "scroll:pageDown",
    "scroll:lineUp",
    "scroll:lineDown",
    "scroll:top",
    "scroll:bottom",
    "scroll:halfPageUp",
    "scroll:halfPageDown",
    "scroll:fullPageUp",
    "scroll:fullPageDown",
    "selection:copy",
    "selection:clear",
    "selection:extendLeft",
    "selection:extendRight",
    "selection:extendUp",
    "selection:extendDown",
    "selection:extendLineStart",
    "selection:extendLineEnd",
    "agents:switchView",
    "agents:togglePin",
  ],
  me = new Set(KEYBINDING_ACTION_IDS);
function D(e) {
  return me.has(e) || e.startsWith("command:");
}
var ye = createLazyValue(() =>
    c({
      context: X(KEYBINDING_CONTEXT_NAMES).describe(
        "UI context where these bindings apply. Global bindings work everywhere.",
      ),
      bindings: fe(
        s().describe('Keystroke pattern (e.g., "ctrl+k", "shift+tab")'),
        $e([
          X(KEYBINDING_ACTION_IDS),
          s()
            .regex(/^command:[a-zA-Z0-9:\-_]+$/)
            .describe(
              'Command binding (e.g., "command:help", "command:compact"). Executes the slash command as if typed.',
            ),
          Uf().describe("Set to null to unbind a default shortcut"),
        ]).describe("Action to trigger, command to invoke, or null to unbind"),
      ).describe("Map of keystroke patterns to actions"),
    }).describe("A block of keybindings for a specific context"),
  ),
  sn = createLazyValue(() =>
    c({
      $schema: s().optional().describe("JSON Schema URL for editor validation"),
      $docs: s().optional().describe("Documentation URL"),
      bindings: v(ye()).describe("Array of keybinding blocks by context"),
    }).describe(
      "Claude Code keybindings configuration. Customize keyboard shortcuts by context.",
    ),
  );
var NON_REBINDABLE_KEYS = [
    {
      key: "ctrl+c",
      reason: "Cannot be rebound - used for interrupt/exit (hardcoded)",
      severity: "error",
    },
    {
      key: "ctrl+d",
      reason: "Cannot be rebound - used for exit (hardcoded)",
      severity: "error",
    },
    {
      key: "ctrl+m",
      reason:
        "Cannot be rebound - identical to Enter in terminals (both send CR)",
      severity: "error",
    },
    {
      key: "ctrl+[",
      reason: "Cannot be rebound - identical to Escape in terminals",
      severity: "error",
    },
    {
      key: "ctrl+i",
      reason: "Cannot be rebound - identical to Tab in terminals",
      severity: "error",
    },
    {
      key: "ctrl+h",
      reason: "Cannot be rebound - identical to Backspace in terminals",
      severity: "error",
    },
    {
      key: "capslock",
      reason: "Caps Lock is not delivered to terminal applications",
      severity: "error",
    },
  ],
  TERMINAL_RESERVED_KEYS = [
    {
      key: "ctrl+z",
      reason: "Unix process suspend (SIGTSTP)",
      severity: "warning",
    },
    {
      key: "ctrl+\\",
      reason: "Terminal quit signal (SIGQUIT)",
      severity: "error",
    },
  ],
  MACOS_RESERVED_KEYS = [
    { key: "cmd+c", reason: "macOS system copy", severity: "error" },
    { key: "cmd+v", reason: "macOS system paste", severity: "error" },
    { key: "cmd+x", reason: "macOS system cut", severity: "error" },
    { key: "cmd+q", reason: "macOS quit application", severity: "error" },
    { key: "cmd+w", reason: "macOS close window/tab", severity: "error" },
    { key: "cmd+tab", reason: "macOS app switcher", severity: "error" },
    { key: "cmd+space", reason: "macOS Spotlight", severity: "error" },
  ];
function Z() {
  let e = getCurrentPlatform(),
    r = [...NON_REBINDABLE_KEYS, ...TERMINAL_RESERVED_KEYS];
  if (e === "macos") r.push(...MACOS_RESERVED_KEYS);
  return r;
}
function normalizeKeybindingChord(e) {
  if (e === " ") return "space";
  return e.trim().split(/\s+/).map(we).join(" ");
}
var he = {
  esc: "escape",
  return: "enter",
  del: "delete",
  "\u2191": "up",
  "\u2193": "down",
  "\u2190": "left",
  "\u2192": "right",
  caps: "capslock",
  "caps-lock": "capslock",
  caps_lock: "capslock",
};
function we(e) {
  let r = e.split("+"),
    t = [],
    o = "";
  for (let p of r) {
    let d = p.trim().toLowerCase();
    if (
      [
        "ctrl",
        "control",
        "alt",
        "opt",
        "option",
        "meta",
        "cmd",
        "command",
        "super",
        "win",
        "shift",
      ].includes(d)
    )
      if (d === "control") t.push("ctrl");
      else if (d === "option" || d === "opt" || d === "meta") t.push("alt");
      else if (d === "command" || d === "cmd" || d === "super" || d === "win")
        t.push("cmd");
      else t.push(d);
    else o = he[d] ?? d;
  }
  return (t.sort(), [...t, o].join("+"));
}
var ve = createLazyValue(() => c({ context: s(), bindings: fe(s(), s().nullable()) }));
function xe(e) {
  return ve().safeParse(e).success;
}
function T(e) {
  return Array.isArray(e) && e.every(xe);
}
var J = KEYBINDING_CONTEXT_NAMES;
function Se(e) {
  return J.includes(e);
}
function _e(e) {
  let r = e.toLowerCase().split("+");
  for (let t of r)
    if (!t.trim())
      return {
        type: "parse_error",
        severity: "error",
        message: `Empty key part in "${e}"`,
        key: e,
        suggestion: 'Remove extra "+" characters',
      };
  return null;
}
function Pe(e, r) {
  let t = [];
  if (typeof e !== "object" || e === null)
    return (
      t.push({
        type: "parse_error",
        severity: "error",
        message: `Keybinding block ${r + 1} is not an object`,
      }),
      t
    );
  let o = e,
    p = o.context,
    d;
  if (typeof p !== "string")
    t.push({
      type: "parse_error",
      severity: "error",
      message: `Keybinding block ${r + 1} missing "context" field`,
    });
  else if (!Se(p))
    t.push({
      type: "invalid_context",
      severity: "error",
      message: `Unknown context "${p}"`,
      context: p,
      suggestion: `Valid contexts: ${J.join(", ")}`,
    });
  else d = p;
  if (typeof o.bindings !== "object" || o.bindings === null)
    return (
      t.push({
        type: "parse_error",
        severity: "error",
        message: `Keybinding block ${r + 1} missing "bindings" field`,
      }),
      t
    );
  let b = o.bindings;
  for (let [k, h] of Object.entries(b)) {
    let w = _e(k);
    if (w) ((w.context = d), t.push(w));
    if (h !== null && typeof h !== "string")
      t.push({
        type: "invalid_action",
        severity: "error",
        message: `Invalid action for "${k}": must be a string or null`,
        key: k,
        context: d,
      });
    else if (typeof h === "string" && h.startsWith("command:")) {
      if (!/^command:[a-zA-Z0-9:\-_]+$/.test(h))
        t.push({
          type: "invalid_action",
          severity: "warning",
          message: `Invalid command binding "${h}" for "${k}": command name may only contain alphanumeric characters, colons, hyphens, and underscores`,
          key: k,
          context: d,
          action: h,
        });
      if (d && d !== "Chat")
        t.push({
          type: "invalid_action",
          severity: "warning",
          message: `Command binding "${h}" must be in "Chat" context, not "${d}"`,
          key: k,
          context: d,
          action: h,
          suggestion: 'Move this binding to a block with "context": "Chat"',
        });
    } else if (typeof h === "string" && !D(h))
      t.push({
        type: "invalid_action",
        severity: "error",
        message: `Unknown action "${h}" for "${k}"${d ? ` in ${d}` : ""} \u2014 this binding is ignored`,
        key: k,
        context: d,
        action: h,
        suggestion: Ke(h),
      });
    else if (h === "voice:pushToTalk") {
      let x = parseKeybindingChord(k)[0];
      if (
        x &&
        !x.ctrl &&
        !x.alt &&
        !x.shift &&
        !x.meta &&
        !x.super &&
        /^[a-z]$/.test(x.key)
      )
        t.push({
          type: "invalid_action",
          severity: "warning",
          message: `Binding "${k}" to voice:pushToTalk prints into the input during warmup; use space or a modifier combo like meta+k`,
          key: k,
          context: d,
          action: h,
        });
    }
  }
  return t;
}
function Ke(e) {
  let r,
    t = 1 / 0;
  for (let b of KEYBINDING_ACTION_IDS) {
    let k = Ee(e.toLowerCase(), b.toLowerCase());
    if (k < t) ((t = k), (r = b));
  }
  if (r && t <= 2) return `Did you mean "${r}"?`;
  let o = beforeFirst(e, ":"),
    p = KEYBINDING_ACTION_IDS.filter((b) => b.startsWith(`${o}:`));
  if (p.length > 0) return `Valid "${o}:" actions: ${p.join(", ")}`;
  return `Valid action namespaces: ${dedupe(KEYBINDING_ACTION_IDS.map((b) => beforeFirst(b, ":")))
    .map((b) => `${b}:`)
    .join(", ")}`;
}
function Ee(e, r) {
  let t = Array.from({ length: r.length + 1 }, (o, p) => p);
  for (let o = 1; o <= e.length; o++) {
    let p = [o];
    for (let d = 1; d <= r.length; d++) {
      let b = e[o - 1] === r[d - 1] ? 0 : 1;
      p[d] = Math.min(
        (t[d] ?? 0) + 1,
        (p[d - 1] ?? 0) + 1,
        (t[d - 1] ?? 0) + b,
      );
    }
    t = p;
  }
  return t[r.length] ?? 0;
}
function N(e) {
  let r = [],
    t = /"bindings"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
    o;
  while ((o = t.exec(e)) !== null) {
    let p = o[1];
    if (!p) continue;
    let k =
        e.slice(0, o.index).match(/"context"\s*:\s*"([^"]+)"[^{]*$/)?.[1] ??
        "unknown",
      h = /"([^"]+)"\s*:/g,
      w = new Map(),
      x;
    while ((x = h.exec(p)) !== null) {
      let _ = x[1];
      if (!_) continue;
      let K = (w.get(_) ?? 0) + 1;
      if ((w.set(_, K), K === 2))
        r.push({
          type: "duplicate",
          severity: "warning",
          message: `Duplicate key "${_}" in ${k} bindings`,
          key: _,
          context: k,
          suggestion:
            "This key appears multiple times in the same context. JSON uses the last value, earlier values are ignored.",
        });
    }
  }
  return r;
}
function Te(e) {
  let r = [];
  if (!Array.isArray(e))
    return (
      r.push({
        type: "parse_error",
        severity: "error",
        message: "keybindings.json must contain an array",
        suggestion: "Wrap your bindings in [ ]",
      }),
      r
    );
  for (let t = 0; t < e.length; t++) r.push(...Pe(e[t], t));
  return r;
}
function Ae(e) {
  let r = [],
    t = new Map();
  for (let o of e) {
    let p = t.get(o.context) ?? new Map();
    t.set(o.context, p);
    for (let [d, b] of Object.entries(o.bindings)) {
      let k = normalizeKeybindingChord(d),
        h = p.get(k);
      if (h && h !== b)
        r.push({
          type: "duplicate",
          severity: "warning",
          message: `Duplicate binding "${d}" in ${o.context} context`,
          key: d,
          context: o.context,
          action: b ?? "null (unbind)",
          suggestion: `Previously bound to "${h}". Only the last binding will be used.`,
        });
      p.set(k, b ?? "null");
    }
  }
  return r;
}
function Be(e) {
  let r = [],
    t = Z();
  for (let o of e) {
    let p = formatKeybindingChordText(o.chord),
      d = normalizeKeybindingChord(p);
    for (let b of t)
      if (normalizeKeybindingChord(b.key) === d)
        r.push({
          type: "reserved",
          severity: b.severity,
          message: `"${p}" may not work: ${b.reason}`,
          key: p,
          context: o.context,
          action: o.action ?? void 0,
        });
  }
  return r;
}
function De(e) {
  let r = [];
  for (let t of e)
    for (let [o, p] of Object.entries(t.bindings)) {
      let d = o.split(" ").map((b) => parseKeybindingKey(b));
      r.push({ chord: d, action: p, context: t.context });
    }
  return r;
}
function I(e, r) {
  let t = [];
  if ((t.push(...Te(e)), T(e))) {
    t.push(...Ae(e));
    let p = De(e);
    t.push(...Be(p));
  }
  let o = new Set();
  return t.filter((p) => {
    let d = `${p.type}:${p.key}:${p.context}`;
    if (o.has(d)) return !1;
    return (o.add(d), !0);
  });
}
function isKeybindingCustomizationEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_keybinding_customization_release", !0);
}
var je = 500,
  Re = 200;
function Fe() {
  let e = {
    bindings: null,
    warmedFromBackend: !1,
    warmAttempted: !1,
    warnings: [],
    watcher: null,
    initialized: !1,
    disposed: !1,
    lastCustomBindingsLogDate: null,
    loggedShortcutFallbacks: new Set(),
    actionFiredLoggedAt: new Map(),
    changed: Le(),
    [Symbol.dispose]() {
      if (((e.disposed = !0), e.watcher))
        (e.watcher.close(), (e.watcher = null));
      e.changed.clear();
    },
  };
  return e;
}
var keybindingStore = Fe();
function R(e, r) {
  let t = new Date().toISOString().slice(0, 10);
  if (e.lastCustomBindingsLogDate === t) return;
  ((e.lastCustomBindingsLogDate = t),
    logEvent("tengu_custom_keybindings_loaded", { user_binding_count: r }));
}
function getKeybindingsConfigPath() {
  return Oe(getClaudeConfigDir(), "keybindings.json");
}
var KEYBINDINGS_STORAGE_KEY = STORAGE_KEYS.state("keybindings");
function L() {
  return expandKeybindingBlocks(DEFAULT_KEYBINDINGS);
}
function O(e) {
  return expandKeybindingBlocks(e).filter((r) => r.action === null || D(r.action));
}
function F(e) {
  for (let r of e)
    logForDebugging(
      `[keybindings] [${r.severity}] ${r.message}${r.suggestion ? ` \u2014 ${r.suggestion}` : ""}`,
      { level: "warn" },
    );
}
function C(e, r) {
  if (e?.suppressFeatureEvents) return;
  if (r === "ok") logFeatureOk("keybinding_load_user_config");
  else logFeatureBad("keybinding_load_user_config", r);
}
function U() {
  return !isKeybindingCustomizationEnabled() || isCustomizationDisabled("keybindings");
}
function loadKeybindingsFromConfigFile(e) {
  let r = L();
  if (U()) return r;
  if (isHoverRestEnabled() && e !== void 0) return r;
  try {
    let t = readFileSync(getKeybindingsConfigPath(), "utf-8"),
      o = jsonParse(t),
      p =
        typeof o === "object" && o !== null && "bindings" in o
          ? o.bindings
          : void 0;
    return T(p) ? [...r, ...O(p)] : r;
  } catch {
    return r;
  }
}
async function ne(e, r, t) {
  let o = L();
  if (!isKeybindingCustomizationEnabled() || isCustomizationDisabled("keybindings")) return { bindings: o, warnings: [] };
  let p = getKeybindingsConfigPath();
  if (r) {
    let d = await r.read([KEYBINDINGS_STORAGE_KEY]);
    if (!d.ok) {
      let k = d.error,
        h = describeStorageError(k);
      if (
        (logForDebugging(`[keybindings] Error loading ${p}: ${h}`), t?.suppressFeatureEvents)
      )
        logFeatureSad("keybinding_load_user_config", "warm_backend_read_failed_fell_back");
      return (
        C(t, "keybinding_config_parse_error"),
        {
          bindings: o,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: `Failed to parse keybindings.json: ${h}`,
            },
          ],
        }
      );
    }
    let b = d.value.items[0];
    if (!b.found) return (C(t, "ok"), { bindings: o, warnings: [] });
    return Ue(Buffer.from(b.value).toString("utf-8"), e, o, p, t);
  }
  try {
    let d = await readFile(p, "utf-8"),
      b = jsonParse(d),
      k;
    if (typeof b === "object" && b !== null && "bindings" in b) k = b.bindings;
    else
      return (
        logForDebugging(
          '[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array',
        ),
        C(t, "keybinding_config_invalid_format"),
        {
          bindings: o,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: 'keybindings.json must have a "bindings" array',
              suggestion: 'Use format: { "bindings": [ ... ] }',
            },
          ],
        }
      );
    if (!T(k)) {
      let K = !Array.isArray(k)
          ? '"bindings" must be an array'
          : "keybindings.json contains invalid block structure",
        A = !Array.isArray(k)
          ? 'Set "bindings" to an array of keybinding blocks'
          : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (
        logForDebugging(`[keybindings] Invalid keybindings.json: ${K}`),
        C(t, "keybinding_config_invalid_structure"),
        {
          bindings: o,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: K,
              suggestion: A,
            },
          ],
        }
      );
    }
    let h = O(k);
    logForDebugging(`[keybindings] Loaded ${h.length} user bindings from ${p}`);
    let w = [...o, ...h];
    R(e, h.length);
    let _ = [...N(d), ...I(k, w)];
    if (_.length > 0)
      (logForDebugging(`[keybindings] Found ${_.length} validation issue(s)`), F(_));
    return (C(t, "ok"), { bindings: w, warnings: _ });
  } catch (d) {
    if (W(d)) return (C(t, "ok"), { bindings: o, warnings: [] });
    return (
      logForDebugging(`[keybindings] Error loading ${p}: ${l(d)}`),
      C(t, "keybinding_config_parse_error"),
      {
        bindings: o,
        warnings: [
          {
            type: "parse_error",
            severity: "error",
            message: `Failed to parse keybindings.json: ${l(d)}`,
          },
        ],
      }
    );
  }
}
function Ue(e, r, t, o, p) {
  try {
    let d = jsonParse(e),
      b;
    if (typeof d === "object" && d !== null && "bindings" in d) b = d.bindings;
    else
      return (
        logForDebugging(
          '[keybindings] Invalid keybindings.json: keybindings.json must have a "bindings" array',
        ),
        C(p, "keybinding_config_invalid_format"),
        {
          bindings: t,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: 'keybindings.json must have a "bindings" array',
              suggestion: 'Use format: { "bindings": [ ... ] }',
            },
          ],
        }
      );
    if (!T(b)) {
      let _ = !Array.isArray(b)
          ? '"bindings" must be an array'
          : "keybindings.json contains invalid block structure",
        K = !Array.isArray(b)
          ? 'Set "bindings" to an array of keybinding blocks'
          : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (
        logForDebugging(`[keybindings] Invalid keybindings.json: ${_}`),
        C(p, "keybinding_config_invalid_structure"),
        {
          bindings: t,
          warnings: [
            {
              type: "parse_error",
              severity: "error",
              message: _,
              suggestion: K,
            },
          ],
        }
      );
    }
    let k = O(b);
    logForDebugging(`[keybindings] Loaded ${k.length} user bindings from ${o}`);
    let h = [...t, ...k];
    R(r, k.length);
    let x = [...N(e), ...I(b, h)];
    if (x.length > 0)
      (logForDebugging(`[keybindings] Found ${x.length} validation issue(s)`), F(x));
    return (C(p, "ok"), { bindings: h, warnings: x });
  } catch (d) {
    return (
      logForDebugging(`[keybindings] Error loading ${o}: ${l(d)}`),
      C(p, "keybinding_config_parse_error"),
      {
        bindings: t,
        warnings: [
          {
            type: "parse_error",
            severity: "error",
            message: `Failed to parse keybindings.json: ${l(d)}`,
          },
        ],
      }
    );
  }
}
async function warmKeybindingsFromBackend(e, r) {
  if (e.bindings) return e.bindings;
  if (e.warmAttempted) return;
  if (ke()) return;
  if (U()) return;
  let t = await ne(e, r, { suppressFeatureEvents: !0 });
  if (((e.warmAttempted = !0), t.warnings.length > 0)) return t.bindings;
  if (!e.bindings)
    ((e.bindings = t.bindings),
      (e.warnings = []),
      (e.warmedFromBackend = !0),
      logFeatureOk("keybinding_load_user_config"));
  return e.bindings;
}
function te(e) {
  if (!e.warmedFromBackend) return !1;
  if (U())
    return (
      (e.bindings = null),
      (e.warnings = []),
      (e.warmedFromBackend = !1),
      !0
    );
  return ((e.warmedFromBackend = !1), !1);
}
function getActiveKeybindings(e) {
  if (e.bindings && !te(e)) return e.bindings;
  return loadKeybindingsWithWarnings(e).bindings;
}
function loadKeybindingsWithWarnings(e) {
  if (e.bindings && !te(e))
    return { bindings: e.bindings, warnings: e.warnings };
  e.warmedFromBackend = !1;
  let r = L();
  if (!isKeybindingCustomizationEnabled() || isCustomizationDisabled("keybindings"))
    return (
      (e.bindings = r),
      (e.warnings = []),
      { bindings: e.bindings, warnings: e.warnings }
    );
  let t = getKeybindingsConfigPath();
  try {
    let o = readFileSync(t, "utf-8"),
      p = jsonParse(o),
      d;
    if (typeof p === "object" && p !== null && "bindings" in p) d = p.bindings;
    else
      return (
        logFeatureBad("keybinding_load_user_config", "keybinding_config_invalid_format"),
        (e.bindings = r),
        (e.warnings = [
          {
            type: "parse_error",
            severity: "error",
            message: 'keybindings.json must have a "bindings" array',
            suggestion: 'Use format: { "bindings": [ ... ] }',
          },
        ]),
        { bindings: e.bindings, warnings: e.warnings }
      );
    if (!T(d)) {
      let h = !Array.isArray(d)
          ? '"bindings" must be an array'
          : "keybindings.json contains invalid block structure",
        w = !Array.isArray(d)
          ? 'Set "bindings" to an array of keybinding blocks'
          : 'Each block must have "context" (string) and "bindings" (object mapping keys to a string action or null)';
      return (
        logFeatureBad("keybinding_load_user_config", "keybinding_config_invalid_structure"),
        (e.bindings = r),
        (e.warnings = [
          { type: "parse_error", severity: "error", message: h, suggestion: w },
        ]),
        { bindings: e.bindings, warnings: e.warnings }
      );
    }
    let b = O(d);
    (logForDebugging(`[keybindings] Loaded ${b.length} user bindings from ${t}`),
      (e.bindings = [...r, ...b]),
      R(e, b.length));
    let k = N(o);
    if (((e.warnings = [...k, ...I(d, e.bindings)]), e.warnings.length > 0))
      (logForDebugging(`[keybindings] Found ${e.warnings.length} validation issue(s)`),
        F(e.warnings));
    return (
      logFeatureOk("keybinding_load_user_config"),
      { bindings: e.bindings, warnings: e.warnings }
    );
  } catch (o) {
    if (W(o))
      return (
        logFeatureOk("keybinding_load_user_config"),
        (e.bindings = r),
        (e.warnings = []),
        { bindings: e.bindings, warnings: e.warnings }
      );
    return (
      logForDebugging(`[keybindings] Error loading ${t}: ${l(o)}`),
      logFeatureBad("keybinding_load_user_config", "keybinding_config_parse_error"),
      (e.bindings = r),
      (e.warnings = [
        {
          type: "parse_error",
          severity: "error",
          message: `Failed to parse keybindings.json: ${l(o)}`,
        },
      ]),
      { bindings: e.bindings, warnings: e.warnings }
    );
  }
}
async function startKeybindingsWatcher(e) {
  if (e.initialized || e.disposed) return;
  if (!isKeybindingCustomizationEnabled() || isCustomizationDisabled("keybindings")) {
    logForDebugging("[keybindings] Skipping file watcher - user customization disabled");
    return;
  }
  let r = getKeybindingsConfigPath(),
    t = dirname(r);
  try {
    if (!(await Ie(t)).isDirectory()) {
      (logForDebugging(`[keybindings] Not watching: ${t} is not a directory`),
        logFeatureSad("keybinding_watcher_init", "watch_dir_inaccessible"));
      return;
    }
  } catch {
    (logForDebugging(`[keybindings] Not watching: ${t} does not exist`),
      logFeatureSad("keybinding_watcher_init", "watch_dir_inaccessible"));
    return;
  }
  ((e.initialized = !0),
    logForDebugging(`[keybindings] Watching for changes to ${r}`),
    (e.watcher = RT.watch(r, {
      persistent: !0,
      ignoreInitial: !0,
      awaitWriteFinish: { stabilityThreshold: je, pollInterval: Re },
      ignorePermissionErrors: !0,
      usePolling: !0,
      interval: 2000,
      atomic: !0,
    })),
    e.watcher.on("add", (o) => Q(e, o)),
    e.watcher.on("change", (o) => Q(e, o)),
    e.watcher.on("unlink", (o) => ze(e, o)),
    e.watcher.on("error", (o) =>
      logForDebugging(`[keybindings] watcher error: ${l(o)}`, { level: "warn" }),
    ),
    registerCleanup(e),
    logFeatureOk("keybinding_watcher_init"));
}
async function Q(e, r) {
  logForDebugging(`[keybindings] Detected change to ${r}`);
  try {
    let t = await ne(e);
    ((e.bindings = t.bindings),
      (e.warnings = t.warnings),
      (e.warmedFromBackend = !1),
      e.changed.emit(t),
      logFeatureOk("keybinding_hot_reload"));
  } catch (t) {
    (logForDebugging(`[keybindings] Error reloading: ${l(t)}`),
      logFeatureSad("keybinding_hot_reload", "keybinding_reload_failed"));
  }
}
function ze(e, r) {
  logForDebugging(`[keybindings] Detected deletion of ${r}`);
  let t = L();
  ((e.bindings = t),
    (e.warnings = []),
    (e.warmedFromBackend = !1),
    e.changed.emit({ bindings: t, warnings: [] }));
}
var ie = 200,
  Ye = ie * 4,
  Ge = /[\p{Cf}\p{Cs}\p{Zl}\p{Zp}\p{Variation_Selector}]+/gu;
function sanitizeSingleLineDisplayText(e) {
  let r = e === void 0 ? "" : normalizeWhitespace(stripAnsi(e).replace(Ge, " "));
  return r === "" ? void 0 : truncateToWidth(truncateToCodeUnits(r, Ye), ie);
}
function getKeybindingPlatform() {
  let e = getCurrentPlatform();
  if (e === "macos") return e;
  if (
    a.LC_TERMINAL === "iTerm2" ||
    a.TERM_PROGRAM === "Apple_Terminal" ||
    a.TERM_PROGRAM === "iTerm.app"
  )
    return "macos";
  return e;
}
var G = { "\u2020": "t" };
function re(e) {
  return Object.hasOwn(G, e);
}
var OPTION_GLYPH_KEYBINDINGS = { π: "alt+p", ø: "alt+o" };
function isOptionGlyphKey(e) {
  return Object.hasOwn(OPTION_GLYPH_KEYBINDINGS, e);
}
var He = {
  escape: "escape",
  return: "enter",
  tab: "tab",
  backspace: "backspace",
  delete: "delete",
  up: "up",
  down: "down",
  left: "left",
  right: "right",
  pageup: "pageup",
  pagedown: "pagedown",
  wheelup: "wheelup",
  wheeldown: "wheeldown",
  home: "home",
  end: "end",
};
function resolveKeybindingChord(e, r, t) {
  let o = !1,
    p;
  for (let d = 0; d < t.length; d++) {
    let b = t[d];
    if (!b || b.context !== r || b.action !== e) continue;
    o = !0;
    let k = !1;
    for (let h = d + 1; h < t.length; h++) {
      let w = t[h];
      if (w && w.context === r && j(w.chord, b.chord)) {
        k = !0;
        break;
      }
    }
    if (!k) p = b.chord;
  }
  if (p) return p;
  return o ? null : void 0;
}
function resolveKeybindingChordInContexts(e, r, t) {
  let o = new Set(r),
    p = new Map();
  for (let b of t) {
    if (!o.has(b.context)) continue;
    let k = p.get(b.context);
    if (k) k.push(b);
    else p.set(b.context, [b]);
  }
  let d = !1;
  for (let b = 0; b < r.length; b++) {
    let k = r[b];
    if (k === void 0) continue;
    let h = p.get(k);
    if (!h) continue;
    let w = resolveKeybindingChord(e, k, h);
    if (w === null) {
      d = !0;
      continue;
    }
    if (w) {
      for (let x = 0; x < b; x++) {
        let _ = r[x];
        if (_ === void 0) continue;
        let K = p.get(_);
        if (!K) continue;
        if (K.some((A) => A && j(A.chord, w))) return null;
      }
      return w;
    }
  }
  return d ? null : void 0;
}
function findActionForKeyInContext(e, r, t) {
  let o = null;
  for (let p of t) {
    if (p.context !== r || p.chord.length !== 1) continue;
    let d = p.chord[0];
    if (d && isSameKeySpec(d, e)) o = p.action;
  }
  return o;
}
function findActionForKeyAcrossContexts(e, r, t) {
  let o;
  for (let p of t) {
    if (p.chord.length !== 1 || !r.includes(p.context)) continue;
    let d = p.chord[0];
    if (d && isSameKeySpec(d, e)) o = p.action;
  }
  return o;
}
function j(e, r) {
  if (e.length !== r.length) return !1;
  for (let t = 0; t < e.length; t++) {
    let o = e[t],
      p = r[t];
    if (!o || !p || !isSameKeySpec(o, p)) return !1;
  }
  return !0;
}
function getKeybindingDisplayText(e, r, t) {
  let o = resolveKeybindingChord(e, r, t);
  return o ? formatKeybindingChordForPlatform(o, getKeybindingPlatform()) : o;
}
function normalizeKeyEvent(e) {
  let r =
      e.name === "enter"
        ? `
`
        : e.key,
    t = e.meta;
  if (getCurrentPlatform() === "macos" && !e.meta && !e.ctrl && re(r)) ((r = G[r]), (t = !0));
  let o = He[e.name] ?? (r.length === 1 ? r.toLowerCase() : null);
  if (!o) return null;
  let p =
    e.shift ||
    (r.length === 1 && r !== r.toLowerCase() && r === r.toUpperCase());
  return { key: o, ctrl: e.ctrl, alt: t, shift: p, meta: t, super: e.superKey };
}
function isSameKeySpec(e, r) {
  return (
    e.key === r.key &&
    e.ctrl === r.ctrl &&
    e.shift === r.shift &&
    (e.alt || e.meta) === (r.alt || r.meta) &&
    e.super === r.super
  );
}
function se(e, r) {
  if (e.length >= r.chord.length) return !1;
  for (let t = 0; t < e.length; t++) {
    let o = e[t],
      p = r.chord[t];
    if (!o || !p) return !1;
    if (!isSameKeySpec(o, p)) return !1;
  }
  return !0;
}
function resolveKeyEvent(e, r, t, o) {
  if (e.name === "escape" && o !== null) return { type: "chord_cancelled" };
  let p = normalizeKeyEvent(e);
  if (!p) {
    if (o !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let d = o ? [...o, p] : [p],
    b = null,
    k;
  for (let h of t) {
    if (!r.includes(h.context)) continue;
    if (h.chord.length > d.length) {
      if (se(d, h)) ((b ??= new Map()), b.set(formatKeybindingChordText(h.chord), h.action));
    } else if (j(d, h.chord)) k = h;
  }
  if (b !== null) {
    for (let h of b.values())
      if (h !== null) return { type: "chord_started", pending: d };
  }
  if (k) {
    if (k.action === null) return { type: "unbound" };
    return { type: "match", action: k.action };
  }
  if (o !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
function resolveKeyEventByContextPriority(e, r, t, o) {
  if (e.name === "escape" && o !== null) return { type: "chord_cancelled" };
  let p = normalizeKeyEvent(e);
  if (!p) {
    if (o !== null) return { type: "chord_cancelled" };
    return { type: "none" };
  }
  let d = o ? [...o, p] : [p],
    b = new Set(r),
    k = new Map(),
    h = new Map();
  for (let w of t) {
    if (!b.has(w.context)) continue;
    if (w.chord.length > d.length) {
      if (se(d, w)) k.set(formatKeybindingChordText(w.chord), w.action);
    } else if (j(d, w.chord)) h.set(w.context, w);
  }
  for (let w of k.values())
    if (w !== null) return { type: "chord_started", pending: d };
  for (let w of r) {
    let x = h.get(w);
    if (x) {
      if (x.action === null) return { type: "unbound" };
      return { type: "match", action: x.action };
    }
  }
  if (o !== null) return { type: "chord_cancelled" };
  return { type: "none" };
}
var Ve = new Set(KEYBINDING_ACTION_IDS);
function ae(e) {
  if (e.startsWith("command:")) return S("command:custom");
  if (Ve.has(e)) return fromSanitizer_SANITIZER_OUTPUT_ONLY(e);
  return S("unknown");
}
var qe = /^[A-Za-z0-9 +\-_/[\]\u2191\u2193\u2190\u2192]{1,32}$/u;
function Ze(e) {
  return qe.test(e) ? fromSanitizer_SANITIZER_OUTPUT_ONLY(e) : S("invalid");
}
var Je = 1000;
function logKeybindingActionFired(e) {
  let r = Date.now(),
    t = keybindingStore.actionFiredLoggedAt,
    o = t.get(e);
  if (o !== void 0 && r - o < Je) return;
  (t.set(e, r), logEvent("tengu_keybinding_fired", { action_id: ae(e) }));
}
function logKeybindingFallbackUsed(e, r, t, o) {
  logEvent("tengu_keybinding_fallback_used", {
    action: ae(e),
    context: fromEnum(r),
    fallback: Ze(t),
    reason: fromEnum(o),
  });
}
export {
  DEFAULT_KEYBINDINGS,
  parseKeybindingKey,
  parseKeybindingChord,
  formatKeybindingChordText,
  formatKeybindingKeyForPlatform,
  formatKeybindingChordForPlatform,
  expandKeybindingBlocks,
  KEYBINDING_CONTEXT_NAMES,
  isKeybindingContextName,
  KEYBINDING_CONTEXT_DESCRIPTIONS,
  KEYBINDING_ACTION_IDS,
  NON_REBINDABLE_KEYS,
  TERMINAL_RESERVED_KEYS,
  MACOS_RESERVED_KEYS,
  normalizeKeybindingChord,
  isKeybindingCustomizationEnabled,
  keybindingStore,
  getKeybindingsConfigPath,
  KEYBINDINGS_STORAGE_KEY,
  loadKeybindingsFromConfigFile,
  warmKeybindingsFromBackend,
  getActiveKeybindings,
  loadKeybindingsWithWarnings,
  startKeybindingsWatcher,
  OPTION_GLYPH_KEYBINDINGS,
  isOptionGlyphKey,
  getKeybindingPlatform,
  resolveKeybindingChord,
  resolveKeybindingChordInContexts,
  findActionForKeyInContext,
  findActionForKeyAcrossContexts,
  getKeybindingDisplayText,
  normalizeKeyEvent,
  isSameKeySpec,
  resolveKeyEvent,
  resolveKeyEventByContextPriority,
  logKeybindingActionFired,
  logKeybindingFallbackUsed,
  sanitizeSingleLineDisplayText,
};

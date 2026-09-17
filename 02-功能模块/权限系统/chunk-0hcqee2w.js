// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize, countOccurrences } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { isRemoteOrPluginRequestSource, READ_TOOL_NAME, getSanitizedToolName } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { parseMcpToolName } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { formatPathWithTilde } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { getStringWidth, wrapAnsi, truncateToWidth, wrapTextToLineCount } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { oL } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { WARNING_GLYPH } from "./chunk-e4pfvp7x.js";
import { containsWildcard, unescapeGlobSpecials, parsePermissionRule, formatPermissionRule } from "../工具Bash-Shell/permission-rule-parsing.js";
import { Box, Text, Ansi, useIsScreenReaderEnabled, useInterval, measureElement } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ansiStyles, eastAsianWidth } from "../../01-核心基础设施/ANSI-样式-布局原语/ansi-text-primitives.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { findSafetyCheckReason, sanitizeForDisplay, permissionUpdateSchema, setPermissionModeWithGuards, getAutoModeUnavailableText } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import {
  GRAPHEME_TRUNCATION_MARKER_PATTERN,
  sanitizeTextForDisplay,
  hasInvisibleCharacters,
  sanitizeUntrustedText,
  needsMultilineGutter,
  collapseInvisibleCharacterRuns,
  hasRenderableText,
  MAX_DISPLAY_LABEL_WIDTH,
  isWithinDisplayValueLimit,
  disambiguateLabels,
  buildUniqueLabelMap,
  prepareDisplayText,
  formatWithholdableValue,
  formatListEntryForDisplay,
  toUniqueDisplayLabels,
  replaceLineBreaks,
} from "../策略限制-PolicyLimits/chunk-8sw91yn5.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { NO_COMMITTED_ROW, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useKeybindingChordText } from "../../01-核心基础设施/共享小工具-未细化/use-keybinding-chord-text.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useNotificationQueue } from "../../03-入口与运行时/会话UI-REPL/notification-queue.js";
import { KeybindingScope } from "../../01-核心基础设施/共享小工具-未细化/keybinding-scope.js";
import { isPermissionRuleCanonical } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { renderToolUseMessageByToolName } from "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import { useAnswerRefusalState } from "../../01-核心基础设施/共享小工具-未细化/use-answer-refusal-state.js";
import { linkifyUrls } from "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import { useHyperlinkSupport } from "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import { getSyntaxHighlightAdapter } from "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import { canCycleToAuto } from "./permission-mode-cycle.js";
import { PermissionDialogFrame } from "./permission-dialog.js";
import { useSettings } from "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatHyperlink } from "../../01-核心基础设施/共享小工具-未细化/format-hyperlink.js";
import { getSlackChannelUrl } from "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import { re, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { INVALID_TOOL_NAME_PLACEHOLDER, nir, rir, mintDisplayedUpdates } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { qd } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { splitGraphemes } from "../../01-核心基础设施/共享小工具-未细化/intl-text-utils.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function MultilineBorderBox(zr) {
  let Qr = _(2),
    { multiline: Zr, children: Uu } = zr;
  if (!Zr) {
    return Uu;
  }
  let UD;
  if (Qr[0] !== Uu)
    ((UD = e(Box, {
      borderStyle: "single",
      borderLeft: !0,
      borderRight: !1,
      borderTop: !1,
      borderBottom: !1,
      borderDimColor: !0,
      paddingLeft: 1,
      children: Uu,
    })),
      (Qr[0] = Uu),
      (Qr[1] = UD));
  else UD = Qr[1];
  return UD;
}
function $u(u) {
  return isPermissionRuleCanonical(u);
}
function $D(u) {
  let s = [];
  for (let n of u) {
    if (n === null || typeof n !== "object") continue;
    if (n.type !== "addRules") {
      s.push(n);
      continue;
    }
    if (!Array.isArray(n.rules)) continue;
    let a = n.rules.filter(
      (l) =>
        l !== null &&
        typeof l === "object" &&
        typeof l.toolName === "string" &&
        (l.ruleContent === void 0 || typeof l.ruleContent === "string") &&
        (l.ruleContent === void 0
          ? Ue(l.toolName)
          : $u({ toolName: l.toolName, ruleContent: l.ruleContent })),
    );
    if (a.length > 0) s.push({ ...n, rules: a });
  }
  return s;
}
var MAX_PERMISSION_RULE_ENTRIES = 8,
  MAX_PERMISSION_UPDATES = 64,
  MAX_CONSENT_LABEL_WIDTH = 160,
  jD = new Set(["localSettings", "session"]);
function Dn(u, s, n) {
  let a = $D(u).filter((c) => {
      if (!s.has(c.type)) return !1;
      if (
        (c.type === "addRules" ||
          c.type === "replaceRules" ||
          c.type === "removeRules") &&
        c.behavior !== "allow"
      )
        return !1;
      return c.destination !== void 0 && jD.has(c.destination);
    }),
    l = [];
  for (let c of a) {
    if (c.type !== "addRules") {
      if (c.type === "addDirectories") {
        if (!Array.isArray(c.directories)) continue;
        let T = c.directories.filter(
          (B) => typeof B === "string" && B.trim() !== "" && getStringWidth(B) > 0 && isWithinDisplayValueLimit(B),
        );
        if (T.length === 0) continue;
        l.push({ ...c, directories: T });
        continue;
      }
      l.push(c);
      continue;
    }
    if (c.rules === void 0) continue;
    let A = c.rules.filter((T) =>
        isWithinDisplayValueLimit(
          formatPermissionRule({
            toolName: T.toolName,
            ...(T.ruleContent !== void 0 && { ruleContent: T.ruleContent }),
          }),
        ),
      ),
      f = n === void 0 ? A : A.filter(n);
    if (f.length > 0) l.push({ ...c, rules: f });
  }
  return l;
}
var RULES_AND_DIRECTORIES_UPDATE_TYPES = new Set(["addRules", "addDirectories"]),
  RULES_ONLY_UPDATE_TYPES = new Set(["addRules"]);
function vD(u) {
  return (
    u.trim() !== u ||
    u === "" ||
    hasInvisibleCharacters(u) ||
    sanitizeTextForDisplay(u) !== u ||
    /[\t\n]/.test(u) ||
    getStringWidth(u) === 0
  );
}
function Ue(u) {
  if (u === INVALID_TOOL_NAME_PLACEHOLDER) return !1;
  if (vD(u)) return !1;
  let s = parsePermissionRule(formatPermissionRule({ toolName: u }));
  if (s.toolName !== u || s.ruleContent !== void 0) return !1;
  if (containsWildcard(u)) return !1;
  let n = parseMcpToolName(u);
  if (n !== null && !n.toolName) return !1;
  return !0;
}
function on(u) {
  if (typeof u !== "string" || u.trim() === "" || getStringWidth(u) === 0 || !isWithinDisplayValueLimit(u))
    return null;
  return rir(u);
}
function ju(u) {
  switch (u.length) {
    case 0:
      return "";
    case 1:
      return e(Text, { bold: !0, children: u[0] });
    case 2:
      return r(Text, {
        children: [
          e(Text, { bold: !0, children: u[0] }),
          " and ",
          e(Text, { bold: !0, children: u[1] }),
        ],
      });
    default:
      return r(Text, {
        children: [
          e(Text, { bold: !0, children: u.slice(0, -1).join(", ") }),
          ", and",
          " ",
          e(Text, { bold: !0, children: u.slice(-1)[0] }),
        ],
      });
  }
}
function formatListWithAnd(u) {
  if (u.length === 0) return "";
  if (u.length === 1) return e(Text, { bold: !0, children: u[0] });
  if (u.length === 2)
    return r(Text, {
      children: [
        e(Text, { bold: !0, children: u[0] }),
        " and ",
        e(Text, { bold: !0, children: u[1] }),
      ],
    });
  return r(Text, {
    children: [
      u
        .slice(0, -1)
        .map((s, n) =>
          r(Text, { children: [e(Text, { bold: !0, children: s }), ",", " "] }, n),
        ),
      "and ",
      e(Text, { bold: !0, children: u.at(-1) }),
    ],
  });
}
function normalizeRulePathPattern(u) {
  return unescapeGlobSpecials(
    (u?.replace(/\/\*\*$/, "") || "")
      .replace(/^\.\//, "")
      .replace(/^\/\//, "/"),
  );
}
function vu(u) {
  if (!u) return "";
  return u.endsWith(":*") || u.endsWith(" *") ? u.slice(0, -2) : u;
}
function hasAllowRuleForTool(u, s, n) {
  if (u.toolName === s) {
    let a = vu(u.ruleContent);
    if (!a) return !1;
    return Boolean(n ? n(a) : a);
  }
  if (u.toolName === READ_TOOL_NAME) return Boolean(normalizeRulePathPattern(u.ruleContent));
  return !1;
}
function sanitizeCommandPrefix(u) {
  return u !== void 0 && sanitizeTextForDisplay(u) === u && !/[\t\n\u2028\u2029]/.test(u) && !hasInvisibleCharacters(u)
    ? nir(u)
    : void 0;
}
function formatRuleContentForDisplay(u) {
  return formatListEntryForDisplay(u);
}
function renderSessionConsentLabel(u, s, n, a) {
  if (!Array.isArray(u)) return null;
  if (u.length > MAX_PERMISSION_UPDATES) return null;
  if (u.some((g) => g === null || typeof g !== "object")) return null;
  let l = u.filter((g) => g.type === "addRules").flatMap((g) => g.rules || []),
    c = u
      .filter((g) => g.type === "addDirectories")
      .flatMap((g) => (Array.isArray(g.directories) ? g.directories : []));
  if (
    l.some(
      (g) =>
        g === null ||
        typeof g !== "object" ||
        typeof g.toolName !== "string" ||
        (g.ruleContent !== void 0 && typeof g.ruleContent !== "string"),
    )
  )
    return null;
  if (l.length + c.length > MAX_PERMISSION_RULE_ENTRIES) return null;
  let A = l.filter((g) => g.toolName === READ_TOOL_NAME),
    f = l.filter((g) => g.toolName === s);
  if (
    c.some(
      (g) => typeof g !== "string" || g.trim() === "" || getStringWidth(g) === 0 || !isWithinDisplayValueLimit(g),
    )
  )
    return null;
  let T = dedupe(c),
    B = dedupe(
      A.flatMap((g) =>
        g.ruleContent && normalizeRulePathPattern(g.ruleContent) ? g.ruleContent : [],
      ),
    );
  if (B.some((g) => !isWithinDisplayValueLimit(g))) return null;
  let y = dedupe(
    f.flatMap((g) => {
      if (!g.ruleContent) return [];
      return vu(g.ruleContent) ? [g.ruleContent] : [];
    }),
  );
  if (y.some((g) => !isWithinDisplayValueLimit(g))) return null;
  let w = disambiguateLabels(y, (g) => {
      let j = vu(g) || g;
      return formatRuleContentForDisplay(n ? n(j) : j);
    }),
    L = disambiguateLabels([...B, ...T], (g) => (B.includes(g) ? formatRuleContentForDisplay(normalizeRulePathPattern(g)) : formatRuleContentForDisplay(g))),
    k = L.slice(0, B.length),
    M = L.slice(B.length);
  if (getStringWidth([...w, ...k, ...M].join(" and ")) > MAX_CONSENT_LABEL_WIDTH) return null;
  let v = T.length > 0,
    G = k.length > 0,
    K = w.length > 0;
  if (G && !v && !K)
    return r(Text, {
      children: ["Yes, allow reading from ", formatListWithAnd(k), " from this project"],
    });
  if (v && !G && !K)
    return r(Text, {
      children: [
        "Yes, and always allow access to ",
        formatListWithAnd(M),
        " from this project",
      ],
    });
  if (K && !v && !G)
    return r(Text, {
      children: [
        "Yes, and don't ask again for ",
        ju(w),
        " commands",
        " ",
        a === void 0
          ? r(N, {
              children: ["in", " ", e(Text, { bold: !0, children: sanitizeForDisplay(he()) })],
            })
          : r(N, { children: ["on ", e(Text, { bold: !0, children: a })] }),
      ],
    });
  if ((v || G) && !K) {
    let g = [...M, ...k];
    return r(Text, {
      children: [
        "Yes, and always allow access to ",
        formatListWithAnd(g),
        " from this project",
      ],
    });
  }
  if ((v || G) && K) {
    let g = [...M, ...k];
    if (g.length === 1 && w.length === 1)
      return r(Text, {
        children: [
          "Yes, and allow access to ",
          formatListWithAnd(g),
          " and",
          " ",
          ju(w),
          " commands",
        ],
      });
    return r(Text, {
      children: [
        "Yes, and allow ",
        formatListWithAnd(g),
        " access and",
        " ",
        ju(w),
        " commands",
      ],
    });
  }
  return null;
}
var de = Symbol("ConsentRow mint token");
class le {
  #e = !0;
  node;
  applies;
  constructor(u, s, n) {
    if (u !== de)
      throw Error(
        "ConsentRow may only be constructed by the consentRows factories",
      );
    ((this.node = s), (this.applies = n), Object.freeze(this));
  }
  static is(u) {
    return typeof u === "object" && u !== null && #e in u;
  }
}
var isConsentRow = le.is,
  consentRowSchema = createLazyValue(() => qd(isConsentRow));
function $e(u) {
  if (u.length > MAX_PERMISSION_UPDATES) return null;
  let s = [];
  for (let n of u) {
    let a;
    try {
      a = permissionUpdateSchema().safeParse(n);
    } catch {
      return null;
    }
    if (!a.success) return null;
    s.push(a.data);
  }
  return mintDisplayedUpdates(s);
}
function mintConsentRowFromUpdates(u, s) {
  if (!Array.isArray(u)) return null;
  let n;
  try {
    n = u.length;
  } catch {
    return null;
  }
  if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > MAX_PERMISSION_UPDATES)
    return null;
  let a = 0,
    l = [];
  for (let B = 0; B < n; B++)
    try {
      let y = u[B],
        w = y !== null && typeof y === "object" ? { ...y } : y,
        L = !1;
      if (w !== null && typeof w === "object") {
        let k = w;
        for (let M of ["rules", "directories"]) {
          let P = k[M];
          if (!Array.isArray(P)) continue;
          let v = P.length;
          if (typeof v !== "number" || !Number.isSafeInteger(v) || v < 0) {
            L = !0;
            break;
          }
          if (((a += v), a > MAX_PERMISSION_UPDATES * MAX_PERMISSION_RULE_ENTRIES)) return null;
          let G = [];
          for (let K = 0; K < v; K++) G.push(P[K]);
          k[M] = G;
        }
      }
      if (L) continue;
      l.push(w);
    } catch {}
  let c = [];
  for (let B of l) {
    let y;
    try {
      y = permissionUpdateSchema().safeParse(B);
    } catch {
      continue;
    }
    if (y.success) c.push(y.data);
  }
  if (c.length === 0) return null;
  let A = Dn(c, s.displayedTypes, s.labelPredicate);
  if (A.length === 0) return null;
  let f = mintDisplayedUpdates(A),
    T = s.renderLabel(f);
  if (T == null || typeof T === "boolean" || T === "") return null;
  return new le(de, T, f);
}
var YD = {
  default: "default (ask each time)",
  acceptEdits:
    "accept edits (auto-approve file edits and common file commands)",
  auto: "auto (no routine prompts; a reviewer model screens actions)",
  dontAsk: "don't ask (auto-deny anything that would prompt)",
  plan: "plan mode (research and propose changes without making them)",
  bypassPermissions: "BYPASS PERMISSIONS (no further prompts)",
};
function createSetModeRow(u, s) {
  if (u === "bypassPermissions" && s?.isBypassPermissionsModeAvailable === !1)
    return null;
  let n = $e([{ type: "setMode", destination: "session", mode: u }]);
  if (n === null)
    throw Error("setModeRow: schema rejected a designed setMode update");
  if (s?.labelVariant === "plan-keep-context") {
    let a =
      u === "acceptEdits"
        ? "Yes, auto-accept edits"
        : u === "default"
          ? "Yes, manually approve edits"
          : null;
    if (a !== null) return new le(de, e(Text, { children: a }), n);
  }
  return new le(
    de,
    r(Text, {
      children: [
        "Yes, and switch to ",
        e(Text, { bold: !0, children: YD[u] }),
        " for this session",
      ],
    }),
    n,
  );
}
function createAddDirectoriesRow(u) {
  if (!Array.isArray(u)) return null;
  let s;
  try {
    s = u.length;
  } catch {
    return null;
  }
  if (typeof s !== "number" || !Number.isSafeInteger(s) || s < 0 || s > MAX_PERMISSION_UPDATES)
    return null;
  let n = [];
  for (let A = 0; A < s; A++)
    try {
      let f = u[A],
        T = on(f);
      if (T !== null) n.push(T);
    } catch {}
  let a = dedupe(n);
  if (a.length === 0) return null;
  if (a.length > MAX_PERMISSION_RULE_ENTRIES) return null;
  let l = toUniqueDisplayLabels(a, (A) => formatListEntryForDisplay(A));
  if (getStringWidth(l.join(", ")) > MAX_CONSENT_LABEL_WIDTH) return null;
  let c = $e([
    { type: "addDirectories", destination: "session", directories: a },
  ]);
  if (c === null) return null;
  return new le(
    de,
    r(Text, {
      children: [
        "Yes, and always allow access to ",
        e(Text, { bold: !0, children: l.join(", ") }),
        " for this session",
      ],
    }),
    c,
  );
}
function createRuleConsentRow(u, s, n) {
  if (typeof u !== "string" || sanitizeCommandPrefix(u) !== u) return null;
  if (typeof s !== "string") return null;
  let a = s.trim();
  if (a === "" || sanitizeCommandPrefix(a) !== a) return null;
  if (a === "*") {
    if (!Ue(n)) return null;
    let c = $e([
      {
        type: "addRules",
        rules: [{ toolName: n }],
        behavior: "allow",
        destination: "localSettings",
      },
    ]);
    if (c === null) return null;
    return new le(de, `Yes, and don\u2019t ask again for any ${n} command`, c);
  }
  if (!Ue(n) || !$u({ toolName: n, ruleContent: a })) return null;
  let l = $e([
    {
      type: "addRules",
      rules: [{ toolName: n, ruleContent: a }],
      behavior: "allow",
      destination: "localSettings",
    },
  ]);
  if (l === null) return null;
  return new le(de, `Yes, and don\u2019t ask again for: ${a}`, l);
}
var AUTO_MODE_ROW_LABELS = {
    workflow: "Yes, and switch to auto mode",
    "exit-plan-resume": "Yes, and use auto mode",
  },
  HD = (() => {
    let u = $e([]);
    if (u === null) throw Error("NO_DISPLAYED_UPDATES: empty intake rejected");
    return u;
  })();
function createAutoModeRow(u) {
  return new le(de, AUTO_MODE_ROW_LABELS[u], HD);
}
function combineConsentRows(u, ...s) {
  let n = [u, ...s];
  for (let c of n)
    if (!isConsentRow(c))
      throw Error("combineRows accepts only constructor-produced ConsentRows");
  let a = n.flatMap((c) => [...c.applies]);
  if (a.length > MAX_PERMISSION_UPDATES)
    throw Error("combineRows: combined updates exceed the display intake cap");
  let l = $e(a);
  if (l === null)
    throw Error("combineRows: schema rejected already-minted updates");
  return new le(
    de,
    e(Text, {
      children: n.map((c, A) =>
        r(Text, { children: [A > 0 ? "; " : "", c.node] }, A),
      ),
    }),
    l,
  );
}
function Yu({ onlyFirst: u = !1 } = {}) {
  let n = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
  ].join("|");
  return new RegExp(n, u ? void 0 : "g");
}
var KD = Yu();
function Ge(u) {
  if (typeof u !== "string")
    throw TypeError(`Expected a \`string\`, got \`${typeof u}\``);
  return u.replace(KD, "");
}
var rn = () =>
  /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var VD = new Intl.Segmenter(),
  GD = /^\p{Default_Ignorable_Code_Point}$/u;
function Me(u, s = {}) {
  if (typeof u !== "string" || u.length === 0) return 0;
  let { ambiguousIsNarrow: n = !0, countAnsiEscapeCodes: a = !1 } = s;
  if (!a) u = Ge(u);
  if (u.length === 0) return 0;
  let l = 0,
    c = { ambiguousAsWide: !n };
  for (let { segment: A } of VD.segment(u)) {
    let f = A.codePointAt(0);
    if (f <= 31 || (f >= 127 && f <= 159)) continue;
    if ((f >= 8203 && f <= 8207) || f === 65279) continue;
    if (
      (f >= 768 && f <= 879) ||
      (f >= 6832 && f <= 6911) ||
      (f >= 7616 && f <= 7679) ||
      (f >= 8400 && f <= 8447) ||
      (f >= 65056 && f <= 65071)
    )
      continue;
    if (f >= 55296 && f <= 57343) continue;
    if (f >= 65024 && f <= 65039) continue;
    if (GD.test(A)) continue;
    if (rn().test(A)) {
      l += 2;
      continue;
    }
    l += eastAsianWidth(f, c);
  }
  return l;
}
var gu = new Set(["\x1B", "\x9B"]),
  WD = 39,
  Ku = "\x07",
  dn = "[",
  XD = "]",
  fn = "m",
  Eu = `${XD}8;;`,
  sn = (u) => `${gu.values().next().value}${dn}${u}${fn}`,
  Fn = (u) => `${gu.values().next().value}${Eu}${u}${Ku}`,
  qD = (u) => u.split(" ").map((s) => Me(s)),
  Hu = (u, s, n) => {
    let a = [...s],
      l = !1,
      c = !1,
      A = Me(Ge(u.at(-1)));
    for (let [f, T] of a.entries()) {
      let B = Me(T);
      if (A + B <= n) u[u.length - 1] += T;
      else (u.push(T), (A = 0));
      if (gu.has(T))
        ((l = !0), (c = a.slice(f + 1, f + 1 + Eu.length).join("") === Eu));
      if (l) {
        if (c) {
          if (T === Ku) ((l = !1), (c = !1));
        } else if (T === fn) l = !1;
        continue;
      }
      if (((A += B), A === n && f < a.length - 1)) (u.push(""), (A = 0));
    }
    if (!A && u.at(-1).length > 0 && u.length > 1) u[u.length - 2] += u.pop();
  },
  zD = (u) => {
    let s = u.split(" "),
      n = s.length;
    while (n > 0) {
      if (Me(s[n - 1]) > 0) break;
      n--;
    }
    if (n === s.length) return u;
    return s.slice(0, n).join(" ") + s.slice(n).join("");
  },
  ZD = (u, s, n = {}) => {
    if (n.trim !== !1 && u.trim() === "") return "";
    let a = "",
      l,
      c,
      A = qD(u),
      f = [""];
    for (let [w, L] of u.split(" ").entries()) {
      if (n.trim !== !1) f[f.length - 1] = f.at(-1).trimStart();
      let k = Me(f.at(-1));
      if (w !== 0) {
        if (k >= s && (n.wordWrap === !1 || n.trim === !1))
          (f.push(""), (k = 0));
        if (k > 0 || n.trim === !1) ((f[f.length - 1] += " "), k++);
      }
      if (n.hard && A[w] > s) {
        let M = s - k,
          P = 1 + Math.floor((A[w] - M - 1) / s);
        if (Math.floor((A[w] - 1) / s) < P) f.push("");
        Hu(f, L, s);
        continue;
      }
      if (k + A[w] > s && k > 0 && A[w] > 0) {
        if (n.wordWrap === !1 && k < s) {
          Hu(f, L, s);
          continue;
        }
        f.push("");
      }
      if (k + A[w] > s && n.wordWrap === !1) {
        Hu(f, L, s);
        continue;
      }
      f[f.length - 1] += L;
    }
    if (n.trim !== !1) f = f.map((w) => zD(w));
    let T = f.join(`
`),
      B = [...T],
      y = 0;
    for (let [w, L] of B.entries()) {
      if (((a += L), gu.has(L))) {
        let { groups: M } = new RegExp(
          `(?:\\${dn}(?<code>\\d+)m|\\${Eu}(?<uri>.*)${Ku})`,
        ).exec(T.slice(y)) || { groups: {} };
        if (M.code !== void 0) {
          let P = Number.parseFloat(M.code);
          l = P === WD ? void 0 : P;
        } else if (M.uri !== void 0) c = M.uri.length === 0 ? void 0 : M.uri;
      }
      let k = ansiStyles.codes.get(Number(l));
      if (
        B[w + 1] ===
        `
`
      ) {
        if (c) a += Fn("");
        if (l && k) a += sn(k);
      } else if (
        L ===
        `
`
      ) {
        if (l && k) a += sn(l);
        if (c) a += Fn(c);
      }
      y += L.length;
    }
    return a;
  };
function je(u, s, n) {
  return String(u)
    .normalize()
    .replaceAll(
      `\r
`,
      `
`,
    )
    .split(
      `
`,
    )
    .map((a) => ZD(a, s, n)).join(`
`);
}
F();
F();
function ao(ss) {
  return ss + 1;
}
function yu(ts) {
  let xe = _(18),
    { permissionResult: QD } = ts,
    Vu =
      QD?.behavior === "ask" ? QD.denialLimitFallback?.deadlineEpochMs : void 0,
    JD = useIsScreenReaderEnabled(),
    We = useClock(),
    Wu;
  if (xe[0] !== We) ((Wu = We.now()), (xe[0] = We), (xe[1] = Wu));
  else Wu = xe[1];
  let eo;
  if (xe[2] === MEMO_CACHE_SENTINEL) ((eo = Date.now()), (xe[2] = eo));
  else eo = xe[2];
  let uo;
  if (xe[3] !== Wu)
    ((uo = { clockAt: Wu, epochAt: eo }), (xe[3] = Wu), (xe[4] = uo));
  else uo = xe[4];
  let qe = uo,
    to;
  if (xe[5] !== qe.clockAt || xe[6] !== qe.epochAt || xe[7] !== We)
    ((to = () => qe.epochAt + (We.now() - qe.clockAt)),
      (xe[5] = qe.clockAt),
      (xe[6] = qe.epochAt),
      (xe[7] = We),
      (xe[8] = to));
  else to = xe[8];
  let no = to,
    [, ns] = d(0),
    Do;
  if (xe[9] === MEMO_CACHE_SENTINEL) ((Do = () => ns(ao)), (xe[9] = Do));
  else Do = xe[9];
  if ((useInterval(Do, Vu !== void 0 && !JD ? 1000 : null), Vu === void 0)) {
    return null;
  }
  if (JD) {
    let hu = Math.max(0, Vu - no());
    let ze;
    if (xe[10] !== hu) {
      let oo = Math.round(hu / 60000);
      let ro = Math.max(1, Math.round(hu / 1000));
      ze =
        hu >= 60000
          ? `about ${oo} ${pluralize(oo, "minute")}`
          : `about ${ro} ${pluralize(ro, "second")}`;
      ((xe[10] = hu), (xe[11] = ze));
    } else ze = xe[11];
    let Ds = ze;
    const Qe = `${WARNING_GLYPH} Claude Code will automatically deny this request in ${Ds}, to avoid blocking progress on an unattended session`;
    let Je;
    if (xe[12] !== Qe)
      ((Je = e(Box, {
        marginBottom: 1,
        children: e(Text, { color: "warning", children: Qe }),
      })),
        (xe[12] = Qe),
        (xe[13] = Je));
    else Je = xe[13];
    return Je;
  }
  let io = Math.max(0, Vu - no()),
    os = Math.floor(io / 60000),
    rs = Math.floor((io % 60000) / 1000);
  const ze = String(rs);
  let Qe;
  if (xe[14] !== ze) ((Qe = ze.padStart(2, "0")), (xe[14] = ze), (xe[15] = Qe));
  else Qe = xe[15];
  let is = `${os}:${Qe}`;
  const Je = `${WARNING_GLYPH} Claude Code will automatically deny this request in ${is}, to avoid blocking progress on an unattended session`;
  let so;
  if (xe[16] !== Je)
    ((so = e(Box, {
      marginBottom: 1,
      children: e(Text, { color: "warning", children: Je }),
    })),
      (xe[16] = Je),
      (xe[17] = so));
  else so = xe[17];
  return so;
}
function bo(Ps) {
  return Ps.toolPermissionContext.mode;
}
function Ao(Ms, Ns) {
  return e(MultilineBorderBox, { multiline: needsMultilineGutter(Ms), children: Ns });
}
function Bo(u) {
  if (u?.startsWith("plugin")) return "plugin hooks.json";
  if (u?.startsWith("skill")) return "SKILL.md";
  return "settings.json";
}
function xu(u) {
  if (u?.type === "rule" && u.rule.ruleBehavior === "ask") return u.rule;
  if (u?.type === "subcommandResults") {
    for (let s of u.reasons.values())
      if (s.behavior === "ask") {
        let n = xu(s.decisionReason);
        if (n) return n;
      }
  }
  return;
}
function Re(u, s, n) {
  if (!u) return null;
  let a = (l) => prepareDisplayText(l).text;
  if (u.type === "classifier") {
    if (u.classifier === "auto-mode")
      return {
        reasonString: `Auto mode classifier requires confirmation for this ${s}.
${a(u.reason)}`,
        configString: void 0,
        themeColor: "error",
      };
    return {
      reasonString: `Classifier ${chalk.bold(a(u.classifier))} requires confirmation for this ${s}.
${a(u.reason)}`,
      configString: void 0,
    };
  }
  if (u.type === "subcommandResults") {
    let l = xu(u);
    if (l) return Re({ type: "rule", rule: l }, s, n);
    for (let c of u.reasons.values())
      if (c.behavior === "ask" || c.behavior === "passthrough") {
        let A = Re(c.decisionReason, s, n);
        if (A) return A;
      }
  }
  switch (u.type) {
    case "rule": {
      let l = chalk.bold(a(formatPermissionRule(u.rule.ruleValue)));
      if (
        n === "auto" &&
        u.rule.ruleBehavior === "ask" &&
        u.rule.source !== "policySettings"
      )
        return {
          reasonString: `Ask rule ${l} overrides auto mode for this ${s}.`,
          configString: "/permissions to let auto mode decide",
        };
      return {
        reasonString: `Permission rule ${l} requires confirmation for this ${s}.`,
        configString:
          u.rule.source === "policySettings"
            ? void 0
            : "/permissions to update rules",
      };
    }
    case "hook": {
      let l = u.reason
          ? `:
${a(u.reason)}`
          : ".",
        c = u.hookSource ? ` ${chalk.dim(`[${a(u.hookSource)}]`)}` : "";
      return {
        reasonString: `Hook ${chalk.bold(a(u.hookName))} requires confirmation for this ${s}${l}${c}`,
        configString: `${Bo(u.hookSource)} to update hooks`,
      };
    }
    case "safetyCheck":
    case "other":
      return { reasonString: a(u.reason), configString: void 0 };
    case "workingDir":
      return {
        reasonString: a(u.reason),
        configString: "/permissions to update rules",
      };
    default:
      return null;
  }
}
function PermissionReasonPanel(Rs) {
  let Ne = _(27),
    { permissionResult: ce, toolType: pn } = Rs,
    Xu = useAppStateSelector(bo),
    ke = ce?.behavior === "ask" ? ce.denialLimitFallback?.disclosure : void 0,
    q = Re(ce?.decisionReason, pn, Xu),
    se = ke !== void 0 && ke !== ce?.decisionReason ? Re(ke, pn, Xu) : null,
    eu = useTerminalSize().columns,
    lo;
  if (Ne[0] !== ke || Ne[1] !== eu)
    ((lo = (co, Ts) => {
      if (ke === void 0) {
        return co;
      }
      let Fo = Ts;
      let fo = Math.max(20, eu - 8);
      let qu = je(co, fo, { trim: !0, hard: !0 })
        .split(
          `
`,
        )
        .map((ws) => truncateToWidth(ws, fo));
      if (qu.length <= Fo) {
        return qu.join(`
`);
      }
      let po = Math.max(1, Fo - 1);
      return (
        qu.slice(0, po).join(`
`) +
        `
\u2026 (+${qu.length - po} more lines)`
      );
    }),
      (Ne[0] = ke),
      (Ne[1] = eu),
      (Ne[2] = lo));
  else lo = Ne[2];
  let mn = lo,
    mo = ce?.behavior === "ask" ? ce.matchedAskRule : void 0,
    ae =
      mo !== void 0 && xu(ce?.decisionReason) === void 0
        ? Re({ type: "rule", rule: mo }, pn, Xu)
        : null,
    Co;
  if (Ne[3] !== ke || Ne[4] !== eu)
    ((Co = (Eo) => {
      if (Eo === void 0 || ke === void 0) {
        return 0;
      }
      let _s = Math.max(20, eu - 8);
      return (
        countOccurrences(
          je(Eo, _s, { trim: !0, hard: !0 }),
          `
`,
        ) + 1
      );
    }),
      (Ne[3] = ke),
      (Ne[4] = eu),
      (Ne[5] = Co));
  else Co = Ne[5];
  let Cn = Co,
    zu = {
      consent: Cn(q?.reasonString),
      streak: Cn(se?.reasonString),
      askRule: Cn(ae?.reasonString),
    },
    Le = {
      consent: Math.min(zu.consent, 4),
      streak: Math.min(zu.streak, 4),
      askRule: Math.min(zu.askRule, 4),
    },
    Bu = 12 - (Le.consent + Le.streak + Le.askRule);
  for (const En of ["consent", "streak", "askRule"]) {
    if (Bu <= 0) {
      break;
    }
    let go = Math.min(zu[En] - Le[En], Bu);
    ((Le[En] = Le[En] + go), (Bu = Bu - go), Bu);
  }
  let bu = q !== null && q !== void 0 ? mn(q.reasonString, Le.consent) : void 0,
    Au = se ? mn(se.reasonString, Le.streak) : void 0,
    Zu = ae ? mn(ae.reasonString, Le.askRule) : void 0,
    ho;
  if (Ne[6] !== ce)
    ((ho = e(yu, { permissionResult: ce })), (Ne[6] = ce), (Ne[7] = ho));
  else ho = Ne[7];
  let Qu = ho;
  if (!q && !ae && !se) {
    return Qu;
  }
  let Ju =
      q?.themeColor ??
      (ce?.decisionReason?.type === "hook" && Xu === "auto"
        ? "warning"
        : void 0),
    gn = Ao,
    et;
  if (Ne[8] !== bu || Ne[9] !== q || Ne[10] !== Ju)
    ((et =
      q &&
      gn(
        bu ?? q.reasonString,
        Ju
          ? e(Text, { color: Ju, children: bu ?? q.reasonString })
          : e(Text, { children: e(Ansi, { children: bu ?? q.reasonString }) }),
      )),
      (Ne[8] = bu),
      (Ne[9] = q),
      (Ne[10] = Ju),
      (Ne[11] = et));
  else et = Ne[11];
  let ut;
  if (Ne[12] !== q)
    ((ut = q?.configString && e(Text, { dimColor: !0, children: q.configString })),
      (Ne[12] = q),
      (Ne[13] = ut));
  else ut = Ne[13];
  let nt;
  if (Ne[14] !== ae || Ne[15] !== Zu || Ne[16] !== q?.configString)
    ((nt =
      ae &&
      r(N, {
        children: [
          gn(
            Zu ?? ae.reasonString,
            e(Text, { children: e(Ansi, { children: Zu ?? ae.reasonString }) }),
          ),
          ae.configString &&
            ae.configString !== q?.configString &&
            e(Text, { dimColor: !0, children: ae.configString }),
        ],
      })),
      (Ne[14] = ae),
      (Ne[15] = Zu),
      (Ne[16] = q?.configString),
      (Ne[17] = nt));
  else nt = Ne[17];
  let Dt;
  if (Ne[18] !== Au || Ne[19] !== se)
    ((Dt =
      se &&
      gn(
        Au ?? se.reasonString,
        se.themeColor
          ? e(Text, { color: se.themeColor, children: Au ?? se.reasonString })
          : e(Text, { children: e(Ansi, { children: Au ?? se.reasonString }) }),
      )),
      (Ne[18] = Au),
      (Ne[19] = se),
      (Ne[20] = Dt));
  else Dt = Ne[20];
  let yo;
  if (
    Ne[21] !== Qu ||
    Ne[22] !== et ||
    Ne[23] !== ut ||
    Ne[24] !== nt ||
    Ne[25] !== Dt
  )
    ((yo = r(Box, {
      marginBottom: 1,
      flexDirection: "column",
      children: [et, ut, nt, Dt, Qu],
    })),
      (Ne[21] = Qu),
      (Ne[22] = et),
      (Ne[23] = ut),
      (Ne[24] = nt),
      (Ne[25] = Dt),
      (Ne[26] = yo));
  else yo = Ne[26];
  return yo;
}
F();
F();
function jo(Pn) {
  return {
    ...Pn,
    attribution: {
      ...Pn.attribution,
      escapeCount: Pn.attribution.escapeCount + 1,
    },
  };
}
function getFeedbackTypeForAnswer(u) {
  return u === "yes" ? "accept" : u === "no" ? "reject" : void 0;
}
function useConsentFeedbackState(Ks) {
  let Ye = _(35),
    {
      feedbackTypeOf: Te,
      toolName: uu,
      isMcp: tu,
      initialFocusedType: hn,
    } = Ks,
    yn = useSetAppState(),
    [nu, Vs] = d(""),
    [Du, Gs] = d(""),
    [fe, Bn] = d(!1),
    [pe, bn] = d(!1),
    [An, Ws] = d(!1),
    [xn, Xs] = d(!1),
    [ot, qs] = d(void 0),
    xo;
  if (Ye[0] !== Te || Ye[1] !== ot || Ye[2] !== hn)
    ((xo = ot === void 0 ? hn : Te(ot)),
      (Ye[0] = Te),
      (Ye[1] = ot),
      (Ye[2] = hn),
      (Ye[3] = xo));
  else xo = Ye[3];
  let So = xo,
    Ro;
  if (
    Ye[4] !== fe ||
    Ye[5] !== Te ||
    Ye[6] !== tu ||
    Ye[7] !== pe ||
    Ye[8] !== uu
  )
    ((Ro = (zs) => {
      let To = Te(zs);
      let rt = { toolName: uu, isMcp: tu };
      if (To === "accept") {
        if (fe) (Bn(!1), logEvent("tengu_accept_feedback_mode_collapsed", rt));
        else (Bn(!0), Ws(!0), logEvent("tengu_accept_feedback_mode_entered", rt));
      } else if (To === "reject") {
        if (pe) (bn(!1), logEvent("tengu_reject_feedback_mode_collapsed", rt));
        else (bn(!0), Xs(!0), logEvent("tengu_reject_feedback_mode_entered", rt));
      }
    }),
      (Ye[4] = fe),
      (Ye[5] = Te),
      (Ye[6] = tu),
      (Ye[7] = pe),
      (Ye[8] = uu),
      (Ye[9] = Ro));
  else Ro = Ye[9];
  let kn = Ro,
    wo;
  if (
    Ye[10] !== nu ||
    Ye[11] !== fe ||
    Ye[12] !== Te ||
    Ye[13] !== Du ||
    Ye[14] !== pe
  )
    ((wo = (_o) => {
      let Po = Te(_o);
      if (Po !== "accept" && fe && !nu.trim()) Bn(!1);
      if (Po !== "reject" && pe && !Du.trim()) bn(!1);
      qs(_o);
    }),
      (Ye[10] = nu),
      (Ye[11] = fe),
      (Ye[12] = Te),
      (Ye[13] = Du),
      (Ye[14] = pe),
      (Ye[15] = wo));
  else wo = Ye[15];
  let Sn = wo,
    Mo;
  if (Ye[16] !== An || Ye[17] !== tu || Ye[18] !== xn || Ye[19] !== uu)
    ((Mo = (No, Lo) => {
      logEvent(No === "accept" ? "tengu_accept_submitted" : "tengu_reject_submitted", {
        toolName: uu,
        isMcp: tu,
        has_instructions: !!Lo,
        instructions_length: Lo?.length ?? 0,
        entered_feedback_mode: No === "accept" ? An : xn,
      });
    }),
      (Ye[16] = An),
      (Ye[17] = tu),
      (Ye[18] = xn),
      (Ye[19] = uu),
      (Ye[20] = Mo));
  else Mo = Ye[20];
  let Rn = Mo,
    Io;
  if (Ye[21] !== yn)
    ((Io = () => {
      (logEvent("tengu_permission_request_escape", {}), yn(jo));
    }),
      (Ye[21] = yn),
      (Ye[22] = Io));
  else Io = Ye[22];
  let Tn = Io,
    wn = (So === "accept" && !fe) || (So === "reject" && !pe),
    Uo;
  if (Ye[23] !== wn)
    ((Uo = wn && e(KeybindingHint, { chord: "tab", action: "amend" })),
      (Ye[23] = wn),
      (Ye[24] = Uo));
  else Uo = Ye[24];
  let _n = Uo,
    $o;
  if (
    Ye[25] !== nu ||
    Ye[26] !== fe ||
    Ye[27] !== Sn ||
    Ye[28] !== kn ||
    Ye[29] !== _n ||
    Ye[30] !== Tn ||
    Ye[31] !== Rn ||
    Ye[32] !== Du ||
    Ye[33] !== pe
  )
    (($o = {
      acceptFeedback: nu,
      rejectFeedback: Du,
      setAcceptFeedback: Vs,
      setRejectFeedback: Gs,
      acceptInputMode: fe,
      rejectInputMode: pe,
      handleInputModeToggle: kn,
      handleFocus: Sn,
      logSubmitted: Rn,
      logEscape: Tn,
      hintNode: _n,
    }),
      (Ye[25] = nu),
      (Ye[26] = fe),
      (Ye[27] = Sn),
      (Ye[28] = kn),
      (Ye[29] = _n),
      (Ye[30] = Tn),
      (Ye[31] = Rn),
      (Ye[32] = Du),
      (Ye[33] = pe),
      (Ye[34] = $o));
  else $o = Ye[34];
  return $o;
}
var uD = {
  accept: "tell Claude what to do next",
  reject: "tell Claude what to do differently",
};
function ConfirmationPrompt({
  options: u,
  onSelect: s,
  onCancel: n,
  question: a = "Do you want to proceed?",
  toolAnalyticsContext: l,
  defaultFocusValue: c,
  hideIndexes: A,
}) {
  let [f, T] = d(c);
  E(() => {
    T(void 0);
  }, []);
  let B = re((W) => u.find((H) => H.value === W)?.feedbackConfig?.type, [u]),
    {
      acceptFeedback: y,
      rejectFeedback: w,
      setAcceptFeedback: L,
      setRejectFeedback: k,
      acceptInputMode: M,
      rejectInputMode: P,
      handleInputModeToggle: v,
      handleFocus: G,
      logSubmitted: K,
      logEscape: g,
      hintNode: j,
    } = useConsentFeedbackState({ feedbackTypeOf: B, toolName: l?.toolName, isMcp: l?.isMcp ?? !1 }),
    J = V(
      () =>
        u.map((W) => {
          let { value: H, label: I, feedbackConfig: Z } = W;
          if (!Z) return { label: I, value: H, description: W.description };
          let { type: ne, placeholder: be } = Z,
            fu = ne === "accept" ? M : P,
            pu = ne === "accept" ? L : k,
            mu = uD[ne];
          if (fu)
            return {
              type: "input",
              label: I,
              value: H,
              placeholder: be ?? mu,
              onChange: pu,
              allowEmptySubmitToCancel: !0,
            };
          return { label: I, value: H, description: W.description };
        }),
      [u, M, P],
    ),
    z = re(
      (W) => {
        let H = u.find((be) => be.value === W);
        if (!H) return;
        let I = H.feedbackConfig,
          Z,
          ne = "";
        if (I) {
          if (((ne = (I.type === "accept" ? y : w).trim()), ne)) Z = ne;
        }
        if (s(W, Z) === !1) return !1;
        if (I) K(I.type, ne);
      },
      [u, y, w, s, K],
    ),
    X = V(() => {
      let W = u.find(
          (I) =>
            (I.feedbackConfig?.type === "accept" && M) ||
            (I.feedbackConfig?.type === "reject" && P),
        ),
        H = {};
      for (let I of u)
        if (I.keybinding) H[I.keybinding] = () => (W ? v(W.value) : z(I.value));
      return H;
    }, [u, M, P, v, z]);
  useKeybindings(X, { context: "Confirmation" });
  let ee = re(() => {
    if (n?.() === !1) return;
    g();
  }, [n, g]);
  return r(Box, {
    flexDirection: "column",
    children: [
      typeof a === "string" ? e(Text, { children: a }) : a,
      e(Select, {
        selectedValue: NO_COMMITTED_ROW,
        options: J,
        defaultFocusValue: f,
        hideIndexes: A,
        inlineDescriptions: !0,
        onChange: z,
        onCancel: ee,
        onFocus: G,
        onInputModeToggle: v,
      }),
      e(Box, {
        marginTop: 1,
        children: e(Text, {
          dimColor: !0,
          children: r(DotSeparatedList, {
            children: [e(KeybindingHint, { chord: "escape", action: "cancel" }), j],
          }),
        }),
      }),
    ],
  });
}
F();
F();
function rr(_a) {
  return _a.toolPermissionContext;
}
var ENABLE_AUTO_MODE_DESCRIPTION = "\xB7 workflows run best with it on";
function useAutoModeOffer(Ra) {
  let DD = _(10),
    Ie = useAppStateSelector(rr),
    tD = useSetAppState(),
    { addNotification: nD } = useNotificationQueue(),
    nr;
  if (DD[0] !== Ie)
    ((nr = (Ie.mode === "default" || Ie.mode === "acceptEdits") && canCycleToAuto(Ie)),
      (DD[0] = Ie),
      (DD[1] = nr));
  else nr = DD[1];
  let dt = nr,
    oD = Ra?.type === "workflow-agent" && dt,
    Dr;
  if (DD[2] !== nD || DD[3] !== tD || DD[4] !== Ie)
    ((Dr = (_u) => {
      let Ta = _u === void 0 ? "workflow_permission_prompt" : _u;
      if (
        !setPermissionModeWithGuards(
          "auto",
          Ie,
          (wa) =>
            tD((ft) => {
              let or = wa(ft.toolPermissionContext);
              if (or === ft.toolPermissionContext) {
                return ft;
              }
              return { ...ft, toolPermissionContext: or };
            }),
          Ta,
        ).ok
      ) {
        return (
          nD({
            key: "workflow-auto-mode-unavailable",
            kind: "warning",
            text: getAutoModeUnavailableText(),
            color: "warning",
            priority: "high",
          }),
          !1
        );
      }
      return !0;
    }),
      (DD[2] = nD),
      (DD[3] = tD),
      (DD[4] = Ie),
      (DD[5] = Dr));
  else Dr = DD[5];
  let rD = Dr,
    _u;
  if (DD[6] !== dt || DD[7] !== rD || DD[8] !== oD)
    ((_u = { offered: oD, canOfferAutoMode: dt, enableAutoMode: rD }),
      (DD[6] = dt),
      (DD[7] = rD),
      (DD[8] = oD),
      (DD[9] = _u));
  else _u = DD[9];
  return _u;
}
F();
var Oe = 200000,
  Lt = Oe,
  sr = 1e4,
  ar = 1000,
  lr = 200000;
function lD(u) {
  return typeof u === "string" && u.length <= 256;
}
var iu = 80,
  cr = 50000,
  dr = new Set(["channel_id", "channel"]),
  fr = new Set(["ts", "thread_ts"]),
  pr = /^\d{10}\.\d{6}$/,
  mr = /\b\d{4}\b/,
  Cr = /\d{1,2}:\d{2}/;
function we(u, s, n, a) {
  return (
    getStringWidth(u) + 2 + getStringWidth(s) + (n === void 0 ? 0 : getStringWidth(n) + 3) <= Math.min(iu, a - 2)
  );
}
var gr = 64;
function Ot(u, s, n = 0, a = { remaining: sr, unitsRemaining: Oe }) {
  if (typeof u === "string") {
    if (u.length + 2 > a.unitsRemaining)
      throw Error("value exceeds the units display budget");
    let l = jsonStringify(u);
    if (((a.unitsRemaining -= l.length), a.unitsRemaining < 0))
      throw Error("value exceeds the units display budget");
    return l;
  }
  if (u === null || typeof u === "number" || typeof u === "boolean") {
    let l = String(u);
    if (((a.unitsRemaining -= l.length), a.unitsRemaining < 0))
      throw Error("value exceeds the units display budget");
    return l;
  }
  if (n >= gr) throw Error("value exceeds the display depth bound");
  if (Array.isArray(u)) {
    if (u.length === 0) return "[]";
    let l = u.length;
    if (typeof l !== "number" || !Number.isSafeInteger(l) || l < 0)
      throw Error("value exceeds the element display budget");
    if (((a.remaining -= l), a.remaining < 0))
      throw Error("value exceeds the element display budget");
    let c = [];
    for (let T = 0; T < l; T++) c.push(Ot(u[T], s + 1, n + 1, a));
    if (
      c.every(
        (T) =>
          !T.includes(`
`),
      )
    ) {
      let T = `[${c.join(", ")}]`;
      if (getStringWidth(T) <= iu) return T;
    }
    let A = "  ".repeat(s + 1),
      f = "  ".repeat(s);
    return `[
${c.map((T) => A + T).join(`,
`)}
${f}]`;
  }
  if (typeof u === "object") {
    let l = Object.entries(u);
    if (l.length === 0) return "{}";
    if (((a.remaining -= l.length), a.remaining < 0))
      throw Error("value exceeds the element display budget");
    for (let [B] of l) {
      if (B.length > lr) throw Error("nested key exceeds the display bound");
      if (B.length > a.unitsRemaining)
        throw Error("keys exceed the units display budget");
      if (collapseInvisibleCharacterRuns(B) !== B) throw Error("nested key display would drop code points");
      a.unitsRemaining -= B.length;
    }
    let c = buildUniqueLabelMap(l.map(([B]) => B));
    for (let [B] of l) {
      let y = c.get(B) ?? B;
      if (y.length > B.length) {
        if (((a.unitsRemaining -= y.length - B.length), a.unitsRemaining < 0))
          throw Error("keys exceed the units display budget");
      }
    }
    let A = l.map(([B, y]) => `${c.get(B) ?? B}: ${Ot(y, s + 1, n + 1, a)}`);
    if (
      A.every(
        (B) =>
          !B.includes(`
`),
      )
    ) {
      let B = `{ ${A.join(", ")} }`;
      if (getStringWidth(B) <= iu) return B;
    }
    let f = "  ".repeat(s + 1),
      T = "  ".repeat(s);
    return `{
${A.map((B) => f + B).join(`,
`)}
${T}}`;
  }
  if (typeof u === "bigint") throw Error("bigint value cannot be rendered");
  return "undefined";
}
var FD =
  /^(\d{4})-(\d{2})-(\d{2})[Tt ](\d{2}):(\d{2})(?::(\d{2})(?:\.\d{1,9})?)?(?:[Zz]|[+-]\d{2}:?\d{2})?$/;
function cD(u) {
  let s = u.trim(),
    n = s.match(FD);
  if (!n) return null;
  let a = Number(n[1] ?? ""),
    l = Number(n[2] ?? ""),
    c = Number(n[3] ?? ""),
    A = Number(n[4] ?? ""),
    f = Number(n[5] ?? ""),
    T = n[6] === void 0 ? 0 : Number(n[6]);
  if (a < 100) return null;
  let B = new Date(Date.UTC(a, l, 0)).getUTCDate();
  if (l < 1 || l > 12 || c < 1 || c > B) return null;
  if (A > 24 || f > 59 || T > 59 || (A === 24 && (f > 0 || T > 0))) return null;
  let y = Date.parse(s);
  if (Number.isNaN(y)) return null;
  if (!/(?:[Zz]|[+-]\d{2}:?\d{2})$/.test(s)) {
    let k = new Date(Date.UTC(a, l - 1, c, A, f)),
      M = new Date(y);
    if (
      M.getFullYear() !== k.getUTCFullYear() ||
      M.getMonth() !== k.getUTCMonth() ||
      M.getDate() !== k.getUTCDate() ||
      M.getHours() !== k.getUTCHours() ||
      M.getMinutes() !== k.getUTCMinutes()
    )
      return null;
  }
  let L = Date.UTC(a, l - 1, c, A, f, T);
  if (Math.abs(y - L) > 50400000) return null;
  return new Date(y).toLocaleString(void 0, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}
function Ut(u, s, n = iu) {
  if (u === null || typeof u !== "object" || Array.isArray(u))
    return [
      {
        kind: "inline",
        key: "input",
        text: "(parameters are not an object \u2014 deny unless expected)",
        unrenderable: !0,
      },
    ];
  let a = Object.entries(u),
    l = oL(u);
  if (l !== null)
    return [
      {
        kind: "inline",
        key: "input",
        text: l,
        unrenderable: !0,
        parseFailureSentinel: !0,
      },
    ];
  let c = [],
    A = a.length;
  if (A > ar)
    return [
      {
        kind: "inline",
        key: "input",
        text: `(${A} parameters \u2014 too many to show \u2014 deny unless expected)`,
        unrenderable: !0,
      },
    ];
  let f = [],
    T = 0,
    B = 0;
  for (let [k, M] of a) {
    if (k.length > Oe) {
      T += 1;
      continue;
    }
    if ((f.push(k), (B += k.length), typeof M === "string" && M.length <= Oe))
      B += M.length;
  }
  if (B > Lt)
    return [
      {
        kind: "inline",
        key: "input",
        text: `(parameters total ${B.toLocaleString()} characters \u2014 too much to show \u2014 deny unless expected)`,
        unrenderable: !0,
      },
    ];
  if (T > 0)
    c.push({
      kind: "inline",
      key: "input",
      text: `(${T} parameter ${T === 1 ? "name is" : "names are"} too large to show \u2014 deny unless expected)`,
      unrenderable: !0,
    });
  let y = buildUniqueLabelMap(f),
    w = a.find(([k]) => k === "language")?.[1],
    L = 0;
  for (let [k, M] of a) {
    if (k.length > Oe) continue;
    let P = y.get(k) ?? k;
    if (collapseInvisibleCharacterRuns(k) !== k) {
      L += 1;
      continue;
    }
    if (typeof M === "string") {
      if (M.length > Oe) {
        let I = `(value of ${M.length.toLocaleString()} characters cannot be shown \u2014 deny unless expected)`;
        if (!we(P, I, void 0, n))
          c.push({ kind: "block", key: P, text: I, unrenderable: !0 });
        else c.push({ kind: "inline", key: P, text: I, unrenderable: !0 });
        continue;
      }
      let g = sanitizeUntrustedText(M),
        j = collapseInvisibleCharacterRuns(g);
      if (GRAPHEME_TRUNCATION_MARKER_PATTERN.test(j) || j !== g) {
        let I = `(value of ${M.length.toLocaleString()} characters cannot be shown in full \u2014 deny unless expected)`;
        if (!we(P, I, void 0, n))
          c.push({ kind: "block", key: P, text: I, unrenderable: !0 });
        else c.push({ kind: "inline", key: P, text: I, unrenderable: !0 });
        continue;
      }
      let J = j.replace(/\t/g, " ");
      if (
        j.includes(`
`) ||
        getStringWidth(j) > iu
      ) {
        let I = k === "code" && lD(w) ? sanitizeUntrustedText(w) : void 0;
        c.push({ kind: "block", key: P, text: J, language: I });
        continue;
      }
      let z = jsonStringify(j),
        X = s?.[k] === "date-time" && mr.test(j) && Cr.test(j),
        W =
          fr.has(k) && pr.test(j)
            ? (cD(new Date(Number(j) * 1000).toISOString()) ?? void 0)
            : X || FD.test(j)
              ? (cD(j) ?? void 0)
              : void 0;
      if (!we(P, z, W, n)) {
        let I = k === "code" && lD(w) ? sanitizeUntrustedText(w) : void 0;
        c.push({ kind: "block", key: P, text: J, annotation: W, language: I });
        continue;
      }
      let H = dr.has(k)
        ? (getSlackChannelUrl(j) ?? void 0)
        : /^https?:\/\/\S+$/.test(j) && !hasInvisibleCharacters(j)
          ? j
          : void 0;
      c.push({ kind: "inline", key: P, text: z, linkUrl: H, annotation: W });
      continue;
    }
    if (M === null || typeof M === "number" || typeof M === "boolean") {
      let g = String(M);
      if (!we(P, g, void 0, n)) {
        c.push({ kind: "block", key: P, text: g });
        continue;
      }
      c.push({ kind: "inline", key: P, text: g });
      continue;
    }
    let v,
      G = "",
      K = 0;
    try {
      let g = Ot(M, 0);
      if (((K = g.length), g.length > Oe)) {
        let j = `(value of ${g.length.toLocaleString()} formatted characters cannot be shown \u2014 deny unless expected)`;
        if (!we(P, j, void 0, n))
          c.push({ kind: "block", key: P, text: j, unrenderable: !0 });
        else c.push({ kind: "inline", key: P, text: j, unrenderable: !0 });
        continue;
      }
      ((G = sanitizeUntrustedText(g)), (v = collapseInvisibleCharacterRuns(G)));
    } catch {
      if (
        !we(
          P,
          "(value too large or too deeply nested to render \u2014 deny unless expected)",
          void 0,
          n,
        )
      )
        c.push({
          kind: "block",
          key: P,
          text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
          unrenderable: !0,
        });
      else
        c.push({
          kind: "inline",
          key: P,
          text: "(value too large or too deeply nested to render \u2014 deny unless expected)",
          unrenderable: !0,
        });
      continue;
    }
    if (((B += K), B > Lt))
      return [
        {
          kind: "inline",
          key: "input",
          text: `(parameters total over ${Lt.toLocaleString()} rendered characters \u2014 too much to show \u2014 deny unless expected)`,
          unrenderable: !0,
        },
      ];
    if (GRAPHEME_TRUNCATION_MARKER_PATTERN.test(v) || collapseInvisibleCharacterRuns(G) !== G) {
      let g = `(value of ${K.toLocaleString()} formatted characters cannot be shown in full \u2014 deny unless expected)`;
      if (!we(P, g, void 0, n))
        c.push({ kind: "block", key: P, text: g, unrenderable: !0 });
      else c.push({ kind: "inline", key: P, text: g, unrenderable: !0 });
      continue;
    }
    if (
      !v.includes(`
`) &&
      we(P, v, void 0, n)
    )
      c.push({ kind: "inline", key: P, text: v });
    else c.push({ kind: "block", key: P, text: v, language: "javascript" });
  }
  if (L > 0)
    c.push({
      kind: "inline",
      key: "input",
      text: `(${L} parameter ${L === 1 ? "name" : "names"} cannot be shown in full \u2014 deny unless expected)`,
      unrenderable: !0,
    });
  return c;
}
function hr(u, s) {
  return (
    u.language !== void 0 &&
    s !== null &&
    u.text.length <= cr &&
    s.supportsLanguage(u.language)
  );
}
function dD(qa) {
  let mt = _(38),
    { keyText: iD, contentColumns: pt } = qa,
    Ct,
    Et,
    gt,
    ht,
    yt,
    Bt,
    bt,
    sD,
    At,
    xt,
    kt,
    St,
    Rt,
    Tt,
    wt,
    _t;
  if (mt[0] !== pt || mt[1] !== iD) {
    sD = EARLY_RETURN_SENTINEL;
    bb0: {
      let Pt = wrapAnsi(`${iD}:`, Math.max(10, pt - 2), { hard: !0, trim: !1 });
      let aD = Pt.indexOf(`
`);
      if (aD === -1) {
        sD = e(Text, { dimColor: !0, children: Pt });
        break bb0;
      }
      gt = Box;
      Bt = "column";
      bt = e(Text, { dimColor: !0, children: Pt.slice(0, aD) });
      Et = Box;
      xt = 2;
      kt = "single";
      St = !0;
      Rt = !1;
      Tt = !1;
      wt = !1;
      _t = !0;
      yt = 1;
      Ct = Text;
      ht = !0;
      At = wrapAnsi(Pt.slice(aD + 1).replace(/\n/g, ""), Math.max(10, pt - 4), {
        hard: !0,
        trim: !1,
      });
    }
    ((mt[0] = pt),
      (mt[1] = iD),
      (mt[2] = Ct),
      (mt[3] = Et),
      (mt[4] = gt),
      (mt[5] = ht),
      (mt[6] = yt),
      (mt[7] = Bt),
      (mt[8] = bt),
      (mt[9] = sD),
      (mt[10] = At),
      (mt[11] = xt),
      (mt[12] = kt),
      (mt[13] = St),
      (mt[14] = Rt),
      (mt[15] = Tt),
      (mt[16] = wt),
      (mt[17] = _t));
  } else
    ((Ct = mt[2]),
      (Et = mt[3]),
      (gt = mt[4]),
      (ht = mt[5]),
      (yt = mt[6]),
      (Bt = mt[7]),
      (bt = mt[8]),
      (sD = mt[9]),
      (At = mt[10]),
      (xt = mt[11]),
      (kt = mt[12]),
      (St = mt[13]),
      (Rt = mt[14]),
      (Tt = mt[15]),
      (wt = mt[16]),
      (_t = mt[17]));
  if (sD !== EARLY_RETURN_SENTINEL) return sD;
  let Mt;
  if (mt[18] !== Ct || mt[19] !== ht || mt[20] !== At)
    ((Mt = e(Ct, { dimColor: ht, children: At })),
      (mt[18] = Ct),
      (mt[19] = ht),
      (mt[20] = At),
      (mt[21] = Mt));
  else Mt = mt[21];
  let Nt;
  if (
    mt[22] !== Et ||
    mt[23] !== yt ||
    mt[24] !== Mt ||
    mt[25] !== xt ||
    mt[26] !== kt ||
    mt[27] !== St ||
    mt[28] !== Rt ||
    mt[29] !== Tt ||
    mt[30] !== wt ||
    mt[31] !== _t
  )
    ((Nt = e(Et, {
      marginLeft: xt,
      borderStyle: kt,
      borderLeft: St,
      borderRight: Rt,
      borderTop: Tt,
      borderBottom: wt,
      borderDimColor: _t,
      paddingLeft: yt,
      children: Mt,
    })),
      (mt[22] = Et),
      (mt[23] = yt),
      (mt[24] = Mt),
      (mt[25] = xt),
      (mt[26] = kt),
      (mt[27] = St),
      (mt[28] = Rt),
      (mt[29] = Tt),
      (mt[30] = wt),
      (mt[31] = _t),
      (mt[32] = Nt));
  else Nt = mt[32];
  let ir;
  if (mt[33] !== gt || mt[34] !== Bt || mt[35] !== bt || mt[36] !== Nt)
    ((ir = r(gt, { flexDirection: Bt, children: [bt, Nt] })),
      (mt[33] = gt),
      (mt[34] = Bt),
      (mt[35] = bt),
      (mt[36] = Nt),
      (mt[37] = ir));
  else ir = mt[37];
  return ir;
}
function $t({ entries: u, contentColumns: s }) {
  let [n] = useTheme(),
    l = useSettings().syntaxHighlightingDisabled ?? !1,
    c = C(new Map()),
    A = V(() => {
      let y = l ? null : getSyntaxHighlightAdapter(),
        w = new Map(),
        L = u.map((k) => {
          if (k.kind !== "block") return null;
          let M = `${n}\x00${l}\x00${k.language ?? ""}\x00${k.text}`,
            P = w.get(M) ?? c.current.get(M);
          if (P === void 0)
            P =
              hr(k, y) && k.language !== void 0 && y !== null
                ? y.highlight(k.text, { language: k.language })
                : hasInvisibleCharacters(k.text)
                  ? k.text
                  : linkifyUrls(k.text, n);
          return (w.set(M, P), P);
        });
      return ((c.current = w), L);
    }, [u, n, l]),
    f = V(
      () =>
        A.map((y) =>
          y === null
            ? null
            : wrapAnsi(y, Math.max(10, s - 4), { hard: !0, trim: !1 }),
        ),
      [A, s],
    ),
    T = useHyperlinkSupport(),
    B =
      u.length === 1 &&
      u[0].kind === "inline" &&
      u[0].parseFailureSentinel === !0
        ? u[0]
        : null;
  if (B !== null)
    return e(Box, {
      marginTop: 1,
      children: e(Text, { dimColor: !0, children: B.text }),
    });
  if (u.length === 0) return null;
  return e(Box, {
    flexDirection: "column",
    marginTop: 1,
    children: u.map((y, w) =>
      y.kind === "inline"
        ? r(
            Text,
            {
              children: [
                r(Text, { dimColor: !0, children: [y.key, ": "] }),
                e(Ansi, {
                  children:
                    y.linkUrl !== void 0 && T ? formatHyperlink(y.linkUrl, y.text) : y.text,
                }),
                y.annotation !== void 0 &&
                  r(Text, { dimColor: !0, children: [" (", y.annotation, ")"] }),
              ],
            },
            w,
          )
        : r(
            Box,
            {
              flexDirection: "column",
              children: [
                e(dD, { keyText: y.key, contentColumns: s }),
                e(Box, {
                  marginLeft: 2,
                  borderStyle: "single",
                  borderLeft: !0,
                  borderRight: !1,
                  borderTop: !1,
                  borderBottom: !1,
                  borderDimColor: !0,
                  paddingLeft: 1,
                  children: e(Ansi, { children: f[w] ?? y.text }),
                }),
                y.annotation !== void 0 &&
                  e(Box, {
                    marginLeft: 2,
                    children: r(Text, {
                      dimColor: !0,
                      children: ["(", y.annotation, ")"],
                    }),
                  }),
              ],
            },
            w,
          ),
    ),
  });
}
function Vr(Ol) {
  return Ol.unrenderable === !0;
}
function Gr(Ul) {
  return hasRenderableText(Ul);
}
function Wr($l) {
  return !$l;
}
function wD(u, s, n, a) {
  switch (u) {
    case "yes":
    case "yes-enable-auto-mode":
      return {
        behavior: "allow",
        updatedInput: s.input,
        ...(a && { feedback: a }),
      };
    case "yes-dont-ask-again": {
      if (n === null || !isConsentRow(n))
        return { behavior: "allow", updatedInput: s.input };
      return {
        behavior: "allow",
        updatedInput: s.input,
        permissionUpdates: n.applies,
      };
    }
    case "no":
      return { behavior: "deny", ...(a && { feedback: a }) };
  }
}
function _D(u, s) {
  return mintConsentRowFromUpdates(
    [
      {
        type: "addRules",
        rules: [{ toolName: u.toolName }],
        behavior: "allow",
        destination: "localSettings",
      },
    ],
    {
      displayedTypes: Kr,
      renderLabel: (n) => {
        let a = n.length === 1 ? n[0] : void 0;
        if (
          a === void 0 ||
          a.type !== "addRules" ||
          a.rules.length !== 1 ||
          a.rules[0]?.toolName !== u.toolName ||
          a.rules[0]?.ruleContent !== void 0
        )
          return null;
        let l = String(u.userFacingName);
        if (getStringWidth(l) >= MAX_DISPLAY_LABEL_WIDTH || l.includes("\u2026")) return null;
        if (s.cwd.includes("\u2026")) return null;
        let c = Math.max(24, s.maxLabelWidth),
          A = (w) =>
            `Yes, and don't ask again for ${u.userFacingName} commands in ${w}`,
          f = sanitizeForDisplay(s.cwd);
        if (getStringWidth(A(f)) <= c) return A(f);
        if (f !== s.cwd) return null;
        let T = formatPathWithTilde(s.cwd);
        if (getStringWidth(A(T)) <= c) return A(T);
        let B = splitGraphemes(T),
          y = "";
        for (let w = 0; w < B.length; w++) {
          let L = y + B[w];
          if (getStringWidth(A(`${L}\u2026`)) > c) break;
          y = L;
        }
        if (y.length > 0) return A(`${y}\u2026`);
        return null;
      },
    },
  );
}
var Kr = new Set(["addRules"]);
function nn(u) {
  let s = u.permissionResult.decisionReason;
  return (
    findSafetyCheckReason(s, (a) => !a.classifierApprovable) !== void 0 ||
    u.isAskCappedByOrg ||
    isRemoteOrPluginRequestSource(u.requestSource)
  );
}
function shouldOfferAlwaysAllow(u) {
  return u.showAlwaysAllow && !nn(u) && Ue(u.toolName);
}
var PD = 2;
function ToolPermissionDialog(Sl) {
  let O = _(120),
    { payload: S, answer: su, wouldTakeAnswer: fD } = Sl,
    pD = C(null),
    Ee = useTerminalSize(),
    yr;
  if (O[0] !== Ee.columns)
    ((yr = () => Math.max(20, Math.min(40, Ee.columns - 6))),
      (O[0] = Ee.columns),
      (O[1] = yr));
  else yr = O[1];
  let [Rl, Tl] = d(yr),
    Br;
  if (O[2] === MEMO_CACHE_SENTINEL)
    ((Br = () => {
      if (pD.current) {
        let { width: br } = measureElement(pD.current);
        if (br > 0) Tl(Math.max(20, br - 2));
      }
    }),
      (O[2] = Br));
  else Br = O[2];
  let Ar;
  if (O[3] !== Ee.columns || O[4] !== Ee.rows)
    ((Ar = [Ee.columns, Ee.rows]),
      (O[3] = Ee.columns),
      (O[4] = Ee.rows),
      (O[5] = Ar));
  else Ar = O[5];
  E(Br, Ar);
  let Fe = Math.min(Rl, Math.max(20, Ee.columns - 6)),
    xr;
  if (
    O[6] !== Fe ||
    O[7] !== S.input ||
    O[8] !== S.isMcp ||
    O[9] !== S.paramFormatHints
  )
    ((xr = S.isMcp ? Ut(S.input, S.paramFormatHints, Fe) : null),
      (O[6] = Fe),
      (O[7] = S.input),
      (O[8] = S.isMcp),
      (O[9] = S.paramFormatHints),
      (O[10] = xr));
  else xr = O[10];
  let He = xr,
    [mD] = useTheme(),
    jt;
  bb0: {
    if (S.renderedToolUseMessage != null) {
      let Ke;
      if (O[11] !== S.renderedToolUseMessage)
        ((Ke = { node: S.renderedToolUseMessage, threw: !1 }),
          (O[11] = S.renderedToolUseMessage),
          (O[12] = Ke));
      else Ke = O[12];
      jt = Ke;
      break bb0;
    }
    try {
      let ge;
      if (O[13] !== S.input || O[14] !== S.toolName || O[15] !== mD)
        ((ge = renderToolUseMessageByToolName(S.toolName, S.input, { theme: mD, verbose: !0 })),
          (O[13] = S.input),
          (O[14] = S.toolName),
          (O[15] = mD),
          (O[16] = ge));
      else ge = O[16];
      let Pu;
      if (O[17] !== ge)
        ((Pu = { node: ge, threw: !1 }), (O[17] = ge), (O[18] = Pu));
      else Pu = O[18];
      jt = Pu;
    } catch (Ke) {
      let wl = Ke;
      let ge;
      if (O[19] !== S.toolName)
        ((ge =
          (logError(
            new R(
              `Error rendering tool use line for ${S.toolName}: ${wl}`,
              "Error rendering tool use line (permission dialog table fallback)",
            ),
          ),
          { node: null, threw: !0 })),
          (O[19] = S.toolName),
          (O[20] = ge));
      else ge = O[20];
      jt = ge;
    }
  }
  let { node: Mu, threw: CD } = jt,
    Ke;
  if (O[21] !== Mu)
    ((Ke = typeof Mu === "string" ? formatWithholdableValue(Mu) : null), (O[21] = Mu), (O[22] = Ke));
  else Ke = O[22];
  let _e = Ke,
    ge;
  if (
    O[23] !== He ||
    O[24] !== _e?.kind ||
    O[25] !== S.toolUseRenderFailed ||
    O[26] !== CD
  )
    ((ge =
      (He?.some(Vr) ?? !1) ||
      S.toolUseRenderFailed === !0 ||
      CD ||
      _e?.kind === "withheld"),
      (O[23] = He),
      (O[24] = _e?.kind),
      (O[25] = S.toolUseRenderFailed),
      (O[26] = CD),
      (O[27] = ge));
  else ge = O[27];
  let au = ge,
    Pu;
  if (O[28] !== S) ((Pu = shouldOfferAlwaysAllow(S)), (O[28] = S), (O[29] = Pu));
  else Pu = O[29];
  let ED = Pu,
    { offered: gD, enableAutoMode: hD } = useAutoModeOffer(S.requestSource),
    kr;
  if (O[30] === MEMO_CACHE_SENTINEL) ((kr = he()), (O[30] = kr));
  else kr = O[30];
  let _l = kr,
    Sr;
  if (O[31] !== ED || O[32] !== Fe || O[33] !== au || O[34] !== S)
    ((Sr = ED && !au ? _D(S, { cwd: _l, maxLabelWidth: Fe - 8 }) : null),
      (O[31] = ED),
      (O[32] = Fe),
      (O[33] = au),
      (O[34] = S),
      (O[35] = Sr));
  else Sr = O[35];
  let ye = Sr,
    Rr;
  if (O[36] !== S) ((Rr = nn(S)), (O[36] = S), (O[37] = Rr));
  else Rr = O[37];
  let yD = Rr,
    Tr;
  if (O[38] !== gD || O[39] !== au || O[40] !== yD)
    ((Tr = gD && !au && !yD ? createAutoModeRow("workflow") : null),
      (O[38] = gD),
      (O[39] = au),
      (O[40] = yD),
      (O[41] = Tr));
  else Tr = O[41];
  let Ve = Tr,
    Pe = S.permissionResult.defaultToNo === !0,
    wr;
  if (
    O[42] !== ye ||
    O[43] !== su ||
    O[44] !== hD ||
    O[45] !== S ||
    O[46] !== fD
  )
    ((wr = (Yt) => {
      let { value: _r, feedback: Pl } = Yt;
      if (!fD()) {
        return !1;
      }
      if (_r === "yes-enable-auto-mode") hD();
      return su(wD(_r, S, ye, Pl));
    }),
      (O[42] = ye),
      (O[43] = su),
      (O[44] = hD),
      (O[45] = S),
      (O[46] = fD),
      (O[47] = wr));
  else wr = O[47];
  let lu = useAnswerRefusalState(wr),
    BD = lu.answer,
    Yt;
  if (O[48] !== BD)
    ((Yt = (Ml, Nl) => BD({ value: Ml, feedback: Nl })),
      (O[48] = BD),
      (O[49] = Yt));
  else Yt = O[49];
  let bD = Yt,
    AD =
      lu.refused === null
        ? Pe
          ? "no"
          : void 0
        : lu.refused.value === "yes" && !Pe
          ? "yes"
          : "no",
    Pr;
  if (O[50] !== su)
    ((Pr = () => su({ behavior: "cancelled" })), (O[50] = su), (O[51] = Pr));
  else Pr = O[51];
  let xD = Pr;
  const kD = typeof S.description === "string" ? S.description : "";
  let Mr;
  if (O[52] !== kD)
    ((Mr = kD
      .split(
        `
`,
      )
      .filter(Gr)
      .join(
        `
`,
      )
      .trim()),
      (O[52] = kD),
      (O[53] = Mr));
  else Mr = O[53];
  let cu = Mr,
    Ht;
  bb1: {
    if (_e === null) {
      Ht = Mu;
      break bb1;
    }
    if (_e.kind === "withheld") {
      Ht = _e.marker;
      break bb1;
    }
    let Nu;
    if (O[54] !== _e.text)
      ((Nu = replaceLineBreaks(_e.text).replace(/\s+/g, " ").trim()),
        (O[54] = _e.text),
        (O[55] = Nu));
    else Nu = O[55];
    Ht = Nu;
  }
  let Lu = Ht,
    Fu = S.isMcp ? Math.max(10, Fe - 2) : Fe,
    Nu;
  if (O[56] !== Fu || O[57] !== cu)
    ((Nu = wrapTextToLineCount(cu, Fu, PD)), (O[56] = Fu), (O[57] = cu), (O[58] = Nu));
  else Nu = O[58];
  let Iu = Nu,
    Nr;
  if (O[59] !== Fu || O[60] !== cu)
    ((Nr = wrapTextToLineCount(cu, Fu, Number.MAX_SAFE_INTEGER)),
      (O[59] = Fu),
      (O[60] = cu),
      (O[61] = Nr));
  else Nr = O[61];
  let Kt = Nr,
    du = Kt !== Iu,
    [Vt, Ll] = d(!1),
    SD = useKeybindingChordText("app:toggleTranscript", "Global", "ctrl+o"),
    Lr;
  if (O[62] === MEMO_CACHE_SENTINEL)
    ((Lr = [{ action: "app:toggleTranscript", run: () => Ll(Wr) }]),
      (O[62] = Lr));
  else Lr = O[62];
  let Il = Lr,
    Or;
  if (O[63] === MEMO_CACHE_SENTINEL)
    ((Or = { label: "Yes", value: "yes", feedbackConfig: { type: "accept" } }),
      (O[63] = Or));
  else Or = O[63];
  let Ur = Or,
    $r;
  if (O[64] === MEMO_CACHE_SENTINEL)
    (($r = { label: "No", value: "no", feedbackConfig: { type: "reject" } }),
      (O[64] = $r));
  else $r = O[64];
  let vr = $r,
    Ou;
  if (O[65] !== ye || O[66] !== Ve || O[67] !== Pe) {
    Ou = Pe ? [vr, Ur] : [Ur];
    if (ye !== null) {
      if (typeof ye.node === "string") {
        let Be;
        if (O[69] !== ye.node)
          ((Be = { label: ye.node, value: "yes-dont-ask-again" }),
            (O[69] = ye.node),
            (O[70] = Be));
        else Be = O[70];
        Ou.push(Be);
      }
    }
    if (Ve !== null) {
      if (typeof Ve.node === "string") {
        let Be;
        if (O[71] !== Ve.node)
          ((Be = {
            label: Ve.node,
            description: ENABLE_AUTO_MODE_DESCRIPTION,
            value: "yes-enable-auto-mode",
          }),
            (O[71] = Ve.node),
            (O[72] = Be));
        else Be = O[72];
        Ou.push(Be);
      }
    }
    if (!Pe) Ou.push(vr);
    ((O[65] = ye), (O[66] = Ve), (O[67] = Pe), (O[68] = Ou));
  } else Ou = O[68];
  let RD = Ou,
    Be;
  if (O[73] !== S.toolName)
    ((Be = getSanitizedToolName(S.toolName)), (O[73] = S.toolName), (O[74] = Be));
  else Be = O[74];
  let Yr;
  if (O[75] !== S.isMcp || O[76] !== Be)
    ((Yr = { toolName: Be, isMcp: S.isMcp }),
      (O[75] = S.isMcp),
      (O[76] = Be),
      (O[77] = Yr));
  else Yr = O[77];
  let TD = Yr,
    Gt;
  if (
    O[78] !== Lu ||
    O[79] !== S.hasMcpSuffix ||
    O[80] !== S.isMcp ||
    O[81] !== S.userFacingName
  )
    ((Gt = S.isMcp
      ? r(Box, {
          flexDirection: "row",
          children: [
            e(Text, {
              wrap: "truncate-end",
              children: r(Text, {
                bold: !0,
                children: [S.userFacingName, " Tool:"],
              }),
            }),
            S.hasMcpSuffix
              ? e(Box, {
                  flexShrink: 0,
                  children: e(Text, { dimColor: !0, children: " (MCP)" }),
                })
              : null,
          ],
        })
      : r(Text, {
          children: [
            S.userFacingName,
            Lu != null && Lu !== "" && r(N, { children: ["(", Lu, ")"] }),
            S.hasMcpSuffix ? e(Text, { dimColor: !0, children: " (MCP)" }) : "",
          ],
        })),
      (O[78] = Lu),
      (O[79] = S.hasMcpSuffix),
      (O[80] = S.isMcp),
      (O[81] = S.userFacingName),
      (O[82] = Gt));
  else Gt = O[82];
  let Wt;
  if (O[83] !== Fe || O[84] !== He)
    ((Wt = He !== null && e($t, { entries: He, contentColumns: Fe })),
      (O[83] = Fe),
      (O[84] = He),
      (O[85] = Wt));
  else Wt = O[85];
  let Xt;
  if (
    O[86] !== Iu ||
    O[87] !== Vt ||
    O[88] !== du ||
    O[89] !== SD ||
    O[90] !== Kt ||
    O[91] !== S.isMcp ||
    O[92] !== S.userFacingName
  )
    ((Xt =
      Iu !== "" &&
      r(Box, {
        width: "100%",
        flexDirection: "column",
        marginTop: S.isMcp ? 1 : 0,
        children: [
          S.isMcp &&
            r(Text, {
              italic: !0,
              wrap: "truncate-end",
              children: [
                "About the ",
                e(Text, { bold: !0, children: S.userFacingName }),
                " Tool:",
              ],
            }),
          e(Box, {
            borderStyle: "single",
            borderLeft: !0,
            borderRight: !1,
            borderTop: !1,
            borderBottom: !1,
            borderDimColor: !0,
            paddingLeft: 1,
            children: e(Text, {
              dimColor: !0,
              italic: S.isMcp,
              children: Vt ? Kt : Iu,
            }),
          }),
          du &&
            e(Text, {
              dimColor: !0,
              children: e(KeybindingHint, {
                chord: SD,
                action: Vt ? "collapse description" : "expand description",
                parens: !0,
                format: { keyCase: "lower" },
              }),
            }),
        ],
      })),
      (O[86] = Iu),
      (O[87] = Vt),
      (O[88] = du),
      (O[89] = SD),
      (O[90] = Kt),
      (O[91] = S.isMcp),
      (O[92] = S.userFacingName),
      (O[93] = Xt));
  else Xt = O[93];
  let qt;
  if (O[94] !== Wt || O[95] !== Xt)
    ((qt = r(Box, {
      ref: pD,
      width: "100%",
      flexDirection: "column",
      children: [Wt, Xt],
    })),
      (O[94] = Wt),
      (O[95] = Xt),
      (O[96] = qt));
  else qt = O[96];
  let zt;
  if (O[97] !== Gt || O[98] !== qt)
    ((zt = r(Box, {
      flexDirection: "column",
      paddingX: 2,
      paddingY: 1,
      children: [Gt, qt],
    })),
      (O[97] = Gt),
      (O[98] = qt),
      (O[99] = zt));
  else zt = O[99];
  let Zt;
  if (O[100] !== S.permissionResult)
    ((Zt = e(PermissionReasonPanel, { permissionResult: S.permissionResult, toolType: "tool" })),
      (O[100] = S.permissionResult),
      (O[101] = Zt));
  else Zt = O[101];
  let Qt;
  if (
    O[102] !== xD ||
    O[103] !== bD ||
    O[104] !== Pe ||
    O[105] !== RD ||
    O[106] !== lu.attempts ||
    O[107] !== AD ||
    O[108] !== TD
  )
    ((Qt = e(
      ConfirmationPrompt,
      {
        options: RD,
        defaultFocusValue: AD,
        hideIndexes: Pe,
        onSelect: bD,
        onCancel: xD,
        toolAnalyticsContext: TD,
      },
      lu.attempts,
    )),
      (O[102] = xD),
      (O[103] = bD),
      (O[104] = Pe),
      (O[105] = RD),
      (O[106] = lu.attempts),
      (O[107] = AD),
      (O[108] = TD),
      (O[109] = Qt));
  else Qt = O[109];
  let Jt;
  if (O[110] !== Zt || O[111] !== Qt)
    ((Jt = r(Box, { flexDirection: "column", children: [Zt, Qt] })),
      (O[110] = Zt),
      (O[111] = Qt),
      (O[112] = Jt));
  else Jt = O[112];
  let un;
  if (O[113] !== S.requestSource || O[114] !== zt || O[115] !== Jt)
    ((un = r(PermissionDialogFrame, {
      title: "Tool use",
      requestSource: S.requestSource,
      children: [zt, Jt],
    })),
      (O[113] = S.requestSource),
      (O[114] = zt),
      (O[115] = Jt),
      (O[116] = un));
  else un = O[116];
  let Hr;
  if (O[117] !== du || O[118] !== un)
    ((Hr = e(KeybindingScope, {
      bindings: Il,
      active: du,
      flexDirection: "column",
      children: un,
    })),
      (O[117] = du),
      (O[118] = un),
      (O[119] = Hr));
  else Hr = O[119];
  return Hr;
}
export {
  MAX_PERMISSION_RULE_ENTRIES,
  MAX_PERMISSION_UPDATES,
  MAX_CONSENT_LABEL_WIDTH,
  RULES_AND_DIRECTORIES_UPDATE_TYPES,
  RULES_ONLY_UPDATE_TYPES,
  formatListWithAnd,
  normalizeRulePathPattern,
  hasAllowRuleForTool,
  sanitizeCommandPrefix,
  formatRuleContentForDisplay,
  renderSessionConsentLabel,
  MultilineBorderBox,
  isConsentRow,
  consentRowSchema,
  mintConsentRowFromUpdates,
  createSetModeRow,
  createAddDirectoriesRow,
  createRuleConsentRow,
  AUTO_MODE_ROW_LABELS,
  createAutoModeRow,
  combineConsentRows,
  PermissionReasonPanel,
  ENABLE_AUTO_MODE_DESCRIPTION,
  useAutoModeOffer,
  getFeedbackTypeForAnswer,
  useConsentFeedbackState,
  ConfirmationPrompt,
  shouldOfferAlwaysAllow,
  ToolPermissionDialog,
};

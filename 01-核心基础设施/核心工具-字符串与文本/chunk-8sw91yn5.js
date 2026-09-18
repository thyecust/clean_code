// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { po, Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { getClaudeConfigDir, isSimpleMode } from "../设置-配置/chunk-5ndhfaq9.js";
import { CLAUDE_AI_INFERENCE_SCOPE } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { createLazyValue } from "../核心工具-并发与缓存/lazy-value.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { jsonStringify, logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, firstLine } from "./string-utils.js";
import { isEssentialTrafficOnly } from "../提示词-SystemPrompt/chunk-27ncq5fr.js";
import {
  isFeedbackSurveyForOtelEnabled,
  getCurrentWorkload,
  resetBetaCaches,
  hasCustomApiKeyHeader,
  hasCustomAuthorizationHeader,
  isSubagentContext,
  shouldUseWIFAuth,
  isAnthropicAuthEnabled,
  effectiveAuthTokenEnv,
  getAnthropicApiKeyWithSourceSafe,
  getAnthropicApiKeyWithSource,
  getConfiguredApiKeyHelper,
  getClaudeAIOAuthTokens,
  getClaudeAIOAuthTokenOrigin,
} from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getStringWidth, truncateToWidth, truncate } from "./ansi-text-utils.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { replaceInvisibleChars, stripInvisibleChars } from "./text-sanitization.js";
import { getAPIProvider, isFirstPartyAnthropicBaseUrl, isActualFirstPartyAnthropicBaseUrl } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { setComplianceTaints, getComplianceTaints, registerPolicyVerdict } from "../核心工具-未归类/compliance-taints-store.js";
import { getNameableComplianceTaints, formatPolicyDeniedMessage, policyCacheMissMessage, policyRouteMissingMessage, formatPolicyBlockedReason, policyCacheMissReason, policyRouteMissingReason } from "../核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { expandTabs } from "./expand-tabs.js";
import { INVALID_TOOL_NAME_PLACEHOLDER, l1, lkn } from "../../02-功能模块/对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
import { s, O, se, v, c, fe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getGraphemeSegmenter } from "../核心工具-日期与本地化/intl-text-utils.js";
import { countMatching, dedupe } from "../核心工具-数组与集合/chunk-d16fhdtx.js";
import { readFileSync } from "fs";
import { join } from "path";
function buildAttributionHeader(e, t, r, o, i) {
  let l = getAPIProvider();
  if (
    !(
      i?.ignoreEnvOptOut === !0 &&
      l === "firstParty" &&
      isActualFirstPartyAnthropicBaseUrl() &&
      !a.ANTHROPIC_UNIX_SOCKET
    ) &&
    po(process.env.CLAUDE_CODE_ATTRIBUTION_HEADER)
  )
    return "";
  let p = `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "../../02-功能模块/策略限制-PolicyLimits/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}.${e}`,
    f = process.env.CLAUDE_CODE_ENTRYPOINT ?? "unknown",
    d = (l === "firstParty" && isFirstPartyAnthropicBaseUrl()) || l === "vertex" ? " cch=00000;" : "",
    h = getCurrentWorkload(),
    _ = h ? ` cc_workload=${h};` : "",
    S = isSubagentContext(t) && !t.isMainSession ? " cc_is_subagent=true;" : "",
    E =
      r !== void 0 &&
      /^req_[A-Za-z0-9_-]{1,36}$/.test(r) &&
      l === "firstParty" &&
      isFirstPartyAnthropicBaseUrl()
        ? ` cc_prev_req=${r};`
        : "",
    w =
      o !== void 0 &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        o,
      ) &&
      l === "firstParty" &&
      isFirstPartyAnthropicBaseUrl()
        ? ` cc_prompt_id=${o};`
        : "",
    U = `x-anthropic-billing-header: cc_version=${p}; cc_entrypoint=${f};${d}${_}${S}${E}${w}`;
  return (logForDebugging(`attribution header ${U}`), U);
}
function hasClaudeAIOAuthInferenceScope(e) {
  return e.anthropicAuthEnabled && Boolean(e.oauthScopes?.includes(CLAUDE_AI_INFERENCE_SCOPE));
}
class H {
  notice = null;
  changed = Le();
  replaceNotice(e) {
    if (this.notice === e) return;
    if (
      this.notice &&
      e &&
      this.notice.text === e.text &&
      this.notice.url === e.url
    )
      return;
    ((this.notice = e), this.changed.emit(this.notice));
  }
}
var me = new j(() => new H());
function R() {
  return me.of(B().host);
}
function K(e) {
  R().replaceNotice(e);
}
function getMonitoringNotice() {
  return R().notice;
}
function subscribeMonitoringNotice(e) {
  return R().changed.subscribe(e);
}
var monitoringNoticeStore = { subscribe: (e) => R().changed.subscribe(e), getSnapshot: getMonitoringNotice };
function X(e) {
  if (e === 9 || e === 10) return !1;
  return e < 32 || (e >= 127 && e <= 159);
}
function q(e) {
  return e === 1564 || (e >= 8234 && e <= 8238) || (e >= 8294 && e <= 8297);
}
function he(e) {
  return e === 65038 || e === 65039;
}
function _e(e) {
  return e >= 55296 && e <= 57343;
}
function Z(e) {
  let t = e.codePointAt(0);
  if (e.length === 1) {
    if (t <= 31) return 0;
    if (q(t)) return 1;
  }
  let r = getStringWidth(e);
  return r === 0 ? 0 : r === 1 ? 1 : r;
}
var x = 4096,
  GRAPHEME_TRUNCATION_MARKER_PATTERN = /\u2026 \[\+\d+ graphemes\]/,
  ye = 4064,
  xe = 256;
function Q(e) {
  if (e.length <= x) return e;
  return e
    .split(
      `
`,
    )
    .map((t) => {
      if (t.length <= x) return t;
      let r = [],
        o = "";
      for (let { segment: i } of getGraphemeSegmenter().segment(t))
        if (o.length > 0 && o.length + i.length > xe) (r.push(o), (o = i));
        else o += i;
      if (o.length > 0) r.push(o);
      return r.join(`
`);
    }).join(`
`);
}
function W(e) {
  let t = "",
    r = 0;
  for (let { segment: o } of getGraphemeSegmenter().segment(e)) {
    t += o;
    let i = getStringWidth(t),
      l = i - r;
    if (((r = i), l !== Z(o))) return !1;
  }
  return !0;
}
function Ce(e) {
  let t = "",
    r = "",
    o = 0;
  for (let { segment: i } of getGraphemeSegmenter().segment(e)) {
    r += i;
    let l = getStringWidth(r),
      u = l - o;
    ((o = l), (t += u === Z(i) ? i : "\uFFFD"));
  }
  return t;
}
function V(e) {
  let t = e;
  for (let r = 0; r < 16; r++) {
    if (W(t)) return t;
    let o = Ce(t);
    if (o === t) break;
    t = o;
  }
  if (W(t)) return t;
  return [...getGraphemeSegmenter().segment(t)].map(() => "\uFFFD").join("");
}
function Ae(e, t) {
  let r = "";
  for (let { segment: o } of getGraphemeSegmenter().segment(e)) {
    if (r.length + o.length > t) break;
    r += o;
  }
  return r;
}
function Se(e) {
  return J(e, ye);
}
function J(e, t) {
  let r = Ae(e, t);
  if (r.length > 0) return r;
  let o = Math.min(t, e.length),
    i = e.charCodeAt(o - 1);
  if (i >= 55296 && i <= 56319) o -= 1;
  return e.slice(0, o);
}
var Ee = 4 * x * x,
  N = 1024,
  we = 64 * N * N;
function Re(e) {
  let t = Ee,
    r = we,
    o = (i) => [...getGraphemeSegmenter().segment(i)].length;
  return e
    .split(
      `
`,
    )
    .map((i) => {
      if (i === "") return i;
      if (/^\u2026 \[\+\d+ graphemes\]$/.test(i)) return i;
      let l = i.match(/\u2026 \[\+\d+ graphemes\]$/),
        u = l ? l[0] : "",
        p = l ? i.slice(0, i.length - u.length) : i,
        f = p.length > x,
        d = f ? Se(p) : p,
        h = f ? `\u2026 [+${o(p.slice(d.length))} graphemes]` : "",
        _ = d.length + h.length + u.length,
        S = _ * _;
      if (S <= t) return ((t -= S), V(d) + h + u);
      let y = J(p, N),
        E =
          y.length < p.length
            ? `\u2026 [+${o(p.slice(y.length))} graphemes]`
            : "",
        T = y.length + E.length + u.length,
        w = T * T;
      if (y.length > 0 && w <= r) return ((r -= w), V(y) + E + u);
      return `\u2026 [+${o(p)} graphemes]` + u;
    }).join(`
`);
}
function hasNoControlCharacters(e) {
  for (let t = 0; t < e.length; t++) if (X(e.charCodeAt(t))) return !1;
  return !0;
}
function sanitizeTextForDisplay(e) {
  return ee(e, !0);
}
function ee(e, t) {
  let r = "";
  for (let i of e) {
    let l = i.codePointAt(0);
    if (he(l)) continue;
    r += X(l) || q(l) || _e(l) ? "\uFFFD" : i;
  }
  let o = expandTabs(r);
  return t ? Re(o) : o;
}
var ke = /\p{DI}/gu;
function stripDefaultIgnorableCharacters(e) {
  return e.replace(ke, "");
}
function sanitizePlainText(e) {
  return ee(stripDefaultIgnorableCharacters(stripInvisibleChars(e)), !1);
}
var Te = /\p{Default_Ignorable_Code_Point}/u,
  Ne = /\p{Cf}/u;
function Oe(e) {
  return (
    (e >= 8204 && e <= 8207) ||
    e === 1564 ||
    (e >= 65024 && e <= 65039) ||
    (e >= 6155 && e <= 6159) ||
    e === 10240
  );
}
function P(e, t) {
  return (
    Te.test(e) ||
    e === "\u2028" ||
    e === "\u2029" ||
    e === "\u2800" ||
    (t >= 55296 && t <= 57343) ||
    Ne.test(e)
  );
}
function hasInvisibleCharacters(e) {
  for (let t of e) if (P(t, t.codePointAt(0) ?? 0)) return !0;
  return !1;
}
function Ie(e, t) {
  return P(e, t) && !Oe(t);
}
function ne(e, t) {
  let r = "";
  for (let o of e) r += t(o, o.codePointAt(0) ?? 0) ? "\uFFFD" : o;
  return r;
}
function De(e, t) {
  let r = Array.from(e),
    o = "";
  for (let i = 0; i < r.length; i++) {
    let l = r[i] ?? "";
    o += t(
      l,
      l.codePointAt(0) ?? 0,
      r[i - 1]?.codePointAt(0) ?? Number.NaN,
      r[i + 1]?.codePointAt(0) ?? Number.NaN,
    )
      ? "\uFFFD"
      : l;
  }
  return o;
}
function sanitizeUntrustedText(e) {
  return sanitizeTextForDisplay(ne(e, Ie));
}
function sanitizeInvisibleText(e) {
  return F(re(e));
}
function re(e) {
  return sanitizeTextForDisplay(ne(e, P));
}
var MAX_DISPLAY_TEXT_UNITS = 2000,
  Me = 253;
function getMaxHostnameLength(e) {
  return Me + (e.endsWith(".") && !e.endsWith("..") ? 1 : 0);
}
var MAX_DISPLAY_PAYLOAD_UNITS = 200000;
function Fe(e, t = MAX_DISPLAY_TEXT_UNITS) {
  return truncateToCodeUnits(e, t) === e;
}
function needsMultilineGutter(e) {
  return (
    e.includes(`
`) || getStringWidth(e) > 80
  );
}
function truncateToTextLimit(e) {
  let t = truncateToCodeUnits(e, MAX_DISPLAY_TEXT_UNITS),
    r = t.replace(/\t/g, " ");
  return t === e ? r : `${r}\u2026`;
}
function A(e) {
  return getStringWidth(e.replace(/[\uFE0E\uFE0F\u180B-\u180F\u2800]/gu, "").trim()) > 0;
}
function L(e) {
  return Array.from(e)
    .filter((t) => ie(t))
    .join("");
}
function ie(e) {
  return getStringWidth(e.replace(/[\uFE0E\uFE0F\u180B-\u180F]/gu, "")) > 0;
}
var ve = 8;
function collapseInvisibleCharacterRuns(e) {
  let t = "",
    r = 0,
    o = !1;
  for (let i of e) {
    if (
      i ===
      `
`
    ) {
      if (o) ((t += "\uFFFD"), (o = !1));
      ((t += i), (r = 0));
      continue;
    }
    if (ie(i)) {
      if (o) ((t += "\uFFFD"), (o = !1));
      ((t += i), (r = 0));
      continue;
    }
    if (r < ve) {
      ((t += i), r++);
      continue;
    }
    o = !0;
  }
  return o ? `${t}\uFFFD` : t;
}
function F(e) {
  return sanitizeTextForDisplay(collapseInvisibleCharacterRuns(e));
}
function ze(e) {
  let t = Array.from(e),
    r = 0,
    o = t.length;
  while (r < o && !A(t[r] ?? "")) r++;
  while (o > r && !A(t[o - 1] ?? "")) o--;
  return t.slice(r, o).join("");
}
function I(e, t) {
  let r = Array.from(ze(e));
  return t === "end" ? r.at(-1) : r[0];
}
function le(e) {
  return I(e, "end") === "\u2026";
}
function stripTrailingEllipsis(e) {
  let t = Array.from(e),
    r = t.length;
  for (;;) {
    let o = r;
    while (o > 0 && !A(t[o - 1] ?? "")) o--;
    if (o > 0 && t[o - 1] === "\u2026") {
      r = o - 1;
      continue;
    }
    break;
  }
  return t.slice(0, r).join("");
}
function hasVisibleContent(e) {
  let t = [],
    r = !1;
  for (let o of Array.from(e)) {
    if (
      o !==
        `
` &&
      !A(o)
    ) {
      r = !0;
      continue;
    }
    if (o === "\uFFFD" && r) {
      r = !1;
      continue;
    }
    ((r = !1), t.push(o));
  }
  return A(t.join(""));
}
function Ue(e) {
  return /^[A-Za-z_$][\w$]*$/.test(e);
}
function cse(e) {
  return sanitizeInvisibleText(e);
}
function k(e) {
  return F(
    sanitizeTextForDisplay(
      De(e, (t, r, o, i) => {
        if (r === 65038 || r === 65039) return !(o > 127 || i === 8419);
        if (r === 8204 || r === 8205) return !(o > 127 && i > 127);
        if (r >= 6155 && r <= 6159) return !(o > 127);
        return P(t, r);
      }),
    ),
  );
}
function hasRenderableText(e) {
  if (e === void 0) return !1;
  let t = sanitizeInvisibleText(e)
    .replace(/\uFFFD/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return t !== "" && getStringWidth(t) > 0;
}
var MAX_DISPLAY_LABEL_WIDTH = 48,
  MAX_DISPLAY_VALUE_UNITS = 256;
function formatSingleLineLabel(e) {
  let t = cse(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)),
    r = t.replace(/\s+/g, " ").trim();
  return truncateToWidth(quoteIfAmbiguous(r, t, e.length > MAX_DISPLAY_VALUE_UNITS), MAX_DISPLAY_LABEL_WIDTH);
}
function quoteIfAmbiguous(e, t, r = !1) {
  let o = I(e, "start") === '"' || I(e, "end") === '"' || le(e);
  return e === t && !o && !r ? e : jsonStringify(t);
}
function ae(e) {
  let t = cse(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)),
    r = t.replace(/\s+/g, " ").trim();
  return quoteIfAmbiguous(r, t, e.length > MAX_DISPLAY_VALUE_UNITS);
}
function isWithinDisplayValueLimit(e) {
  return truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS) === e;
}
function disambiguateLabels(e, t) {
  let r = new Map(),
    o = (u) => t(u).normalize("NFC");
  for (let u of e) {
    let p = o(u),
      f = r.get(p) ?? new Set();
    (f.add(u), r.set(p, f));
  }
  let i = (u) =>
      jsonStringify(truncateToCodeUnits(u, MAX_DISPLAY_TEXT_UNITS)).replace(
        /[\u007f-\uffff]/g,
        (p) => `\\u${p.charCodeAt(0).toString(16).padStart(4, "0")}`,
      ) + (u.length > MAX_DISPLAY_TEXT_UNITS ? "\u2026" : ""),
    l = new Map();
  return e.map((u) => {
    let p = o(u);
    if ((r.get(p)?.size ?? 0) <= 1) return t(u);
    let f = i(u),
      d = l.get(f) ?? new Map();
    l.set(f, d);
    let h = d.get(u) ?? d.size + 1;
    return (d.set(u, h), h > 1 ? `${f} (#${h})` : f);
  });
}
function buildUniqueLabelMap(e) {
  let t = new Map();
  for (let l of e) t.set(l, Ue(l) ? l : jsonStringify(sanitizeInvisibleText(l)));
  let r = new Map();
  for (let l of t.values()) r.set(l, (r.get(l) ?? 0) + 1);
  let o = Be(e),
    i = new Map();
  for (let l of e) {
    let u = t.get(l) ?? "",
      p = (r.get(u) ?? 0) > 1 || o.has(l.normalize("NFC"));
    i.set(
      l,
      p
        ? jsonStringify(l).replace(
            /[\u007f-\uffff]/g,
            (f) => `\\u${f.charCodeAt(0).toString(16).padStart(4, "0")}`,
          )
        : u,
    );
  }
  return i;
}
function Be(e) {
  let t = new Map(),
    r = new Set();
  for (let o of e) {
    let i = o.normalize("NFC"),
      l = t.get(i);
    if (l !== void 0 && l !== o) r.add(i);
    else t.set(i, o);
  }
  return r;
}
function toDisplayLabelString(e) {
  return typeof e === "string" && isBlankDisplayText(e) ? "" : String(formatDisplayLabel(e));
}
function formatDisplayLabel(e) {
  let t = typeof e === "string" && !isBlankDisplayText(e) ? e : INVALID_TOOL_NAME_PLACEHOLDER;
  return l1(formatSingleLineLabel(t));
}
function isBlankDisplayText(e) {
  return e === "" || getStringWidth(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)) === 0;
}
function He(e) {
  return e
    .replace(/_+/g, " ")
    .trim()
    .replace(/\b\w/g, (t) => t.toUpperCase());
}
function formatMcpToolUserFacingName(e) {
  let t = truncateToCodeUnits((e.scope === "claudeai" ? e.displayName : void 0) ?? "", MAX_DISPLAY_VALUE_UNITS),
    r = truncateToCodeUnits(e.title ?? "", MAX_DISPLAY_VALUE_UNITS),
    o = k(truncateToCodeUnits(e.serverName, MAX_DISPLAY_VALUE_UNITS)),
    i = hasRenderableText(t) ? k(t) : hasVisibleContent(o) ? o : "(unnamed server)",
    l = truncateToCodeUnits(e.toolName, MAX_DISPLAY_VALUE_UNITS),
    u = cse(He(l)),
    p = cse(l),
    f = hasRenderableText(r) ? k(r) : hasVisibleContent(u) ? u : hasVisibleContent(p) ? p : "(unnamed tool)";
  return l1(truncateToWidth(`${i} \u2014 ${f}`.replace(/\s+/g, " ").trim(), MAX_DISPLAY_LABEL_WIDTH));
}
function formatToolNameForDisplay(e) {
  return l1(formatDisplayTextOrDefault(e, "(unnamed tool)"));
}
function formatDisplayTextOrDefault(e, t) {
  let r = formatSingleLineLabel(e);
  return hasVisibleContent(r) ? r : t;
}
function prepareDisplayText(e) {
  if (typeof e !== "string") return { text: l1(""), needsGutter: !1 };
  let t = F(sanitizeUntrustedText(truncateToTextLimit(e)));
  return { text: l1(t), needsGutter: needsMultilineGutter(t) };
}
function tryFormatShortDisplayValue(e) {
  if (typeof e !== "string") return null;
  if (!isWithinDisplayValueLimit(e) || e.trim() === "" || getStringWidth(e) === 0) return null;
  if (collapseInvisibleCharacterRuns(e) !== e) return null;
  return { display: l1(ae(e)) };
}
var C =
    "(value cannot be shown in full \u2014 approval withheld; one-time options only)",
  $e = 1e4,
  je = 64;
function D(e, t, r = 0) {
  if (typeof e === "string") {
    if (e.length + 2 > t.unitsRemaining)
      throw Error("payload exceeds the serialization budget");
    let l = jsonStringify(e);
    if (((t.unitsRemaining -= l.length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return l;
  }
  if (typeof e === "number") {
    let l = Number.isFinite(e) ? String(e) : "null";
    if (((t.unitsRemaining -= l.length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return l;
  }
  if (typeof e === "boolean" || e === null) {
    if (((t.unitsRemaining -= String(e).length), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    return String(e);
  }
  if (typeof e === "bigint") throw Error("bigint payload cannot be serialized");
  if (typeof e !== "object") return;
  if (r >= je) throw Error("payload exceeds the serialization depth wall");
  if (Array.isArray(e)) {
    let l = e.length;
    if (typeof l !== "number" || !Number.isSafeInteger(l) || l < 0)
      throw Error("payload length is not an honest array length");
    if (((t.elementsRemaining -= l), t.elementsRemaining < 0))
      throw Error("payload exceeds the element serialization wall");
    if (((t.unitsRemaining -= 2 + (l > 0 ? l - 1 : 0)), t.unitsRemaining < 0))
      throw Error("payload exceeds the serialization budget");
    let u = [];
    for (let p = 0; p < l; p++) {
      let f = D(e[p], t, r + 1);
      if (f === void 0) {
        if (((t.unitsRemaining -= 4), t.unitsRemaining < 0))
          throw Error("payload exceeds the serialization budget");
        u.push("null");
      } else u.push(f);
    }
    return `[${u.join(",")}]`;
  }
  let o = Object.entries(e);
  if (((t.elementsRemaining -= o.length), t.elementsRemaining < 0))
    throw Error("payload exceeds the element serialization wall");
  if (((t.unitsRemaining -= 2), t.unitsRemaining < 0))
    throw Error("payload exceeds the serialization budget");
  let i = [];
  for (let [l, u] of o) {
    let p = D(u, t, r + 1);
    if (p === void 0) continue;
    if (l.length + 2 > t.unitsRemaining)
      throw Error("payload exceeds the serialization budget");
    let f = jsonStringify(l);
    if (
      ((t.unitsRemaining -= f.length + 1 + (i.length > 0 ? 1 : 0)),
      t.unitsRemaining < 0)
    )
      throw Error("payload exceeds the serialization budget");
    i.push(`${f}:${p}`);
  }
  return `{${i.join(",")}}`;
}
function formatWithholdableValue(e, t) {
  let r;
  if (typeof e === "string") r = e;
  else
    try {
      let u = D(e, {
        unitsRemaining: t?.maxUnits ?? MAX_DISPLAY_TEXT_UNITS,
        elementsRemaining: $e,
      });
      if (u === void 0) return { kind: "withheld", marker: l1(C) };
      r = u;
    } catch {
      return { kind: "withheld", marker: l1(C) };
    }
  if (!Fe(r, t?.maxUnits)) return { kind: "withheld", marker: l1(C) };
  let o = t?.softWrap ? Q(r) : r,
    i = (t?.scrub === "key" ? re(o) : sanitizeUntrustedText(o)).replace(/\t/g, " "),
    l = t?.softWrap
      ? i.replaceAll(
          `
`,
          "",
        )
      : i;
  if (GRAPHEME_TRUNCATION_MARKER_PATTERN.test(l)) return { kind: "withheld", marker: l1(C) };
  if (collapseInvisibleCharacterRuns(i) !== i) return { kind: "withheld", marker: l1(C) };
  return { kind: "full", text: l1(i), needsGutter: needsMultilineGutter(i) };
}
function shouldWithholdValue(e) {
  let t = sanitizeUntrustedText(e);
  return GRAPHEME_TRUNCATION_MARKER_PATTERN.test(t) || ce(t);
}
function hasCollapsedInvisibleRuns(e) {
  return ce(sanitizeUntrustedText(e));
}
function ce(e) {
  return collapseInvisibleCharacterRuns(e) !== e;
}
function formatListEntryForDisplay(e) {
  let t = cse(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)),
    r = t.replace(/\s+/g, " ").trim();
  return quoteIfAmbiguous(
    r,
    t,
    r.includes(",") ||
      r.includes(";") ||
      L(r).includes(" and ") ||
      L(r).startsWith("and ") ||
      L(r).endsWith(" and") ||
      e.length > MAX_DISPLAY_VALUE_UNITS ||
      collapseInvisibleCharacterRuns(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)) !== truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS),
  );
}
function toUniqueDisplayLabels(e, t = ae) {
  return disambiguateLabels(e, t).map((r) => l1(r));
}
function replaceLineBreaks(e) {
  return e.replace(/[\n\r\u2028\u2029]/g, "\uFFFD");
}
function formatValueListForDisplay(e, t) {
  let r = e.map((d) => formatWithholdableValue(d, t)),
    o = new Map();
  e.forEach((d, h) => {
    let _ = r[h];
    if (_.kind === "full" && !o.has(d))
      o.set(d, replaceLineBreaks(_.text).replace(/\s+/g, " ").trim());
  });
  let i = e.filter((d, h) => r[h].kind === "full"),
    l = toUniqueDisplayLabels(i, (d) => o.get(d) ?? ""),
    u = [],
    p = 0,
    f = 0;
  for (let d of r)
    if (d.kind === "full") u.push({ text: String(l[p++]), withheld: !1 });
    else ((f += 1), u.push({ text: `${d.marker} (#${f})`, withheld: !0 }));
  return u;
}
function sanitizeMarkdownText(e) {
  if (typeof e !== "string") return lkn("");
  return lkn(sanitizeUntrustedText(e));
}
function tryFormatShortLabel(e) {
  if (typeof e !== "string") return null;
  let t = k(truncateToCodeUnits(e, MAX_DISPLAY_VALUE_UNITS)).replace(/\t/g, " ");
  if (!hasVisibleContent(firstLine(t))) return null;
  if (le(firstLine(t))) return null;
  return l1(truncate(t, 24, !0));
}
function displayTextTemplate(e, ...t) {
  let r = e[0] ?? "";
  for (let o = 0; o < t.length; o++) ((r += t[o] ?? ""), (r += e[o + 1] ?? ""));
  return l1(r);
}
function hasUnsupportedDisplayCharacters(e) {
  return /[\u0000-\u001f\u007f-\u009f]/.test(e) || hasInvisibleCharacters(e);
}
function z(e) {
  let t = truncateToCodeUnits(replaceInvisibleChars(e, "").toLowerCase(), 64).trim();
  return /^[a-z0-9_-]+$/.test(t) ? t : "";
}
var MAX_COMPLIANCE_TAINTS = 16;
function countLossyComplianceTaints(e) {
  let t =
    typeof e === "object" && e !== null && "compliance_taints" in e
      ? e.compliance_taints
      : void 0;
  if (!Array.isArray(t)) return 0;
  let r = countMatching(t, (i) => typeof i !== "string" || z(i) === ""),
    o = dedupe(
      t
        .filter((i) => typeof i === "string")
        .map(z)
        .filter((i) => i.length > 0),
    );
  return r + Math.max(0, o.length - MAX_COMPLIANCE_TAINTS);
}
var ue = createLazyValue(() =>
    c({
      restrictions: fe(s(), c({ allowed: O() })),
      compliance_taints: v(se())
        .default([])
        .transform((e, t) => {
          let r = dedupe(
            e
              .filter((o) => typeof o === "string")
              .map(z)
              .filter((o) => o.length > 0),
          ).slice(0, MAX_COMPLIANCE_TAINTS);
          if (e.length > 0 && r.length === 0)
            t.addIssue({
              code: "custom",
              message:
                "compliance_taints had entries but none were well-formed regime names",
            });
          return r;
        }),
      monitoring_notice: c({
        text: s()
          .max(500)
          .transform((e) => replaceInvisibleChars(e, "", { keepEmojiJoiners: !0 })),
        url: s()
          .max(2048)
          .url()
          .startsWith("https://")
          .refine((e) => !hasUnsupportedDisplayCharacters(e))
          .nullish()
          .catch(null),
      })
        .nullable()
        .default(null)
        .catch(null),
      defaults: fe(s(), se()).default({}).catch({}),
    }),
  ),
  EMPTY_POLICY_LIMITS_RESPONSE = {
    restrictions: {},
    compliance_taints: [],
    monitoring_notice: null,
    defaults: {},
  },
  POLICY_SERVER_ERROR_TYPES = [
    "invalid_request_error",
    "authentication_error",
    "permission_error",
    "not_found_error",
    "rate_limit_error",
  ],
  POLICY_SERVER_ERROR_CODES = [
    "ip_not_in_allowed_range",
    "claude_code_key_creator_not_member",
    "organization_disabled",
    "restricted_regime_endpoint",
    "oauth_not_allowed_for_organization",
  ];
var Ve = "policy-limits.json";
class PolicyState {
  sessionCache = null;
  lastFetchOutcome = null;
  diskAdoptionSuppressed = !1;
  diskAdoptionEpoch = 0;
  storageV5 = void 0;
  cacheRevision = 0;
  replaceSessionCache(e) {
    let t = this.sessionCache?.compliance_taints ?? [],
      r = e?.compliance_taints ?? [];
    if (
      ((this.sessionCache = e),
      this.cacheRevision++,
      setComplianceTaints(r),
      K(e?.monitoring_notice ?? null),
      t.length !== r.length || r.some((o) => !t.includes(o)))
    )
      resetBetaCaches();
  }
}
var policyStates = new j(() => new PolicyState());
function g() {
  return policyStates.of(B().host);
}
function setSessionCache(e) {
  g().replaceSessionCache(e);
}
function setLastFetchOutcome(e) {
  let t = g();
  ((t.lastFetchOutcome = e), t.cacheRevision++);
}
function getLastFetchOutcome() {
  return g().lastFetchOutcome;
}
function detachPolicyLimitsBackend() {
  g().storageV5 = void 0;
}
function getSessionCache() {
  return g().sessionCache;
}
function suppressDiskAdoption() {
  let e = g();
  ((e.diskAdoptionSuppressed = !0), e.diskAdoptionEpoch++);
}
function getDiskAdoptionEpoch() {
  return g().diskAdoptionEpoch;
}
function liftDiskAdoptionSuppression() {
  g().diskAdoptionSuppressed = !1;
}
function isDiskAdoptionSuppressed() {
  return g().diskAdoptionSuppressed;
}
function getPolicyCacheRevision() {
  return g().cacheRevision;
}
function getCachePath() {
  return join(getClaudeConfigDir(), Ve);
}
function isPolicyLimitsEligible() {
  return getPolicyLimitsIneligibleReason() === void 0;
}
function getPolicyLimitsIneligibleReason(e = {}) {
  if (getAPIProvider() !== "firstParty") return "third_party_provider";
  if (!e.skipBaseUrlCheck && !isFirstPartyAnthropicBaseUrl()) return "custom_base_url";
  try {
    let { key: r } = getAnthropicApiKeyWithSource({ skipRetrievingKeyFromApiKeyHelper: !0 });
    if (r) return;
  } catch {}
  if (shouldUseWIFAuth()) return;
  let t = getClaudeAIOAuthTokens();
  if (!t?.accessToken) return "no_auth";
  if (!t.scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE)) return "oauth_no_inference_scope";
  if (t.subscriptionType == null) return;
  if (t.subscriptionType !== "enterprise" && t.subscriptionType !== "team")
    return "prosumer_oauth";
  return;
}
function loadCachedResponse() {
  let e = g();
  if (isHoverRestEnabled() && e.storageV5 !== void 0 && e.sessionCache) return e.sessionCache;
  try {
    let t = readFileSync(getCachePath(), "utf-8");
    return parseCachedResponse(t);
  } catch {
    return null;
  }
}
function parseCachedResponse(e) {
  let t = projectPolicyLimitsBody(xt(e, !1));
  return t.success ? t.data : null;
}
var de = new WeakMap();
function projectPolicyLimitsBody(e) {
  let t = ue().safeParse(e);
  if (t.success) de.set(t.data, e);
  return t;
}
function serverBodyOf(e) {
  return de.get(e) ?? e;
}
function seedSessionCacheFromPrime(e, t) {
  let r = g();
  if (
    ((r.storageV5 = e),
    t !== null && r.sessionCache === null && !r.diskAdoptionSuppressed)
  )
    r.replaceSessionCache(t);
}
var Ge = [
    ["hipaa", "allow_web_fetch"],
    ["hipaa", "allow_memory_sync"],
    ["zdr", "allow_memory_sync"],
    ["hipaa", "allow_design_sync"],
    ["hipaa", "allow_projects_tool"],
    ["hipaa", "allow_claude_browser_extension"],
    ["hipaa", "allow_remote_sessions"],
    ["hipaa", "allow_remote_control"],
    ["hipaa", "allow_cobalt_plinth"],
    ["zdr", "allow_cobalt_plinth"],
    ["hipaa", "allow_team_onboarding"],
    ["hipaa", "allow_error_reporting"],
    ["hipaa", "allow_auto_mode_sibling_docs"],
    ["zdr", "allow_error_reporting"],
    ["hipaa", "allow_send_file"],
    ["zdr", "allow_send_file"],
    ["hipaa", "allow_plugin_skill_search"],
    ["hipaa", "allow_account_skills_sync"],
    ["hipaa", "allow_account_plugins_sync"],
    ["hipaa", "allow_usage_transcript_scan"],
    ["hipaa", "allow_skill_doctor_transcript_scan"],
    ["hipaa", "allow_model_catalog"],
    ["hipaa", "allow_heap_dump"],
    ["zdr", "allow_heap_dump"],
    ["hipaa", "allow_local_checkpoint_commit"],
    ["zdr", "allow_local_checkpoint_commit"],
    ["hipaa", "allow_mycelium"],
    ["zdr", "allow_mycelium"],
    
    
  ],
  Ye = new Set([
    "allow_product_feedback",
    "allow_remote_sessions",
    "allow_remote_control",
    "allow_cobalt_plinth",
    "allow_error_reporting",
    "allow_auto_mode_sibling_docs",
    "allow_plugin_skill_search",
    "allow_account_skills_sync",
    "allow_account_plugins_sync",
    "allow_send_file",
    "allow_heap_dump",
    "allow_local_checkpoint_commit",
    
    "allow_usage_transcript_scan",
    "allow_skill_doctor_transcript_scan",
  ]),
  qe = new Set(["allow_product_feedback"]);
function isPolicyAllowed(e) {
  let t = ge();
  if (!t) {
    if (Ye.has(e)) {
      if (isPolicyLimitsEligible()) return !1;
      if (qe.has(e) && isEssentialTrafficOnly() && !(e === "allow_product_feedback" && isFeedbackSurveyForOtelEnabled()))
        return !1;
    }
    return !0;
  }
  return isPolicyAllowedInResponse(
    { restrictions: t, compliance_taints: getResponseFromCache()?.compliance_taints ?? [] },
    e,
  );
}
function isPolicyAllowedInResponse(e, t) {
  let r = e.restrictions[t];
  if (r) return r.allowed;
  for (let [o, i] of Ge)
    if (i === t && e.compliance_taints.includes(o)) return !1;
  return !0;
}
registerPolicyVerdict({
  isPolicyAllowed: (e) => isPolicyAllowed(e),
  policyDenyKind: (e) => policyDenyKind(e),
  policyDeniedReason: (e, t, r) => policyDeniedReason(e, t, r),
  complianceTaintsSettled: () => areComplianceTaintsSettled(),
});
function isPolicyRouteMissing() {
  if (!isPolicyLimitsEligible() || getResponseFromCache() !== null) return !1;
  let e = g().lastFetchOutcome;
  return e !== null && !e.success && e.httpStatus === 404;
}
function policyDeniedReason(e, t, r, o) {
  if (isPolicyAllowed(e)) return null;
  if (isPolicyRouteMissing()) return policyRouteMissingMessage(t);
  if (o !== void 0 && !hasNameableComplianceTaint()) return o;
  if (getResponseFromCache() === null) return policyCacheMissMessage(t);
  return formatPolicyDeniedMessage(t, r, getComplianceTaints());
}
function hasNameableComplianceTaint() {
  return getNameableComplianceTaints(getComplianceTaints()).length > 0;
}
function policyDenyKind(e) {
  if (isPolicyAllowed(e)) return null;
  if (getResponseFromCache() !== null) return "org_denied";
  return isPolicyRouteMissing() ? "route_missing" : "cache_miss";
}
function policyDeniedHint(e, t) {
  let r = policyDenyKind(e);
  if (r === null) return null;
  if (r === "route_missing") return policyRouteMissingReason();
  if (t !== void 0 && !hasNameableComplianceTaint()) return t;
  return r === "cache_miss" ? policyCacheMissReason() : formatPolicyBlockedReason(getComplianceTaints());
}
function areComplianceTaintsSettled() {
  if (
    hasCustomApiKeyHeader() ||
    hasCustomAuthorizationHeader() ||
    !isActualFirstPartyAnthropicBaseUrl() ||
    getAPIProvider() !== "firstParty" ||
    a.ANTHROPIC_UNIX_SOCKET !== void 0 ||
    getConfiguredApiKeyHelper() !== void 0 ||
    (effectiveAuthTokenEnv() !== void 0 &&
      !hasClaudeAIOAuthInferenceScope({ anthropicAuthEnabled: isAnthropicAuthEnabled(), oauthScopes: getClaudeAIOAuthTokens()?.scopes }))
  )
    return !1;
  if (getResponseFromCache() !== null) return !0;
  let e = getClaudeAIOAuthTokens();
  return (
    (e?.subscriptionType === "pro" || e?.subscriptionType === "max") &&
    e.scopes?.includes(CLAUDE_AI_INFERENCE_SCOPE) === !0 &&
    getClaudeAIOAuthTokenOrigin() === "store" &&
    !isSimpleMode() &&
    !getAnthropicApiKeyWithSourceSafe({ skipRetrievingKeyFromApiKeyHelper: !0 }).key &&
    !shouldUseWIFAuth()
  );
}
function isPolicyEnforced(e) {
  return ge()?.[e]?.allowed === !0;
}
function getPolicyDefault(e) {
  let t = getResponseFromCache()?.defaults[e];
  return typeof t === "boolean" ? t : void 0;
}
function getResponseFromCache() {
  if (!isPolicyLimitsEligible()) return null;
  let e = g();
  if (e.sessionCache) return e.sessionCache;
  if (e.diskAdoptionSuppressed) return null;
  let t = loadCachedResponse();
  if (t) return (e.replaceSessionCache(t), t);
  return null;
}
function ge() {
  return getResponseFromCache()?.restrictions ?? null;
}
export {
  buildAttributionHeader,
  hasClaudeAIOAuthInferenceScope,
  getMonitoringNotice,
  subscribeMonitoringNotice,
  monitoringNoticeStore,
  GRAPHEME_TRUNCATION_MARKER_PATTERN,
  hasNoControlCharacters,
  sanitizeTextForDisplay,
  stripDefaultIgnorableCharacters,
  sanitizePlainText,
  hasInvisibleCharacters,
  sanitizeUntrustedText,
  sanitizeInvisibleText,
  MAX_DISPLAY_TEXT_UNITS,
  getMaxHostnameLength,
  MAX_DISPLAY_PAYLOAD_UNITS,
  needsMultilineGutter,
  truncateToTextLimit,
  collapseInvisibleCharacterRuns,
  stripTrailingEllipsis,
  hasVisibleContent,
  cse,
  hasRenderableText,
  MAX_DISPLAY_LABEL_WIDTH,
  MAX_DISPLAY_VALUE_UNITS,
  formatSingleLineLabel,
  quoteIfAmbiguous,
  isWithinDisplayValueLimit,
  disambiguateLabels,
  buildUniqueLabelMap,
  toDisplayLabelString,
  formatDisplayLabel,
  isBlankDisplayText,
  formatMcpToolUserFacingName,
  formatToolNameForDisplay,
  formatDisplayTextOrDefault,
  prepareDisplayText,
  tryFormatShortDisplayValue,
  formatWithholdableValue,
  shouldWithholdValue,
  hasCollapsedInvisibleRuns,
  formatListEntryForDisplay,
  toUniqueDisplayLabels,
  replaceLineBreaks,
  formatValueListForDisplay,
  sanitizeMarkdownText,
  tryFormatShortLabel,
  displayTextTemplate,
  hasUnsupportedDisplayCharacters,
  MAX_COMPLIANCE_TAINTS,
  countLossyComplianceTaints,
  EMPTY_POLICY_LIMITS_RESPONSE,
  POLICY_SERVER_ERROR_TYPES,
  POLICY_SERVER_ERROR_CODES,
  PolicyState,
  policyStates,
  setSessionCache,
  setLastFetchOutcome,
  getLastFetchOutcome,
  detachPolicyLimitsBackend,
  getSessionCache,
  suppressDiskAdoption,
  getDiskAdoptionEpoch,
  liftDiskAdoptionSuppression,
  isDiskAdoptionSuppressed,
  getPolicyCacheRevision,
  getCachePath,
  isPolicyLimitsEligible,
  getPolicyLimitsIneligibleReason,
  loadCachedResponse,
  parseCachedResponse,
  projectPolicyLimitsBody,
  serverBodyOf,
  seedSessionCacheFromPrime,
  isPolicyAllowed,
  isPolicyAllowedInResponse,
  isPolicyRouteMissing,
  policyDeniedReason,
  hasNameableComplianceTaint,
  policyDenyKind,
  policyDeniedHint,
  areComplianceTaintsSettled,
  isPolicyEnforced,
  getPolicyDefault,
  getResponseFromCache,
};

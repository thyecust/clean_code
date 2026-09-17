// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { YPe } from "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import { classifyChromeToolError } from "./chrome-tool-error-classifier.js";
import { _ut } from "../图片-截图-ComputerUse/chunk-csvzwhzk.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isAutoClassifierActive, effectiveModeForTool, sanitizeSessionName } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Ve, R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { c2e, u2e } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { matchesToolName } from "../权限系统/chunk-qdy0h5k2.js";
import { getClaudeInChromeState, CFC_TOOL_PREFIX, CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL } from "./claude-in-chrome-host.js";
import { forgetClassifierMetaLines, isAutoApprovableBrowserToolCall, getImageLimitsForModel, setTabsProvider, getCurrentSessionDisplayTitle } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { stripReservedMetaKeys } from "../../01-核心基础设施/共享小工具-未细化/mcp-tool-result-fields.js";
import { getBrowserToolVerbPhrase } from "../../01-核心基础设施/共享小工具-未细化/browser-tool-verb-phrases.js";
import { Bg } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
function G(e) {
  return e.replace(/^www\./i, "");
}
function P(e) {
  if (e.startsWith("[")) {
    let n = e.indexOf("]");
    return n === -1 ? e : e.slice(0, n + 1);
  }
  let t = e.lastIndexOf(":");
  return t === -1 ? e : e.slice(0, t);
}
function C(e) {
  let t = c2e(e)
      .replace(/\.+(?=$|:)/, "")
      .toLowerCase(),
    n = P(t),
    r = t.slice(n.length),
    o = (u2e(n) || n).replace(/\.+$/, "");
  return G(o + r);
}
function U(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return;
  }
  if (t.host === "") return;
  return `${t.protocol}//${C(t.host)}`;
}
function j(e, t) {
  let n = U(e),
    r = U(t);
  return n === void 0 || r === void 0 || n !== r;
}
function A(e, t) {
  let n = getClaudeInChromeState().lastExecutedTabUrlByScope.get(e);
  if (n === void 0) return;
  return j(n, t) ? { from: n, to: t } : void 0;
}
function E(e, t) {
  getClaudeInChromeState().lastExecutedTabUrlByScope.set(e, t);
}
var D = 200;
function O(e, t) {
  let n = getClaudeInChromeState().resolvedHostByToolUseId;
  if (n.size >= D) n.clear();
  n.set(e, t);
}
function q(e, t) {
  let n = getClaudeInChromeState().resolvedUrlByToolUseId;
  if (n.size >= D) n.clear();
  n.set(e, t);
}
function F() {
  let e = K();
  return { sessionId: e };
}
function Hhr(e, t) {
  getClaudeInChromeState().bridgeBinding = { context: e, socketClient: t };
}
var V = new RegExp(`^${CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL}\\(([^)]+)\\)$`);
function x(e) {
  let t = new Set(),
    n = [],
    r = new Set(),
    o = new Map();
  return (
    L(e.alwaysDenyRules, r, o),
    L(e.alwaysAllowRules, t, o, n, r),
    { allowed: t, denied: r, allowedRaw: n, sourceOf: o }
  );
}
function W(e, t) {
  let n = CFC_TOOL_PREFIX.slice(0, -2),
    r = `${CFC_TOOL_PREFIX}*`;
  for (let o of Object.values(e.alwaysAllowRules))
    for (let s of o ?? []) {
      let i = s.replace(/\(\*?\)$/, "");
      if (i === t || i === n || i === r) return !0;
    }
  return !1;
}
function N(e, t) {
  return e.has(t) || e.has(P(t));
}
function L(e, t, n, r, o) {
  for (let [s, i] of Object.entries(e))
    for (let m of i ?? []) {
      let d = V.exec(m);
      if (d?.[1]) {
        let l = C(d[1]);
        if (o && N(o, l)) continue;
        if (!t.has(l)) (t.add(l), n.set(l, s), r?.push(d[1]));
      }
    }
}
function k(e) {
  let t = e.trim(),
    n;
  try {
    if (((n = new URL(t)), n.protocol !== "http:" && n.protocol !== "https:")) {
      if (!/^(localhost|[a-z0-9-]+\.[a-z0-9.-]+):\d+(?=$|[/?#])/i.test(t))
        return;
      n = void 0;
    }
  } catch {}
  if (!n)
    try {
      n = new URL(`https://${t}`);
    } catch {
      return;
    }
  if (!n.host || n.username || n.password) return;
  return { host: n.host, url: n.href };
}
var Y = new Set([
    "tabs_context_mcp",
    "tabs_create_mcp",
    "tabs_close_mcp",
    "resize_window",
    "shortcuts_list",
    "list_connected_browsers",
  ]),
  Q = new Set(["switch_browser", "select_browser"]),
  X = {
    tab_missing:
      "Couldn't determine which page this action targets. Pass the tabId from tabs_context_mcp and try again.",
    batch_multiple_tabs:
      "Claude in Chrome: a browser_batch must act on one tab. Pass the same tabId on every action.",
    batch_after_navigate:
      "Claude in Chrome: a browser_batch cannot act on a page after navigating to it. Issue the navigate on its own, then batch the actions on the loaded page.",
    batch_browser_switch:
      "Claude in Chrome: switch browsers in its own call, not inside a browser_batch.",
    batch_malformed_item:
      "Claude in Chrome: a browser_batch action must be {name, input} and cannot nest another browser_batch.",
  };
function J(e, t) {
  let n = [];
  if (e === "browser_batch") {
    if (!Array.isArray(t.actions))
      return { kind: "deny", code: "batch_malformed_item" };
    for (let s of t.actions) {
      if (!isRecord(s) || typeof s.name !== "string" || s.name === "browser_batch")
        return { kind: "deny", code: "batch_malformed_item" };
      n.push({ name: s.name, input: isRecord(s.input) ? s.input : {} });
    }
  } else n.push({ name: e, input: t });
  let r = new Set(),
    o = !1;
  for (let s of n) {
    if (s.name === "navigate") {
      o = !0;
      continue;
    }
    if (Q.has(s.name)) {
      if (n.length > 1) return { kind: "deny", code: "batch_browser_switch" };
      continue;
    }
    if (Y.has(s.name)) continue;
    if (o) return { kind: "deny", code: "batch_after_navigate" };
    if (typeof s.input.tabId !== "number")
      return { kind: "deny", code: "tab_missing" };
    r.add(s.input.tabId);
  }
  if (r.size === 0) return { kind: "none" };
  if (r.size > 1) return { kind: "deny", code: "batch_multiple_tabs" };
  return { kind: "tab", tabId: [...r][0] };
}
var Z = 5000;
async function M(e) {
  try {
    return (await H())?.find((n) => n.tabId === e)?.url;
  } catch {
    return;
  }
}
async function H() {
  let e = getClaudeInChromeState().bridgeBinding;
  if (!e) return;
  try {
    return await withTimeout(
      (async () => {
        if (!(await e.socketClient.ensureConnected())) return;
        let t = await e.socketClient.callTool(
          "tabs_context_mcp",
          { createIfEmpty: !1, includePermissionState: !1 },
          { permissionMode: "ask", sessionScope: F() },
        );
        if (!t || t.error) return;
        let n = t.result?.content,
          r =
            Array.isArray(n) &&
            n[0] &&
            typeof n[0] === "object" &&
            "text" in n[0] &&
            typeof n[0].text === "string"
              ? n[0].text
              : void 0;
        if (!r) return;
        return z(r).availableTabs;
      })(),
      Z,
      "queryTabUrl bridge call",
    );
  } catch {
    return;
  }
}
setTabsProvider(H);
var ee = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function B(e) {
  return {
    type: "text",
    text: `[Image from Claude in Chrome \u2014 ${e}; not inlined]`,
  };
}
function te(e) {
  if (!e) return !1;
  let t = beforeFirst(e, ";").trim().toLowerCase();
  return ee.has(t === "image/jpg" ? "image/jpeg" : t);
}
async function ne(e, t) {
  let n = getImageLimitsForModel(t),
    r = [];
  for (let o of e.content ?? [])
    if (o.type === "text") r.push({ type: "text", text: o.text });
    else if (o.type === "image")
      if (te(o.mimeType))
        try {
          let { block: s } = await Bg({
            data: String(o.data),
            mediaType: o.mimeType,
            limits: n,
          });
          r.push(s);
        } catch {
          r.push(B("could not be decoded"));
        }
      else r.push(B(`unsupported type ${o.mimeType ?? "unknown"}`));
  return r;
}
function oe(e) {
  if (!Array.isArray(e.actions)) return;
  for (let t of e.actions) {
    if (!isRecord(t) || typeof t.name !== "string") continue;
    let n = isRecord(t.input) ? t.input : {};
    if (YPe.has(t.name) && isAutoApprovableBrowserToolCall(t.name, n)) continue;
    if (
      t.name === "navigate" &&
      typeof n.url === "string" &&
      (n.url.trim().toLowerCase() === "back" ||
        n.url.trim().toLowerCase() === "forward")
    )
      continue;
    if (
      (t.name === "navigate" && typeof n.url === "string") ||
      typeof n.tabId === "number"
    )
      return { toolName: t.name, input: n };
  }
  return;
}
function re(e) {
  if (!Array.isArray(e.actions)) return !1;
  return e.actions.some((t) => {
    if (!isRecord(t) || typeof t.name !== "string") return !0;
    return (
      t.name === "browser_batch" ||
      (YPe.has(t.name) && !isAutoApprovableBrowserToolCall(t.name, isRecord(t.input) ? t.input : {}))
    );
  });
}
function se(e, t, n) {
  let r = getBrowserToolVerbPhrase(e, t);
  return n
    ? `Allow Claude in Chrome to ${r} on ${n}?`
    : `Allow Claude in Chrome to ${r}?`;
}
function ie(e) {
  return async (t) => {
    let n;
    try {
      n = new URL(t.url).host;
    } catch {}
    let r = !!n && e.has(C(n));
    if (!r) logFeatureBad("chrome_permission_prompt", "stale_host_mismatch");
    return r;
  };
}
async function ae(e, t, n, r) {
  let o = getClaudeInChromeState().bridgeBinding;
  if (!o)
    throw (
      logFeatureBad("chrome_permission_prompt", "binding_missing"),
      Error("Claude in Chrome bridge is not initialized in this session.")
    );
  let s = n.abortController.signal;
  if (s.aborted) throw new Ve("Claude in Chrome tool call aborted");
  let i,
    m = new Promise((u, p) => {
      ((i = () => p(new Ve("Claude in Chrome tool call aborted"))),
        s.addEventListener("abort", i, { once: !0 }));
    }),
    d;
  try {
    d = await Promise.race([_ut(o.context, o.socketClient, e, t ?? {}, r), m]);
  } finally {
    if (i) s.removeEventListener("abort", i);
  }
  if (d.isError) {
    let u =
        (d.content ?? []).flatMap((b) => (b.type === "text" ? [b.text] : []))
          .join(`
`) || `${e} failed`,
      p = d._meta,
      _ =
        p?.isBridgeTimeout === !0
          ? "bridge_timeout"
          : p?.isFrontLoadBoundExceeded === !0
            ? "front_load_bound_exceeded"
            : void 0;
    throw new R(
      u,
      "Claude in Chrome tool returned error",
      `chrome_${_ ?? classifyChromeToolError(e, u)}`,
    );
  }
  let l = await ne(d, n.options.mainLoopModel),
    a = stripReservedMetaKeys(d._meta);
  return { data: l, ...(a && { mcpMeta: { _meta: a } }) };
}
function uon(e) {
  let t = `${CFC_TOOL_PREFIX}${e}`;
  return {
    checkPermissions: async (o, s) => {
      let i = s.toolUseId,
        m = YPe.has(e);
      if (m && isAutoApprovableBrowserToolCall(e, o)) return { behavior: "allow", updatedInput: o };
      let d = (m && !isAutoApprovableBrowserToolCall(e, o)) || (e === "browser_batch" && re(o));
      if (
        e === "navigate" &&
        typeof o.url === "string" &&
        (o.url.trim().toLowerCase() === "back" ||
          o.url.trim().toLowerCase() === "forward")
      )
        return { behavior: "allow", updatedInput: o };
      let l = e === "browser_batch" ? oe(o) : { input: o, toolName: e },
        a;
      if (l && l.toolName === "navigate" && typeof l.input.url === "string") {
        if (((a = k(l.input.url)), !a))
          return (
            logFeatureBad("chrome_permission_prompt", "non_web_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable URL",
                classifierApprovable: !1,
              },
            }
          );
      } else if (l && typeof l.input.tabId === "number") {
        let c = await M(l.input.tabId);
        if (!c)
          return (
            logFeatureBad("chrome_permission_prompt", "tab_url_unresolved"),
            {
              behavior: "deny",
              message:
                "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: tab URL unresolved",
                classifierApprovable: !1,
              },
            }
          );
        if (((a = k(c)), !a))
          return (
            logFeatureBad("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: !1,
              },
            }
          );
      }
      let u = getToolPermissionContext(s),
        p = effectiveModeForTool(
          s.options?.tools?.find((c) => matchesToolName(c, t)),
          u,
        ),
        _ =
          p === "bypassPermissions" ||
          (p === "plan" && u.isBypassPermissionsModeAvailable),
        b =
          u.chromeNavigationClassifierEnabled === !0 &&
          !_ &&
          (u.chromeClassifierFloorEnabled === !0 || isAutoClassifierActive(p)),
        h,
        T,
        I = () => {
          if (!i) return;
          if (T === void 0) getClaudeInChromeState().resolvedUrlByToolUseId.delete(i);
          else q(i, T);
          if (h === void 0) forgetClassifierMetaLines(i);
        };
      if (b) {
        let c = J(e, o);
        if (c.kind === "deny")
          return (
            logFeatureBad("chrome_permission_prompt", c.code),
            I(),
            {
              behavior: "deny",
              message: X[c.code],
              decisionReason: {
                type: "safetyCheck",
                reason: `Claude in Chrome: ${c.code}`,
                classifierApprovable: !1,
              },
            }
          );
        if (c.kind === "tab") {
          let v =
              a && l?.toolName !== "navigate" && l?.input.tabId === c.tabId
                ? a.url
                : await M(c.tabId),
            S = v === void 0 ? void 0 : k(v);
          if (S === void 0)
            return (
              logFeatureBad("chrome_permission_prompt", "tab_url_unresolved"),
              I(),
              {
                behavior: "deny",
                message:
                  "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.",
                decisionReason: {
                  type: "safetyCheck",
                  reason: "Claude in Chrome: tab URL unresolved",
                  classifierApprovable: !1,
                },
              }
            );
          if (((h = A(K(), S.url)), !(d && u.mode === "plan"))) T = S.url;
        }
      }
      I();
      let w = !1;
      if (a) {
        let c = x(u),
          v = C(a.host),
          S = c.sourceOf.get(v) ?? c.sourceOf.get(P(v)) ?? "session";
        if (N(c.denied, v))
          return (
            logFeatureSad("chrome_permission_prompt", "domain_rule_denied"),
            {
              behavior: "deny",
              message: `Claude in Chrome is denied on ${a.host}.`,
              decisionReason: {
                type: "rule",
                rule: {
                  source: S,
                  ruleBehavior: "deny",
                  ruleValue: { toolName: CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL, ruleContent: a.host },
                },
              },
            }
          );
        if (
          ((w = c.allowed.has(v)),
          w && h === void 0 && u.chromeClassifierFloorEnabled !== !0 && !d)
        ) {
          if (i) O(i, a);
          return {
            behavior: "allow",
            updatedInput: o,
            decisionReason: {
              type: "rule",
              rule: {
                source: S,
                ruleBehavior: "allow",
                ruleValue: { toolName: CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL, ruleContent: a.host },
              },
            },
          };
        }
        if (i && (w || u.chromeClassifierFloorEnabled === !0 || !W(u, t)))
          O(i, a);
      }
      if (d && u.mode === "plan")
        return {
          behavior: "passthrough",
          message: "Claude in Chrome requires permission.",
        };
      return {
        behavior: "ask",
        message: "Claude in Chrome requires permission.",
        suggestions: a
          ? w
            ? void 0
            : [
                {
                  type: "addRules",
                  rules: [{ toolName: CLAUDE_IN_CHROME_DOMAIN_RULE_TOOL, ruleContent: a.host }],
                  behavior: "allow",
                  destination: "session",
                },
              ]
          : [
              {
                type: "addRules",
                rules: [{ toolName: t, ruleContent: void 0 }],
                behavior: "allow",
                destination: "session",
              },
            ],
        decisionReason: h
          ? {
              type: "safetyCheck",
              reason: "Claude in Chrome: cross-site navigation pending",
              classifierApprovable: !0,
            }
          : {
              type: "other",
              reason: a
                ? `Claude in Chrome action on ${a.host}`
                : "Claude in Chrome action",
            },
        metadata: {
          command: {
            name: t,
            description: se(e, o, a?.host),
            chrome: a ? { ...a, domainAllowed: w, navigation: h } : void 0,
          },
        },
      };
    },
    call: async (o, s) => {
      let i = s.toolUseId,
        m = i ? getClaudeInChromeState().resolvedHostByToolUseId.get(i)?.host : void 0,
        d = i ? getClaudeInChromeState().resolvedUrlByToolUseId.get(i) : void 0;
      if (i)
        (getClaudeInChromeState().resolvedHostByToolUseId.delete(i),
          getClaudeInChromeState().resolvedUrlByToolUseId.delete(i));
      let l = getToolPermissionContext(s),
        a = s.options?.tools?.find((w) => matchesToolName(w, t)),
        u = effectiveModeForTool(a, l) === "bypassPermissions",
        p = x(l),
        _ = p.allowed,
        b = [...p.allowedRaw];
      if (m && !_.has(C(m))) (_.add(C(m)), b.push(m));
      let h = F(),
        T = u
          ? { permissionMode: "skip_all_permission_checks", sessionScope: h }
          : m
            ? {
                permissionMode: "follow_a_plan",
                allowedDomains: b,
                onPermissionRequest: ie(_),
                sessionScope: h,
              }
            : b.length > 0
              ? {
                  permissionMode: "follow_a_plan",
                  allowedDomains: b,
                  sessionScope: h,
                }
              : { permissionMode: "ask", sessionScope: h },
        I = await ae(e, o, s, T);
      if (d !== void 0) E(K(), d);
      if (m) logFeatureOk("chrome_permission_prompt");
      return I;
    },
  };
}
export { Hhr, uon };

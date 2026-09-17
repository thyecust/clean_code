// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 69 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import { TGe } from "../图片-截图-ComputerUse/chunk-csvzwhzk.js";
import { B, sc } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Dt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Et, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { no } from "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { yd } from "../ClaudeinChrome/chunk-hnp84hf6.js";
import { s, T, Jq, Uf, v, c, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
var I = 50,
  x = 1500,
  P = 5000,
  w = new Set(["chrome://newtab/", "about:blank"]),
  M = m(() =>
    c({
      error: Jq().or(Uf()).or(k(!1)).or(k("")).optional(),
      result: c({ isError: k(!0).optional() }),
    }),
  );
function A(e) {
  let o = M().safeParse(e);
  return o.success && o.data.result.isError !== !0;
}
var F = m(() => c({ availableTabs: v(c({ tabId: T(), url: s() })) }));
function closeSessionTabGroup({
  sessionId: e,
  onlyIfEmpty: o,
  clientOverride: l,
  callTimeoutMs: u = P,
}) {
  if (a.CLAUDE_CODE_REMOTE_SESSION_ID || !H("tengu_chrome_tab_group_close", !0))
    return Promise.resolve({ status: "disabled" });
  let r = yd().closesInFlight,
    p = r.get(e);
  if (p && (o || !p.onlyIfEmpty)) return p.promise;
  let t = (p?.promise ?? Promise.resolve())
    .then(() =>
      R({ sessionId: e, onlyIfEmpty: o, clientOverride: l, callTimeoutMs: u }),
    )
    .finally(() => {
      if (r.get(e)?.promise === t) r.delete(e);
    });
  return (r.set(e, { onlyIfEmpty: o, promise: t }), t);
}
async function R({
  sessionId: e,
  onlyIfEmpty: o,
  clientOverride: l,
  callTimeoutMs: u,
}) {
  let r = l ?? yd().bridgeBinding?.socketClient;
  if (!r || !r.isConnected())
    return (
      n("[closeSessionTabGroup] bridge not connected, skipping"),
      { status: "not_connected" }
    );
  let p = { permissionMode: "ask", sessionScope: { sessionId: e } },
    t,
    b;
  try {
    let i = await Dt(
        r.callTool("tabs_context_mcp", { createIfEmpty: !1 }, p),
        u,
        "tabs_context_mcp timed out",
      ),
      { tabGroupId: _, json: S } = TGe(i);
    if (_ === void 0 || S === void 0)
      return (
        n("[closeSessionTabGroup] no group for session"),
        { status: "no_group" }
      );
    b = _;
    let E = F().safeParse(z(S));
    if (!E.success)
      return (
        n(`[closeSessionTabGroup] group ${b}: unreadable tab list, keeping it`),
        logFeatureSad("chrome_tab_group_close", "tabs_unreadable"),
        { status: "kept", tabs: 0 }
      );
    t = E.data.availableTabs;
  } catch (i) {
    return (
      n(`[closeSessionTabGroup] tabs_context_mcp failed: ${String(i)}`),
      logFeatureBad("chrome_tab_group_close", "context_failed"),
      { status: "no_group" }
    );
  }
  if (o && t.some((i) => !w.has(i.url)))
    return (
      n(
        `[closeSessionTabGroup] group ${b} has content, keeping ${t.length} tabs`,
      ),
      { status: "kept", tabs: t.length }
    );
  if (t.length > I)
    return (
      n(
        `[closeSessionTabGroup] group ${b} holds ${t.length} tabs, over the close cap; keeping it`,
      ),
      logFeatureSad("chrome_tab_group_close", "over_cap"),
      { status: "kept", tabs: t.length }
    );
  let G = {
      permissionMode: "ask",
      sessionScope: { sessionId: e, tabGroupId: b },
    },
    C = 0,
    d = 0;
  for (let i = t.length - 1; i >= 0; i--) {
    let { tabId: _ } = t[i];
    try {
      let S = await Dt(
        r.callTool("tabs_close_mcp", { tabId: _ }, G),
        u,
        "tabs_close_mcp timed out",
      );
      if (!A(S)) {
        d++;
        break;
      }
      C++;
    } catch {
      d++;
      break;
    }
  }
  if (
    (n(
      `[closeSessionTabGroup] group ${b}: closed ${C}/${t.length} tabs` +
        (d > 0 ? ", stopped at a failed close" : ""),
    ),
    d > 0)
  )
    logFeatureSad("chrome_tab_group_close", "close_failed");
  else logFeatureOk("chrome_tab_group_close");
  return { status: "closed", closed: C, failed: d };
}
function registerChromeTabGroupCleanup() {
  let e = yd();
  if (e.tabGroupCleanupRegistered) return;
  e.tabGroupCleanupRegistered = !0;
  let o = B().id;
  ((e.unsubscribeSessionSwitch = sc((l, u) => {
    if (l === o) return;
    let r = o;
    ((o = l), closeSessionTabGroup({ sessionId: r, onlyIfEmpty: !0 }).catch(logError));
  })),
    (e.unregisterExitCleanup = Et(() => {
      if (!no()) return;
      let l = Array.from(e.closesInFlight.values(), (u) => u.promise);
      return Dt(
        Promise.allSettled([...l, closeSessionTabGroup({ sessionId: B().id, onlyIfEmpty: !0 })]),
        x,
        "chrome tab group close timed out at exit",
      ).catch(() => {});
    })));
}
export { closeSessionTabGroup, registerChromeTabGroupCleanup };

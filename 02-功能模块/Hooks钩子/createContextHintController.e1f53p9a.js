// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 202 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { kCn, tt, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Lt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { SS } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ee } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { KGn, Dg, hfn, _fn, EVn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Gre, TSn, tG, nG } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
function c() {
  return H("tengu_hazel_osprey", !1);
}
var A = 75000;
function m() {
  return H("tengu_hazel_osprey_floor", A);
}
function p(e) {
  return e instanceof Lt && (e.status === 422 || e.status === 424);
}
function g(e) {
  if (!(e instanceof Lt)) return !1;
  if (e.status !== void 0) return !1;
  return e.error?.error?.type === "invalid_request_error";
}
function f(e) {
  return e instanceof Lt && e.status === 409;
}
function E(e) {
  if (!(e instanceof Lt)) return !1;
  if (e.status !== 400) return !1;
  let t = e.message ?? "";
  return (
    (t.includes("Unexpected value") && t.includes("anthropic-beta")) || KGn(t)
  );
}
function T(e) {
  if (e instanceof Lt) return e.requestID ?? void 0;
  return;
}
function C(e) {
  logEvent("tengu_context_hint_reject", {
    requestId: Ee(e.requestId),
    preCompactTokenEstimate: e.preCompactTokenEstimate,
    postCompactTokenEstimate: e.postCompactTokenEstimate,
    tokensSaved: e.tokensSaved,
    mcApplied: e.mcApplied,
    mcTokensSaved: e.mcTokensSaved,
  });
}
function d(e, t) {
  logEvent("tengu_context_hint_busy_fallback", { requestId: Ee(e), status: t });
}
var S = 5,
  _ = new Set(),
  I = new Map();
async function b(e, t, o) {
  let a = await tG(e, t, SS(), o);
  if (nG(a)) return null;
  return `${Gre}Tool result saved to: ${a.filepath}

Use ${tt} to view${TSn}`;
}
async function P(e, t, o, a) {
  let l = Dg(e),
    r = await EVn(e, t, {
      keepRecent: S,
      persist: (x, R) => b(x, R, o),
      agentId: a,
    }),
    u = r ? r.messages : e,
    s = Dg(u);
  return (
    n(`[CONTEXT_HINT_REJECT] mc=${!!r} tokensSaved=${r?.tokensSaved ?? 0}`),
    {
      messages: u,
      clearedIds: r?.clearedIds ?? _,
      clearedContent: r?.clearedContent ?? I,
      applied: { mcApplied: !!r, mcTokensSaved: r?.tokensSaved ?? 0 },
      preCompactTokenEstimate: l,
      postCompactTokenEstimate: s,
    }
  );
}
async function k(e) {
  let t = await P(e.messages, e.querySource, e.storageV5, e.agentId);
  return (
    logFeatureOk("compact_hint_reject"),
    C({
      requestId: e.requestId,
      preCompactTokenEstimate: t.preCompactTokenEstimate,
      postCompactTokenEstimate: t.postCompactTokenEstimate,
      tokensSaved: t.preCompactTokenEstimate - t.postCompactTokenEstimate,
      mcApplied: t.applied.mcApplied,
      mcTokensSaved: t.applied.mcTokensSaved,
    }),
    {
      messages: t.messages,
      clearedIds: t.clearedIds,
      clearedContent: t.clearedContent,
    }
  );
}
function createContextHintController(e) {
  if (!e.includeFirstPartyBetas) return null;
  if (!e.querySource.startsWith("repl_main_thread")) return null;
  let t = c(),
    o = !1,
    a = !1,
    l = !1;
  return {
    active: t,
    buildRequestParams(r) {
      if (((a = !1), !t || o)) return null;
      a = !0;
      let u = _fn(r, S).tokensSaved >= hfn,
        s = m();
      return {
        beta: kCn,
        body: u
          ? {
              context_hint: {
                enabled: !0,
                ...(s > 0 && { target_tokens_saved: s }),
              },
            }
          : null,
      };
    },
    async onRequestError(r, u) {
      if (!a || o) return null;
      let s = T(r);
      if (p(r))
        return (
          (o = !0),
          k({
            messages: u,
            querySource: e.querySource,
            agentId: e.agentId,
            requestId: s,
            storageV5: e.storageV5,
          })
        );
      if (E(r))
        return (
          (o = !0),
          d(s, 400),
          { messages: u, clearedIds: _, clearedContent: I }
        );
      if (f(r)) return ((o = !0), d(s, 409), null);
      if (e.is529Error(r)) return ((o = !0), d(s, 529), null);
      return null;
    },
    classifyStreamError(r) {
      if (((l = !1), !a || o)) return !1;
      if (!g(r)) return !1;
      return ((l = !0), !0);
    },
    async onStreamFallback(r, u) {
      let s = l;
      if (((o = !0), !s)) return null;
      return k({
        messages: r,
        querySource: e.querySource,
        agentId: e.agentId,
        requestId: u,
        storageV5: e.storageV5,
      });
    },
    strip() {
      o = !0;
    },
  };
}
export { createContextHintController };

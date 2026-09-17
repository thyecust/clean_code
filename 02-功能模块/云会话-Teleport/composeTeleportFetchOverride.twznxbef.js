// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 50 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Tc, Is, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { UR } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { runGuardedFetch } from "../../01-核心基础设施/共享小工具-未细化/test-egress-guard.js";
import { getSessionAuthHeaders } from "../认证-OAuth登录/credential-file-descriptors.js";
import { getTeleportCacheState, revertTeleportCache, logTeleportFallbackOnce, verifyPreAnchorIntact, verifyToolsBaselineIntact } from "../../01-核心基础设施/共享小工具-未细化/chunk-qv8z365a.js";
import { resolveProxyFetchOptions } from "../../01-核心基础设施/共享小工具-未细化/proxy-fetch-options.js";
import { getCcrSessionConfig } from "../../01-核心基础设施/共享小工具-未细化/ccr-session-config.js";
var P = 60000,
  L = 15000;
function D() {
  let r = a.API_TIMEOUT_MS;
  return r !== void 0 && r > 0 ? Math.min(L, Math.floor(r / 2)) : L;
}
var H = 4096,
  E = 5000;
async function U(r, d = E) {
  let u = r.body?.getReader();
  if (!u) return null;
  let c = [],
    y = 0,
    p = !1,
    o = setTimeout(() => {
      ((p = !0), u.cancel().catch(() => {}));
    }, d);
  try {
    for (;;) {
      let { done: g, value: t } = await u.read();
      if (g || p) break;
      if (((y += t.byteLength), y > H))
        return (u.cancel().catch(() => {}), null);
      c.push(t);
    }
  } catch {
    return null;
  } finally {
    clearTimeout(o);
  }
  if (p) return null;
  try {
    let g = Buffer.concat(c).toString("utf8"),
      e = Is(g)?.error?.type;
    return typeof e === "string" ? e : null;
  } catch {
    return null;
  }
}
function composeTeleportFetchOverride(r, d) {
  return B(r, getCcrSessionConfig(), d);
}
function x(r) {
  if (typeof r === "string") return r;
  if (r instanceof URL) return r.href;
  return r.url;
}
function O(r) {
  return (
    typeof r === "object" &&
    r !== null &&
    "defer_loading" in r &&
    r.defer_loading === !0
  );
}
function I(r, d) {
  if (
    (d?.method ?? (r instanceof Request ? r.method : "GET")).toUpperCase() !==
    "POST"
  )
    return !1;
  let c;
  try {
    c = new URL(x(r)).pathname;
  } catch {
    return !1;
  }
  return c.endsWith("/v1/messages");
}
function B(
  r,
  d,
  u,
  {
    dispatchTimeoutMs: c = P,
    errorBodyReadTimeoutMs: y = E,
    headersAbortLatchFloorMs: p = D(),
  } = {},
) {
  if (!d) return r;
  let o = (t, e) => (r ? r(t, e) : runGuardedFetch(t, e));
  return async (t, e) => {
    let f = getTeleportCacheState();
    if (f.status !== "active") return o(t, e);
    if (!I(t, e)) return o(t, e);
    let b = e?.body;
    if (typeof b !== "string") return o(t, e);
    let T = !1,
      _ = null,
      h;
    try {
      let l = Is(b);
      ((T = l.stream === !0),
        (_ = typeof l.model === "string" ? l.model : null),
        (h = l.tools));
    } catch {
      return o(t, e);
    }
    if (!T) return o(t, e);
    if (f.marker.model !== void 0 && _ !== null && _ !== f.marker.model)
      return (logTeleportFallbackOnce("model_mismatch"), o(t, e));
    if (!verifyPreAnchorIntact(u())) return o(t, e);
    let R;
    try {
      R =
        h === void 0
          ? null
          : hashSha256(
              Tc(
                Array.isArray(h)
                  ? [h.some((s) => O(s)), h.filter((s) => !O(s))]
                  : h,
              ),
            );
    } catch {
      return (
        logTeleportFallbackOnce("relay_compose_error"),
        n(
          "teleport relay tools-fingerprint computation failed \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    if (!verifyToolsBaselineIntact(_, R)) return o(t, e);
    let v = `${f.ingressOrigin}/v2/ccr-sessions/${f.remoteSessionId}/teleport/conversations/${f.marker.conversation_uuid}/completion`;
    if (!UR(v))
      return (
        revertTeleportCache("relay_unreachable", "relay url failed the CCR origin gate"),
        o(t, e)
      );
    let m;
    try {
      let s = new Headers(e?.headers);
      ((m = new Headers()),
        m.set("content-type", s.get("content-type") ?? "application/json"));
      let l = s.get("anthropic-beta");
      if (l !== null) m.set("anthropic-beta", l);
      for (let [F, M] of Object.entries(getSessionAuthHeaders())) m.set(F, M);
      m.set("anthropic-version", f.marker.anthropic_version);
    } catch {
      return (
        logTeleportFallbackOnce("relay_compose_error"),
        n(
          "teleport relay request composition failed \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    let i,
      S = performance.now(),
      k = new AbortController(),
      C = setTimeout((s) => s.abort(), c, k),
      w = k.signal;
    try {
      i = await runGuardedFetch(v, {
        ...(await resolveProxyFetchOptions(v)),
        method: "POST",
        headers: m,
        body: b,
        signal: e?.signal ? AbortSignal.any([e.signal, w]) : w,
        redirect: "error",
      });
    } catch (s) {
      if (w.aborted && !e?.signal?.aborted)
        return (
          revertTeleportCache(
            "relay_dispatch_timeout",
            `relay dispatch timed out after ${c}ms`,
          ),
          n(
            "teleport relay dispatch timed out \u2014 reverting to standard behavior",
            { level: "warn" },
          ),
          o(t, e)
        );
      if (
        e?.signal?.aborted ||
        (s instanceof DOMException && s.name === "AbortError")
      ) {
        let l = performance.now() - S;
        if (l >= p)
          return (
            revertTeleportCache(
              "relay_dispatch_timeout",
              `caller signal aborted after ${Math.round(l)}ms awaiting relay headers`,
            ),
            n(
              "teleport relay dispatch aborted after a long headers wait \u2014 reverting to standard behavior",
              { level: "warn" },
            ),
            o(t, e)
          );
        throw s;
      }
      return (
        logTeleportFallbackOnce("relay_transport_error"),
        n(
          "teleport relay transport error \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    } finally {
      clearTimeout(C);
    }
    if (!i.ok) {
      if (i.status === 409) {
        if ((await U(i, y)) === "teleport_relay_refused")
          return (
            revertTeleportCache(
              "relay_refused",
              "relay http 409 with the refusal discriminant",
            ),
            n("teleport relay refused \u2014 reverting to standard behavior", {
              level: "warn",
            }),
            o(t, e)
          );
      } else i.body?.cancel().catch(() => {});
      return (
        logTeleportFallbackOnce("relay_unavailable"),
        n(
          `teleport relay unavailable (http ${i.status}) \u2014 standard path for this turn, latch stays armed`,
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    let A = (i.headers.get("content-type") ?? "").toLowerCase();
    if (!A.includes("text/event-stream"))
      return (
        i.body?.cancel().catch(() => {}),
        revertTeleportCache("relay_not_sse", `relay 200 with content-type ${A}`),
        o(t, e)
      );
    return i;
  };
}
export { composeTeleportFetchOverride };

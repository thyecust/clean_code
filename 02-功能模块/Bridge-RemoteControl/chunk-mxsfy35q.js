// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { extractErrorDetail } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { validateBridgeId, toCompatSessionId, toInfraSessionId } from "../权限系统/chunk-ynkf3yy4.js";
import { mse } from "../../01-核心基础设施/共享小工具-未细化/chunk-ezxdt3dm.js";
import { va, getClientPlatform } from "../../01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
var k = /cloudflare/i;
function dQe(e) {
  let r = e("request-id");
  if (typeof r === "string" && mse(r.trim())) return "origin";
  let i = e("cf-ray"),
    c = e("server");
  if (
    (typeof i === "string" && i !== "") ||
    (typeof c === "string" && k.test(c))
  )
    return "nonorigin_cf";
  return "nonorigin_other";
}
function fse(e) {
  return e === "nonorigin_cf" || e === "nonorigin_other";
}
function rVt(e) {
  switch (e) {
    case "nonorigin_cf":
      return "a network edge refused the connection before it reached Anthropic's server (HTTP 403 \u2014 Anthropic's CDN enforcing a region or network policy, or a Cloudflare gateway on this network) rather than this session; this often follows a VPN or network change";
    case "nonorigin_other":
      return "the connection was refused before it reached Anthropic (HTTP 403) \u2014 usually a proxy, VPN or firewall on this network";
  }
}
var E = "2023-06-01";
function oauthHeaders(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": E,
    "anthropic-client-platform": getClientPlatform(),
    "User-Agent": va(),
  };
}
function isCreateSessionFailure(e) {
  return (
    e !== null && typeof e === "object" && "terminal" in e && e.terminal === !0
  );
}
function A(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    !("error" in e) ||
    e.error === null ||
    typeof e.error !== "object"
  )
    return !1;
  let r = e.error,
    i = "type" in r ? r.type : void 0,
    c = "resource_type" in r ? r.resource_type : void 0,
    a = "reason" in r ? r.reason : void 0;
  return (
    (i === "not_found_error" && c === "session_grouping") ||
    a === "public_grouping_hosted_only" ||
    a === "feature_disabled"
  );
}
function w(e) {
  if (e === 401) return "oauth_rejected";
  if (e === 408 || e === 429 || e >= 500) return "transient";
  return "rejected";
}
async function createCodeSession(e, r, i, c, a, f, m, p, o, t, g) {
  let d = `${e}/v1/code/sessions`,
    s = { cwd: m ?? Q(), ...(p && { model: p }) };
  if (f) {
    let { buildGitSessionContext: _ } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js"),
      {
        sources: S,
        outcomes: C,
        report: y,
      } = await _(f.gitRepoUrl, f.branch, f.defaultBranch);
    if (y.branchDropped && y.warnMessage) {
      let j = `${y.branchDropped}:${f.gitRepoUrl}:${f.branch}`;
      if (!t || t.lastKey !== j) {
        if (t) t.lastKey = j;
        n(`[code-session] ${y.warnMessage}`);
      }
    } else if (t) t.lastKey = null;
    if (S.length > 0 || C.length > 0)
      ((s.sources = S), (s.outcomes = C), (s.reuse_outcome_branches = !0));
  }
  let u;
  try {
    u = await at.post(
      d,
      {
        title: i,
        bridge: {},
        ...(a?.length && { tags: a }),
        ...(o && { session_grouping_id: o }),
        config: s,
      },
      { headers: oauthHeaders(r), timeout: c, validateStatus: (_) => _ < 500 },
    );
  } catch (_) {
    return (n(`[code-session] Session create request failed: ${l(_)}`), null);
  }
  if (u.status !== 200 && u.status !== 201) {
    let _ = extractErrorDetail(u.data);
    if (
      (n(
        `[code-session] Session create failed ${u.status}${_ ? `: ${_}` : ""}`,
      ),
      u.status === 401)
    )
      g?.();
    if (u.status >= 400 && u.status < 500 && A(u.data))
      return {
        terminal: !0,
        reason: "grouping_rejected",
        status: u.status,
        detail: _,
      };
    switch (w(u.status)) {
      case "oauth_rejected":
        return { terminal: !1, reason: "oauth_rejected" };
      case "transient":
        return null;
      case "rejected":
        return {
          terminal: !0,
          reason: "request_rejected",
          status: u.status,
          detail: _,
        };
    }
  }
  let h = u.data;
  if (
    !h ||
    typeof h !== "object" ||
    !("session" in h) ||
    !h.session ||
    typeof h.session !== "object" ||
    !("id" in h.session) ||
    typeof h.session.id !== "string" ||
    !h.session.id.startsWith("cse_")
  )
    return (
      n(
        `[code-session] No session.id (cse_*) in response: ${b(h).slice(0, 200)}`,
      ),
      {
        terminal: !0,
        reason: "malformed_response",
        status: u.status,
        detail: void 0,
      }
    );
  return h.session.id;
}
function isCredentialsFailure(e) {
  return e !== null && "terminal" in e && e.terminal === !0;
}
function isCredentialsRejection(e) {
  return (
    typeof e === "object" && e !== null && "terminal" in e && e.terminal === !1
  );
}
function classifyElevatedAuthError(e, r) {
  if (
    e !== null &&
    typeof e === "object" &&
    "error" in e &&
    e.error !== null &&
    typeof e.error === "object" &&
    "resource" in e.error
  ) {
    let i = e.error.resource;
    if (i === "untrusted_device" || i === "session_stale_relogin") return i;
    return;
  }
  if (r?.includes("trusted device")) return "untrusted_device";
  return;
}
async function fetchRemoteCredentials(e, r, i, c, a, f) {
  if (!v(e, "/bridge")) return { terminal: !0, reason: "invalid_session_id" };
  let m = `${r}/v1/code/sessions/${e}/bridge`,
    p = oauthHeaders(i);
  if (a) p["X-Trusted-Device-Token"] = a;
  let o;
  try {
    o = await at.post(
      m,
      {},
      { headers: p, timeout: c, validateStatus: (s) => s < 500 },
    );
  } catch (s) {
    return (n(`[code-session] /bridge request failed: ${l(s)}`), null);
  }
  if (o.status !== 200) {
    let s = extractErrorDetail(o.data);
    if (
      (n(`[code-session] /bridge failed ${o.status}${s ? `: ${s}` : ""}`),
      o.status === 401)
    )
      f?.();
    let u;
    if (o.status === 403) {
      let h = classifyElevatedAuthError(o.data, s);
      if (h) return { terminal: !0, reason: h };
      ((u = dQe((_) => o.headers?.[_])),
        n(`[code-session] /bridge 403 source=${u}`));
    }
    switch (w(o.status)) {
      case "oauth_rejected":
        return { terminal: !1, reason: "oauth_rejected" };
      case "transient":
        return null;
      case "rejected":
        return {
          terminal: !0,
          reason: "request_rejected",
          status: o.status,
          ...(u && { source: u }),
        };
    }
  }
  let t = o.data;
  if (
    t === null ||
    typeof t !== "object" ||
    !("worker_jwt" in t) ||
    typeof t.worker_jwt !== "string" ||
    !("expires_in" in t) ||
    typeof t.expires_in !== "number" ||
    !("api_base_url" in t) ||
    typeof t.api_base_url !== "string" ||
    !("worker_epoch" in t)
  )
    return (
      n(
        `[code-session] /bridge response malformed (need worker_jwt, expires_in, api_base_url, worker_epoch): ${b(t).slice(0, 200)}`,
      ),
      { terminal: !0, reason: "malformed_response", status: 200 }
    );
  let g = t.worker_epoch,
    d = typeof g === "string" ? Number(g) : g;
  if (typeof d !== "number" || !Number.isFinite(d) || !Number.isSafeInteger(d))
    return (
      n(`[code-session] /bridge worker_epoch invalid: ${b(g)}`),
      { terminal: !0, reason: "malformed_response", status: 200 }
    );
  return {
    worker_jwt: t.worker_jwt,
    api_base_url: t.api_base_url,
    expires_in: t.expires_in,
    worker_epoch: d,
    mcp_config: U(t),
    ...{},
  };
}
function v(e, r) {
  try {
    return (validateBridgeId(e, "sessionId"), !0);
  } catch (i) {
    return (n(`[code-session] ${r}: ${l(i)}`), !1);
  }
}
function R(e, r, i, c, a, f = "") {
  let m = a.trustedDeviceToken
    ? { "X-Trusted-Device-Token": a.trustedDeviceToken }
    : void 0;
  if (a.useV2) {
    let o = toInfraSessionId(c);
    return {
      url: `${r}/v1/code/sessions/${o}${f}`,
      headers: { ...oauthHeaders(i), ...m },
      id: o,
    };
  }
  if (!a.orgUUID)
    return (
      n(`[code-session] ${e} ${c}: v1 compat path needs an org UUID`),
      null
    );
  let p = toCompatSessionId(c);
  return {
    url: `${r}/v1/sessions/${p}${f}`,
    headers: {
      ...oauthHeaders(i),
      "anthropic-beta": "ccr-byoc-2025-07-29",
      "x-organization-uuid": a.orgUUID,
      ...m,
    },
    id: p,
  };
}
async function getCodeSession(e, r, i, c, a) {
  if (!v(i, "Get")) return "invalid";
  let f = R("Get", e, r, i, a);
  if (!f) return "invalid";
  let { url: m, headers: p, id: o } = f;
  try {
    let t = await at.get(m, {
      headers: p,
      timeout: c,
      validateStatus: (s) => s < 500,
    });
    if (t.status !== 200) {
      let s = extractErrorDetail(t.data);
      return (
        n(`[code-session] Get ${o} failed ${t.status}${s ? `: ${s}` : ""}`),
        t.status
      );
    }
    if (!a.useV2) {
      let s = t.data;
      return {
        ...s,
        status: s?.status ?? s?.session_status,
        id: typeof s?.id === "string" ? s.id : o,
      };
    }
    let g = t.data,
      d = g?.response_shape ?? g?.session;
    if (d && typeof d.id === "string") return d;
    return (
      n(`[code-session] Get ${o}: no session.id in 200 response`),
      t.status
    );
  } catch (t) {
    return (
      n(`[code-session] Get ${o} failed: ${l(t)}`),
      at.isAxiosError(t) && t.code === "ECONNABORTED" ? "timeout" : "error"
    );
  }
}
async function updateCodeSession(e, r, i, c, a, f) {
  if (!v(i, "Update")) return "invalid";
  let m = R("Update", e, r, i, f);
  if (!m) return "invalid";
  let { url: p, headers: o, id: t } = m,
    g = { headers: o, timeout: a, validateStatus: () => !0 };
  try {
    let d = f.useV2 ? await at.put(p, c, g) : await at.patch(p, c, g);
    if (d.status !== 200) {
      let s = extractErrorDetail(d.data);
      n(`[code-session] Update ${t} failed ${d.status}${s ? `: ${s}` : ""}`);
    }
    return d.status;
  } catch (d) {
    return (
      n(`[code-session] Update ${t} failed: ${l(d)}`),
      at.isAxiosError(d) && d.code === "ECONNABORTED" ? "timeout" : "error"
    );
  }
}
async function archiveCodeSession(e, r, i, c, a) {
  return x("Archive", "/archive", e, r, i, c, a, "untrusted_device");
}
async function unarchiveCodeSession(e, r, i, c, a) {
  return x("Unarchive", "/unarchive", e, r, i, c, a, "elevated_auth");
}
async function x(e, r, i, c, a, f, m, p) {
  if (!v(a, e)) return "invalid";
  let o = R(e, i, c, a, m, r);
  if (!o) return "invalid";
  let { url: t, headers: g, id: d } = o;
  try {
    let s = await at.post(
      t,
      {},
      { headers: g, timeout: f, validateStatus: () => !0 },
    );
    if ((n(`[code-session] ${e} ${d} status=${s.status}`), s.status === 403)) {
      let u = classifyElevatedAuthError(s.data, extractErrorDetail(s.data));
      if (u === "untrusted_device") return u;
      if (p === "elevated_auth" && u === "session_stale_relogin") return u;
    }
    return s.status;
  } catch (s) {
    return (
      n(`[code-session] ${e} ${d} failed: ${l(s)}`),
      at.isAxiosError(s) && s.code === "ECONNABORTED" ? "timeout" : "error"
    );
  }
}
function U(e) {
  if (!("mcp_config" in e)) return;
  let r = e.mcp_config;
  if (
    r !== null &&
    typeof r === "object" &&
    "content" in r &&
    typeof r.content === "string" &&
    r.content.length > 0
  )
    return { content: r.content };
  return;
}
export { dQe, fse, rVt, oauthHeaders, isCreateSessionFailure, createCodeSession, isCredentialsFailure, isCredentialsRejection, classifyElevatedAuthError, fetchRemoteCredentials, getCodeSession, updateCodeSession, archiveCodeSession, unarchiveCodeSession };

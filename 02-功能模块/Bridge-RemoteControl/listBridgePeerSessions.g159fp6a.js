// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 196 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { buildBridgeAddress, appendHopToChain, buildCrossSessionEnvelope, isCCREnvironmentKind } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { computeHopToken } from "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import { normalizeSingleLineText } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { toCompatSessionId, sessionIdBody } from "../权限系统/chunk-ynkf3yy4.js";
import { isCcrV2SendEventsEnabled, isCcrV2SessionCrudEnabled } from "./chunk-9estzwf5.js";
import { extractErrorDetail } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { classifyElevatedAuthError } from "./code-session-api.js";
import { buildSessionEventsRequest } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { createMessageEnvelope } from "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import { isTrustedDeviceGateEnabled, CLOUD_CANNOT_REACH_ELEVATED_HINT, getTrustedDeviceToken, recoverFromUntrustedDevice, untrustedDeviceHint } from "./chunk-tyce0p0b.js";
import { adoptSelfBridgeTitleFromRoster, getSelfBridgeCompatId, getSelfBridgeTitle } from "../权限系统/chunk-1y2g140m.js";
import { parseInboundAvailability } from "./chunk-1yq098a7.js";
import { A7 } from "./chunk-ga43tr2w.js";
import "./chunk-znhfst8k.js";
import "../../01-核心基础设施/共享小工具-未细化/reply-degraded-state.js";
import "./bridge-inbound-origin.js";
import "../../01-核心基础设施/共享小工具-未细化/work-secret.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import { getRemoteSessionCompatId } from "../../01-核心基础设施/共享小工具-未细化/remote-session-compat-id.js";
import { getClientUserAgent } from "../../01-核心基础设施/共享小工具-未细化/user-agent.js";
import { randomUUID } from "crypto";
var A = 5;
async function listBridgePeerSessions(t, i) {
  let { prepareApiRequest: u, sessionsApiWire: w } =
      await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    { getOauthConfig: P } = await import("../认证-OAuth登录/chunk-9g2q4bjq.js"),
    k,
    x;
  try {
    ({ accessToken: k, orgUUID: x } = await u(i));
  } catch (c) {
    if ((logForDebugging(`[bridge:peers] auth prep failed: ${l(c)}`), t)) t.failed = !0;
    return [];
  }
  let f = isCcrV2SessionCrudEnabled(),
    C = w(f ? "v1alpha2" : "v1", P().BASE_API_URL, k),
    b = {
      ...C.headers,
      ...(!f && { "x-organization-uuid": x }),
      "User-Agent": getClientUserAgent(),
    },
    p = await getTrustedDeviceToken();
  if (p) b["X-Trusted-Device-Token"] = p;
  let v = getSelfBridgeCompatId(),
    S = v ? sessionIdBody(v) : void 0,
    o = [],
    g = new Set(),
    m = null,
    _ = !1,
    y = !1;
  for (let c = 0; c < A; c++) {
    let h = new URLSearchParams();
    if (f) h.set("limit", "100");
    if (m) h.set(f ? "cursor" : "after_id", m);
    let E = h.toString(),
      T = E ? `${C.url}?${E}` : C.url,
      s;
    try {
      s = await at.get(T, {
        headers: b,
        timeout: 15000,
        validateStatus: (e) => e < 500,
      });
    } catch (e) {
      if ((logForDebugging(`[bridge:peers] list request failed: ${l(e)}`), t)) t.failed = !0;
      return o;
    }
    if (
      s.status === 403 &&
      !y &&
      classifyElevatedAuthError(s.data, extractErrorDetail(s.data)) === "untrusted_device"
    ) {
      y = !0;
      let e = await recoverFromUntrustedDevice(p);
      if (e) {
        ((b["X-Trusted-Device-Token"] = e), (p = e), c--);
        continue;
      }
    }
    if (s.status !== 200) {
      if ((logForDebugging(`[bridge:peers] list failed ${s.status}`), t)) t.failed = !0;
      return o;
    }
    if (
      s.data === null ||
      typeof s.data !== "object" ||
      !Array.isArray(s.data.data)
    ) {
      if ((logForDebugging("[bridge:peers] list body `data` not an array; stopping"), t))
        t.failed = !0;
      return o;
    }
    for (let e of s.data.data)
      try {
        let d = "session_status" in e,
          D = d
            ? e.session_status
            : e.status === "archived"
              ? "archived"
              : e.worker_status === "running" ||
                  e.worker_status === "requires_action"
                ? e.worker_status
                : "idle";
        if (D === "archived") continue;
        let I = d ? e.id : toCompatSessionId(e.id),
          R = sessionIdBody(I);
        if (S && R === S) {
          adoptSelfBridgeTitleFromRoster(e.title);
          continue;
        }
        if (g.has(R)) continue;
        (g.add(R),
          o.push({
            id: I,
            title: d ? e.title : e.title || null,
            status: D,
            updated_at: (d ? e.updated_at : e.last_event_at) ?? "",
            ...(isCCREnvironmentKind(e.environment_kind) && {
              environmentKind: e.environment_kind,
            }),
            ...((e.connection_status === "connected" ||
              e.connection_status === "disconnected") && {
              connected: e.connection_status === "connected",
            }),
            ...(d
              ? { inboundReportUnavailable: !0 }
              : parseInboundAvailability(e.external_metadata)),
          }));
      } catch (d) {
        logForDebugging(`[bridge:peers] skipping malformed session row: ${l(d)}`);
      }
    let r = f
      ? (s.data.next_cursor ?? null)
      : s.data.has_more
        ? (s.data.last_id ?? null)
        : null;
    if (!r) break;
    if (((m = r), c === A - 1))
      ((_ = !0),
        logForDebugging(
          `[bridge:peers] page budget exhausted with more sessions remaining (scanned ${A} pages)`,
        ));
  }
  if (
    (logForDebugging(
      `[bridge:peers] listed ${o.length} peer sessions${_ ? ` \u2014 TRUNCATED at ${A} pages (more sessions exist)` : ""}`,
      _ ? { level: "warn" } : void 0,
    ),
    t)
  )
    t.truncated = _;
  return o;
}
function isLikelyStaleBridgeError(t) {
  if (!t) return !1;
  if (t.startsWith("auth:")) return !1;
  if (t.startsWith("invalid session ID format")) return !1;
  let i = /^HTTP (\d{3})/.exec(t);
  if (i) {
    let u = Number(i[1]);
    if (u === 401 || u === 403) return !1;
    if (u >= 500) return !1;
  }
  if (/status code 5\d\d/.test(t)) return !1;
  return !0;
}
function classifyBridgeSendError(t) {
  if (!t) return "other";
  if (t.startsWith("auth:")) return "bridge_auth";
  if (t.startsWith("invalid session ID format")) return "invalid_target";
  let i = /^HTTP (\d)\d\d/.exec(t);
  if (i) return i[1] === "5" ? "bridge_http_5xx" : "bridge_http_4xx";
  if (/status code 5\d\d/.test(t)) return "bridge_http_5xx";
  if (/timeout/i.test(t)) return "timeout";
  return "other";
}
async function postInterClaudeMessage(t, i, u, w, P, k, x) {
  let {
      prepareApiRequest: f,
      getOAuthHeaders: C,
      CCR_BYOC_BETA: b,
    } = await import("../认证-OAuth登录/认证-OAuth登录.419zdfz3.js"),
    { getOauthConfig: p } = await import("../认证-OAuth登录/chunk-9g2q4bjq.js"),
    v,
    S;
  try {
    ({ accessToken: v, orgUUID: S } = await f(x));
  } catch (e) {
    return { ok: !1, error: `auth: ${l(e)}` };
  }
  let o = toCompatSessionId(t);
  if (!/^session_[A-Za-z0-9_-]+$/.test(o))
    return { ok: !1, error: `invalid session ID format: ${t}` };
  let g = getSelfBridgeCompatId() ?? getRemoteSessionCompatId(),
    m = g ? buildBridgeAddress(g) : "unknown",
    _ = buildCrossSessionEnvelope(m, getSelfBridgeTitle() ?? u, i, void 0, appendHopToChain(P, g ? computeHopToken(m) : void 0), k),
    y = createMessageEnvelope(),
    c = {
      ...y,
      type: "user",
      message: { role: "user", content: _ },
      parent_tool_use_id: null,
      session_id: o,
      uuid: randomUUID(),
      ...((w?.length ?? 0) > 0 && { file_attachments: w }),
    },
    { url: h, body: E } = buildSessionEventsRequest(p().BASE_API_URL, o, [c], isCcrV2SendEventsEnabled()),
    T = {
      ...C(v),
      "anthropic-beta": b,
      "x-organization-uuid": S,
      "User-Agent": getClientUserAgent(),
    },
    s = await getTrustedDeviceToken();
  if (s) T["X-Trusted-Device-Token"] = s;
  let r;
  try {
    r = await at.post(h, E, {
      headers: T,
      timeout: 1e4,
      validateStatus: (e) => e < 500,
    });
  } catch (e) {
    return { ok: !1, error: l(e) };
  }
  if (
    (U(o, r), r.status === 403 && classifyElevatedAuthError(r.data, extractErrorDetail(r.data)) === "untrusted_device")
  ) {
    if (a.CLAUDE_CODE_REMOTE === !0 && !s && !a.CLAUDE_TRUSTED_DEVICE_TOKEN)
      return { ok: !1, error: `auth: ${CLOUD_CANNOT_REACH_ELEVATED_HINT}` };
    let e = await recoverFromUntrustedDevice(s);
    if (e) {
      try {
        r = await at.post(h, E, {
          headers: { ...T, "X-Trusted-Device-Token": e },
          timeout: 1e4,
          validateStatus: (d) => d < 500,
        });
      } catch (d) {
        return { ok: !1, error: l(d) };
      }
      U(o, r);
    }
    if (r.status === 403 && classifyElevatedAuthError(r.data, extractErrorDetail(r.data)) === "untrusted_device") {
      if (isTrustedDeviceGateEnabled()) return { ok: !1, error: `auth: ${untrustedDeviceHint()}` };
    }
  }
  if (r.status === 403 && classifyElevatedAuthError(r.data, extractErrorDetail(r.data)) === "session_stale_relogin")
    return {
      ok: !1,
      error: `auth: ${A7({ terminal: !0, reason: "session_stale_relogin" })}`,
    };
  if (!B(r.status)) {
    if (r.status === 401 && a.CLAUDE_CODE_REMOTE === !0)
      return { ok: !1, error: `auth: ${O}` };
    return { ok: !1, error: `HTTP ${r.status}` };
  }
  return (
    logForDebugging(`[bridge:peers] posted to ${o}: ${i.slice(0, 60)}`),
    { ok: !0, msgId: y.msg_id }
  );
}
var O =
  "this cloud session cannot message other sessions yet \u2014 its credential is accepted for its own work but not for delivering to another session, so a reply from here is not possible; say so in your response instead of retrying";
function B(t) {
  return t === 200 || t === 201 || t === 204;
}
function U(t, i) {
  if (B(i.status)) return;
  let u = extractErrorDetail(i.data);
  logForDebugging(
    `[bridge:peers] post to ${t} rejected: HTTP ${i.status}${u ? ` \u2014 ${normalizeSingleLineText(u)}` : ""}`,
    { level: "warn" },
  );
}
export {
  classifyBridgeSendError,
  isLikelyStaleBridgeError,
  listBridgePeerSessions,
  postInterClaudeMessage,
};

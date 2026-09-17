// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sleep } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import {
  _je,
  mae,
  uZ,
  N0,
  yje,
  Sje,
  sYt,
  iYt,
  cLn,
  aHt,
  aYt,
  lHt,
} from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { readBoundedSync, readInheritedFdSync, isSocketFd } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { MAX_CREDENTIAL_FILE_BYTES } from "../../01-核心基础设施/核心工具-其他/max-credential-file-bytes.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
function isReviewOriginSession() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
import { mkdirSync, writeFileSync } from "fs";
import { unlink } from "fs/promises";
var y = "/home/claude/.claude/remote",
  OAUTH_TOKEN_WELL_KNOWN_PATH = `${y}/.oauth_token`,
  API_KEY_WELL_KNOWN_PATH = `${y}/.api_key`,
  SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH = `${y}/.session_ingress_token`,
  MAX_CREDENTIAL_BYTES = MAX_CREDENTIAL_FILE_BYTES;
function F(e, t, r, { skipInReviewOrigin: o = !1 } = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (o && isReviewOriginSession()) {
    logForDebugging(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    (mkdirSync(y, { recursive: !0, mode: 448 }),
      writeFileSync(e, t, { encoding: "utf8", mode: 384 }),
      logForDebugging(`Persisted ${r} to ${e} for subprocess access`));
  } catch (s) {
    logForDebugging(`Failed to persist ${r} to disk (non-fatal): ${l(s)}`, {
      level: "error",
    });
  }
}
function h(e, t) {
  return readWellKnownTokenFile(e, t).token;
}
function readWellKnownTokenFile(e, t) {
  try {
    let r = readBoundedSync(e, { maxBytes: MAX_CREDENTIAL_BYTES, regularFileOnly: !0 }).trim();
    if (!r) return { token: null, miss: "empty" };
    return (logForDebugging(`Read ${t} from well-known file ${e}`), { token: r });
  } catch (r) {
    if (W(r)) return { token: null, miss: "enoent" };
    return (
      logForDebugging(`Failed to read ${t} from ${e}: ${l(r)}`, { level: "debug" }),
      { token: null, miss: A(r) === "EACCES" ? "eacces" : "other" }
    );
  }
}
async function w(e, t, r, o, { skipInReviewOrigin: s = !1 } = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (s && isReviewOriginSession()) {
    logForDebugging(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let p = await o.writeHandoffCredential(e, t);
  if (p.state === "written") {
    logForDebugging(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  logForDebugging(
    `Failed to persist ${r} to disk (non-fatal): ${p.code ?? "unknown error"}`,
    { level: "error" },
  );
}
async function v(e, t, r) {
  let o = await r.readHandoffCredential(e, { symlinkAtPath: "follow" });
  switch (o.state) {
    case "present": {
      let s = o.contents.trim();
      if (!s) return null;
      return (logForDebugging(`Read ${t} from well-known file ${e}`), s);
    }
    case "absent":
      return null;
    case "read-failed":
      return (
        logForDebugging(`Failed to read ${t} from ${e}: ${o.code ?? "unknown error"}`, {
          level: "debug",
        }),
        null
      );
  }
}
function D({
  envVar: e,
  wellKnownPath: t,
  readPath: r = t,
  label: o,
  fileLabel: s = o,
  getCached: p,
  setCached: c,
  skipInReviewOrigin: E = !1,
}) {
  let m = p();
  if (m !== void 0) return m;
  let g = process.env[e];
  if (!g) {
    let i = h(r, s);
    return (c(i), i);
  }
  let f = parseInt(g, 10);
  if (Number.isNaN(f))
    return (
      logForDebugging(`${e} must be a valid file descriptor number, got: ${g}`, {
        level: "error",
      }),
      c(null),
      null
    );
  if (isSocketFd(f)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
      u = i ? T(f, o) : h(r, s);
    if (i) (delete process.env[e], aHt(e));
    if ((c(u), u && i)) F(t, u, s, { skipInReviewOrigin: E });
    return u;
  }
  try {
    let i = `/dev/fd/${f}`,
      u = readBoundedSync(i, { maxBytes: MAX_CREDENTIAL_BYTES }).trim();
    if (!u)
      return (
        logForDebugging(`File descriptor contained empty ${o}`, { level: "error" }),
        c(null),
        null
      );
    return (
      logForDebugging(`Successfully read ${o} from file descriptor ${f}`),
      c(u),
      F(t, u, s, { skipInReviewOrigin: E }),
      u
    );
  } catch (i) {
    logForDebugging(`Failed to read ${o} from file descriptor ${f}: ${l(i)}`, {
      level: "error",
    });
    let u = h(r, s);
    if (u) return (c(u), u);
    let S = A(i);
    if (
      (S === "EACCES" || S === "EPERM") &&
      !a.CLAUDE_CODE_REMOTE &&
      typeof process.send !== "function"
    ) {
      let d = T(f, o);
      if ((delete process.env[e], aHt(e), d))
        return (c(d), F(t, d, s, { skipInReviewOrigin: E }), d);
    }
    return (c(null), null);
  }
}
function T(e, t) {
  try {
    logForDebugging(
      `Reading ${t} from inherited descriptor ${e} (until newline or end-of-stream)`,
    );
    let r = readInheritedFdSync(e, { maxBytes: MAX_CREDENTIAL_BYTES }).trim();
    if (!r)
      return (
        logForDebugging(`File descriptor ${e} contained empty ${t}`, { level: "error" }),
        null
      );
    return (
      logForDebugging(`Successfully read ${t} directly from inherited descriptor ${e}`),
      r
    );
  } catch (r) {
    return (
      logForDebugging(`Failed to read ${t} directly from descriptor ${e}: ${l(r)}`, {
        level: "error",
      }),
      null
    );
  }
}
async function k({
  envVar: e,
  wellKnownPath: t,
  readPath: r = t,
  label: o,
  fileLabel: s = o,
  getCached: p,
  setCached: c,
  credentials: E,
  skipInReviewOrigin: m = !1,
}) {
  let g = p();
  if (g !== void 0) return g;
  let f = process.env[e];
  if (!f) {
    let d = await v(r, s, E);
    return O(p, c, d);
  }
  let i = parseInt(f, 10);
  if (Number.isNaN(i))
    return (
      logForDebugging(`${e} must be a valid file descriptor number, got: ${f}`, {
        level: "error",
      }),
      c(null),
      null
    );
  let u = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
    S = () => {
      (delete process.env[e], aHt(e));
    };
  if (isSocketFd(i)) {
    if (!u) {
      let _ = await v(r, s, E);
      return O(p, c, _);
    }
    let d = T(i, o);
    if ((S(), c(d), d)) await w(t, d, s, E, { skipInReviewOrigin: m });
    return d;
  }
  try {
    let d = `/dev/fd/${i}`,
      _ = readBoundedSync(d, { maxBytes: MAX_CREDENTIAL_BYTES }).trim();
    if (!_)
      return (
        logForDebugging(`File descriptor contained empty ${o}`, { level: "error" }),
        c(null),
        null
      );
    return (
      logForDebugging(`Successfully read ${o} from file descriptor ${i}`),
      c(_),
      await w(t, _, s, E, { skipInReviewOrigin: m }),
      _
    );
  } catch (d) {
    logForDebugging(`Failed to read ${o} from file descriptor ${i}: ${l(d)}`, {
      level: "error",
    });
    let _ = await v(r, s, E);
    if (_) return O(p, c, _);
    let R = A(d);
    if ((R === "EACCES" || R === "EPERM") && u) {
      let C = T(i, o);
      if ((S(), C))
        return (c(C), await w(t, C, s, E, { skipInReviewOrigin: m }), C);
    }
    return O(p, c, null);
  }
}
function O(e, t, r) {
  let o = e();
  if (o !== void 0) return o;
  return (t(r), r);
}
function isBgAuthSnapshotPending() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}
async function waitForBgAuthSnapshot({ attempts: e = 10, delayMs: t = 100 } = {}) {
  for (let r = 0; r < e && isBgAuthSnapshotPending(); r++) (await sleep(t), I());
  return !isBgAuthSnapshotPending();
}
function I() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e) return;
  let t;
  try {
    t = b(e);
  } catch (r) {
    if (U(r)) {
      logForDebugging(`bg auth snapshot busy, will retry on the next read: ${l(r)}`, {
        level: "warn",
      });
      return;
    }
    if (!W(r))
      logForDebugging(`Failed to consume bg auth snapshot: ${l(r)}`, { level: "warn" });
  }
  if ((delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, t === void 0)) return;
  try {
    unlink(e).catch(() => {});
    let r = JSON.parse(t);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      (lHt(r.gatewayToken), logForDebugging("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      logForDebugging("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if (
      (N0(r.accessToken),
      yje(!0),
      Array.isArray(r.scopes) && r.scopes.length > 0)
    )
      Sje(r.scopes);
    if (r.subscriptionType)
      process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier)
      process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    logForDebugging("Consumed bg auth snapshot from sockDir");
  } catch (r) {
    if (!W(r))
      logForDebugging(`Failed to consume bg auth snapshot: ${l(r)}`, { level: "warn" });
  }
}
async function consumeBgAuthSnapshotAsync(e) {
  let t = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!t) return;
  let r = await e.readHandoffCredential(t, {
    symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== t) return;
  switch (r.state) {
    case "absent":
      a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      return;
    case "read-failed":
      if (
        r.code !== "EBUSY" &&
        r.code !== "EPERM" &&
        !(r.code === "EACCES" && getCurrentPlatform() === "windows")
      )
        a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      logForDebugging(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
        level: "warn",
      });
      return;
    case "present":
      break;
  }
  (a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"),
    e.discardSpentCredentialFile(t).catch(() => {}));
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      (lHt(o.gatewayToken), logForDebugging("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      logForDebugging("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if (
      (N0(o.accessToken),
      yje(!0),
      Array.isArray(o.scopes) && o.scopes.length > 0)
    )
      Sje(o.scopes);
    if (o.subscriptionType)
      a.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier)
      a.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    logForDebugging("Consumed bg auth snapshot from sockDir");
  } catch (o) {
    logForDebugging(`Failed to consume bg auth snapshot: ${l(o)}`, { level: "warn" });
  }
}
function hasCredentialDescriptor(e) {
  return (process.env[e]?.trim() ?? "") !== "" || cLn(e);
}
function getOAuthToken() {
  return (
    I(),
    D({
      envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
      wellKnownPath: OAUTH_TOKEN_WELL_KNOWN_PATH,
      label: "OAuth token",
      getCached: uZ,
      setCached: N0,
      skipInReviewOrigin: !0,
    })
  );
}
async function getOAuthTokenWithBgSnapshot(e) {
  return (await consumeBgAuthSnapshotAsync(e), getOAuthTokenAsync(e));
}
async function getOAuthTokenAsync(e) {
  return k({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: OAUTH_TOKEN_WELL_KNOWN_PATH,
    label: "OAuth token",
    getCached: uZ,
    setCached: N0,
    credentials: e,
    skipInReviewOrigin: !0,
  });
}
function getGatewayToken() {
  let e = aYt();
  if (e !== void 0) return e;
  I();
  let t = aYt();
  if (t !== void 0) return t;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = a.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = r ? parseInt(r, 10) : Number.NaN,
    s =
      Number.isNaN(o) ||
      a.CLAUDE_CODE_REMOTE ||
      typeof process.send === "function" ||
      !isSocketFd(o)
        ? null
        : T(o, "gateway token");
  return (
    lHt(s),
    delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    s
  );
}
function getApiKey() {
  return D({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: API_KEY_WELL_KNOWN_PATH,
    label: "API key",
    getCached: sYt,
    setCached: iYt,
  });
}
async function getApiKeyAsync(e) {
  return k({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: API_KEY_WELL_KNOWN_PATH,
    label: "API key",
    getCached: sYt,
    setCached: iYt,
    credentials: e,
  });
}
function U(e) {
  let t = A(e);
  return (
    t === "EBUSY" || t === "EPERM" || (t === "EACCES" && getCurrentPlatform() === "windows")
  );
}
function b(e) {
  let t = () =>
    readBoundedSync(e, {
      maxBytes: MAX_CREDENTIAL_BYTES,
      symlinkAtPath: a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST
        ? "follow"
        : "refuse",
      regularFileOnly: !0,
    });
  try {
    return t();
  } catch (r) {
    if (U(r)) return t();
    throw r;
  }
}
function x() {
  return D({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH,
    label: "token",
    fileLabel: "session ingress token",
    getCached: _je,
    setCached: mae,
    skipInReviewOrigin: !0,
  });
}
async function getSessionIngressTokenAsync(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await k({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH,
    label: "token",
    fileLabel: "session ingress token",
    getCached: _je,
    setCached: mae,
    credentials: e,
    skipInReviewOrigin: !0,
  });
}
function getSessionAccessToken() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return x();
}
function getSessionAuthHeaders() {
  let e = getSessionAccessToken();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let t = { Cookie: `sessionKey=${e}` },
      r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) t["X-Organization-Uuid"] = r;
    return t;
  }
  return buildBearerAuthHeader(e);
}
function buildBearerAuthHeader(e) {
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function setSessionAccessToken(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export {
  isReviewOriginSession,
  OAUTH_TOKEN_WELL_KNOWN_PATH,
  API_KEY_WELL_KNOWN_PATH,
  SESSION_INGRESS_TOKEN_WELL_KNOWN_PATH,
  MAX_CREDENTIAL_BYTES,
  readWellKnownTokenFile,
  isBgAuthSnapshotPending,
  waitForBgAuthSnapshot,
  consumeBgAuthSnapshotAsync,
  hasCredentialDescriptor,
  getOAuthToken,
  getOAuthTokenWithBgSnapshot,
  getOAuthTokenAsync,
  getGatewayToken,
  getApiKey,
  getApiKeyAsync,
  getSessionIngressTokenAsync,
  getSessionAccessToken,
  getSessionAuthHeaders,
  buildBearerAuthHeader,
  setSessionAccessToken,
};

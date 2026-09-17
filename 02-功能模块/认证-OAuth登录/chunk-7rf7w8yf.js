// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
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
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Lge, Nar, z5t } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Aet } from "../../01-核心基础设施/共享小工具-未细化/chunk-eganxf2z.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
function $6() {
  return a.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
import { mkdirSync as H, writeFileSync as N } from "fs";
import { unlink as L } from "fs/promises";
var y = "/home/claude/.claude/remote",
  bBe = `${y}/.oauth_token`,
  O5t = `${y}/.api_key`,
  Rq = `${y}/.session_ingress_token`,
  AQ = Aet;
function F(e, t, r, { skipInReviewOrigin: o = !1 } = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (o && $6()) {
    n(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    (H(y, { recursive: !0, mode: 448 }),
      N(e, t, { encoding: "utf8", mode: 384 }),
      n(`Persisted ${r} to ${e} for subprocess access`));
  } catch (s) {
    n(`Failed to persist ${r} to disk (non-fatal): ${l(s)}`, {
      level: "error",
    });
  }
}
function h(e, t) {
  return wBe(e, t).token;
}
function wBe(e, t) {
  try {
    let r = Lge(e, { maxBytes: AQ, regularFileOnly: !0 }).trim();
    if (!r) return { token: null, miss: "empty" };
    return (n(`Read ${t} from well-known file ${e}`), { token: r });
  } catch (r) {
    if (W(r)) return { token: null, miss: "enoent" };
    return (
      n(`Failed to read ${t} from ${e}: ${l(r)}`, { level: "debug" }),
      { token: null, miss: A(r) === "EACCES" ? "eacces" : "other" }
    );
  }
}
async function w(e, t, r, o, { skipInReviewOrigin: s = !1 } = {}) {
  if (!a.CLAUDE_CODE_REMOTE) return;
  if (s && $6()) {
    n(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let p = await o.writeHandoffCredential(e, t);
  if (p.state === "written") {
    n(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  n(
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
      return (n(`Read ${t} from well-known file ${e}`), s);
    }
    case "absent":
      return null;
    case "read-failed":
      return (
        n(`Failed to read ${t} from ${e}: ${o.code ?? "unknown error"}`, {
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
      n(`${e} must be a valid file descriptor number, got: ${g}`, {
        level: "error",
      }),
      c(null),
      null
    );
  if (z5t(f)) {
    let i = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
      u = i ? T(f, o) : h(r, s);
    if (i) (delete process.env[e], aHt(e));
    if ((c(u), u && i)) F(t, u, s, { skipInReviewOrigin: E });
    return u;
  }
  try {
    let i = `/dev/fd/${f}`,
      u = Lge(i, { maxBytes: AQ }).trim();
    if (!u)
      return (
        n(`File descriptor contained empty ${o}`, { level: "error" }),
        c(null),
        null
      );
    return (
      n(`Successfully read ${o} from file descriptor ${f}`),
      c(u),
      F(t, u, s, { skipInReviewOrigin: E }),
      u
    );
  } catch (i) {
    n(`Failed to read ${o} from file descriptor ${f}: ${l(i)}`, {
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
    n(
      `Reading ${t} from inherited descriptor ${e} (until newline or end-of-stream)`,
    );
    let r = Nar(e, { maxBytes: AQ }).trim();
    if (!r)
      return (
        n(`File descriptor ${e} contained empty ${t}`, { level: "error" }),
        null
      );
    return (
      n(`Successfully read ${t} directly from inherited descriptor ${e}`),
      r
    );
  } catch (r) {
    return (
      n(`Failed to read ${t} directly from descriptor ${e}: ${l(r)}`, {
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
      n(`${e} must be a valid file descriptor number, got: ${f}`, {
        level: "error",
      }),
      c(null),
      null
    );
  let u = !a.CLAUDE_CODE_REMOTE && typeof process.send !== "function",
    S = () => {
      (delete process.env[e], aHt(e));
    };
  if (z5t(i)) {
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
      _ = Lge(d, { maxBytes: AQ }).trim();
    if (!_)
      return (
        n(`File descriptor contained empty ${o}`, { level: "error" }),
        c(null),
        null
      );
    return (
      n(`Successfully read ${o} from file descriptor ${i}`),
      c(_),
      await w(t, _, s, E, { skipInReviewOrigin: m }),
      _
    );
  } catch (d) {
    n(`Failed to read ${o} from file descriptor ${i}: ${l(d)}`, {
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
function Zvt() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH);
}
async function aar({ attempts: e = 10, delayMs: t = 100 } = {}) {
  for (let r = 0; r < e && Zvt(); r++) (await Z(t), I());
  return !Zvt();
}
function I() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e) return;
  let t;
  try {
    t = b(e);
  } catch (r) {
    if (U(r)) {
      n(`bg auth snapshot busy, will retry on the next read: ${l(r)}`, {
        level: "warn",
      });
      return;
    }
    if (!W(r))
      n(`Failed to consume bg auth snapshot: ${l(r)}`, { level: "warn" });
  }
  if ((delete process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH, t === void 0)) return;
  try {
    L(e).catch(() => {});
    let r = JSON.parse(t);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      (lHt(r.gatewayToken), n("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      n("bg auth snapshot missing accessToken", { level: "warn" });
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
    n("Consumed bg auth snapshot from sockDir");
  } catch (r) {
    if (!W(r))
      n(`Failed to consume bg auth snapshot: ${l(r)}`, { level: "warn" });
  }
}
async function sxn(e) {
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
        !(r.code === "EACCES" && P() === "windows")
      )
        a.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH");
      n(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, {
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
      (lHt(o.gatewayToken), n("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      n("bg auth snapshot missing accessToken", { level: "warn" });
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
    n("Consumed bg auth snapshot from sockDir");
  } catch (o) {
    n(`Failed to consume bg auth snapshot: ${l(o)}`, { level: "warn" });
  }
}
function IU(e) {
  return (process.env[e]?.trim() ?? "") !== "" || cLn(e);
}
function gx() {
  return (
    I(),
    D({
      envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
      wellKnownPath: bBe,
      label: "OAuth token",
      getCached: uZ,
      setCached: N0,
      skipInReviewOrigin: !0,
    })
  );
}
async function D5t(e) {
  return (await sxn(e), ixn(e));
}
async function ixn(e) {
  return k({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: bBe,
    label: "OAuth token",
    getCached: uZ,
    setCached: N0,
    credentials: e,
    skipInReviewOrigin: !0,
  });
}
function TBe() {
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
      !z5t(o)
        ? null
        : T(o, "gateway token");
  return (
    lHt(s),
    delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    s
  );
}
function U6() {
  return D({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: O5t,
    label: "API key",
    getCached: sYt,
    setCached: iYt,
  });
}
async function lar(e) {
  return k({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: O5t,
    label: "API key",
    getCached: sYt,
    setCached: iYt,
    credentials: e,
  });
}
function U(e) {
  let t = A(e);
  return (
    t === "EBUSY" || t === "EPERM" || (t === "EACCES" && P() === "windows")
  );
}
function b(e) {
  let t = () =>
    Lge(e, {
      maxBytes: AQ,
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
    wellKnownPath: Rq,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Rq,
    label: "token",
    fileLabel: "session ingress token",
    getCached: _je,
    setCached: mae,
    skipInReviewOrigin: !0,
  });
}
async function car(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await k({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: Rq,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Rq,
    label: "token",
    fileLabel: "session ingress token",
    getCached: _je,
    setCached: mae,
    credentials: e,
    skipInReviewOrigin: !0,
  });
}
function Gi() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return x();
}
function ZD() {
  let e = Gi();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let t = { Cookie: `sessionKey=${e}` },
      r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) t["X-Organization-Uuid"] = r;
    return t;
  }
  return axn(e);
}
function axn(e) {
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function eRt(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export {
  $6,
  bBe,
  O5t,
  Rq,
  AQ,
  wBe,
  Zvt,
  aar,
  sxn,
  IU,
  gx,
  D5t,
  ixn,
  TBe,
  U6,
  lar,
  car,
  Gi,
  ZD,
  axn,
  eRt,
};

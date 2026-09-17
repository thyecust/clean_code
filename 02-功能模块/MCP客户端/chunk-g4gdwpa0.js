// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, Tc, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { oe } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { logFeatureOk as y, logFeatureBad as f, logFeatureSad as g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dy } from "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { logMCPDebug as J } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { jt, rS, Jse, UR } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import { U5 } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { hc, getSecureStorage as yn } from "../认证-OAuth登录/chunk-y7b7kf5n.js";
import { cq, la, i0, pA } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  gmt,
  k8n,
  Ws,
  AE,
  pMe,
  I8n,
  sgn,
  ign,
  lWt,
  gT,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Jn } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { s, T, v, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
function De(e) {
  if (e.kind !== "resolved" || !Ws()) return;
  let t = gT(),
    r = t.lastResolvedAccountToken;
  if (((t.lastResolvedAccountToken = e.token), r === void 0 || r === e.token))
    return;
  ((jt().identityEpoch += 1), Q3e(), Je());
}
function Je() {
  let e = jt();
  if (!e.identityTrippedHandler) {
    e.identityTripUnowned = !0;
    return;
  }
  queueMicrotask(() => {
    let t = jt().identityTrippedHandler;
    if (!t) {
      jt().identityTripUnowned = !0;
      return;
    }
    try {
      t();
    } catch (r) {
      n(`MCP identity-change handler failed: ${l(r)}`, { level: "warn" });
    }
  });
}
function Act(e) {
  let t = jt();
  return (
    (t.identityTrippedHandler = e),
    () => {
      if (t.identityTrippedHandler === e) t.identityTrippedHandler = null;
    }
  );
}
function Cct() {
  let e = jt(),
    t = e.identityTripUnowned;
  return ((e.identityTripUnowned = !1), t);
}
function ue() {
  if (!Ws()) return;
  De(ign());
}
function y7() {
  let e = ign();
  return (De(e), e);
}
function ir() {
  return (ue(), jt().identityEpoch);
}
function J3e() {
  let e = jt();
  if (!Ws()) return e.identityEpoch;
  return ((e.identityEpoch += 1), e.identityEpoch);
}
var Qe = "baseline:rearmed";
function z2n() {
  if (!Ws()) return;
  (J3e(), (gT().lastResolvedAccountToken = Qe));
}
function mE(e) {
  return (ue(), e === jt().identityEpoch);
}
function Q3e() {
  let e = jt();
  if (e.identityChangedThisProcess) return;
  ((e.identityChangedThisProcess = !0),
    g("mcp_discovery_cache", "identity_changed"));
}
function Ee() {
  return (ue(), jt().identityChangedThisProcess);
}
var Ne = 4096,
  et = 1024,
  tt = new j(() => new ke());
function Pu() {
  return tt.of(B().host);
}
function FIe(e, t) {
  if (!e || !t) return;
  try {
    return btoa(`${e}:${t}`);
  } catch {
    return;
  }
}
function rt() {
  return I8n() !== void 0;
}
class ke {
  seen = new Set();
  off = !1;
  incomplete = !1;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let t = oe(e, et);
    if (this.seen.has(t)) return;
    if (this.seen.size >= Ne) {
      ((this.incomplete = !0), (this.overflowNotice ??= !0));
      return;
    }
    this.seen.add(t);
  }
  recordingOff() {
    if (!this.off && rt())
      ((this.off = !0),
        this.seen.clear(),
        (this.incomplete = !1),
        (this.overflowNotice = null));
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === !0) return ((this.overflowNotice = !1), !0);
    return !1;
  }
  snapshot() {
    return (
      this.recordingOff(),
      { atoms: [...this.seen], complete: !this.incomplete }
    );
  }
}
import { createHash as pe } from "crypto";
import { basename as dt, join as U } from "path";
import {
  createCipheriv as nt,
  createDecipheriv as it,
  createHash as ot,
  randomBytes as Me,
} from "crypto";
var Pe = 32,
  Q = 12,
  H = 16,
  z = "v2:",
  Re = Buffer.from("mcp-dc", "utf8"),
  st = /^[A-Za-z0-9+/]{43}=$/;
function xe(e) {
  if (typeof e !== "string" || !st.test(e)) return;
  let t = Buffer.from(e, "base64");
  return t.length === Pe ? t : void 0;
}
async function N() {
  let e = await cq();
  if (e === hc) return;
  let t = _e(e?.mcpDiscoveryCacheKey);
  if (t) return t;
  let r = Me(Pe).toString("base64"),
    i = !1;
  try {
    i = (
      await yn().mutate((p) =>
        xe(p.mcpDiscoveryCacheKey) ? p : { ...p, mcpDiscoveryCacheKey: r },
      )
    ).success;
  } catch {
    i = !1;
  }
  if (!i) return;
  let o = await cq();
  if (o === hc) return;
  return _e(o?.mcpDiscoveryCacheKey);
}
function _e(e) {
  return xe(e);
}
function Ae(e, t, r) {
  if (!Number.isInteger(e) || e < 0 || e > 255)
    throw Error("discovery-cache seal: schema version must fit one byte");
  let i = [t, r].map((p) => Buffer.from(p, "utf8")),
    o = Buffer.allocUnsafe(
      Re.length + 1 + i.reduce((p, u) => p + 4 + u.length, 0),
    ),
    d = Re.copy(o, 0);
  d = o.writeUInt8(e, d);
  for (let p of i) ((d = o.writeUInt32BE(p.length, d)), (d += p.copy(o, d)));
  return o;
}
function Te(e, t) {
  let r = Me(Q),
    i = nt("aes-256-gcm", e.key, r, { authTagLength: H });
  i.setAAD(e.aad);
  let o = Buffer.concat([i.update(t, "utf8"), i.final()]),
    d = i.getAuthTag();
  return (
    z + ee(e.cacheKey) + ":" + Buffer.concat([r, o, d]).toString("base64url")
  );
}
function ee(e) {
  return ot("sha256")
    .update(e, "utf8")
    .digest()
    .subarray(0, Oe)
    .toString("base64url");
}
var Oe = 16,
  Ie = Math.ceil((Oe * 4) / 3),
  ct = new RegExp(`^[A-Za-z0-9_-]{${Ie}}$`),
  at = /^[A-Za-z0-9_-]*$/;
function Le(e) {
  return Fe(e)?.digest;
}
function Fe(e) {
  if (!e.startsWith(z)) return;
  let t = z.length + Ie;
  if (e.length <= t || e[t] !== ":") return;
  let r = e.slice(z.length, t),
    i = e.slice(t + 1);
  if (!ct.test(r) || !at.test(i)) return;
  return { digest: r, body: i };
}
function fe(e, t) {
  if (!t.startsWith(z)) return { ok: !1, reason: "v1" };
  let r = Fe(t);
  if (!r) return { ok: !1, reason: "short" };
  if (r.digest !== ee(e.cacheKey)) return { ok: !1, reason: "header" };
  let i = Buffer.from(r.body, "base64url");
  if (i.length < Q + H) return { ok: !1, reason: "short" };
  let o = i.subarray(0, Q),
    d = i.subarray(i.length - H),
    p = i.subarray(Q, i.length - H);
  try {
    let u = it("aes-256-gcm", e.key, o, { authTagLength: H });
    return (
      u.setAuthTag(d),
      u.setAAD(e.aad),
      {
        ok: !0,
        plaintext: Buffer.concat([u.update(p), u.final()]).toString("utf8"),
      }
    );
  } catch {
    return { ok: !1, reason: "tag" };
  }
}
function vct(e) {
  let t = gT();
  ((t.accountResolver = e), (t.lastResolvedAccountToken = void 0));
}
function Rct(e) {
  gT().eraResolver = e;
}
function ut() {
  return gT().eraResolver();
}
function kct() {
  return gT().accountResolver !== void 0;
}
function xh(e) {
  switch (e.type) {
    case "stdio":
    case void 0:
    case "sdk":
    case "sse-ide":
    case "ws-ide":
      return !1;
    default:
      return !0;
  }
}
function $Ie(e, t) {
  return !mE(t) && xh(e);
}
function kLt(e, t) {
  return {
    name: e,
    type: "failed",
    config: t,
    error: gmt,
    errorCode: "IDENTITY_CHANGED",
  };
}
function xct(e) {
  return e.some((t) => xh(t.config));
}
function ft() {
  return y7().token;
}
var ye = 1,
  lt = 900,
  pt = 14400,
  yt = 604800,
  ht = 1;
function $e() {
  let e = a.MCP_DISCOVERY_CACHE_STRIKES;
  return e && e > 0 ? e : ht;
}
var gt = 384,
  He = 448,
  ne = m(() => {
    let e = import.meta
      .require("./mcpClientModule.4cyej0np.js")
      .mcpClientModule()
      .discoveryWireSchemas();
    return c({
      v: k(ye),
      serverName: s(),
      cacheKey: s(),
      savedAt: T(),
      toolsSavedAt: T().optional(),
      consecutiveRefreshFailures: T().int().nonnegative(),
      serverInfo: e.implementation.optional(),
      negotiatedEra: X(lWt).optional(),
      capabilities: e.serverCapabilities,
      tools: v(e.tool),
      commands: v(e.prompt),
      resources: v(e.resource),
      templates: v(e.resourceTemplate).optional(),
    });
  });
function vt() {
  let e = a.MCP_DISCOVERY_CACHE_TTL_S;
  return Math.min((e && e > 0 ? e : lt) * 1000, ze());
}
function ze() {
  let e = a.MCP_DISCOVERY_CACHE_MAX_STALE_S;
  return Math.min(e && e > 0 ? e : pt, yt) * 1000;
}
function S7(e) {
  return Ue(e) === void 0;
}
function mt(e) {
  return ie.some((t) => t.reason === e);
}
var ie = [
  {
    prop: "discoveryCache",
    reason: "opt-out",
    excludes: (e) => e === !1,
    normalize: (e) => (e === !1 ? !1 : void 0),
    valueDomain: [void 0, !1],
  },
  {
    prop: "headersHelper",
    reason: "headers-helper",
    excludes: (e) => Boolean(e),
    normalize: (e) => (e ? e : void 0),
    valueDomain: [void 0],
  },
];
function Ge(e) {
  let t = { ...e };
  for (let { prop: r, normalize: i } of ie) {
    if (!(r in t)) continue;
    let o = i(t[r]);
    if (o === void 0) delete t[r];
    else t[r] = o;
  }
  return t;
}
function wt(e) {
  let t = e;
  if (typeof t.url === "string" && U5(t.url)) return !0;
  if (t.headers && typeof t.headers === "object") {
    for (let r of Object.values(t.headers))
      if (typeof r === "string" && U5(r)) return !0;
  }
  return !1;
}
function Ue(e) {
  let t = pMe();
  if (t !== void 0) return t;
  if (Ee()) return "identity-changed";
  if (e.type !== "http" && e.type !== "sse") return "transport";
  if (rS(e) || Jse(e)) return "cli-owned";
  if (wt(e)) return "env-placeholder";
  if ((pA(e.url) && !i0(e)) || UR(e.url)) return "ambient-credential";
  let r = e;
  for (let { prop: i, reason: o, excludes: d } of ie) if (d(r[i])) return o;
  return;
}
function I() {
  return U(be(), "mcp-discovery-cache");
}
async function St(e, t) {
  if (!S7(t)) return !1;
  return (await Ve(e, t)).kind !== "degenerate";
}
async function Ve(e, t) {
  if (t.type !== "http" && t.type !== "sse") return { kind: "none" };
  let r = await cq();
  if (r === hc) return { kind: "degenerate" };
  let i = r?.mcpOAuth?.[la(e, t)];
  if (!i) return { kind: "none" };
  let o = i.refreshToken;
  if (!o) return { kind: "degenerate" };
  return {
    kind: "resolved",
    hash: pe("sha256").update(o).digest("hex").slice(0, 16),
  };
}
async function Dt(e, t) {
  if (t.type !== "http" && t.type !== "sse") return "grant:none";
  let r = await Ve(e, t);
  switch (r.kind) {
    case "none":
      return "grant:none";
    case "resolved":
      return `grant:${r.hash}`;
    case "degenerate":
      return;
  }
}
async function kt(e, t) {
  let r = y7();
  if (r.kind === "unwired" || r.kind === "incomplete") return;
  let i = await Dt(e, t);
  if (i === void 0) return;
  let o = [r.token];
  if (t.type === "http" || t.type === "sse") o.push(i);
  return {
    fingerprint: pe("sha256").update(o.join("\x00")).digest("hex"),
    grantToken: i,
  };
}
function he(e, t, r) {
  let i = [
    e,
    t,
    `era:${r}`,
    {
      ISSUES_EXPLAINER:
        "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.263",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-06T01:08:56Z",
      GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
      HOOKS_WORKER_URL:
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "darwin",
    }.VERSION ?? "unknown",
  ].join("\x00");
  return `${pe("sha256").update(i).digest("hex").slice(0, 32)}.json`;
}
var Ct = /^[0-9a-f]{16}\0/;
function gE(e) {
  let t = `${e}-`,
    r = gT().filePathMemo;
  for (let i of r.keys()) {
    if (!i.startsWith(t)) continue;
    if (Ct.test(i.slice(t.length))) r.delete(i);
  }
}
function x(e, t) {
  return Jn(e, Ge(t));
}
async function bt(e, t) {
  return (await _(e, t))?.path;
}
async function Qx(e, t) {
  if (!Ws()) return;
  try {
    return (await _(e, t))?.legToken;
  } catch {
    return;
  }
}
async function _(e, t) {
  let r = x(e, t),
    i = ut(),
    o = ft(),
    d = `${r}\x00${o}\x00era:${i}`,
    p = gT().filePathMemo,
    u = p.get(d);
  if (u) return u;
  let h = (async () => {
    let S = await kt(e, t);
    if (S === void 0) return;
    return {
      path: U(I(), he(r, S.fingerprint, i)),
      grantToken: S.grantToken,
      fingerprint: S.fingerprint,
      cacheKey: r,
      aad: Ae(ye, r, S.fingerprint),
      legToken: `${S.grantToken}\x00era:${i}\x00${o}`,
    };
  })();
  p.set(d, h);
  let w = () => {
    if (p.get(d) === h) p.delete(d);
  };
  return (
    h.then((S) => {
      if (S === void 0) w();
    }, w),
    h
  );
}
function L() {
  return gT().storage;
}
function R() {
  return gT().storageV5;
}
function ge(e) {
  return Ce.userConfigDir("mcp-discovery-cache", [dt(e)]);
}
var Rt = { namespace: "userConfigDir", dir: "mcp-discovery-cache" },
  F = 8388608;
function ve(e) {
  return Math.max(e.savedAt, e.toolsSavedAt ?? 0);
}
class V extends Error {
  entryPath;
  reason;
  constructor(e, t, r) {
    super(r);
    this.entryPath = e;
    this.reason = t;
    this.name = "RefusedDiscoveryEntryError";
  }
}
class me extends V {
  constructor(e) {
    super(e, "oversize", "discovery-cache: oversize entry");
    this.name = "OversizeDiscoveryEntryError";
  }
}
class te extends V {
  constructor(e) {
    super(e, "symlink", "discovery-cache: symlinked entry refused");
    this.name = "SymlinkedDiscoveryEntryError";
  }
}
class re extends V {
  constructor(e) {
    super(e, "non-regular", "discovery-cache: non-regular entry refused");
    this.name = "NonRegularDiscoveryEntryError";
  }
}
function se(e) {
  return e instanceof V;
}
async function ce(e, t) {
  let r = gT().readGateForTest;
  if (r) await r;
  if (t) return _t(t, e);
  try {
    if (dy === 0) {
      let o = await L().lstat(e);
      if (o === void 0) return;
      if (o.isSymbolicLink) throw new te(e);
      if (!o.isFile) throw new re(e);
    }
    let i;
    try {
      i = await L().readTail(e, F + 1, { noFollow: !0 });
    } catch (o) {
      let d = A(o);
      if (d === "ELOOP") throw new te(e);
      if (d === "ENXIO") throw new re(e);
      throw o;
    }
    if (i.length > F) throw new me(e);
    return i.toString("utf8");
  } catch (i) {
    if (W(i)) return;
    throw i;
  }
}
async function _t(e, t) {
  let r = ge(t),
    i = await e.read([{ key: r, offset: 0, length: F + 1 }], {
      symlinks: "refuse",
    });
  if (!i.ok) {
    let d = "cause" in i.error ? A(i.error.cause) : void 0;
    if (d === "ELOOP") throw new te(t);
    if (d === "ENXIO") throw new re(t);
    throw Error("discovery-cache: read failed", { cause: i.error });
  }
  let o = i.value.items[0];
  if (!o.found) return;
  if (o.totalBytes > F) throw new me(t);
  return Buffer.from(o.value).toString("utf8");
}
async function Mt(e, t, r) {
  if (r) {
    let o = await r.write(ge(e), t);
    if (!o.ok) throw Error("discovery-cache: write failed", { cause: o.error });
    return;
  }
  let i = L();
  (await i.mkdir(I(), He), await i.atomicWrite(e, t, gt));
}
async function Pt(e) {
  if (!e) return L().list(I());
  let t = [],
    r;
  do {
    let i = await e.listEntries(Rt, {
      skipKeyStats: !0,
      skipScopeStats: !0,
      ...(r !== void 0 && { cursor: r }),
    });
    if (!i.ok) throw Error("discovery-cache: list failed", { cause: i.error });
    for (let o of i.value.items)
      if (o.kind === "key" && o.key.namespace === "userConfigDir") {
        let d = o.key.relPath[0];
        if (d !== void 0 && o.key.relPath.length === 1) t.push(d);
      }
    r = i.value.cursor;
  } while (r);
  return t;
}
async function G(e, t) {
  if (t) {
    let r = await t.delete(ge(e));
    if (!r.ok)
      throw Error("discovery-cache: delete failed", { cause: r.error });
    return;
  }
  try {
    await L().delete(e);
  } catch (r) {
    if (!W(r)) throw r;
  }
}
async function Hct(e, t, r = Date.now()) {
  let i = Ue(t);
  if (i !== void 0 && !mt(i))
    return {
      kind: "miss",
      reason: i === "transport" ? "transport" : "disabled",
    };
  if (i !== void 0) {
    K();
    let C = Bt(e, t),
      M = Kt(C),
      de = gT().admissionPurgedKeySets;
    if (!de.has(M))
      (de.add(M),
        Ft(e, t, C).then((Ze) => {
          if (!Ze) de.delete(M);
        }));
    return (
      J(
        e,
        `discovery-cache: ${i} \u2014 purging this server's cache-key family, serving miss`,
      ),
      { kind: "miss", reason: "disabled" }
    );
  }
  let o;
  try {
    o = await _(e, t);
  } catch (C) {
    return (
      J(e, `discovery-cache: fingerprint failed: ${C}`),
      { kind: "miss", reason: "no-fingerprint" }
    );
  }
  if (o === void 0) return { kind: "miss", reason: "no-fingerprint" };
  let d = o.path,
    p = () => {
      P(d, e, void 0).catch(() => {});
    },
    u = () => (
      p(),
      f("mcp_discovery_cache", "corrupt_entry"),
      { kind: "miss", reason: "corrupt" }
    ),
    h;
  try {
    h = await ce(d, R());
  } catch (C) {
    if (se(C))
      return (J(e, `discovery-cache: ${C.reason} entry, deleting`), u());
    return (
      J(e, `discovery-cache: read failed: ${C}`),
      { kind: "miss", reason: "absent" }
    );
  }
  if (h === void 0) return { kind: "miss", reason: "absent" };
  let w = await We(h, o, e, () => P(d, e, void 0));
  if (w.miss) {
    if (w.miss === "unsealed")
      if (w.cause === "v1") g("mcp_discovery_cache", "unsealed_v1");
      else f("mcp_discovery_cache", `unsealed_${w.cause}`);
    return { kind: "miss", reason: w.miss };
  }
  let S = ne().safeParse(xt(w.plaintext, !1));
  if (!S.success)
    return (J(e, "discovery-cache: corrupt entry, deleting"), u());
  let D = S.data;
  if (D.cacheKey !== x(e, t))
    return (
      J(e, "discovery-cache: entry keyed for another server, deleting"),
      u()
    );
  if (D.consecutiveRefreshFailures >= $e())
    return (p(), { kind: "miss", reason: "strike-threshold" });
  let b = ze();
  if (ve(D) - r > b) return (p(), { kind: "miss", reason: "expired" });
  let E = Math.max(0, r - D.savedAt);
  if (E >= b) return (p(), { kind: "miss", reason: "expired" });
  if (E < vt() && !(D.capabilities.tools && D.tools.length === 0))
    return { kind: "fresh", entry: D, ageMs: E };
  return { kind: "stale", entry: D, ageMs: E };
}
function Y(e, t, r) {
  return gT()
    .serializeWrite(e, r)
    .catch((i) => {
      J(t, `discovery-cache: write op failed: ${i}`);
    });
}
function q(e) {
  return gT().deleteGenerationByCacheKey.get(e) ?? 0;
}
function ae(e) {
  gT().deleteGenerationByCacheKey.set(e, q(e) + 1);
}
var Ye = 8;
async function At(e, t) {
  if (t.type !== "http" && t.type !== "sse") return [];
  let r = await cq();
  if (r === hc) return hc;
  let i = la(e, t),
    o = r?.mcpOAuth?.[i],
    d = [];
  if (typeof o?.accessToken === "string") d.push(o.accessToken);
  if (typeof o?.refreshToken === "string") d.push(o.refreshToken);
  if (typeof o?.clientSecret === "string") d.push(o.clientSecret);
  let p = r?.mcpOAuthClientConfig?.[i]?.clientSecret;
  if (typeof p === "string") d.push(p);
  return d;
}
var le = /auth|token|key|secret|cookie|session|sig|pass|cred|bearer/i,
  Tt = /^\s*[A-Za-z][A-Za-z0-9!#$%&'*+.^_`|~-]*\s+(?=\S)/;
function je(e, t, r) {
  if (typeof t !== "string" || !le.test(e)) return;
  if ((r(t.trim()), r(t.replace(Tt, "").trim()), /^cookie$/i.test(e)))
    for (let i of t.split(";")) {
      let o = i.indexOf("=");
      r((o === -1 ? i : i.slice(o + 1)).trim());
    }
}
function ace(e, t) {
  let r = Pu();
  if (r.recordingOff()) return;
  let i = new Map();
  for (let [o, d] of Object.entries(e ?? {})) i.set(o.toLowerCase(), d);
  for (let [o, d] of Object.entries(t)) {
    if (i.get(o.toLowerCase()) === d) continue;
    je(o, d, (p) => {
      if (p.length >= Ye) r.record(p);
    });
  }
}
var Ot = 268435456;
function Be(e) {
  let t = [e],
    r = Tc(e).slice(1, -1);
  if (r !== e) t.push(r);
  try {
    let i = encodeURIComponent(e);
    if (i !== e) t.push(i);
  } catch {}
  return t;
}
function It(e, t, r = []) {
  let i = t,
    o = new Set(),
    d = (u) => {
      if (u !== void 0 && u.length >= Ye) o.add(u);
    };
  for (let [u, h] of Object.entries(i.headers ?? {})) je(u, h, d);
  try {
    let u = typeof i.url === "string" ? new URL(i.url) : void 0;
    for (let [h, w] of u?.searchParams.entries() ?? [])
      if (le.test(h)) for (let S of Be(w)) d(S);
    for (let h of u?.search.replace(/^\?/, "").split("&") ?? []) {
      let w = h.indexOf("=");
      if (w > 0 && le.test(h.slice(0, w))) d(h.slice(w + 1));
    }
    for (let h of u ? [u.password, u.username] : [])
      if (h) {
        d(h);
        try {
          d(decodeURIComponent(h));
        } catch {}
      }
  } catch {}
  for (let u of r) d(u);
  let p = Pu().snapshot();
  if (!p.complete) return "presented-log-incomplete";
  for (let u of p.atoms) d(u);
  if (o.size * e.length > Ot) return "scan-budget";
  for (let u of o) for (let h of Be(u)) if (e.includes(h)) return "material";
  return;
}
function we(e, t) {
  return { key: e, cacheKey: t.cacheKey, aad: t.aad };
}
async function We(e, t, r, i) {
  let o = await N();
  if (o === void 0)
    return (
      J(
        r,
        "Discovery cache: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process",
      ),
      sgn(),
      { miss: "key-unavailable" }
    );
  let d = fe(we(o, t), e);
  if (d.ok) return { plaintext: d.plaintext };
  J(r, `Discovery cache: entry did not open (${d.reason}) \u2014 discarded`);
  try {
    await i();
  } catch (p) {
    J(r, `discovery-cache: reap after failed open skipped ${p}`);
  }
  return { miss: "unsealed", cause: d.reason };
}
function O({ verdict: e, code: t }) {
  if (e === "written") y("mcp_discovery_cache");
  else if (e === "terminal") f("mcp_discovery_cache", t);
  else g("mcp_discovery_cache", t);
  return e;
}
async function Se(e) {
  let {
    path: t,
    serverName: r,
    config: i,
    cacheKey: o,
    entry: d,
    context: p,
    label: u,
  } = e;
  if (pMe() !== void 0)
    return (
      J(
        r,
        `Discovery cache ${u} refused: the cache turned off since this round started`,
      ),
      { verdict: "superseded", code: "disabled" }
    );
  if (q(o) !== e.capturedDeleteGeneration)
    return (
      J(
        r,
        `Discovery cache ${u} refused: entry deleted since this round started (tombstone)`,
      ),
      { verdict: "superseded", code: "tombstone" }
    );
  if (!mE(p.identityEpoch))
    return (
      J(
        r,
        `Discovery cache ${u} refused: identity changed since this round was fetched (stale epoch)`,
      ),
      { verdict: "superseded", code: "stale_epoch" }
    );
  let h = await N();
  if (h === void 0)
    return (
      sgn(),
      J(
        r,
        `Discovery cache ${u} refused: sealing key unavailable (secure storage unreadable) \u2014 cache off for this process`,
      ),
      { verdict: "superseded", code: "key_unavailable" }
    );
  let w;
  try {
    w = await At(r, i);
  } catch {
    w = hc;
  }
  if (w === hc)
    return (
      J(
        r,
        `Discovery cache ${u} refused: OAuth token store unreadable (cannot verify no secrets on disk)`,
      ),
      { verdict: "transient", code: "transient" }
    );
  let S;
  try {
    S = await _(r, i);
  } catch {
    return { verdict: "transient", code: "transient" };
  }
  if (S === void 0 || S.path !== t || S.legToken !== p.grantLeg)
    return (
      J(
        r,
        `Discovery cache ${u} refused: grant or era changed since this round was fetched (stale leg)`,
      ),
      { verdict: "superseded", code: "stale_grant" }
    );
  let D = ne().safeParse(d);
  if (!D.success)
    return (
      J(r, `Discovery cache ${u} refused: entry failed schema validation`),
      { verdict: "terminal", code: "schema" }
    );
  let b = Tc(D.data);
  if (Buffer.byteLength(b, "utf8") > F)
    return (
      J(
        r,
        `Discovery cache ${u} refused: serialized entry exceeds DISCOVERY_ENTRY_MAX_BYTES`,
      ),
      { verdict: "terminal", code: "oversize" }
    );
  if (pMe() !== void 0)
    return (
      J(
        r,
        `Discovery cache ${u} refused: the cache turned off since this round started`,
      ),
      { verdict: "superseded", code: "disabled" }
    );
  let E = It(b, i, w);
  if (E !== void 0) {
    if (Pu().takeOverflowNotice())
      J(
        r,
        "Discovery cache: presented-credential log is full \u2014 cache writes are refused for the rest of this process",
      );
    if (E === "scan-budget")
      return (
        J(
          r,
          `Discovery cache ${u} refused: secret-material scan exceeds its work budget (materials \xD7 entry size) \u2014 not scanned, not written`,
        ),
        { verdict: "terminal", code: "scan_budget" }
      );
    if (E === "presented-log-incomplete")
      return (
        J(
          r,
          `Discovery cache ${u} refused: presented-credential log incomplete (cannot verify no secrets on disk)`,
        ),
        { verdict: "terminal", code: "presented_log_incomplete" }
      );
    return (
      J(
        r,
        `Discovery cache ${u} refused: entry would carry presented secret material`,
      ),
      { verdict: "terminal", code: "secret_material" }
    );
  }
  let C = Te(we(h, S), b);
  if (Buffer.byteLength(C, "utf8") > F)
    return (
      J(
        r,
        `Discovery cache ${u} refused: sealed entry exceeds DISCOVERY_ENTRY_MAX_BYTES`,
      ),
      { verdict: "terminal", code: "oversize" }
    );
  try {
    await Mt(t, C, R());
  } catch (M) {
    return (
      J(r, `Discovery cache ${u} refused: disk write failed (${l(M)})`),
      { verdict: "transient", code: "transient" }
    );
  }
  return { verdict: "written", code: "written" };
}
async function P(e, t, r) {
  if (r !== void 0) ae(r);
  await Y(e, t, () => G(e, R()));
}
async function Lt(e, t) {
  await Promise.race([
    e.then(
      () => {},
      () => {},
    ),
    Z(t, void 0, { unref: !0 }),
  ]);
}
async function i2(e, t = 1500) {
  (K(), await Lt(e, t));
}
function K() {
  if (!AE()) return;
  let e = gT();
  if (e.flushCleanup) return;
  e.flushCleanup = Et(() => e.drain(k8n));
}
async function Ict(e, t, r, i) {
  let o = i.now ?? Date.now(),
    d = x(e, t),
    p = q(d);
  if (!mE(i.identityEpoch)) return "superseded";
  if (i.grantLeg === void 0) return "superseded";
  if (!S7(t)) return "superseded";
  K();
  let u;
  try {
    u = await _(e, t);
  } catch {
    return O({ verdict: "transient", code: "transient" });
  }
  if (u === void 0) return "superseded";
  if (u.legToken !== i.grantLeg)
    return (
      J(
        e,
        "Discovery cache write refused: grant changed since this round was fetched (stale grant)",
      ),
      O({ verdict: "superseded", code: "stale_grant" })
    );
  let h = u.path,
    w = {
      v: ye,
      serverName: e,
      cacheKey: d,
      savedAt: o,
      consecutiveRefreshFailures: 0,
      ...(r.serverInfo && { serverInfo: r.serverInfo }),
      ...(r.negotiatedEra !== void 0 && { negotiatedEra: r.negotiatedEra }),
      capabilities: r.capabilities,
      tools: r.tools,
      commands: r.commands,
      resources: r.resources,
      templates: r.templates,
    },
    S = h,
    D;
  return (
    await Y(S, e, async () => {
      if (!(await St(e, t))) return;
      let b;
      try {
        b = await ce(S, R());
      } catch (E) {
        if (!se(E)) {
          (J(
            e,
            `Discovery cache write deferred: existing entry unreadable (${l(E)})`,
          ),
            (D = { verdict: "transient", code: "transient" }));
          return;
        }
        b = void 0;
      }
      if (b !== void 0) {
        let E = await N(),
          C = E && u ? fe(we(E, u), b) : void 0,
          M = C?.ok ? ne().safeParse(xt(C.plaintext, !1)) : void 0;
        if (M?.success && ve(M.data) > o) {
          D = { verdict: "superseded", code: "fresher_on_disk" };
          return;
        }
      }
      D = await Se({
        path: S,
        serverName: e,
        config: t,
        cacheKey: d,
        entry: w,
        context: i,
        capturedDeleteGeneration: p,
        label: "write",
      });
    }),
    D ? O(D) : "superseded"
  );
}
async function Xe(e, t) {
  let r = e.path,
    i;
  try {
    i = await ce(r, R());
  } catch (p) {
    if (se(p)) {
      await G(r, R());
      return;
    }
    throw p;
  }
  if (i === void 0) return;
  let o = await We(i, e, t, () => G(r, R()));
  if (o.miss) return;
  let d = ne().safeParse(xt(o.plaintext, !1));
  if (!d.success) {
    await G(r, R());
    return;
  }
  return d.data;
}
async function Pct(e, t, r, i) {
  if (!mE(i.identityEpoch)) return;
  if (i.grantLeg === void 0) return;
  let o = x(e, t),
    d = q(o);
  if ((K(), !S7(t))) return;
  let p;
  try {
    p = await _(e, t);
  } catch {
    O({ verdict: "transient", code: "transient" });
    return;
  }
  if (p === void 0) return;
  if (p.legToken !== i.grantLeg) {
    (J(
      e,
      "Discovery cache tools merge refused: grant changed since this refresh was fetched (stale grant)",
    ),
      O({ verdict: "superseded", code: "stale_grant" }));
    return;
  }
  let u = p.path;
  await Y(u, e, async () => {
    let h = await Xe(p, e);
    if (!h) return;
    if (ve(h) > i.fetchedAt) {
      O({ verdict: "superseded", code: "fresher_on_disk" });
      return;
    }
    let w = {
      ...h,
      tools: r,
      ...(Number.isFinite(i.fetchedAt) &&
        i.fetchedAt > h.savedAt && { toolsSavedAt: i.fetchedAt }),
    };
    O(
      await Se({
        path: u,
        serverName: e,
        config: t,
        cacheKey: o,
        entry: w,
        context: i,
        capturedDeleteGeneration: d,
        label: "tools merge",
      }),
    );
  });
}
async function Z3e(e, t, r) {
  if (!mE(r.identityEpoch)) return;
  if (r.grantLeg === void 0) return;
  let i = x(e, t),
    o = q(i);
  if ((K(), !S7(t))) return;
  let d;
  try {
    d = await _(e, t);
  } catch {
    return;
  }
  if (d === void 0) return;
  if (d.legToken !== r.grantLeg) {
    J(
      e,
      "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)",
    );
    return;
  }
  let p = d.path;
  await Y(p, e, async () => {
    let u = await Xe(d, e);
    if (!u) return;
    if (!mE(r.identityEpoch)) {
      J(
        e,
        "Discovery cache refresh-failure strike refused: identity changed since this refresh was fetched (stale epoch)",
      );
      return;
    }
    let h;
    try {
      h = await _(e, t);
    } catch {
      return;
    }
    if (h === void 0 || h.path !== p || h.legToken !== r.grantLeg) {
      J(
        e,
        "Discovery cache refresh-failure strike refused: grant changed since this refresh was fetched (stale grant)",
      );
      return;
    }
    let w = {
      ...u,
      consecutiveRefreshFailures: u.consecutiveRefreshFailures + 1,
    };
    if (w.consecutiveRefreshFailures >= $e()) {
      (ae(i), await G(p, R()));
      return;
    }
    await Se({
      path: p,
      serverName: e,
      config: t,
      cacheKey: i,
      entry: w,
      context: r,
      capturedDeleteGeneration: o,
      label: "refresh-failure strike",
    });
  });
}
function Oct(e, t) {
  (async () => {
    let r = ir();
    await Z3e(e, t, { identityEpoch: r, grantLeg: await Qx(e, t) });
  })().catch((r) =>
    n(
      `discovery-cache: strike after failed lazy dial of "${e}" did not land: ${l(r)}`,
    ),
  );
}
async function qe(e, t) {
  for (let o of t) ae(o);
  let r = new Set([...t].map(ee)),
    i = await Pt(R());
  for (let o of i) {
    if (!o.endsWith(".json")) continue;
    let d = U(I(), o);
    try {
      let p;
      try {
        p = await ce(d, R());
      } catch (h) {
        if (se(h)) {
          await P(d, e, void 0);
          continue;
        }
        throw h;
      }
      if (p === void 0) continue;
      let u = Le(p);
      if (u === void 0) {
        await P(d, e, void 0);
        continue;
      }
      if (r.has(u)) await P(d, e, void 0);
    } catch (p) {
      J(e, `discovery-cache: purge scan skipped ${p}`);
    }
  }
}
async function Ke(e, t) {
  await qe(e, new Set([x(e, t)]));
}
function Ft(e, t, r) {
  let i = I(),
    o = !1;
  return Y(i, e, async () => {
    let d;
    try {
      d = (await _(e, t))?.fingerprint;
    } catch {
      d = void 0;
    }
    if (d === void 0) {
      (await qe(e, r), (o = !0));
      return;
    }
    let p = [];
    for (let u of r) {
      let h = u;
      for (let w of lWt) (p.push(P(U(i, he(u, d, w)), e, h)), (h = void 0));
    }
    (await Promise.all(p), (o = !0));
  }).then(() => o);
}
function Bt(e, t) {
  let r = Ge(t),
    i = ie.map(({ prop: p, normalize: u, valueDomain: h }) => {
      let w = new Set(h.map((D) => u(D))),
        S = r[p];
      if (S !== void 0) w.add(S);
      return { prop: p, states: [...w] };
    }),
    o = new Set(),
    d = (p, u) => {
      if (p === i.length) {
        o.add(Jn(e, u));
        return;
      }
      let { prop: h, states: w } = i[p];
      for (let S of w) {
        let D = { ...u };
        if (S === void 0) delete D[h];
        else D[h] = S;
        d(p + 1, D);
      }
    };
  return (d(0, { ...r }), o);
}
function Kt(e) {
  return [...e].sort().join(`
`);
}
async function UIe(e, t) {
  if (t.type !== "http" && t.type !== "sse") return;
  if (!AE()) return;
  (K(), ae(x(e, t)));
  try {
    let r = await _(e, t);
    if (r === void 0) {
      await Ke(e, t);
      return;
    }
    let i = x(e, t),
      o = I(),
      d = new Set(lWt.map((u) => U(o, he(i, r.fingerprint, u)))),
      p = [P(r.path, e, i)];
    for (let u of d) if (u !== r.path) p.push(P(u, e, void 0));
    (await Promise.all(p), await Ke(e, t));
  } catch (r) {
    J(e, `discovery-cache: delete failed: ${r}`);
  }
}
async function Dct(e, t) {
  let r;
  try {
    r = await bt(e, t);
  } catch {
    return async () => {};
  }
  if (r === void 0) return async () => {};
  try {
    return (
      await L().mkdir(I(), He),
      await Cs(r, {
        realpath: !1,
        retries: 0,
        stale: 60000,
        onCompromised: (i) =>
          J(
            e,
            `discovery-cache: refresh lock compromised, skipping refresh: ${i}`,
          ),
      })
    );
  } catch (i) {
    let o = i instanceof Error ? i.message : String(i);
    if (i?.code === "ELOCKED" || o.includes("already being held")) {
      J(e, "discovery-cache: refresh lock held elsewhere, skipping");
      return;
    }
    return (
      J(e, `discovery-cache: lock error, proceeding: ${o}`),
      async () => {}
    );
  }
}
export {
  Act,
  Cct,
  y7,
  ir,
  J3e,
  z2n,
  mE,
  Q3e,
  Pu,
  FIe,
  vct,
  Rct,
  kct,
  xh,
  $Ie,
  kLt,
  xct,
  S7,
  gE,
  Qx,
  Hct,
  ace,
  i2,
  Ict,
  Pct,
  Z3e,
  Oct,
  UIe,
  Dct,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie, Le } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { ALLOWED_OAUTH_BASE_URLS, getOauthConfig } from "./chunk-9g2q4bjq.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ra, l, Rt, FA } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { ou, wc, z, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Ckn } from "../上下文压缩-Compact/chunk-qbdgst52.js";
import { se, c, X, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
var rBe = /https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+/g;
function T(e) {
  return /^https?:\/\/[^\s"'<>\\\u2026\x00-\x1f]+$/.test(e);
}
var re = { ")": "(", "]": "[", "}": "{" };
function SQ(e) {
  while (e.length > 0) {
    let r = e.at(-1);
    if (".,;:!?".includes(r)) {
      e = e.slice(0, -1);
      continue;
    }
    let t = re[r];
    if (!t) break;
    let o = 0,
      s = 0;
    for (let i of e)
      if (i === t) o++;
      else if (i === r) s++;
    if (s > o) e = e.slice(0, -1);
    else break;
  }
  return e;
}
function Skn(e) {
  for (let r of e.matchAll(rBe)) return SQ(r[0]);
  return;
}
var te = "tengu_lively_beaver";
class b {
  reader = null;
  register(e) {
    let r = this.reader;
    return ((this.reader = e), r);
  }
}
var D = new b();
function dir(e) {
  return D.register(e);
}
function oBe() {
  let e = D.reader;
  if (!e) return !1;
  try {
    return e(te, !1) === !0;
  } catch {
    return !1;
  }
}
var PRe = "account_on_hold",
  sBe = "https://claude.ai/restricted",
  A =
    "Your account is on hold and can't use Claude Code. View details or appeal: ";
function bkn(e) {
  return `${A}${e}`;
}
function Tvt(e) {
  return `Your account is on hold and can't sign in to Claude Code. View details or appeal: ${e}`;
}
var $p = bkn(sBe);
function wkn(e) {
  if (!oBe() || !e.startsWith(A)) return !1;
  let r = e.slice(A.length);
  return T(r) && Yse(r) === r;
}
var M = 2048,
  oe =
    /^https:\/\/[a-z0-9.-]+\/[A-Za-z0-9/._~%-]*(?:\?[A-Za-z0-9._~%=&-]*)?(?<![.?])$/;
function ne(e) {
  try {
    return e === new URL(getOauthConfig().CLAUDE_AI_ORIGIN).origin;
  } catch {
    return !1;
  }
}
function Yse(e) {
  if (typeof e !== "string" || e.length > M) return sBe;
  let r;
  try {
    r = new URL(e);
  } catch {
    return sBe;
  }
  if (r.protocol !== "https:" || r.username || r.password || r.port || r.hash)
    return sBe;
  let t = r.hostname;
  return (t === "claude.ai" ||
    t.endsWith(".claude.ai") ||
    t === "anthropic.com" ||
    t.endsWith(".anthropic.com") ||
    ne(r.origin)) &&
    r.href.length <= M &&
    oe.test(r.href)
    ? r.href
    : sBe;
}
var ie = createLazyValue(() =>
  c({
    error: X(["invalid_grant", "access_denied"]),
    error_description: k(PRe),
    error_uri: se().optional(),
  }),
);
function WZe(e) {
  if (!oBe()) return null;
  let r = e;
  if (typeof r === "string") {
    if (!r.includes(PRe)) return null;
    try {
      r = z(r);
    } catch {
      return null;
    }
  }
  let t = ie().safeParse(r);
  return t.success ? { url: Yse(t.data.error_uri) } : null;
}
class mge extends Error {
  url;
  constructor(e) {
    super("OAuth account is on hold");
    this.url = e;
    this.name = "OAuthAccountOnHoldError";
  }
}
class c1 extends Error {
  error;
  errorDescription;
  errorUri;
  displayMessage;
  constructor(e, r, t) {
    super("OAuth authorization was denied or failed");
    this.error = e;
    this.errorDescription = r;
    this.errorUri = t;
    ((this.name = "OAuthCallbackError"),
      (this.displayMessage = r ? `${e}: ${r}` : e));
  }
}
function Evt(e) {
  return e instanceof c1 && e.errorDescription === PRe;
}
import { lstatSync, readFileSync, realpathSync } from "fs";
import {
  basename,
  dirname,
  isAbsolute,
  join as u,
  parse,
  relative,
  resolve,
  sep as H,
} from "path";
function gge(e) {
  if (
    !(e instanceof Ra) ||
    (e.statusCode !== 400 && e.statusCode !== 401 && e.statusCode !== 403)
  )
    return null;
  return WZe(e.body);
}
function iBe(e) {
  return (
    e instanceof Ra &&
    e.statusCode === null &&
    e.message.includes("has expired and no refresh is available")
  );
}
var me = ["ANTHROPIC_FEDERATION_RULE_ID", "ANTHROPIC_ORGANIZATION_ID"];
class W {
  precedenceSource = { filled: !1 };
  authType = { filled: !1 };
  accountInfo = { filled: !1 };
  profileStoreDenyPaths = { filled: !1 };
  settingsBearerRejected = !1;
  primedFiles = void 0;
}
var d = new j(() => new W());
function nS() {
  let e = d.of(B().host);
  if (e.precedenceSource.filled) return e.precedenceSource.value;
  let r = xe();
  return ((e.precedenceSource = { filled: !0, value: r }), r);
}
function xe() {
  let e = KD(),
    r = V();
  if (r) {
    if (e === null) return null;
    let t = O(e, r);
    return t === "oidc_federation" || t === "user_oauth"
      ? "profile-explicit"
      : null;
  }
  if (q()) return "env-quad";
  if (e !== null) {
    let t = O(e, ORe(e));
    if (t === "oidc_federation" || t === "user_oauth")
      return "profile-implicit";
  }
  return null;
}
function Avt() {
  let e = d.of(B().host);
  ((e.precedenceSource = { filled: !1 }),
    (e.authType = { filled: !1 }),
    (e.profileStoreDenyPaths = { filled: !1 }),
    (e.settingsBearerRejected = !1),
    Tkn());
}
function Tkn() {
  d.of(B().host).accountInfo = { filled: !1 };
}
function pir() {
  return nS() !== null;
}
function Cvt() {
  let e = d.of(B().host);
  if (e.authType.filled) return e.authType.value;
  let r = ge();
  return ((e.authType = { filled: !0, value: r }), r);
}
function ge() {
  let e = nS();
  if (e === null) return null;
  if (e === "env-quad") return "oidc_federation";
  let r = KD();
  if (r === null) return null;
  let t =
      e === "profile-explicit"
        ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
        : ORe(r),
    o = O(r, t);
  return o === "oidc_federation" || o === "user_oauth" ? o : null;
}
function GZe() {
  return nS() === "profile-implicit" && Cvt() === "user_oauth";
}
function vvt() {
  let e = d.of(B().host);
  if (e.accountInfo.filled) return e.accountInfo.value;
  let r = he();
  return ((e.accountInfo = { filled: !0, value: r }), r);
}
function he() {
  let e = nS();
  if (e === null || e === "env-quad") return;
  let r = KD();
  if (r === null) return;
  let t =
      e === "profile-explicit"
        ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
        : ORe(r),
    o = g(I(r, t));
  if (o === null) return;
  try {
    let s = JSON.parse(o);
    return {
      organizationUuid: s.organization_uuid,
      organizationName: s.organization_name,
      accountEmail: s.account_email,
      workspaceName: s.workspace_name,
    };
  } catch {
    return;
  }
}
function qZe() {
  let e = nS();
  if (e === "env-quad") {
    let r = process.env.ANTHROPIC_WORKSPACE_ID?.trim();
    return `env-quad \xB7 org ${v(process.env.ANTHROPIC_ORGANIZATION_ID ?? "")} \xB7 rule ${v(process.env.ANTHROPIC_FEDERATION_RULE_ID ?? "")}${r ? ` \xB7 ws ${r.startsWith("wrkspc_") ? v(r) : r}` : ""}`;
  }
  if (e === "profile-explicit" || e === "profile-implicit") {
    let r = KD(),
      t =
        r === null
          ? "default"
          : e === "profile-explicit"
            ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
            : ORe(r);
    return `credentials-file \xB7 ${Cvt() ?? "unknown"} \xB7 profile ${t}`;
  }
  return "inactive";
}
function v(e) {
  return e.length <= 6 ? e : `\u2026${e.slice(-6)}`;
}
function fir() {
  let e = nS();
  if (e === null || e === "env-quad") return;
  let r = KD();
  if (r === null) return;
  try {
    let t =
        e === "profile-explicit"
          ? (process.env.ANTHROPIC_PROFILE?.trim() ?? "default")
          : ORe(r),
      o = g(u(r, "configs", `${t}.json`));
    if (o === null) return;
    let s = JSON.parse(o);
    return typeof s.base_url === "string" && s.base_url.trim()
      ? s.base_url.trim()
      : void 0;
  } catch {
    return;
  }
}
function mir() {
  return d.of(B().host).settingsBearerRejected;
}
function gir(e) {
  d.of(B().host).settingsBearerRejected = e;
}
function Rvt() {
  let e = d.of(B().host);
  if (e.profileStoreDenyPaths.filled) return e.profileStoreDenyPaths.value;
  let { value: r, complete: t } = _e();
  if (t) e.profileStoreDenyPaths = { filled: !0, value: r };
  return r;
}
function _e() {
  let e = KD();
  if (e === null) return { value: null, complete: !0 };
  let r = { dirs: [e], files: [] };
  try {
    let t = resolve(e);
    r = N(t)
      ? {
          dirs: [u(t, "configs"), u(t, "credentials")],
          files: [u(t, "active_config")],
        }
      : { dirs: [t], files: [] };
    let s = process.env.ANTHROPIC_PROFILE?.trim() || ORe(e),
      i = I(e, s);
    if (typeof i !== "string" || !i.trim()) return { value: r, complete: !0 };
    let f = dedupe(isAbsolute(i) ? [resolve(i)] : [resolve(t, i), resolve(i)]).filter(
      (p) =>
        !r.dirs.some((y) => p === y || p.startsWith(y + H)) &&
        !r.files.includes(p) &&
        !N(p),
    );
    return {
      value: { dirs: r.dirs, files: [...r.files, ...f.filter((p) => !ye(p))] },
      complete: !0,
    };
  } catch (t) {
    return (
      n(
        `WIF profile store: could not resolve the active profile's credentials path (${l(t)}); denying the store root only`,
        { level: "warn" },
      ),
      { value: r, complete: !1 }
    );
  }
}
function ORe(e) {
  return g(u(e, "active_config"))?.trim() || "default";
}
function O(e, r) {
  let t = g(u(e, "configs", `${r}.json`));
  if (t === null) return null;
  let o;
  try {
    o = JSON.parse(t);
  } catch {
    return null;
  }
  let s = o?.authentication?.type ?? null;
  if (s === "user_oauth") {
    if (!g(I(e, r, o))?.trim()) return null;
  }
  return s;
}
function I(e, r, t) {
  if (t === void 0) {
    let o = g(u(e, "configs", `${r}.json`));
    if (o !== null)
      try {
        t = JSON.parse(o);
      } catch {}
  }
  return (
    t?.authentication?.credentials_path ?? u(e, "credentials", `${r}.json`)
  );
}
function KD() {
  return G()?.dir ?? null;
}
function G() {
  let e = process.env,
    r = e.ANTHROPIC_CONFIG_DIR?.trim();
  if (r) return { dir: r, space: "userNamed" };
  let t = e.XDG_CONFIG_HOME?.trim();
  if (t) return { dir: u(t, "anthropic"), space: "home" };
  let o = e.HOME?.trim();
  return o ? { dir: u(o, ".config", "anthropic"), space: "home" } : null;
}
function V() {
  return process.env.ANTHROPIC_PROFILE?.trim();
}
function q() {
  return me.every((e) => process.env[e]?.trim());
}
function N(e) {
  let r = U(e);
  if (r === parse(r).root) return !0;
  let t = relative(r, U(ae().cwd())),
    o = t.split(H)[0];
  return t === "" || (o !== ".." && !isAbsolute(t));
}
function U(e) {
  let r = resolve(e),
    t = "";
  for (;;)
    try {
      r = u(realpathSync.native(r), t);
      break;
    } catch {
      let o = dirname(r);
      if (o === r) {
        r = u(r, t);
        break;
      }
      ((t = t ? u(basename(r), t) : basename(r)), (r = o));
    }
  return r.toLowerCase();
}
function ye(e) {
  try {
    return lstatSync(e).isDirectory();
  } catch {
    return !1;
  }
}
function g(e) {
  let r = d.of(B().host).primedFiles;
  if (r !== void 0 && r.has(e)) return r.get(e) ?? null;
  try {
    return readFileSync(e, "utf-8");
  } catch (t) {
    if (Rt(t)) return null;
    throw t;
  }
}
async function hir(e) {
  let r = d.of(B().host),
    t = G();
  if (r.precedenceSource.filled || t === null) return;
  let { dir: o, space: s } = t,
    i = new Map(),
    f = async (x) => {
      let h;
      try {
        h = await e.hostFiles.readText(wc[s](x));
      } catch (R) {
        return (
          n(
            `WIF profile read-ahead: the storage backend threw reading ${x}: ${l(R)}`,
            { level: "warn" },
          ),
          null
        );
      }
      if (h.ok) {
        let R = h.value.found ? h.value.value : null;
        return (i.set(x, R), R);
      }
      if (FA(ou(h.error))) i.set(x, null);
      return null;
    },
    p = V();
  if (!p && q()) return;
  let y = p || (await f(u(o, "active_config")))?.trim() || "default";
  (await f(u(o, "configs", `${y}.json`)), (r.primedFiles = i));
  try {
    (nS(), Cvt());
  } catch (x) {
    n(`WIF profile read-ahead: left to the first reader: ${l(x)}`);
  } finally {
    r.primedFiles = void 0;
  }
}
var C = (e) => JSON.stringify(e);
var Re = new Set([
  "api.anthropic.com",
  "api-staging.anthropic.com",
  ...ALLOWED_OAUTH_BASE_URLS.map((e) => new URL(e).hostname),
]);
function _ir(e) {
  let r = aBe();
  if (!e) {
    if (r.status === "absent") return null;
    return r.status === "rejected"
      ? { code: r.code, reason: r.reason }
      : {
          code: "view_mismatch",
          reason:
            "the eager argv scan sees a --sdk-url value commander did not bind",
        };
  }
  if (r.status === "rejected") return { code: r.code, reason: r.reason };
  if (r.status === "absent" || r.url !== e)
    return {
      code: "view_mismatch",
      reason:
        "the --sdk-url value commander bound disagrees with the eager argv scan",
    };
  return null;
}
function P(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return { code: "unparseable", reason: `could not parse ${C(e)} as a URL` };
  }
  if (Re.has(r.hostname)) {
    if (r.protocol !== "wss:" && r.protocol !== "https:")
      return {
        code: "bad_scheme",
        reason: `scheme ${C(r.protocol)} is not permitted for host ${C(r.hostname)}; only wss:// and https:// are accepted`,
      };
    return null;
  }
  return {
    code: "not_allowlisted",
    reason: `host ${C(r.hostname)} is not an approved Anthropic endpoint`,
  };
}
function aBe() {
  let e = Ckn("--sdk-url"),
    r = e.filter(Boolean).at(-1);
  if (!r) return { status: "absent" };
  if (new Set(e).size > 1)
    return {
      status: "rejected",
      code: "conflicting",
      reason: "conflicting --sdk-url occurrences",
    };
  let t = P(r);
  if (t) return { status: "rejected", ...t };
  return { status: "ok", url: r };
}
function bQ(e) {
  if (e.protocol === "wss:") e.protocol = "https:";
  else if (e.protocol === "ws:") e.protocol = "http:";
  return e;
}
class K {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  cliOwnedConfigs = new WeakSet();
  cliOwnedBearerProviders = new WeakMap();
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = !1;
  identityChangedThisProcess = !1;
  identityTrippedHandler = null;
  identityTripUnowned = !1;
  headlessMcpTeardown = null;
  headlessConnectorMountInFlight = void 0;
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = new Map();
  claudeAiConfigsFetch = null;
  claudeAiConfigsFetchTransientFailures = new WeakSet();
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = new Set();
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = !1;
  officialUrls = void 0;
  vscodeClient = null;
  toolRefreshSequences = new WeakMap();
  droppedToolsSeqByConnection = new WeakMap();
  toolsListErrorByResult = new WeakMap();
  discoveryFetchErrors = new WeakMap();
  rawToolsByResult = new WeakMap();
  rawCommandsByResult = new WeakMap();
  rawResourcesByResult = new WeakMap();
  rawFetchedAtByResult = new WeakMap();
  persistedDiscoveryRounds = new WeakSet();
  listChangedRefetchHandlers = new WeakMap();
  burnedListingDiscoverPriors = new Set();
  skillsFunnelSeen = new Set();
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = new WeakSet();
  supersededDials = new WeakSet();
  swrRefreshDialsInFlight = new WeakSet();
  reauthDecisionSinkForTest = void 0;
  holdStaleReauthEntryForTest = !1;
  oauthCallbackListeners = new Map();
  oauthCallbackSubmitters = new Map();
  activeOAuthFlows = new Map();
  authLost = Le();
  reauthReconnect = Le();
  cachedAdopt = Le();
  cachedDialFailed = Le();
}
var Ce = new j(() => new K());
function jt() {
  return Ce.of(B().host);
}
function kvt(e, r) {
  let t = jt();
  if ((t.cliOwnedConfigs.add(e), r?.getBearerToken))
    t.cliOwnedBearerProviders.set(e, r.getBearerToken);
  return e;
}
function rS(e) {
  return typeof e === "object" && e !== null && jt().cliOwnedConfigs.has(e);
}
function Jse(e) {
  return (
    typeof e === "object" && e !== null && jt().cliOwnedBearerProviders.has(e)
  );
}
function xvt(e) {
  if (typeof e !== "object" || e === null) return null;
  let r = jt().cliOwnedBearerProviders.get(e);
  if (!r) return null;
  try {
    return r() || null;
  } catch {
    return null;
  }
}
var S = "/v2/ccr-sessions/-/meta/mcp",
  Eq = "claude-code-remote",
  yir = "Claude Code Remote",
  E = "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a";
function Hvt(e, r) {
  return {
    type: "http",
    url: e,
    headers: {
      ["X-MCP-Server-ID"]: "bf7c680d-5fdc-5ef4-b4a0-abadb619bf0a",
      "X-Session-UUID": r,
      "anthropic-version": "2023-06-01",
    },
    alwaysLoad: !0,
  };
}
var Aq = "hearthbot";
var g5t = [
    "/v2/session_ingress/shttp/mcp/",
    "/v2/session_ingress/mcp/ws/",
    "/v2/ccr-sessions/",
    "/v1/code/",
  ],
  Sir = "spent";
class Q {
  captured = J();
  carrier = Z();
  get atStartup() {
    return this.captured;
  }
  get bridgeCarrier() {
    return this.carrier;
  }
  get isBridgeCarrierChild() {
    return this.carrier === "child";
  }
  reset() {
    ((this.captured = J()), (this.carrier = Z()));
  }
}
var g0 = new Q();
function Ekn() {
  return g0.bridgeCarrier
    ? [
        "CLAUDE_CODE_SESSION_ACCESS_TOKEN",
        "SESSION_INGRESS_URL",
        "CLAUDE_CODE_BRIDGE_PROMPT_SHA256",
      ]
    : [];
}
function UR(e) {
  let r = g0.atStartup;
  if (!r) return !1;
  let t, o;
  try {
    ((t = new URL(e)), (o = new URL(r)));
  } catch {
    return !1;
  }
  if (
    (t.protocol === "wss:"
      ? `https://${t.host}`
      : t.protocol === "ws:"
        ? `http://${t.host}`
        : t.origin) !== o.origin
  )
    return !1;
  return g5t.some((i) => t.pathname.includes(i));
}
function Ivt(e, r) {
  if (!("url" in r) || typeof r.url !== "string") return !1;
  if (!UR(r.url)) return !1;
  switch (g0.bridgeCarrier) {
    case void 0:
      return !0;
    case "child":
      return r.scope === "dynamic" && e === Eq;
    case "descendant":
      return !1;
  }
}
function Se(e, r) {
  let t = w(e, r);
  if (!t) return !1;
  if (t.pathname === S) return t.search === "";
  let o = t.searchParams.getAll("toolbox_mcp_server_id");
  return (
    g5t.some((s) => t.pathname.includes(s)) && o.length === 1 && o[0] === E
  );
}
var Ee = /^\/v2\/ccr-sessions\/([A-Za-z0-9_-]+)\/mcp$/;
function Pvt(e, r, t) {
  let o = w(e, r);
  if (!o) return null;
  let s = Ee.exec(o.pathname),
    i = Oe(o, r);
  if (!s || s[1] !== t || !i) return null;
  return `${r}/v2/ccr-sessions/${t}/mcp?${i}`;
}
var Ae = ["mcp_url", "mcp_server_id", "toolbox_mcp_server_id"],
  ve = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Oe(e, r) {
  let t = [...e.searchParams.keys()];
  if (
    new Set(t).size !== t.length ||
    t.some((f) => !Ae.includes(f)) ||
    e.searchParams.get("toolbox_mcp_server_id") !== E
  )
    return null;
  let o = new URLSearchParams(),
    s = e.searchParams.get("mcp_url");
  if (s !== null) {
    let f = w(s, r);
    if (!f || f.pathname !== S || f.search !== "") return null;
    o.set("mcp_url", `${r}${S}`);
  }
  let i = e.searchParams.get("mcp_server_id");
  if (i !== null) {
    if (!ve.test(i)) return null;
    o.set("mcp_server_id", i);
  }
  return (o.set("toolbox_mcp_server_id", E), o.toString());
}
function w(e, r) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  return t.origin === r &&
    t.username === "" &&
    t.password === "" &&
    t.hash === ""
    ? t
    : null;
}
function Pe() {
  let e = g0.atStartup;
  if (!e) return null;
  try {
    return new URL(e).origin;
  } catch {
    return null;
  }
}
function bir(e) {
  let r = Pe();
  return r !== null && Se(e, r);
}
function Ovt(e) {
  return e !== void 0 && P(e) === null ? new URL(e).origin : null;
}
var we = "/v1/code/mcp/hearthbot",
  Te = /^\/v2\/ccr-sessions\/(?:-|[A-Za-z0-9_-]+)\/hearthbot\/mcp$/;
function wir(e) {
  if (!UR(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return (
    r.username === "" &&
    r.password === "" &&
    r.hash === "" &&
    r.search === "" &&
    (r.pathname === we || Te.test(r.pathname))
  );
}
var ee = new Set([
  "bridge.claudeusercontent.com",
  "bridge-staging.claudeusercontent.com",
]);
function h5t(e) {
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  return (
    r.protocol === "wss:" &&
    r.username === "" &&
    r.password === "" &&
    ee.has(r.hostname)
  );
}
function zZe(e) {
  if ("url" in e && typeof e.url === "string" && UR(e.url)) return !0;
  return rS(e);
}
function VZe(e) {
  if (!UR(e)) return !1;
  let r;
  try {
    r = new URL(e);
  } catch {
    return !1;
  }
  let t = r.searchParams.get("mcp_url");
  if (!t) return !1;
  try {
    let o = new URL(t);
    return ee.has(o.hostname) && o.pathname === "/devices/mcp";
  } catch {
    return !1;
  }
}
function DRe(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    let r = new URL(e.url);
    return (
      (r.search = ""),
      (r.username = ""),
      (r.password = ""),
      (r.hash = ""),
      r.toString().replace(/\/$/, "")
    );
  } catch {
    return;
  }
}
function wQ(e) {
  if (!("url" in e) || typeof e.url !== "string") return;
  try {
    return new URL(e.url).origin;
  } catch {
    return;
  }
}
function Tir(e) {
  if (!URL.canParse(e)) return;
  let r = new URL(e);
  if (r.origin === "null") return;
  return r.pathname !== "/" || r.search !== "" || r.hash !== ""
    ? `${r.origin}/\u2026`
    : r.origin;
}
function J() {
  return process.env.SESSION_INGRESS_URL ?? process.env.ANTHROPIC_BASE_URL;
}
function Z() {
  let e = process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
  if (e === "1" || !e) return e ? "child" : void 0;
  if (
    process.env.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" &&
    Ie(process.env.CLAUDE_CODE_REMOTE)
  ) {
    delete process.env.CLAUDE_CODE_BRIDGE_MCP_CARRIER;
    return;
  }
  return "descendant";
}
var LRe = [
  "CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE",
  "CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER",
];
function Eir(e) {
  return {
    ...(e.subscriptionType && {
      CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: e.subscriptionType,
    }),
    ...(e.rateLimitTier && {
      CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: e.rateLimitTier,
    }),
  };
}
function Akn() {
  if (a.CLAUDE_CODE_SESSION_KIND !== "bg")
    return { subscriptionType: void 0, rateLimitTier: void 0 };
  return {
    subscriptionType: a.CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE || void 0,
    rateLimitTier: a.CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER || void 0,
  };
}
export {
  rBe,
  SQ,
  Skn,
  dir,
  oBe,
  PRe,
  sBe,
  bkn,
  Tvt,
  wkn,
  Yse,
  WZe,
  mge,
  c1,
  Evt,
  gge,
  iBe,
  nS,
  Avt,
  Tkn,
  pir,
  Cvt,
  GZe,
  vvt,
  qZe,
  fir,
  mir,
  gir,
  Rvt,
  ORe,
  KD,
  hir,
  _ir,
  aBe,
  bQ,
  jt,
  kvt,
  rS,
  Jse,
  xvt,
  Eq,
  yir,
  Hvt,
  Aq,
  g5t,
  Sir,
  g0,
  Ekn,
  UR,
  Ivt,
  Pvt,
  bir,
  Ovt,
  wir,
  h5t,
  zZe,
  VZe,
  DRe,
  wQ,
  Tir,
  LRe,
  Eir,
  Akn,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getAuthHeaders, hashSha256Hex, isNonEssentialTrafficAllowed, checkAndRefreshOAuthTokenIfNeeded, getFeatureValue_CACHED_MAY_BE_STALE, readFreshOauthAccountFromDisk } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Zt, Io, MPn, Xu, cr, nt, hm, Cu } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { b } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { countOccurrences } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { isCancel } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { ARTIFACT_SLUG_RE } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { bCe, Am, TG, jZn, nP, Nd, Fd } from "./chunk-01ymf0ar.js";
function vft() {
  return a.CLAUDE_CODE_ARTIFACT_DB ?? getFeatureValue_CACHED_MAY_BE_STALE("tengu_umber_lattice", !1);
}
var Y = "/api/frame/db/agent",
  L = String.raw`(?!\.\.?(?:/|$))[A-Za-z0-9_\-.~:@+]{1,200}`,
  vF = new RegExp(`^${L}$`),
  U9 = new RegExp(`^${L}(?:/${L}){0,14}$`);
function kOe(e) {
  return (countOccurrences(e, "/") + 1) % 2 === 1;
}
function Rft(e) {
  let r = (i) =>
      i.length > 120 ? `${i.slice(0, 60)}\u2026${i.slice(-40)}` : i,
    t = e.split("/"),
    c = t.length,
    o = r(t.slice(0, -1).join("/")),
    u = r(t[c - 1]);
  return `collection '${r(e)}' has ${c} segments, which makes it a document path, not a collection: collection paths have an odd number of segments (collection/document/collection/\u2026) and the document is collection + doc_id. For that document use collection '${o}' with doc_id '${u}'; for a collection inside it, add one more segment. Per-user data follows the same rule \u2014 collection 'data/users/<id>' (3 segments) holds that user's documents, so 'data/users/<id>/decks' is one document and 'data/users/<id>/decks/cards' a collection.`;
}
var QA = 1000,
  hwe = ["get", "list", "query"],
  W7 = ["set", "update", "delete"],
  lue = 262144,
  xOe = 4 * lue,
  ue = 4194304,
  N = 16384,
  iGn = 1000,
  mk = 50,
  kft = 1048576,
  fe = new Map([
    ["not_found", "not_found"],
    ["invalid_argument", "invalid_argument"],
    ["quota_or_rate", "quota_or_rate"],
    ["busy", "busy"],
    ["upstream_auth", "upstream_auth"],
    ["store_unavailable", "store_unavailable"],
    ["not_declared", "not_declared"],
    ["too_large", "too_large"],
    ["quota_exceeded", "quota_exceeded"],
    ["invalid-argument", "invalid_argument"],
    ["not-found", "not_found"],
    ["resource-exhausted", "quota_or_rate"],
    ["resource_exhausted", "quota_or_rate"],
    ["data-unavailable", "store_unavailable"],
    ["unavailable", "store_unavailable"],
    ["upstream-error", "store_unavailable"],
  ]),
  me = new Set([
    "an OAuth access token is required",
    "a directly presented OAuth access token is required",
    "db verbs require a user-scoped OAuth token, not an org service key",
  ]);
function _e(e, r) {
  if (e !== 403 || typeof r !== "string") return;
  let t = r.trim();
  if (me.has(t)) return { code: "credential_rejected", reason: "custody_403" };
  if (t.startsWith(TG))
    return { code: "cloud_unavailable", reason: "ccr_credential_refused" };
  return;
}
function ge(e) {
  if (e === 404 || e === 403) return "not_found";
  if (e === 400 || e === 422) return "invalid_argument";
  if (e === 413) return "too_large";
  if (e === 429) return "quota_or_rate";
  if (e === 409 || e === 412) return "busy";
  if (e === 401) return "upstream_auth";
  return "store_unavailable";
}
function M(e) {
  switch (e) {
    case "not_found":
    case "invalid_argument":
    case "too_large":
    case "not_declared":
      return "invalid-argument";
    case "quota_or_rate":
      return "resource-exhausted";
    case "quota_exceeded":
      return "quota-exceeded";
    case "busy":
    case "upstream_auth":
    case "store_unavailable":
    case "credential_rejected":
    case "cloud_unavailable":
    case "network_off":
      return "unavailable";
  }
}
var aGn = [
    "eq",
    "ne",
    "in",
    "not-in",
    "lt",
    "lte",
    "gt",
    "gte",
    "array-contains",
  ],
  lGn = ["==", "!=", "<", "<=", ">", ">="],
  Q = {
    "==": "eq",
    "!=": "ne",
    "<": "lt",
    "<=": "lte",
    ">": "gt",
    ">=": "gte",
  };
function be(e) {
  return Object.hasOwn(Q, e);
}
function he(e) {
  return be(e) ? Q[e] : e;
}
var pe = createLazyValue(() =>
    nt({
      exists: Io(),
      data: hm(le(), Xu()).optional(),
      version: Zt().int().optional(),
      updatedAt: le().optional(),
    }),
  ),
  ye = createLazyValue(() =>
    nt({
      docs: cr(
        nt({
          id: le(),
          data: hm(le(), Xu()),
          version: Zt().int().optional(),
          updatedAt: le().optional(),
        }),
      ),
      nextCursor: le().optional(),
    }),
  ),
  V = createLazyValue(() =>
    nt({
      documents: Zt().int().safe().nonnegative(),
      maxDocuments: Zt().int().safe().positive(),
    })
      .optional()
      .catch(void 0),
  );
function J(e, r) {
  if (r === void 0 && typeof e === "object" && e !== null && e.usage !== void 0)
    logFeatureSad("artifact_db_write", "malformed_usage");
}
var we = createLazyValue(() => nt({ version: Zt().int().optional(), usage: V() })),
  ke = createLazyValue(() =>
    nt({ results: cr(nt({ version: Zt().int().optional() })), usage: V() }),
  ),
  ve = createLazyValue(() =>
    nt({
      error: nt({
        code: Cu("invalid_argument"),
        message: Cu("invalid argument"),
        verb: MPn().optional(),
      }),
    }),
  );
function Fe(e, r) {
  return e === 400 && ve().safeParse(r).success;
}
class Z {
  refusedAt = void 0;
  get unsupported() {
    return this.refusedAt !== void 0 && Date.now() - this.refusedAt < De;
  }
}
var De = 3600000,
  Bcn = new j(() => new Z()),
  Ee = createLazyValue(() =>
    nt({
      error: nt({
        code: le().optional(),
        kind: Xu().optional(),
        limit: Xu().optional(),
      }).optional(),
    }),
  ),
  Ae = {
    quota_exceeded: new Set([
      "docs_per_collection",
      "docs_per_database",
      "databases_per_org",
    ]),
    quota_or_rate: new Set([
      "active_leases",
      "rate_limited",
      "write_capacity",
      "scan_budget",
      "response_budget",
    ]),
  };
function Re(e, r) {
  let t = Ae[e];
  return t !== void 0 && t.has(r);
}
function Se(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0 ? e : void 0;
}
function B(e, r) {
  let t = _e(e, r);
  if (t !== void 0) return t;
  let c = Ee().safeParse(r),
    o = c.success ? c.data.error : void 0,
    u = o?.code,
    i = u !== void 0 ? fe.get(u) : void 0;
  if (u !== void 0 && i !== void 0) {
    let s = o?.kind;
    if (Re(i, s)) return { code: i, reason: s, kind: s, limit: Se(o?.limit) };
    return { code: i, reason: u.replace(/-/g, "_") };
  }
  let n = ge(e);
  return { code: n, reason: n };
}
function S(e, r, t, c) {
  let o = `db ${r} failed (${M(e)})`;
  switch (e) {
    case "not_found":
      return `${o}: no such artifact, collection, or document (or no access \u2014 the two are deliberately indistinguishable)`;
    case "invalid_argument":
      return `${o}: the server could not accept the request as shaped`;
    case "too_large":
      return `${o}: the request body exceeds the server's size limit \u2014 send less per call`;
    case "quota_or_rate":
      return `${o}: ${G(t, c) ?? "over a rate or storage limit \u2014 retry later or write less"}`;
    case "quota_exceeded":
      return `${o}: ${G(t, c) ?? "a storage limit on this artifact's database has been reached \u2014 delete documents; retrying won't help"}`;
    case "busy":
      return `${o}: lost to a concurrent change \u2014 re-read and retry deliberately`;
    case "upstream_auth":
      return `${o}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "store_unavailable":
      return `${o}: the store is unavailable right now \u2014 try again`;
    case "not_declared":
      return `${o}: this artifact's current published version does not declare the database capability \u2014 republish it with the db capability declared, then retry`;
    case "credential_rejected":
      return `${o}: the server refused this session's credential at the artifact-db door \u2014 not an artifact-access or existence answer; report this as a client/server integration fault`;
    case "cloud_unavailable":
      return `${o}: reading and editing artifact data isn't available in this cloud session right now; this says nothing about the artifact or its data, and if the user has access, Claude Code on their own machine can still read and edit it`;
    case "network_off":
      return r === "read"
        ? `${o}: this cloud session's network access is turned off (or could not be confirmed), so it cannot read artifact data \u2014 writes still work; do not retry the read here`
        : `${o}: this cloud session's network access is turned off (or could not be confirmed), and the gateway did not accept this call as a write it allows \u2014 do not retry it here`;
  }
}
function G(e, r) {
  let t = r === void 0 ? "document limit" : `limit of ${r} documents`;
  switch (e) {
    case "docs_per_collection":
      return `this collection has reached its ${t} \u2014 delete documents; retrying won't help`;
    case "docs_per_database":
      return `this artifact's database has reached its ${t} \u2014 delete documents before adding more; retrying won't help`;
    case "databases_per_org":
      return "this organization has reached its limit on artifact databases; retrying won't help";
    case "active_leases":
      return "this database has too many active leases \u2014 retry after some expire or are released";
    case "rate_limited":
      return "rate-limited \u2014 retry shortly";
    case "write_capacity":
      return "too many concurrent writes to this database \u2014 retry shortly";
    case "scan_budget":
      return "the query scans too many documents \u2014 narrow the query or add filters; retrying won't help";
    case "response_budget":
      return "the query's result is too large \u2014 request fewer documents; retrying won't help";
    case void 0:
      return;
  }
}
var q = "data/users/me",
  x = "whoami",
  $e = createLazyValue(() => nt({ id: le().min(1) }));
function ee(e, r) {
  return `${e}:${r}`;
}
function C() {
  return jZn("POST", Y) === "relay";
}
async function Oe(e, r) {
  if (C()) return null;
  let t = (await bCe(r))?.accountUuid;
  return t ? ee(t, e) : null;
}
async function K(e, r, t) {
  let c = await readFreshOauthAccountFromDisk(t);
  return c?.accountUuid !== void 0 && ee(c.accountUuid, e) === r;
}
function U() {
  let e = getAuthHeaders().headers.Authorization;
  return e === void 0 ? null : hashSha256Hex(e);
}
async function te(e) {
  if (!isNonEssentialTrafficAllowed()) return;
  for (let r = 0; r < 2; r++)
    try {
      await checkAndRefreshOAuthTokenIfNeeded({ credentials: e });
    } catch {}
}
function cGn(e) {
  let { resolvedMeIds: r, inFlightMeIds: t } = ae.of(e);
  (r.clear(), t.clear());
}
function re(e, r) {
  if (e === q || e.startsWith(q + "/"))
    return (t) => ({
      collection: "data/users/" + t + e.slice(q.length),
      docId: r,
    });
  return null;
}
var R = Symbol("contested-me-key");
class ne {
  resolvedMeIds = new Map();
  inFlightMeIds = new Map();
}
var ae = new j(() => new ne());
function oe(e, r, t, c, o) {
  if (r === "malformed_whoami_echo")
    return `db ${t} failed (unavailable): resolving 'me' returned an unreadable response \u2014 the artifact db service may need an update`;
  if (e === "not_declared")
    return `db ${t} failed (${M(e)}): resolving 'me' needs this artifact's published version to declare the db and user capabilities \u2014 republish with both declared, then retry`;
  return S(e, t, c, o) + (t === "write" && ie.has(e) ? P : "");
}
var P = "; nothing was written",
  ie = new Set([
    "too_large",
    "credential_rejected",
    "cloud_unavailable",
    "network_off",
  ]);
async function z(e, r, t, c, o, u) {
  let i = ae.of(e),
    { resolvedMeIds: n, inFlightMeIds: s } = i,
    d = await Oe(t, u),
    _ = null;
  if (d !== null && (n.has(d) || s.has(d))) {
    if (await K(t, d, o)) {
      if (n.has(d)) await te(u);
      _ = d;
    }
  }
  let w = _ === null ? void 0 : n.get(_);
  if (_ !== null && w !== void 0 && !C()) {
    if (w.fingerprint === U()) return { ok: !0, id: w.id };
    if (n.get(_) === w) n.delete(_);
  }
  let h;
  if (d === null) h = await W(i, r, t, c, d, o, u);
  else {
    let l = _ === null ? void 0 : s.get(_);
    if (!l)
      ((l = (async () => {
        if (!(await K(t, d, o))) return (logFeatureSad(r, "contested_me_key"), R);
        return W(i, r, t, c, d, o, u);
      })()),
        s.set(d, l),
        l
          .finally(() => {
            if (s.get(d) === l) s.delete(d);
          })
          .catch(() => {}));
    let F = await l;
    h = F === R ? await W(i, r, t, c, null, o, u) : F;
  }
  if (h.ok) return h;
  if ("composed" in h) return { ok: !1, result: h.composed };
  let v = r === "artifact_db_read" ? "read" : "write";
  return (
    logFeatureBad(r, h.reason),
    {
      ok: !1,
      result: {
        kind: "error",
        code: h.code,
        message: oe(h.code, h.reason, v, h.kind, h.limit),
        reason: h.reason,
      },
    }
  );
}
async function W(e, r, t, c, o, u, i) {
  let n = null;
  if (o !== null) {
    if ((await te(i), (n = U()), n === null || C())) return R;
  }
  let s = await I(
    r,
    t,
    x,
    {},
    {
      timeout: 15000,
      maxContentLength: N,
      credentials: i,
      reportSentAuth: o !== null,
    },
    c,
  );
  if (!s.ok) return { ok: !1, composed: s.result };
  if (s.status !== 200) {
    let { code: _, reason: w, kind: h, limit: v } = B(s.status, s.data);
    return { ok: !1, code: _, reason: `whoami_${w}`, kind: h, limit: v };
  }
  let d = $e().safeParse(s.data);
  if (!d.success || !vF.test(d.data.id))
    return {
      ok: !1,
      code: "store_unavailable",
      reason: "malformed_whoami_echo",
    };
  if (o !== null) {
    if (
      n === null ||
      n !== s.sentAuthFingerprint ||
      n !== U() ||
      !(await K(t, o, u))
    )
      return (logFeatureSad(r, "auth_unstable_me_key"), R);
    if (C()) return R;
    e.resolvedMeIds.set(o, { id: d.data.id, fingerprint: n });
  }
  return { ok: !0, id: d.data.id };
}
async function I(e, r, t, c, o, u) {
  let i = t === "batch" ? "batch_" : "",
    n;
  try {
    n = await Nd.post(
      Y,
      { slug: r, verb: t, args: c },
      {
        refreshOAuth: !0,
        credentials: o.credentials,
        headers: Fd(),
        timeout: o.timeout,
        maxContentLength: o.maxContentLength,
        signal: u,
        reportSentAuth: o.reportSentAuth,
      },
    );
  } catch (s) {
    if (isCancel(s)) throw s;
    let d = e !== "artifact_db_read" && t !== x && nP(s);
    return (
      logFeatureBad(e, `${i}${d ? "relay_request_error" : "request_error"}`),
      {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: d
            ? "db write outcome unknown (relay request failed) \u2014 it may have applied; read back before retrying"
            : `db ${e === "artifact_db_read" ? "read" : "write"} failed (network error)`,
          reason: d ? "relay_request_error" : "request_error",
        },
      }
    );
  }
  if (!n.ok)
    return (
      logFeatureBad(e, `${i}${n.reason.replace(/-/g, "_")}`),
      {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message:
            n.reason === "no-auth"
              ? Am(n.detail)
              : `db ${e === "artifact_db_read" ? "read" : "write"} unavailable: ${n.reason}`,
          reason: "transport",
        },
      }
    );
  if (n.gatewayPolicy === "network-off") {
    let s = t === x,
      d = e === "artifact_db_read" ? "read" : "write",
      _ = s ? "whoami_network_off" : "network_off";
    return (
      logFeatureSad(e, `${i}${_}`),
      {
        ok: !1,
        result: {
          kind: "error",
          code: "network_off",
          message: s
            ? oe("network_off", _, d)
            : S("network_off", d) + (d === "write" ? P : ""),
          reason: _,
        },
      }
    );
  }
  if (!n.fromFrame) {
    let s = t === x,
      d = e === "artifact_db_read" ? "read" : "write";
    return (
      logFeatureBad(e, `${i}${s ? "whoami_relay_error" : "relay_error"}`, {
        status: n.status,
      }),
      {
        ok: !1,
        result: {
          kind: "error",
          code: "store_unavailable",
          message: s
            ? `db ${d} failed: resolving 'me' failed (relay HTTP ${n.status}) \u2014 try again`
            : e === "artifact_db_read"
              ? `db read failed (relay HTTP ${n.status}) \u2014 try again`
              : `db write outcome unknown (relay HTTP ${n.status}) \u2014 it may have applied; read back before retrying`,
          reason: s ? "whoami_relay_error" : "relay_error",
        },
      }
    );
  }
  return {
    ok: !0,
    status: n.status,
    data: n.data,
    sentAuthFingerprint: n.sentAuthFingerprint,
    ...(n.route === "relay" &&
      n.response.headers?.[xe] === "session" && { sessionScoped: !0 }),
  };
}
var xe = "x-frame-relay-read-scope-applied",
  Ce = `db read failed (${M("not_found")}): nothing this session can read at that address \u2014 with the organization's cloud network access turned off, this session can read the data only of artifacts it published itself (or there is no such artifact, collection, or document); do not retry the read here`;
async function uGn(e, r, t, c, o) {
  let { slug: u, op: i, query: n } = r,
    { collection: s, docId: d } = r;
  if (!ARTIFACT_SLUG_RE.test(u))
    return (
      logFeatureBad("artifact_db_read", "invalid_slug"),
      {
        kind: "error",
        code: "invalid_argument",
        message: "not a valid artifact id",
        reason: "invalid_slug",
      }
    );
  if (!U9.test(s) || (d !== void 0 && !vF.test(d)))
    return (
      logFeatureBad("artifact_db_read", "invalid_segment"),
      {
        kind: "error",
        code: "invalid_argument",
        message:
          'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
        reason: "invalid_segment",
      }
    );
  if (!kOe(s))
    return (
      logFeatureBad("artifact_db_read", "parity"),
      {
        kind: "error",
        code: "invalid_argument",
        message: Rft(s),
        reason: "parity",
      }
    );
  if (i === "get" && d === void 0)
    return (
      logFeatureBad("artifact_db_read", "missing_doc_id"),
      {
        kind: "error",
        code: "invalid_argument",
        message: "doc_id is required for a get",
        reason: "missing_doc_id",
      }
    );
  let _ = re(s, d);
  if (_ !== null) {
    let p = await z(e, "artifact_db_read", u, t, c, o);
    if (!p.ok) return p.result;
    ({ collection: s, docId: d } = _(p.id));
  }
  let w = d !== void 0 ? `${s}/${d}` : s;
  if (w.length > QA)
    return (
      logFeatureBad("artifact_db_read", "path_too_long"),
      {
        kind: "error",
        code: "invalid_argument",
        message: `the composed document path is ${w.length} bytes \u2014 the limit is ${QA}`,
        reason: "path_too_long",
      }
    );
  let h =
      i === "get"
        ? { path: w }
        : {
            collection: s,
            ...(n?.limit !== void 0 && { limit: n.limit }),
            ...(n?.cursor !== void 0 && { cursor: n.cursor }),
            ...(i === "query" &&
              n?.where !== void 0 && {
                where: n.where.map(([p, k, D]) => ({
                  field: p,
                  op: he(k),
                  value: D,
                })),
              }),
            ...(i === "query" &&
              n?.order_by !== void 0 && {
                orderBy: {
                  field: n.order_by.field,
                  ...(n.order_by.direction !== void 0 && {
                    direction: n.order_by.direction,
                  }),
                },
              }),
          },
    v = await I(
      "artifact_db_read",
      u,
      i,
      h,
      { timeout: 15000, maxContentLength: ue, credentials: o },
      t,
    );
  if (!v.ok) return v.result;
  if (v.status === 200) {
    if (i === "get") {
      let k = pe().safeParse(v.data);
      if (!k.success)
        return (
          logFeatureBad("artifact_db_read", "malformed_echo"),
          {
            kind: "error",
            code: "store_unavailable",
            message: "db read returned an unreadable response \u2014 try again",
            reason: "malformed_echo",
          }
        );
      if (!k.data.exists)
        return (logFeatureSad("artifact_db_read", "not_found"), { kind: "not_found" });
      return (
        logFeatureOk("artifact_db_read"),
        {
          kind: "ok",
          docs: [
            {
              id: d ?? "",
              data: k.data.data ?? {},
              ...(k.data.version !== void 0 && { version: k.data.version }),
              ...(k.data.updatedAt !== void 0 && {
                updatedAt: k.data.updatedAt,
              }),
            },
          ],
          ...(k.data.version !== void 0 && { version: k.data.version }),
        }
      );
    }
    let p = ye().safeParse(v.data);
    if (!p.success)
      return (
        logFeatureBad("artifact_db_read", "malformed_echo"),
        {
          kind: "error",
          code: "store_unavailable",
          message: "db read returned an unreadable response \u2014 try again",
          reason: "malformed_echo",
        }
      );
    return (
      logFeatureOk("artifact_db_read"),
      {
        kind: "ok",
        docs: p.data.docs,
        ...(p.data.nextCursor !== void 0 &&
          p.data.nextCursor !== "" && { nextCursor: p.data.nextCursor }),
      }
    );
  }
  let { code: l, reason: F, kind: O, limit: T } = B(v.status, v.data),
    A = l === "not_found" && v.sessionScoped === !0;
  return (
    logFeatureBad("artifact_db_read", A ? "not_found_session_scoped" : F),
    {
      kind: "error",
      code: l,
      message: A ? Ce : S(l, "read", O, T),
      reason: A ? "not_found_session_scoped" : F,
    }
  );
}
function E(e, r, t = "") {
  return (
    logFeatureBad("artifact_db_write", `${t}${e}`),
    { kind: "error", code: "invalid_argument", message: r, reason: e }
  );
}
async function se(e, r, t = "") {
  let { collection: c, docId: o } = e;
  if (!U9.test(c) || !vF.test(o))
    return {
      ok: !1,
      result: E(
        "invalid_segment",
        'collection must be a path of 1-15 "/"-separated segments and doc_id one segment (letters, digits, _ - . ~ : @ + per segment; "." and ".." reserved)',
        t,
      ),
    };
  if (!kOe(c)) return { ok: !1, result: E("parity", Rft(c), t) };
  let u = re(c, o);
  if (u !== null) {
    let n = await r();
    if (!n.ok) return n;
    ({ collection: c, docId: o } = u(n.id));
  }
  let i = `${c}/${o}`;
  if (i.length > QA)
    return {
      ok: !1,
      result: E(
        "path_too_long",
        `the composed document path is ${i.length} bytes \u2014 the limit is ${QA}`,
        t,
      ),
    };
  return { ok: !0, path: i };
}
function de(e, r, t) {
  return e === "delete"
    ? { path: r }
    : e === "set"
      ? { path: r, data: t, replace: !0 }
      : { path: r, data: t };
}
async function dGn(e, r, t, c, o) {
  let { slug: u, op: i, data: n } = r;
  if (!ARTIFACT_SLUG_RE.test(u)) return E("invalid_slug", "not a valid artifact id");
  let s = await se(r, () => z(e, "artifact_db_write", u, t, c, o));
  if (!s.ok) return s.result;
  return ce(u, i, s.path, n, t, o);
}
async function ce(e, r, t, c, o, u) {
  let i = await I(
    "artifact_db_write",
    e,
    r,
    de(r, t, c),
    { timeout: 30000, maxContentLength: N, credentials: u },
    o,
  );
  if (!i.ok) return i.result;
  if (i.status === 200) {
    let w = we().safeParse(i.data);
    if (!w.success)
      return (logFeatureSad("artifact_db_write", "malformed_echo"), { kind: "ok" });
    return (
      logFeatureOk("artifact_db_write"),
      J(i.data, w.data.usage),
      {
        kind: "ok",
        ...(w.data.version !== void 0 && { version: w.data.version }),
        ...(w.data.usage !== void 0 && { usage: w.data.usage }),
      }
    );
  }
  let { code: n, reason: s, kind: d, limit: _ } = B(i.status, i.data);
  return (
    logFeatureBad("artifact_db_write", s),
    {
      kind: "error",
      code: n,
      message: S(n, "write", d, _) + (ie.has(n) ? P : ""),
      reason: s,
    }
  );
}
async function pGn(e, r, t, c, o) {
  let { slug: u, ops: i } = r;
  if (!ARTIFACT_SLUG_RE.test(u))
    return E("invalid_slug", "not a valid artifact id", "batch_");
  if (i.length === 0 || i.length > mk)
    return E(
      "batch_size",
      `a batch takes 1-${mk} writes \u2014 ${i.length} were given`,
      "batch_",
    );
  let n,
    s = () => (n ??= z(e, "artifact_db_write", u, t, c, o)),
    d = [],
    _ = new Set();
  for (let [p, k] of i.entries()) {
    let D = await se(k, s, "batch_");
    if (!D.ok)
      return {
        ...D.result,
        message: `write ${p + 1} of ${i.length}: ${D.result.message}`,
      };
    if (_.has(D.path))
      return E(
        "duplicate_path",
        `write ${p + 1} of ${i.length} addresses ${D.path}, which an earlier write in this batch already addresses \u2014 a batch writes each document at most once`,
        "batch_",
      );
    (_.add(D.path),
      d.push({
        op: k.op,
        path: D.path,
        ...(k.data !== void 0 && { data: k.data }),
      }));
  }
  let w = {
      ops: d.map(({ op: p, path: k, data: D }) => ({ op: p, ...de(p, k, D) })),
    },
    h;
  try {
    h = Buffer.byteLength(b({ slug: u, verb: "batch", args: w }), "utf8");
  } catch {
    return E(
      "data_invalid",
      "every document in the batch must be a JSON-serializable object",
      "batch_",
    );
  }
  if (h > kft)
    return E(
      "batch_too_large",
      `the batch serializes to ${h} bytes \u2014 the limit for one request is ${kft}; split it into smaller batches`,
      "batch_",
    );
  let v = Bcn.of(e);
  if (v.unsupported) return X(u, d, t, o);
  let l = await I(
    "artifact_db_write",
    u,
    "batch",
    w,
    { timeout: 60000, maxContentLength: N, credentials: o },
    t,
  );
  if (!l.ok) return l.result;
  if (Fe(l.status, l.data)) return ((v.refusedAt = Date.now()), X(u, d, t, o));
  if (l.status === 200) {
    let p = ke().safeParse(l.data);
    if (!p.success || p.data.results.length !== i.length)
      return (
        logFeatureSad("artifact_db_write", "malformed_batch_echo"),
        { kind: "ok", results: i.map(() => ({})) }
      );
    return (
      logFeatureOk("artifact_db_write"),
      J(l.data, p.data.usage),
      {
        kind: "ok",
        results: p.data.results.map((k) =>
          k.version !== void 0 ? { version: k.version } : {},
        ),
        ...(p.data.usage !== void 0 && { usage: p.data.usage }),
      }
    );
  }
  let { code: F, reason: O, kind: T, limit: A } = B(l.status, l.data);
  return (
    logFeatureBad("artifact_db_write", `batch_${O}`),
    { kind: "error", code: F, message: Me(F, T, A), reason: O }
  );
}
function Me(e, r, t) {
  if (e === "too_large")
    return `db batch write failed (${M(e)}): the batch body exceeds the server's 1 MiB request limit \u2014 nothing was written; split it into smaller write_db calls`;
  let c = S(e, "batch write", r, t);
  return jcn(e)
    ? `${c}; the batch is atomic, so nothing was written`
    : `${c}; the batch's outcome is unknown \u2014 it applies all-or-nothing and may have committed; read back before retrying`;
}
function jcn(e) {
  return e !== "store_unavailable";
}
async function X(e, r, t, c) {
  logFeatureSad("artifact_db_write", "batch_fallback_sequential");
  let o = [],
    u,
    i =
      "this server does not take batch writes yet, so the batch was applied one write at a time and is NOT atomic";
  for (let [n, { op: s, path: d, data: _ }] of r.entries()) {
    let w = `${n} ${n === 1 ? "entry" : "entries"} before it already committed`,
      h = r.length - n - 1,
      v = (F) => ({
        kind: "error",
        code: "store_unavailable",
        reason: "batch_fallback_aborted",
        message: `${i}: interrupted at writes[${n}] (write ${n + 1} of ${r.length}). The ${w}; writes[${n}] itself ${F ? "may or may not have applied" : "did not run"}; the ${h} after it did not run.`,
        fallback: "sequential",
        results: o,
        failedIndex: n,
      });
    if (t.aborted) return v(!1);
    let l;
    try {
      l = await ce(e, s, d, _, t, c);
    } catch (F) {
      if (isCancel(F)) return v(!0);
      throw F;
    }
    if (l.kind === "error")
      return {
        kind: "error",
        code: l.code,
        reason: l.reason,
        message: `${i}: writes[${n}] (write ${n + 1} of ${r.length}) failed \u2014 ${l.message.replace(P, `; writes[${n}] was not applied`)}. The ${w}; the ${h} after it did not run.`,
        fallback: "sequential",
        results: o,
        failedIndex: n,
      };
    (o.push(l.version !== void 0 ? { version: l.version } : {}),
      (u = l.usage ?? (s === "delete" ? void 0 : u)));
  }
  return {
    kind: "ok",
    results: o,
    ...(u !== void 0 && { usage: u }),
    fallback: "sequential",
  };
}
export {
  vft,
  vF,
  U9,
  kOe,
  Rft,
  QA,
  hwe,
  W7,
  lue,
  xOe,
  iGn,
  mk,
  kft,
  aGn,
  lGn,
  Bcn,
  cGn,
  uGn,
  dGn,
  pGn,
  jcn,
};

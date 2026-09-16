// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Dr, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { Ve, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, Tr, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { oe, ft } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Yy } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { le, Zt, Io, cr, nt, Cu } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { qi } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { G5, KU } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { ra } from "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { Hp, fr } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { ne } from "./chunk-rr78st95.js";
import {
  SCe,
  Am,
  bN,
  jwt,
  $1e,
  U1e,
  vK,
  _w,
  j1e,
  W1e,
  z1e,
  V1e,
  wN,
  MH,
  _oe,
  FXe,
  TN,
  Lj,
  EG,
  TCe,
  Twn,
  K1e,
  yoe,
  aqt,
  Ewn,
  $Xe,
  qk,
  Fd,
  Toe,
  cTt,
  IC,
  _Fe,
} from "./chunk-01ymf0ar.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import {
  closeSync as se,
  constants as V,
  fstatSync as ae,
  lstatSync as L,
  openSync as ie,
  read as de,
  realpathSync as ue,
} from "fs";
import { extname as ce } from "path";
import { promisify as fe } from "util";
function Ccn() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? !0;
}
var D = "image/svg+xml",
  pe = 2097152;
function m$t(e) {
  return e === D ? pe : qk;
}
var B = new Map([
    [".png", "image/png"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".gif", "image/gif"],
    [".webp", "image/webp"],
    [".svg", D],
    [".mp4", "video/mp4"],
    [".webm", "video/webm"],
    [".pdf", "application/pdf"],
    [".woff2", "font/woff2"],
    [".woff", "font/woff"],
    [".ttf", "font/ttf"],
    [".otf", "font/otf"],
    [".csv", "text/csv"],
    [".md", "text/markdown"],
    [".markdown", "text/markdown"],
    [".json", "application/json"],
    [".txt", "text/plain"],
  ]),
  q3n = Y(B.values()).flatMap((e) => S$t(e) ?? []),
  g$t = [...B.keys()].map((e) => e.slice(1)).join(", ");
function r4e(e) {
  return B.get(ce(e).toLowerCase());
}
var me = new Set([
  "text/csv",
  "text/markdown",
  "application/json",
  "text/plain",
]);
function h$t(e) {
  return e !== void 0 && me.has(e);
}
var T =
    "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again",
  X =
    "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted",
  K =
    "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first",
  _$t = "file_path must name a regular file to upload",
  vcn = "the file is empty \u2014 nothing to upload";
function Rcn(e, r) {
  return `too large: ${Math.ceil((Number(e) * 10) / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var kcn =
  "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function xcn(e) {
  let r = BigInt(e);
  return r === 0n || r === 0xffffffffffffffffn || r === 1n << 64n;
}
function M(e) {
  if (W(e)) return { kind: "missing" };
  return {
    kind: "error",
    reason: "read_error",
    message: `cannot read file_path (${A(e) ?? "unexpected error"})`,
  };
}
function j(e) {
  return `${e.dev}:${e.ino}:${e.size}:${e.mtimeNs}`;
}
function q(e) {
  return Xo(e) || Dr(e);
}
function B7(e) {
  return q(e) || Tr(e).some(q);
}
var y$t =
  "upload_asset reads only local files \u2014 a network path (UNC share, /net automount, or device-style path) cannot be uploaded; copy the file onto a local disk first";
function eV(e) {
  if (B7(e)) return { kind: "network" };
  let r;
  try {
    r = ue(e);
  } catch (s) {
    return { kind: "unresolved", error: s };
  }
  return q(r) ? { kind: "network" } : { kind: "resolved", real: r };
}
function z3n(e) {
  try {
    let r = L(e, { bigint: !0 });
    return {
      real: e,
      identity: j(r),
      ...(r.isFile() && r.nlink > 1n && { linked: !0 }),
    };
  } catch {
    return { real: e, identity: null };
  }
}
function Hcn(e, r = eV(e), s = r.kind !== "network" && bft(e)) {
  return h$t(r4e(e)) || (r.kind === "resolved" && h$t(r4e(r.real))) || s;
}
function bft(e) {
  try {
    return L(e).isSymbolicLink();
  } catch {
    return !0;
  }
}
var J = fe(de);
async function o4e(e, r, s, u) {
  let t = r,
    o =
      typeof t === "object" && t !== null && typeof t.real === "string"
        ? {
            real: t.real,
            identity: typeof t.identity === "string" ? t.identity : null,
          }
        : void 0,
    c = eV(e);
  if (c.kind === "network")
    return { kind: "error", reason: "network", message: y$t };
  if (c.kind === "unresolved") {
    if (o !== void 0 && o.identity !== null)
      return { kind: "error", reason: "changed", message: T };
    let g = Tr(e).slice(1).map(s);
    return g.includes("deny")
      ? { kind: "error", reason: "read_denied", message: X }
      : g.some((E) => E !== "allow")
        ? { kind: "error", reason: "via_link", message: K }
        : M(c.error);
  }
  let { real: i } = c,
    l = i === e ? void 0 : s(i);
  if (l === "deny") return { kind: "error", reason: "read_denied", message: X };
  if (o !== void 0) {
    if (i !== o.real) return { kind: "error", reason: "changed", message: T };
  } else if (l !== void 0 && l !== "allow")
    return { kind: "error", reason: "via_link", message: K };
  let d;
  try {
    d = L(i, { bigint: !0 });
  } catch (g) {
    return o !== void 0 && W(g)
      ? { kind: "error", reason: "changed", message: T }
      : M(g);
  }
  if (d.isSymbolicLink())
    return { kind: "error", reason: "changed", message: T };
  if (!d.isFile()) return { kind: "error", reason: "not_a_file", message: _$t };
  if (o === void 0 && d.nlink > 1n)
    return {
      kind: "error",
      reason: "hard_link",
      message:
        "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy",
    };
  let x = 536870912 | V.O_NONBLOCK,
    v;
  try {
    v = ie(i, V.O_RDONLY | x);
  } catch (g) {
    if (A(g) === "ELOOP")
      return { kind: "error", reason: "changed", message: T };
    return M(g);
  }
  try {
    let g = ae(v, { bigint: !0 });
    if (!g.isFile())
      return { kind: "error", reason: "not_a_file", message: _$t };
    if (xcn(g.ino))
      return { kind: "error", reason: "no_identity", message: kcn };
    if (j(g) !== (o !== void 0 ? o.identity : j(d)))
      return { kind: "error", reason: "changed", message: T };
    try {
      let h = eV(e);
      if (h.kind !== "resolved" || h.real !== i)
        return { kind: "error", reason: "changed", message: T };
      let k = L(i, { bigint: !0 });
      if (k.dev !== g.dev || k.ino !== g.ino)
        return { kind: "error", reason: "changed", message: T };
    } catch {
      return { kind: "error", reason: "changed", message: T };
    }
    let E = Number(g.size);
    if (E === 0 || E > u)
      return {
        kind: "error",
        reason: "size",
        message: E === 0 ? vcn : Rcn(E, u),
      };
    let C = Buffer.allocUnsafe(E),
      p = 0;
    while (p < E) {
      let { bytesRead: h } = await J(v, C, p, E - p, p);
      if (h === 0) break;
      p += h;
    }
    let { bytesRead: _ } = await J(v, Buffer.alloc(1), 0, 1, E);
    if (p !== E || _ !== 0)
      return { kind: "error", reason: "changed", message: T };
    return { kind: "ok", bytes: C };
  } catch (g) {
    return M(g);
  } finally {
    se(v);
  }
}
var _e = new Set([
    "invalid_request",
    "too_large",
    "unsupported_type",
    "quota_or_state",
    "rate_limited",
    "capability_disabled",
    "store_unavailable",
    "upstream_error",
    "credential_rejected",
    "not_found",
    "asset_not_found",
    "not_copyable",
  ]),
  bte = /^\/?_blob\/[0-9a-f]{32}$/;
function H(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var mI = /^[0-9a-f]{64}$/,
  he = 50,
  wft = 40,
  N9 = /^[A-Za-z0-9_=-]{1,4096}$/,
  Icn = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/,
  Nv = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/,
  F9 = 10,
  te = m(() =>
    nt({
      opaque_id: le().regex(Hp),
      url: le()
        .optional()
        .catch(void 0),
      size_bytes: Zt().int().nonnegative(),
      content_type: le().regex(Nv),
      sha256: le().regex(mI).optional(),
    }),
  ),
  ge = m(() =>
    nt({
      assets: cr(
        nt({
          opaque_id: le().regex(Hp),
          url: le()
            .optional()
            .catch(void 0),
          content_type: le().regex(Nv).max(wft),
          size_bytes: Zt().int().nonnegative().max(qk),
          sha256: le().regex(mI).optional(),
          created_at: le().regex(Icn).max(wft),
        }),
      ).max(1000),
      usage: nt({
        files: Zt().int().nonnegative(),
        bytes: Zt().int().nonnegative(),
        max_files: Zt().int().nonnegative(),
        max_bytes: Zt().int().nonnegative(),
      }),
      next: le()
        .regex(N9)
        .or(Cu(""))
        .nullish()
        .transform((e) => e || void 0),
      cowritten: Cu(!0)
        .optional()
        .catch(void 0),
    }),
  ),
  ye = m(() => nt({ deleted: Io() })),
  be = m(() => nt({ error: nt({ code: le(), message: le().optional() }) })),
  Ae = m(() => nt({ error: le(), reason: le() })),
  Se = 20000,
  G = 30000,
  we = 90000;
function ke(e) {
  return `/api/frame/blob/${e}/agent-upload`;
}
function re(e) {
  return `/api/frame/blob/${e}/agent-list`;
}
function Ee(e, r) {
  return `/api/frame/blob/${e}/${r}/agent-delete`;
}
function ve(e) {
  return `/api/frame/blob/${e}/agent-copy`;
}
function z(e, r) {
  let s = be().safeParse(r);
  if (s.success) {
    let u = s.data.error.code;
    if (_e.has(u)) {
      let t = s.data.error.message && U(s.data.error.message);
      return { code: u, reason: u, ...(t && { detail: t }) };
    }
    return { code: "upstream_error", reason: "unknown_code" };
  }
  if (e === 403 || e === 503) {
    let u = Ae().safeParse(r);
    if (u.success)
      return {
        code: "policy_denied",
        reason: "policy_denied",
        detail: U(u.data.error),
      };
  }
  if (e === 403) {
    if (typeof r === "string" && r.trim() === "not a writer")
      return { code: "not_writer", reason: "not_writer" };
    if (typeof r === "string" && /^\s*</.test(r))
      return { code: "upstream_error", reason: "http_403_page" };
    return { code: "credential_rejected", reason: "http_403" };
  }
  if (e === 404)
    return typeof r === "string" && r.trim() === "not found"
      ? { code: "not_found", reason: "http_404" }
      : {
          code: "store_unavailable",
          reason: "unrouted",
          detail:
            "this asset route is not served on this path yet (an older deployment, or a cloud session whose gateway does not relay it) \u2014 nothing changed; retry later",
        };
  if (e === 401) return { code: "upstream_auth", reason: "http_401" };
  if (e === 409) return { code: "quota_or_state", reason: "http_409" };
  if (e === 413) return { code: "too_large", reason: "http_413" };
  if (e === 415) return { code: "unsupported_type", reason: "http_415" };
  if (e === 429) return { code: "rate_limited", reason: "http_429" };
  if (e === 502 || e === 503 || e === 504)
    return { code: "store_unavailable", reason: `http_${e}` };
  return { code: "upstream_error", reason: `http_${e}` };
}
function U(e) {
  return oe(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function xe(e, r, s = "upload", u) {
  let t = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${t}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${t}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${t}: ${r ?? `only these file types are accepted: ${g$t}`}`;
    case "quota_or_state":
      return `${t}: ${r ?? (s === "upload" || s === "copy" ? "the Artifact cannot take uploads right now \u2014 it is a live document, unpublished, retired, being deleted, or over its asset storage quota" : "the Artifact has no asset store right now \u2014 it is a live document, unpublished, retired, or being deleted")}`;
    case "rate_limited":
      return `${t}: calling too often \u2014 wait${r ? ` ${r}` : ""} before retrying, and never loop`;
    case "upstream_auth":
      return `${t}: could not authenticate \u2014 the session's credential may need a refresh; try again`;
    case "capability_disabled":
      return `${t}: the Artifact's published version does not declare the assets capability \u2014 republish it with assets: {} added to its declared capabilities, then retry`;
    case "store_unavailable":
      return `${t}: ${r ?? `the asset store is unavailable right now \u2014 retry once after a short wait${s === "upload" ? " (an upload that timed out upstream may already be stored; a duplicate costs only quota)" : ""}`}`;
    case "upstream_error":
      return `${t}: unexpected answer from the server${r ? ` (${r})` : ""}`;
    case "not_found":
      return s === "copy" && u === "not_found"
        ? `${t}: the SOURCE Artifact (from_url) does not exist, is not one this account can open, is in another organization, or cannot be copied from \u2014 the cases are deliberately indistinguishable; check from_url with action "list", scope "shared"`
        : `${t}: no such Artifact, or artifact assets are not available to this account or Artifact \u2014 the cases are deliberately indistinguishable; check the url with action "list"`;
    case "asset_not_found":
      return `${t}: ${r ?? "the source Artifact holds no asset with one of the given ids"} \u2014 run action "list_assets" on from_url for its current ids; nothing was copied`;
    case "not_copyable":
      return `${t}: ${r ?? "this source cannot be copied from"}; nothing was copied`;
    case "not_writer":
      return `${t}: this account can open the Artifact but not edit it \u2014 only writers can ${s === "copy" ? "copy assets into it" : `${s} assets`}`;
    case "credential_rejected":
      return `${t}: the server refused this session's credential at the asset door \u2014 not an access or existence answer; report this as a client/server integration fault${r ? ` (${r})` : ""}`;
    case "policy_denied":
      return `${t}: ${r ?? "blocked by the organization's artifact policy"}`;
    case "unavailable_to_account":
      return `${t}: artifact assets are not available to this account`;
  }
}
function P(e, r) {
  return (s, u, t) => (
    e(u),
    { kind: "error", code: s, message: xe(s, t, r, u), reason: u }
  );
}
var Re =
  "asset uploads, listing, and deletes from an agent session (one with no user account) aren't enabled on the server for this organization; retrying from here will not help";
async function N(e, r) {
  let { verb: s, route: u, body: t, contentType: o, marks: c, fail: i } = e,
    l = (h) => ({ replied: !1, failure: h }),
    d = s !== "copy" && FXe();
  if (d) c.agent_direct = !0;
  let x = !d && $Xe() && !TN(wN),
    v = (!d && _oe()) || x,
    g = () =>
      l(
        i(
          "store_unavailable",
          "relay_unavailable",
          "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help",
        ),
      );
  if (!v && !d && a.CLAUDE_CODE_REMOTE) return g();
  if (v && !MH())
    return l(
      i(
        "store_unavailable",
        "relay_not_served",
        "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help",
      ),
    );
  let E = ne();
  if (!v && !E.assetsOnRoster) {
    let h = await Toe({
      timeoutMs: 5000,
      signal: r,
      credentials: e.credentials,
    });
    if ("err" in h) c[`roster_${h.cause}`] = !0;
    else if (!h.capabilities.includes("assets"))
      return l(i("unavailable_to_account", "roster_no_assets"));
    else E.assetsOnRoster = !0;
  }
  let C = {
      maxRedirects: 0,
      headers: { ...Fd(), "Content-Type": o, Accept: "application/json" },
      ...(e.verb === "upload"
        ? {
            streamUpload: {
              tailFloorMs: () => we,
              onSettled: (h) => {
                if (h.stalled) c.stalled = !0;
              },
            },
          }
        : { timeout: e.timeoutMs }),
      ...(e.maxBodyLength !== void 0 && { maxBodyLength: e.maxBodyLength }),
      maxContentLength: 262144,
      validateStatus: () => !0,
      signal: r,
    },
    p = async () =>
      v
        ? (await aqt("POST", u, t, C, wN)).res
        : ht.post(u, t, {
            ...C,
            host: "frame",
            auth: "claude-ai-oauth",
            refreshOAuth: !0,
            credentials: e.credentials,
          }),
    _;
  try {
    if (x && e.verb === "upload" && !TCe(wN)) {
      let k;
      try {
        k = (
          await aqt(
            "POST",
            e.probeRoute,
            b({ limit: 1 }),
            {
              maxRedirects: 0,
              headers: {
                ...Fd(),
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              timeout: G,
              maxContentLength: 262144,
              validateStatus: () => !0,
              signal: r,
            },
            wN,
          )
        ).res;
      } catch (F) {
        if (qi(F) || F instanceof Ve) throw F;
        return (
          Lj(wN, !0),
          l(
            i(
              "store_unavailable",
              "probe_request_error",
              "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe",
            ),
          )
        );
      }
      let R = Ewn(k);
      if (R.refused) return (Lj(wN), g());
      if (!R.vouched) {
        if (!k.ok || k.status >= 500 || k.status === 499) Lj(wN, !0);
        return l(
          i(
            "store_unavailable",
            "probe_unvouched",
            "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later",
          ),
        );
      }
      EG(wN);
    }
    let h = (k) => {
      if (!x) return !1;
      let R = Ewn(k);
      if (R.refused && !(k.ok && k.status === 413))
        return (Lj(wN), Twn(wN), !0);
      if (R.vouched) EG(wN);
      else if (!TCe(wN) && (!k.ok || k.status >= 500 || k.status === 499))
        Lj(wN, !0);
      return !1;
    };
    if (((_ = await p()), h(_))) return g();
    if (
      _.ok &&
      (_.status === 429 || _.status === 503) &&
      z(_.status, _.data).code !== "policy_denied"
    ) {
      let k = _.response.headers?.["retry-after"],
        R = Yy(typeof k === "string" ? k : void 0);
      if (R !== void 0 && R <= Se) {
        if ((await Z(R, r), r.aborted)) throw new Ve();
        if (((c.retried = !0), (_ = await p()), h(_))) return g();
      }
    }
  } catch (h) {
    if (qi(h) || h instanceof Ve) throw h;
    if (x && !TCe(wN)) Lj(wN, !0);
    if (KU(h) !== void 0)
      return l(
        i(
          "store_unavailable",
          "proxy_refused",
          "a network proxy refused the connection; nothing was sent \u2014 one retry is safe",
        ),
      );
    return l(
      i(
        "store_unavailable",
        "request_error",
        s === "upload"
          ? "the request failed in transit or timed out \u2014 a timed-out upload may already be stored; one retry is safe (a duplicate costs only quota)"
          : s === "copy"
            ? 'the request failed in transit or timed out \u2014 a timed-out copy may already have landed; run action "list_assets" on the destination before retrying, or the assets may be copied twice'
            : "the request failed in transit or timed out \u2014 one retry is safe",
      ),
    );
  }
  if (!_.ok)
    return l({
      ...i("store_unavailable", _.reason.replace(/-/g, "_")),
      message:
        _.reason === "no-auth"
          ? v
            ? SCe(_.detail)
            : Am(_.detail)
          : `asset ${s} unavailable: ${_.reason}`,
    });
  if (
    d &&
    _.status === 403 &&
    z(_.status, _.data).reason === "credential_rejected"
  )
    return l({
      ...i("credential_rejected", "agent_not_enabled"),
      message: `asset ${s} failed (credential_rejected): ${Re}`,
    });
  return {
    replied: !0,
    status: _.status,
    data: _.data,
    retryAfter: _.response.headers?.["retry-after"],
  };
}
function I(e, r) {
  let { code: s, reason: u, detail: t } = z(e.status, e.data),
    o = Yy(e.retryAfter);
  return r(
    s,
    u,
    s === "rate_limited"
      ? o !== void 0
        ? `${Math.max(1, Math.ceil(o / 1000))}s`
        : void 0
      : s === "upstream_error" && t === void 0
        ? `HTTP ${e.status}`
        : t,
  );
}
async function V3n(e, r) {
  let { slug: s, bytes: u, contentType: t } = e,
    o = {},
    c = P((x) => f("artifact_asset_upload", x, o), "upload");
  if (!fr.test(s))
    return c("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = m$t(t);
  if (u.length === 0 || u.length > i)
    return u.length === 0
      ? c("invalid_request", "size", "the file is empty")
      : c(
          "too_large",
          "size",
          t === D
            ? `the SVG exceeds the ${i >> 20} MiB limit for SVG assets \u2014 simplify or rasterize it`
            : `the file exceeds the ${i >> 20} MiB per-asset limit \u2014 compress or split it`,
        );
  let l = await N(
    {
      verb: "upload",
      route: ke(s),
      probeRoute: re(s),
      body: u,
      contentType: t,
      maxBodyLength: qk + 4096,
      marks: o,
      fail: c,
      credentials: e.credentials,
    },
    r,
  );
  if (!l.replied) return l.failure;
  if (l.status !== 200) return I(l, c);
  let d = te().safeParse(l.data);
  if (
    !d.success ||
    d.data.content_type !== t ||
    (t === D
      ? d.data.size_bytes === 0 || d.data.size_bytes > qk
      : d.data.size_bytes !== u.length)
  )
    return c(
      "upstream_error",
      "malformed_echo",
      "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it",
    );
  return (
    (ne().assetsOnRoster = !0),
    y("artifact_asset_upload", { ...o, size_bytes: d.data.size_bytes }),
    {
      kind: "ok",
      id: d.data.opaque_id,
      url: H(d.data.opaque_id, d.data.url),
      sizeBytes: d.data.size_bytes,
      contentType: d.data.content_type,
      ...(d.data.sha256 !== void 0 && { sha256: d.data.sha256 }),
    }
  );
}
async function K3n(e, r) {
  let { slug: s, after: u } = e,
    t = {},
    o = P((l) => f("artifact_asset_list", l, t), "list");
  if (!fr.test(s))
    return o("invalid_request", "invalid_slug", "not a valid artifact id");
  if (u !== void 0 && !N9.test(u))
    return o(
      "invalid_request",
      "invalid_cursor",
      "after must be the next value from an earlier list_assets result",
    );
  let c = await N(
    {
      verb: "list",
      route: re(s),
      body: b({ ...(u !== void 0 && { after: u }), limit: he }),
      contentType: "application/json",
      timeoutMs: G,
      marks: t,
      fail: o,
      credentials: e.credentials,
    },
    r,
  );
  if (!c.replied) return c.failure;
  if (c.status !== 200) return I(c, o);
  let i = ge().safeParse(c.data);
  if (!i.success)
    return o("upstream_error", "malformed_reply", "the listing was unreadable");
  return (
    (ne().assetsOnRoster = !0),
    cTt(s, i.data.cowritten),
    y("artifact_asset_list", { ...t, count: i.data.assets.length }),
    {
      kind: "ok",
      assets: i.data.assets.map((l) => ({
        id: l.opaque_id,
        url: H(l.opaque_id, l.url),
        contentType: l.content_type,
        sizeBytes: l.size_bytes,
        ...(l.sha256 !== void 0 && { sha256: l.sha256 }),
        createdAt: U(l.created_at),
      })),
      usage: {
        files: i.data.usage.files,
        bytes: i.data.usage.bytes,
        maxFiles: i.data.usage.max_files,
        maxBytes: i.data.usage.max_bytes,
      },
      ...(i.data.next !== void 0 && { next: i.data.next }),
      ...(i.data.cowritten && { cowritten: !0 }),
    }
  );
}
async function X3n(e, r) {
  let { slug: s, id: u } = e,
    t = {},
    o = P((l) => f("artifact_asset_delete", l, t), "delete");
  if (!fr.test(s))
    return o("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!Hp.test(u))
    return o("invalid_request", "invalid_id", "not a valid asset id");
  let c = await N(
    {
      verb: "delete",
      route: Ee(s, u),
      body: "{}",
      contentType: "application/json",
      timeoutMs: G,
      marks: t,
      fail: o,
      credentials: e.credentials,
    },
    r,
  );
  if (!c.replied) return c.failure;
  if (c.status !== 200) return I(c, o);
  let i = ye().safeParse(c.data);
  if (!i.success)
    return o(
      "upstream_error",
      "malformed_reply",
      "the delete may have succeeded but the reply was unreadable \u2014 list the assets to check",
    );
  return (
    (ne().assetsOnRoster = !0),
    y("artifact_asset_delete", { ...t, deleted: i.data.deleted }),
    { kind: "ok", deleted: i.data.deleted }
  );
}
var Te = m(() =>
    nt({ assets: cr(te().extend({ from_id: le().regex(Hp) })).max(F9) }),
  ),
  Fe = 120000;
async function Y3n(e, r) {
  let { slug: s, fromSlug: u, ids: t } = e,
    o = {},
    c = P((d) => f("artifact_asset_copy", d, o), "copy");
  if (!fr.test(s) || !fr.test(u))
    return c("invalid_request", "invalid_slug", "not a valid artifact id");
  if (s === u)
    return c(
      "invalid_request",
      "same_artifact",
      "from_url names the destination itself \u2014 its assets are already there",
    );
  if (
    t.length === 0 ||
    t.length > F9 ||
    !t.every((d) => Hp.test(d)) ||
    new Set(t).size !== t.length
  )
    return c(
      "invalid_request",
      "invalid_ids",
      `asset_ids must be 1\u2013${F9} distinct asset ids`,
    );
  let i = await N(
    {
      verb: "copy",
      route: ve(s),
      body: b({ from: u, ids: t }),
      contentType: "application/json",
      timeoutMs: Fe,
      marks: o,
      fail: c,
      credentials: e.credentials,
    },
    r,
  );
  if (!i.replied) return i.failure;
  if (i.status !== 200) return I(i, c);
  let l = Te().safeParse(i.data);
  if (
    !l.success ||
    l.data.assets.length !== t.length ||
    l.data.assets.some((d, x) => d.from_id !== t[x])
  )
    return c(
      "upstream_error",
      "malformed_reply",
      'the copy probably succeeded but the reply was unreadable \u2014 run action "list_assets" on the destination before retrying, or the assets may be copied twice',
    );
  return (
    (ne().assetsOnRoster = !0),
    y("artifact_asset_copy", { ...o, count: t.length }),
    {
      kind: "ok",
      assets: l.data.assets.map((d) => ({
        fromId: d.from_id,
        id: d.opaque_id,
        url: H(d.opaque_id, d.url),
        sizeBytes: d.size_bytes,
        contentType: d.content_type,
        ...(d.sha256 !== void 0 && { sha256: d.sha256 }),
      })),
    }
  );
}
var Q = 90000;
function S$t(e) {
  for (let [r, s] of B) if (s === e) return r;
  return;
}
var ee =
  "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function J3n(e, r, s, u) {
  let t = (w, S) => (
    f("artifact_asset_read", w),
    { kind: "error", message: `asset read failed: ${S}`, reason: w }
  );
  if (!fr.test(e.slug)) return t("invalid_slug", "not a valid artifact id");
  if (!Hp.test(r)) return t("invalid_id", "not a valid asset id");
  let o = _oe() || ($Xe() && !TN(_w));
  if (!o && a.CLAUDE_CODE_REMOTE) return t("relay_unavailable", ee);
  let c = await IC(e, "artifact_asset_read", s, {
    gatePublicRead: !1,
    credentials: u,
  });
  if (c.err !== null)
    return {
      kind: "error",
      message: c.err.replace(/^artifact read/, "asset read"),
      reason: c.status === 404 ? "boot_404" : "boot",
    };
  let { ver: i, assetToken: l } = c;
  if (l === void 0)
    return t(
      "tokenless",
      "this artifact is served to you as a public (non-member) reader, and assets are not readable that way",
    );
  let d = `/_f/${i}/_blob/${r}`,
    x = `frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    v = `${e.slug}.${x}`,
    g = () => (
      ne().contentHostEgressDenied.add(e.env),
      t(
        "egress_blocked",
        `this environment's network allowlist blocks ${v}, so the asset cannot be fetched (access to the artifact itself is fine). To allow it, add *.${x} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`,
      )
    ),
    E = (w, S) => (
      n(`[artifact] asset fetch: egress proxy denied (${S})`),
      t(
        "egress_denied",
        `artifact content fetch refused by the environment's egress proxy (${G5(w)})`,
      )
    ),
    C = (w, S) => {
      if (S !== void 0) n(`[artifact] asset fetch: proxy refused, marker ${S}`);
      return t(
        "proxy_refused",
        `the proxy refused the connection to the artifact's content host (${G5(w)})`,
      );
    },
    p;
  try {
    if (o) {
      let w = await ht.get(j1e(e.slug, d), {
        host: "ccr-gateway",
        auth: "session-jwt",
        headers: W1e(l),
        responseType: "arraybuffer",
        timeout: Q,
        maxRedirects: 0,
        maxContentLength: qk + 1,
        validateStatus: () => !0,
        signal: s,
      });
      if (!w.ok)
        return t(
          w.reason.replace(/-/g, "_"),
          w.reason === "no-auth"
            ? SCe(w.detail)
            : `artifact content is unreachable from this session (${w.reason})`,
        );
      p = { status: w.status, headers: w.response.headers, data: w.data };
    } else {
      let S = await ra.get(
        `${`https://${v}`}${d}?__frame_t=${encodeURIComponent(l)}`,
        {
          signal: s,
          timeout: Q,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: qk + 1,
          validateStatus: () => !0,
          ...void 0,
        },
      );
      if (bN(S.status, S.headers)) return g();
      let O = vK(S.headers);
      if (O !== void 0 && (S.status < 200 || S.status >= 300))
        return E(S.status, O);
      (ne().contentHostEgressDenied.delete(e.env),
        (p = { status: S.status, headers: S.headers, data: S.data }));
    }
  } catch (w) {
    if (qi(w)) throw w;
    if (o) yoe();
    let S = o ? void 0 : KU(w);
    if (S !== void 0) {
      if (bN(S.connectStatus, S.headers)) return g();
      let O = vK(S.headers);
      if (O !== void 0) return E(S.connectStatus, O);
      return C(S.connectStatus, U1e(S.headers));
    }
    return t(
      "request_error",
      `the content fetch failed in transit, timed out, or exceeded the ${qk >> 20} MiB limit`,
    );
  }
  if (o && K1e(p.status)) return t("relay_unavailable", ee);
  if (o && V1e(p.status, p.data))
    return t("network_off", `${z1e}; retrying from here will not help`);
  if (o) yoe(p.status);
  if (p.status === 404)
    return t(
      "http_404",
      o
        ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"`
        : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"',
    );
  let _ = o
    ? void 0
    : jwt({
        status: p.status,
        headers: p.headers,
        data: p.data,
        redact: (w) => _Fe(w, l),
        label: "[artifact] asset fetch",
      });
  if (_ !== void 0) return t(_, $1e[_]);
  if (p.status === 401 || p.status === 403)
    return t(
      `http_${p.status}`,
      o
        ? "the cloud session's artifact mount refused the read \u2014 asset reads may not be enabled for this session, or the artifact was unshared or taken down"
        : "access to the artifact content was refused \u2014 the artifact may have been unshared or taken down since the id was listed",
    );
  if (p.status !== 200)
    return t(
      `http_${p.status}`,
      `unexpected answer from the content host (HTTP ${p.status})`,
    );
  if (o) EG(_w);
  let h = p.headers,
    k = o
      ? (h?.["x-frame-asset-content-type"] ?? h?.["content-type"])
      : h?.["content-type"],
    R = typeof k === "string" ? ft(k, ";").trim().toLowerCase() : "";
  if (S$t(R) === void 0)
    return t(
      "unexpected_type",
      "the content host served a type this tool does not save",
    );
  let F = Buffer.from(p.data ?? new ArrayBuffer(0));
  if (F.length === 0 || F.length > qk)
    return t(
      "size",
      F.length === 0
        ? "the asset is empty"
        : `the asset exceeds the ${qk >> 20} MiB limit`,
    );
  return { kind: "ok", bytes: F, contentType: R, relay: o === !0 };
}
export {
  Ccn,
  m$t,
  q3n,
  g$t,
  r4e,
  h$t,
  _$t,
  vcn,
  Rcn,
  kcn,
  xcn,
  B7,
  y$t,
  eV,
  z3n,
  Hcn,
  bft,
  o4e,
  bte,
  mI,
  wft,
  N9,
  Icn,
  Nv,
  F9,
  V3n,
  K3n,
  X3n,
  Y3n,
  S$t,
  J3n,
};

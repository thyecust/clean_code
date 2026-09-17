// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Dr, Xo } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { Ve, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, expandPathAliases, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits, beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { parseRetryAfterHeader } from "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { le, Zt, Io, cr, nt, Cu } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { isCancel } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { G5, KU } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { externalHttp } from "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import { ASSET_ID_RE, ARTIFACT_SLUG_RE } from "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import { getArtifactState } from "./chunk-rr78st95.js";
import {
  formatNoGatewayCredentialMessage,
  formatNotAuthenticatedMessage,
  isProxyAllowlistBlocked,
  classifySandboxProxyDenial,
  SANDBOX_PROXY_DENIAL_MESSAGES,
  getProxyErrorHeaderValue,
  getDenyReasonHeader,
  ARTIFACT_MOUNT_FAMILY,
  buildArtifactFramePath,
  buildFrameAssetTokenHeader,
  ARTIFACT_NETWORK_OFF_MESSAGE,
  isArtifactNetworkOffResponse,
  FRAME_FAMILY_BLOBS,
  canRelayFrameFamily,
  isHostedFrameRelayEnabled,
  isArtifactAgentDirectEnabled,
  isFrameFamilyDeclined,
  declineFrameFamily,
  markFrameFamilyServed,
  isFrameFamilyVouched,
  unvouchFrameFamily,
  shouldAbandonFrameRelay,
  markArtifactRelayHopFailed,
  requestViaFrameTunnel,
  classifyFrameRelayResponse,
  isByocFrameRelayEnabled,
  MAX_ARTIFACT_FILE_BYTES,
  buildFrameHeaders,
  resolveContract,
  foldBootCowritten,
  readArtifactBoot,
  redactFrameToken,
} from "./chunk-01ymf0ar.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import {
  closeSync,
  constants,
  fstatSync,
  lstatSync,
  openSync,
  read as de,
  realpathSync,
} from "fs";
import { extname } from "path";
import { promisify } from "util";
function isArtifactAssetsEnabled() {
  return a.CLAUDE_CODE_ARTIFACT_ASSETS ?? !0;
}
var D = "image/svg+xml",
  pe = 2097152;
function getMaxAssetBytesForType(e) {
  return e === D ? pe : MAX_ARTIFACT_FILE_BYTES;
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
  ASSET_FILE_EXTENSIONS = dedupe(B.values()).flatMap((e) => getAssetFileExtensionForContentType(e) ?? []),
  SUPPORTED_ASSET_TYPE_LIST = [...B.keys()].map((e) => e.slice(1)).join(", ");
function getAssetContentTypeForPath(e) {
  return B.get(extname(e).toLowerCase());
}
var me = new Set([
  "text/csv",
  "text/markdown",
  "application/json",
  "text/plain",
]);
function isTextAssetContentType(e) {
  return e !== void 0 && me.has(e);
}
var T =
    "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the upload so it is checked again",
  X =
    "reading where file_path resolves is blocked by a Read permission rule \u2014 the upload was not attempted",
  K =
    "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 upload the file by its resolved path, or copy it under the working directory first",
  NOT_A_FILE_MESSAGE = "file_path must name a regular file to upload",
  EMPTY_FILE_MESSAGE = "the file is empty \u2014 nothing to upload";
function formatTooLargeMessage(e, r) {
  return `too large: ${Math.ceil((Number(e) * 10) / 1024 / 1024) / 10}MB (max ${r / 1024 / 1024}MB)`;
}
var NO_FILE_IDENTITY_MESSAGE =
  "file_path is on a volume that reports no usable file identity (some network, FUSE, and virtual-disk mounts), so the approved file cannot be told apart from a replacement \u2014 copy it to an ordinary local directory and upload the copy";
function isUnusableInode(e) {
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
function isNetworkPath(e) {
  return q(e) || expandPathAliases(e).some(q);
}
var NETWORK_PATH_MESSAGE =
  "upload_asset reads only local files \u2014 a network path (UNC share, /net automount, or device-style path) cannot be uploaded; copy the file onto a local disk first";
function resolveLocalFilePath(e) {
  if (isNetworkPath(e)) return { kind: "network" };
  let r;
  try {
    r = realpathSync(e);
  } catch (s) {
    return { kind: "unresolved", error: s };
  }
  return q(r) ? { kind: "network" } : { kind: "resolved", real: r };
}
function getFileIdentityStamp(e) {
  try {
    let r = lstatSync(e, { bigint: !0 });
    return {
      real: e,
      identity: j(r),
      ...(r.isFile() && r.nlink > 1n && { linked: !0 }),
    };
  } catch {
    return { real: e, identity: null };
  }
}
function isTextOrLinkedAssetFile(e, r = resolveLocalFilePath(e), s = r.kind !== "network" && isSymlink(e)) {
  return isTextAssetContentType(getAssetContentTypeForPath(e)) || (r.kind === "resolved" && isTextAssetContentType(getAssetContentTypeForPath(r.real))) || s;
}
function isSymlink(e) {
  try {
    return lstatSync(e).isSymbolicLink();
  } catch {
    return !0;
  }
}
var J = promisify(de);
async function readApprovedLocalFile(e, r, s, u) {
  let t = r,
    o =
      typeof t === "object" && t !== null && typeof t.real === "string"
        ? {
            real: t.real,
            identity: typeof t.identity === "string" ? t.identity : null,
          }
        : void 0,
    c = resolveLocalFilePath(e);
  if (c.kind === "network")
    return { kind: "error", reason: "network", message: NETWORK_PATH_MESSAGE };
  if (c.kind === "unresolved") {
    if (o !== void 0 && o.identity !== null)
      return { kind: "error", reason: "changed", message: T };
    let g = expandPathAliases(e).slice(1).map(s);
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
    d = lstatSync(i, { bigint: !0 });
  } catch (g) {
    return o !== void 0 && W(g)
      ? { kind: "error", reason: "changed", message: T }
      : M(g);
  }
  if (d.isSymbolicLink())
    return { kind: "error", reason: "changed", message: T };
  if (!d.isFile()) return { kind: "error", reason: "not_a_file", message: NOT_A_FILE_MESSAGE };
  if (o === void 0 && d.nlink > 1n)
    return {
      kind: "error",
      reason: "hard_link",
      message:
        "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and upload the copy",
    };
  let x = 536870912 | constants.O_NONBLOCK,
    v;
  try {
    v = openSync(i, constants.O_RDONLY | x);
  } catch (g) {
    if (A(g) === "ELOOP")
      return { kind: "error", reason: "changed", message: T };
    return M(g);
  }
  try {
    let g = fstatSync(v, { bigint: !0 });
    if (!g.isFile())
      return { kind: "error", reason: "not_a_file", message: NOT_A_FILE_MESSAGE };
    if (isUnusableInode(g.ino))
      return { kind: "error", reason: "no_identity", message: NO_FILE_IDENTITY_MESSAGE };
    if (j(g) !== (o !== void 0 ? o.identity : j(d)))
      return { kind: "error", reason: "changed", message: T };
    try {
      let h = resolveLocalFilePath(e);
      if (h.kind !== "resolved" || h.real !== i)
        return { kind: "error", reason: "changed", message: T };
      let k = lstatSync(i, { bigint: !0 });
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
        message: E === 0 ? EMPTY_FILE_MESSAGE : formatTooLargeMessage(E, u),
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
    closeSync(v);
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
  BLOB_URL_PATTERN = /^\/?_blob\/[0-9a-f]{32}$/;
function H(e, r) {
  return r === `_blob/${e}` || r === `/_blob/${e}` ? r : `/_blob/${e}`;
}
var SHA256_HEX_PATTERN = /^[0-9a-f]{64}$/,
  he = 50,
  MAX_ASSET_METADATA_LENGTH = 40,
  LIST_CURSOR_PATTERN = /^[A-Za-z0-9_=-]{1,4096}$/,
  ISO_TIMESTAMP_PATTERN = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/,
  CONTENT_TYPE_PATTERN = /^[a-z0-9]{1,24}\/[a-z0-9.+-]{1,80}$/,
  MAX_COPY_ASSET_IDS = 10,
  te = createLazyValue(() =>
    nt({
      opaque_id: le().regex(ASSET_ID_RE),
      url: le()
        .optional()
        .catch(void 0),
      size_bytes: Zt().int().nonnegative(),
      content_type: le().regex(CONTENT_TYPE_PATTERN),
      sha256: le().regex(SHA256_HEX_PATTERN).optional(),
    }),
  ),
  ge = createLazyValue(() =>
    nt({
      assets: cr(
        nt({
          opaque_id: le().regex(ASSET_ID_RE),
          url: le()
            .optional()
            .catch(void 0),
          content_type: le().regex(CONTENT_TYPE_PATTERN).max(MAX_ASSET_METADATA_LENGTH),
          size_bytes: Zt().int().nonnegative().max(MAX_ARTIFACT_FILE_BYTES),
          sha256: le().regex(SHA256_HEX_PATTERN).optional(),
          created_at: le().regex(ISO_TIMESTAMP_PATTERN).max(MAX_ASSET_METADATA_LENGTH),
        }),
      ).max(1000),
      usage: nt({
        files: Zt().int().nonnegative(),
        bytes: Zt().int().nonnegative(),
        max_files: Zt().int().nonnegative(),
        max_bytes: Zt().int().nonnegative(),
      }),
      next: le()
        .regex(LIST_CURSOR_PATTERN)
        .or(Cu(""))
        .nullish()
        .transform((e) => e || void 0),
      cowritten: Cu(!0)
        .optional()
        .catch(void 0),
    }),
  ),
  ye = createLazyValue(() => nt({ deleted: Io() })),
  be = createLazyValue(() => nt({ error: nt({ code: le(), message: le().optional() }) })),
  Ae = createLazyValue(() => nt({ error: le(), reason: le() })),
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
  return truncateToCodeUnits(e.replace(/[\p{Cc}\p{Cf}\p{Co}]/gu, " "), 200);
}
function xe(e, r, s = "upload", u) {
  let t = `asset ${s} failed (${e})`;
  switch (e) {
    case "invalid_request":
      return `${t}: ${r ?? "the server could not accept the request as shaped"}`;
    case "too_large":
      return `${t}: ${r ?? "rejected as too large by the server or an intermediary although under the client limit \u2014 compress or split it"}`;
    case "unsupported_type":
      return `${t}: ${r ?? `only these file types are accepted: ${SUPPORTED_ASSET_TYPE_LIST}`}`;
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
    d = s !== "copy" && isArtifactAgentDirectEnabled();
  if (d) c.agent_direct = !0;
  let x = !d && isByocFrameRelayEnabled() && !isFrameFamilyDeclined(FRAME_FAMILY_BLOBS),
    v = (!d && isHostedFrameRelayEnabled()) || x,
    g = () =>
      l(
        i(
          "store_unavailable",
          "relay_unavailable",
          "asset uploads, copies, listing, and deletes run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help",
        ),
      );
  if (!v && !d && a.CLAUDE_CODE_REMOTE) return g();
  if (v && !canRelayFrameFamily())
    return l(
      i(
        "store_unavailable",
        "relay_not_served",
        "asset uploads, copies, listing, and deletes aren't available from this kind of session; retrying from here will not help",
      ),
    );
  let E = getArtifactState();
  if (!v && !E.assetsOnRoster) {
    let h = await resolveContract({
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
      headers: { ...buildFrameHeaders(), "Content-Type": o, Accept: "application/json" },
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
        ? (await requestViaFrameTunnel("POST", u, t, C, FRAME_FAMILY_BLOBS)).res
        : httpClient.post(u, t, {
            ...C,
            host: "frame",
            auth: "claude-ai-oauth",
            refreshOAuth: !0,
            credentials: e.credentials,
          }),
    _;
  try {
    if (x && e.verb === "upload" && !isFrameFamilyVouched(FRAME_FAMILY_BLOBS)) {
      let k;
      try {
        k = (
          await requestViaFrameTunnel(
            "POST",
            e.probeRoute,
            jsonStringify({ limit: 1 }),
            {
              maxRedirects: 0,
              headers: {
                ...buildFrameHeaders(),
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              timeout: G,
              maxContentLength: 262144,
              validateStatus: () => !0,
              signal: r,
            },
            FRAME_FAMILY_BLOBS,
          )
        ).res;
      } catch (F) {
        if (isCancel(F) || F instanceof Ve) throw F;
        return (
          declineFrameFamily(FRAME_FAMILY_BLOBS, !0),
          l(
            i(
              "store_unavailable",
              "probe_request_error",
              "the session gateway did not answer; nothing was uploaded \u2014 one retry is safe",
            ),
          )
        );
      }
      let R = classifyFrameRelayResponse(k);
      if (R.refused) return (declineFrameFamily(FRAME_FAMILY_BLOBS), g());
      if (!R.vouched) {
        if (!k.ok || k.status >= 500 || k.status === 499) declineFrameFamily(FRAME_FAMILY_BLOBS, !0);
        return l(
          i(
            "store_unavailable",
            "probe_unvouched",
            "the session gateway could not confirm the asset route; nothing was uploaded \u2014 retry later",
          ),
        );
      }
      markFrameFamilyServed(FRAME_FAMILY_BLOBS);
    }
    let h = (k) => {
      if (!x) return !1;
      let R = classifyFrameRelayResponse(k);
      if (R.refused && !(k.ok && k.status === 413))
        return (declineFrameFamily(FRAME_FAMILY_BLOBS), unvouchFrameFamily(FRAME_FAMILY_BLOBS), !0);
      if (R.vouched) markFrameFamilyServed(FRAME_FAMILY_BLOBS);
      else if (!isFrameFamilyVouched(FRAME_FAMILY_BLOBS) && (!k.ok || k.status >= 500 || k.status === 499))
        declineFrameFamily(FRAME_FAMILY_BLOBS, !0);
      return !1;
    };
    if (((_ = await p()), h(_))) return g();
    if (
      _.ok &&
      (_.status === 429 || _.status === 503) &&
      z(_.status, _.data).code !== "policy_denied"
    ) {
      let k = _.response.headers?.["retry-after"],
        R = parseRetryAfterHeader(typeof k === "string" ? k : void 0);
      if (R !== void 0 && R <= Se) {
        if ((await sleep(R, r), r.aborted)) throw new Ve();
        if (((c.retried = !0), (_ = await p()), h(_))) return g();
      }
    }
  } catch (h) {
    if (isCancel(h) || h instanceof Ve) throw h;
    if (x && !isFrameFamilyVouched(FRAME_FAMILY_BLOBS)) declineFrameFamily(FRAME_FAMILY_BLOBS, !0);
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
            ? formatNoGatewayCredentialMessage(_.detail)
            : formatNotAuthenticatedMessage(_.detail)
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
    o = parseRetryAfterHeader(e.retryAfter);
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
async function uploadArtifactAsset(e, r) {
  let { slug: s, bytes: u, contentType: t } = e,
    o = {},
    c = P((x) => logFeatureBad("artifact_asset_upload", x, o), "upload");
  if (!ARTIFACT_SLUG_RE.test(s))
    return c("invalid_request", "invalid_slug", "not a valid artifact id");
  let i = getMaxAssetBytesForType(t);
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
      maxBodyLength: MAX_ARTIFACT_FILE_BYTES + 4096,
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
      ? d.data.size_bytes === 0 || d.data.size_bytes > MAX_ARTIFACT_FILE_BYTES
      : d.data.size_bytes !== u.length)
  )
    return c(
      "upstream_error",
      "malformed_echo",
      "the upload probably succeeded but the reply was unreadable \u2014 retry at most once; if it repeats, stop and report it",
    );
  return (
    (getArtifactState().assetsOnRoster = !0),
    logFeatureOk("artifact_asset_upload", { ...o, size_bytes: d.data.size_bytes }),
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
async function listArtifactAssets(e, r) {
  let { slug: s, after: u } = e,
    t = {},
    o = P((l) => logFeatureBad("artifact_asset_list", l, t), "list");
  if (!ARTIFACT_SLUG_RE.test(s))
    return o("invalid_request", "invalid_slug", "not a valid artifact id");
  if (u !== void 0 && !LIST_CURSOR_PATTERN.test(u))
    return o(
      "invalid_request",
      "invalid_cursor",
      "after must be the next value from an earlier list_assets result",
    );
  let c = await N(
    {
      verb: "list",
      route: re(s),
      body: jsonStringify({ ...(u !== void 0 && { after: u }), limit: he }),
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
    (getArtifactState().assetsOnRoster = !0),
    foldBootCowritten(s, i.data.cowritten),
    logFeatureOk("artifact_asset_list", { ...t, count: i.data.assets.length }),
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
async function deleteArtifactAsset(e, r) {
  let { slug: s, id: u } = e,
    t = {},
    o = P((l) => logFeatureBad("artifact_asset_delete", l, t), "delete");
  if (!ARTIFACT_SLUG_RE.test(s))
    return o("invalid_request", "invalid_slug", "not a valid artifact id");
  if (!ASSET_ID_RE.test(u))
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
    (getArtifactState().assetsOnRoster = !0),
    logFeatureOk("artifact_asset_delete", { ...t, deleted: i.data.deleted }),
    { kind: "ok", deleted: i.data.deleted }
  );
}
var Te = createLazyValue(() =>
    nt({ assets: cr(te().extend({ from_id: le().regex(ASSET_ID_RE) })).max(MAX_COPY_ASSET_IDS) }),
  ),
  Fe = 120000;
async function copyArtifactAssets(e, r) {
  let { slug: s, fromSlug: u, ids: t } = e,
    o = {},
    c = P((d) => logFeatureBad("artifact_asset_copy", d, o), "copy");
  if (!ARTIFACT_SLUG_RE.test(s) || !ARTIFACT_SLUG_RE.test(u))
    return c("invalid_request", "invalid_slug", "not a valid artifact id");
  if (s === u)
    return c(
      "invalid_request",
      "same_artifact",
      "from_url names the destination itself \u2014 its assets are already there",
    );
  if (
    t.length === 0 ||
    t.length > MAX_COPY_ASSET_IDS ||
    !t.every((d) => ASSET_ID_RE.test(d)) ||
    new Set(t).size !== t.length
  )
    return c(
      "invalid_request",
      "invalid_ids",
      `asset_ids must be 1\u2013${MAX_COPY_ASSET_IDS} distinct asset ids`,
    );
  let i = await N(
    {
      verb: "copy",
      route: ve(s),
      body: jsonStringify({ from: u, ids: t }),
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
    (getArtifactState().assetsOnRoster = !0),
    logFeatureOk("artifact_asset_copy", { ...o, count: t.length }),
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
function getAssetFileExtensionForContentType(e) {
  for (let [r, s] of B) if (s === e) return r;
  return;
}
var ee =
  "asset reads run only from a local session or an Anthropic-hosted cloud session with its gateway relay enabled; retrying from here will not help";
async function readArtifactAsset(e, r, s, u) {
  let t = (w, S) => (
    logFeatureBad("artifact_asset_read", w),
    { kind: "error", message: `asset read failed: ${S}`, reason: w }
  );
  if (!ARTIFACT_SLUG_RE.test(e.slug)) return t("invalid_slug", "not a valid artifact id");
  if (!ASSET_ID_RE.test(r)) return t("invalid_id", "not a valid asset id");
  let o = isHostedFrameRelayEnabled() || (isByocFrameRelayEnabled() && !isFrameFamilyDeclined(ARTIFACT_MOUNT_FAMILY));
  if (!o && a.CLAUDE_CODE_REMOTE) return t("relay_unavailable", ee);
  let c = await readArtifactBoot(e, "artifact_asset_read", s, {
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
      getArtifactState().contentHostEgressDenied.add(e.env),
      t(
        "egress_blocked",
        `this environment's network allowlist blocks ${v}, so the asset cannot be fetched (access to the artifact itself is fine). To allow it, add *.${x} to the network allowlist this session runs behind (the sandbox's allowed domains, or the Claude desktop app's network settings).`,
      )
    ),
    E = (w, S) => (
      logForDebugging(`[artifact] asset fetch: egress proxy denied (${S})`),
      t(
        "egress_denied",
        `artifact content fetch refused by the environment's egress proxy (${G5(w)})`,
      )
    ),
    C = (w, S) => {
      if (S !== void 0) logForDebugging(`[artifact] asset fetch: proxy refused, marker ${S}`);
      return t(
        "proxy_refused",
        `the proxy refused the connection to the artifact's content host (${G5(w)})`,
      );
    },
    p;
  try {
    if (o) {
      let w = await httpClient.get(buildArtifactFramePath(e.slug, d), {
        host: "ccr-gateway",
        auth: "session-jwt",
        headers: buildFrameAssetTokenHeader(l),
        responseType: "arraybuffer",
        timeout: Q,
        maxRedirects: 0,
        maxContentLength: MAX_ARTIFACT_FILE_BYTES + 1,
        validateStatus: () => !0,
        signal: s,
      });
      if (!w.ok)
        return t(
          w.reason.replace(/-/g, "_"),
          w.reason === "no-auth"
            ? formatNoGatewayCredentialMessage(w.detail)
            : `artifact content is unreachable from this session (${w.reason})`,
        );
      p = { status: w.status, headers: w.response.headers, data: w.data };
    } else {
      let S = await externalHttp.get(
        `${`https://${v}`}${d}?__frame_t=${encodeURIComponent(l)}`,
        {
          signal: s,
          timeout: Q,
          responseType: "arraybuffer",
          maxRedirects: 0,
          maxContentLength: MAX_ARTIFACT_FILE_BYTES + 1,
          validateStatus: () => !0,
          ...void 0,
        },
      );
      if (isProxyAllowlistBlocked(S.status, S.headers)) return g();
      let O = getDenyReasonHeader(S.headers);
      if (O !== void 0 && (S.status < 200 || S.status >= 300))
        return E(S.status, O);
      (getArtifactState().contentHostEgressDenied.delete(e.env),
        (p = { status: S.status, headers: S.headers, data: S.data }));
    }
  } catch (w) {
    if (isCancel(w)) throw w;
    if (o) markArtifactRelayHopFailed();
    let S = o ? void 0 : KU(w);
    if (S !== void 0) {
      if (isProxyAllowlistBlocked(S.connectStatus, S.headers)) return g();
      let O = getDenyReasonHeader(S.headers);
      if (O !== void 0) return E(S.connectStatus, O);
      return C(S.connectStatus, getProxyErrorHeaderValue(S.headers));
    }
    return t(
      "request_error",
      `the content fetch failed in transit, timed out, or exceeded the ${MAX_ARTIFACT_FILE_BYTES >> 20} MiB limit`,
    );
  }
  if (o && shouldAbandonFrameRelay(p.status)) return t("relay_unavailable", ee);
  if (o && isArtifactNetworkOffResponse(p.status, p.data))
    return t("network_off", `${ARTIFACT_NETWORK_OFF_MESSAGE}; retrying from here will not help`);
  if (o) markArtifactRelayHopFailed(p.status);
  if (p.status === 404)
    return t(
      "http_404",
      o
        ? `not found through this cloud session's artifact mount \u2014 no asset has that id, or asset reads are not enabled for this session yet; a writer of the artifact can tell which with action "list_assets"`
        : 'no asset with that id in this artifact (it may have been deleted) \u2014 a writer of the artifact can check the id with action "list_assets"',
    );
  let _ = o
    ? void 0
    : classifySandboxProxyDenial({
        status: p.status,
        headers: p.headers,
        data: p.data,
        redact: (w) => redactFrameToken(w, l),
        label: "[artifact] asset fetch",
      });
  if (_ !== void 0) return t(_, SANDBOX_PROXY_DENIAL_MESSAGES[_]);
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
  if (o) markFrameFamilyServed(ARTIFACT_MOUNT_FAMILY);
  let h = p.headers,
    k = o
      ? (h?.["x-frame-asset-content-type"] ?? h?.["content-type"])
      : h?.["content-type"],
    R = typeof k === "string" ? beforeFirst(k, ";").trim().toLowerCase() : "";
  if (getAssetFileExtensionForContentType(R) === void 0)
    return t(
      "unexpected_type",
      "the content host served a type this tool does not save",
    );
  let F = Buffer.from(p.data ?? new ArrayBuffer(0));
  if (F.length === 0 || F.length > MAX_ARTIFACT_FILE_BYTES)
    return t(
      "size",
      F.length === 0
        ? "the asset is empty"
        : `the asset exceeds the ${MAX_ARTIFACT_FILE_BYTES >> 20} MiB limit`,
    );
  return { kind: "ok", bytes: F, contentType: R, relay: o === !0 };
}
export {
  isArtifactAssetsEnabled,
  getMaxAssetBytesForType,
  ASSET_FILE_EXTENSIONS,
  SUPPORTED_ASSET_TYPE_LIST,
  getAssetContentTypeForPath,
  isTextAssetContentType,
  NOT_A_FILE_MESSAGE,
  EMPTY_FILE_MESSAGE,
  formatTooLargeMessage,
  NO_FILE_IDENTITY_MESSAGE,
  isUnusableInode,
  isNetworkPath,
  NETWORK_PATH_MESSAGE,
  resolveLocalFilePath,
  getFileIdentityStamp,
  isTextOrLinkedAssetFile,
  isSymlink,
  readApprovedLocalFile,
  BLOB_URL_PATTERN,
  SHA256_HEX_PATTERN,
  MAX_ASSET_METADATA_LENGTH,
  LIST_CURSOR_PATTERN,
  ISO_TIMESTAMP_PATTERN,
  CONTENT_TYPE_PATTERN,
  MAX_COPY_ASSET_IDS,
  uploadArtifactAsset,
  listArtifactAssets,
  deleteArtifactAsset,
  copyArtifactAssets,
  getAssetFileExtensionForContentType,
  readArtifactAsset,
};

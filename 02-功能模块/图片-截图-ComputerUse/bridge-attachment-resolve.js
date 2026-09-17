// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { DEFAULT_IMAGE_LIMITS } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { isCrossSessionMessage } from "../Teammates团队/chunk-g6nvp9mm.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { describeStorageError, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hashSha256 } from "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import { MAX_TRANSFER_SIZE_BYTES, MAX_TRANSFER_FILE_COUNT } from "../../01-核心基础设施/共享小工具-未细化/file-transfer-config.js";
import { sanitizePeerFileName, peerFileFailureNote, peerFileCountCapNote, verifyPeerFileIntegrity, emitPeerFileReceiveTelemetry, injectPeerFilePrefix } from "../跨会话消息-UDS/peer-file-transfer.js";
import { getBridgeAccessToken, getBridgeAccessTokenAsync, getBridgeBaseUrl } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { parseFileAttachments, dropEmptyTextBlocks } from "../远程控制-Bridge/bridge-inbound-origin.js";
import { createConcurrencyLimiter, getUploadsDirectory, buildUploadFileName, cacheFileHash } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getImageMediaTypeOrDefault, buildImageBlockFromBytes } from "./chunk-0dcnsftb.js";
import { randomUUID } from "crypto";
import { mkdir, realpath, writeFile } from "fs/promises";
import { join as L } from "path";
var j = 30000;
function a(e) {
  logForDebugging(`[bridge:inbound-attach] ${e}`);
}
var z = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/gif": "gif",
  "image/webp": "webp",
};
async function D(e, s, l, m, p) {
  let i = isHoverRestEnabled() && p !== void 0 ? await getBridgeAccessTokenAsync(p) : getBridgeAccessToken();
  if (!i) return (a("skip: no oauth token"), { failure: "download" });
  let r;
  try {
    let o = `${getBridgeBaseUrl()}/api/oauth/files/${encodeURIComponent(e.file_uuid)}/content`;
    if (typeof e.file_size === "number" && e.file_size > MAX_TRANSFER_SIZE_BYTES)
      return { failure: "download" };
    let b = await at.get(o, {
      headers: { Authorization: `Bearer ${i}` },
      responseType: "arraybuffer",
      timeout: j,
      maxContentLength: MAX_TRANSFER_SIZE_BYTES,
      maxBodyLength: MAX_TRANSFER_SIZE_BYTES,
      validateStatus: () => !0,
    });
    if (b.status !== 200)
      return (
        a(`fetch ${e.file_uuid} failed: status=${b.status}`),
        { failure: "download" }
      );
    if (((r = Buffer.from(b.data)), r.length > MAX_TRANSFER_SIZE_BYTES))
      return (
        a(`fetch ${e.file_uuid} over size cap (${r.length} bytes)`),
        { failure: "download" }
      );
  } catch (o) {
    return (a(`fetch ${e.file_uuid} threw: ${o}`), { failure: "download" });
  }
  if (
    typeof e.sha256 === "string" &&
    !verifyPeerFileIntegrity(r, { sha256: e.sha256, file_size: e.file_size })
  )
    return (
      a(`fetch ${e.file_uuid} failed integrity verification`),
      { failure: "digest_mismatch" }
    );
  let u =
      l && e.is_image === !0 && e.sha256 === void 0
        ? await buildImageBlockFromBytes(r, DEFAULT_IMAGE_LIMITS).catch(
            (o) => (a(`inline ${e.file_uuid} threw: ${o}`), null),
          )
        : null,
    d = u ? `image.${z[getImageMediaTypeOrDefault(r)]}` : sanitizePeerFileName(e.file_name),
    h = (
      u ? randomUUID().slice(0, 8) : e.file_uuid.slice(0, 8) || randomUUID().slice(0, 8)
    ).replace(/[^a-zA-Z0-9_-]/g, "_"),
    k = getUploadsDirectory(),
    _ = buildUploadFileName(h, d),
    c = L(k, _),
    B = K();
  if (isHoverRestEnabled() && m !== void 0 && isValidPathSegment(B) && isValidPathSegment(_)) {
    let o = await m.write(STORAGE_KEYS.userConfigDir("uploads", [B, _]), r, {
      mode: 384,
    });
    if (!o.ok)
      return (a(`write ${c} failed: ${describeStorageError(o.error)}`), { failure: "write" });
  } else
    try {
      (await mkdir(k, { recursive: !0, mode: 448 }), await writeFile(c, r, { mode: 384 }));
    } catch (o) {
      return (a(`write ${c} failed: ${o}`), { failure: "write" });
    }
  if (s && e.sha256 === void 0)
    try {
      cacheFileHash(await realpath(c), hashSha256(r));
    } catch {
      a(`registration skipped for ${c}`);
    }
  if ((a(`resolved ${e.file_uuid} \u2192 ${c} (${r.length} bytes)`), u))
    return (
      a(`inlined ${e.file_uuid} (${r.length} bytes)`),
      { imageBlock: u, path: c }
    );
  if (l && e.is_image === !0 && e.sha256 === void 0)
    return (
      a(`inline ${e.file_uuid} fell back to @path ref`),
      { path: c, inlineFellBack: !0 }
    );
  return { path: c };
}
var U = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory",
};
async function H(e, s, l, m, p) {
  if (e.length === 0)
    return { prefix: "", imageBlocks: [], inlinedImagePaths: [] };
  a(`resolving ${e.length} attachment(s)`);
  let i = e.filter((t) => typeof t.sha256 === "string");
  if (!(isHoverRestEnabled() && p !== void 0 ? await getBridgeAccessTokenAsync(p) : getBridgeAccessToken())) {
    if (
      (a("skip: no oauth token"),
      logFeatureSad("bridge_attachment_resolve", "no_token"),
      i.length > 0)
    ) {
      let t = i.length - MAX_TRANSFER_FILE_COUNT,
        I = t > 0 ? i.slice(0, MAX_TRANSFER_FILE_COUNT) : i;
      emitPeerFileReceiveTelemetry("bridge", I.length, 0);
      let w = t > 0 ? " " + peerFileCountCapNote(t) : "";
      return {
        prefix:
          I.map((R) =>
            peerFileFailureNote(R.file_name, "it could not be downloaded (not signed in)"),
          ).join(" ") +
          w +
          " ",
        imageBlocks: [],
        inlinedImagePaths: [],
      };
    }
    return { prefix: "", imageBlocks: [], inlinedImagePaths: [] };
  }
  let u = [],
    d = e,
    h = d.length > MAX_TRANSFER_FILE_COUNT;
  if (h) {
    if (
      (a(`dropping ${d.length - MAX_TRANSFER_FILE_COUNT} attachment(s) over the ${MAX_TRANSFER_FILE_COUNT} cap`),
      i.length > 0)
    )
      u.push(peerFileCountCapNote(d.length - MAX_TRANSFER_FILE_COUNT));
    d = d.slice(0, MAX_TRANSFER_FILE_COUNT);
  }
  let k = s && l,
    _ = createConcurrencyLimiter(4, (t) => D(t, s, k, m, p)),
    c = await Promise.all(d.map((t) => _(t))),
    B = [],
    o = [],
    b = [],
    A = 0,
    v = 0,
    F = 0,
    x = !1;
  if (
    (c.forEach((t, I) => {
      let w = d[I],
        P = typeof w.sha256 === "string";
      if (P) v++;
      if ("imageBlock" in t) (o.push(t.imageBlock), b.push(t.path));
      else if ("path" in t) {
        if ((B.push(`@"${t.path}"`), t.inlineFellBack)) A++;
        if (P) F++;
      } else {
        if (t.failure === "digest_mismatch") x = !0;
        if (P) u.push(peerFileFailureNote(w.file_name, U[t.failure]));
      }
    }),
    v > 0)
  )
    emitPeerFileReceiveTelemetry("bridge", v, F);
  let E = B.length + o.length;
  if (E === 0)
    logFeatureBad("bridge_attachment_resolve", x ? "digest_mismatch" : "all_failed");
  else if (E < d.length)
    logFeatureSad("bridge_attachment_resolve", x ? "digest_mismatch" : "partial_failed");
  else if (h) logFeatureSad("bridge_attachment_resolve", "over_count_cap");
  else logFeatureOk("bridge_attachment_resolve");
  if (A > 0) logFeatureSad("bridge_attachment_inline_image", "fallback_path_ref");
  else if (o.length > 0) logFeatureOk("bridge_attachment_inline_image");
  let S = [...B, ...u];
  return {
    prefix: S.length > 0 ? S.join(" ") + " " : "",
    imageBlocks: o,
    inlinedImagePaths: b,
  };
}
function X(e, s) {
  if (!s) return e;
  if (typeof e === "string") return injectPeerFilePrefix(e, s);
  let l = e.findLastIndex((m) => m.type === "text");
  if (l !== -1) {
    let m = e[l];
    if (m.type === "text")
      return [
        ...e.slice(0, l),
        { ...m, text: injectPeerFilePrefix(m.text, s) },
        ...e.slice(l + 1),
      ];
  }
  return [...e, { type: "text", text: s.trimEnd() }];
}
function G(e, s) {
  if (s.length === 0) return e;
  let l =
    typeof e === "string"
      ? e.trim() === ""
        ? []
        : [{ type: "text", text: e }]
      : dropEmptyTextBlocks(e);
  return [...s, ...l];
}
async function resolveAndPrepend(e, s, l, m, p) {
  let i = s ?? "",
    r = parseFileAttachments(e);
  if (r.length === 0) return { content: i, inlinedImagePaths: [] };
  let u = l && !(typeof i === "string" && isCrossSessionMessage(i)),
    {
      prefix: d,
      imageBlocks: h,
      inlinedImagePaths: k,
    } = await H(r, l, u, m, p),
    _ = typeof i === "string" ? i.trim() === "" : i.length === 0;
  if (h.length === 0 && !d && _)
    return {
      content:
        typeof i === "string"
          ? "[attachment could not be downloaded]"
          : [{ type: "text", text: "[attachment could not be downloaded]" }],
      inlinedImagePaths: [],
    };
  return { content: G(X(i, d), h), inlinedImagePaths: k };
}
export { resolveAndPrepend };

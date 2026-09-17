// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ku } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { MAX_TRANSFER_SIZE_BYTES, MAX_TRANSFER_FILE_COUNT, FILE_TRANSFER_ERROR_MESSAGE, RECEIVED_FILES_MAX_AGE_DAYS } from "../../01-核心基础设施/核心工具-未归类/file-transfer-config.js";
import { getUploadsDirectory } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getMediaTypeFromPath } from "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import { s, T, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { randomUUID } from "crypto";
import {
  lstat,
  mkdir,
  open as B,
  readdir,
  stat as N,
  unlink,
  writeFile,
} from "fs/promises";
import {
  basename,
  dirname,
  isAbsolute,
  join as F,
  resolve,
} from "path";
var Y = RECEIVED_FILES_MAX_AGE_DAYS * 24 * 60 * 60 * 1000,
  k = "file-transfers";
function S(t) {
  logForDebugging(`[peer-file-transfer] ${t}`);
}
function sanitizePeerFileName(t) {
  let e = basename(t).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    r = e.lastIndexOf("."),
    o = r > 0 && e.length - r <= 16 ? e.slice(r) : "",
    a = o ? e.slice(0, r) : e,
    l = 200 - o.length;
  return (a.length > l ? a.slice(0, l) : a) + o;
}
function peerFileFailureNote(t, e) {
  return `[SendFile: "${sanitizePeerFileName(t)}" was not delivered \u2014 ${e}]`;
}
function peerFileCountCapNote(t) {
  return `[SendFile: ${t} additional attachment(s) were dropped \u2014 max ${MAX_TRANSFER_FILE_COUNT} per message]`;
}
function verifyPeerFileIntegrity(t, e) {
  if (typeof e.file_size === "number" && t.length !== e.file_size) return !1;
  return hashSha256(t) === e.sha256;
}
function emitPeerFileReceiveTelemetry(t, e, r) {
  if (
    (logEvent("tengu_send_file_received", {
      transport: fromEnum(t),
      file_count: e,
      verified_count: r,
    }),
    r === e)
  )
    logFeatureOk("peer_file_receive");
  else if (r > 0) logFeatureSad("peer_file_receive", "partial_failed");
  else logFeatureBad("peer_file_receive", "all_failed");
}
async function readPeerFileBounded(t, e) {
  try {
    let o = await N(t);
    if (!o.isFile() || o.size > e) return null;
  } catch {
    return null;
  }
  let r;
  try {
    r = await B(t, "r");
  } catch {
    return null;
  }
  try {
    let o = await r.stat();
    if (!o.isFile() || o.size > e) return null;
    return await r.readFile();
  } catch {
    return null;
  } finally {
    await r.close().catch(() => {});
  }
}
function injectPeerFilePrefix(t, e) {
  if (!e) return t;
  let r = /^<cross-session-message\b[^>]*>\n?/.exec(t);
  return r ? r[0] + e + t.slice(r[0].length) : e + t;
}
function peerTransferSpoolDir() {
  return F(getClaudeConfigDir(), k);
}
function G() {
  return getUploadsDirectory();
}
var V = /^[0-9a-f]{64}$/,
  Z = createLazyValue(() =>
    c({
      path: s(),
      file_name: s(),
      file_size: T().int().nonnegative(),
      sha256: s().regex(V),
      media_type: s().optional(),
    }),
  ),
  q = createLazyValue(() => v(Z()));
async function stageLocalPeerFile(t) {
  let e = await readPeerFileBounded(t, MAX_TRANSFER_SIZE_BYTES);
  if (e === null)
    throw new R(
      FILE_TRANSFER_ERROR_MESSAGE,
      "peer file transfer: source unreadable or over the size limit",
    );
  let r = hashSha256(e),
    o = peerTransferSpoolDir();
  await mkdir(o, { recursive: !0, mode: 448 });
  let a = basename(t),
    l = F(o, `${r.slice(0, 8)}-${randomUUID().slice(0, 8)}-${sanitizePeerFileName(a)}`);
  return (
    await writeFile(l, e, { mode: 384 }),
    {
      path: l,
      file_name: a,
      file_size: e.length,
      sha256: r,
      media_type: getMediaTypeFromPath(a),
    }
  );
}
async function sweepStaleSpoolEntries() {
  let t = peerTransferSpoolDir();
  try {
    let e = await readdir(t),
      r = Date.now() - Y;
    for (let o of e.slice(0, 200)) {
      let a = F(t, o);
      try {
        let l = await N(a);
        if (l.isFile() && l.mtimeMs < r) await unlink(a);
      } catch {}
    }
  } catch {}
}
var J = { prefix: "", received: 0, verified: 0 };
async function materializeLocalPeerFiles(t) {
  let e = q().safeParse(t);
  if (!e.success || e.data.length === 0) {
    if (!e.success)
      S(`ignoring malformed file_attachments: ${e.error.message}`);
    return J;
  }
  let r = [],
    o = e.data;
  if (o.length > MAX_TRANSFER_FILE_COUNT) (r.push(peerFileCountCapNote(o.length - MAX_TRANSFER_FILE_COUNT)), (o = o.slice(0, MAX_TRANSFER_FILE_COUNT)));
  let a = G(),
    l = peerTransferSpoolDir(),
    x = !1,
    z = [],
    D = 0;
  for (let p of o) {
    let d = (_) => {
      (S(`${p.file_name}: ${_}`), r.push(peerFileFailureNote(p.file_name, _)));
    };
    if (ku(p.path) || !isAbsolute(p.path)) {
      d("invalid transfer path");
      continue;
    }
    let h = resolve(p.path),
      P = dirname(h);
    if (ku(h) || basename(P) !== k) {
      d("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await lstat(P)).isDirectory() || !(await lstat(h)).isFile()) {
        d("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let w = await readPeerFileBounded(h, MAX_TRANSFER_SIZE_BYTES);
    if (w === null) {
      d("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!verifyPeerFileIntegrity(w, p)) {
      d("it failed integrity verification");
      continue;
    }
    let E = F(
      a,
      `${p.sha256.slice(0, 8)}-${randomUUID().slice(0, 8)}-${sanitizePeerFileName(p.file_name)}`,
    );
    try {
      if (!x) (await mkdir(a, { recursive: !0, mode: 448 }), (x = !0));
      await writeFile(E, w, { mode: 384, flag: "wx" });
    } catch (_) {
      (d("it could not be written to the uploads directory"),
        S(`write ${E} failed: ${_}`));
      continue;
    }
    if ((D++, z.push(`@"${E}"`), P === l)) unlink(h).catch(() => {});
  }
  let A = [...z, ...r];
  return {
    prefix: A.length > 0 ? A.join(" ") + " " : "",
    received: o.length,
    verified: D,
  };
}
export { sanitizePeerFileName, peerFileFailureNote, peerFileCountCapNote, verifyPeerFileIntegrity, emitPeerFileReceiveTelemetry, readPeerFileBounded, injectPeerFilePrefix, peerTransferSpoolDir, stageLocalPeerFile, sweepStaleSpoolEntries, materializeLocalPeerFiles };

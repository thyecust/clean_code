// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { sanitizePath, getProjectKey, getProjectDir, canonicalizePath } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { validateStorageKey, DIR_SYNC_RECORD_FILE_SUFFIX } from "../安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { createHoverRestOptions } from "./hover-rest-transcript.js";
import { join as a } from "path";
function sanitizePathSegment(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e) ? e : sanitizePath(e);
}
async function getDirSyncRecordPath(e, t, n) {
  return a(getProjectDir(await canonicalizePath(e, createHoverRestOptions(n))), getDirSyncRecordFileName(t));
}
async function resolveDirSyncRecordLocation(e, t, n) {
  let r = await canonicalizePath(e, createHoverRestOptions(n)),
    c = a(getProjectDir(r), getDirSyncRecordFileName(t)),
    o = getProjectKey(r),
    i = n === void 0 ? void 0 : getDirSyncRecordKey(o, t);
  return {
    path: c,
    projectKey: o,
    v5: n === void 0 || i === void 0 ? void 0 : { backend: n, key: i },
  };
}
function getDirSyncRecordKey(e, t) {
  let n = STORAGE_KEYS.dirSyncRecord(e, sanitizePathSegment(t));
  return validateStorageKey(n) === void 0 ? n : void 0;
}
function getDirSyncRecordFileName(e) {
  return `${sanitizePathSegment(e)}${DIR_SYNC_RECORD_FILE_SUFFIX}`;
}
export { sanitizePathSegment, getDirSyncRecordPath, resolveDirSyncRecordLocation, getDirSyncRecordKey, getDirSyncRecordFileName };

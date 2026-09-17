// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isValidPathSegment, hasValidPathSegments, STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { pathSpaces } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getProjectsDir } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { validateStorageKey } from "../安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { isAbsolute as g, sep as a } from "path";
function l(e) {
  let n = process.cwd();
  return n.endsWith(a) ? n + e : n + a + e;
}
function createRealPathResolver(e) {
  return (n) =>
    e.hostFiles.realPath(pathSpaces.workspace(n === "" || g(n) ? n : l(n)), {
      native: !0,
    });
}
function createHoverRestOptions(e) {
  return e === void 0 ? void 0 : { hoverRestOn: isHoverRestEnabled(), realPath: createRealPathResolver(e) };
}
import {
  basename,
  dirname,
  isAbsolute as S,
  join as p,
  relative,
  sep as f,
} from "path";
function resolveTranscriptLocator(e, n) {
  if (!isHoverRestEnabled() || n === void 0) return;
  if (!e.endsWith(".jsonl")) return;
  let t = dirname(e);
  if (dirname(t) !== getProjectsDir()) return;
  let r = basename(t),
    o = basename(e, ".jsonl");
  if (e !== p(getProjectsDir(), r, `${o}.jsonl`)) return;
  let i = STORAGE_KEYS.transcript(r, o);
  return validateStorageKey(i) === void 0 ? { backend: n, key: i } : void 0;
}
function resolveSubagentTranscriptLocator(e, n) {
  if (!isHoverRestEnabled() || n === void 0) return;
  let t = relative(getProjectsDir(), e);
  if (t === "" || t === ".." || t.startsWith(`..${f}`) || S(t)) return;
  let r = t.split(f);
  if (e !== p(getProjectsDir(), ...r)) return;
  let o = r.at(-1);
  if (
    r.length < 4 ||
    r[2] !== "subagents" ||
    o === void 0 ||
    !o.startsWith("agent-") ||
    !o.endsWith(".jsonl")
  )
    return;
  let i = o.slice(6, -6),
    d = r.slice(3, -1);
  if (!hasValidPathSegments([r[0], r[1], i]) || (d.length > 0 && !hasValidPathSegments(d))) return;
  let s = STORAGE_KEYS.transcript(r[0], r[1], i, d.length > 0 ? d : void 0);
  return validateStorageKey(s) === void 0 ? { backend: n, key: s } : void 0;
}
function createBackendHandle(e) {
  if (!isHoverRestEnabled() || e === void 0) return;
  return {
    backend: e,
    transcriptKey: STORAGE_KEYS.transcript,
    isKeySegment: isValidPathSegment,
    realWorkspacePath: createRealPathResolver(e),
  };
}
function createTranscriptSource(e) {
  return e === void 0 ? void 0 : { source: e, hoverRestOn: isHoverRestEnabled() };
}
export { createRealPathResolver, createHoverRestOptions, resolveTranscriptLocator, resolveSubagentTranscriptLocator, createBackendHandle, createTranscriptSource };

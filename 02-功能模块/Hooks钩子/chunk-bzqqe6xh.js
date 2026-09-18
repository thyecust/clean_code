// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
class HooksError extends Error {
  name = "HooksError";
}
function getStringErrorCause(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
function formatAbortReason(r, o = "aborted") {
  let { reason: e } = r;
  return e instanceof Error ? e.message : e === void 0 ? o : String(e);
}
function validateNextArgument(r, o) {
  if (!isRecord(r))
    throw new HooksError(
      `${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`,
    );
  return r;
}
var isAbortSignal = (r) =>
  typeof r === "object" &&
  r !== null &&
  "aborted" in r &&
  typeof r.addEventListener === "function" &&
  typeof r.removeEventListener === "function";
var createUnloadedModuleError = (r) => new HooksError(`${r}: its environment was unloaded`);
import { readFile } from "fs/promises";
var h = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var y = {
  ".ts": "ts",
  ".tsx": "tsx",
  ".jsx": "jsx",
  ".js": "js",
  ".mjs": "js",
};
var E = Object.keys(y);
var getSourceLoaderName = (r) => y[E.find((o) => r.endsWith(o)) ?? ""] ?? "js";
function transpileHookSource(r, o) {
  let e = getSourceLoaderName(r);
  return e === "js"
    ? o
    : new Bun.Transpiler({ loader: e }).transformSync(
        e === "ts" ? o : `${h}${o}`,
      );
}
var MAX_SOURCE_BYTES = 1048576;
var MAX_LINKED_FILES = 512;
var MAX_TOTAL_SOURCE_BYTES = 8388608;
var c = (r) => (r instanceof Error && "code" in r ? String(r.code) : "EIO");
var w = (r, o, e) => new HooksError(`${r}: ${o}: no such file`, { cause: c(e) });
async function g(r, o) {
  try {
    return await r;
  } catch (e) {
    throw o(e);
  }
}
var V = (r, o, e) => new HooksError(`${r}: ${o}: not readable (${c(e)})`);
var createOversizeSourceError = (r, o) => new HooksError(`${r}: ${o} is over ${MAX_SOURCE_BYTES} bytes and was not read`);
import { lstat, realpath } from "fs/promises";
import { basename, isAbsolute, relative, sep } from "path";
async function resolvePluginFile(r, o, e) {
  let p = await g(realpath(o), (m) => V(e, basename(o), m)),
    f = (m) => w(e, r, m),
    t = await g(realpath(r), f),
    a = relative(p, t);
  if (a === ".." || a.startsWith(`..${sep}`) || isAbsolute(a))
    throw new HooksError(`${e}: ${r}: ${t} resolves outside the plugin's folder`);
  let x = await g(lstat(t), f);
  if (!x.isFile()) throw new HooksError(`${e}: ${r}: not a regular file`);
  return { real: t, size: x.size };
}
async function readPluginFile(r, o, e) {
  let { real: p, size: f } = await resolvePluginFile(r, o, e);
  if (f > MAX_SOURCE_BYTES) throw createOversizeSourceError(e, r);
  try {
    return await readFile(p, "utf8");
  } catch (t) {
    throw w(e, r, t);
  }
}
function O(r) {
  let o = [r];
  if (r.endsWith(".js")) {
    let e = r.slice(0, -3);
    o.push(`${e}.ts`, `${e}.tsx`);
  }
  for (let e of E) (o.push(`${r}${e}`), o.push(`${r}${sep}index${e}`));
  return o;
}
var CLAUDE_CODE_MODULE_ID = "claude-code";
var createBadImportError = (r, o, e) =>
  new HooksError(
    `${r}: cannot import "${o}" (from ${e}): a hooks module imports its own files by relative path and "${CLAUDE_CODE_MODULE_ID}", nothing else`,
  );
import { dirname, resolve } from "path";
var T = (r, o) =>
  [".", "..", "./", "../"].includes(o) ? resolve(dirname(r), o, "index") : resolve(dirname(r), o);
var isRelativeImportPath = (r) =>
  r === "." || r === ".." || r.startsWith("./") || r.startsWith("../");
var H = [
  "no such file",
  "not a regular file",
  "resolves outside the plugin's folder",
];
var A = (r, o) => (o.startsWith(`${r}: `) ? o.slice(`${r}: `.length) : o);
async function resolveHookImport({ spelled: r, importer: o, root: e, pluginName: p }, f) {
  let t = `${p}: cannot import "${r}" (from ${relative(e, o) || o}):`,
    a = T(o, r),
    x = relative(e, a);
  if (x === ".." || x.startsWith(`..${sep}`) || isAbsolute(x))
    throw new HooksError(`${t} it is outside the plugin's folder (${e})`);
  let m = [];
  for (let u of O(a)) {
    let v = f.get(u);
    if (v !== void 0) return { file: u, source: v };
    try {
      let n = await readPluginFile(u, e, p);
      return { file: u, source: n };
    } catch (n) {
      let d = l(n);
      if (!(n instanceof HooksError) || !H.some((L) => d.endsWith(L)))
        throw new HooksError(`${t} ${A(p, d)}`);
      let D = n.cause === void 0;
      m.push(D ? d : `${d} (${String(n.cause)})`);
    }
  }
  throw new HooksError(
    `${t} no such file under ${e}`,
    m.length === 0 ? void 0 : { cause: m.join("; ") },
  );
}
var j = (r, o, e) => new HooksError(`${r}: ${o} ${e}`);
var createModuleTooLargeError = (r, o) =>
  j(r, o, `takes the module over ${MAX_TOTAL_SOURCE_BYTES} bytes in total and was not read`);
var createTooManyFilesError = (r, o) =>
  j(r, o, `is past the ${MAX_LINKED_FILES} files a hooks module may link and was not read`);
var OPERATION_EVENT_NAMES = [
  "model.complete",
  "model.classify",
  "model.fork",
  "audio.play",
  "audio.speak",
  "mcp.call",
  "session.cwd",
  "session.model",
  "session.turnCount",
  "session.id",
  "session.messages",
  "session.repo",
  "session.surface",
  "session.authorize",
  "turn.abort",
  "flag.value",
  "tool.list",
  "tool.register",
  "agent.list",
  "ui.toast",
  "ui.status",
  "ui.log",
  "ui.notice",
  "ui.invalidate",
  "fs.readFile",
  "fs.writeFile",
  "fs.listDir",
  "fs.exists",
  "fs.stat",
  "fs.ancestors",
  "store.get",
  "store.set",
  "store.delete",
  "store.keys",
  "http.fetch",
  "process.run",
];
var HOOK_EVENT_NAMES = [
  "PreToolUse",
  "tool.call",
  "ui.render",
  "ui.resolve",
  "ui.press",
  "ui.input",
  "ui.select",
  "agent.offer",
  "agent.spawn",
  "prompt.submit",
  "prompt.section",
  "prompt.context",
  "tool.describe",
  "skill.prompt",
  "attribution.text",
  "session.start",
  "turn.start",
  "turn.step",
  "turn.complete",
  "engine.create",
  ...OPERATION_EVENT_NAMES,
];
var isHookEventName = (r) => HOOK_EVENT_NAMES.includes(r);
var isOperationEventName = (r) => OPERATION_EVENT_NAMES.includes(r);
var I = new Set(
  HOOK_EVENT_NAMES.filter((r) => r.includes(".")).map((r) => r.slice(0, r.indexOf("."))),
);
var M = new RegExp(
  String.raw`^[\p{ID_Start}$_][\p{ID_Continue}$\u200C\u200D]*` +
    String.raw`\.[\p{ID_Start}$_][\p{ID_Continue}$\u200C\u200D]*$`,
  "u",
);
var isPluginEventName = (r) => M.test(r) && !I.has(r.slice(0, r.indexOf(".")));
export {
  formatAbortReason,
  HooksError,
  validateNextArgument,
  getStringErrorCause,
  isAbortSignal,
  createUnloadedModuleError,
  getSourceLoaderName,
  transpileHookSource,
  MAX_SOURCE_BYTES,
  MAX_LINKED_FILES,
  MAX_TOTAL_SOURCE_BYTES,
  CLAUDE_CODE_MODULE_ID,
  createBadImportError,
  isRelativeImportPath,
  createOversizeSourceError,
  resolvePluginFile,
  readPluginFile,
  resolveHookImport,
  createModuleTooLargeError,
  createTooManyFilesError,
  OPERATION_EVENT_NAMES,
  HOOK_EVENT_NAMES,
  isHookEventName,
  isOperationEventName,
  isPluginEventName,
};

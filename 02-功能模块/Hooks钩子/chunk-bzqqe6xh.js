// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isRecord } from "../../01-核心基础设施/共享小工具-未细化/is-record.js";
class Je extends Error {
  name = "HooksError";
}
function QMn(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
function NHt(r, o = "aborted") {
  let { reason: e } = r;
  return e instanceof Error ? e.message : e === void 0 ? o : String(e);
}
function pdr(r, o) {
  if (!isRecord(r))
    throw new Je(
      `${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`,
    );
  return r;
}
var fdr = (r) =>
  typeof r === "object" &&
  r !== null &&
  "aborted" in r &&
  typeof r.addEventListener === "function" &&
  typeof r.removeEventListener === "function";
var FHt = (r) => new Je(`${r}: its environment was unloaded`);
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
var ZMn = (r) => y[E.find((o) => r.endsWith(o)) ?? ""] ?? "js";
function eNn(r, o) {
  let e = ZMn(r);
  return e === "js"
    ? o
    : new Bun.Transpiler({ loader: e }).transformSync(
        e === "ts" ? o : `${h}${o}`,
      );
}
var tNn = 1048576;
var mdr = 512;
var gdr = 8388608;
var c = (r) => (r instanceof Error && "code" in r ? String(r.code) : "EIO");
var w = (r, o, e) => new Je(`${r}: ${o}: no such file`, { cause: c(e) });
async function g(r, o) {
  try {
    return await r;
  } catch (e) {
    throw o(e);
  }
}
var V = (r, o, e) => new Je(`${r}: ${o}: not readable (${c(e)})`);
var oNn = (r, o) => new Je(`${r}: ${o} is over ${tNn} bytes and was not read`);
import { lstat, realpath } from "fs/promises";
import { basename, isAbsolute as q, relative as G, sep as J } from "path";
async function sNn(r, o, e) {
  let p = await g(realpath(o), (m) => V(e, basename(o), m)),
    f = (m) => w(e, r, m),
    t = await g(realpath(r), f),
    a = G(p, t);
  if (a === ".." || a.startsWith(`..${J}`) || q(a))
    throw new Je(`${e}: ${r}: ${t} resolves outside the plugin's folder`);
  let x = await g(lstat(t), f);
  if (!x.isFile()) throw new Je(`${e}: ${r}: not a regular file`);
  return { real: t, size: x.size };
}
async function iNn(r, o, e) {
  let { real: p, size: f } = await sNn(r, o, e);
  if (f > tNn) throw oNn(e, r);
  try {
    return await readFile(p, "utf8");
  } catch (t) {
    throw w(e, r, t);
  }
}
import { sep as or } from "path";
function O(r) {
  let o = [r];
  if (r.endsWith(".js")) {
    let e = r.slice(0, -3);
    o.push(`${e}.ts`, `${e}.tsx`);
  }
  for (let e of E) (o.push(`${r}${e}`), o.push(`${r}${or}index${e}`));
  return o;
}
var rot = "claude-code";
var nNn = (r, o, e) =>
  new Je(
    `${r}: cannot import "${o}" (from ${e}): a hooks module imports its own files by relative path and "${rot}", nothing else`,
  );
import { dirname, resolve } from "path";
var T = (r, o) =>
  [".", "..", "./", "../"].includes(o) ? resolve(dirname(r), o, "index") : resolve(dirname(r), o);
var rNn = (r) =>
  r === "." || r === ".." || r.startsWith("./") || r.startsWith("../");
var H = [
  "no such file",
  "not a regular file",
  "resolves outside the plugin's folder",
];
import { isAbsolute as xr, relative as N, sep as nr } from "path";
var A = (r, o) => (o.startsWith(`${r}: `) ? o.slice(`${r}: `.length) : o);
async function aNn({ spelled: r, importer: o, root: e, pluginName: p }, f) {
  let t = `${p}: cannot import "${r}" (from ${N(e, o) || o}):`,
    a = T(o, r),
    x = N(e, a);
  if (x === ".." || x.startsWith(`..${nr}`) || xr(x))
    throw new Je(`${t} it is outside the plugin's folder (${e})`);
  let m = [];
  for (let u of O(a)) {
    let v = f.get(u);
    if (v !== void 0) return { file: u, source: v };
    try {
      let n = await iNn(u, e, p);
      return { file: u, source: n };
    } catch (n) {
      let d = l(n);
      if (!(n instanceof Je) || !H.some((L) => d.endsWith(L)))
        throw new Je(`${t} ${A(p, d)}`);
      let D = n.cause === void 0;
      m.push(D ? d : `${d} (${String(n.cause)})`);
    }
  }
  throw new Je(
    `${t} no such file under ${e}`,
    m.length === 0 ? void 0 : { cause: m.join("; ") },
  );
}
var j = (r, o, e) => new Je(`${r}: ${o} ${e}`);
var Lmr = (r, o) =>
  j(r, o, `takes the module over ${gdr} bytes in total and was not read`);
var Mmr = (r, o) =>
  j(r, o, `is past the ${mdr} files a hooks module may link and was not read`);
var $Ht = [
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
var BYt = [
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
  ...$Ht,
];
var Nje = (r) => BYt.includes(r);
var Nmr = (r) => $Ht.includes(r);
var I = new Set(
  BYt.filter((r) => r.includes(".")).map((r) => r.slice(0, r.indexOf("."))),
);
var M = new RegExp(
  String.raw`^[\p{ID_Start}$_][\p{ID_Continue}$\u200C\u200D]*` +
    String.raw`\.[\p{ID_Start}$_][\p{ID_Continue}$\u200C\u200D]*$`,
  "u",
);
var UHt = (r) => M.test(r) && !I.has(r.slice(0, r.indexOf(".")));
export {
  NHt,
  Je,
  pdr,
  QMn,
  fdr,
  FHt,
  ZMn,
  eNn,
  tNn,
  mdr,
  gdr,
  rot,
  nNn,
  rNn,
  oNn,
  sNn,
  iNn,
  aNn,
  Lmr,
  Mmr,
  $Ht,
  BYt,
  Nje,
  Nmr,
  UHt,
};

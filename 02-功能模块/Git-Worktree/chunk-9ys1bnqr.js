// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Zke, jo, Bs, nur } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { R, dt, ge, A, Po } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Np, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { mkdir as z } from "fs/promises";
import {
  basename as k,
  delimiter as g,
  dirname as O,
  resolve as q,
} from "path";
var fn = Object.freeze([
    "-c",
    "core.hooksPath=/dev/null",
    "-c",
    "core.fsmonitor=",
  ]),
  Q7t = 2000,
  Z7t = Object.freeze([
    ...fn,
    "-c",
    "safe.bareRepository=explicit",
    "-c",
    "protocol.file.allow=never",
  ]),
  Int = [
    "GIT_DIR",
    "GIT_WORK_TREE",
    "GIT_COMMON_DIR",
    "GIT_INDEX_FILE",
    "GIT_CEILING_DIRECTORIES",
    "GIT_DISCOVERY_ACROSS_FILESYSTEM",
    "GIT_OBJECT_DIRECTORY",
    "GIT_ALTERNATE_OBJECT_DIRECTORIES",
    "GIT_SHALLOW_FILE",
    "GIT_CONFIG_COUNT",
    "GIT_CONFIG_PARAMETERS",
    "GIT_CONFIG_GLOBAL",
    "GIT_CONFIG_SYSTEM",
    "GIT_CONFIG",
  ],
  X = /^GIT_CONFIG_(KEY|VALUE)_\d+$/,
  dPn = new RegExp(X.source, "i"),
  Z = new Set(Int);
function Fo(e, t = process.env) {
  let r = {};
  for (let s of Int) r[s] = void 0;
  let o = new Set(Object.keys(e ?? {}).map((s) => s.toUpperCase()));
  for (let s of Object.keys(t)) {
    let i = s.toUpperCase();
    if (Z.has(i) || dPn.test(s) || (o.has(i) && !(e && s in e))) r[s] = void 0;
  }
  return { ...t, ...r, ...e };
}
function Vke() {
  return a.CLAUDE_CODE_REMOTE || a.CLAUDE_CODE_PLUGIN_PREFER_HTTPS;
}
var TL = "--upload-pack=git-upload-pack";
function D() {
  return P() === "windows" ? "\\\\.\\NUL" : "/dev/null";
}
var ee = /^core\.hooksPath=(?:\/dev\/null|\\\\\.\\nul)$/i;
function b() {
  return [
    ["core.fsmonitor", ""],
    ["core.hooksPath", D()],
    ["core.askPass", ""],
    ["protocol.ext.allow", "never"],
    ["submodule.recurse", "false"],
    ["log.showSignature", "false"],
  ];
}
var re = new Set(["core.hooksPath", "core.askPass", "submodule.recurse"]);
function eXt(
  e,
  t,
  r,
  o = r.GIT_CONFIG_COUNT,
  { allowRepoGitHooks: s = !1 } = {},
) {
  let i = k(e).toLowerCase();
  if (!/^git(\.exe|\.cmd|\.bat|\.com)?$/.test(i)) return null;
  let d = s ? b().filter(([c]) => !re.has(c)) : b(),
    l = U(t).map((c) => t[c]);
  return {
    args: d
      .filter(([c]) => !l.some((_) => _.startsWith(`${c}=`)))
      .flatMap(([c, _]) => ["-c", `${c}=${_}`])
      .concat(oe(t)),
    env: { ...r, ...G2e(o, d), GIT_PROXY_COMMAND: r.GIT_PROXY_COMMAND ?? "" },
  };
}
var te = new Set([
  "-C",
  "--git-dir",
  "--work-tree",
  "--namespace",
  "--super-prefix",
  "--config-env",
  "--attr-source",
  "--exec-path",
]);
function U(e) {
  let t = [],
    r = 0;
  while (r < e.length) {
    let o = e[r];
    if (o === "-c" && r + 1 < e.length) (t.push(r + 1), (r += 2));
    else if (te.has(o) && r + 1 < e.length) r += 2;
    else if (o.startsWith("-")) r += 1;
    else break;
  }
  return t;
}
function oe(e) {
  let t = [...e];
  for (let r of U(t)) if (ee.test(t[r])) t[r] = `core.hooksPath=${D()}`;
  return t;
}
var aB = {
  GIT_TERMINAL_PROMPT: "0",
  GIT_ASKPASS: "",
  GCM_INTERACTIVE: "never",
};
function Bcr(e) {
  let t = {};
  for (let [r, o] of Object.entries(aB)) if (p(e, r) === void 0) t[r] = o;
  return t;
}
function Kke(e = process.env) {
  return {
    ...e,
    ...E(e, (t, r) => Object.hasOwn(aB, t) && r !== t),
    ...aB,
    ...G2e(p(e, "GIT_CONFIG_COUNT"), [["credential.interactive", "false"]], e),
  };
}
function E(e, t) {
  let r = {};
  for (let o of Object.keys(e)) if (t(o.toUpperCase(), o)) r[o] = void 0;
  return r;
}
function p(e, t) {
  if (e[t] !== void 0 || P() !== "windows") return e[t];
  for (let [r, o] of Object.entries(e))
    if (r.toUpperCase() === t && o !== void 0) return o;
  return;
}
function G2e(e, t, r = {}) {
  let o = Number(e),
    s = Number.isInteger(o) && o > 0 ? o : 0,
    i = { GIT_CONFIG_COUNT: String(s + t.length) };
  t.forEach(([l, c], _) => {
    ((i[`GIT_CONFIG_KEY_${s + _}`] = l), (i[`GIT_CONFIG_VALUE_${s + _}`] = c));
  });
  let d = new Set(Object.keys(i));
  return { ...E(r, (l, c) => d.has(l) && !d.has(c)), ...i };
}
var zie = [
    "-c",
    "core.sshCommand=ssh -o BatchMode=yes -o StrictHostKeyChecking=yes",
  ],
  ne = "-o BatchMode=yes -o StrictHostKeyChecking=yes";
function se(e) {
  let t = p(e, "GIT_SSH_COMMAND"),
    r = p(e, "GIT_SSH");
  if (t === void 0 && r === void 0) return e;
  let o = t !== void 0 ? ce(t) : (r ?? "");
  if (ie(e, o) !== "ssh") return e;
  let s =
    t !== void 0 && t.trim() !== ""
      ? t
      : r !== void 0 && r.trim() !== ""
        ? jo([r])
        : "ssh";
  return {
    ...e,
    ...E(e, (i) => i === "GIT_SSH_COMMAND" || i === "GIT_SSH"),
    GIT_SSH: void 0,
    GIT_SSH_COMMAND: `${s} ${ne}`,
  };
}
function ie(e, t) {
  let r = p(e, "GIT_SSH_VARIANT")?.trim().toLowerCase();
  if (r !== void 0 && r !== "" && r !== "auto")
    return r === "ssh" ? "ssh" : "other";
  return k(t.trim().replace(/\\/g, "/"))
    .toLowerCase()
    .replace(/\.exe$/, "") === "ssh"
    ? "ssh"
    : "other";
}
function ce(e) {
  let t = e.trim().match(/^(?:"([^"]*)"|'([^']*)'|(\S+))/);
  return t?.[1] ?? t?.[2] ?? t?.[3] ?? "";
}
var ue = [
  "-c",
  "protocol.ext.allow=never",
  "-c",
  "protocol.fd.allow=never",
  "-c",
  "protocol.git.allow=never",
  "-c",
  "protocol.ftp.allow=never",
  "-c",
  "protocol.ftps.allow=never",
];
function de(e) {
  return {
    ...e,
    ...E(e, (t) => t === "GIT_ALLOW_PROTOCOL"),
    GIT_ALLOW_PROTOCOL: void 0,
  };
}
function ae(e) {
  let t = p(e, "GIT_ALLOW_PROTOCOL");
  if (t === void 0) return [];
  let r = new Set(t.split(":"));
  return ["https", "http", "ssh", "file"]
    .filter((o) => !r.has(o))
    .flatMap((o) => ["-c", `protocol.${o}.allow=never`]);
}
function le(e) {
  return [...ue, ...ae(e)];
}
function fe(e = Kke(_e())) {
  let t = le(e);
  return { pinArgs: t, inCheckoutArgs: [...fn, ...zie, ...t], env: se(de(e)) };
}
function _e() {
  let e = new Set(Int.filter((r) => !r.startsWith("GIT_CONFIG"))),
    t = process.env;
  return {
    ...t,
    ...E(t, (r) => e.has(r)),
    ...Object.fromEntries([...e].map((r) => [r, void 0])),
  };
}
function Vie(e) {
  let t = fe();
  return { ...t, env: { ...t.env, GIT_CEILING_DIRECTORIES: B(O(e)) } };
}
function B(e) {
  if (((e = q(e)), e.includes(g)))
    throw new R(
      `Cannot run git under ${e}: its path contains "${g}", which git's discovery ceiling (a "${g}"-separated list) cannot express. Use a location without "${g}" for this directory (the plugins cache \u2014 CLAUDE_CODE_PLUGIN_CACHE_DIR \u2014 or the temporary directory \u2014 TMPDIR \u2014 whichever this path is under).`,
      "git working directory path contains the PATH delimiter; git discovery ceiling inexpressible",
    );
  return e;
}
async function fxt(e, t) {
  let r = O(e);
  return (
    await z(r, { recursive: !0 }),
    { cwd: r, env: { ...t, GIT_CEILING_DIRECTORIES: B(O(r)) } }
  );
}
var pe = 1000,
  Ee = 60;
function YQ(
  e,
  {
    abortSignal: t,
    timeout: r = 10 * Ee * pe,
    input: o,
    stdio: s = ["ignore", "pipe", "pipe"],
    useToolMemoryCgroup: i,
  } = {},
) {
  t?.throwIfAborted();
  using d = Np`exec: ${e.slice(0, 200)}`;
  try {
    let l = nur(e, {
      env: process.env,
      maxBuffer: 1e6,
      timeout: r,
      cwd: Q(),
      stdio: s,
      reject: !1,
      input: o,
      useToolMemoryCgroup: i,
    });
    if (!l.stdout) return null;
    return l.stdout.trim() || null;
  } catch {
    return null;
  }
}
var S = 1000,
  C = 60;
function Fe(
  e,
  t,
  r = { timeout: 10 * C * S, preserveOutputOnError: !0, useCwd: !0 },
) {
  return Be(e, t, {
    allowRepoGitHooks: r.allowRepoGitHooks,
    abortSignal: r.abortSignal,
    timeout: r.timeout,
    preserveOutputOnError: r.preserveOutputOnError,
    cwd: r.cwd ?? (r.useCwd ? Q() : void 0),
    env: r.env,
    stdin: r.stdin,
    input: r.input,
    stdout: r.stdout,
    stderr: r.stderr,
    maxBuffer: r.maxBuffer,
    stripFinalNewline: r.stripFinalNewline,
    useToolMemoryCgroup: r.useToolMemoryCgroup,
    toolCgroupClass: r.toolCgroupClass,
  });
}
function H(e) {
  return (
    A(e) === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER" ||
    e?.isMaxBuffer === !0 ||
    e?.name === "MaxBufferError"
  );
}
var Oe = new Set(["EPIPE", "ECONNRESET", "ENOTCONN", "EOF"]);
function Se(e) {
  let t = {},
    r;
  try {
    r = e.stdin;
  } catch {
    return t;
  }
  if (!r) return t;
  return (
    r.removeAllListeners("error"),
    r.on("error", (o) => {
      let s = A(o) ?? "unknown";
      if (Oe.has(s)) return;
      ((t.truncatedBy ??= s), e.kill());
    }),
    t
  );
}
function Ce(e, t) {
  if (e.shortMessage) return e.shortMessage;
  if (typeof e.signal === "string") return e.signal;
  return String(t);
}
async function Be(
  e,
  t,
  {
    abortSignal: r,
    timeout: o = 10 * C * S,
    preserveOutputOnError: s = !0,
    cwd: i,
    env: d,
    extendEnv: l,
    maxBuffer: c,
    shell: _,
    stdin: W,
    input: I,
    stdout: T,
    stderr: m,
    stripFinalNewline: N,
    allowRepoGitHooks: J,
    useToolMemoryCgroup: V = !0,
    toolCgroupClass: K = "helper",
  } = { timeout: 10 * C * S, preserveOutputOnError: !0, maxBuffer: 1e6 },
) {
  let G = e,
    x = eXt(
      G,
      t,
      d ?? process.env,
      d && "GIT_CONFIG_COUNT" in d ? d.GIT_CONFIG_COUNT : a.GIT_CONFIG_COUNT,
      { allowRepoGitHooks: J },
    ),
    Y = x?.args ?? t,
    j = x?.env ?? d,
    w = Zke(G, Y, {
      signal: r,
      timeout: o,
      cwd: i,
      env: j,
      shell: _,
      stdin: W,
      input: I,
      ...(c === void 0 ? {} : { maxBuffer: c }),
      ...(N === void 0 ? {} : { stripFinalNewline: N }),
      ...(T === void 0 ? {} : { stdout: T }),
      ...(m === void 0 ? {} : { stderr: m }),
      ...(l === void 0 ? {} : { extendEnv: l }),
      ...(V ? Bs(K) : {}),
      reject: !1,
    }),
    v = I === void 0 ? void 0 : Se(w),
    u;
  try {
    u = await w;
  } catch (f) {
    let M = f.message;
    if (Po(f))
      n(`execFileNoThrow spawn failed: ${A(f)} ${M}`, { level: "error" });
    else if (H(f))
      return (
        n(`execFileNoThrow maxBuffer exceeded: ${M}`, { level: "error" }),
        { stdout: "", stderr: "", code: 1, maxBufferExceeded: !0 }
      );
    else h(dt(ge(f), "execFileNoThrow unexpected rejection"));
    return { stdout: "", stderr: "", code: 1 };
  }
  if (v?.truncatedBy !== void 0) {
    let f = `stdin write failed: ${v.truncatedBy}`;
    return (
      n(`execFileNoThrow ${f}`, { level: "error" }),
      { stdout: "", stderr: "", code: 1, error: f }
    );
  }
  if (!u.failed)
    return {
      stdout: u.stdout || "",
      stderr: u.stderr || "",
      code: 0,
      exitCode: 0,
    };
  let y = H(u) ? { maxBufferExceeded: !0 } : {},
    F = u.timedOut ? { timedOut: !0 } : {};
  if (!s)
    return {
      stdout: "",
      stderr: "",
      code: u.exitCode ?? 1,
      exitCode: u.exitCode,
      ...y,
      ...F,
    };
  let L = u.exitCode ?? 1;
  return {
    stdout: u.stdout || "",
    stderr: u.stderr || "",
    code: L,
    error: Ce(u, L),
    exitCode: u.exitCode,
    ...y,
    ...F,
  };
}
export {
  fn,
  Q7t,
  Z7t,
  Int,
  dPn,
  Fo,
  Vke,
  TL,
  eXt,
  aB,
  Bcr,
  Kke,
  G2e,
  zie,
  Vie,
  fxt,
  YQ,
  Fe,
  Be,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { rs } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { jsonStringify, jsonParse, getFsSurface } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { processIdentity } from "../守护服务-Daemon/chunk-035vf5et.js";
import { writeFileAtomic, writeFileAtomicSync } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
var m = 65534,
  C = new Set([
    "/",
    "/dev",
    "/dev/shm",
    "/run",
    "/run/user",
    "/tmp",
    "/var",
    "/var/tmp",
    "/var/run",
    "/home",
    "/var/home",
    "/root",
    "/var/roothome",
    "/mnt",
    "/mnt/wslg",
  ]);
function getSystemDirAllowlist() {
  return C;
}
import { readFile as v } from "fs/promises";
async function N() {
  return;
}
function D(e) {
  let t = [];
  for (let n of e.split(`
`)) {
    if (n.trim() === "") continue;
    let r = n.trim().split(/\s+/),
      o = Number(r[0]),
      s = Number(r[1]),
      u = Number(r[2]);
    if (
      r.length !== 3 ||
      !Number.isSafeInteger(o) ||
      o < 0 ||
      !Number.isSafeInteger(s) ||
      s < 0 ||
      !Number.isSafeInteger(u) ||
      u <= 0
    )
      return;
    t.push({ innerStart: o, hostStart: s, count: u });
  }
  return t;
}
function h(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function S() {
  try {
    return F(await v("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function F(e) {
  let t = e.trim();
  if (!/^\d+$/.test(t)) return;
  let n = Number(t);
  return Number.isSafeInteger(n) ? n : void 0;
}
function M(e, t) {
  if (e.length === 0 || t === void 0) return;
  return e.some((r) => t >= r.innerStart && t < r.innerStart + r.count)
    ? void 0
    : t;
}
async function detectUidCollapse() {
  return;
}
async function B(e, t) {
  let n = await S(),
    r = n ?? m;
  return {
    unmappedOwnerUid: M(e, n),
    uidCollapses: e.length === 0 || (t !== void 0 && t === r),
    rootUidAmbiguous: n === 0,
  };
}
async function getCurrentUid() {
  let e = process.getuid?.();
  if (e === void 0) return;
  return e;
}
function hasUidCollapse() {
  return ((processIdentity.uidsCollapse ??= L(getFsSurface())), processIdentity.uidsCollapse);
}
function L(e) {
  return !1;
}
import { createHash, randomBytes } from "crypto";
import {
  lstatSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import {
  chmod,
  lstat,
  mkdir,
  readdir,
  readFile as R,
  rm as I,
  utimes,
} from "fs/promises";
import { connect } from "net";
import { basename, dirname, join as i, resolve } from "path";
function c() {
  return i(getClaudeConfigDir(), "daemon");
}
function Z() {
  return createHash("sha256").update(resolve(getClaudeConfigDir())).digest("hex").slice(0, 8);
}
function getDaemonRuntimeDir() {
  let e = process.getuid?.() ?? 0,
    t = a.TERMUX_VERSION && a.PREFIX ? i(a.PREFIX, "tmp") : "/tmp";
  return i(t, `cc-daemon-${e}`, Z());
}
var ee = /^[a-f0-9]{16}$/;
function getPipeKeyPath() {
  return i(c(), "pipe.key");
}
var te = rs(
  () => {
    let e = getPipeKeyPath();
    for (let t = 0; t < 8; t++) {
      let n;
      try {
        let o = lstatSync(e);
        if (!o.isFile() || o.size > 4096) {
          try {
            rmSync(e, { recursive: !0, force: !0 });
          } catch {}
          n = "invalid";
        } else n = readFileSync(e, "utf8").trim();
      } catch (o) {
        if (!W(o)) throw o;
      }
      if (n !== void 0) {
        if (ee.test(n)) return n;
        if (n === "" && t < 3) continue;
        let o = randomBytes(8).toString("hex");
        return (writeFileAtomicSync(e, o, 384), o);
      }
      let r = randomBytes(8).toString("hex");
      mkdirSync(c(), { recursive: !0, mode: 448 });
      try {
        return (writeFileSync(e, r, { flag: "wx", mode: 384 }), r);
      } catch (o) {
        if (A(o) !== "EEXIST") throw o;
      }
    }
    throw Error("daemon pipe.key is not a valid nonce");
  },
  () => getClaudeConfigDir(),
);
function U(e) {
  return `\\\\.\\pipe\\cc-daemon-${te()}-${e}`;
}
function redactDaemonNonce(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function redactDaemonNonceFromError(e) {
  if (e instanceof Error) {
    if (((e.message = redactDaemonNonce(e.message)), typeof e.stack === "string"))
      e.stack = redactDaemonNonce(e.stack);
  }
  return e;
}
function getControlKeyPath() {
  return i(c(), "control.key");
}
async function readOrCreateControlKey() {
  let e = getControlKeyPath();
  try {
    let n = await lstat(e);
    if (n.isFile() && n.size <= 4096) {
      let r = (await R(e, "utf8")).trim();
      if (r) return r;
    } else await I(e, { recursive: !0, force: !0 }).catch(() => {});
  } catch (n) {
    if (!W(n)) throw n;
  }
  let t = randomBytes(16).toString("hex");
  return (await mkdir(c(), { recursive: !0, mode: 448 }), await writeFileAtomic(e, t, 384), t);
}
async function readControlKey() {
  try {
    let e = await lstat(getControlKeyPath());
    if (!e.isFile() || e.size > 4096) return;
    return (await R(getControlKeyPath(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function ensureDaemonDirSecure() {
  let e = c();
  if (getCurrentPlatform() === "windows") {
    (await mkdir(e, { recursive: !0 }), await chmod(e, 448).catch(() => {}));
    return;
  }
  (await mkdir(e, { recursive: !0, mode: 448 }), k());
  let t = process.getuid?.(),
    n = await lstat(e);
  if (t !== void 0 && n.uid !== t)
    throw Error(`refusing to use daemon dir: ${e} is owned by uid ${n.uid}`);
  if ((n.mode & 511) !== 448) await chmod(e, 448);
}
async function ensureDaemonRuntimeDir() {
  if (getCurrentPlatform() === "windows") return;
  let e = getDaemonRuntimeDir();
  await mkdir(e, { recursive: !0, mode: 448 });
  let t = new Date();
  (await utimes(e, t, t).catch(() => {}), await _([dirname(e), e]));
}
var NOT_OWNED_ERROR_CODE = "ENOTOWNED";
async function _(e) {
  let t = process.getuid?.();
  k();
  for (let n of e) {
    let r = await lstat(n);
    if (t !== void 0 && r.uid !== t)
      throw Object.assign(
        Error(`refusing to bind: ${n} is owned by uid ${r.uid}`),
        { code: NOT_OWNED_ERROR_CODE },
      );
    if ((r.mode & 511) !== 448) await chmod(n, 448);
  }
}
var UID_COLLAPSE_REFUSAL_MESSAGE =
  "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function k() {
  if (hasUidCollapse()) throw Object.assign(Error(UID_COLLAPSE_REFUSAL_MESSAGE), { code: NOT_OWNED_ERROR_CODE });
}
async function ensureSocketDirsOwned(e) {
  if (getCurrentPlatform() === "windows") {
    await mkdir(e, { recursive: !0 }).catch(() => {});
    return;
  }
  await ensureDaemonRuntimeDir();
  let t = [getPtySocketDir(), getRendezvousDir()];
  for (let n of t) await mkdir(n, { recursive: !0, mode: 448 });
  if (!t.includes(e)) {
    if (
      await mkdir(e, { recursive: !0, mode: 448 }).then(
        () => !0,
        () => !1,
      )
    )
      t.push(e);
  }
  await _(t);
}
function pruneStaleDaemonDirs() {
  if (getCurrentPlatform() === "windows") return;
  let e = getDaemonRuntimeDir(),
    t = dirname(e),
    n = basename(e);
  readdir(t, { withFileTypes: !0 })
    .then(async (r) => {
      for (let o of r) {
        if (!o.isDirectory() || o.name === n) continue;
        let s = i(t, o.name);
        if (!(await ne(i(s, "control.sock")))) continue;
        let u = await lstat(s).catch(() => null);
        if (!u || Date.now() - u.mtimeMs < 1e4) continue;
        let p = await readdir(i(s, "rv")).catch(() => []),
          g = await readdir(i(s, "pty")).catch(() => []),
          w = await readdir(i(s, "spare")).catch(() => []);
        if (p.length || g.length || w.length) continue;
        await I(s, { recursive: !0, force: !0 }).catch(() => {});
      }
    })
    .catch(() => {});
}
function ne(e) {
  let t,
    n = new Promise((o) => {
      t = o;
    }),
    r = connect(e);
  return (
    r.setTimeout(1000, () => {
      (r.destroy(), t(!1));
    }),
    r.on("error", (o) => {
      let s = A(o);
      t(s === "ENOENT" || s === "ECONNREFUSED" || s === "ENOTSOCK");
    }),
    r.once("connect", () => {
      (r.end(`{"op":"ping"}
`),
        t(!1));
    }),
    n
  );
}
function getDispatchDir() {
  return i(c(), "dispatch");
}
function getRejectedDispatchDir() {
  return i(c(), "dispatch", "rejected");
}
function getRosterFilePath() {
  return i(c(), "roster.json");
}
var ATTACH_JOURNAL_NAMESPACE = "attach-journal";
function getAttachJournalDir() {
  return i(c(), ATTACH_JOURNAL_NAMESPACE);
}
function getRendezvousDir() {
  return i(getDaemonRuntimeDir(), "rv");
}
function getDaemonAuthDir() {
  return i(c(), "auth");
}
function getCredentialFilePath(e) {
  return i(getDaemonAuthDir(), `${e}.json`);
}
function getHostManagedDir() {
  return i(c(), "host-managed");
}
function getHostManagedMarkerPath(e) {
  return i(getHostManagedDir(), e);
}
function getTokensFilePath(e) {
  return i(getDaemonAuthDir(), `${e}.tokens.json`);
}
function getRendezvousSocketPath(e) {
  if (getCurrentPlatform() === "windows") return U(`rv-${e}`);
  return i(getRendezvousDir(), `${e}.sock`);
}
function getPtySocketDir() {
  return i(getDaemonRuntimeDir(), "pty");
}
function getPtySocketPath(e) {
  if (getCurrentPlatform() === "windows") return U(`pty-${e}`);
  return i(getPtySocketDir(), `${e}.sock`);
}
function getSparePtyDir() {
  return i(getDaemonRuntimeDir(), "spare");
}
function getSparePtySocketPath(e) {
  return i(getSparePtyDir(), `${e}.pty.sock`);
}
function getSpareClaimSocketPath(e) {
  return i(getSparePtyDir(), `${e}.claim.sock`);
}
function getPtyPidDir() {
  return i(c(), "pty-pids");
}
function getPtyPidFilePath(e) {
  return i(getPtyPidDir(), `${e}.pid`);
}
function getPtyHostStderrPath(e) {
  return T(e, "err");
}
function getPtyLateOutputPath(e) {
  return T(e, "late");
}
function T(e, t) {
  if (getCurrentPlatform() === "windows") return i(getPtyPidDir(), `${e.split("\\").pop()}.${t}`);
  return `${e}.${t}`;
}
function getPtyExecExitPath(e) {
  if (getCurrentPlatform() === "windows") return i(getPtyPidDir(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function getControlSocketPath() {
  if (getCurrentPlatform() === "windows") return U("control");
  return (k(), i(getDaemonRuntimeDir(), "control.sock"));
}
var FRAME_KIND_DATA = 0,
  FRAME_KIND_CONTROL = 1,
  RING_BUFFER_MAX_BYTES = 262144,
  f = 5,
  MAX_FRAME_BYTES = 1048576,
  MAX_TERMINAL_DIMENSION = 1e4;
function encodeDataFrame(e) {
  let t = typeof e === "string" ? Buffer.from(e, "utf8") : e,
    n = Buffer.allocUnsafe(f + t.length);
  return (n.writeUInt32BE(t.length, 0), n.writeUInt8(FRAME_KIND_DATA, 4), t.copy(n, f), n);
}
function encodeControlFrame(e) {
  let t = Buffer.from(jsonStringify(e), "utf8"),
    n = Buffer.allocUnsafe(f + t.length);
  return (n.writeUInt32BE(t.length, 0), n.writeUInt8(FRAME_KIND_CONTROL, 4), t.copy(n, f), n);
}
function createFrameDecoder(e, t) {
  let n = Buffer.alloc(0),
    r = !1;
  return (o) => {
    if (r) return;
    n = n.length === 0 ? o : Buffer.concat([n, o]);
    while (n.length >= f) {
      let s = n.readUInt32BE(0);
      if (s > MAX_FRAME_BYTES) {
        ((r = !0), t(`frame too large (${s} > ${MAX_FRAME_BYTES})`));
        return;
      }
      let u = f + s;
      if (n.length < u) return;
      let p = n.readUInt8(4),
        g = n.subarray(f, u);
      if (((n = n.subarray(u)), p === FRAME_KIND_DATA))
        e({ kind: FRAME_KIND_DATA, payload: Buffer.from(g) });
      else if (p === FRAME_KIND_CONTROL) {
        let w;
        try {
          w = jsonParse(g.toString("utf8"));
        } catch {
          ((r = !0), t("bad ctrl json"));
          return;
        }
        e({ kind: FRAME_KIND_CONTROL, ctrl: w });
      } else {
        ((r = !0), t(`unknown frame kind ${p}`));
        return;
      }
    }
  };
}
export {
  getSystemDirAllowlist,
  detectUidCollapse,
  getCurrentUid,
  hasUidCollapse,
  getDaemonRuntimeDir,
  getPipeKeyPath,
  redactDaemonNonce,
  redactDaemonNonceFromError,
  getControlKeyPath,
  readOrCreateControlKey,
  readControlKey,
  ensureDaemonDirSecure,
  ensureDaemonRuntimeDir,
  NOT_OWNED_ERROR_CODE,
  UID_COLLAPSE_REFUSAL_MESSAGE,
  ensureSocketDirsOwned,
  pruneStaleDaemonDirs,
  getDispatchDir,
  getRejectedDispatchDir,
  getRosterFilePath,
  ATTACH_JOURNAL_NAMESPACE,
  getAttachJournalDir,
  getRendezvousDir,
  getDaemonAuthDir,
  getCredentialFilePath,
  getHostManagedDir,
  getHostManagedMarkerPath,
  getTokensFilePath,
  getRendezvousSocketPath,
  getPtySocketDir,
  getPtySocketPath,
  getSparePtyDir,
  getSparePtySocketPath,
  getSpareClaimSocketPath,
  getPtyPidDir,
  getPtyPidFilePath,
  getPtyHostStderrPath,
  getPtyLateOutputPath,
  getPtyExecExitPath,
  getControlSocketPath,
  FRAME_KIND_DATA,
  FRAME_KIND_CONTROL,
  RING_BUFFER_MAX_BYTES,
  MAX_FRAME_BYTES,
  MAX_TERMINAL_DIMENSION,
  encodeDataFrame,
  encodeControlFrame,
  createFrameDecoder,
};

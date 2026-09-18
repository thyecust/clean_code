// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { truncateToCodeUnits } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { isIterateeCall, sliceArrayRange, omitBy } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { hashSha256 } from "../../01-核心基础设施/核心工具-路径与平台/git-host-utils.js";
import { Bs } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execFileNoThrowWithCwd } from "./git-exec-hardening.js";
import {
  isSignalAborted,
  getDirSyncGitExe,
  runPinnedGit,
  withoutGitConfigOverrides,
  DIR_SYNC_GIT_ARGS,
  dirSyncGitEnv,
  GIT_OBJECT_ID_REGEX,
  CLAUDE_REF_PREFIX,
  isValidFullGitRefName,
  isClaudeSessionRef,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { toInteger } from "../../01-核心基础设施/核心工具-类型与数值/to-integer.js";
import { getSafeReadOpenFlags, getNoFollowOpenFlags } from "../制品发布-Artifact/chunk-01ymf0ar.js";
import { countMatching, dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { spawn } from "child_process";
import { constants } from "fs";
import { lstat, open } from "fs/promises";
var { ceil: Le, max: Ue } = Math;
function ze(e, t, r) {
  if (r ? isIterateeCall(e, t, r) : t === void 0) t = 1;
  else t = Ue(toInteger(t), 0);
  var i = e == null ? 0 : e.length;
  if (!i || t < 1) return [];
  var s = 0,
    o = 0,
    a = Array(Le(i / t));
  while (s < i) a[o++] = sliceArrayRange(e, s, (s += t));
  return a;
}
var q = ze;
import {
  dirname,
  isAbsolute,
  join,
  relative,
  resolve,
} from "path";
var DEFAULT_GIT_TIMEOUT_MS = 60000,
  We = 16777216,
  Xe = 67108864,
  O = 2048,
  Ve = /^0+$/;
async function runDirSyncGit(e, t, r = {}) {
  let i = await N(e);
  return i.kind === "refused" ? i.run : me(e, t, r, i.pins);
}
async function pe(e, t, { input: r, keepBytes: i, stopPastBytes: s }) {
  let o = await N(e);
  if (o.kind === "refused")
    return { bytes: 0, content: Buffer.alloc(0), stderr: o.run.stderr };
  let { signal: a, timeoutMs: c } = e,
    { leadingArgs: l, cwd: u } = M(e);
  return new Promise((d) => {
    let f = 0,
      y = [],
      p = !1,
      m = "",
      R = !1,
      b = (w) => {
        if (R) return;
        ((R = !0),
          d({
            ...(w !== void 0 && { exitCode: w }),
            bytes: f,
            content: y === null ? null : Buffer.concat(y),
            ...(p && { stopped: !0 }),
            stderr: truncateToCodeUnits(m, O),
          }));
      };
    try {
      let w = spawn(getDirSyncGitExe(), [...l, ...t], {
        cwd: u,
        env: D(e, o.pins),
        stdio: [r === void 0 ? "ignore" : "pipe", "pipe", "pipe"],
        signal: a,
        timeout: c,
        windowsHide: !0,
      });
      if (
        (w.stdout?.on("data", (B) => {
          if (p) return;
          if (((f += B.length), y !== null))
            if (f <= i) y.push(B);
            else y = null;
          if (!p && f > s) ((p = !0), w.kill());
        }),
        w.stderr?.on("data", (B) => {
          if (m.length < O) m += B.toString("utf8");
        }),
        w.stdout?.on("error", () => {}),
        w.stderr?.on("error", () => {}),
        w.once("error", () => b(void 0)),
        w.once("close", (B) => b(B ?? void 0)),
        r !== void 0 && w.stdin)
      )
        (w.stdin.on("error", () => {}), w.stdin.end(r));
    } catch {
      b(void 0);
    }
  });
}
async function N(e) {
  let t = (o) => ({ kind: "refused", run: Ke(o) }),
    r = await Z(e);
  if (r.kind === "refused") return t(r.why);
  let i =
      e.shallowFile ??
      (r.lender.kind === "lender" ? r.lender.shallowFile : void 0),
    s =
      e.hookPins === void 0 ? await ke(e) : { kind: "pins", pins: e.hookPins };
  if (s.kind === "unlisted")
    return isSignalAborted(e.signal)
      ? { kind: "refused", run: { stdout: "", stderr: "aborted" } }
      : t(`the configuration in force could not be listed (${s.detail})`);
  return {
    kind: "vetted",
    pins: { ...(i !== void 0 && { GIT_SHALLOW_FILE: i }), ...s.pins },
  };
}
async function Z(e) {
  let t = (a) => ({ kind: "refused", why: a }),
    { gitDir: r, commonDir: i } = e,
    s = await it(r);
  if (
    (i !== void 0 && !isAbsolute(i)) ||
    s.kind !== "directory" ||
    (s.commonDir !== void 0 &&
      (i === void 0 || relative(resolve(r, s.commonDir), i) !== ""))
  )
    return t(
      i !== void 0 && !isAbsolute(i)
        ? "the common directory it was opened with is not an absolute path"
        : s.kind !== "directory"
          ? "the git directory is not a plain directory (a gitfile, missing, or its commondir unreadable)"
          : i === void 0
            ? "a repository this code made holds a commondir file"
            : "the commondir file does not match the common directory it was opened with",
    );
  let o = i === void 0 ? await readAlternatesLender(r) : { kind: "none" };
  if (o.kind === "refused")
    return t(
      "objects/info/alternates is not the one-line local file this code writes (a network or device path, a quoted entry, or a file that is a link, oversized or unreadable)",
    );
  return { kind: "standing", lender: o };
}
function Ke(e) {
  return { stdout: "", stderr: `dir-sync: ${e}; git was not run` };
}
async function withHookPins(e) {
  if ((await Z(e)).kind === "refused") return e;
  let r = await ke(e);
  return r.kind === "pins" ? { ...e, hookPins: r.pins } : e;
}
function M({ gitDir: e, workTree: t }) {
  return {
    leadingArgs: [
      "--no-optional-locks",
      `--git-dir=${e}`,
      ...(t === void 0 ? [] : [`--work-tree=${t}`]),
      ...DIR_SYNC_GIT_ARGS,
      "-c",
      "gc.auto=0",
      "-c",
      "maintenance.auto=false",
      "-c",
      "advice.graftFileDeprecated=false",
    ],
    cwd: t ?? e,
  };
}
async function me(e, t, r, i) {
  let { signal: s, timeoutMs: o } = e,
    { leadingArgs: a, cwd: c } = M(e),
    l = await execFileNoThrowWithCwd(getDirSyncGitExe(), [...a, ...t], {
      cwd: c,
      env: D(e, i, r.env),
      extendEnv: !1,
      abortSignal: s,
      timeout: o,
      maxBuffer: Math.min(r.maxBuffer ?? We, Xe),
      ...(r.input === void 0 ? { stdin: "ignore" } : { input: r.input }),
    }),
    u =
      l.exitCode === 0 ||
      (l.exitCode !== void 0 && (r.answerExitCodes ?? []).includes(l.exitCode));
  return {
    exitCode: l.exitCode,
    stdout: u ? l.stdout : "",
    stderr: truncateToCodeUnits(l.stderr, O),
    ...(l.maxBufferExceeded && { maxBufferExceeded: !0 }),
  };
}
async function runDirSyncGitStreaming(e, t, r, i = {}) {
  let s = await N(e);
  if (s.kind === "refused") return { exitCode: void 0, stderr: s.run.stderr };
  let { signal: o, timeoutMs: a } = e,
    { leadingArgs: c, cwd: l } = M(e);
  return new Promise((u) => {
    let d = [],
      f = 0,
      y = !1,
      p;
    try {
      p = spawn(getDirSyncGitExe(), [...c, ...t], {
        cwd: l,
        env: D(e, s.pins, i.env),
        stdio: [i.input === void 0 ? "ignore" : "pipe", "pipe", "pipe"],
        signal: o,
        timeout: a,
        windowsHide: !0,
        ...Bs("helper"),
      });
    } catch {
      u({ exitCode: void 0, stderr: "" });
      return;
    }
    let m = () => truncateToCodeUnits(Buffer.concat(d).toString("utf8"), O);
    (p.stdout?.on("data", (b) => {
      if (y) return;
      try {
        r(b);
      } catch {
        ((y = !0), p.kill());
      }
    }),
      p.stderr?.on("data", (b) => {
        if (f < O * 4) (d.push(b), (f += b.length));
      }),
      p.stdout?.on("error", () => {}),
      p.stderr?.on("error", () => {}));
    let R = !1;
    if (i.input !== void 0)
      (p.stdin?.on("error", () => {
        R = !0;
      }),
        p.stdin?.end(i.input, () => {
          R ||= p.stdin?.writableFinished !== !0;
        }));
    (p.once("error", () => u({ exitCode: void 0, stderr: m() })),
      p.once("close", (b) =>
        u({ exitCode: y || R || b === null ? void 0 : b, stderr: m() }),
      ));
  });
}
function createNulDelimitedSplitter(e) {
  let t = [];
  return {
    push: (r) => {
      let i = 0;
      for (let s = r.indexOf(0, i); s !== -1; s = r.indexOf(0, i)) {
        let o = Buffer.concat([...t, r.subarray(i, s)]);
        (e(o.toString("utf8"), o), (t = []), (i = s + 1));
      }
      if (i < r.length) t.push(r.subarray(i));
    },
    complete: () => t.length === 0,
  };
}
function Je() {
  let e = [],
    t = [],
    r = createNulDelimitedSplitter((i, s) => {
      (e.push(i), t.push(s));
    });
  return {
    push: r.push,
    finish: () => (r.complete() ? { fields: e, fieldBytes: t } : null),
  };
}
async function runDirSyncGitCollectingFields(e, t, r = {}) {
  let i = Je(),
    s = await runDirSyncGitStreaming(e, t, i.push, r),
    o = s.exitCode === 0 ? i.finish() : null;
  return { ...s, fields: o?.fields ?? null, fieldBytes: o?.fieldBytes ?? null };
}
async function writeBlobToNewFile(e, t, r) {
  if (!F(t)) return !1;
  let i = await N(e);
  if (i.kind === "refused") return !1;
  if (
    await lstat(r).then(
      () => !0,
      (a) => !W(a),
    )
  )
    return !1;
  let o;
  try {
    o = await open(r, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | getNoFollowOpenFlags(), 384);
  } catch {
    return !1;
  }
  try {
    return await Qe(e, ["cat-file", "blob", t], o.fd, i.pins);
  } catch {
    return !1;
  } finally {
    await o.close();
  }
}
async function Qe(e, t, r, i) {
  let { signal: s, timeoutMs: o } = e,
    { leadingArgs: a, cwd: c } = M(e);
  return new Promise((l) => {
    let u = spawn(getDirSyncGitExe(), [...a, ...t], {
      cwd: c,
      env: D(e, i),
      stdio: ["ignore", r, "ignore"],
      signal: s,
      timeout: o,
      windowsHide: !0,
      ...Bs("helper"),
    });
    (u.once("error", () => l(!1)), u.once("close", (d) => l(d === 0)));
  });
}
function D({ gitDir: e, commonDir: t }, r, i = {}) {
  return withoutGitConfigOverrides(
    dirSyncGitEnv({
      GIT_GRAFT_FILE: "/dev/null",
      GIT_NO_REPLACE_OBJECTS: "1",
      GIT_COMMON_DIR: t ?? e,
      ...mergeGitConfigEnv(r, st(i)),
    }),
  );
}
function Ze(e, t, r) {
  let { signal: i } = e,
    { leadingArgs: s, cwd: o } = M(e);
  return spawn(getDirSyncGitExe(), [...s, ...t], {
    cwd: o,
    env: D(e, r),
    stdio: ["pipe", "pipe", "ignore"],
    signal: i,
    windowsHide: !0,
  }).on("error", () => {});
}
var et = 2,
  V = 256;
async function openBlobReader(e, { maxBytes: t }) {
  let { signal: r, timeoutMs: i } = e,
    s = 0,
    o = new Set(),
    a = null,
    c = !1,
    l = null,
    u = Promise.resolve(),
    d = async () => {
      if (c || r?.aborted === !0) return null;
      let m = await N(e);
      if (m.kind === "refused") return null;
      try {
        return new he(Ze(e, ["cat-file", "--batch"], m.pins));
      } catch {
        return null;
      }
    },
    f = (m) => {
      if ((m.end(), l === m)) l = null;
    },
    y = async (m) => {
      if (!F(m) || c || o.has(m)) return { kind: "unavailable" };
      if (l !== null && !l.alive) {
        if (l.overran && a !== null) o.add(a);
        else s += 1;
        f(l);
      }
      if (l === null) {
        if (s > et) return { kind: "unavailable" };
        let B = await d();
        if (B === null) return ((c = !0), { kind: "unavailable" });
        if (c) return (B.end(), { kind: "unavailable" });
        l = B;
      }
      let R = l;
      if ((await Z(e)).kind === "refused")
        return (f(R), (c = !0), { kind: "unavailable" });
      if (!R.alive) return { kind: "unavailable" };
      a = m;
      let b = await R.request(m, i);
      if (b === null) return (o.add(m), f(R), { kind: "unavailable" });
      if (b.kind === "absent") return { kind: "unavailable" };
      if (b.type !== "blob" || b.size > t)
        return (
          f(R),
          b.type === "blob" ? { kind: "too_large" } : { kind: "unavailable" }
        );
      let w = await R.body(b.size, i);
      if (w === null) return (o.add(m), f(R), { kind: "unavailable" });
      return { kind: "ok", bytes: w };
    },
    p = () => {
      ((c = !0), l?.end(), (l = null));
    };
  return {
    read: (m) => {
      let R = u.then(() => y(m));
      return (
        (u = R.catch(() => {
          return;
        })),
        R.catch(() => ({ kind: "unavailable" }))
      );
    },
    close: p,
    [Symbol.asyncDispose]: () => (p(), Promise.resolve()),
  };
}
var tt = /^([0-9a-f]{40}(?:[0-9a-f]{24})?) ([a-z]+) (\d{1,15})$/;
function nt(e, t) {
  if (e === t + " missing" || e === t + " ambiguous") return { kind: "absent" };
  let r = tt.exec(e);
  return r === null || r[1] !== t
    ? null
    : { kind: "found", type: r[2] ?? "", size: Number(r[3]) };
}
class he {
  child;
  alive = !0;
  overran = !1;
  chunks = [];
  buffered = 0;
  wake = null;
  phase = { kind: "idle" };
  constructor(e) {
    this.child = e;
    let t = () => {
      ((this.alive = !1), this.wake?.());
    };
    (e.stdout?.on("data", (r) => this.arrived(r)),
      e.stdout?.on("error", t),
      e.once("error", t),
      e.once("close", t),
      e.stdin?.on("error", t));
  }
  async request(e, t) {
    if (!this.alive || this.buffered > 0) return null;
    this.phase = { kind: "header", id: e };
    try {
      this.child.stdin?.write(
        e +
          `
`,
      );
    } catch {
      return null;
    }
    let r = await this.take(() => {
        let s = this.phaseNow();
        return s.kind === "sized" ? s.lineBytes : null;
      }, t),
      i = this.phaseNow();
    return r === null || i.kind !== "sized" ? null : i.header;
  }
  phaseNow() {
    return this.phase;
  }
  async body(e, t) {
    let r = await this.take((i) => (i >= e + 1 ? e + 1 : null), t);
    if (((this.phase = { kind: "idle" }), r === null || r[e] !== 10))
      return null;
    return r.subarray(0, e);
  }
  end() {
    ((this.alive = !1), (this.chunks = []), (this.buffered = 0));
    try {
      this.child.stdin?.end();
    } catch {}
    (this.child.kill(), this.wake?.());
  }
  arrived(e) {
    if (!this.alive) return;
    if (
      (this.chunks.push(e),
      (this.buffered += e.length),
      this.phase.kind === "header")
    ) {
      let r = rt(this.chunks, 10, V);
      if (r !== -1) {
        let i = this.peek(r).toString("utf8"),
          s = nt(i, this.phase.id);
        if (s === null) {
          ((this.overran = !0), this.end());
          return;
        }
        this.phase = {
          kind: "sized",
          header: s,
          lineBytes: r + 1,
          total: r + 1 + (s.kind === "found" ? s.size + 1 : 0),
        };
      } else if (this.buffered > V) {
        ((this.overran = !0), this.end());
        return;
      }
    }
    let t =
      this.phase.kind === "sized"
        ? this.phase.total
        : this.phase.kind === "header"
          ? V
          : 0;
    if (this.buffered > t) {
      ((this.overran = !0), this.end());
      return;
    }
    this.wake?.();
  }
  take(e, t) {
    return new Promise((r) => {
      let i = null,
        s = (a) => {
          if (i !== null) clearTimeout(i);
          ((this.wake = null), r(a));
        },
        o = () => {
          let a = this.alive ? e(this.buffered) : null;
          if (a !== null) s(this.shift(a));
          else if (!this.alive) s(null);
        };
      ((i = setTimeout((a) => a(null), t, s)), (this.wake = o), o());
    });
  }
  peek(e) {
    let t = this.chunks[0];
    return t !== void 0 && t.length >= e
      ? t.subarray(0, e)
      : Buffer.concat(this.chunks, this.buffered).subarray(0, e);
  }
  shift(e) {
    let t =
        this.chunks.length === 1
          ? this.chunks[0]
          : Buffer.concat(this.chunks, this.buffered),
      r = Buffer.from(t.subarray(0, e)),
      i = t.subarray(e);
    if (
      ((this.chunks = i.length === 0 ? [] : [i]),
      (this.buffered = i.length),
      this.phase.kind === "sized")
    )
      this.phase = { ...this.phase, lineBytes: 0, total: this.phase.total - e };
    return r;
  }
}
function rt(e, t, r) {
  let i = 0;
  for (let s of e) {
    if (i >= r) return -1;
    let o = s.subarray(0, r - i).indexOf(t);
    if (o !== -1) return i + o;
    i += s.length;
  }
  return -1;
}
async function it(e) {
  try {
    if (!(await lstat(e)).isDirectory()) return { kind: "other" };
  } catch {
    return { kind: "other" };
  }
  let t = await readBoundedTextFile(join(e, "commondir"));
  switch (t.kind) {
    case "absent":
      return { kind: "directory" };
    case "text":
      return { kind: "directory", commonDir: t.text.replace(/\n$/, "") };
    case "unreadable":
      return { kind: "other" };
  }
}
var ye = /^GIT_CONFIG_(?:COUNT|KEY_\d+|VALUE_\d+)$/;
function mergeGitConfigEnv(e, t) {
  let r = [...J(e), ...J(t)],
    i = Object.fromEntries(
      [...Object.entries(e), ...Object.entries(t)].filter(([s]) => !ye.test(s)),
    );
  return r.length === 0
    ? i
    : {
        ...i,
        GIT_CONFIG_COUNT: String(r.length),
        ...Object.fromEntries(
          r.flatMap(([s, o], a) => [
            [`GIT_CONFIG_KEY_${a}`, s],
            [`GIT_CONFIG_VALUE_${a}`, o],
          ]),
        ),
      };
}
function J(e) {
  let t = /^\d{1,5}$/.test(e.GIT_CONFIG_COUNT ?? "")
    ? Number(e.GIT_CONFIG_COUNT)
    : 0;
  return Array.from({ length: t }, (r, i) => [
    e[`GIT_CONFIG_KEY_${i}`] ?? "",
    e[`GIT_CONFIG_VALUE_${i}`] ?? "",
  ]).filter(([r]) => r !== "");
}
function st(e) {
  let t = J(e).filter(([r]) => !r.toLowerCase().startsWith("hook."));
  return mergeGitConfigEnv(
    omitBy(e, (r, i) => ye.test(i)),
    t.length === 0
      ? {}
      : {
          GIT_CONFIG_COUNT: String(t.length),
          ...Object.fromEntries(
            t.flatMap(([r, i], s) => [
              [`GIT_CONFIG_KEY_${s}`, r],
              [`GIT_CONFIG_VALUE_${s}`, i],
            ]),
          ),
        },
  );
}
var ot = /^hook\.(.*)\.(?:command|event|enabled)$/s,
  at = 1024;
async function ke(e) {
  let t = await me(e, ["config", "-z", "--list", "--name-only"], {}, {});
  if (t.exitCode !== 0) return { kind: "unlisted", detail: formatGitFailureDetail("config", t) };
  let r = dedupe(
    t.stdout.split("\x00").flatMap((s) => {
      let o = ot.exec(s)?.[1];
      return o === void 0 ? [] : [o];
    }),
  );
  if (r.some((s) => s.includes("\uFFFD")))
    return {
      kind: "unlisted",
      detail: "a configured hook has a name that is not valid text",
    };
  if (r.length > at)
    return { kind: "unlisted", detail: "too many configured hooks to pin" };
  let i = r.flatMap((s) => [
    [`hook.${s}.enabled`, "false"],
    [`hook.${s}.event`, ""],
  ]);
  return {
    kind: "pins",
    pins: Object.fromEntries([
      ["GIT_CONFIG_COUNT", String(i.length)],
      ...i.flatMap(([s, o], a) => [
        [`GIT_CONFIG_KEY_${a}`, s],
        [`GIT_CONFIG_VALUE_${a}`, o],
      ]),
    ]),
  };
}
async function readAlternatesLender(e) {
  let t = await readBoundedTextFile(join(e, "objects", "info", "alternates"));
  if (t.kind === "absent") return { kind: "none" };
  if (t.kind === "unreadable") return { kind: "refused" };
  let r = t.text
    .split(
      `
`,
    )
    .filter((o) => o !== "" && !o.startsWith("#"));
  if (r.some((o) => lt(o) || o.startsWith('"'))) return { kind: "refused" };
  let i = r[0];
  if (i === void 0) return { kind: "none" };
  let s = isAbsolute(i) ? i : resolve(join(e, "objects"), i);
  return { kind: "lender", shallowFile: join(dirname(s), "shallow") };
}
function lt(e) {
  return /^[\\/]{2}/.test(e);
}
var ce = 4096;
async function readBoundedTextFile(e, { firstBytes: t } = {}) {
  try {
    if (!(await lstat(e)).isFile()) return { kind: "unreadable" };
  } catch (i) {
    return W(i) ? { kind: "absent" } : { kind: "unreadable" };
  }
  let r;
  try {
    r = await open(e, getSafeReadOpenFlags());
  } catch (i) {
    return W(i) ? { kind: "absent" } : { kind: "unreadable" };
  }
  try {
    let i = await r.stat();
    if (!i.isFile() || (t === void 0 && i.size >= ce))
      return { kind: "unreadable" };
    let s = Buffer.alloc(t ?? ce),
      { bytesRead: o } = await r.read(s, 0, s.length, 0);
    return t !== void 0 || o === i.size
      ? { kind: "text", text: s.toString("utf8", 0, o) }
      : { kind: "unreadable" };
  } catch {
    return { kind: "unreadable" };
  } finally {
    await r.close().catch(() => {});
  }
}
function formatGitFailureDetail(e, t) {
  let r = t.exitCode ?? "with no status (killed, timed out, or not spawned)",
    i = t.stderr
      .split(
        `
`,
      )
      .find((s) => s.trim() !== "");
  return `${e} exited ${r}${i === void 0 ? "" : `: ${i.replace(/[\p{Cc}\p{Cf}]/gu, " ").trim()}`}`;
}
async function resolveRefObjectIds(e, t) {
  if (t.length === 0) return new Map();
  if (!t.every(isValidFullGitRefName)) return null;
  let r = await runDirSyncGit(e, [
    "for-each-ref",
    "--format=%(objectname) %(refname)",
    ...t,
  ]);
  if (r.exitCode !== 0) return null;
  let i = new Set(t),
    s = r.stdout
      .split(
        `
`,
      )
      .filter((o) => o !== "")
      .map((o) => {
        let [a = "", c = ""] = o.split(" ");
        return { id: a, name: c };
      });
  if (s.some((o) => !GIT_OBJECT_ID_REGEX.test(o.id))) return null;
  return new Map(s.filter((o) => i.has(o.name)).map((o) => [o.name, o.id]));
}
async function writeSessionRef(e, t, r, i) {
  if (!isClaudeSessionRef(t) || !F(r) || (i.kind === "replace" && !F(i.current))) return !1;
  return (
    (await runDirSyncGit(e, ["update-ref", "--no-deref", t, r, ...ut(i)])).exitCode === 0
  );
}
async function writeSessionRefs(e, t) {
  if (!t.every((i) => isClaudeSessionRef(i.name) && F(i.id))) return !1;
  if (t.length === 0) return !0;
  return (
    (
      await runDirSyncGit(e, ["update-ref", "--stdin"], {
        input: t
          .map(
            (i) => `option no-deref
update ${i.name} ${i.id}
`,
          )
          .join(""),
      })
    ).exitCode === 0
  );
}
async function deleteSessionRefs(e, t) {
  if (!t.every(isClaudeSessionRef)) return !1;
  if (t.length === 0) return !0;
  return (
    (
      await runDirSyncGit(e, ["update-ref", "--stdin"], {
        input: t
          .map(
            (i) => `option no-deref
delete ${i}
`,
          )
          .join(""),
      })
    ).exitCode === 0
  );
}
function ut(e) {
  switch (e.kind) {
    case "create":
      return [""];
    case "replace":
      return [e.current];
    case "force":
      return [];
  }
}
function F(e) {
  return GIT_OBJECT_ID_REGEX.test(e) && !Ve.test(e);
}
var be = 512,
  ee = { GIT_NO_LAZY_FETCH: "1" },
  dt = ["filter", "working-tree-encoding", "ident"],
  ct = 16,
  we = be * 80 + 262144;
function quoteGitPath(e) {
  return `"${e.replace(/["\\\x00-\x1f\x7f]/g, (r) => {
    switch (r) {
      case '"':
        return '\\"';
      case "\\":
        return "\\\\";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "\t":
        return "\\t";
      default:
        return "\\" + r.charCodeAt(0).toString(8).padStart(3, "0");
    }
  })}"`;
}
async function Re(e, t, r, i) {
  if (t.length === 0 || i <= 0 || r?.aborted === !0)
    return { pairs: [], spawns: 0 };
  let s = await runPinnedGit(
      e,
      ["hash-object", "--stdin-paths"],
      r,
      we,
      ee,
      t.map(quoteGitPath).join(`
`) +
        `
`,
      { filterDriversOff: !0 },
    ),
    o = s.stdout
      .split(
        `
`,
      )
      .map((l) => l.replace(/\r$/, ""))
      .filter((l) => /^[0-9a-f]{40}([0-9a-f]{24})?$/.test(l))
      .slice(0, t.length),
    a = t.slice(0, o.length).map((l, u) => [l, o[u]]);
  if (s.code === 0 && o.length === t.length) return { pairs: a, spawns: 1 };
  let c = await Re(e, t.slice(o.length + 1), r, i - 1);
  return { pairs: [...a, ...c.pairs], spawns: 1 + c.spawns };
}
async function te(e, t, r) {
  let i = await ve(e, t, dt, r);
  return i === null
    ? []
    : t.filter((s) => i.answered.has(s) && !i.claimed.has(s));
}
var _e = 15000;
async function ve(e, t, r, i, s = _e) {
  if (t.length === 0) return { answered: new Set(), claimed: new Set() };
  let o = AbortSignal.any([
      ...(i === void 0 ? [] : [i]),
      AbortSignal.timeout(s),
    ]),
    a = await runPinnedGit(
      e,
      ["check-attr", "-z", "--stdin", ...r],
      o,
      t.reduce((u, d) => u + r.length * (Buffer.byteLength(d) + 2304), 4096),
      ee,
      t.join("\x00") + "\x00",
    );
  if (a.code !== 0) return null;
  let c = a.stdout.split("\x00"),
    l = q(c.slice(0, c.length - (c.length % 3)), 3).flatMap(([u, , d]) =>
      u === void 0 || d === void 0
        ? []
        : [{ path: u, claimed: d !== "unspecified" && d !== "unset" }],
    );
  return {
    answered: new Set(l.map((u) => u.path)),
    claimed: new Set(l.flatMap((u) => (u.claimed ? [u.path] : []))),
  };
}
function createFilterAttributedChecker(e, { timeoutMs: t = _e } = {}) {
  return async (r, i) => {
    let s = await ve(e, r, ["filter"], i, t);
    return s === null
      ? null
      : new Set(r.filter((o) => s.claimed.has(o) || !s.answered.has(o)));
  };
}
function createFilterFreeBlobIdHasher(e, t) {
  return async (r, i, s) => {
    if (!(t !== void 0 ? t.has(r) : (await te(e, [r], s)).includes(r)))
      return null;
    let a = await runPinnedGit(e, ["hash-object", "--stdin", "--path", r], s, we, ee, i, {
        filterDriversOff: !0,
      }),
      c = a.stdout.trim();
    return a.code === 0 && /^[0-9a-f]{40}([0-9a-f]{24})?$/.test(c) ? c : null;
  };
}
async function getFilterFreePaths(e, t, r) {
  return new Set(await te(e, t, r));
}
function createCleanFilterBlobIds(e) {
  return async (t, r) => {
    let i = await te(e, t, r),
      s = q([...i], be),
      { pairs: o } = await s.reduce(
        async (a, c) => {
          let l = await a,
            u = await Re(e, c, r, ct - l.spawns);
          return {
            pairs: [...l.pairs, ...u.pairs],
            spawns: l.spawns + u.spawns,
          };
        },
        Promise.resolve({ pairs: [], spawns: 0 }),
      );
    return new Map(o);
  };
}
async function isBlobIdUnchanged(e, t, r, i) {
  return e.kind === "git_blob" && (await r([t], i)).get(t) === e.blobId;
}
import { randomUUID } from "crypto";
import {
  mkdir,
  readdir,
  rename,
  rm,
  unlink,
  writeFile,
} from "fs/promises";
import { basename } from "path";
var DEFAULT_MAX_BUNDLE_BYTES = 104857600,
  Fe = 16,
  Ee = 16,
  kt = 256,
  bt = 65536,
  wt = 64,
  xe = "PACK",
  INCOMING_PACK_PREFIX = "incoming-",
  Ce = "ccr-quarantine-",
  Rt = 16,
  I =
    "the pack was refused: malformed, not self-contained, or not exactly what its range names",
  U = 67108864,
  DELIVERED_IDS_SUFFIX = ".delivered",
  _t = 2592000000,
  Bt = 134217728,
  Ne = 900000,
  vt = 32,
  Et = /^object-format=(?:sha1|sha256)$/,
  Se = 16,
  xt = "ccr-sync";
function S(e, t) {
  return { ok: !1, reason: "git_error", stage: e, detail: t };
}
function E(e, t) {
  return { ok: !1, reason: "git_error", stage: e, detail: t };
}
function parseBundleHeader(e, { maxHeaderBytes: t = bt } = {}) {
  let r = Buffer.from(e.buffer, e.byteOffset, e.length),
    i = r.subarray(0, t).indexOf(`

`);
  if (i < 0) return null;
  let [s = "", ...o] = r.toString("utf8", 0, i).split(`
`),
    a = s === "# v2 git bundle" ? 2 : s === "# v3 git bundle" ? 3 : null;
  if (a === null) return null;
  let c = o.findIndex((f) => !f.startsWith("@")),
    l = o.slice(0, c === -1 ? o.length : c).map((f) => f.slice(1)),
    u = o.slice(l.length);
  if ((a === 2 && l.length > 0) || u.some((f) => f.startsWith("@")))
    return null;
  let d = u.map((f) => {
    let y = f.startsWith("-"),
      [p = "", ...m] = (y ? f.slice(1) : f).split(" ");
    return { isPrerequisite: y, id: p, name: m.join(" ") };
  });
  if (d.some((f) => !GIT_OBJECT_ID_REGEX.test(f.id) || (!f.isPrerequisite && f.name === "")))
    return null;
  return {
    version: a,
    capabilities: l,
    prerequisites: d.filter((f) => f.isPrerequisite).map((f) => f.id),
    refs: d
      .filter((f) => !f.isPrerequisite)
      .map((f) => ({ name: f.name, id: f.id })),
    packOffset: i + 2,
  };
}
function formatBundleHeader(e) {
  return Buffer.from(
    [
      `# v${e.version} git bundle`,
      ...e.capabilities.map((t) => `@${t}`),
      ...e.prerequisites.map((t) => `-${t}`),
      ...e.refs.map((t) => `${t.id} ${t.name}`),
      "",
      "",
    ].join(`
`),
  );
}
function validateBundleForRefs(e, { refNames: t, maxPrerequisites: r = kt }) {
  let i = parseBundleHeader(e);
  if (i === null) return { ok: !1, reason: "not_a_bundle" };
  if (!i.capabilities.every((a) => Et.test(a)))
    return { ok: !1, reason: "unsupported_bundle" };
  let s = new Set(t),
    o = new Set(i.refs.map((a) => a.name));
  if (
    s.size !== t.length ||
    s.size > Fe ||
    o.size !== i.refs.length ||
    o.size !== s.size ||
    !t.every((a) => o.has(a))
  )
    return { ok: !1, reason: "unexpected_refs" };
  if (i.prerequisites.length > r)
    return { ok: !1, reason: "too_many_prerequisites" };
  return { ok: !0, header: i };
}
async function createBundle({
  repository: e,
  tips: t,
  prerequisites: r,
  maxBytes: i = DEFAULT_MAX_BUNDLE_BYTES,
  declareForkPoints: s = !1,
}) {
  return St({
    repository: e,
    tips: t,
    prerequisites: r,
    maxBytes: i,
    declareForkPoints: s,
  }).catch((o) => (logError(o), S("threw", "unexpected throw")));
}
async function St({
  repository: e,
  tips: t,
  prerequisites: r,
  maxBytes: i,
  declareForkPoints: s,
}) {
  await ne(e.gitDir, (k) => k.startsWith(`${xt}-`), { directories: !0 });
  let o = { ok: !1, reason: "aborted" };
  if (
    t.length === 0 ||
    t.length > Fe ||
    new Set(t).size !== t.length ||
    !t.every(isValidFullGitRefName)
  )
    return S("arguments", "tips are not distinct plain ref names");
  if (
    r.length > Ee ||
    new Set(r).size !== r.length ||
    !r.every((k) => GIT_OBJECT_ID_REGEX.test(k))
  )
    return S("arguments", "prerequisites are not distinct object ids");
  if (!(i > 0)) return S("arguments", "maxBytes is not a positive number");
  if (isSignalAborted(e.signal)) return o;
  let a = await resolveRefObjectIds(e, t);
  if (a === null || a.size !== t.length)
    return isSignalAborted(e.signal)
      ? o
      : S("tips", "a tip does not resolve to an object id");
  let c = t.map((k) => ({ name: k, id: a.get(k) ?? "" })),
    l = (k) =>
      k === null
        ? isSignalAborted(e.signal)
          ? o
          : S("range", "could not look the prerequisites up")
        : k > 0
          ? { ok: !1, reason: "prerequisites_missing", missingCount: k }
          : null,
    u = [...new Set(c.map((k) => k.id)), ...r.map((k) => `^${k}`), "--"],
    d = await Pt(e, u);
  if (isSignalAborted(e.signal)) return o;
  if (d.kind === "failed")
    return l(await re(e, r)) ?? S("range", formatGitFailureDetail("rev-list", d.run));
  let f =
      d.kind === "listed"
        ? await Tt(e, r, [...d.commits, ...d.objects])
        : { missingCount: await re(e, r), floorBytes: await Gt(e, u) },
    y = l(f.missingCount);
  if (y !== null) return y;
  if (isSignalAborted(e.signal)) return o;
  if (f.floorBytes !== null && f.floorBytes > Se * i)
    return { ok: !1, reason: "too_large", sizeBytes: f.floorBytes };
  let p = d.commits,
    m = s ? dedupe([...r, ...d.forkPoints]) : [...r],
    R = m.length <= Ee ? m : [...r],
    b = p.size,
    w = c.filter((k) => p.has(k.id)),
    B = c.filter((k) => !p.has(k.id));
  if (w.length === 0) return { ok: !1, reason: "nothing_to_send", omitted: c };
  let v = await pe(
    e,
    [
      "-c",
      "pack.useSparse=false",
      "-c",
      "pack.useBitmaps=false",
      "-c",
      "pack.threads=1",
      "pack-objects",
      ...(d.kind === "listed" ? [] : ["--revs"]),
      "--window=2",
      "--delta-base-offset",
      "--stdout",
      "-q",
    ],
    {
      input:
        (d.kind === "listed"
          ? [...d.commits, ...d.objects.map(At)]
          : [...new Set(w.map((k) => k.id)), ...r.map((k) => `^${k}`)]
        ).join(`
`) +
        `
`,
      keepBytes: i,
      stopPastBytes: Se * i,
    },
  );
  if (isSignalAborted(e.signal)) return o;
  if (v.stopped || (v.exitCode === 0 && v.content === null))
    return { ok: !1, reason: "too_large", sizeBytes: v.bytes };
  if (v.exitCode !== 0 || v.content === null)
    return S("bundle_create", formatGitFailureDetail("pack-objects", v));
  let x = w.some((k) => k.id.length === 64),
    _ = Buffer.concat([
      formatBundleHeader({
        version: x ? 3 : 2,
        capabilities: x ? ["object-format=sha256"] : [],
        prerequisites: R,
        refs: w,
        packOffset: 0,
      }),
      v.content,
    ]);
  if (_.length > i) return { ok: !1, reason: "too_large", sizeBytes: _.length };
  let A = await resolveRefObjectIds(e, t);
  if (A === null)
    return isSignalAborted(e.signal)
      ? o
      : S("header", "could not re-read the tips after packing");
  if (!t.every((k) => A.get(k) === a.get(k)))
    return isSignalAborted(e.signal) ? o : S("header", "a tip moved while packing");
  if (isSignalAborted(e.signal)) return o;
  return {
    ok: !0,
    content: _,
    sizeBytes: _.length,
    sha256: hashSha256(_),
    refs: w,
    omitted: B,
    prerequisites: R,
    commitCount: b,
  };
}
async function Pt(e, t) {
  let r = await runDirSyncGit(e, ["rev-list", "--objects", "--boundary", ...t], {
    maxBuffer: U,
  });
  if (r.exitCode === 0) {
    let s = Ie(r.stdout);
    return { kind: "listed", ...Ae(s), objects: s.filter((o) => It.test(o)) };
  }
  if (!r.maxBufferExceeded) return { kind: "failed", run: r };
  let i = await runDirSyncGit(e, ["rev-list", "--boundary", ...t], { maxBuffer: U });
  return i.exitCode === 0
    ? { kind: "walked", ...Ae(Ie(i.stdout)) }
    : { kind: "failed", run: i };
}
var It = /^[0-9a-f]{40}(?:[0-9a-f]{24})? /,
  Pe = 256;
function At(e) {
  if (Buffer.byteLength(e) <= Pe) return e;
  let t = e.slice(0, e.indexOf(" ")),
    r = Pe - t.length - 1,
    i = [...e.slice(t.length + 1)],
    { kept: s } = i.reduceRight(
      (o, a) =>
        o.full || o.bytes + Buffer.byteLength(a) > r
          ? { bytes: o.bytes, kept: o.kept, full: !0 }
          : {
              bytes: o.bytes + Buffer.byteLength(a),
              kept: o.kept + 1,
              full: !1,
            },
      { bytes: 0, kept: 0, full: !1 },
    );
  return `${t} ${i.slice(i.length - s).join("")}`;
}
function Ie(e) {
  return e
    .split(
      `
`,
    )
    .filter((t) => t !== "");
}
function Ae(e) {
  return {
    commits: new Set(e.filter((t) => GIT_OBJECT_ID_REGEX.test(t))),
    forkPoints: e
      .filter((t) => t.startsWith("-"))
      .map((t) => t.slice(1))
      .filter((t) => GIT_OBJECT_ID_REGEX.test(t)),
  };
}
async function Tt(e, t, r) {
  let i = await runDirSyncGit(
      e,
      ["cat-file", "--batch-check=%(objectsize:disk) %(objecttype) %(rest)"],
      {
        input: [...t, ...r]
          .map(
            (u) => `${u}
`,
          )
          .join(""),
        maxBuffer: U,
      },
    ),
    s = i.stdout.split(`
`);
  if (i.exitCode !== 0 || s.length < t.length)
    return { missingCount: await re(e, t), floorBytes: null };
  let o = countMatching(s.slice(0, t.length), (u) => !/^\d+ commit/.test(u)),
    a = s.slice(t.length).flatMap((u) => {
      let d = /^(\d+) (commit|tag|tree|blob) ?(.*)$/.exec(u);
      if (d === null) return [];
      let [, f = "0", y = "", p = ""] = d;
      return [
        {
          key: y === "commit" || y === "tag" ? null : `${y} ${p}`,
          bytes: Number(f),
        },
      ];
    }),
    c = a.reduce(
      (u, { key: d, bytes: f }) =>
        d === null ? u : u.set(d, Math.max(f, u.get(d) ?? 0)),
      new Map(),
    ),
    l = [
      ...a.filter(({ key: u }) => u === null).map(({ bytes: u }) => u),
      ...c.values(),
    ].reduce((u, d) => u + d, 0);
  return { missingCount: o, floorBytes: l };
}
async function Gt(e, t) {
  let r = await runDirSyncGit(e, ["rev-list", "--objects", "--disk-usage", ...t]),
    i = r.stdout.trim();
  return r.exitCode === 0 && /^\d+$/.test(i) ? Number(i) : null;
}
async function receiveBundle({
  repository: e,
  content: t,
  targets: r,
  heldBases: i,
  heldRefs: s,
  maxBytes: o = DEFAULT_MAX_BUNDLE_BYTES,
}) {
  return Ot({
    repository: e,
    content: t,
    targets: r,
    heldBases: i,
    heldRefs: s,
    maxBytes: o,
  }).catch((a) => (logError(a), E("threw", "unexpected throw")));
}
async function Ot({
  repository: e,
  content: t,
  targets: r,
  heldBases: i,
  heldRefs: s,
  maxBytes: o,
}) {
  let a = { ok: !1, reason: "aborted" },
    c = [...r.keys()],
    l = [...r.values()];
  if (
    r.size === 0 ||
    !(o > 0) ||
    !c.every(isValidFullGitRefName) ||
    !l.every(isClaudeSessionRef) ||
    new Set(l).size !== l.length ||
    !i.every((_) => GIT_OBJECT_ID_REGEX.test(_)) ||
    (s !== "all" && !Lt(s.glob))
  )
    return E(
      "arguments",
      "targets do not map plain ref names onto distinct refs of ours, a held basis is not an object id, the held refs are not a glob under refs/claude/, or the byte cap is not positive",
    );
  let u = { bases: i, refs: s };
  if (t.length > o) return { ok: !1, reason: "too_large", sizeBytes: t.length };
  let d = validateBundleForRefs(t, { refNames: c });
  if (!d.ok) return d;
  let { header: f } = d,
    y = t.subarray(f.packOffset);
  if (y.length < vt || y.subarray(0, xe.length).toString("latin1") !== xe)
    return { ok: !1, reason: "not_a_bundle" };
  if (isSignalAborted(e.signal)) return a;
  let p = await $e(e, f.prerequisites);
  if (p === null)
    return isSignalAborted(e.signal)
      ? a
      : E("prerequisites", "could not look the prerequisites up");
  let m = await Me(
    e,
    f.prerequisites.filter((_) => !p.includes(_)),
    u,
  );
  if (m === null)
    return isSignalAborted(e.signal)
      ? a
      : E("prerequisites", "could not walk from the prerequisites");
  let R = f.prerequisites.filter((_) => p.includes(_) || m.includes(_));
  if (R.length > 0) {
    if (m.length > 0)
      logForDebugging(
        `dir-sync: a bundle names ${m.length} prerequisites this side holds only as objects, not as history of its own`,
      );
    return {
      ok: !1,
      reason: "prerequisites_missing",
      missingCount: R.length,
      missing: R.slice(0, wt),
    };
  }
  let b = join(e.gitDir, "objects", "pack"),
    w = Math.max(Ne, Rt * e.timeoutMs);
  await Promise.all([
    jt(b, w),
    ne(b, (_) => _.startsWith(Ce), { directories: !0, olderThanMs: w }),
    ne(
      join(e.gitDir, ...CLAUDE_REF_PREFIX.split("/").filter(Boolean)),
      (_) => _.endsWith(".lock"),
      { recursive: !0 },
    ),
  ]);
  let B = randomUUID(),
    v = join(b, `${Ce}${B}`),
    x = `${INCOMING_PACK_PREFIX}${B}`;
  try {
    await mkdir(join(v, "pack"), { recursive: !0 });
  } catch {
    return E("unpack", "could not create the quarantine directory");
  }
  try {
    let _ = await Ft({
      repository: e,
      header: f,
      pack: y,
      targets: r,
      quarantine: v,
      packDirectory: b,
      packName: x,
      held: u,
    });
    if (_.published) await De(join(b, x), [".keep"]);
    return _.outcome;
  } finally {
    await rm(v, { recursive: !0, force: !0 }).catch(() => {
      logForDebugging(
        "dir-sync: could not remove a receive quarantine (non-fatal; swept later)",
      );
    });
  }
}
async function Ft({
  repository: e,
  header: t,
  pack: r,
  targets: i,
  quarantine: s,
  packDirectory: o,
  packName: a,
  held: c,
}) {
  let l = (g) => ({ outcome: g, published: !1 }),
    u = l({ ok: !1, reason: "aborted" }),
    d = join(s, "pack", a),
    f = await runDirSyncGit(
      e,
      [
        "index-pack",
        "--strict",
        "--stdin",
        "--index-version=2",
        "--keep=dir-sync receive",
        `${d}.pack`,
      ],
      { input: r },
    );
  if (isSignalAborted(e.signal)) return u;
  if (f.exitCode === void 0) return l(E("unpack", formatGitFailureDetail("index-pack", f)));
  if (f.exitCode !== 0)
    return (
      logForDebugging(`dir-sync: ${formatGitFailureDetail("index-pack", f)}`),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  let y = {
      env: {
        GIT_ALTERNATE_OBJECT_DIRECTORIES: `"${s.replace(/["\\]/g, (g) => `\\${g}`)}"`,
      },
    },
    p = await Nt(`${d}.idx`, r.readUInt32BE(8));
  if (p === null)
    return isSignalAborted(e.signal)
      ? u
      : l(E("tips", "could not read the received pack index"));
  let m = dedupe(t.refs.map((g) => g.id));
  if (!m.every((g) => p.has(g)))
    return (
      logForDebugging("dir-sync: a tip the header names is not an object the pack delivered"),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  let R = await runDirSyncGit(e, ["cat-file", "--batch-check=%(objecttype)"], {
      ...y,
      input: m
        .map(
          (g) => `${g}
`,
        )
        .join(""),
    }),
    b = R.stdout
      .split(
        `
`,
      )
      .filter((g) => g !== "");
  if (R.exitCode !== 0 || b.length !== m.length)
    return isSignalAborted(e.signal) ? u : l(E("tips", "could not look the tips up"));
  if (!b.every((g) => g === "commit"))
    return (
      logForDebugging("dir-sync: a tip the header names is not a commit"),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  let w = await Ut(e, p, c, y.env);
  if (w === null)
    return isSignalAborted(e.signal)
      ? u
      : l(E("walk", "could not read the delivered commits"));
  if (w > 0)
    return (
      logForDebugging(
        `dir-sync: a bundle's commits reach ${w} parents outside the pack that are not history this side holds`,
      ),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  let B = (g) =>
      runDirSyncGit(
        e,
        [
          "rev-list",
          g,
          "--no-object-names",
          ...m,
          "--not",
          ...t.prerequisites,
          "--",
        ],
        { ...y, maxBuffer: U },
      ),
    v = (g) =>
      new Set(
        g
          .split(
            `
`,
          )
          .filter((P) => P !== "" && !P.startsWith("-")),
      ),
    x = await B("--objects");
  if (isSignalAborted(e.signal)) return u;
  if (x.exitCode === void 0) return l(E("walk", formatGitFailureDetail("rev-list", x)));
  if (x.exitCode !== 0)
    return (
      logForDebugging(`dir-sync: ${formatGitFailureDetail("rev-list", x)}`),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  let _ = v(x.stdout),
    A = countMatching([...p], (g) => !_.has(g)),
    k = countMatching([..._], (g) => !p.has(g));
  if (A === 0 && k > 0) {
    let g = await B("--objects-edge-aggressive");
    if (isSignalAborted(e.signal)) return u;
    if (g.exitCode === void 0) return l(E("walk", formatGitFailureDetail("rev-list", g)));
    if (g.exitCode !== 0)
      return (
        logForDebugging(`dir-sync: ${formatGitFailureDetail("rev-list", g)}`),
        l({ ok: !1, reason: "unpack_failed", detail: I })
      );
    k = countMatching([...v(g.stdout)], (P) => !p.has(P));
  }
  if (A > 0 || k > 0)
    return (
      logForDebugging(
        `dir-sync: a bundle's range names ${k} objects its pack lacks and its pack carries ${A} the range does not name`,
      ),
      l({ ok: !1, reason: "unpack_failed", detail: I })
    );
  if (isSignalAborted(e.signal)) return u;
  try {
    await writeFile(
      `${d}${DELIVERED_IDS_SUFFIX}`,
      [...p].join(`
`) +
        `
`,
      { flag: "wx" },
    );
  } catch {
    return l(E("record", "could not record which objects the pack delivered"));
  }
  let le = join(o, a);
  try {
    for (let g of [".pack", ".rev", ".keep", DELIVERED_IDS_SUFFIX, ".idx"])
      await rename(`${d}${g}`, `${le}${g}`).catch((P) => {
        if (!(g === ".rev" && W(P))) throw P;
      });
  } catch {
    return (
      await De(le, [".pack", ".rev", ".keep", DELIVERED_IDS_SUFFIX]),
      l(E("record", "could not move the pack into place"))
    );
  }
  let T = t.refs.map((g) => ({ name: i.get(g.name) ?? "", id: g.id })),
    z = { ...e, signal: void 0 },
    ue = {
      outcome: { ok: !0, refs: T, prerequisiteCount: t.prerequisites.length },
      published: !0,
    },
    de = await resolveRefObjectIds(
      z,
      T.map((g) => g.name),
    );
  if (de === null)
    return {
      outcome: E("update", "could not read the target refs"),
      published: !0,
    };
  if (await writeSessionRefs(z, T)) return ue;
  let j = await resolveRefObjectIds(
      z,
      T.map((g) => g.name),
    ),
    je = j !== null && T.every((g) => j.get(g.name) === de.get(g.name)),
    He = j !== null && T.every((g) => j.get(g.name) === g.id);
  if (je)
    return {
      outcome: {
        ok: !1,
        reason: "ref_update_failed",
        detail: "the ref transaction was declined",
      },
      published: !0,
    };
  if (He) return ue;
  return {
    outcome: E(
      "update",
      "the ref transaction ended in a state that could not be read back whole",
    ),
    published: !0,
  };
}
async function Nt(e, t) {
  let r;
  try {
    let s = await readFileWithMaxBytes(e, Math.max(1048576, 128 * t));
    if (s.kind !== "read") return null;
    r = s.content;
  } catch {
    return null;
  }
  let i = Dt(r);
  return i === null || i.length !== t ? null : new Set(i.map((s) => s.id));
}
var $t = 4285812579,
  Mt = 256;
function Dt(e) {
  let t = 8 + Mt * 4;
  if (e.length < t || e.readUInt32BE(0) !== $t || e.readUInt32BE(4) !== 2)
    return null;
  let r = e.readUInt32BE(t - 4),
    i = [20, 32].find((u) => {
      let d = e.length - t - r * (u + 8) - 2 * u;
      return d >= 0 && d % 8 === 0 && d / 8 <= r;
    });
  if (i === void 0) return null;
  let s = t,
    o = s + r * i + r * 4,
    a = o + r * 4,
    c = (e.length - a - 2 * i) / 8,
    l = [];
  for (let u = 0; u < r; u++) {
    let d = e.readUInt32BE(o + u * 4),
      f = d;
    if (d >= 2147483648) {
      let y = d - 2147483648;
      if (y >= c) return null;
      f = Number(e.readBigUInt64BE(a + y * 8));
    }
    l.push({ id: e.toString("hex", s + u * i, s + (u + 1) * i), offset: f });
  }
  return l;
}
async function ne(e, t, r = {}) {
  let i;
  try {
    i = await readdir(e, { recursive: r.recursive === !0 });
  } catch {
    return;
  }
  let s = Date.now() - (r.olderThanMs ?? Ne);
  await Promise.all(
    i
      .filter((o) => t(basename(o)))
      .map(async (o) => {
        let a = join(e, o);
        try {
          let c = await lstat(a);
          if (c.mtimeMs >= s) return;
          if (c.isFile() || (r.directories === !0 && c.isDirectory()))
            await rm(a, { recursive: !0, force: !0 });
        } catch (c) {
          if (!W(c))
            logForDebugging("dir-sync: could not sweep a stale sync file (non-fatal)");
        }
      }),
  );
}
async function jt(e, t) {
  let r;
  try {
    r = await readdir(e);
  } catch {
    return;
  }
  let i = new Set(r),
    s = Date.now();
  await Promise.all(
    r
      .filter(
        (o) =>
          o.startsWith(INCOMING_PACK_PREFIX) &&
          (o.endsWith(".keep") ||
            (o.endsWith(".pack") && !i.has(`${o.slice(0, -5)}.idx`)) ||
            (o.endsWith(".rev") && !i.has(`${o.slice(0, -4)}.idx`)) ||
            o.endsWith(`${DELIVERED_IDS_SUFFIX}.part`) ||
            o.endsWith(DELIVERED_IDS_SUFFIX)),
      )
      .map(async (o) => {
        let a = join(e, o),
          c = s - (o.endsWith(DELIVERED_IDS_SUFFIX) ? _t : t);
        try {
          let l = await lstat(a);
          if (l.isFile() && l.mtimeMs < c) await unlink(a);
        } catch (l) {
          if (!W(l))
            logForDebugging(
              "dir-sync: could not sweep a stale received pack file (non-fatal)",
            );
        }
      }),
  );
}
async function re(e, t) {
  return (await $e(e, t))?.length ?? null;
}
async function $e(e, t) {
  if (t.length === 0) return [];
  let r = await runDirSyncGit(e, ["cat-file", "--batch-check=%(objecttype)"], {
      input: t
        .map(
          (s) => `${s}
`,
        )
        .join(""),
    }),
    i = r.stdout
      .split(
        `
`,
      )
      .filter((s) => s !== "");
  if (r.exitCode !== 0 || i.length !== t.length) return null;
  return t.filter((s, o) => i[o] !== "commit");
}
async function readDeliveredObjectIds(e) {
  let t = join(e.gitDir, "objects", "pack"),
    r;
  try {
    r = await readdir(t);
  } catch (o) {
    return W(o) ? new Set() : null;
  }
  let i = r
      .filter((o) => o.startsWith(INCOMING_PACK_PREFIX) && o.endsWith(DELIVERED_IDS_SUFFIX))
      .map((o) => join(t, o)),
    s = await Promise.all(
      i.map(async (o) => {
        try {
          let a = await readFileWithMaxBytes(o, Bt);
          if (a.kind === "too_large")
            return (
              logForDebugging(
                "dir-sync: a delivered-ids record is larger than this side reads",
              ),
              null
            );
          return new Set(
            a.content
              .toString("utf8")
              .split(
                `
`,
              )
              .filter((c) => GIT_OBJECT_ID_REGEX.test(c)),
          );
        } catch (a) {
          if (W(a)) return new Set();
          return (
            logForDebugging("dir-sync: a delivered-ids record could not be read"),
            null
          );
        }
      }),
    );
  return s.includes(null)
    ? null
    : new Set(s.flatMap((o) => (o === null ? [] : [...o])));
}
var Ht = /^refs\/claude(?:\/(?!\.)[A-Za-z0-9._-]+)+\/\*$/;
function Lt(e) {
  return Ht.test(e) && !e.includes("..");
}
var Te = 1024,
  Ge = 20000;
async function Me(e, t, r, i = {}) {
  let s = dedupe(t);
  if (s.length === 0) return [];
  let o = await runDirSyncGit(
    e,
    [
      "rev-list",
      `--max-count=${Te}`,
      "--ignore-missing",
      "--stdin",
      "--not",
      ...r.bases,
      r.refs === "all" ? "--all" : `--glob=${r.refs.glob}`,
      "--",
    ],
    {
      env: i,
      input: s
        .map(
          (c) => `${c}
`,
        )
        .join(""),
    },
  );
  if (o.exitCode !== 0) return null;
  let a = new Set(
    o.stdout
      .split(
        `
`,
      )
      .filter((c) => c !== ""),
  );
  return a.size >= Te ? s : s.filter((c) => a.has(c));
}
async function Ut(e, t, r, i) {
  let s = [...t];
  if (s.length === 0) return 0;
  let o = await runDirSyncGit(e, ["cat-file", "--batch-check=%(objecttype)"], {
      env: i,
      input: s
        .map(
          (d) => `${d}
`,
        )
        .join(""),
    }),
    a = o.stdout
      .split(
        `
`,
      )
      .filter((d) => d !== "");
  if (o.exitCode !== 0 || a.length !== s.length) return null;
  let c = s.filter((d, f) => a[f] === "commit");
  if (c.length === 0) return 0;
  let l = [];
  for (let d = 0; d < c.length; d += Ge) {
    let f = await runDirSyncGit(
      e,
      ["rev-list", "--no-walk=unsorted", "--parents", "--stdin", "--"],
      {
        env: i,
        input: c
          .slice(d, d + Ge)
          .map(
            (y) => `${y}
`,
          )
          .join(""),
      },
    );
    if (f.exitCode !== 0) return null;
    l = l.concat(
      f.stdout
        .split(
          `
`,
        )
        .flatMap((y) => y.split(" ").slice(1)),
    );
  }
  let u = dedupe(l.filter((d) => GIT_OBJECT_ID_REGEX.test(d) && !t.has(d)));
  return (await Me(e, u, r, i))?.length ?? null;
}
async function readFileWithMaxBytes(e, t) {
  if (!(await lstat(e)).isFile()) throw Error("not a regular file");
  let r = await open(e, getSafeReadOpenFlags());
  try {
    let i = await r.stat();
    if (!i.isFile()) throw Error("not a regular file");
    return i.size > t
      ? { kind: "too_large", sizeBytes: i.size }
      : { kind: "read", content: await r.readFile() };
  } finally {
    await r.close();
  }
}
async function De(e, t) {
  await Promise.all(
    t.map((r) =>
      unlink(`${e}${r}`).catch((i) => {
        if (!W(i))
          logForDebugging("dir-sync: could not delete a received pack file (non-fatal)");
      }),
    ),
  );
}
async function removeTemporaryBundleFile(e) {
  await Promise.all(
    [e, `${e}.lock`].map((t) =>
      unlink(t).catch((r) => {
        if (!W(r))
          logForDebugging("dir-sync: could not delete a temporary bundle file (non-fatal)");
      }),
    ),
  );
}
export {
  DEFAULT_GIT_TIMEOUT_MS,
  runDirSyncGit,
  withHookPins,
  runDirSyncGitStreaming,
  createNulDelimitedSplitter,
  runDirSyncGitCollectingFields,
  writeBlobToNewFile,
  openBlobReader,
  mergeGitConfigEnv,
  readAlternatesLender,
  readBoundedTextFile,
  formatGitFailureDetail,
  resolveRefObjectIds,
  writeSessionRef,
  writeSessionRefs,
  deleteSessionRefs,
  quoteGitPath,
  createFilterAttributedChecker,
  createFilterFreeBlobIdHasher,
  getFilterFreePaths,
  createCleanFilterBlobIds,
  isBlobIdUnchanged,
  DEFAULT_MAX_BUNDLE_BYTES,
  INCOMING_PACK_PREFIX,
  DELIVERED_IDS_SUFFIX,
  parseBundleHeader,
  formatBundleHeader,
  validateBundleForRefs,
  createBundle,
  receiveBundle,
  readDeliveredObjectIds,
  readFileWithMaxBytes,
  removeTemporaryBundleFile,
};

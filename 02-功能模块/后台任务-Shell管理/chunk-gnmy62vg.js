// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isValidPathSegment, STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { getPtySocketDir, getPtySocketPath, getSparePtyDir, getPtyPidDir, getPtyPidFilePath, getPtyHostStderrPath, getPtyLateOutputPath, getPtyExecExitPath, encodeControlFrame } from "./chunk-djserjj5.js";
import { readRoster, updateRoster, writeReapedTerminalState, MAX_DETAIL_CHARS, clipWithEllipsis } from "./chunk-7wsy8vxb.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { readBoundedFile, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { sigtermThenKill, reapDetachedRepl, captureProcessStartTimeAsync } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { pg } from "../../00-第三方库/semver/chunk-jm5cswvd.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { toESM } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { lstat, readdir, unlink } from "fs/promises";
import { connect } from "net";
import { basename, join as x } from "path";
async function readExecExitStatus(e, t) {
  if (t.launch.mode !== "exec" || !e) return null;
  try {
    let i = await readBoundedFile(getPtyExecExitPath(e), 8192);
    if (i == null) return null;
    let r = JSON.parse(i);
    if (typeof r?.code !== "number") return null;
    let s =
        stripAnsi(typeof r.tail === "string" ? r.tail : "")
          .replace(
            /\r\n?/g,
            `
`,
          )
          .split(
            `
`,
          )
          .findLast((w) => w.trim())
          ?.trim() ?? "",
      c = clipWithEllipsis(redactSecretsFromText(s), MAX_DETAIL_CHARS);
    if (r.code === 0)
      return { state: "done", detail: c || "(no output)", code: 0 };
    let l = typeof r.signal === "string" ? r.signal : void 0;
    if (l === "SIGINT" || l === "SIGQUIT")
      return { state: "stopped", detail: "stopped", code: r.code };
    let f = l ? `${l} (${r.code})` : `exit ${r.code}`;
    return {
      state: "crashed",
      detail: c ? `${f} \u2014 ${c}` : f,
      signal: l,
      code: r.code,
    };
  } catch {
    return null;
  }
}
async function reapAllDaemonWorkers(e = {}, t) {
  return withFeatureTelemetry("daemon_bg_reap_all", async () => {
    let i = await readRoster({ silent: !0 }, t),
      r = new Map();
    for (let [a, o] of Object.entries(i.workers))
      r.set(a, {
        pid: o.pid,
        procStart: o.procStart,
        ptySock: o.ptySock,
        dispatch: o.dispatch,
        replPid: o.replPid,
        replProcStart: o.replProcStart,
      });
    let s = getCurrentPlatform() === "windows",
      [c, l] = s ? [getPtyPidDir(), ".pid"] : [getPtySocketDir(), ".sock"],
      f = s && t ? await listPtyPidFiles(t) : await readdir(c).catch(() => []),
      w = new Set(f.filter((a) => a.endsWith(l)));
    for (let a of f) {
      if (!a.endsWith(l)) {
        if (!s) {
          let d = [".err", ".late", ".exec-exit", ".err.read"].find((g) =>
            a.endsWith(`.sock${g}`),
          );
          if (d && !w.has(a.slice(0, -d.length))) {
            let g = a.slice(0, -`.sock${d}`.length);
            if (!(d === ".exec-exit" && r.has(g)))
              await unlink(x(c, a)).catch(() => {});
          }
        }
        continue;
      }
      let o = a.slice(0, -l.length);
      if (r.has(o)) continue;
      let u = s
        ? Number((t ? await readStoredPtyPid(t, o) : await readBoundedFile(getPtyPidFilePath(o), MAX_PTY_PID_FILE_BYTES)) ?? "0")
        : 0;
      r.set(o, { pid: u, ptySock: getPtySocketPath(o) });
    }
    if (!s) {
      let a = new Set();
      for (let u of r.values()) if (u.ptySock) a.add(u.ptySock);
      let o = await readdir(getSparePtyDir()).catch(() => []);
      for (let u of o) {
        if (!u.endsWith(".pty.sock")) continue;
        let d = x(getSparePtyDir(), u);
        if (a.has(d)) continue;
        r.set(`spare:${u}`, { pid: 0, ptySock: d });
      }
    }
    let m = 0,
      S = new Set();
    if (
      (await Promise.all(
        Array.from(r.entries()).map(async ([a, o]) => {
          let u = o.dispatch ? await readExecExitStatus(o.ptySock, o.dispatch) : null;
          if (o.ptySock && (await killPtySocket(o.ptySock, t))) m++;
          else if (o.pid) {
            let d = await killVerifiedProcess(o.pid, o.procStart),
              g = d !== "unverified" && (await reapDetachedRepl(o.replPid, o.replProcStart));
            switch (d) {
              case "killed":
                m++;
                break;
              case "unverified":
                S.add(a);
                return;
              case "gone":
              case "foreign":
                if (g) m++;
                break;
              default:
            }
          }
          if (!a.startsWith("spare:")) {
            let d = { state: "stopped", detail: "stopped" },
              g =
                u?.state === "done" ? u : e.supervisorKilledAll ? d : (u ?? d);
            if ((await writeReapedTerminalState(a, g.state, g.detail, void 0, t), s && t))
              await t
                .delete(STORAGE_KEYS.daemon(["pty-pids", basename(getPtyExecExitPath(o.ptySock ?? getPtySocketPath(a)))]))
                .catch(() => {});
            else await unlink(getPtyExecExitPath(o.ptySock ?? getPtySocketPath(a))).catch(() => {});
          }
          if (s)
            if (t) await L(t, a);
            else {
              await unlink(getPtyPidFilePath(a)).catch(() => {});
              let d = getPtyHostStderrPath(getPtySocketPath(a));
              (await unlink(d).catch(() => {}),
                await unlink(`${d}.read`).catch(() => {}),
                await unlink(getPtyLateOutputPath(getPtySocketPath(a))).catch(() => {}));
            }
        }),
      ),
      r.size > 0)
    )
      await updateRoster((a) => {
        for (let o of r.keys()) if (!S.has(o)) delete a.workers[o];
      }, t).catch(logError);
    return { reaped: m, kept: S.size };
  });
}
async function listPtyPidFiles(e) {
  let t = [],
    i;
  do {
    let r = await e
      .listEntries(
        { namespace: "daemon", relPath: ["pty-pids"] },
        { cursor: i, skipKeyStats: !0, skipScopeStats: !0 },
      )
      .catch(() => {
        return;
      });
    if (r === void 0 || !r.ok) return [];
    for (let s of r.value.items)
      if (s.kind === "key" && s.key.namespace === "daemon") {
        let c = s.key.relPath.at(-1);
        if (c !== void 0 && s.key.relPath.length === 2 && isValidPathSegment(c)) t.push(c);
      }
    i = r.value.cursor;
  } while (i !== void 0);
  return t;
}
var MAX_PTY_PID_FILE_BYTES = 4096;
async function M(e) {
  try {
    let t = await lstat(getPtyPidFilePath(e));
    return !t.isFile() || t.size > MAX_PTY_PID_FILE_BYTES;
  } catch (t) {
    return !W(t);
  }
}
async function readStoredPtyPid(e, t) {
  if (await M(t)) return null;
  let i = await e
    .readText([
      { key: STORAGE_KEYS.daemon(["pty-pids", `${t}.pid`]), offset: 0, length: MAX_PTY_PID_FILE_BYTES + 1 },
    ])
    .catch(() => {
      return;
    });
  if (i === void 0 || !i.ok) return null;
  let r = i.value.items[0];
  if (!r.found || r.totalBytes > MAX_PTY_PID_FILE_BYTES) return null;
  return r.value;
}
async function L(e, t) {
  (await e.delete(STORAGE_KEYS.daemon(["pty-pids", `${t}.pid`])).catch(() => {}),
    await E(e, getPtySocketPath(t)));
}
async function E(e, t) {
  let i = getPtyHostStderrPath(t);
  for (let r of [basename(i), `${basename(i)}.read`, basename(getPtyLateOutputPath(t))])
    await e.delete(STORAGE_KEYS.daemon(["pty-pids", r])).catch(() => {});
}
function killPtySocket(e, t) {
  return new Promise((i) => {
    let r = !1,
      s = (l) => {
        if (r) return;
        ((r = !0), i(l));
      },
      c = connect(e);
    (c.unref(),
      c.setTimeout(2000, () => {
        (c.destroy(), s(!1));
      }),
      c.on("error", () => {
        unlink(e).catch(() => {});
        let l = getPtyHostStderrPath(e);
        if (t && getCurrentPlatform() === "windows") E(t, e).catch(() => {});
        else
          (unlink(l).catch(() => {}),
            unlink(`${l}.read`).catch(() => {}),
            unlink(getPtyLateOutputPath(e)).catch(() => {}));
        s(!1);
      }),
      c.once("connect", () => {
        (c.resume(), c.write(encodeControlFrame({ t: "kill", sig: "SIGTERM" })));
      }),
      c.once("close", () => s(!0)));
  });
}
function pingPtySocket(e) {
  return new Promise((t) => {
    let i = !1,
      r = (c) => {
        if (i) return;
        ((i = !0), t(c));
      },
      s = connect(e);
    (s.unref(),
      s.setTimeout(250, () => {
        (s.destroy(), r(!1));
      }),
      s.on("error", () => r(!1)),
      s.once("connect", () => {
        (s.end(encodeControlFrame({ t: "pong" })), r(!0));
      }));
  });
}
async function killVerifiedProcess(e, t) {
  try {
    process.kill(e, 0);
  } catch (r) {
    if (A(r) !== "ESRCH") return "foreign";
    return sigtermThenKill([-e, e], t) ? "killed" : "gone";
  }
  if (t === void 0) return "foreign";
  let i = await captureProcessStartTimeAsync(e);
  if (i === void 0) return "unverified";
  if (i !== t) return "foreign";
  return sigtermThenKill([-e, e], t) ? "killed" : "gone";
}
var y = toESM(pg(), 1),
  R = ["dev", "engine"];
function getVersionTarget(e) {
  return R.find((t) => e.includes(`-${t}.`)) ?? null;
}
function hasVersionTarget(e) {
  return getVersionTarget(e) !== null;
}
function areVersionTargetsDifferent(e, t) {
  if (!e) return !1;
  let i = getVersionTarget(e),
    r = getVersionTarget(t);
  return i !== null && r !== null && i !== r;
}
function parseVersionTimestamp(e) {
  let t;
  for (let f of e.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g))
    t = f;
  let i = t?.[1],
    r = t?.[2];
  if (!i || !r) return null;
  let s = Date.UTC(
    Number(i.slice(0, 4)),
    Number(i.slice(4, 6)) - 1,
    Number(i.slice(6, 8)),
    Number(r.slice(0, 2)),
    Number(r.slice(2, 4)),
    Number(r.slice(4, 6)),
  );
  return new Date(s)
    .toISOString()
    .slice(0, 19)
    .replace(/[-:]/g, "")
    .replace("T", "t") === `${i}t${r}`
    ? s
    : null;
}
function isNewerBuildTimestamp(e, t) {
  let i = parseVersionTimestamp(e),
    r = parseVersionTimestamp(t);
  return i !== null && r !== null && r < i;
}
function isVersionGreater(e, t) {
  let i = parseVersionTimestamp(e),
    r = parseVersionTimestamp(t);
  if (i !== null && r !== null) {
    if (getVersionTarget(e) !== getVersionTarget(t)) return !1;
    return i > r;
  }
  if (hasVersionTarget(e) || hasVersionTarget(t)) return !1;
  return y.valid(e) !== null && y.valid(t) !== null && y.gt(e, t);
}
function satisfiesVersionRequirement(e, t, i) {
  if (!e) return !1;
  if (e === i) return !0;
  let r = parseVersionTimestamp(e);
  if (r !== null) return r >= t.commitMs;
  if (hasVersionTarget(e)) return !1;
  return y.valid(e) !== null && y.gte(e, t.release);
}
var _ = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  C = /\x1b\[\?([\d;]+)([hl])/g;
function createDecModeTracker() {
  let e = new Set(),
    t = "";
  return {
    feed(i, r) {
      let s = t ? t + i : i,
        c = 0,
        l = !1;
      for (let m of s.matchAll(C)) {
        let S = m[2] === "h";
        for (let a of m[1].split(";")) {
          let o = Number(a);
          if (_.has(o) && e.has(o) !== S) {
            if (S) (e.add(o), r?.(o));
            else e.delete(o);
            l = !0;
          }
        }
        c = m.index + m[0].length;
      }
      let f = s.slice(Math.max(c, s.length - 16)),
        w = f.lastIndexOf("\x1B");
      return (
        (t =
          w >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(w))
            ? f.slice(w)
            : ""),
        l
      );
    },
    seed(i) {
      for (let r of i) if (_.has(r)) e.add(r);
    },
    snapshot() {
      return [...e];
    },
  };
}
import { freemem } from "os";
function getLowMemoryStatus() {
  let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_low_mem_mb", 1024) * 1024 * 1024;
  if (e <= 0) return { lowMem: !1, level: void 0 };
  if (getCurrentPlatform() !== "macos") return { lowMem: freemem() < e, level: void 0 };
  let t = I();
  return { lowMem: t !== void 0 && t >= N, level: t };
}
function isLowMemory() {
  return getLowMemoryStatus().lowMem;
}
var T = { normal: 1, warning: 2, critical: 4 },
  N = T.critical;
function I() {
  try {
    let e = Bun.ant.memoryPressureLevel();
    return e === null ? void 0 : T[e];
  } catch (e) {
    logForDebugging(
      `bg low-mem: memoryPressureLevel failed: ${e instanceof Error ? e.message : String(e)}`,
      { level: "warn" },
    );
    return;
  }
}
function isBackgroundAttachUpgradeEnabled() {
  return getFeatureValue_CACHED_MAY_BE_STALE("tengu_bg_attach_upgrade", !0);
}
export {
  getVersionTarget,
  hasVersionTarget,
  areVersionTargetsDifferent,
  parseVersionTimestamp,
  isNewerBuildTimestamp,
  isVersionGreater,
  satisfiesVersionRequirement,
  createDecModeTracker,
  getLowMemoryStatus,
  isLowMemory,
  isBackgroundAttachUpgradeEnabled,
  readExecExitStatus,
  reapAllDaemonWorkers,
  listPtyPidFiles,
  MAX_PTY_PID_FILE_BYTES,
  readStoredPtyPid,
  killPtySocket,
  pingPtySocket,
  killVerifiedProcess,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 12 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { writeFileAtomicSync } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { parseNumericValue } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { setBgExitCause } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { isBunStandaloneExecutable, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { readSocketTokenFile, timingSafeStringEqual } from "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import {
  getPtyHostStderrPath,
  getPtyLateOutputPath,
  getPtyExecExitPath,
  FRAME_KIND_DATA,
  FRAME_KIND_CONTROL,
  RING_BUFFER_MAX_BYTES,
  MAX_TERMINAL_DIMENSION,
  encodeDataFrame,
  encodeControlFrame,
  createFrameDecoder,
} from "../后台任务-Shell管理/chunk-djserjj5.js";
import { copyEnvWithoutUndefined } from "../../01-核心基础设施/共享小工具-未细化/copy-env-without-undefined.js";
import { getXdgDataHome } from "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import {
  appendFileSync,
  createWriteStream,
  mkdirSync,
} from "fs";
import {
  appendFile,
  mkdir as ce,
  unlink as N,
  writeFile as ae,
} from "fs/promises";
import { createServer } from "net";
import { getPriority, setPriority } from "os";
import { dirname } from "path";
import {
  link as j,
  mkdir as q,
  stat as Y,
  unlink as J,
  writeFile as ee,
} from "fs/promises";
import { join as v, sep as te } from "path";
async function ne() {
  let r = v(getXdgDataHome(), "claude");
  if (!process.execPath.startsWith(v(r, "versions") + te)) return null;
  let n = v(r, "ClaudeCode.app", "Contents", "MacOS"),
    t = v(n, "claude");
  try {
    let o = (await Y(process.execPath)).ino;
    (await q(n, { recursive: !0 }),
      await ee(
        v(n, "..", "Info.plist"),
        `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string><key>NSLocalNetworkUsageDescription</key><string>Claude Code connects to servers and devices on your local network when commands you run need to reach them.</string></dict></plist>
`,
      ));
    try {
      if ((await Y(t)).ino === o) return t;
      await J(t);
    } catch {}
    return (await j(process.execPath, t), t);
  } catch {
    return null;
  }
}
async function z() {
  if (getCurrentPlatform() !== "macos") return;
  if (a.CLAUDE_BG_TCC_DISCLAIMED) {
    delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
    return;
  }
  let r = (await ne()) ?? process.execPath,
    t = [...(isBunStandaloneExecutable() ? [r] : [r, process.argv[1]]), ...process.argv.slice(2)],
    o = copyEnvWithoutUndefined(process.env);
  o.CLAUDE_BG_TCC_DISCLAIMED = "1";
  try {
    process.execve(r, t, o, { macDisclaimResponsibility: !0 });
  } catch {}
}
var fe = 1048576;
async function runPtyHost(r) {
  let n = r.indexOf("--"),
    t = r.includes("--bg-spare", n + 1);
  if (!t) await z();
  if (n < 3 || n === r.length - 1)
    return _(
      void 0,
      "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]",
    );
  let o = r[0];
  (process.on("uncaughtException", (e) =>
    _(o, `uncaught: ${e?.stack ?? String(e)}`),
  ),
    process.on("unhandledRejection", (e) =>
      _(o, `unhandledRejection: ${e?.stack ?? String(e)}`),
    ));
  let l = Number(r[1]) || 200,
    f = Number(r[2]) || 50,
    h = r[n + 1],
    m = r.slice(n + 2),
    c = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let A = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let x = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (x) {
    let e = await readSocketTokenFile(x);
    if (e?.ptyAuth) A = e.ptyAuth;
    else if (!A) await X(o, "tokens-file unreadable; DATA gate fail-open");
    if (c)
      (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH,
        await N(x).catch(() => {}));
  }
  if (getCurrentPlatform() !== "windows")
    try {
      setPriority(0, Math.min(getPriority(0) + 5, 19));
    } catch {}
  let B = he(RING_BUFFER_MAX_BYTES),
    p = new Set(),
    b = new WeakMap(),
    M = new WeakSet(),
    H = new WeakSet(),
    y = !1,
    g = !1,
    R = !1,
    O = process.ppid,
    L = 0,
    I = null,
    F = ye(process.env.CLAUDE_PTY_RECORD, l, f);
  function K(e) {
    for (let s of p) {
      if (s.destroyed) {
        p.delete(s);
        continue;
      }
      if (s.writableLength > fe) {
        (s.destroy(), p.delete(s));
        continue;
      }
      s.write(e);
    }
  }
  let S, d;
  try {
    ((S = new Bun.Terminal({
      cols: l,
      rows: f,
      data(e, s) {
        R = !0;
        let i = Buffer.from(s);
        if ((B.push(i), F?.write(i), p.size)) K(encodeDataFrame(i));
      },
    })),
      (d = Bun.spawn([h, ...m], {
        cwd: process.cwd(),
        env: { ...process.env, TERM: "xterm-256color" },
        terminal: S,
        windowsHide: !0,
        detached: !1,
        ...(t && { argv0: "claude bg-spare" }),
      })));
  } catch (e) {
    _(o, `spawn failed: ${String(e)}`);
  }
  function w(e, s) {
    if (!e.destroyed) e.write(s);
  }
  function V(e) {
    switch (e.t) {
      case "resize": {
        let s = Number(e.cols),
          i = Number(e.rows);
        if (s > 0 && s <= MAX_TERMINAL_DIMENSION && i > 0 && i <= MAX_TERMINAL_DIMENSION && !y && !g) {
          if ((S.resize(s, i), getCurrentPlatform() !== "windows")) {
            try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {}
            try {
              d.kill("SIGWINCH");
            } catch {}
          }
        }
        return;
      }
      case "kill": {
        let s = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
        try {
          g = me(s, d, S) || g;
        } catch {}
        if (s === "SIGTERM")
          setTimeout(() => {
            if (!y)
              try {
                d.kill("SIGKILL");
              } catch {}
          }, 5000).unref();
        return;
      }
      default:
        return;
    }
  }
  await N(o).catch(() => {});
  let C = createServer((e) => {
    (e.on("error", () => e.destroy()),
      e.once("close", () => p.delete(e)),
      w(
        e,
        encodeControlFrame({
          t: "hello",
          replPid: d.pid,
          version:
            typeof {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            } < "u"
              ? {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.263",
                  FEEDBACK_CHANNEL:
                    "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-09-06T01:08:56Z",
                  GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                  HOOKS_WORKER_URL:
                    "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  DD_SOURCEMAP_GROUP: "darwin",
                }.VERSION
              : void 0,
        }),
      ));
    for (let i of B.chunks) w(e, encodeDataFrame(i));
    if (
      (w(e, encodeControlFrame({ t: "live" })),
      p.add(e),
      (L = 0),
      b.set(e, { armed: !1, missed: 0 }),
      w(e, encodeControlFrame({ t: "ping" })),
      y)
    ) {
      (w(e, encodeControlFrame({ t: "exit", code: T, signal: U })), e.end());
      return;
    }
    let s = createFrameDecoder(
      (i) => {
        if (i.kind === FRAME_KIND_DATA) {
          if (A && !M.has(e)) {
            if (!H.has(e)) (H.add(e), w(e, encodeControlFrame({ t: "auth-required" })));
            return;
          }
          if (!y && !g) {
            if ((S.write(i.payload), c && getCurrentPlatform() !== "windows")) {
              let u = i.payload.includes(3)
                ? "SIGINT"
                : i.payload.includes(28)
                  ? "SIGQUIT"
                  : null;
              if (u) {
                I = u;
                try {
                  process.kill(-process.pid, u);
                } catch {}
                setImmediate(() => {
                  I = null;
                });
              }
            }
          }
        } else if (i.kind === FRAME_KIND_CONTROL)
          if (i.ctrl.t === "pong") {
            let u = b.get(e);
            if (u) ((u.armed = !0), (u.missed = 0));
          } else if (i.ctrl.t === "auth") {
            if (timingSafeStringEqual(i.ctrl.token, A)) M.add(e);
          } else V(i.ctrl);
      },
      () => e.destroy(),
    );
    e.on("data", s);
  });
  (C.on("error", (e) => {
    try {
      d.kill("SIGTERM");
    } catch {}
    _(o, `server error: ${String(e)}`);
  }),
    C.listen(o),
    C.unref());
  let E, k;
  if (getCurrentPlatform() !== "windows") {
    let e = parseNumericValue(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 60000,
      s = 3;
    ((k = setInterval(() => {
      if (y) return;
      for (let D of p) {
        let G = b.get(D);
        if (!G?.armed) continue;
        if ((G.missed++, G.missed >= 3)) (D.destroy(), p.delete(D));
        else w(D, encodeControlFrame({ t: "ping" }));
      }
    }, e)),
      k.unref());
    let i = parseNumericValue(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2000,
      u = 30;
    ((E = setInterval(() => {
      if (y) return;
      if (process.ppid === O || p.size > 0) {
        L = 0;
        return;
      }
      if (++L < u) return;
      (clearInterval(E),
        clearInterval(k),
        X(
          o,
          `orphan watchdog: ppid ${O}\u2192${process.ppid}, no client for ${u * i}ms`,
        ),
        setBgExitCause("ptyhost_orphan_watchdog"));
      try {
        d.kill("SIGTERM");
      } catch {}
      setTimeout(() => {
        if (!y)
          try {
            d.kill("SIGKILL");
          } catch {}
      }, 5000).unref();
    }, i)),
      E.unref());
  }
  for (let e of ["SIGTERM", "SIGINT", "SIGHUP"])
    process.on(e, () => {
      if (I === e) return;
      try {
        d.kill(e === "SIGHUP" ? "SIGTERM" : e);
      } catch {}
    });
  if (c && getCurrentPlatform() !== "windows")
    process.on("SIGQUIT", () => {
      if (I === "SIGQUIT") return;
      try {
        d.kill("SIGQUIT");
      } catch {}
    });
  let T = 0;
  T = await d.exited;
  let W = 0;
  for (let e = 0; e < 20; e++)
    if (((R = !1), await sleep(5), R)) W = 0;
    else if (++W >= 2) break;
  let U = d.signalCode ?? void 0;
  if (((y = !0), c))
    try {
      let e = getPtyExecExitPath(o),
        s = Buffer.concat(B.chunks).subarray(-4096),
        i = 0;
      while (i < 3 && i < s.length && (s[i] & 192) === 128) i++;
      let u = s.subarray(i).toString("utf8");
      writeFileAtomicSync(e, JSON.stringify({ code: T, signal: U, tail: u }), 384);
    } catch {}
  if (E) clearInterval(E);
  if (k) clearInterval(k);
  if (!g) S.close();
  if ((F?.close(), c && getCurrentPlatform() !== "windows")) {
    I = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {}
  }
  if ((K(encodeControlFrame({ t: "exit", code: T, signal: U })), p.size === 0))
    await pe(C, c ? () => ae(getPtyLateOutputPath(o), Buffer.concat(B.chunks)) : void 0);
  for (let e of p) e.end();
  if (
    (await Promise.race([
      new Promise((e) => C.close(() => e())),
      sleep(2000, void 0, { unref: !0 }),
    ]),
    getCurrentPlatform() !== "windows")
  )
    await N(o).catch(() => {});
  process.exit(T);
}
async function pe(r, n, t = 5000) {
  let o = new Promise((f) => r.once("connection", () => f())),
    l = (n ? n().catch(() => {}) : Promise.resolve()).then(() => sleep(t));
  await Promise.race([o, l]);
}
function me(r, n, t) {
  if (r === "SIGTERM" && getCurrentPlatform() === "windows") return (t.close(), !0);
  return (n.kill(r), !1);
}
function he(r) {
  let n = [],
    t = 0,
    o = 0;
  function l() {
    if (t > 0) ((n = n.slice(t)), (t = 0));
  }
  return {
    get chunks() {
      return (l(), n);
    },
    push(f) {
      (n.push(f), (o += f.length));
      while (o > r && n.length - t > 1) {
        o -= n[t++].length;
        for (let h = 0; h < 3;) {
          let m = n[t],
            c = 0;
          while (h + c < 3 && c < m.length && (m[c] & 192) === 128) c++;
          if (c > 0) ((n[t] = m.subarray(c)), (o -= c), (h += c));
          if (n[t].length > 0 || n.length - t === 1) break;
          t++;
        }
      }
      if (t >= n.length - t) l();
    },
  };
}
function ye(r, n, t) {
  if (!r) return;
  let o = process.hrtime.bigint(),
    l;
  try {
    l = createWriteStream(r, { flags: "w" });
  } catch {
    return;
  }
  l.on("error", () => {
    (l?.destroy(), (l = void 0));
  });
  let f = Buffer.allocUnsafe(8);
  return (
    f.writeUInt32BE(n, 0),
    f.writeUInt32BE(t, 4),
    l.write(f),
    {
      write(h) {
        if (!l) return;
        let m = Buffer.allocUnsafe(8 + h.length),
          c = Number((process.hrtime.bigint() - o) / 1000n);
        (m.writeUInt32BE(c >>> 0, 0),
          m.writeUInt32BE(h.length, 4),
          h.copy(m, 8),
          l.write(m));
      },
      close() {
        l?.end();
      },
    }
  );
}
async function X(r, n) {
  try {
    let t = getPtyHostStderrPath(r);
    (await ce(dirname(t), { recursive: !0 }),
      await appendFile(
        t,
        `${new Date().toISOString()} ${n}
`,
      ));
  } catch {}
}
function _(r, n) {
  if (r)
    try {
      let t = getPtyHostStderrPath(r);
      (mkdirSync(dirname(t), { recursive: !0 }),
        appendFileSync(
          t,
          `${new Date().toISOString()} ${n}
`,
        ));
    } catch {}
  process.exit(1);
}
export { runPtyHost };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "./analytics-event-queue.js";
import { fromEnum } from "./analytics-fields.js";
import { A, Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { execFileNoThrowWithCwd } from "../../02-功能模块/Git-Worktree/git-exec-hardening.js";
import { spawn } from "child_process";
var f = 500;
function killProcessTree(r, t = "SIGKILL") {
  if (!Number.isInteger(r) || r <= 1) return Promise.resolve(new Set());
  return g(r, t).catch(() => new Set());
}
async function g(r, t) {
  let o = await S(r);
  try {
    process.kill(-r, t);
  } catch (e) {
    try {
      process.kill(r, t);
    } catch {}
    if (A(e) !== "ESRCH") k("group_kill", e);
  }
  for (let e of o)
    try {
      process.kill(e, t);
    } catch {}
  return o;
}
async function snapshotProcessStartTimes(r) {
  let t = [...r].filter((e) => Number.isInteger(e) && e > 1),
    o = new Map();
  if (t.length === 0) return o;
  return d(t);
}
async function killProcessesFromSnapshot(r, t) {
  if (r.size === 0) return;
  let o;
  try {
    o = await d([...r.keys()]);
  } catch {
    return;
  }
  for (let [e, s] of r) {
    if (o.get(e) !== s) continue;
    try {
      process.kill(e, t);
    } catch {}
  }
}
async function d(r) {
  let t = new Map(),
    { stdout: o } = await execFileNoThrowWithCwd(
      "ps",
      ["-o", "pid=", "-o", "lstart=", "-p", r.join(",")],
      {
        timeout: f,
        cwd: "/",
        env: {
          USER_TYPE: "external",
          NODE_ENV: "production",
          LC_ALL: "C",
          TZ: "UTC",
        },
        stripFinalNewline: !1,
      },
    );
  for (let e of o.split(`
`)) {
    let s = e.match(/^\s*(\d+)\s+(\S.*\S)\s*$/);
    if (s) t.set(Number(s[1]), s[2]);
  }
  return t;
}
async function S(r) {
  let t;
  try {
    t = await Promise.race([
      b(),
      new Promise((a) => {
        let c = setTimeout((l) => l(""), f, a);
        if (typeof c === "object") c.unref();
      }),
    ]);
  } catch (a) {
    return (k("enum_spawn", a), new Set());
  }
  let o = new Map();
  for (let a of t.split(`
`)) {
    let c = a.match(/^\s*(\d+)\s+(\d+)\s*$/);
    if (!c) continue;
    let l = Number(c[1]),
      m = Number(c[2]),
      p = o.get(m);
    if (p) p.push(l);
    else o.set(m, [l]);
  }
  let e = new Set(),
    s = [r];
  while (s.length > 0) {
    let a = s.shift();
    for (let c of o.get(a) ?? [])
      if (c > 1 && c !== r && c !== process.pid && !e.has(c))
        (e.add(c), s.push(c));
  }
  return e;
}
function b() {
  return new Promise((r, t) => {
    let o;
    try {
      o = spawn("ps", ["-A", "-o", "pid=", "-o", "ppid="], {
        cwd: "/",
        stdio: ["ignore", "pipe", "ignore"],
        windowsHide: !0,
      });
    } catch (s) {
      t(s);
      return;
    }
    let e = "";
    (o.stdout?.on("data", (s) => (e += s)),
      o.once("error", t),
      o.once("close", () => r(e)));
  });
}
function k(r, t) {
  try {
    let o = A(t),
      e = Jr(t);
    (n(`killProcessTree ${r} failed: ${o ?? t}`),
      logEvent("tengu_bash_tool_kill_error", {
        stage: fromEnum(r),
        ...(e && { error_code: e }),
      }));
  } catch {}
}
export { killProcessTree, snapshotProcessStartTimes, killProcessesFromSnapshot };

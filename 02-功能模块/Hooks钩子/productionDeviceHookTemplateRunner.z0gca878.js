// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 75 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getHookCgroupOptions, hookOutputSchema, installDeviceHooks, removeDeviceHooks, truncateDisplayText, normalizeHookOutput, isHookOutputBlocking } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { assertSafeTempDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { getResolvedClaudeTempDir } from "../记忆-CLAUDE.md/记忆-CLAUDE.md.vx19drc8.js";
import { subprocessEnv } from "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import { getHookTemplateById, isPreToolUseHook } from "./hook-template-catalog.js";
import { spawn } from "child_process";
import { createHash } from "crypto";
import { constants } from "fs";
import { lstat, mkdir, open, realpath } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
var U = ["/usr/bin/python3", "/usr/local/bin/python3", "/bin/python3"],
  I = 86,
  V = () =>
    [
      "import hashlib,os,sys",
      "p,d,n=sys.argv[1],sys.argv[2],int(sys.argv[3])",
      `fail=lambda m:(sys.stderr.write('device hook template integrity check failed: '+m+'\\n'),sys.exit(${I}))`,
      "os.path.isfile(p) or fail('not a regular file')",
      "os.path.getsize(p)<=n or fail('too large')",
      "b=None",
      'try: b=open(p,"rb").read()',
      "except OSError as e: fail(type(e).__name__)",
      "hashlib.sha256(b).hexdigest()==d or fail('digest mismatch')",
      "sys.argv=[p]",
      "exec(compile(b,p,'exec'),{'__name__':'__main__','__file__':p})",
    ].join(`
`),
  Y = V();
async function G(o) {
  for (let r of U) {
    let e = await o.vet(r);
    if (e !== null) return e;
  }
  return null;
}
async function W(o, r, e) {
  await e.mkdir(e.templateDir, 448);
  let t = join(e.templateDir, `${o}.py`);
  return (await e.writeFileAtomic(t, r, 384), t);
}
function K(o, r, e, t = 262144) {
  return [o, "-I", "-S", "-c", Y, r, e, String(t)];
}
var X = /^(?:LD_|DYLD_|GCONV_PATH$|PYTHON)/;
function q(o) {
  let r = { ...o };
  for (let e of Object.keys(r)) if (X.test(e)) delete r[e];
  return r;
}
var S = 65536;
async function Q(o, r, e) {
  let t = await C(r.cwd, o, r, e);
  return t.status === null &&
    t.signal === void 0 &&
    !t.timedOut &&
    /ENOENT|spawn .* cwd|uv_cwd|not a directory/i.test(t.stderr)
    ? C(homedir(), o, r, e)
    : t;
}
function C(o, r, e, t) {
  return new Promise((s) => {
    let [l, ...a] = r;
    if (l === void 0) {
      s({ stdout: "", stderr: "no command", status: null, timedOut: !1 });
      return;
    }
    let p = !1,
      k = (d) => {
        if (!p) ((p = !0), s(d));
      },
      c;
    try {
      c = spawn(l, a, {
        cwd: o,
        env: { ...q(t.env ?? subprocessEnv()), CLAUDE_PROJECT_DIR: t.projectDir },
        stdio: ["pipe", "pipe", "pipe"],
        detached: !0,
        windowsHide: !0,
        ...getHookCgroupOptions(e.hook_event_name),
      });
    } catch (d) {
      k({
        stdout: "",
        stderr: d instanceof Error ? d.message : "spawn failed",
        status: null,
        timedOut: !1,
      });
      return;
    }
    let f = () => {
        try {
          if (c.pid !== void 0) process.kill(-c.pid, "SIGKILL");
        } catch {
          c.kill("SIGKILL");
        }
      },
      m = "",
      y = "",
      w = !1,
      g = !1,
      h = !1,
      D = setTimeout(
        (d) => {
          ((w = !0), d());
        },
        t.timeoutMs,
        f,
      ),
      T = () => f();
    if (t.signal !== void 0)
      if (t.signal.aborted) T();
      else t.signal.addEventListener("abort", T, { once: !0 });
    let _ = (d, v, M) => {
      if (d.length + v.length > S) M();
      return d.length >= S ? d : (d + v).slice(0, S);
    };
    (c.stdout?.setEncoding("utf8"),
      c.stderr?.setEncoding("utf8"),
      c.stdout?.on("data", (d) => (m = _(m, d, () => (g = !0)))),
      c.stderr?.on("data", (d) => (y = _(y, d, () => (h = !0)))),
      c.stdin?.on("error", () => {}));
    let P = (d, v) => {
      (clearTimeout(D),
        t.signal?.removeEventListener("abort", T),
        k({
          stdout: m,
          stderr: y,
          status: d,
          ...(v !== void 0 && { signal: v }),
          timedOut: w,
          ...(g && { stdoutTruncated: g }),
          ...(h && { stderrTruncated: h }),
        }));
    };
    (c.on("error", (d) => {
      ((y = y || d.message), P(null));
    }),
      c.on("close", (d, v) => P(d, v ?? void 0)));
    let O;
    try {
      O = jsonStringify(e);
    } catch {
      O = "";
    }
    c.stdin?.end(O);
  });
}
function N(o) {
  let r = o.stdout.trim();
  if (o.stdoutTruncated === !0) return { kind: "unreadable" };
  if (!r.startsWith("{"))
    return r === "" ? { kind: "silent" } : { kind: "unreadable" };
  try {
    let e = hookOutputSchema().safeParse(jsonParse(r));
    if (!e.success) return { kind: "unreadable" };
    let t = e.data;
    return "async" in t
      ? { kind: "unreadable" }
      : { kind: "answer", answer: t };
  } catch {
    return { kind: "unreadable" };
  }
}
function Z(o) {
  if (o.status === 2)
    return {
      decision: "block",
      reason: o.stderr.trim() || "blocked by a device hook template",
    };
  if (o.status !== 0) return {};
  let r = N(o);
  if (r.kind !== "answer") return {};
  let e = r.answer,
    t = {
      ...(e.continue === !1 && {
        continue: !1,
        ...(e.stopReason !== void 0 && { stopReason: e.stopReason }),
      }),
      ...(e.decision === "block" && {
        decision: "block",
        ...(e.reason !== void 0 && { reason: e.reason }),
      }),
      ...(e.systemMessage !== void 0 && { systemMessage: e.systemMessage }),
    },
    s = e.hookSpecificOutput;
  if (s?.hookEventName === "PreToolUse") {
    let l =
      s.permissionDecision === "deny" || s.permissionDecision === "ask"
        ? s.permissionDecision
        : void 0;
    return {
      ...t,
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        ...(l !== void 0 && { permissionDecision: l }),
        ...(l !== void 0 &&
          s.permissionDecisionReason !== void 0 && {
            permissionDecisionReason: s.permissionDecisionReason,
          }),
        ...(s.additionalContext !== void 0 && {
          additionalContext: s.additionalContext,
        }),
      },
    };
  }
  if (s?.hookEventName === "PostToolUse" && s.additionalContext !== void 0)
    return {
      ...t,
      hookSpecificOutput: {
        hookEventName: "PostToolUse",
        additionalContext: s.additionalContext,
      },
    };
  return t;
}
function ee(o, r) {
  if (r) return "aborted";
  if (o.timedOut) return "timeout";
  if (o.signal !== void 0) return "killed";
  if (o.status === null) return "spawn_failed";
  if (o.status === I) return "integrity_failed";
  if (o.status === 0) return N(o).kind === "unreadable" ? "error" : "ok";
  return o.status === 2 ? "blocked" : "error";
}
var te = {
  integrity_failed: "its file no longer matched what was verified",
  error: "it exited with an error or an unreadable answer",
  spawn_failed: "it could not be started",
  killed: "it was killed before it answered",
  interpreter_untrusted: "its interpreter can no longer be trusted",
  timeout: "it took too long",
};
function ne(o, r, e, t, s, l) {
  return async (a, p, k) => {
    let c = Date.now(),
      f = await s(),
      m = f
        ? await Q(o, a, {
            timeoutMs: Math.max(1000, r * 1000 - 2000),
            projectDir: l(),
            ...(k !== void 0 && { signal: k }),
          })
        : {
            stdout: "",
            stderr: "interpreter no longer trusted",
            status: null,
            timedOut: !1,
          },
      y = Z({ ...m, stderr: truncateDisplayText(m.stderr, 2000).text }),
      { answer: w, report: g } = normalizeHookOutput(y, e.event),
      h = f ? ee(m, k?.aborted === !0) : "interpreter_untrusted",
      D = h === "ok" && isHookOutputBlocking(w) ? "blocked" : h;
    if (
      (t({
        outcome: D,
        durationMs: Date.now() - c,
        fieldsDropped: g.dropped.length > 0 || g.truncated.length > 0,
      }),
      D === "aborted")
    )
      return e.failClosed
        ? {
            decision: "block",
            reason: `cloud template ${e.id} was interrupted before it could answer`,
          }
        : {};
    let T = te[D];
    if (T !== void 0) {
      let _ = `cloud template ${e.id} did not run cleanly: ${T}`;
      return e.failClosed
        ? { decision: "block", reason: _, systemMessage: _ }
        : { ...w, systemMessage: _ };
    }
    return w;
  };
}
function re(o) {
  return {
    vet: async (r) => {
      try {
        let e =
            typeof process.getuid === "function" ? process.getuid() : void 0,
          t = (p) => e !== void 0 && e !== 0 && p === e,
          s = async (p) => {
            let k = p.split("/").filter(Boolean);
            for (let c = 0; c < k.length; c += 1) {
              let f = await lstat("/" + k.slice(0, c).join("/"));
              if (!f.isDirectory() || (f.mode & 18) !== 0 || t(f.uid))
                return !1;
            }
            return !0;
          };
        if (!(await s(r))) return null;
        let l = await realpath(r);
        if (!(await s(l))) return null;
        let a = await lstat(l);
        return a.isFile() &&
          (a.mode & 73) !== 0 &&
          (a.mode & 18) === 0 &&
          !t(a.uid)
          ? l
          : null;
      } catch {
        return null;
      }
    },
    mkdir: async (r, e) => {
      try {
        await mkdir(r, { mode: e });
      } catch (l) {
        if (A(l) !== "EEXIST") throw l;
      }
      let t = await lstat(r),
        s = typeof process.getuid === "function" ? process.getuid() : void 0;
      if (
        !t.isDirectory() ||
        (s !== void 0 && t.uid !== s) ||
        (t.mode & 63) !== 0
      )
        throw Error("unsafe device-hook template directory");
    },
    writeFileAtomic: (r, e, t) => writeFileAtomic(r, e, t),
    templateDir: o,
  };
}
function productionDeviceHookTemplateRunner(o) {
  let r = getResolvedClaudeTempDir(),
    e = re(join(r, "device-hook-templates", String(process.pid))),
    t,
    s = () => (
      (t ??= G(e).then((a) => {
        if (a === null) t = void 0;
        return a;
      })),
      t
    ),
    l = new Map();
  return {
    resolveInterpreter: s,
    async prepare(a, p, k, c) {
      let f = await s();
      if (f === null)
        throw Error("no absolute python3 for a device hook template");
      (await mkdir(r, { recursive: !0, mode: 448 }), assertSafeTempDir(r));
      let m = l.get(p);
      if (m !== void 0 && !(await oe(await m.catch(() => null), p, a.maxBytes)))
        (l.delete(p), (m = void 0));
      if (m === void 0)
        ((m = (async () => (
          await e.mkdir(join(r, "device-hook-templates"), 448),
          W(p, k, e)
        ))()),
          l.set(p, m),
          m.catch(() => l.delete(p)));
      let y = await m,
        w = isPreToolUseHook(a);
      return ne(
        K(f, y, p, a.maxBytes),
        c,
        { id: a.id, event: a.event, failClosed: w },
        (g) => {
          if (
            (logEvent("tengu_device_hook_template_run", {
              template: fromEnum(telemetryTemplateId(a.id)),
              outcome: fromEnum(g.outcome),
              duration_ms: g.durationMs,
              fields_dropped: g.fieldsDropped,
            }),
            g.outcome === "integrity_failed")
          )
            logForDebugging(
              `Device hook template ${a.id} refused at run time: integrity check failed (${y})`,
              { level: "warn" },
            );
          else if (g.outcome === "interpreter_untrusted")
            logForDebugging(
              `Device hook template ${a.id} refused at run time: ${f} no longer vets as a trusted interpreter`,
              { level: "warn" },
            );
        },
        async () => {
          let g = (await e.vet(f)) === f;
          if (!g) t = void 0;
          return g;
        },
        o,
      );
    },
    install: (a, p, k) => installDeviceHooks(a, p, "templates", k),
    remove: (a) => removeDeviceHooks(a, "templates"),
  };
}
async function oe(o, r, e) {
  if (o === null) return !1;
  let t;
  try {
    t = await open(o, constants.O_RDONLY | constants.O_NONBLOCK | constants.O_NOFOLLOW);
    let s = await t.stat();
    if (!s.isFile() || s.size > e) return !1;
    let l = Buffer.alloc(s.size),
      { bytesRead: a } = await t.read(l, 0, s.size, 0);
    return a === s.size && createHash("sha256").update(l).digest("hex") === r;
  } catch {
    return !1;
  } finally {
    await t?.close().catch(() => {});
  }
}
function telemetryTemplateId(o) {
  return getHookTemplateById(o)?.id ?? "unknown";
}
export { productionDeviceHookTemplateRunner, telemetryTemplateId };

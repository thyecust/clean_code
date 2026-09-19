// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 24 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i8, j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, zn } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep, withTimeout } from "../../01-核心基础设施/核心工具-并发与缓存/async-timeout-utils.js";
import { createAbortController } from "../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js";
import { takeLastCodeUnits, isWellFormed } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getClaudeConfigDir, parseProjectDirName } from "../../01-核心基础设施/设置-配置/chunk-5ndhfaq9.js";
import { otelApiModule, redactSecretsInText, isCredentialInvalidationReason } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, J1, x_e, ge, l, A, Jr, W, Rt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { getFileStorage } from "../../01-核心基础设施/文件存储-原子写入/file-storage.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { isRunningWithBun, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { withFeatureTelemetry } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { validateUuid, writeEntriesToJsonlFile, sanitizePath, getProjectKey } from "../../02-功能模块/会话-历史-恢复/chunk-mkmy4cx2.js";
import { STORAGE_KEYS } from "../../02-功能模块/Teammates团队/storage-keys.js";
import { AsyncQueue } from "../../02-功能模块/会话-历史-恢复/chunk-m1xj4s02.js";
import { CREDENTIALS_SUFFIX, getKeychainServiceName, getKeychainAccountName } from "../../02-功能模块/认证-OAuth登录/keychain-access.js";
import "../../02-功能模块/MCP客户端/chunk-tv3jbp8f.js";
import "../../02-功能模块/MCP客户端/mcp-protocol.js";
import "../../02-功能模块/MCP客户端/mcp-server.js";
import { AbortError } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { cs } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { parsePositiveInteger } from "../../01-核心基础设施/核心工具-类型与数值/parse-positive-integer.js";
import { pushCliArg } from "../CLI入口-Commander/claude-code-args.js";
import { isJsonRpcRequest, SdkMcpServerTransport } from "../../02-功能模块/MCP传输-stdio-SSE-HTTP/sdk-mcp-transports.js";
import { s, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { toESM } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { execFile } from "child_process";
import { randomUUID } from "crypto";
import { realpathSync } from "fs";
import {
  mkdir,
  readFile,
  rm,
  writeFile,
} from "fs/promises";
import { createRequire } from "module";
import { homedir, tmpdir } from "os";
import {
  dirname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import { existsSync } from "fs";
import { createInterface } from "readline";
import { StringDecoder } from "string_decoder";
class SdkDebugLogState {
  debugFilePath = void 0;
  initPromise = null;
  logStem = null;
}
var sdkDebugLogState = new j(() => new SdkDebugLogState());
function ht() {
  return sdkDebugLogState.of(B().host);
}
function St(e) {
  if (e.initPromise) return e.initPromise;
  if (!a.DEBUG_CLAUDE_AGENT_SDK)
    return (
      (e.debugFilePath = null),
      (e.initPromise = Promise.resolve()),
      e.initPromise
    );
  let t = join(getClaudeConfigDir(), "debug");
  return (
    (e.logStem = `sdk-${randomUUID()}`),
    (e.debugFilePath = join(t, `${e.logStem}.txt`)),
    process.stderr.write(`SDK debug logs: ${e.debugFilePath}
`),
    (e.initPromise = getFileStorage()
      .mkdir(t)
      .catch(() => {})),
    e.initPromise
  );
}
function ps(e) {
  return e.logStem === null
    ? null
    : { namespace: "log", sessionId: e.logStem, channel: "debug" };
}
function yt() {
  let e = ht();
  return (St(e), e.debugFilePath ?? null);
}
function x(e, t) {
  let r = ht();
  if (r.debugFilePath === null) return;
  let d = `${new Date().toISOString()} ${e}
`;
  St(r).then(() => {
    if (t !== void 0) {
      let p = ps(r);
      if (p !== null) t.append(p, [{ data: d }]).catch(() => {});
      return;
    }
    if (r.debugFilePath)
      getFileStorage()
        .append(r.debugFilePath, d)
        .catch(() => {});
  });
}
function fs(e) {
  let t = e.trim();
  return t.startsWith("{") && t.endsWith("}");
}
function wt(e, t) {
  let r = { ...e };
  if (!t) return r;
  let o =
      t.enabled === !0 && t.failIfUnavailable === void 0
        ? { ...t, failIfUnavailable: !0 }
        : t,
    d = r.settings;
  if (d && !fs(d))
    throw Error(
      "Cannot use both a settings file path and the sandbox option. Include the sandbox configuration in your settings file instead.",
    );
  let p = { sandbox: o };
  if (d)
    try {
      p = { ...jsonParse(d), sandbox: o };
    } catch {}
  return ((r.settings = jsonStringify(p)), r);
}
var ys = 2000,
  He = 2048,
  vt = "sdk-exit-after-stderr-drained",
  ws = 200;
function Ge(e) {
  return e === "exit" ? vt : e;
}
class Et {
  #e = new Set();
  #t = !1;
  #s = () => this.killAll();
  track(e) {
    if ((this.#e.add(e), !this.#t))
      ((this.#t = !0), process.on("exit", this.#s));
  }
  untrack(e) {
    this.#e.delete(e);
  }
  isTracking(e) {
    return this.#e.has(e);
  }
  get size() {
    return this.#e.size;
  }
  killAll() {
    for (let e of this.#e) if (!e.killed) e.kill("SIGTERM");
  }
  reset() {
    (process.off("exit", this.#s), (this.#t = !1), this.#e.clear());
  }
}
var ve = new Et(),
  bs = /[(),\u0000-\u001f\u007f-\u009f]/;
function ks(e) {
  if (typeof e !== "string" || e.trim() === "")
    throw Error("Skill names must be non-empty strings.");
  if (!isWellFormed(e))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: the name contains an unpaired surrogate, which cannot survive the UTF-8 encoding of the CLI invocation; no skill discovered from the filesystem can have such a name.`,
      "skill name with unpaired surrogate rejected",
    );
  if (e !== e.trim())
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: leading or trailing whitespace is not allowed \u2014 the Skill tool trims the invoked name, so a padded rule can never match. Remove the padding.`,
      "skill name with surrounding whitespace rejected",
    );
  if (bs.test(e))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: parentheses, commas, and control characters are not allowed in skill names. Skill names match the skill's directory name (or 'plugin:skill' for plugin-qualified skills); rename the skill if its directory name contains these characters.`,
      "invalid skill name rejected",
    );
  if (e === "*")
    throw Error(
      "Invalid skill name '*': use skills: 'all' to enable every skill.",
    );
  if (e.endsWith(":*") || e.endsWith(" *"))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: wildcard-suffix names are not allowed; list each skill by its exact name.`,
      "wildcard-suffix skill name rejected",
    );
  if (e.startsWith("/"))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: skill names may not start with '/'. Skills are invoked as slash commands, but the skills option takes the skill's canonical name \u2014 the directory name, or 'plugin:skill'.`,
      "skill name with leading slash rejected",
    );
  if (e.includes("\\\\"))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: consecutive backslashes are not allowed \u2014 the permission-rule parser collapses escaped backslashes, so the rule would name a different skill. Rename the skill.`,
      "skill name with consecutive backslashes rejected",
    );
  if (e.endsWith("\\"))
    throw new R(
      `Invalid skill name ${jsonStringify(e)}: names may not end with an unpaired backslash.`,
      "skill name with unpaired trailing backslash rejected",
    );
  return e;
}
class We {
  options;
  process;
  processStdin;
  processStdout;
  ready = !1;
  abortController;
  exitError;
  exitEventDelivered = !1;
  stderrTail = "";
  exitListeners = [];
  abortHandler;
  forwardedAbort = createAbortController();
  pendingWrites = [];
  pendingEndInput = !1;
  spawnResolve;
  spawnReject;
  spawnPromise;
  constructor(e) {
    this.options = e;
    if (((this.abortController = e.abortController || createAbortController()), e.deferSpawn))
      ((this.spawnPromise = new Promise((t, r) => {
        ((this.spawnResolve = t), (this.spawnReject = r));
      })),
        this.spawnPromise.catch(() => {}));
    else this.initialize();
  }
  spawn() {
    try {
      this.initialize();
    } catch (t) {
      throw (this.spawnAbort(ge(t)), t);
    }
    let e = this.pendingWrites;
    if (((this.pendingWrites = []), this.spawnResolve))
      (this.spawnResolve(),
        (this.spawnResolve = void 0),
        (this.spawnReject = void 0));
    for (let t of e) this.write(t);
    if (this.pendingEndInput)
      ((this.pendingEndInput = !1), this.processStdin?.end());
  }
  spawnAbort(e) {
    if (this.spawnReject)
      (this.spawnReject(e),
        (this.spawnReject = void 0),
        (this.spawnResolve = void 0),
        (this.pendingWrites = []));
  }
  updateEnv(e) {
    if (this.options.env) Object.assign(this.options.env, e);
    else this.options.env = { ...e };
  }
  updateResume(e) {
    this.options.resume = e;
  }
  getDefaultExecutable() {
    return isRunningWithBun() ? "bun" : "node";
  }
  spawnLocalProcess(e) {
    let { command: t, args: r, cwd: o, env: d, signal: p } = e,
      f = spawn(t, r, {
        cwd: o,
        stdio: ["pipe", "pipe", "pipe"],
        signal: p,
        env: d,
        windowsHide: !0,
      }),
      g = new StringDecoder("utf8"),
      h = !1,
      w = !1,
      k = !1,
      S,
      C = Ie(d.DEBUG_CLAUDE_AGENT_SDK) || this.options.stderr !== void 0;
    (f.stderr.on("data", (E) => {
      if (k) return;
      let T = g.write(E);
      if (((this.stderrTail += T), this.stderrTail.length > 2 * He))
        this.stderrTail = takeLastCodeUnits(redactSecretsInText(this.stderrTail), He);
      if (C) (x(T), this.options.stderr?.(T));
    }),
      f.stderr.on("error", (E) => {
        x(`[ProcessTransport] stderr read failed: ${E.code ?? E.message}`);
      }));
    let _ = () => {
      if (k) return;
      if (((k = !0), S)) clearTimeout(S);
      f.emit(vt, f.exitCode, f.signalCode);
      let E = f.stderr;
      if (Cs(E)) E.unref();
      else E.destroy();
    };
    return (
      f.stderr.once("close", () => {
        if (((this.stderrTail += g.end()), (h = !0), w)) _();
      }),
      f.once("exit", () => {
        if (((w = !0), (this.ready = !1), h)) _();
        else S = setTimeout(_, ws);
      }),
      {
        stdin: f.stdin,
        stdout: f.stdout,
        get killed() {
          return f.killed;
        },
        get exitCode() {
          return f.exitCode;
        },
        get signalCode() {
          return f.signalCode;
        },
        kill: f.kill.bind(f),
        on: (E, T) => f.on(Ge(E), T),
        once: (E, T) => f.once(Ge(E), T),
        off: (E, T) => f.off(Ge(E), T),
      }
    );
  }
  initialize() {
    try {
      let {
          additionalDirectories: e = [],
          agent: t,
          betas: r,
          cwd: o,
          executable: d = this.getDefaultExecutable(),
          executableArgs: p = [],
          extraArgs: f = {},
          pathToClaudeCodeExecutable: g,
          env: h = { ...process.env },
          thinkingConfig: w,
          maxTurns: k,
          maxBudgetUsd: S,
          taskBudget: C,
          model: _,
          fallbackModel: U,
          jsonSchema: E,
          permissionMode: T,
          allowDangerouslySkipPermissions: V,
          permissionPromptToolName: ee,
          permissionPrompts: te,
          continueConversation: Ae,
          resume: Q,
          settingSources: se,
          skills: re,
          disallowedTools: fe = [],
          tools: J,
          mcpServers: ne,
          strictMcpConfig: Oe,
          canUseTool: K,
          includePartialMessages: Ue,
          plugins: ie,
          pluginsViaInitialize: me,
          sandbox: je,
        } = this.options,
        { allowedTools: N = [] } = this.options;
      if (re !== void 0) {
        let v = re === "all" ? ["Skill"] : re.map((M) => `Skill(${ks(M)})`),
          F = new Set(N);
        N = [...N, ...v.filter((M) => !F.has(M))];
      }
      let y = [
        "--output-format",
        "stream-json",
        "--verbose",
        "--input-format",
        "stream-json",
      ];
      if (w) {
        switch (w.type) {
          case "enabled":
            if (w.budgetTokens === void 0) y.push("--thinking", "adaptive");
            else y.push("--max-thinking-tokens", w.budgetTokens.toString());
            break;
          case "disabled":
            y.push("--thinking", "disabled");
            break;
          case "adaptive":
            y.push("--thinking", "adaptive");
            break;
        }
        if (w.type !== "disabled" && w.display)
          y.push("--thinking-display", w.display);
      }
      if (this.options.effort) y.push("--effort", this.options.effort);
      if (k) y.push("--max-turns", k.toString());
      if (S !== void 0) y.push("--max-budget-usd", S.toString());
      if (C) y.push("--task-budget", C.total.toString());
      if (_) y.push("--model", _);
      if (t) y.push("--agent", t);
      if (r && r.length > 0) y.push("--betas", r.join(","));
      if (E) y.push("--json-schema", jsonStringify(E));
      if (this.options.debugFile)
        y.push("--debug-file", this.options.debugFile);
      else if (this.options.debug) y.push("--debug");
      if (!this.options.debugFile && !this.options.spawnClaudeCodeProcess) {
        let v = yt();
        if (v) y.push("--debug-file", v);
      }
      if (K) {
        if (ee)
          throw Error(
            "canUseTool callback cannot be used with permissionPromptToolName. Please use one or the other.",
          );
        y.push("--permission-prompt-tool", "stdio");
      } else if (ee) y.push("--permission-prompt-tool", ee);
      if (te) y.push("--permission-prompts", te);
      if (Ae) y.push("--continue");
      if (Q) y.push(`--resume=${Q}`);
      if (N.length > 0) y.push("--allowedTools", N.join(","));
      if (fe.length > 0) y.push("--disallowedTools", fe.join(","));
      if (J !== void 0)
        if (Array.isArray(J))
          if (J.length === 0) y.push("--tools", "");
          else y.push("--tools", J.join(","));
        else y.push("--tools", "default");
      if (ne && Object.keys(ne).length > 0)
        y.push("--mcp-config", jsonStringify({ mcpServers: ne }));
      if (se !== void 0) y.push(`--setting-sources=${se.join(",")}`);
      if (Oe) y.push("--strict-mcp-config");
      if (T) y.push("--permission-mode", T);
      if (V) y.push("--allow-dangerously-skip-permissions");
      if (U) {
        if (_ && U === _)
          throw Error(
            "Fallback model cannot be the same as the main model. Please specify a different model for fallbackModel option.",
          );
        y.push("--fallback-model", U);
      }
      if (this.options.includeHookEvents) y.push("--include-hook-events");
      if (Ue) y.push("--include-partial-messages");
      if (this.options.sessionMirror) y.push("--session-mirror");
      for (let v of e) y.push("--add-dir", v);
      if (me) y.push("--await-initialize");
      else if (ie && ie.length > 0)
        for (let v of ie)
          if (v.type === "local")
            y.push(
              v.skipMcpDiscovery ? "--plugin-dir-no-mcp" : "--plugin-dir",
              v.path,
            );
          else throw Error(`Unsupported plugin type: ${v.type}`);
      if (this.options.forkSession) y.push("--fork-session");
      if (this.options.resumeSessionAt)
        y.push(`--resume-session-at=${this.options.resumeSessionAt}`);
      if (this.options.resumeDropsTurn !== void 0)
        y.push(`--resume-drops-turn=${this.options.resumeDropsTurn}`);
      if (this.options.sessionId)
        y.push(`--session-id=${this.options.sessionId}`);
      if (this.options.persistSession === !1)
        y.push("--no-session-persistence");
      if (this.options.managedSettings)
        y.push("--managed-settings", this.options.managedSettings);
      let he = { ...(f ?? {}) };
      if (this.options.settings) he.settings = this.options.settings;
      let Se = wt(he, je);
      for (let [v, F] of Object.entries(Se))
        if (F === null) y.push(`--${v}`);
        else pushCliArg(y, v, F);
      if (!h.CLAUDE_CODE_ENTRYPOINT) h.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
      if ((delete h.NODE_OPTIONS, Ie(h.DEBUG_CLAUDE_AGENT_SDK))) h.DEBUG = "1";
      else delete h.DEBUG;
      let oe = vs(g),
        ae = oe ? g : d,
        le = oe ? [...p, ...y] : [...p, g, ...y],
        ye = {
          command: ae,
          args: le,
          cwd: o,
          env: h,
          signal: this.forwardedAbort.signal,
        };
      if (this.options.spawnClaudeCodeProcess)
        (x(`Spawning Claude Code (custom): ${ae} ${le.join(" ")}`),
          (this.process = this.options.spawnClaudeCodeProcess(ye)));
      else
        (x(`Spawning Claude Code: ${ae} ${le.join(" ")}`),
          (this.process = this.spawnLocalProcess(ye)));
      if (
        ((this.processStdin = this.process.stdin),
        (this.processStdout = this.process.stdout),
        this.processStdin.on("error", (v) => {
          (x(
            `[ProcessTransport] stdin write failed (child likely exited): ${v.code ?? v.message}`,
          ),
            (this.ready = !1));
        }),
        ve.track(this.process),
        (this.abortHandler = () => this.close()),
        this.abortController.signal.addEventListener(
          "abort",
          this.abortHandler,
        ),
        this.abortController.signal.aborted)
      )
        this.close();
      let q = this.process;
      (q.on("error", (v) => {
        this.ready = !1;
        let F = v,
          M = F.syscall !== void 0 ? F.syscall.startsWith("spawn") : Rt(v);
        if (M && !q.killed) ve.untrack(q);
        if (this.abortController.signal.aborted)
          ((this.exitError = Ee()),
            J1(v, {
              telemetryMessage: "Claude Code process aborted by user",
              errorClass: "aborted",
            }));
        else if (M && Rt(v)) {
          let { message: O, telemetryMessage: Fe, errorClass: H } = Es(g, oe),
            we = {
              telemetryMessage: `${Fe}${ze(v)}`,
              errorClass: H,
              code: Jr(v),
            };
          ((this.exitError = J1(ReferenceError(O), we)),
            J1(v, we),
            x(this.exitError.message));
        } else {
          let O = {
            telemetryMessage: M
              ? `Failed to spawn Claude Code process${ze(v)}`
              : `Claude Code process error${ze(v)}`,
            errorClass: M ? "spawn_failed" : "process_error",
            code: Jr(v),
          };
          ((this.exitError = J1(
            Error(`Failed to spawn Claude Code process: ${redactSecretsInText(v.message)}`),
            O,
          )),
            J1(v, O),
            x(this.exitError.message));
        }
      }),
        q.on("exit", (v, F) => {
          if (
            ((this.exitEventDelivered = !0),
            (this.ready = !1),
            this.abortController.signal.aborted)
          )
            this.exitError = Ee();
          else {
            let M = this.getProcessExitError(v, F);
            if (M) ((this.exitError = M), x(M.message));
          }
        }),
        (this.ready = !this.abortController.signal.aborted));
    } catch (e) {
      throw ((this.ready = !1), e);
    }
  }
  getProcessExitError(e, t) {
    if (e !== 0 && e !== null) {
      let r = Number.isInteger(e) ? e : void 0;
      return J1(
        Error(
          `Claude Code process exited with code ${e}${this.formatStderrTail()}`,
        ),
        {
          telemetryMessage: `Claude Code process exited with code ${r ?? "unknown"}`,
          errorClass: "process_exited_nonzero",
          exitCode: r,
        },
      );
    } else if (t) {
      let r = /^SIG[A-Z0-9]{1,8}$/.test(t) ? t : "unknown";
      return J1(
        Error(
          `Claude Code process terminated by signal ${t}${this.formatStderrTail()}`,
        ),
        {
          telemetryMessage: `Claude Code process terminated by signal ${r}`,
          errorClass: "process_killed_by_signal",
          signal: r,
        },
      );
    }
    return;
  }
  formatStderrTail() {
    let e = takeLastCodeUnits(redactSecretsInText(this.stderrTail), He).trim();
    return e ? `. stderr: ${e}` : "";
  }
  write(e) {
    if (this.abortController.signal.aborted) throw bt();
    if (this.spawnResolve) {
      this.pendingWrites.push(e);
      return;
    }
    if (!this.ready || !this.processStdin)
      throw Error("ProcessTransport is not ready for writing");
    if (this.processStdin.writableEnded) {
      x("[ProcessTransport] Dropping write to ended stdin stream");
      return;
    }
    if (this.process?.killed || this.process?.exitCode !== null)
      throw Error("Cannot write to terminated process");
    if (this.exitError)
      throw J1(
        Error(
          `Cannot write to process that exited with error: ${this.exitError.message}`,
        ),
        {
          telemetryMessage: `Cannot write to process that exited with error: ${x_e(this.exitError) ?? "untagged exit error"}`,
          errorClass: kt(this.exitError, "errorClass"),
          code: Jr(this.exitError),
          exitCode: _s(this.exitError),
          signal: kt(this.exitError, "signal"),
        },
      );
    x(`[ProcessTransport] Writing to stdin: ${e.substring(0, 100)}`);
    try {
      if (!this.processStdin.write(e))
        x("[ProcessTransport] Write buffer full, data queued");
    } catch (t) {
      throw (
        (this.ready = !1),
        Error(`Failed to write to process stdin: ${l(t)}`)
      );
    }
  }
  [Symbol.dispose]() {
    this.close();
  }
  close() {
    if (
      (this.spawnAbort(
        this.abortController.signal.aborted
          ? Ee()
          : Error("Query closed before spawn"),
      ),
      this.processStdin)
    )
      (this.processStdin.end(), (this.processStdin = void 0));
    if (this.abortHandler)
      (this.abortController.signal.removeEventListener(
        "abort",
        this.abortHandler,
      ),
        (this.abortHandler = void 0));
    let e = this.process?.exitCode ?? null,
      t = this.process?.signalCode ?? null,
      r = !this.exitEventDelivered && ((e !== null && e >= 0) || t !== null),
      o;
    if (r) {
      if (
        ((this.exitEventDelivered = !0),
        (o = this.abortController.signal.aborted
          ? Ee()
          : this.getProcessExitError(e, t)),
        o && !this.exitError)
      )
        this.exitError = o;
    }
    let d = this.exitListeners;
    this.exitListeners = [];
    for (let { callback: g, handler: h } of d)
      if ((this.process?.off("exit", h), r))
        try {
          g(o);
        } catch (w) {
          x(`[ProcessTransport] onExit callback threw during close(): ${l(w)}`);
        }
    let p = () => {
        if (this.abortController.signal.aborted)
          this.forwardedAbort.abort(this.abortController.signal.reason);
      },
      f = this.process;
    if (f && !f.killed && f.exitCode === null && f.signalCode == null)
      (setTimeout(
        (g, h) => {
          if (g.exitCode !== null || g.signalCode != null) {
            h();
            return;
          }
          (g.kill("SIGTERM"),
            setTimeout(
              (w) => {
                if (w.exitCode === null) w.kill("SIGKILL");
              },
              5000,
              g,
            ).unref(),
            h());
        },
        ys,
        f,
        p,
      ).unref(),
        f.once("exit", () => ve.untrack(f)));
    else if (f) (ve.untrack(f), p());
    this.ready = !1;
  }
  isReady() {
    return this.ready;
  }
  async *readMessages() {
    if (this.spawnPromise)
      (await this.spawnPromise, (this.spawnPromise = void 0));
    if (!this.processStdout)
      throw Error("ProcessTransport output stream not available");
    if (this.exitError) throw this.exitError;
    let e = createInterface({ input: this.processStdout }),
      t = this.process
        ? (() => {
            let r = this.process,
              o = () => e.close();
            return (r.on("error", o), () => r.off("error", o));
          })()
        : void 0;
    if (this.exitError) e.close();
    try {
      for await (let r of e)
        if (r.trim()) {
          let o;
          try {
            o = jsonParse(r);
          } catch (d) {
            x(`Non-JSON stdout: ${r}`);
            continue;
          }
          yield o;
        }
      if (this.exitError) throw this.exitError;
      await this.waitForExit();
    } finally {
      (t?.(), e.close());
    }
  }
  endInput() {
    if (this.spawnResolve) {
      this.pendingEndInput = !0;
      return;
    }
    if (this.processStdin) this.processStdin.end();
  }
  onExit(e) {
    if (!this.process) return () => {};
    let t = (r, o) => {
      let d = this.getProcessExitError(r, o);
      e(d);
    };
    return (
      this.process.on("exit", t),
      this.exitListeners.push({ callback: e, handler: t }),
      () => {
        if (this.process) this.process.off("exit", t);
        let r = this.exitListeners.findIndex((o) => o.handler === t);
        if (r !== -1) this.exitListeners.splice(r, 1);
      }
    );
  }
  async waitForExit() {
    if (this.exitError) throw this.exitError;
    if (
      !this.process ||
      this.process.exitCode === 0 ||
      (this.process.killed && this.exitEventDelivered)
    )
      return;
    return new Promise((e, t) => {
      let r = (d, p) => {
        if (this.abortController.signal.aborted) {
          t(bt());
          return;
        }
        let f = this.getProcessExitError(d, p);
        if (f) t(f);
        else e();
      };
      this.process.once("exit", r);
      let o = (d) => {
        (this.process.off("exit", r), t(d));
      };
      (this.process.once("error", o),
        this.process.once("exit", () => {
          this.process.off("error", o);
        }));
    });
  }
}
function vs(e) {
  return ![".js", ".mjs", ".tsx", ".ts", ".jsx"].some((r) => e.endsWith(r));
}
function Es(e, t) {
  let r = t ? "native binary" : "executable",
    o = redactSecretsInText(e);
  if (existsSync(e))
    return {
      message: t
        ? `Claude Code native binary at ${o} exists but failed to launch. This usually means the binary does not match this system's libc \u2014 e.g. spawning a musl-linked binary on a glibc Linux host fails because the musl dynamic loader (/lib/ld-musl-*) is missing. Specify a matching binary with options.pathToClaudeCodeExecutable.`
        : `Claude Code executable at ${o} exists but failed to launch.`,
      telemetryMessage: `Claude Code ${r} exists at the configured path but failed to launch`,
      errorClass: "executable_launch_failed",
    };
  return {
    message: t
      ? `Claude Code native binary not found at ${o}. Please ensure Claude Code is installed via native installer or specify a valid path with options.pathToClaudeCodeExecutable.`
      : `Claude Code executable not found at ${o}. Is options.pathToClaudeCodeExecutable set?`,
    telemetryMessage: `Claude Code ${r} not found at the configured path`,
    errorClass: "executable_not_found",
  };
}
function ze(e) {
  let t = Jr(e);
  return t === void 0 ? "" : ` (${t})`;
}
function Ee() {
  return J1(new AbortError("Claude Code process aborted by user"), {
    telemetryMessage: "Claude Code process aborted by user",
    errorClass: "aborted",
  });
}
function bt() {
  return J1(new AbortError("Operation aborted"), {
    telemetryMessage: "Operation aborted",
    errorClass: "aborted",
  });
}
function kt(e, t) {
  let r = Object.hasOwn(e, t) ? Reflect.get(e, t) : void 0;
  return typeof r === "string" ? r : void 0;
}
function _s(e) {
  let t = Object.hasOwn(e, "exitCode") ? Reflect.get(e, "exitCode") : void 0;
  return typeof t === "number" ? t : void 0;
}
function Cs(e) {
  return typeof Reflect.get(e, "unref") === "function";
}
var Y = "@anthropic-ai/claude-agent-sdk";
function Ts() {
  return !1;
}
function _t(e, t = {}) {
  let r = t.platform ?? "darwin",
    o = t.arch ?? "arm64",
    d = t.exists ?? existsSync,
    p = t.preferMusl ?? Ts(),
    f = process.env.SDK_NATIVE_BIN ?? "claude",
    g = r === "win32" ? ".exe" : "",
    w = (
      r === "android"
        ? [`${Y}-linux-${o}-android`]
        : r === "linux"
          ? p
            ? [`${Y}-linux-${o}-musl`, `${Y}-linux-${o}`]
            : [`${Y}-linux-${o}`, `${Y}-linux-${o}-musl`]
          : [`${Y}-${r}-${o}`]
    ).map((k) => `${k}/${f}${g}`);
  for (let k of w)
    try {
      let S = e(k);
      if (d(S)) return S;
    } catch {}
  return null;
}
var ue = Symbol("suppressControlResponse");
class _e {
  transport;
  isSingleUserTurn;
  canUseTool;
  hooks;
  abortController;
  jsonSchema;
  initConfig;
  onElicitation;
  getOAuthToken;
  getHostAuthToken;
  onUserDialog;
  pendingControlResponses = new Map();
  unmatchedControlResponses = new Map();
  static UNMATCHED_CONTROL_RESPONSES_MAX = 1024;
  cleanupPerformed = !1;
  sdkMessages;
  inputStream = new AsyncQueue();
  initialization;
  cancelControllers = new Map();
  hookCallbacks = new Map();
  nextCallbackId = 0;
  initHooksPayload;
  sdkMcpServers = new Map();
  pendingMcpResponses = new Map();
  firstResultReceivedResolve;
  firstResultReceived = !1;
  lastErrorResultText;
  latestCommands;
  transcriptMirrorBatcher;
  cleanupCallbacks = [];
  cleanupPromise;
  setIsSingleUserTurn(e) {
    this.isSingleUserTurn = e;
  }
  setTranscriptMirrorBatcher(e) {
    this.transcriptMirrorBatcher = e;
  }
  reportMirrorError(e, t) {
    let r = {
      type: "system",
      subtype: "mirror_error",
      error: t,
      key: e,
      uuid: i8(),
      session_id: e.sessionId,
    };
    this.inputStream.enqueue(r);
  }
  addCleanupCallback(e) {
    if (this.cleanupPerformed) e();
    else this.cleanupCallbacks.push(e);
  }
  isClosed() {
    return this.cleanupPerformed;
  }
  hasBidirectionalNeeds() {
    return (
      this.sdkMcpServers.size > 0 ||
      (this.hooks !== void 0 && Object.keys(this.hooks).length > 0) ||
      this.canUseTool !== void 0 ||
      this.onElicitation !== void 0 ||
      this.onUserDialog !== void 0 ||
      this.getOAuthToken !== void 0 ||
      this.getHostAuthToken !== void 0 ||
      this.workSecretAnswerer !== void 0
    );
  }
  remoteControlCallGeneration = 0;
  workSecretAnswerer;
  constructor(e, t, r, o, d, p = new Map(), f, g, h, w, k, S) {
    this.transport = e;
    this.isSingleUserTurn = t;
    this.canUseTool = r;
    this.hooks = o;
    this.abortController = d;
    this.jsonSchema = f;
    this.initConfig = g;
    this.onElicitation = h;
    this.getOAuthToken = w;
    this.getHostAuthToken = k;
    this.onUserDialog = S;
    for (let [C, _] of p) this.connectSdkMcpServer(C, _);
    ((this.sdkMessages = this.readSdkMessages()),
      this.readMessages(),
      (this.initialization = this.initialize()),
      this.initialization.catch(() => {}));
  }
  setError(e) {
    this.inputStream.error(e);
  }
  async stopTask(e) {
    await this.request({ subtype: "stop_task", task_id: e });
  }
  async backgroundTasks(e) {
    return (
      (await this.request({ subtype: "background_tasks", tool_use_id: e }))
        .response.backgrounded ?? !0
    );
  }
  close() {
    this.cleanup();
  }
  cleanup(e) {
    if (this.cleanupPromise) return this.cleanupPromise;
    return (
      (this.cleanupPerformed = !0),
      (this.cleanupPromise = this.performCleanup(e)),
      this.cleanupPromise
    );
  }
  async performCleanup(e) {
    for (let t of this.cleanupCallbacks)
      try {
        t();
      } catch {}
    if (((this.cleanupCallbacks = []), this.transcriptMirrorBatcher))
      try {
        await this.transcriptMirrorBatcher.flush();
      } catch {}
    try {
      for (let r of this.cancelControllers.values()) r.abort();
      (this.cancelControllers.clear(), this.transport.close());
      let t = e ?? Error("Query closed before response received");
      for (let { reject: r } of this.pendingControlResponses.values()) r(t);
      (this.pendingControlResponses.clear(),
        this.unmatchedControlResponses.clear());
      for (let { reject: r } of this.pendingMcpResponses.values()) r(t);
      (this.pendingMcpResponses.clear(), this.hookCallbacks.clear());
      for (let { transport: r } of this.sdkMcpServers.values())
        r.close().catch(() => {});
      if ((this.sdkMcpServers.clear(), e)) this.inputStream.error(e);
      else this.inputStream.done();
    } catch (t) {}
    if (this.transport.waitForExit) {
      let t = new AbortController();
      try {
        await Promise.race([this.transport.waitForExit(), sleep(2000, t.signal)]);
      } catch {
      } finally {
        t.abort();
      }
    }
  }
  next(...[e]) {
    return this.sdkMessages.next(...[e]);
  }
  async return(e) {
    return (await this.cleanup(), this.sdkMessages.return(e));
  }
  async throw(e) {
    return (await this.cleanup(), this.sdkMessages.throw(e));
  }
  [Symbol.asyncIterator]() {
    return this.sdkMessages;
  }
  async [Symbol.asyncDispose]() {
    await this.cleanup();
  }
  async readMessages() {
    try {
      for await (let e of this.transport.readMessages()) {
        if (e.type === "control_response") {
          let t = this.pendingControlResponses.get(e.response.request_id);
          if (t) t.handler(e.response);
          else {
            if (
              this.unmatchedControlResponses.size >=
              _e.UNMATCHED_CONTROL_RESPONSES_MAX
            ) {
              let r = this.unmatchedControlResponses.keys().next().value;
              if (r !== void 0) this.unmatchedControlResponses.delete(r);
            }
            this.unmatchedControlResponses.set(
              e.response.request_id,
              e.response,
            );
          }
          continue;
        } else if (e.type === "control_request") {
          this.handleControlRequest(e);
          continue;
        } else if (e.type === "control_cancel_request") {
          this.handleControlCancelRequest(e);
          continue;
        } else if (e.type === "keep_alive") continue;
        else if (e.type === "transcript_mirror") {
          this.transcriptMirrorBatcher?.enqueue(e.filePath, e.entries);
          continue;
        }
        if (
          e.type === "system" &&
          e.subtype === "commands_changed" &&
          Array.isArray(e.commands)
        )
          this.latestCommands = e.commands;
        if (
          e.type === "system" &&
          (e.subtype === "post_turn_summary" || e.subtype === "task_summary")
        ) {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "active_goal") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "autocompact_state") {
          this.inputStream.enqueue(e);
          continue;
        }
        if (e.type === "result") {
          if (this.transcriptMirrorBatcher)
            await this.transcriptMirrorBatcher.flush();
          let t = e.is_error
            ? e.subtype === "success"
              ? e.result
              : e.errors
                  .map((r) => r.trim())
                  .filter(Boolean)
                  .join("; ")
            : void 0;
          if (
            ((this.lastErrorResultText = t || void 0),
            (this.firstResultReceived = !0),
            this.firstResultReceivedResolve)
          )
            this.firstResultReceivedResolve();
          if (this.isSingleUserTurn)
            (logForDebugging(
              "[Query.readMessages] First result received for single-turn query, closing stdin",
            ),
              this.transport.endInput());
        } else if (!(
          e.type === "system" && e.subtype === "session_state_changed"
        ))
          this.lastErrorResultText = void 0;
        this.inputStream.enqueue(e);
      }
      if (this.transcriptMirrorBatcher)
        await this.transcriptMirrorBatcher.flush();
      if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
      (this.inputStream.done(), this.cleanup());
    } catch (e) {
      if (this.transcriptMirrorBatcher)
        await this.transcriptMirrorBatcher.flush();
      if (this.firstResultReceivedResolve) this.firstResultReceivedResolve();
      if (
        this.lastErrorResultText !== void 0 &&
        !(e instanceof AbortError) &&
        e?.name !== "SSEHttpError"
      ) {
        let t = J1(
          Error(
            `Claude Code returned an error result: ${this.lastErrorResultText}`,
          ),
          {
            telemetryMessage: "Claude Code returned an error result",
            errorClass: "error_result",
          },
        );
        (logForDebugging(
          `[Query.readMessages] Replacing exit error with result text. Original: ${l(e)}`,
        ),
          this.inputStream.error(t),
          this.cleanup(t));
        return;
      }
      (this.inputStream.error(e), this.cleanup(e));
    }
  }
  async handleControlRequest(e) {
    if (this.cancelControllers.has(e.request_id)) {
      logForDebugging(
        `[Query.handleControlRequest] Duplicate delivery of in-flight request ${e.request_id} (${e.request.subtype}) \u2014 skipping`,
      );
      return;
    }
    let t = new AbortController();
    this.cancelControllers.set(e.request_id, t);
    try {
      let r = await this.processControlRequest(e, t.signal);
      if (this.cleanupPerformed) return;
      if (r === ue) return;
      let o = {
        type: "control_response",
        response: { subtype: "success", request_id: e.request_id, response: r },
      };
      await Promise.resolve(
        this.transport.write(
          jsonStringify(o) +
            `
`,
        ),
      );
    } catch (r) {
      if (this.cleanupPerformed) return;
      let o = {
        type: "control_response",
        response: { subtype: "error", request_id: e.request_id, error: l(r) },
      };
      try {
        await Promise.resolve(
          this.transport.write(
            jsonStringify(o) +
              `
`,
          ),
        );
      } catch (d) {
        logForDebugging(`[Query.handleControlRequest] Error-response write failed: ${l(d)}`, {
          level: "error",
        });
      }
    } finally {
      this.cancelControllers.delete(e.request_id);
    }
  }
  handleControlCancelRequest(e) {
    let t = this.cancelControllers.get(e.request_id);
    if (t) (t.abort(), this.cancelControllers.delete(e.request_id));
  }
  async processControlRequest(e, t) {
    if (e.request.subtype === "can_use_tool") {
      if (!this.canUseTool) throw Error("canUseTool callback is not provided.");
      let r = await this.canUseTool(e.request.tool_name, e.request.input, {
        signal: t,
        suggestions: e.request.permission_suggestions,
        blockedPath: e.request.blocked_path,
        decisionReason: e.request.decision_reason,
        title: e.request.title,
        displayName: e.request.display_name,
        description: e.request.description,
        toolUseID: e.request.tool_use_id,
        agentID: e.request.agent_id,
        requestId: e.request_id,
        ...(e.request.matched_ask_rule && {
          matchedAskRule: {
            source: e.request.matched_ask_rule.source,
            toolName: e.request.matched_ask_rule.tool_name,
            ...(e.request.matched_ask_rule.rule_content !== void 0 && {
              ruleContent: e.request.matched_ask_rule.rule_content,
            }),
          },
        }),
      });
      if (r === null) return ue;
      return { ...r, toolUseID: e.request.tool_use_id };
    } else if (e.request.subtype === "hook_callback")
      return await this.handleHookCallbacks(
        e.request.callback_id,
        e.request.input,
        e.request.tool_use_id,
        t,
      );
    else if (e.request.subtype === "mcp_message") {
      let r = e.request,
        o = this.sdkMcpServers.get(r.server_name)?.transport;
      if (!o) throw Error(`SDK MCP server not found: ${r.server_name}`);
      if (isJsonRpcRequest(r.message))
        return {
          mcp_response: await this.handleMcpControlRequest(r.server_name, r, o),
        };
      else {
        if (o.onmessage) o.onmessage(r.message);
        return { mcp_response: { jsonrpc: "2.0", result: {}, id: 0 } };
      }
    } else if (e.request.subtype === "elicitation") {
      let r = e.request;
      if (this.onElicitation) {
        let o = await this.onElicitation(
          {
            serverName: r.mcp_server_name,
            message: r.message,
            mode: r.mode,
            url: r.url,
            elicitationId: r.elicitation_id,
            requestedSchema: r.requested_schema,
            title: r.title,
            displayName: r.display_name,
            description: r.description,
          },
          { signal: t, requestId: e.request_id },
        );
        if (o === null) return ue;
        return o;
      }
      return { action: "decline" };
    } else if (e.request.subtype === "request_user_dialog") {
      if (this.onUserDialog) {
        let r = await this.onUserDialog(
          {
            dialogKind: e.request.dialog_kind,
            payload: e.request.payload,
            toolUseID: e.request.tool_use_id,
          },
          { signal: t, requestId: e.request_id },
        );
        if (r === null) return ue;
        return r;
      }
      return (
        logForDebugging(
          `[Query] No onUserDialog handler for request_user_dialog (kind=${e.request.dialog_kind}) \u2014 staying silent so a capable client (or the worker's park deadline) settles it`,
        ),
        logEvent("tengu_request_user_dialog_response_ignored", {
          shape: fromEnum("auto_cancel"),
        }),
        ue
      );
    } else if (e.request.subtype === "oauth_token_refresh") {
      if (!this.getOAuthToken)
        throw Error("getOAuthToken callback is not provided.");
      let r,
        o =
          (await this.getOAuthToken({
            signal: t,
            onDecline: (d) => {
              if (isCredentialInvalidationReason(d)) r = d;
            },
          })) ?? null;
      return o === null && r !== void 0
        ? { accessToken: o, reason: r }
        : { accessToken: o };
    } else if (e.request.subtype === "host_auth_token_refresh") {
      if (!this.getHostAuthToken)
        throw Error("getHostAuthToken callback is not provided.");
      let r = (await this.getHostAuthToken({ signal: t })) ?? null;
      return typeof r === "string" || r === null ? { authToken: r } : r;
    } else if (e.request.subtype === "remote_control_work_secret") {
      let r = this.workSecretAnswerer;
      if (!r) throw Error("refreshWorkSecret callback is not provided.");
      if (!Ct(r.sessionId, e.request.session_id))
        throw Error(
          "remote_control_work_secret names a session this host did not attach.",
        );
      return {
        work_secret: (await r.refresh(r.sessionId, { signal: t })) || null,
      };
    }
    throw Error("Unsupported control request subtype: " + e.request.subtype);
  }
  async *readSdkMessages() {
    try {
      for await (let e of this.inputStream) yield e;
    } finally {
      await this.cleanup();
    }
  }
  async initialize() {
    if (this.hooks && !this.initHooksPayload) {
      this.initHooksPayload = {};
      for (let [f, g] of Object.entries(this.hooks))
        if (g.length > 0)
          this.initHooksPayload[f] = g.map((h) => {
            let w = [];
            for (let k of h.hooks) {
              let S = `hook_${this.nextCallbackId++}`;
              (this.hookCallbacks.set(S, k), w.push(S));
            }
            return {
              matcher: h.matcher,
              hookCallbackIds: w,
              timeout: h.timeout,
            };
          });
    }
    let e =
        this.sdkMcpServers.size > 0
          ? Array.from(this.sdkMcpServers.keys())
          : void 0,
      t = Array.from(this.sdkMcpServers).flatMap(([f, { timeout: g }]) =>
        g !== void 0 ? [[f, { timeout: g }]] : [],
      ),
      r = t.length > 0 ? Object.fromEntries(t) : void 0,
      o = {
        subtype: "initialize",
        hooks: this.initHooksPayload,
        sdkMcpServers: e,
        sdkMcpServerConfigs: r,
        jsonSchema: this.jsonSchema,
        systemPrompt:
          typeof this.initConfig?.systemPrompt === "string"
            ? [this.initConfig.systemPrompt]
            : this.initConfig?.systemPrompt,
        appendSystemPrompt: this.initConfig?.appendSystemPrompt,
        planModeInstructions: this.initConfig?.planModeInstructions,
        systemPromptSnapshot: this.initConfig?.systemPromptSnapshot,
        appendSubagentSystemPrompt: this.initConfig?.appendSubagentSystemPrompt,
        toolAliases: this.initConfig?.toolAliases,
        excludeDynamicSections: this.initConfig?.excludeDynamicSections,
        agents: this.initConfig?.agents,
        title: this.initConfig?.title,
        skills: Array.isArray(this.initConfig?.skills)
          ? this.initConfig.skills
          : void 0,
        webSearchIsolationExemptMcpServers:
          this.initConfig?.webSearchIsolationExemptMcpServers,
        promptSuggestions: this.initConfig?.promptSuggestions,
        agentProgressSummaries: this.initConfig?.agentProgressSummaries,
        forwardSubagentText: this.initConfig?.forwardSubagentText,
        supportedDialogKinds: this.initConfig?.supportedDialogKinds,
        perTaskStopAffordance: this.initConfig?.perTaskStopAffordance,
        plugins: this.initConfig?.plugins,
      },
      p = (await this.request(o)).response;
    if (
      this.initConfig?.plugins !== void 0 &&
      this.initConfig.plugins.length > 0 &&
      p.plugins_applied !== !0
    )
      logForDebugging(
        `[Query.initialize] Claude Code reported plugins_applied=${String(p.plugins_applied)} for ${this.initConfig.plugins.length} plugins sent with pluginDelivery 'initialize'; the process is running with the plugins it was launched with.`,
        { level: "warn" },
      );
    return p;
  }
  async interrupt(e) {
    return withFeatureTelemetry("sdk_interrupt", async () => {
      let t = await this.request({
          subtype: "interrupt",
          ...(e?.cancelQueued === !0 && { cancel_queued: !0 }),
        }),
        r = t.response?.still_queued;
      if (!Array.isArray(r)) return;
      let o = t.response?.cancelled;
      return {
        still_queued: r.filter((d) => typeof d === "string"),
        ...(Array.isArray(o) && {
          cancelled: o.filter((d) => typeof d === "string"),
        }),
      };
    });
  }
  async setPermissionMode(e) {
    await this.request({ subtype: "set_permission_mode", mode: e });
  }
  async setMcpPermissionModeOverride(e, t) {
    return (
      (
        await this.request({
          subtype: "set_mcp_permission_mode_override",
          serverName: e,
          mode: t,
        })
      ).response ?? {}
    );
  }
  awaitControlResponse(e) {
    return (
      this.transport.expectControlResponse?.(e),
      new Promise((t, r) => {
        let o = (p) => {
          if (p.subtype === "success") {
            let {
              pending_permission_requests: f,
              pending_user_dialog_requests: g,
              ...h
            } = p;
            t(h);
          } else r(new R(p.error, "awaitControlResponse: CLI error verdict"));
          if (p.pending_permission_requests || p.pending_user_dialog_requests)
            logForDebugging(
              "[Query] Ignoring prompt-redelivery fields on awaitControlResponse response",
            );
        };
        if (this.cleanupPerformed) {
          r(Error("Query closed before response received"));
          return;
        }
        let d = this.unmatchedControlResponses.get(e);
        if (d) {
          (this.unmatchedControlResponses.delete(e), o(d));
          return;
        }
        this.pendingControlResponses.set(e, {
          handler: (p) => {
            (this.pendingControlResponses.delete(e), o(p));
          },
          reject: r,
        });
      })
    );
  }
  async setModel(e) {
    await this.request({ subtype: "set_model", model: e });
  }
  async setMaxThinkingTokens(e, t) {
    await this.request({
      subtype: "set_max_thinking_tokens",
      max_thinking_tokens: e,
      thinking_display: t,
    });
  }
  async applyFlagSettings(e) {
    return withFeatureTelemetry("sdk_apply_flag_settings", async () => {
      await this.request({ subtype: "apply_flag_settings", settings: e });
    });
  }
  async getSettings() {
    return (await this.request({ subtype: "get_settings" })).response;
  }
  async updateSettings(e, t) {
    return withFeatureTelemetry("sdk_update_settings", async () => {
      await this.request({
        subtype: "update_settings",
        source: e,
        settings: t,
      });
    });
  }
  async rewindFiles(e, t) {
    return withFeatureTelemetry(
      "sdk_rewind_files",
      async () =>
        (
          await this.request({
            subtype: "rewind_files",
            user_message_id: e,
            dry_run: t?.dryRun,
          })
        ).response,
    );
  }
  async cancelAsyncMessage(e) {
    return (
      await this.request({ subtype: "cancel_async_message", message_uuid: e })
    ).response.cancelled;
  }
  async seedReadState(e, t) {
    await this.request({ subtype: "seed_read_state", path: e, mtime: t });
  }
  async setCwd(e, t) {
    return withFeatureTelemetry(
      "sdk_set_cwd",
      async () =>
        (
          await this.request({
            subtype: "set_cwd",
            path: e,
            ...(t?.trustAccepted !== void 0 && {
              trust_accepted: t.trustAccepted,
            }),
            ...(t?.trustedDirectory !== void 0 && {
              trusted_directory: t.trustedDirectory,
            }),
          })
        ).response,
    );
  }
  async enableRemoteControl(e, t, r) {
    let o = ++this.remoteControlCallGeneration,
      d = this.workSecretAnswerer,
      p =
        r?.reattachSessionId ||
        (r?.workSecret === void 0 ? void 0 : Ps(r.workSecret)),
      f =
        e && r?.workSecret !== void 0 && r.refreshWorkSecret && p !== void 0
          ? { sessionId: p, refresh: r.refreshWorkSecret }
          : void 0;
    this.workSecretAnswerer = f;
    let g;
    try {
      g = (
        await this.request({
          subtype: "remote_control",
          enabled: e,
          ...(t !== void 0 && { name: t }),
          reattach_session_id: r?.reattachSessionId,
          keep_session_on_exit: r?.keepSessionOnExit,
          work_secret: r?.workSecret,
        })
      ).response;
    } catch (h) {
      if (o === this.remoteControlCallGeneration)
        this.workSecretAnswerer = void 0;
      throw h;
    }
    if (e && o === this.remoteControlCallGeneration) {
      let h = g.bridge_session_id,
        w = [f, d];
      this.workSecretAnswerer =
        typeof h === "string"
          ? w.find((k) => k !== void 0 && Ct(k.sessionId, h))
          : void 0;
    }
    return g;
  }
  async submitFeedback(e, t) {
    return (
      await this.request({
        subtype: "submit_feedback",
        description: e,
        surface: t?.surface,
        draft_id: t?.draft_id,
        type: t?.type,
        title: t?.title,
        area: t?.area,
        attach_transcript: t?.attach_transcript,
      })
    ).response;
  }
  async generateSessionTitle(e, t) {
    return withFeatureTelemetry(
      "sdk_session_title_generate",
      async () =>
        (
          await this.request({
            subtype: "generate_session_title",
            description: e,
            persist: t?.persist,
          })
        ).response.title,
    );
  }
  async askSideQuestion(e, t) {
    return withFeatureTelemetry(
      "sdk_side_question",
      async () => {
        let o = (
          await this.request(
            {
              subtype: "side_question",
              question: e,
              ...(t?.history?.length && { history: [...t.history] }),
            },
            t,
          )
        ).response;
        return o.response === null
          ? null
          : {
              response: o.response,
              synthetic: o.synthetic ?? !1,
              ...(o.refusal_fallback && {
                refusalFallback: {
                  originalModel: o.refusal_fallback.original_model,
                  fallbackModel: o.refusal_fallback.fallback_model,
                  content: o.refusal_fallback.content,
                },
              }),
            };
      },
      () => (t?.signal?.aborted ? "cancelled" : "error"),
    );
  }
  async launchUltrareview(e, t) {
    return (
      await this.request({
        subtype: "ultrareview_launch",
        args: e,
        confirm: t?.confirm ?? !1,
      })
    ).response;
  }
  async messageRated(e) {
    await this.request({
      subtype: "message_rated",
      messageUuid: e.messageUuid,
      sentiment: e.sentiment,
      surface: e.surface,
      cleared: e.cleared ?? !1,
    });
  }
  processPendingPermissionRequests(e) {
    for (let t of e)
      if (t.request.subtype === "can_use_tool")
        this.handleControlRequest(t).catch(() => {});
  }
  processPendingUserDialogRequests(e) {
    for (let t of e)
      if (t.request.subtype === "request_user_dialog")
        this.handleControlRequest(t).catch(() => {});
  }
  request(e, t) {
    let r = Math.random().toString(36).substring(2, 15);
    this.transport.expectControlResponse?.(r);
    let o = { request_id: r, type: "control_request", request: e },
      d = e.subtype === "initialize";
    return new Promise((p, f) => {
      let g = t?.signal,
        h,
        w = (S) => {
          (h?.(), p(S));
        },
        k = (S) => {
          (h?.(), f(S));
        };
      if (g) {
        let S = () => {
          (this.pendingControlResponses.delete(r),
            k(ge(g.reason ?? "Control request aborted")));
          try {
            Promise.resolve(
              this.transport.write(
                jsonStringify({ type: "control_cancel_request", request_id: r }) +
                  `
`,
              ),
            ).catch(() => {});
          } catch {}
        };
        if (g.aborted) {
          S();
          return;
        }
        (g.addEventListener("abort", S, { once: !0 }),
          (h = () => {
            g.removeEventListener("abort", S);
          }));
      }
      (this.pendingControlResponses.set(r, {
        handler: (S) => {
          if ((this.pendingControlResponses.delete(r), S.subtype === "success"))
            w(S);
          else
            k(
              J1(Error(S.error), {
                telemetryMessage: `Claude Code control request failed (${e.subtype})`,
                errorClass: "control_request_failed",
              }),
            );
          if (
            !d &&
            (S.pending_permission_requests || S.pending_user_dialog_requests)
          )
            logForDebugging(
              `[Query] Ignoring prompt-redelivery fields on non-initialize response (subtype=${e.subtype})`,
            );
          else {
            if (S.pending_permission_requests)
              this.processPendingPermissionRequests(
                S.pending_permission_requests,
              );
            if (S.pending_user_dialog_requests)
              this.processPendingUserDialogRequests(
                S.pending_user_dialog_requests,
              );
          }
        },
        reject: k,
      }),
        Promise.resolve(
          this.transport.write(
            jsonStringify(o) +
              `
`,
          ),
        ).catch((S) => {
          (this.pendingControlResponses.delete(r), k(S));
        }));
    });
  }
  initializationResult() {
    return this.initialization;
  }
  reinitialize() {
    return withFeatureTelemetry("sdk_reinitialize", () => this.initialize());
  }
  async supportedCommands() {
    let { commands: e } = await this.initialization;
    return this.latestCommands ?? e;
  }
  async supportedModels() {
    return (await this.initialization).models;
  }
  async supportedAgents() {
    return (await this.initialization).agents;
  }
  async reconnectMcpServer(e) {
    await this.request({ subtype: "mcp_reconnect", serverName: e });
  }
  async toggleMcpServer(e, t) {
    return withFeatureTelemetry("sdk_mcp_toggle_server", async () => {
      await this.request({ subtype: "mcp_toggle", serverName: e, enabled: t });
    });
  }
  async enableChannel(e) {
    return withFeatureTelemetry("sdk_mcp_enable_channel", async () => {
      await this.request({ subtype: "channel_enable", serverName: e });
    });
  }
  async mcpAuthenticate(e, t) {
    return (
      await this.request({
        subtype: "mcp_authenticate",
        serverName: e,
        redirectUri: t,
      })
    ).response;
  }
  async mcpClearAuth(e) {
    return (await this.request({ subtype: "mcp_clear_auth", serverName: e }))
      .response;
  }
  async mcpSubmitOAuthCallbackUrl(e, t) {
    return (
      await this.request({
        subtype: "mcp_oauth_callback_url",
        serverName: e,
        callbackUrl: t,
      })
    ).response;
  }
  async claudeAuthenticate(e) {
    return (
      await this.request({
        subtype: "claude_authenticate",
        loginWithClaudeAi: e,
      })
    ).response;
  }
  async claudeOAuthCallback(e, t) {
    return (
      await this.request({
        subtype: "claude_oauth_callback",
        authorizationCode: e,
        state: t,
      })
    ).response;
  }
  async claudeOAuthWaitForCompletion() {
    return (await this.request({ subtype: "claude_oauth_wait_for_completion" }))
      .response;
  }
  async mcpServerStatus() {
    return (await this.request({ subtype: "mcp_status" })).response.mcpServers;
  }
  async getContextUsage(e) {
    return (await this.request({ subtype: "get_context_usage", ...e }))
      .response;
  }
  async usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET(e) {
    return (
      await this.request({
        subtype: "get_usage",
        ...(e?.skipBehaviors && { skip_behaviors: !0 }),
      })
    ).response;
  }
  async readFile(e, t) {
    try {
      return (
        await this.request({
          subtype: "read_file",
          path: e,
          max_bytes: t?.maxBytes,
          encoding: t?.encoding,
        })
      ).response;
    } catch {
      return null;
    }
  }
  async reloadPlugins() {
    return withFeatureTelemetry(
      "sdk_reload_plugins",
      async () => (await this.request({ subtype: "reload_plugins" })).response,
    );
  }
  async reloadSkills() {
    return withFeatureTelemetry(
      "sdk_reload_skills",
      async () => (await this.request({ subtype: "reload_skills" })).response,
    );
  }
  async reloadOutputStyles() {
    return withFeatureTelemetry(
      "sdk_reload_output_styles",
      async () =>
        (await this.request({ subtype: "reload_output_styles" })).response,
    );
  }
  async setMcpServers(e) {
    return withFeatureTelemetry("sdk_mcp_set_servers", async () => {
      let t = {},
        r = {};
      for (let [g, h] of Object.entries(e))
        if (h.type === "sdk" && "instance" in h) t[g] = h;
        else r[g] = h;
      let o = new Set(this.sdkMcpServers.keys()),
        d = new Set(Object.keys(t));
      for (let g of o) if (!d.has(g)) await this.disconnectSdkMcpServer(g);
      for (let [g, h] of Object.entries(t)) {
        let w = this.sdkMcpServers.get(g);
        if (!w) this.connectSdkMcpServer(g, h);
        else if (parsePositiveInteger(h.timeout) !== w.timeout)
          logForDebugging(
            `[Query.setMcpServers] MCP server '${g}' is already registered; its timeout change is ignored until the server is removed and re-added`,
          );
      }
      let p = {};
      for (let g of Object.keys(t)) {
        let h = this.sdkMcpServers.get(g)?.timeout;
        p[g] = { type: "sdk", name: g, ...(h !== void 0 && { timeout: h }) };
      }
      return (
        await this.request({
          subtype: "mcp_set_servers",
          servers: { ...r, ...p },
        })
      ).response;
    });
  }
  async accountInfo() {
    return (await this.initialization).account;
  }
  async streamInput(e) {
    logForDebugging("[Query.streamInput] Starting to process input stream");
    try {
      let t = 0;
      for await (let r of e) {
        if (
          (t++,
          logForDebugging(`[Query.streamInput] Processing message ${t}: ${r.type}`),
          this.abortController?.signal.aborted)
        )
          break;
        await Promise.resolve(
          this.transport.write(
            jsonStringify(r) +
              `
`,
          ),
        );
      }
      if (
        (logForDebugging(
          `[Query.streamInput] Finished processing ${t} messages from input stream`,
        ),
        t > 0 && this.hasBidirectionalNeeds())
      )
        (logForDebugging(
          "[Query.streamInput] Has bidirectional needs, waiting for first result",
        ),
          await this.waitForFirstResult());
      (logForDebugging("[Query] Calling transport.endInput() to close stdin to CLI process"),
        this.transport.endInput());
    } catch (t) {
      if (!(t instanceof AbortError)) throw t;
    }
  }
  waitForFirstResult() {
    if (this.firstResultReceived)
      return (
        logForDebugging(
          "[Query.waitForFirstResult] Result already received, returning immediately",
        ),
        Promise.resolve()
      );
    return new Promise((e) => {
      let t = this.abortController?.signal;
      if (this.cleanupPerformed || t?.aborted) {
        e();
        return;
      }
      let r = () => e();
      (t?.addEventListener("abort", r, { once: !0 }),
        this.addCleanupCallback(() => {
          (t?.removeEventListener("abort", r), e());
        }),
        (this.firstResultReceivedResolve = () => {
          (t?.removeEventListener("abort", r), e());
        }));
    });
  }
  handleHookCallbacks(e, t, r, o) {
    let d = this.hookCallbacks.get(e);
    if (!d) throw Error(`No hook callback found for ID: ${e}`);
    return d(t, r, { signal: o });
  }
  connectSdkMcpServer(e, t) {
    let r = new SdkMcpServerTransport((o) => this.sendMcpServerMessageToCli(e, o));
    (this.sdkMcpServers.set(e, { transport: r, timeout: parsePositiveInteger(t.timeout) }),
      t.instance.connect(r).catch((o) => {
        if (this.sdkMcpServers.get(e)?.transport === r)
          this.sdkMcpServers.delete(e);
        logForDebugging(
          `[Query.connectSdkMcpServer] Failed to connect MCP server '${e}': ${o}`,
          { level: "error" },
        );
      }));
  }
  async disconnectSdkMcpServer(e) {
    let t = this.sdkMcpServers.get(e);
    if (t) {
      if ((await t.transport.close(), this.sdkMcpServers.get(e) === t))
        this.sdkMcpServers.delete(e);
    }
  }
  sendMcpServerMessageToCli(e, t) {
    if ("id" in t && t.id !== null && t.id !== void 0) {
      let o = `${e}:${t.id}`,
        d = this.pendingMcpResponses.get(o);
      if (d) {
        (d.resolve(t), this.pendingMcpResponses.delete(o));
        return;
      }
    }
    let r = {
      type: "control_request",
      request_id: i8(),
      request: { subtype: "mcp_message", server_name: e, message: t },
    };
    Promise.resolve(
      this.transport.write(
        jsonStringify(r) +
          `
`,
      ),
    ).catch((o) => {
      logForDebugging(`[Query.sendMcpServerMessageToCli] Transport write failed: ${o}`, {
        level: "error",
      });
    });
  }
  handleMcpControlRequest(e, t, r) {
    let o = "id" in t.message ? t.message.id : null,
      d = `${e}:${o}`;
    return new Promise((p, f) => {
      let g = () => {
          this.pendingMcpResponses.delete(d);
        },
        h = (k) => {
          (g(), p(k));
        },
        w = (k) => {
          (g(), f(k));
        };
      if (
        (this.pendingMcpResponses.set(d, { resolve: h, reject: w }),
        r.onmessage)
      )
        r.onmessage(t.message);
      else {
        (g(), f(Error("No message handler registered")));
        return;
      }
    });
  }
}
function Ct(e, t) {
  if (e === t) return !0;
  let r = e.slice(e.lastIndexOf("_") + 1),
    o = t.slice(t.lastIndexOf("_") + 1);
  return r.length >= 4 && r === o;
}
function Ps(e) {
  try {
    let t = jsonParse(Buffer.from(e, "base64url").toString("utf8"));
    if (
      typeof t !== "object" ||
      t === null ||
      !("session_ingress_token" in t) ||
      typeof t.session_ingress_token !== "string"
    )
      return;
    let r = t.session_ingress_token,
      d = (r.startsWith("sk-ant-si-") ? r.slice(10) : r).split(".");
    if (d.length !== 3 || !d[1]) return;
    let p = jsonParse(Buffer.from(d[1], "base64url").toString("utf8"));
    return typeof p === "object" &&
      p !== null &&
      "session_id" in p &&
      typeof p.session_id === "string" &&
      p.session_id
      ? p.session_id
      : void 0;
  } catch {
    return;
  }
}
var Ve = 500,
  Re = 1048576;
var Is = [200, 800];
class Qe {
  send;
  pending = [];
  pendingEntries = 0;
  pendingBytes = 0;
  flushPromise = null;
  sendTimeoutMs;
  onError;
  maxPendingEntries;
  maxPendingBytes;
  backoffMs;
  constructor(e, t) {
    this.send = e;
    let {
      sendTimeoutMs: r = 60000,
      onError: o,
      maxPendingEntries: d = Ve,
      maxPendingBytes: p = Re,
      backoffMs: f = Is,
    } = t ?? {};
    ((this.sendTimeoutMs = r),
      (this.onError = o),
      (this.maxPendingEntries = d),
      (this.maxPendingBytes = p),
      (this.backoffMs = f));
  }
  enqueue(e, t) {
    let r = jsonStringify(t).length;
    if (
      (this.pending.push({ filePath: e, entries: t, bytes: r }),
      (this.pendingEntries += t.length),
      (this.pendingBytes += r),
      this.pendingEntries > this.maxPendingEntries ||
        this.pendingBytes > this.maxPendingBytes)
    )
      ((this.flushPromise = this.drain()), this.flushPromise.catch(() => {}));
  }
  async flush() {
    let e = this.drain();
    if (((this.flushPromise = e), await e, this.flushPromise === e))
      this.flushPromise = null;
  }
  async drain() {
    let e = this.flushPromise,
      t = this.pending.splice(0);
    if (((this.pendingEntries = 0), (this.pendingBytes = 0), e)) await e;
    if (t.length === 0) return;
    await this.doFlush(t);
  }
  async doFlush(e) {
    let t = new Map();
    for (let r of e) {
      let o = t.get(r.filePath);
      if (o) o.push(...r.entries);
      else t.set(r.filePath, r.entries.slice());
    }
    for (let [r, o] of t) await this.sendWithRetry(r, o);
  }
  async sendWithRetry(e, t) {
    let r = this.backoffMs.length + 1,
      o = `SessionStore.append() timed out after ${this.sendTimeoutMs}ms for ${e}`,
      d,
      p = 1;
    for (; p <= r; p++)
      try {
        (await withTimeout(this.send(e, t), this.sendTimeoutMs, o), (d = void 0));
        break;
      } catch (f) {
        if (((d = ge(f)), d.message === o)) break;
        let g = this.backoffMs[p - 1];
        if (g === void 0) break;
        await sleep(g);
      }
    if (d) {
      logForDebugging(
        `[TranscriptMirrorBatcher] flush failed for ${e} after ${p} attempt(s): ${d}`,
        { level: "error" },
      );
      try {
        this.onError?.(e, d);
      } catch (f) {
        logForDebugging(`[TranscriptMirrorBatcher] onError callback threw: ${f}`, {
          level: "error",
        });
      }
    }
  }
}
var De = toESM(otelApiModule(), 1);
import {
  copyFile,
} from "fs/promises";
function Ot(e) {
  return {
    globalConfig: join(e || homedir(), ".claude.json"),
    userSettings: join(e || join(homedir(), ".claude"), "settings.json"),
  };
}
function Ye(e, t, r, o) {
  return e !== void 0 && t === r ? { backend: e, key: o } : void 0;
}
async function Me(e, t, r, o) {
  if (o) return Ks(o, e, t, r);
  try {
    if (r) await writeFile(t, r(await readFile(e)), { mode: 384 });
    else await copyFile(e, t);
  } catch (d) {
    if (A(d) === void 0) throw d;
    if (!W(d))
      (await rm(t, { force: !0 }).catch(() => {}),
        logForDebugging(`sessionStore resume: skipping ${e} (${A(d)})`));
  }
}
async function Ks({ backend: e, key: t }, r, o, d) {
  let p = await e.read([t]);
  if (!p.ok) {
    if (p.error.code === "InvalidArgument")
      throw new R(
        `sessionStore resume: invalid v5 key for ${r}: ${p.error.argument}${p.error.reason ? ` (${p.error.reason})` : ""}`,
        "sessionStore resume: invalid v5 key (InvalidArgument from backend read)",
      );
    logForDebugging(`sessionStore resume: skipping ${r} (${p.error.code})`);
    return;
  }
  let f = p.value.items[0];
  if (!f?.found) return;
  let g = Buffer.from(f.value);
  try {
    await writeFile(o, d ? d(g) : g, { mode: 384 });
  } catch (h) {
    if (A(h) === void 0) throw h;
    if (!W(h))
      (await rm(o, { force: !0 }).catch(() => {}),
        logForDebugging(`sessionStore resume: skipping ${r} (${A(h)})`));
  }
}
function Bs(e, t) {
  if (e === "bypassPermissions")
    return "canUseTool will not be invoked: permissionMode 'bypassPermissions' auto-approves every tool call (except explicit deny rules) before the callback is consulted. To gate every tool call, use a PreToolUse hook instead.";
  let r = t.filter((o) => o.length > 0 && !o.includes("("));
  if (r.length === 0) return;
  return `canUseTool will not be invoked for: ${r.join(", ")}. Bare allowedTools entries auto-approve the whole tool before the callback is consulted. To gate every tool call, use a PreToolUse hook; or remove the bare names from allowedTools so they fall through to canUseTool. Allow rules from settings files can also shadow the callback but are not visible here.`;
}
function Ut(e, t, r) {
  if (!e) return;
  let o = Bs(t, r);
  if (o === void 0) return;
  process.emitWarning(o, { code: "CLAUDE_SDK_CAN_USE_TOOL_SHADOWED" });
}
var jt;
(function (e) {
  e.Completable = "McpCompletable";
})(jt || (jt = {}));
var ho = createLazyValue(() =>
  c({
    session_id: s(),
    ws_url: s(),
    work_dir: s().optional(),
    session_key: s().optional(),
  }),
);
process.env.NoDefaultCurrentDirectoryInExePath = "1";
var Ys = ["enabledPlugins", "extraKnownMarketplaces", "additionalMarketplaces"];
function Lt(e) {
  let t;
  try {
    t = jsonParse(cs(e.toString("utf8")));
  } catch {
    return e;
  }
  if (!$t(t)) return e;
  let r = !1;
  for (let d of Ys) if (Object.hasOwn(t, d)) (delete t[d], (r = !0));
  let o = t.env;
  if ($t(o) && Object.hasOwn(o, "CLAUDE_CONFIG_DIR"))
    (delete o.CLAUDE_CONFIG_DIR, (r = !0));
  return r ? jsonStringify(t) : e;
}
function $t(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
async function Zs(e, t) {
  if (!e) return;
  let r = e;
  try {
    let o = jsonParse(e);
    if (o?.claudeAiOauth?.refreshToken)
      (delete o.claudeAiOauth.refreshToken, (r = jsonStringify(o)));
  } catch {}
  await writeFile(t, r, { mode: 384 });
}
function er() {
  let e = getKeychainServiceName(CREDENTIALS_SUFFIX);
  return new Promise((t) => {
    execFile(
      "security",
      ["find-generic-password", "-a", getKeychainAccountName(), "-w", "-s", e],
      { encoding: "utf-8", timeout: 5000, windowsHide: !0 },
      (r, o) => t(r ? void 0 : o.trim() || void 0),
    );
  });
}
async function tr(e, t, r, o, d = 60000, p) {
  if (!validateUuid(t)) return;
  let f = Vt(r, o),
    g = await withTimeout(
      e.load({ projectKey: f, sessionId: t }),
      d,
      `SessionStore.load() timed out after ${d}ms for session ${t}`,
    );
  if (!g || g.length === 0) return;
  let h = join(tmpdir(), `claude-resume-${randomUUID()}`);
  try {
    let w = join(h, "projects", f);
    await mkdir(w, { recursive: !0, mode: 448 });
    let k = join(w, `${t}.jsonl`);
    await writeEntriesToJsonlFile(k, g);
    let S = o?.CLAUDE_CONFIG_DIR ?? process.env.CLAUDE_CONFIG_DIR,
      C = S ?? join(homedir(), ".claude"),
      _;
    try {
      _ = await readFile(join(C, ".credentials.json"), "utf-8");
    } catch (V) {
      if (!W(V)) throw V;
    }
    if (
      !S &&
      !(o ?? process.env).ANTHROPIC_API_KEY &&
      !(o ?? process.env).CLAUDE_CODE_OAUTH_TOKEN
    )
      _ = (await er()) ?? _;
    await Zs(_, join(h, ".credentials.json"));
    let U = Ot(a.CLAUDE_CONFIG_DIR),
      E = join(S ?? homedir(), ".claude.json");
    await Me(
      E,
      join(h, ".claude.json"),
      void 0,
      Ye(p, E, U.globalConfig, STORAGE_KEYS.globalConfig()),
    );
    let T = join(C, "settings.json");
    if (
      (await Me(
        T,
        join(h, "settings.json"),
        Lt,
        Ye(p, T, U.userSettings, STORAGE_KEYS.userSettings()),
      ),
      await Me(join(C, "cowork_settings.json"), join(h, "cowork_settings.json"), Lt),
      e.listSubkeys)
    )
      await sr(e, { projectKey: f, sessionId: t }, join(w, t), d);
    return h;
  } catch (w) {
    throw (await Wt(h), w);
  }
}
async function sr(e, t, r, o) {
  let d = await withTimeout(
    e.listSubkeys({ projectKey: t.projectKey, sessionId: t.sessionId }),
    o,
    `SessionStore.listSubkeys() timed out after ${o}ms for session ${t.sessionId}`,
  );
  for (let p of d) {
    let f = resolve(r, p + ".jsonl");
    if (
      !p ||
      isAbsolute(p) ||
      p.split(/[\\/]/).includes("..") ||
      !f.startsWith(r + sep)
    ) {
      logForDebugging(`[SessionStore] skipping unsafe subpath from listSubkeys: ${p}`, {
        level: "warn",
      });
      continue;
    }
    let g = await withTimeout(
      e.load({ projectKey: t.projectKey, sessionId: t.sessionId, subpath: p }),
      o,
      `SessionStore.load() timed out after ${o}ms for session ${t.sessionId} subpath ${p}`,
    );
    if (!g || g.length === 0) continue;
    let h = [],
      w = [];
    for (let k of g)
      if (ar(k)) h.push(k);
      else w.push(k);
    if (w.length > 0) (await mkdir(dirname(f), { recursive: !0 }), await writeEntriesToJsonlFile(f, w));
    if (h.length > 0) {
      let k = h.at(-1),
        S = resolve(r, p + ".meta.json");
      await mkdir(dirname(S), { recursive: !0 });
      let { type: C, ..._ } = k;
      await writeFile(S, jsonStringify(_), { mode: 384 });
    }
  }
}
function Gt(e, t) {
  let { isSingleUserTurn: r, resumeConfigDir: o, deferSpawn: d } = t,
    {
      systemPrompt: p,
      settings: f,
      managedSettings: g,
      settingSources: h,
      sandbox: w,
      ...k
    } = e ?? {},
    S,
    C,
    _,
    U;
  if (p === void 0) S = "";
  else if (typeof p === "string") S = p;
  else if (Array.isArray(p)) S = p;
  else if (p.type === "custom") ((S = p.prompt), (U = p.snapshot));
  else if (p.type === "preset")
    ((C = p.append), (_ = p.excludeDynamicSections), (U = p.snapshot));
  process.env.CLAUDE_AGENT_SDK_VERSION =
    process.env.CLAUDE_AGENT_SDK_VERSION ?? "unknown";
  let {
      abortController: E = createAbortController(),
      additionalDirectories: T = [],
      agent: V,
      agents: ee,
      allowedTools: te = [],
      betas: Ae,
      canUseTool: Q,
      continue: se,
      cwd: re,
      debug: fe,
      debugFile: J,
      disallowedTools: ne = [],
      tools: Oe,
      env: K,
      executable: Ue = isRunningWithBun() ? "bun" : "node",
      executableArgs: ie = [],
      extraArgs: me = {},
      fallbackModel: je,
      enableFileCheckpointing: N,
      toolConfig: y,
      forkSession: he,
      hooks: Se,
      includeHookEvents: oe,
      includePartialMessages: ae,
      forwardSubagentText: le,
      onElicitation: ye,
      onUserDialog: q,
      supportedDialogKinds: v,
      perTaskStopAffordance: F,
      persistSession: M,
      sessionStore: O,
      sessionStoreFlush: Fe,
      thinking: H,
      effort: we,
      maxThinkingTokens: Le,
      maxTurns: Qt,
      maxBudgetUsd: Jt,
      taskBudget: Xt,
      mcpServers: tt,
      model: Yt,
      outputFormat: st,
      permissionMode: Zt,
      allowDangerouslySkipPermissions: es = !1,
      permissionPromptToolName: ts,
      permissionPrompts: ss,
      plugins: ke,
      pluginDelivery: $e = "argv",
      getOAuthToken: rt,
      getHostAuthToken: nt,
      workload: it,
      resume: ot,
      resumeSessionAt: rs,
      resumeDropsTurn: ns,
      sessionId: is,
      skills: at,
      stderr: os,
      strictMcpConfig: as,
    } = k,
    lt = Zt ?? (e?.resolvePermissionModeInCli ? void 0 : "default");
  if (O && M === !1)
    throw Error(
      "sessionStore cannot be used with persistSession: false -- the storage adapter requires local writes to mirror from. Use CLAUDE_CONFIG_DIR=/tmp for ephemeral local writes with external mirroring.",
    );
  if (v !== void 0 && v.length > 0 && !q)
    throw Error(
      "supportedDialogKinds requires an onUserDialog callback -- declaring dialog kinds without a handler would park dialogs nothing can answer. Provide onUserDialog, or omit supportedDialogKinds.",
    );
  if (O && se && !ot && !O.listSessions)
    throw Error(
      "Options.continue with sessionStore requires store.listSessions to be implemented",
    );
  if (O && N)
    throw Error(
      "enableFileCheckpointing is not yet supported with sessionStore (backup blobs are not mirrored, so rewindFiles() fails after a store-backed resume).",
    );
  if (O && k.spawnClaudeCodeProcess)
    logForDebugging(
      "sessionStore with custom spawnClaudeCodeProcess: ensure the subprocess CLAUDE_CONFIG_DIR matches the parent (same path, same separators) or transcript_mirror frames will be dropped.",
      { level: "warn" },
    );
  if ((Ut(!!Q, lt ?? "default", te), $e !== "argv" && $e !== "initialize"))
    throw Error("Invalid pluginDelivery. Expected 'argv' or 'initialize'.");
  let ct = $e === "initialize" && ke !== void 0 && ke.length > 0,
    Ne = k.pathToClaudeCodeExecutable;
  if (!Ne) {
    let I = fileURLToPath(import.meta.url),
      L = createRequire(I),
      G = _t((X) => L.resolve(X));
    if (!G)
      throw Error(
        "Native CLI binary for darwin-arm64 not found. Reinstall @anthropic-ai/claude-agent-sdk without --omit=optional, or set options.pathToClaudeCodeExecutable.",
      );
    Ne = G;
  }
  let dt = st?.type === "json_schema" ? st.schema : void 0,
    P = K ? { ...K } : { ...process.env };
  if (!P.CLAUDE_CODE_ENTRYPOINT) P.CLAUDE_CODE_ENTRYPOINT = "sdk-ts";
  if (!P.CLAUDE_AGENT_SDK_VERSION)
    P.CLAUDE_AGENT_SDK_VERSION = process.env.CLAUDE_AGENT_SDK_VERSION;
  if (N) P.CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING = "true";
  if (rt) P.CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH = "1";
  if (nt) P.CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH = "1";
  if (y?.askUserQuestion?.previewFormat)
    P.CLAUDE_CODE_QUESTION_PREVIEW_FORMAT = y.askUserQuestion.previewFormat;
  if (y?.askUserQuestion?.extendedQuestions)
    P.CLAUDE_CODE_QUESTION_EXTENDED = "1";
  else if (!K) {
    for (let I of Object.keys(P))
      if (I.toUpperCase() === "CLAUDE_CODE_QUESTION_EXTENDED") delete P[I];
  }
  let Ke = {};
  if ((De.propagation.inject(De.context.active(), Ke), "traceparent" in Ke)) {
    for (let I of ["TRACEPARENT", "TRACESTATE"])
      if (!(I in (K ?? {}))) delete P[I];
  }
  for (let [I, L] of Object.entries(Ke)) {
    let G = I.toUpperCase();
    if (!(G in (K ?? {}))) P[G] = L;
  }
  let ut = {},
    pt = new Map();
  if (tt)
    for (let [I, L] of Object.entries(tt))
      if (L.type === "sdk" && L.instance) pt.set(I, L);
      else ut[I] = L;
  let ce;
  if (H)
    switch (H.type) {
      case "adaptive":
        ce = { type: "adaptive", display: H.display };
        break;
      case "enabled":
        ce = {
          type: "enabled",
          budgetTokens: H.budgetTokens,
          display: H.display,
        };
        break;
      case "disabled":
        ce = { type: "disabled" };
        break;
    }
  else if (Le !== void 0)
    ce =
      Le === 0 ? { type: "disabled" } : { type: "enabled", budgetTokens: Le };
  if (o) P.CLAUDE_CONFIG_DIR = o;
  let ft = new We({
      abortController: E,
      additionalDirectories: T,
      agent: V,
      betas: Ae,
      cwd: re,
      debug: fe,
      debugFile: J,
      executable: Ue,
      executableArgs: ie,
      extraArgs: it ? { ...me, workload: it } : me,
      pathToClaudeCodeExecutable: Ne,
      env: P,
      forkSession: he,
      stderr: os,
      thinkingConfig: ce,
      effort: we,
      maxTurns: Qt,
      maxBudgetUsd: Jt,
      taskBudget: Xt,
      model: Yt,
      fallbackModel: je,
      jsonSchema: dt,
      permissionMode: lt,
      allowDangerouslySkipPermissions: es,
      permissionPromptToolName: ts,
      permissionPrompts: ss,
      continueConversation: O ? void 0 : se,
      resume: ot,
      resumeSessionAt: rs,
      resumeDropsTurn: ns,
      sessionId: is,
      settings: typeof f === "object" ? jsonStringify(f) : f,
      managedSettings: g ? jsonStringify(g) : void 0,
      settingSources: h,
      skills: at,
      allowedTools: te,
      disallowedTools: ne,
      tools: Oe,
      mcpServers: ut,
      strictMcpConfig: as,
      canUseTool: !!Q,
      hooks: !!Se,
      includeHookEvents: oe,
      includePartialMessages: ae,
      persistSession: M,
      sessionMirror: !!O,
      plugins: ke,
      pluginsViaInitialize: ct,
      sandbox: w,
      spawnClaudeCodeProcess: k.spawnClaudeCodeProcess,
      deferSpawn: d,
    }),
    ls = {
      systemPrompt: S,
      appendSystemPrompt: C,
      planModeInstructions: k.planModeInstructions,
      systemPromptSnapshot: U,
      appendSubagentSystemPrompt: k.appendSubagentSystemPrompt,
      toolAliases: k.toolAliases,
      excludeDynamicSections: _,
      agents: ee,
      title: k.title,
      skills: at,
      webSearchIsolationExemptMcpServers: k.webSearchIsolationExemptMcpServers,
      promptSuggestions: k.promptSuggestions,
      agentProgressSummaries: k.agentProgressSummaries,
      forwardSubagentText: le,
      supportedDialogKinds: v,
      perTaskStopAffordance: F,
      plugins: ct ? ke : void 0,
    },
    Be = new _e(ft, r, Q, Se, E, pt, dt, ls, ye, rt, nt, q);
  if (O) {
    let I = () => join(P.CLAUDE_CONFIG_DIR ?? join(homedir(), ".claude"), "projects"),
      L = Fe === "eager",
      G = new Qe(
        async (X, qe) => {
          let de = Nt(X, I());
          if (de) await O.append(de, qe);
          else
            logForDebugging(
              `[SessionStore] dropping mirror frame: filePath ${X} is not under ${I()} -- subprocess CLAUDE_CONFIG_DIR likely differs from parent (custom spawnClaudeCodeProcess / container?)`,
              { level: "warn" },
            );
        },
        {
          onError: (X, qe) => {
            let de = Nt(X, I());
            if (de) Be.reportMirrorError(de, qe.message);
          },
          maxPendingEntries: L ? 0 : Ve,
          maxPendingBytes: L ? 0 : Re,
        },
      );
    Be.setTranscriptMirrorBatcher(G);
  }
  return {
    queryInstance: Be,
    transport: ft,
    abortController: E,
    processEnv: P,
  };
}
function zt(e, t, r, o) {
  if (typeof r === "string")
    t.write(
      jsonStringify({
        type: "user",
        session_id: "",
        message: { role: "user", content: [{ type: "text", text: r }] },
        parent_tool_use_id: null,
      }) +
        `
`,
    );
  else e.streamInput(r).catch((d) => o.abort(d));
}
var rr = new Set(["EBUSY", "EMFILE", "ENFILE", "ENOTEMPTY", "EPERM"]);
async function Wt(e) {
  for (let t = 0; ; t++)
    try {
      return await rm(e, { recursive: !0, force: !0 });
    } catch (r) {
      if (t >= 4 || !rr.has(A(r) ?? "")) return;
      await sleep((t + 1) * 100);
    }
}
function nr(e, t) {
  e.waitForExit()
    .catch(() => {})
    .finally(() => Wt(t));
}
function query({ prompt: e, options: t }) {
  if ((t?.resume || t?.continue) && t?.sessionStore) return ir(e, t);
  let {
    queryInstance: r,
    transport: o,
    abortController: d,
  } = Gt(t, { isSingleUserTurn: typeof e === "string" });
  return (zt(r, o, e, d), r);
}
function ir(e, t) {
  let {
      queryInstance: r,
      transport: o,
      abortController: d,
      processEnv: p,
    } = Gt(
      { ...t },
      { isSingleUserTurn: typeof e === "string", deferSpawn: !0 },
    ),
    f = resolve(t.cwd ?? "."),
    g = t.sessionStore,
    h = t.loadTimeoutMs ?? 60000,
    w = t.resume;
  return (
    (async () => {
      if (!w)
        w = (
          await withTimeout(
            g.listSessions(Vt(f, t.env)),
            h,
            `SessionStore.listSessions() timed out after ${h}ms`,
          )
        )
          .slice()
          .sort((C, _) => _.mtime - C.mtime)[0]?.sessionId;
      if (!w) return;
      return tr(g, w, f, t.env, t.loadTimeoutMs);
    })()
      .then((S) => {
        if (S) {
          o.updateResume(w);
          let C = { CLAUDE_CONFIG_DIR: S };
          (o.updateEnv(C),
            (p.CLAUDE_CONFIG_DIR = S),
            r.addCleanupCallback(() => nr(o, S)));
        }
        if (!r.isClosed()) o.spawn();
      })
      .catch((S) => {
        let C = ge(S);
        (o.spawnAbort(C), r.setError(C));
      }),
    zt(r, o, e, d),
    r
  );
}
function or(e) {
  let t = resolve(e ?? "."),
    r;
  try {
    r = realpathSync(t);
  } catch {
    r = t;
  }
  return zn(r);
}
function Vt(e, t) {
  let r = or(e);
  if (t === void 0) return getProjectKey(r);
  return (
    (t.CLAUDE_CONFIG_DIR ? parseProjectDirName(t.CLAUDE_CODE_PROJECT_DIR_NAME) : void 0) ??
    sanitizePath(r)
  );
}
function ar(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "type" in e &&
    e.type === "agent_metadata"
  );
}
function Nt(e, t) {
  let r = relative(t, e),
    o = r.split(sep);
  if (o[0] === ".." || isAbsolute(r)) return null;
  if (o.length < 2) return null;
  let d = o[0],
    p = o[1];
  if (o.length === 2 && p.endsWith(".jsonl"))
    return { projectKey: d, sessionId: p.replace(/\.jsonl$/, "") };
  if (o.length >= 4) {
    let f = o.slice(2),
      g = f.length - 1;
    return (
      (f[g] = f.at(-1).replace(/\.jsonl$/, "")),
      { projectKey: d, sessionId: p, subpath: f.join("/") }
    );
  }
  return null;
}
export { query };

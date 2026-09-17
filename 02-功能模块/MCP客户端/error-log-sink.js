// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createStringBatchWriter, registerCleanup, registerPreExitFlush, jsonStringify, getFsSurface, redactSecretsFromText, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getCurrentWorkingDirectory, logDirectories, dateToFilename, attachErrorLogSink } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { reportError } from "../../01-核心基础设施/HTTP-网络层/error-tracking-report.js";
import { emitInternalErrorEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { createKeyedSerialQueue } from "../../01-核心基础设施/核心工具-并发与缓存/async-serialization.js";
import { dirname, join as a } from "path";
var f = dateToFilename(new Date());
function c() {
  return a(logDirectories.errors(), f + ".jsonl");
}
function g(e) {
  return a(logDirectories.mcpLogs(e), f + ".jsonl");
}
function u(e) {
  let r = createStringBatchWriter(e);
  return {
    write(t) {
      r.write(
        jsonStringify(t) +
          `
`,
      );
    },
    flush: r.flush,
    dispose: r.dispose,
  };
}
function m() {}
class l {
  writers = new Map();
  pendingWrites = createKeyedSerialQueue();
  writerFor(e) {
    let r = this.writers.get(e);
    if (!r) {
      let t = dirname(e),
        i = !1;
      ((r = u({
        writeFn: (o) => {
          this.pendingWrites.run(e, async () => {
            try {
              await d(t, e, o);
            } catch (s) {
              if (!i)
                ((i = !0),
                  logForDebugging(
                    `Dropping log batch for ${e}: ${s instanceof Error ? s.message : String(s)}`,
                  ));
            }
          });
        },
        flushIntervalMs: 1000,
        maxBufferSize: 50,
      })),
        this.writers.set(e, r),
        registerCleanup(async () => {
          (r?.dispose(), await this.pendingWrites.settle());
        }),
        registerPreExitFlush(this.flushBeforeExit));
    }
    return r;
  }
  async flush() {
    for (let e of this.writers.values()) e.flush();
    await this.pendingWrites.settle();
  }
  flushBeforeExit = () => this.flush();
  async reset() {
    for (let e of this.writers.values()) e.dispose();
    (await this.pendingWrites.settle(),
      this.writers.clear(),
      this.pendingWrites.clearForTest());
  }
}
async function d(e, r, t) {
  let i = getFsSurface();
  try {
    await i.appendFile(r, t);
  } catch {
    (await i.mkdir(e).catch(m), await i.appendFile(r, t));
  }
}
function w(e, r, t) {
  return;
}
function E(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    let r = e;
    if (typeof r.message === "string") return r.message;
    if (
      typeof r.error === "object" &&
      r.error &&
      "message" in r.error &&
      typeof r.error.message === "string"
    )
      return r.error.message;
  }
  return;
}
function v(e, r) {
  (emitInternalErrorEvent(r), reportError(r));
  let t = r.stack || r.message,
    i = "";
  if (at.isAxiosError(r) && r.config?.url) {
    let o = [`url=${r.config.url}`];
    if (r.response?.status !== void 0) o.push(`status=${r.response.status}`);
    let s = E(r.response?.data);
    if (s) o.push(`body=${s}`);
    i = `[${o.join(",")}] `;
  }
  (logForDebugging(`${r.name}: ${i}${t}`, { level: "error" }),
    w(e, c(), { error: `${i}${t}` }));
}
function h(e, r, t) {
  logForDebugging(`MCP server "${r}" ${t}`, { level: "error" });
  let i = g(r),
    o = t instanceof Error ? t.stack || t.message : String(t),
    s = {
      error: redactSecretsFromText(o),
      timestamp: new Date().toISOString(),
      sessionId: K(),
      cwd: getCurrentWorkingDirectory(),
    };
  e.writerFor(i).write(s);
}
function S(e, r, t) {
  logForDebugging(`MCP server "${r}": ${t}`);
  let i = g(r),
    o = {
      debug: redactSecretsFromText(t),
      timestamp: new Date().toISOString(),
      sessionId: K(),
      cwd: getCurrentWorkingDirectory(),
    };
  e.writerFor(i).write(o);
}
function initErrorLogSink() {
  (attachErrorLogSink(y(new l())), logForDebugging("Error log sink initialized"));
}
function y(e) {
  return {
    logError: (r) => v(e, r),
    logMCPError: (r, t) => h(e, r, t),
    logMCPDebug: (r, t) => S(e, r, t),
    getErrorsPath: c,
    getMCPLogsPath: g,
  };
}
export { initErrorLogSink };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 21 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { setBgExitCause } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { exitAfterAnalyticsFlush } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import { logFeatureBadAsync } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { eb, Il, Pc, YE } from "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import { resolveWrappedClaudeInvocation } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { aIe, alt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tkfrb8jm.js";
import { spawn } from "child_process";
import { closeSync } from "fs";
import { constants } from "os";
import { isatty } from "tty";
function d() {
  for (let r = 0; r < 32; r++) {
    if (r === 1 || r === 2) continue;
    try {
      if (isatty(r)) closeSync(r);
    } catch {}
  }
}
async function execRelaunch({ proactivity: r } = {}) {
  if ((await new Promise((e) => setImmediate(e)), !(await YE())))
    return (
      await logFeatureBadAsync("agent_launcher", "relaunch_launcher_not_runnable"),
      process.stderr.write(`
${Pc() ?? `${eb}: launcher \`${Il()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),
      exitAfterAnalyticsFlush(1)
    );
  let { cmd: n, prefixArgs: a } = resolveWrappedClaudeInvocation(),
    c = process.argv.slice(2),
    t = { ...process.env };
  (delete t[aIe], Object.assign(t, alt()));
  let i = spawn(n, [...a, ...c], { stdio: "inherit", env: t });
  d();
  let s = ["SIGINT", "SIGTERM", "SIGHUP"];
  for (let e of s)
    process.on(e, () => {
      try {
        i.kill(e);
      } catch {}
    });
  return new Promise(() => {
    (i.on("close", (e, o) => {
      let l = o ? 128 + (constants.signals[o] ?? 0) : 0;
      process.exit(e ?? l);
    }),
      i.on("error", (e) => {
        (process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),
          setBgExitCause("relaunch_child_error"),
          process.exit(1));
      }));
  });
}
export { execRelaunch };

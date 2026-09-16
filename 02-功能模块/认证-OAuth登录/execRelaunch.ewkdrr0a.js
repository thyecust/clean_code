// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "./chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Fp } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { ys } from "../../01-核心基础设施/共享小工具-未细化/chunk-4f55jpqh.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { wn } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { eb, Il, Pc, YE } from "../../01-核心基础设施/核心工具-进程与信号/chunk-w78brv7j.js";
import { rd } from "../../01-核心基础设施/共享小工具-未细化/chunk-7dzh4mjq.js";
import { aIe, alt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tkfrb8jm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { spawn as E } from "child_process";
import { closeSync as v } from "fs";
import { constants as p } from "os";
import { isatty as u } from "tty";
function d() {
  for (let r = 0; r < 32; r++) {
    if (r === 1 || r === 2) continue;
    try {
      if (u(r)) v(r);
    } catch {}
  }
}
async function U({ proactivity: r } = {}) {
  if ((await new Promise((e) => setImmediate(e)), !(await YE())))
    return (
      await wn("agent_launcher", "relaunch_launcher_not_runnable"),
      process.stderr.write(`
${Pc() ?? `${eb}: launcher \`${Il()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`),
      ys(1)
    );
  let { cmd: n, prefixArgs: a } = rd(),
    c = process.argv.slice(2),
    t = { ...process.env };
  (delete t[aIe], Object.assign(t, alt()));
  let i = E(n, [...a, ...c], { stdio: "inherit", env: t });
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
      let l = o ? 128 + (p.signals[o] ?? 0) : 0;
      process.exit(e ?? l);
    }),
      i.on("error", (e) => {
        (process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`),
          Fp("relaunch_child_error"),
          process.exit(1));
      }));
  });
}
export { U as execRelaunch };

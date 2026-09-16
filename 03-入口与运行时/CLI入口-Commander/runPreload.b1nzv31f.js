// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ile } from "../../02-功能模块/Workflow编排/chunk-qjm604e8.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Sot, bot } from "../../01-核心基础设施/共享小工具-未细化/chunk-6y25h56s.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ezjdm9sg.js";
import { mkdirSync as u, unlinkSync as p, writeFileSync as f } from "fs";
import { dirname as S } from "path";
var P = "/home/claude/.claude/remote/spare.sock";
async function d(i, t) {
  let r = i[0] || P,
    n = `${r}.pid`,
    s = t();
  import("../../02-功能模块/Bridge-RemoteControl/validateExplicitMessagingSocketPath.knbv811d.js");
  for (let o of Ile) delete process.env[o];
  try {
    (u(S(r), { recursive: !0, mode: 448 }), p(r));
  } catch {}
  let e = () => {
      for (let o of [r, n])
        try {
          p(o);
        } catch {}
    },
    c = () => {
      (e(), process.exit(0));
    },
    a = (o) => {
      (e(),
        process.stderr.write(`[preload] uncaughtException: ${l(o)}
`),
        process.exit(1));
    };
  for (let o of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(o, c);
  process.on("uncaughtException", a);
  let m;
  try {
    m = await Sot(r, () => {
      f(n, String(process.pid), { mode: 384 });
    });
  } catch (o) {
    (e(),
      process.stderr.write(`[preload] claim recv failed: ${l(o)}
`),
      process.exit(1));
  }
  for (let o of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(o, c);
  (process.off("uncaughtException", a), e(), await s, await bot(m, s));
}
function w(i, t = () => import("./main.vdzfymn2.js")) {
  return d(i, t);
}
export { w as runPreload };

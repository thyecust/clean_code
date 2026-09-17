// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 84 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { NON_INHERITED_SESSION_ENV_VARS } from "../../02-功能模块/编排-Workflow/session-env-vars.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { receiveSpareClaim, bootClaimedSpare } from "../../01-核心基础设施/共享小工具-未细化/spare-session-claim.js";
import "../../01-核心基础设施/共享小工具-未细化/session-ingress-token.js";
import { mkdirSync, unlinkSync, writeFileSync } from "fs";
import { dirname } from "path";
var P = "/home/claude/.claude/remote/spare.sock";
async function d(i, t) {
  let r = i[0] || P,
    n = `${r}.pid`,
    s = t();
  import("../../02-功能模块/远程控制-Bridge/validateExplicitMessagingSocketPath.knbv811d.js");
  for (let o of NON_INHERITED_SESSION_ENV_VARS) delete process.env[o];
  try {
    (mkdirSync(dirname(r), { recursive: !0, mode: 448 }), unlinkSync(r));
  } catch {}
  let e = () => {
      for (let o of [r, n])
        try {
          unlinkSync(o);
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
    m = await receiveSpareClaim(r, () => {
      writeFileSync(n, String(process.pid), { mode: 384 });
    });
  } catch (o) {
    (e(),
      process.stderr.write(`[preload] claim recv failed: ${l(o)}
`),
      process.exit(1));
  }
  for (let o of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(o, c);
  (process.off("uncaughtException", a), e(), await s, await bootClaimedSpare(m, s));
}
function runPreload(i, t = () => import("./main.vdzfymn2.js")) {
  return d(i, t);
}
export { runPreload };

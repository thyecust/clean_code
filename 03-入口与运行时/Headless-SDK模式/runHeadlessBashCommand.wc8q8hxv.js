// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { fz, I0, hXt } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Be } from "../../02-功能模块/Git-Worktree/chunk-9ys1bnqr.js";
import { Nt } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { zit } from "../../01-核心基础设施/共享小工具-未细化/chunk-ksg0m9bg.js";
import { Iye } from "../../01-核心基础设施/共享小工具-未细化/chunk-8w004g4b.js";
import { randomUUID as p } from "crypto";
async function C(e) {
  let { command: s } = e,
    i = e.cwd ?? Q(),
    { file: a, args: n } =
      zit() === "powershell"
        ? { file: "pwsh", args: ["-NoProfile", "-Command", s] }
        : { file: "/bin/sh", args: ["-c", s] },
    {
      stdout: m,
      stderr: d,
      code: o,
      error: r,
    } = await Be(a, n, {
      abortSignal: e.abortSignal,
      cwd: i,
      preserveOutputOnError: !0,
    }),
    t = r && !r.startsWith(`Command failed with exit code ${o}`) ? r : "";
  if (t) f("input_remote_bash", "spawn_failed");
  else y("input_remote_bash");
  let l = t ? Iye(t, e.session) : "";
  return {
    outputUuid: p(),
    outputText: `<${fz}>${Nt(m)}</${fz}><${I0}>${Nt(d || l)}</${I0}><${hXt}>${o}</${hXt}>`,
    exitCode: o,
  };
}
export { C as runHeadlessBashCommand };

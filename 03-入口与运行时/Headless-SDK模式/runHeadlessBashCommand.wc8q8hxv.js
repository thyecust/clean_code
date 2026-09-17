// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { BASH_STDOUT_TAG, BASH_STDERR_TAG, BASH_EXIT_CODE_TAG } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { execFileNoThrowWithCwd } from "../../02-功能模块/工作树-Git/git-exec-hardening.js";
import { escapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { getDefaultShell } from "../../01-核心基础设施/共享小工具-未细化/get-default-shell.js";
import { getBashSpawnFailureDetail } from "../../01-核心基础设施/共享小工具-未细化/bash-spawn-failure-detail.js";
import { randomUUID } from "crypto";
async function runHeadlessBashCommand(e) {
  let { command: s } = e,
    i = e.cwd ?? getCwd(),
    { file: a, args: n } =
      getDefaultShell() === "powershell"
        ? { file: "pwsh", args: ["-NoProfile", "-Command", s] }
        : { file: "/bin/sh", args: ["-c", s] },
    {
      stdout: m,
      stderr: d,
      code: o,
      error: r,
    } = await execFileNoThrowWithCwd(a, n, {
      abortSignal: e.abortSignal,
      cwd: i,
      preserveOutputOnError: !0,
    }),
    t = r && !r.startsWith(`Command failed with exit code ${o}`) ? r : "";
  if (t) logFeatureBad("input_remote_bash", "spawn_failed");
  else logFeatureOk("input_remote_bash");
  let l = t ? getBashSpawnFailureDetail(t, e.session) : "";
  return {
    outputUuid: randomUUID(),
    outputText: `<${BASH_STDOUT_TAG}>${escapeHtmlText(m)}</${BASH_STDOUT_TAG}><${BASH_STDERR_TAG}>${escapeHtmlText(d || l)}</${BASH_STDERR_TAG}><${BASH_EXIT_CODE_TAG}>${o}</${BASH_EXIT_CODE_TAG}>`,
    exitCode: o,
  };
}
export { runHeadlessBashCommand };

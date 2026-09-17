// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 201 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { G0 } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { shutdownInterruptStamp } from "../../01-核心基础设施/核心工具-进程与信号/chunk-h3cty6gp.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { INNER_TOOL_USE_ID_SUFFIX, BashTool, createUserMessage, prependPrecedingInputBlocks, createInterruptedMessage, createLocalCommandCaveatMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getToolResultsDirForSession } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { escapeHtmlText } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import { isPowerShellToolEnabled } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { PERSISTED_OUTPUT_OPEN_TAG, persistMappedToolResult } from "../工具结果持久化/工具结果持久化.jj43r39n.js";
import { getDefaultShell } from "../终端环境探测-TUI-tmux/get-default-shell.js";
import { getBashSpawnFailureDetail } from "../../01-核心基础设施/核心工具-未归类/bash-spawn-failure-detail.js";
import { randomUUID } from "crypto";
async function processBashCommand(t, S, e) {
  let h = isPowerShellToolEnabled() && getDefaultShell() === "powershell",
    l = getInitialSettings().respondToBashCommands ?? !0;
  logEvent("tengu_input_bash", { powershell: h, respond: l });
  let d = createUserMessage({
      content: prependPrecedingInputBlocks({
        inputString: `<bash-input>${t}</bash-input>`,
        precedingInputBlocks: S,
      }),
    }),
    m = randomUUID(),
    { emitToolProgress: p } = e;
  p?.({
    kind: "bash_mode_progress",
    toolUseId: m,
    input: t,
    progress: null,
    verbose: e.options.verbose,
  });
  try {
    let s = {
        ...e,
        toolUseId: `${m}${INNER_TOOL_USE_ID_SUFFIX}`,
        ...(a.CLAUDE_CODE_SESSION_KIND === void 0 && {
          userTypedShellDispatch: !0,
        }),
      },
      n = (g) => {
        if (g.type !== "progress") return;
        p?.({
          kind: "bash_mode_progress",
          toolUseId: m,
          input: t,
          progress: g.data,
          verbose: e.options.verbose,
        });
      },
      o = null;
    if (h) o = import.meta.require("../工具Bash-Shell/工具Bash-Shell.edt8d0b4.js").PowerShellTool;
    let y = o ?? BashTool,
      r = (
        o
          ? await o.call(
              { command: t, dangerouslyDisableSandbox: !0 },
              s,
              void 0,
              void 0,
              n,
            )
          : await BashTool.call(
              { command: t, dangerouslyDisableSandbox: !0 },
              s,
              void 0,
              void 0,
              n,
            )
      ).data;
    if (!r) throw Error("No result received from shell command");
    let T = r.stderr,
      c = await persistMappedToolResult(y, { ...r, stderr: "" }, randomUUID(), getToolResultsDirForSession(e.session), e.storageV5),
      u = typeof c.content === "string" ? c.content : r.stdout,
      P = u.startsWith(PERSISTED_OUTPUT_OPEN_TAG) ? u : escapeHtmlText(u),
      f =
        l &&
        !r.interrupted &&
        !r.backgroundTaskId &&
        !e.abortController.signal.aborted;
    return {
      messages: [
        ...(f ? [] : [createLocalCommandCaveatMessage()]),
        d,
        createUserMessage({
          content: `<bash-stdout>${P}</bash-stdout><bash-stderr>${escapeHtmlText(T)}</bash-stderr>`,
        }),
      ],
      shouldQuery: f,
    };
  } catch (s) {
    if (s instanceof G0) {
      if (s.interrupted)
        return {
          messages: [
            createLocalCommandCaveatMessage(),
            d,
            createInterruptedMessage({
              toolUse: !1,
              interruptedByShutdown: shutdownInterruptStamp(e.abortController.signal),
            }),
          ],
          shouldQuery: !1,
        };
      let o = l && !e.abortController.signal.aborted;
      return {
        messages: [
          ...(o ? [] : [createLocalCommandCaveatMessage()]),
          d,
          createUserMessage({
            content: `<bash-stdout>${escapeHtmlText(s.stdout)}</bash-stdout><bash-stderr>${escapeHtmlText(s.stderr)}</bash-stderr>`,
          }),
        ],
        shouldQuery: o,
      };
    }
    let n = l && !e.abortController.signal.aborted;
    return {
      messages: [
        ...(n ? [] : [createLocalCommandCaveatMessage()]),
        d,
        createUserMessage({
          content: `<bash-stderr>Command failed: ${escapeHtmlText(getBashSpawnFailureDetail(s, e.session))}</bash-stderr>`,
        }),
      ],
      shouldQuery: n,
    };
  } finally {
    p?.({ kind: "clear", toolUseId: m });
  }
}
export { processBashCommand };

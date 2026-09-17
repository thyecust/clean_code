// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/git-exec-hardening.js";
import "../../01-核心基础设施/共享小工具-未细化/open-flags.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import "../../01-核心基础设施/共享小工具-未细化/file-storage.js";
import "../Teammates团队/storage-keys.js";
import "../../01-核心基础设施/共享小工具-未细化/git-host-utils.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/startup-profiler.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/settings-option-values.js";
import "../工具Bash-Shell/permission-rule-parsing.js";
import "../../01-核心基础设施/共享小工具-未细化/mdm-policy-paths.js";
import "../../01-核心基础设施/核心工具-路径与平台/mdm-raw-read.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/compliance-taints-store.js";
import "../Hooks钩子/session-feature-cache.js";
import "../../01-核心基础设施/核心工具-进程与信号/sdk-memory-summary.js";
import "../认证-OAuth登录/credential-file-descriptors.js";
import "../Git-Worktree/git-repository-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/test-egress-guard.js";
import "../认证-OAuth登录/secure-storage.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import "../../01-核心基础设施/共享小工具-未细化/keychain-prefetch.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/teammate-context.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x4q0245z.js";
import "../Artifact发布-渲染/chunk-rr78st95.js";
import { isDesignCanvasEnabled } from "../Artifact发布-渲染/chunk-01ymf0ar.js";
import "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { parseFrontmatter } from "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/host-claim-registry.js";
import "../插件系统/plugin-system-core.js";
import "./chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/workflow-feature-gates.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/transcript-paths.js";
import "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import "../../01-核心基础设施/核心工具-进程与信号/subprocess-env-scrub.js";
import "../../01-核心基础设施/共享小工具-未细化/host-capability-state.js";
import "../../01-核心基础设施/共享小工具-未细化/exit-commit-state.js";
import "../Bridge-RemoteControl/chunk-5ne99rq3.js";
import "../权限系统/chunk-1y2g140m.js";
import "../Artifact发布-渲染/chunk-qpgskeea.js";
import "../Artifact发布-渲染/artifact-db.js";
import "../../01-核心基础设施/核心工具-进程与信号/process-wrapper-launcher.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/settings-env-application.js";
import "../Artifact发布-渲染/chunk-01jnk0v2.js";
import "../Artifact发布-渲染/chunk-p1dkvpxj.js";
import "../Artifact发布-渲染/chunk-pdd7kz7p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import "../../01-核心基础设施/共享小工具-未细化/bridge-state-containers.js";
import "../跨会话消息(UDS)/chunk-ddtmwhn7.js";
import "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import "../../01-核心基础设施/共享小工具-未细化/error-reporting-eligibility.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6kad94y1.js";
import "../../01-核心基础设施/HTTP-网络层/error-tracking-report.js";
import "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import "../后台任务-Shell管理/task-output.js";
import "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import "../工具Plan-ExitPlanMode/工具Plan-ExitPlanMode.5cgce7xv.js";
import "../状态栏-主题/chunk-dqyc6kge.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import "../Workflow编排/chunk-0t0sve49.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-97crm80y.js";
import "../../01-核心基础设施/核心工具-并发与缓存/核心工具-并发与缓存.fvfzq6k5.js";
import "../文件监听-Watch/文件监听-Watch.3efypmps.js";
import "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import "../状态栏-主题/chunk-jz6b76hr.js";
import "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../Teammates团队/chunk-g6nvp9mm.js";
import "../Bridge-RemoteControl/chunk-9estzwf5.js";
import "../../01-核心基础设施/共享小工具-未细化/host-state-store.js";
import "../Hooks钩子/chunk-z3433nr6.js";
import "../Hooks钩子/chunk-bzqqe6xh.js";
import "../插件系统/chunk-ajtn749s.js";
import "../插件系统/plugin-source-policy.js";
import "../图片-截图-ComputerUse/computer-use-lock.js";
import "../../01-核心基础设施/共享小工具-未细化/agent-color-palette.js";
import "../../00-第三方库/_未识别/zod(schema校验)/chunk-6421ybjb.js";
import "../../01-核心基础设施/共享小工具-未细化/plugin-eval-quickref-asset.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../后台任务-Shell管理/chunk-djserjj5.js";
import "../上下文压缩-Compact/resolve-user-intent-setting.js";
import "../../01-核心基础设施/共享小工具-未细化/terminal-focus-state.js";
import "../认证-OAuth登录/wif-credentials.js";
import { registerBundledSkill } from "./bundled-skills.js";
import "../Teammates团队/team-file-store.js";
import "../Teammates团队/list-agents-tool-constants.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vtgvbed1.js";
import "../../01-核心基础设施/共享小工具-未细化/max-subagent-spawn-depth.js";
import "../Bridge-RemoteControl/push-notification-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7fcxwgtq.js";
import "../后台任务-Shell管理/scheduled-tasks.js";
import "../Cron-定时任务/chunk-mk3zm4ew.js";
import "../工具结果持久化/工具结果持久化.jj43r39n.js";
import "../Teammates团队/agent-swarms-enablement.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qg9n8r78.js";
import "../Bridge-RemoteControl/chunk-tyce0p0b.js";
import "../../01-核心基础设施/遥测-OpenTelemetry/startup-timing-telemetry.js";
import "../Bridge-RemoteControl/code-session-api.js";
import "../../01-核心基础设施/共享小工具-未细化/terminal-backend-detection.js";
import "../ClaudeinChrome/claude-in-chrome-host.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-sdk-generation.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import "../会话-历史-恢复/chunk-m1xj4s02.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0qtt3z52.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1p3batyk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ve2h3qad.js";
import "../../01-核心基础设施/共享小工具-未细化/bg-job-runtime-state.js";
import "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import "../权限系统/fork-restricted-launch-flags.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-52kaw3c1.js";
import "../语音-音频/loop-wakeup-scheduler.js";
import "../键位绑定(Keybindings)/键位绑定(Keybindings).sanfja6a.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/ansi-text-primitives.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1kh149yd.js";
import "../图片-截图-ComputerUse/computer-use-session.js";
import "../Bridge-RemoteControl/remote-control-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/agent-view-feature-gates.js";
import "../../01-核心基础设施/共享小工具-未细化/c4e-upsell-command-gate.js";
import "../Bridge-RemoteControl/chunk-1yq098a7.js";
import "../Artifact发布-渲染/artifact-comment-monitor-intent.js";
import "../Artifact发布-渲染/chunk-kshc4v5t.js";
import "../工具Monitor/工具Monitor.981fw9dy.js";
import "../Artifact发布-渲染/artifact-reply-yield.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-d8c3rz29.js";
import "../Artifact发布-渲染/artifact-asset-store.js";
import { artifactCapabilitiesPromptGateOpen } from "../Artifact发布-渲染/chunk-b6k1z7an.js";
import { DESIGN_SUBCOMMAND_ROUTES } from "../DesignSync/register-design-skill.js";
import "../../01-核心基础设施/共享小工具-未细化/design-feature-gates.js";
import "../../01-核心基础设施/共享小工具-未细化/websocket-subprotocols.js";
import "../../01-核心基础设施/共享小工具-未细化/auto-react-state.js";
import "../../01-核心基础设施/设置-配置/early-access-feature-gates.js";
import "../Teammates团队/chunk-mrfx53ye.js";
import "../../01-核心基础设施/共享小工具-未细化/hover-rest-transcript.js";
import "../../01-核心基础设施/共享小工具-未细化/ended-by-model.js";
import "../../01-核心基础设施/共享小工具-未细化/json-file-store.js";
import "../插件系统/chunk-33bdfgmx.js";
import "../MCP客户端/mcp-skills-extension.js";
import "../图片-截图-ComputerUse/chunk-0dcnsftb.js";
import "../DesignSync/design-sync-tool-metadata.js";
import "../MCP客户端/mcp-task-id.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-timeouts.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-session-compat-id.js";
import "../../01-核心基础设施/共享小工具-未细化/linked-abort-signal.js";
import "../../01-核心基础设施/共享小工具-未细化/log-error-with-telemetry-message.js";
import "../工具Monitor/monitor-tool-description.js";
import "../../01-核心基础设施/共享小工具-未细化/coordinator-mode.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-339z9efw.js";
import "../../01-核心基础设施/共享小工具-未细化/kill-process-tree.js";
import "../Teammates团队/permission-sync-mailbox.js";
import "../../01-核心基础设施/共享小工具-未细化/jittered-backoff-delay.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-settings-eligibility.js";
import "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import "../../01-核心基础设施/共享小工具-未细化/environment-kind.js";
import "../../01-核心基础设施/共享小工具-未细化/disable-bundled-skills.js";
import "../工具ToolSearch/tool-search-enablement.js";
import "../../01-核心基础设施/共享小工具-未细化/state-store.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/bypass-permissions-mode-policy.js";
import "../../01-核心基础设施/共享小工具-未细化/expand-tabs.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/safe-file-read.js";
import "../../01-核心基础设施/共享小工具-未细化/federation-cache-dir.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/git-remote-url.js";
import "../../01-核心基础设施/共享小工具-未细化/user-prompt-text.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import "../图片-截图-ComputerUse/computer-use-swift-native.js";
var r = "design";
function o() {
  return isDesignCanvasEnabled() && artifactCapabilitiesPromptGateOpen();
}
function a() {
  return import("./PAYLOAD_TEMPLATE_FILE.8cmajbh9.js");
}
var i =
  "Create a design canvas - a multi-artboard visual design published as an Artifact that runs Claude Design's canvas editor (an early preview of Claude Design inside Claude Code). You DRAFT the design as .dc.html artboards laid out on one pan/zoom canvas; where saving is enabled for the user's account they refine every element visually (click-to-select, a properties panel, inline text editing, undo/redo) and Save publishes a new version for everyone, otherwise they get a view-and-export (PNG/PDF) preview of your draft. Good for UI mockups and screen flows, landing pages, marketing and social graphics, and print pieces - posters, flyers, brochures as single-page artboards; memos and reports as one flowing artboard. Use when someone wants a design, mockup, wireframe, UI or screen design, landing page, poster, flyer, brochure, banner, card, one-pager, or any visual layout they would rather tweak by hand than in code. Only for CREATING or re-seeding a canvas; an existing one is edited in its published Artifact.";
function registerDesignCanvasSkill() {
  registerBundledSkill({
    name: r,
    menuDescription:
      "Draft a design on a canvas Artifact \u2014 editable where saving is enabled (Claude Design preview)",
    description: i,
    argumentHint: "[what to design]",
    subcommands: DESIGN_SUBCOMMAND_ROUTES,
    subcommandsBareOnly: !0,
    isEnabled: o,
    userInvocable: !0,
    files: () => a().then((e) => e.loadSkillFiles()),
    async getPromptForCommand(e) {
      let { SKILL_MD: t } = await a(),
        n = parseFrontmatter(t).content.trimStart();
      if (e.trim())
        n += `

## User Request

${e}`;
      return [{ type: "text", text: n }];
    },
  });
}
export { registerDesignCanvasSkill };

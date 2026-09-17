// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 309 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { j1, K, $p } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { lit as S, fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { dt, ge, z0 } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { sortByModifiedDesc, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { jo } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import {
  xn,
  jwe,
  Cgt,
  LX,
  Jf,
  loadConversationForResume,
  YLe,
  Ht,
  isCustomTitleEnabled,
  recordContentReplacement,
  resetSessionFilePointer,
  adoptResumedSessionFile,
  adoptResumedSessionFileAsync,
  applyEndedByModelOnResume,
  buildForkAdoptionMeta,
  adoptForkSessionMetadata,
  pinSessionId,
  restoreSessionMetadata,
  getSessionIdFromLog,
  loadAllProjectsMessageLogsProgressive,
  loadSameRepoMessageLogsProgressive,
  enrichLogs,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { reclaimSessionNameOnResume } from "../跨会话消息(UDS)/chunk-9kzxq41e.js";
import { getMouseMode } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { Vre } from "../后台任务-Shell管理/chunk-x3txegas.js";
import { setClipboard } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { restoreGoalFromTranscript } from "../../01-核心基础设施/共享小工具-未细化/chunk-wdns14nh.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { gi, o, t, n7, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { resetReplTabToConvo } from "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../Vim模式/Vim模式.nnewe0gf.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import {
  THe,
  renameRecordingForSession,
  AHe,
  Gz,
  HZ,
  IZ,
  vHe,
  PZ,
  OZ,
  O8,
  RHe,
  DZ,
  kHe,
} from "../Git-Worktree/chunk-xercceag.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../成本-Token统计/chunk-adrc9xt1.js";
import "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import { W0t } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../后台任务-Shell管理/chunk-n6g2zfwn.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../跨会话消息(UDS)/chunk-t2esphmv.js";
import { VB } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import "../上下文压缩-Compact/chunk-1ntrf0ja.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { rit, LIt, oit } from "./chunk-t3q91yqm.js";
import { AltScreenContainer } from "../../01-核心基础设施/共享小工具-未细化/alt-screen-container.js";
import { worktreeStateStore } from "../../01-核心基础设施/共享小工具-未细化/worktree-state-store.js";
import "../后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../后台任务-Shell管理/chunk-xmxjyg29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../后台任务-Shell管理/chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import "../../01-核心基础设施/共享小工具-未细化/use-task-registry.js";
import "../../03-入口与运行时/会话UI(REPL)/external-editor.js";
import "../../01-核心基础设施/共享小工具-未细化/use-answer-refusal-state.js";
import { F_e } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import "../斜杠命令-UI组件/effort-level.js";
import "../权限系统/chunk-0hcqee2w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-m85ks9bj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1m91n7yv.js";
import "../Bridge-RemoteControl/chunk-x379yyxb.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-ph7v431y.js";
import "../权限系统/chunk-jsd70b22.js";
import "../图片-截图-ComputerUse/chunk-mk8kjx9c.js";
import "../Bridge-RemoteControl/chunk-ga43tr2w.js";
import "../Bridge-RemoteControl/chunk-znhfst8k.js";
import "../../01-核心基础设施/共享小工具-未细化/reply-degraded-state.js";
import "../Bridge-RemoteControl/bridge-inbound-origin.js";
import "../../01-核心基础设施/共享小工具-未细化/work-secret.js";
import "../Bridge-RemoteControl/client-presence.js";
import "../Hooks钩子/chunk-6wg4v2yj.js";
import "../AutoMode-自动模式/unattended-serving-consent.js";
import "../远程工具执行/chunk-66axrkvh.js";
import "../斜杠命令-框架/chunk-s195n5de.js";
import "../工具Glob-Grep-搜索/chunk-57axeagj.js";
import "../工具WebFetch-WebSearch/clear-session-caches.js";
import "../Teammates团队/rename-session.js";
import "../Artifact发布-渲染/chunk-fx5ekm7e.js";
import "../../01-核心基础设施/共享小工具-未细化/send-message-pins.js";
import "../../01-核心基础设施/共享小工具-未细化/goal-proposal-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hkbpxv9z.js";
import "../工具Task-Agent调度/工具Task-Agent调度.5xpzy7cr.js";
import "../Workflow编排/chunk-bkcg0nbj.js";
import "../Workflow编排/workflow-script.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kaxe7rw8.js";
import "../../01-核心基础设施/共享小工具-未细化/transcript-replaced-bus.js";
import "../Artifact发布-渲染/chunk-54kz7amv.js";
import "../权限系统/cross-session-inbound-gate.js";
import "../Teammates团队/chunk-nhk351pe.js";
import "../../01-核心基础设施/共享小工具-未细化/file-transfer-config.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-callout-dialog.js";
import "../Workflow编排/chunk-dyq13fbm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aqawy2mp.js";
import "../Workflow编排/chunk-6gjsfh7a.js";
import "../自动更新-安装/chunk-brx72pf1.js";
import "../自动更新-安装/chunk-2g5h49pk.js";
import "../权限系统/chunk-qjqc5vxm.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/backend-registry.js";
import "../后台任务-Shell管理/background-task-renderers.js";
import "../../01-核心基础设施/设置-配置/managed-settings-approval-dialog.js";
import "../图片-截图-ComputerUse/computer-use-approval-dialog.js";
import "../MCP客户端/mcp-auth-cache.js";
import "../语法高亮-Markdown渲染/code-block.js";
import "../../01-核心基础设施/共享小工具-未细化/it2-setup-dialog.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-elicitation-dialogs.js";
import "../工具Bash-Shell/chunk-8sjdj5bm.js";
import "../../01-核心基础设施/共享小工具-未细化/authentication-status-box.js";
import "../../03-入口与运行时/会话UI(REPL)/remote-bootstrap-checklist.js";
import "../../01-核心基础设施/共享小工具-未细化/whiteboard-telemetry.js";
import "../../01-核心基础设施/共享小工具-未细化/job-drafts.js";
import "../Skills技能/mcp-skill-cache.js";
import "./chunk-szqky9sa.js";
import "../跨会话消息(UDS)/peer-file-transfer.js";
import "../深链接-URL协议/深链接-URL协议.wjw0bmt6.js";
import "../插件系统/chunk-d0tph3ay.js";
import "../限流-重试/限流-重试.4mc5yc28.js";
import "../用量额度-限额/chunk-n4zff40p.js";
import "../../01-核心基础设施/共享小工具-未细化/lazy-event-emitters.js";
import "../认证-OAuth登录/url-and-error-redaction.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-sdeyn1dg.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-autocompact-state.js";
import "../../01-核心基础设施/共享小工具-未细化/detail-dialog-keys.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tfspgges.js";
import "../../03-入口与运行时/会话UI(REPL)/clawd-mascot.js";
import "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../工具Bash-Shell/shell-output-view.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
import { getLiveSessionHolder } from "../../01-核心基础设施/共享小工具-未细化/session-live-elsewhere.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../权限系统/permission-dialog.js";
import "../反馈-错误上报/feedback-draft-submit.js";
import "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import "../../01-核心基础设施/共享小工具-未细化/learn-more-link.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import "../../01-核心基础设施/共享小工具-未细化/managed-settings-status.js";
import "../自动更新-安装/auto-updates-channel.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import "../成本-Token统计/usage-credits-flow.js";
import "../../01-核心基础设施/共享小工具-未细化/usage-limit-continuation.js";
import "../MCP客户端/plugin-reload-cache-impact.js";
import "../../01-核心基础设施/共享小工具-未细化/parse-thin-client-reply.js";
import "../../01-核心基础设施/共享小工具-未细化/remote-tools-logger.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-control-handlers.js";
import "../../01-核心基础设施/共享小工具-未细化/standalone-agent-context.js";
import "../权限系统/cache-safe-params.js";
import "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/fast-mode.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import "../Teammates团队/agent-lifecycle.js";
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-hosted-oauth-gate.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import "../../01-核心基础设施/共享小工具-未细化/plan-approval-permission-mode.js";
import "../../03-入口与运行时/Headless-SDK模式/chunk-yb7jadvp.js";
import "../../01-核心基础设施/共享小工具-未细化/text-truncation.js";
import "../../01-核心基础设施/共享小工具-未细化/structured-output-retry-errors.js";
import "../../01-核心基础设施/共享小工具-未细化/summarize-tool-input.js";
import "../../01-核心基础设施/共享小工具-未细化/fd-real-path.js";
import "../Workflow编排/workflow-registry.js";
import "../../01-核心基础设施/共享小工具-未细化/bundled-workflows.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/chunk-j7khz57p.js";
import "../权限系统/swarm-permission-poller.js";
import "../../01-核心基础设施/共享小工具-未细化/browser-tool-verb-phrases.js";
import "../Teammates团队/teammate-task-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import "../../01-核心基础设施/共享小工具-未细化/truncate-with-ellipsis.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import { re, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { getEndedByModel } from "../../01-核心基础设施/共享小工具-未细化/ended-by-model.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { dirname } from "path";
function Go() {
  xn(1);
}
function Wo() {
  process.exit(0);
}
function $o() {
  process.exit(0);
}
function Uo(Kt) {
  return Kt.project.originalCwd;
}
function qo(A) {
  let R = parseInt(A, 10);
  if (!isNaN(R) && R > 0) return R;
  let k = A.match(
    /(?:https?:\/\/)?[^/\s]+\/[^\s]+?\/(?:pull|pull-requests|-\/merge_requests)\/(\d+)/,
  );
  if (k?.[1]) return parseInt(k[1], 10);
  return null;
}
function ResumeConversation({
  commands: A,
  worktreePaths: R,
  initialTools: k,
  mcpClients: Z,
  dynamicMcpConfig: ee,
  debug: oe,
  mainThreadAgentDefinition: te,
  autoConnectIdeFlag: $e,
  strictMcpConfig: ye = !1,
  systemPrompt: Ue,
  appendSystemPrompt: ze,
  systemPromptSnapshot: Qe,
  initialSearchQuery: Ve,
  disableSlashCommands: Xe = !1,
  forkSession: G,
  filterByPr: N,
  thinkingConfig: Je,
  thinkingConfigExplicit: Ke,
  fallbackModel: Ze,
  onTurnComplete: eo,
  onCaptureSnapshot: oo,
}) {
  let { storageV5: g, credentials: Ae } = useStorageV5Context(),
    x = useSession(),
    { rows: to } = useTerminalSize(),
    no = useAppStateSelector((s) => s.agentDefinitions),
    ne = useAppStateSelector((s) => s.standaloneAgentContext),
    so = useAppStateSelector((s) => s.mainLoopModel),
    D = useSetAppState(),
    ro = VB(),
    [se, j] = d([]),
    [Me, W] = d(!0),
    [io, ao] = d(!1),
    be = C(!1),
    [Te, Le] = d(null),
    [O, lo] = d(!1),
    [w, co] = d(null),
    [we, mo] = d(null),
    [ve, uo] = d(null),
    P = C(null),
    [fo, po] = d(0),
    z = C(0),
    Q = C(0),
    ke = V(() => {
      let s = se.filter((c) => !c.isSidechain);
      if (N !== void 0) {
        if (N === !0) s = s.filter((c) => c.prNumber !== void 0);
        else if (typeof N === "number") s = s.filter((c) => c.prNumber === N);
        else if (typeof N === "string") {
          let c = qo(N);
          if (c !== null) s = s.filter((L) => L.prNumber === c);
        }
      }
      return s;
    }, [se, N]),
    go = isCustomTitleEnabled(),
    So = V(() => a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE, []);
  (n7(w || So ? null : "claude \xB7 resume"),
    E(() => {
      loadSameRepoMessageLogsProgressive(R, void 0, void 0, g)
        .then((s) => {
          ((P.current = s),
            (z.current = s.logs.length),
            j(s.logs),
            W(!1),
            logFeatureOk("screen_resume_conversation"));
        })
        .catch((s) => {
          (logFeatureBad("screen_resume_conversation", "resume_conversation_load_failed"),
            logError(s),
            W(!1));
        });
    }, [R, g]));
  let ie = C(!1),
    Fe = re(
      (s) => {
        if (ie.current) return;
        let c = P.current;
        if (!c || c.nextIndex >= c.allStatLogs.length) return;
        ie.current = !0;
        let L = !1;
        enrichLogs(c.allStatLogs, c.nextIndex, s, g)
          .then((v) => {
            if (P.current !== c) return;
            if (((c.nextIndex = v.nextIndex), v.logs.length > 0)) {
              let n = z.current;
              (sortByModifiedDesc(v.logs).forEach((m, b) => {
                m.value = n + b;
              }),
                j((m) => m.concat(v.logs)),
                (z.current += v.logs.length));
            } else if (c.nextIndex < c.allStatLogs.length) L = !0;
          })
          .finally(() => {
            if (((ie.current = !1), L)) Fe(s);
          });
      },
      [g],
    ),
    ae = re(
      (s) => {
        W(!0);
        let c = ++Q.current,
          L = P.current;
        ((P.current = null),
          po((n) => n + 1),
          (s ? loadAllProjectsMessageLogsProgressive(void 0, void 0, g) : loadSameRepoMessageLogsProgressive(R, void 0, void 0, g))
            .then((n) => {
              if (Q.current !== c) return;
              ((P.current = n), (z.current = n.logs.length), j(n.logs));
            })
            .catch((n) => {
              if (Q.current !== c) return;
              if (L !== null) P.current = L;
              (j((m) => m.slice()), logError(n));
            })
            .finally(() => {
              if (Q.current !== c) return;
              W(!1);
            }));
      },
      [R, g],
    ),
    ho = re(() => {
      let s = !O;
      (lo(s), ae(s));
    }, [O, ae]);
  function Co() {
    process.exit(1);
  }
  async function Ro(s) {
    if (be.current) return;
    ((be.current = !0), ao(!0));
    let c = performance.now();
    try {
      let n = await oit(s, O, R);
      if (n) {
        let m = await setClipboard(n);
        if (m) process.stdout.write(m);
        uo(n);
        return;
      }
      if (!G) {
        let m = getSessionIdFromLog(s),
          b = m ? await getLiveSessionHolder(m) : null;
        if (m && b) {
          mo({ sessionId: m, jobId: b.jobId, projectPath: s.projectPath });
          return;
        }
      }
    } catch (n) {
      (logError(dt(ge(n), "resume picker: pre-load failed")),
        Le({ sessionId: getSessionIdFromLog(s) ?? void 0 }));
      return;
    }
    let L = !1,
      v = "load_error";
    try {
      let n = await loadConversationForResume(s, void 0, {
        forkSession: G ?? !1,
        storageV5: g,
        credentials: Ae,
        ...LX(x.precompute, g, { forkSession: !!G }),
      });
      if (!n)
        throw (
          logEvent("tengu_session_resumed", {
            entrypoint: S("picker"),
            success: !1,
            failure_reason: S("not_found_picker"),
          }),
          (L = !0),
          Error("Failed to load conversation")
        );
      v = "processing_error";
      {
        let B = import.meta
          .require("../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js")
          .matchSessionMode(n.mode);
        if (B) {
          let Ao = await O8(x.project.originalCwd, [], g);
          (D((Mo) => ({ ...Mo, agentDefinitions: Ao })),
            n.messages.push(Ht(B, "warning")));
        }
      }
      Cgt(x);
      let { adoptedSessionId: m, effectiveFork: b } = Vre(n.sessionId, !!G),
        xe = m ? pinSessionId(m) : pinSessionId(K());
      if (m)
        ($p(m, "resume", s.fullPath ? dirname(s.fullPath) : null),
          await renameRecordingForSession(x, g),
          await resetSessionFilePointer());
      else if (b) {
        if (
          (await adoptForkSessionMetadata(n, {
            stripWorktreeSession: !0,
            stripRelocatedCwd: !0,
            destSid: xe,
            storageV5: g,
          }),
          n.contentReplacements?.length)
        )
          await recordContentReplacement(n.contentReplacements, void 0, g);
      }
      jwe(n);
      let yo = await HZ(s.projectPath, g),
        { agentDefinition: le } = Gz(n.agentSetting, te, no, {
          sessionAgentDefinitions: yo,
          sessionCwd: s.projectPath,
          onResolveMiss: (l) => n.messages.push(Ht(l, "warning")),
        });
      if (le?.mcpServers?.length) await YLe();
      if ((D((l) => ({ ...l, agent: le?.agentType })), b)) vHe(n.messages);
      OZ(n.messages, b);
      let De = IZ(n.messages, so, (l) => n.messages.push(Ht(l, "warning"))),
        X = De ? PZ(n.messages, De, b, g, Ae) : void 0;
      if (X)
        D((l) => {
          if (l.mainLoopModel === X) return l;
          return (Jf(x, l, X, "resume"), { ...l, mainLoopModel: X });
        });
      kHe(n.messages, { fork: b, startup: !0 });
      {
        let { saveMode: l } = import.meta.require("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
          { isCoordinatorMode: B } = import.meta.require("../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js");
        l(B() ? "coordinator" : "normal");
      }
      let Ie = AHe(n.agentName, n.agentColor),
        ce = ne ? { ...Ie, ...ne } : Ie;
      if (ce) D((l) => ({ ...l, standaloneAgentContext: ce }));
      if (
        (reclaimSessionNameOnResume(ce?.name, g, { autoOnly: !n.customTitle && !ne?.name }),
        restoreSessionMetadata(
          b ? buildForkAdoptionMeta(n, { stripWorktreeSession: !0, stripRelocatedCwd: !0 }) : n,
          { taintSid: xe, storageV5: g },
        ),
        applyEndedByModelOnResume(getEndedByModel(n), D),
        restoreGoalFromTranscript(n.messages, D, ro),
        THe(x.host),
        !b && n.bridgeSessionId)
      )
        D((l) =>
          l.replBridgeEnabled && !l.replBridgeOutboundOnly
            ? l
            : { ...l, replBridgeEnabled: !0, replBridgeOutboundOnly: !1 },
        );
      if (!b) {
        let l = DZ(worktreeStateStore.of(x.host), n.worktreeSession, void 0, { storageV5: g });
        if (l) n.messages.push(Ht(RHe(l), "warning"));
        if ((resetReplTabToConvo(x.host, D), m))
          if (isHoverRestEnabled() && g !== void 0) await adoptResumedSessionFileAsync(g);
          else adoptResumedSessionFile();
      }
      (logEvent("tengu_session_resumed", {
        entrypoint: S("picker"),
        success: !0,
        resume_duration_ms: Math.round(performance.now() - c),
      }),
        j([]),
        co({
          messages: n.messages,
          fileHistorySnapshots: n.fileHistorySnapshots,
          contentReplacements: n.contentReplacements,
          agentName: n.agentName,
          agentColor: n.agentColor === "default" ? void 0 : n.agentColor,
          mainThreadAgentDefinition: le,
        }));
    } catch (n) {
      if (!L) {
        let m = v;
        logEvent("tengu_session_resumed", {
          entrypoint: S("picker"),
          success: !1,
          failure_reason: fromEnum(m),
          error_name: z0(ge(n)),
        });
      }
      (logError(dt(ge(n), "resume picker: onSelect failed")),
        Le({ sessionId: getSessionIdFromLog(s) ?? void 0 }));
    }
  }
  if (we) return e(We, { ...we });
  if (ve) return e(Ge, { command: ve });
  if (w)
    return e(W0t, {
      debug: oe,
      commands: A,
      initialTools: k,
      initialMessages: w.messages,
      initialFileHistorySnapshots: w.fileHistorySnapshots,
      initialContentReplacements: w.contentReplacements,
      initialAgentName: w.agentName,
      initialAgentColor: w.agentColor,
      mcpClients: Z,
      dynamicMcpConfig: F_e(ee ?? {}, w.mainThreadAgentDefinition, {
        strictMcpConfig: ye,
      }),
      strictMcpConfig: ye,
      systemPrompt: Ue,
      appendSystemPrompt: ze,
      systemPromptSnapshot: Qe,
      mainThreadAgentDefinition: w.mainThreadAgentDefinition,
      autoConnectIdeFlag: $e,
      disableSlashCommands: Xe,
      thinkingConfig: Je,
      thinkingConfigExplicit: Ke,
      fallbackModel: Ze,
      onTurnComplete: eo,
      onCaptureSnapshot: oo,
    });
  if (Me && (se.length === 0 || ke.length === 0))
    return e(Y, {
      children: e(SpinnerMessageLine, { message: "Loading conversations\u2026" }),
    });
  if (Te) return e(qe, { sessionId: Te.sessionId });
  if (io)
    return e(Y, {
      children: e(SpinnerMessageLine, { message: "Resuming conversation\u2026" }),
    });
  return e(Y, {
    children: e(rit, {
      logs: ke,
      maxHeight: to,
      onCancel: Co,
      onSelect: Ro,
      onLogsChanged: go ? () => ae(O) : void 0,
      onLoadMore: Fe,
      initialSearchQuery: Ve,
      isLoading: Me,
      reloadGeneration: fo,
      showAllProjects: O,
      onToggleAllProjects: ho,
    }),
  });
}
function Y(Qt) {
  let bo = _(3),
    { children: me } = Qt;
  if (!gi()) {
    return me;
  }
  let To;
  if (bo[0] === MEMO_CACHE_SENTINEL) ((To = getMouseMode()), (bo[0] = To));
  else To = bo[0];
  let Lo;
  if (bo[1] !== me)
    ((Lo = e(AltScreenContainer, { mouseTracking: To, children: me })),
      (bo[1] = me),
      (bo[2] = Lo));
  else Lo = bo[2];
  return Lo;
}
function qe(Vt) {
  let Ne = _(4),
    { sessionId: wo } = Vt,
    vo;
  if (Ne[0] === MEMO_CACHE_SENTINEL) ((vo = []), (Ne[0] = vo));
  else vo = Ne[0];
  Un(Go, 100, vo);
  let ko;
  if (Ne[1] === MEMO_CACHE_SENTINEL)
    ((ko = e(t, { children: "Failed to resume the conversation." })),
      (Ne[1] = ko));
  else ko = Ne[1];
  const Ee = j1(wo)
    ? `Run claude --resume ${wo} to retry, or claude to start a new session.`
    : "Run claude to start a new session.";
  let Fo;
  if (Ne[2] !== Ee)
    ((Fo = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ko, e(t, { dimColor: !0, children: Ee })],
    })),
      (Ne[2] = Ee),
      (Ne[3] = Fo));
  else Fo = Ne[3];
  return Fo;
}
function Ge(Xt) {
  let q = _(8),
    { command: Pe } = Xt,
    xo;
  if (q[0] === MEMO_CACHE_SENTINEL) ((xo = []), (q[0] = xo));
  else xo = q[0];
  Un(Wo, 100, xo);
  let Do;
  if (q[1] === MEMO_CACHE_SENTINEL)
    ((Do = e(t, {
      children: "This conversation is from a different directory.",
    })),
      (q[1] = Do));
  else Do = q[1];
  let _o;
  if (q[2] === MEMO_CACHE_SENTINEL) ((_o = e(t, { children: "To resume, run:" })), (q[2] = _o));
  else _o = q[2];
  let de;
  if (q[3] !== Pe)
    ((de = r(o, {
      flexDirection: "column",
      children: [_o, r(t, { children: [" ", Pe] })],
    })),
      (q[3] = Pe),
      (q[4] = de));
  else de = q[4];
  let Io;
  if (q[5] === MEMO_CACHE_SENTINEL)
    ((Io = e(t, { dimColor: !0, children: "(Command copied to clipboard)" })),
      (q[5] = Io));
  else Io = q[5];
  let No;
  if (q[6] !== de)
    ((No = r(o, { flexDirection: "column", gap: 1, children: [Do, de, Io] })),
      (q[6] = de),
      (q[7] = No));
  else No = q[7];
  return No;
}
function We(Jt) {
  let I = _(23),
    { sessionId: Eo, jobId: T, projectPath: J } = Jt,
    Po;
  if (I[0] === MEMO_CACHE_SENTINEL) ((Po = []), (I[0] = Po));
  else Po = I[0];
  Un($o, 100, Po);
  let je = useSession(Uo),
    Oo;
  if (I[1] !== je || I[2] !== J)
    ((Oo = J && J !== je ? `cd ${jo([J])} ${LIt()} ` : ""),
      (I[1] = je),
      (I[2] = J),
      (I[3] = Oo));
  else Oo = I[3];
  let Oe = Oo,
    Be = j1(Eo) ? ` ${Eo}` : "";
  const He = T ? ` (${T})` : "";
  let ue;
  if (I[4] !== He)
    ((ue = r(t, {
      children: [
        "That session is still running as a background session",
        He,
        ".",
      ],
    })),
      (I[4] = He),
      (I[5] = ue));
  else ue = I[5];
  let fe;
  if (I[6] !== T)
    ((fe = T
      ? r(t, {
          children: [
            "Run ",
            r(t, { bold: !0, children: ["claude attach ", T] }),
            " to open it, or",
            " ",
            r(t, { bold: !0, children: ["claude stop ", T] }),
            " first to resume it here.",
          ],
        })
      : null),
      (I[6] = T),
      (I[7] = fe));
  else fe = I[7];
  let pe;
  if (I[8] !== T)
    ((pe = T
      ? e(t, { children: "To branch off a copy instead, run:" })
      : r(t, {
          children: [
            "Run ",
            e(t, { bold: !0, children: "claude agents" }),
            " to find its id and attach to it, or run:",
          ],
        })),
      (I[8] = T),
      (I[9] = pe));
  else pe = I[9];
  let he;
  if (I[10] !== Oe || I[11] !== Be)
    ((he = r(t, {
      children: [" ", Oe, "claude --resume", Be, " --fork-session"],
    })),
      (I[10] = Oe),
      (I[11] = Be),
      (I[12] = he));
  else he = I[12];
  let Ce;
  if (I[13] !== pe || I[14] !== he)
    ((Ce = r(o, { flexDirection: "column", children: [pe, he] })),
      (I[13] = pe),
      (I[14] = he),
      (I[15] = Ce));
  else Ce = I[15];
  let Re;
  if (I[16] !== T)
    ((Re = T
      ? null
      : e(t, { dimColor: !0, children: "to branch off a copy." })),
      (I[16] = T),
      (I[17] = Re));
  else Re = I[17];
  let Bo;
  if (I[18] !== ue || I[19] !== fe || I[20] !== Ce || I[21] !== Re)
    ((Bo = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ue, fe, Ce, Re],
    })),
      (I[18] = ue),
      (I[19] = fe),
      (I[20] = Ce),
      (I[21] = Re),
      (I[22] = Bo));
  else Bo = I[22];
  return Bo;
}
export { ResumeConversation };

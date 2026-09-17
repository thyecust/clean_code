// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 264 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { hashForTelemetry } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { qP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isSimpleMode, isSafeMode } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { redactSecretsFromText } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { normalizeWhitespace } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { isCrossSessionMessagingEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
import { FORK_RESTRICTED_LAUNCH_FLAGS_DESCRIPTION } from "../../02-功能模块/权限系统/fork-restricted-launch-flags.js";
import { selectEffectivePermissionMode, resolveProactivityLevel, isTranscriptPersistenceDisabled } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { LIST_AGENTS_TOOL_NAME } from "../../02-功能模块/Teammates团队/list-agents-tool-constants.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-xmxjyg29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import "../../02-功能模块/语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/markdown-ansi-renderer.js";
import "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../../02-功能模块/后台任务-Shell管理/bg-rendezvous-server.js";
import "../../01-核心基础设施/共享小工具-未细化/use-task-registry.js";
import { COORDINATOR_FORK_REFUSAL, spawnBackgroundFork, deriveBackgroundSeed } from "./会话UI-REPL.qs63rzfp.js";
import { git, mWe, fZt, ZIt } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { isCoordinatorModeEnabled } from "../../01-核心基础设施/共享小工具-未细化/coordinator-mode.js";
import { SEND_MESSAGE_TOOL_NAME } from "../../01-核心基础设施/共享小工具-未细化/send-message-constants.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function ee($e) {
  return $e.sessionEffort;
}
function oe(be) {
  return be.toolPermissionContext.additionalWorkingDirectories;
}
function se(xe) {
  return xe.toolPermissionContext.alwaysAllowRules;
}
function re(Be) {
  return Be.toolPermissionContext.alwaysDenyRules;
}
var Ne = async (r, n, g) => {
  if (isCoordinatorModeEnabled()) return (r(COORDINATOR_FORK_REFUSAL, { display: "system" }), null);
  if (isTranscriptPersistenceDisabled())
    return (
      r(
        "Can't fork: session persistence is off, so the new session would have nothing to start from. Run the task here, or fork from a session that saves its transcript.",
      ),
      null
    );
  if (isSafeMode() || isSimpleMode() || qP())
    return (
      r(
        `Can't fork: this session was started with launch flags (safe or bare mode, ${FORK_RESTRICTED_LAUNCH_FLAGS_DESCRIPTION}) that the copy wouldn't inherit, so it would run with fewer restrictions than this session. Run the task here, or start a session without those flags and fork from there.`,
      ),
      null
    );
  let a = (g ?? "").trim(),
    m = deriveBackgroundSeed(n.messages, a, "(forked)");
  if (m === null)
    return (r("Nothing to fork yet. Send a message first."), null);
  return e(W, { onDone: r, prompt: a, seed: m, messages: n.messages });
};
function W(Pe) {
  let G = _(14),
    { onDone: d, prompt: c, seed: w, messages: k } = Pe,
    R = useAppStateSelector(ee),
    v = useAppStateSelector(selectEffectivePermissionMode),
    I = useAppStateSelector(resolveProactivityLevel),
    T = useAppStateSelector(oe),
    S = useAppStateSelector(se),
    L = useAppStateSelector(re),
    { storageV5: M } = useStorageV5Context(),
    q = C(!1),
    H,
    V;
  if (
    G[0] !== T ||
    G[1] !== S ||
    G[2] !== L ||
    G[3] !== k ||
    G[4] !== d ||
    G[5] !== v ||
    G[6] !== I ||
    G[7] !== c ||
    G[8] !== w ||
    G[9] !== R ||
    G[10] !== M
  )
    ((H = () => {
      if (q.current) {
        return;
      }
      ((q.current = !0),
        (async () => {
          let s = await spawnBackgroundFork(w, c || null, R, v, T, S, L, "fork_session", k, {
            proactivityLevel: I,
            keepParent: !0,
            taskFreeInFlight: { tasks: 0, queued: 0, kinds: [] },
            storageV5: M,
          });
          if (!s.ok) {
            (logFeatureBad("repl_session_fork", s.reason ?? "spawn_failed"), d(s.error));
            return;
          }
          (logFeatureOk("repl_session_fork"),
            logEvent("tengu_session_fork", {
              had_prompt: c.length > 0,
              message_count: k.length,
              had_worktree: s.hadWorktree,
              relocated: s.relocatedTo !== void 0,
              ...(s.relocatedFrom && { relocated_from: fromEnum(s.relocatedFrom) }),
              ...(s.sessionId && { child_session_hash: hashForTelemetry(s.sessionId) }),
            }));
          let De = s.name ? fZt(redactSecretsFromText(normalizeWhitespace(s.name))) : void 0;
          let Ee = c ? git : mWe;
          let z = s.relocatedTo
            ? "runs in the origin tree"
            : s.editsIn === "this-tree"
              ? "edits this checkout"
              : void 0;
          let Xe = ZIt({
            state: Ee,
            name: De,
            id: s.short,
            chips: z ? [z] : [],
          });
          let Q = isCrossSessionMessagingEnabled()
            ? `The fork runs as its own separate session \u2014 nothing it does arrives in this conversation, and it does not see what happens here after the fork point. If you need to coordinate with it, it appears in the ${LIST_AGENTS_TOOL_NAME} listing as '${redactSecretsFromText(normalizeWhitespace(s.rosterName))}' (it may be renamed later) and ${SEND_MESSAGE_TOOL_NAME} can message it there; it can message this session the same way.`
            : void 0;
          d(Xe, {
            display: "system",
            ...(Q !== void 0 && { metaMessages: [Q] }),
          });
        })().catch((Y) => {
          (logError(Y),
            logFeatureBad("repl_session_fork", "unexpected_error"),
            d(
              `Couldn't fork: ${l(Y)}. This session is unaffected; try again.`,
            ));
        }));
    }),
      (V = [T, S, L, R, k, d, v, I, c, w, M]),
      (G[0] = T),
      (G[1] = S),
      (G[2] = L),
      (G[3] = k),
      (G[4] = d),
      (G[5] = v),
      (G[6] = I),
      (G[7] = c),
      (G[8] = w),
      (G[9] = R),
      (G[10] = M),
      (G[11] = H),
      (G[12] = V));
  else ((H = G[11]), (V = G[12]));
  E(H, V);
  let Z;
  if (G[13] === MEMO_CACHE_SENTINEL)
    ((Z = e(Text, { dimColor: !0, children: "Forking\u2026" })), (G[13] = Z));
  else Z = G[13];
  return Z;
}
export { Ne as call };

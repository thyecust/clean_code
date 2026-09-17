// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Vxt, eMn, mv, jrt, pa } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { invalidateToolDefinitionCache } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import {
  getMemoryCitationTracker,
  clearLastIngressUuidCache,
  promptCacheTrackerStore,
  resetLspDiagnostics,
  deferredToolLedgerRegistry,
  getTeleportCacheModule,
  runPostCompactCleanup,
  clearPromptCacheBreakState,
  clearDumpPromptsState,
  subagentStatsRegistry,
  reloadDynamicSkills,
  clearDynamicSkillState,
  resetSentSkillNames,
  reloadMemoryFilesForSession,
  clearUserContextCache,
  clearCommandsCache,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { clearResolveGitDirCache, clearIsGitMemoFor } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { clearRepositoryCaches } from "../工作树-Git/git-repository-detection.js";
import { getSessionFeatureCache } from "../Hooks钩子/session-feature-cache.js";
import { sessionDateCache } from "../../01-核心基础设施/提示词-SystemPrompt/提示词-SystemPrompt.bt5gmcr2.js";
import { globalFileIndexCache, resetFileIndexCache } from "../工具Glob-Grep-搜索/chunk-57axeagj.js";
import { GoalProposalState } from "../../01-核心基础设施/共享小工具-未细化/goal-proposal-state.js";
import { clearSwarmPermissions } from "../权限系统/swarm-permission-poller.js";
function clearSessionCaches(t, r = new Set(), i, o, l, m = !1) {
  let a = r.size > 0;
  if ((clearUserContextCache(t), clearIsGitMemoFor(t), sessionDateCache.of(t).clear(), resetFileIndexCache(globalFileIndexCache), clearCommandsCache(), clearPromptCacheBreakState(r), jrt(null), !a))
    deferredToolLedgerRegistry.peek(t)?.clear();
  let s = getTeleportCacheModule();
  if (s?.getTeleportCacheState().status === "active")
    s.revertTeleportCache("transcript_cleared");
  if (
    (runPostCompactCleanup(t, void 0, i, void 0, void 0, void 0, l),
    mv("clear"),
    resetSentSkillNames(),
    Vxt(pa()),
    !m)
  )
    dropBashPromptSkillListingPin();
  if (
    (reloadMemoryFilesForSession(t, "session_start"),
    getMemoryCitationTracker.of(t).reset(),
    promptCacheTrackerStore.of(t).clear(),
    subagentStatsRegistry.of(t).reset(),
    i?.((e) => {
      if (
        e.storedImagePaths.size === 0 &&
        e.imageDescriptions.size === 0 &&
        Object.keys(e.displayedMessageContent).length === 0
      )
        return e;
      return {
        ...e,
        storedImagePaths: new Map(),
        imageDescriptions: new Map(),
        displayedMessageContent: {},
      };
    }),
    clearLastIngressUuidCache(),
    !a)
  )
    clearSwarmPermissions();
  if ((clearRepositoryCaches(), !a)) clearDumpPromptsState();
  if ((eMn(r), clearResolveGitDirCache(), clearDynamicSkillState(), reloadDynamicSkills().catch(() => {}), resetLspDiagnostics(t), o))
    (o.get(GoalProposalState).clear(),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then(({ WebFetchCache: e }) =>
        o.get(e).clear(),
      ),
      import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then(({ ToolSearchDescriptionCache: e }) =>
        o.get(e).clear(),
      ));
  import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js").then(({ clearAgentDefinitionsCache: e }) =>
    e(),
  );
}
function dropBashPromptSkillListingPin() {
  let t = getSessionFeatureCache();
  ((t.bashPromptSkillCommands = void 0),
    (t.workflowAuthoringSkillAvailable = void 0),
    invalidateToolDefinitionCache());
}
export { clearSessionCaches, dropBashPromptSkillListingPin };

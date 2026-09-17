// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 283 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import {
  runBackgroundCommand as Vmr,
  COORDINATOR_FORK_REFUSAL as F0t,
  spawnBackgroundFork as uHe,
  snapshotParentTranscript as Cdr,
  removeSnapshotJobDir as X1n,
  queueRescueRow as vdr,
  writeAdoptHandoff as Rdr,
  forkSessionToBackground as $0t,
  canBackgroundSession as WJt,
  BackgroundAndExit as U0t,
  deriveBackgroundSeed as Uae,
} from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "./chunk-xmxjyg29.js";
import "./chunk-jfk5mpe1.js";
import "./chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/use-task-registry.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../../01-核心基础设施/核心工具-字符串与文本/markdown-ansi-renderer.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import "../../01-核心基础设施/共享小工具-未细化/session-env-scrubbing.js";
import "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import "./bg-rendezvous-server.js";
export {
  U0t as BackgroundAndExit,
  F0t as COORDINATOR_FORK_REFUSAL,
  Vmr as call,
  WJt as canBackgroundSession,
  Uae as deriveBackgroundSeed,
  $0t as forkSessionToBackground,
  vdr as queueRescueRow,
  X1n as removeSnapshotJobDir,
  Cdr as snapshotParentTranscript,
  uHe as spawnBackgroundFork,
  Rdr as writeAdoptHandoff,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { validateBridgeId } from "../权限系统/chunk-ynkf3yy4.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { isViolinWoodEnabled } from "./chunk-97crm80y.js";
import { DirSyncNoticeStore, publishSeedVerdict } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dirname, join } from "path";
var DEFAULT_BEFORE_TURN_CAP_MS = 1e4;
function getDirSyncWorkerSessionFile(e) {
  try {
    let n = validateBridgeId(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "", "remote session id");
    return { sessionId: n, path: join(dirname(e), ".ccr-dir-sync", `worker-${n}.json`) };
  } catch {
    return null;
  }
}
function announceDirSyncVerdict(e) {
  let n = publishSeedVerdict(e, (r) => {
    writeDiagnosticsEvent("error", "dir_sync_lane_verdict_listener_threw", {
      verdict: e,
      rejected: !0,
      first: r,
    });
  });
  switch (n.kind) {
    case "delivered":
      if (n.threw.length > 0)
        writeDiagnosticsEvent("error", "dir_sync_lane_verdict_listener_threw", {
          verdict: e,
          listeners: n.listeners,
          threw: n.threw.length,
          first: n.threw[0],
        });
      return;
    case "out_of_order":
      writeDiagnosticsEvent("error", "dir_sync_lane_verdict_out_of_order", {
        verdict: e,
        basis: n.basis,
      });
      return;
    case "repeat":
    case "queued":
      return;
  }
}
function stageDirSyncNotice(e) {
  DirSyncNoticeStore.of(B()).stage(e);
}
function markDirSyncCopyCleared(e) {
  DirSyncNoticeStore.of(B()).markCopyCleared(e);
}
async function isDirSyncEnabled() {
  let e = await isViolinWoodEnabled();
  if (e) DirSyncNoticeStore.of(B()).openGate();
  return e;
}
export { DEFAULT_BEFORE_TURN_CAP_MS, getDirSyncWorkerSessionFile, announceDirSyncVerdict, stageDirSyncNotice, markDirSyncCopyCleared, isDirSyncEnabled };

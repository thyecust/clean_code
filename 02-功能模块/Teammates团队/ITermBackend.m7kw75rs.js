// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 20 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { isInITerm2, getIt2Command, isIt2CliAvailable } from "../终端环境探测-TUI-tmux/terminal-backend-detection.js";
import { SwarmPaneError, assertNoControlCharacters } from "./team-file-store.js";
import { createMutex } from "../../01-核心基础设施/核心工具-并发与缓存/async-serialization.js";
function d(e) {
  return execFileNoThrow(getIt2Command(), e);
}
function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}
function I() {
  let e = a.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1);
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = !1;
  paneCreationLock = createMutex();
  async isAvailable() {
    let e = isInITerm2();
    if ((logForDebugging(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e))
      return (logForDebugging("[ITermBackend] isAvailable: false (not in iTerm2)"), !1);
    let s = await isIt2CliAvailable();
    return (
      logForDebugging(
        `[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`,
      ),
      s
    );
  }
  async isRunningInside() {
    let e = isInITerm2();
    return (logForDebugging(`[ITermBackend] isRunningInside: ${e}`), e);
  }
  async createTeammatePaneInSwarmView(e, s) {
    logForDebugging(
      `[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`,
    );
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let t = !this.firstPaneUsed;
        logForDebugging(
          `[ITermBackend] Creating pane: isFirstTeammate=${t}, existingPanes=${this.teammateSessionIds.length}`,
        );
        let r, i;
        if (t) {
          let l = I();
          if (l)
            ((r = ["session", "split", "-v", "-s", l]),
              logForDebugging(`[ITermBackend] First split from leader session: ${l}`));
          else
            ((r = ["session", "split", "-v"]),
              logForDebugging(
                "[ITermBackend] First split from active session (no leader ID)",
              ));
        } else if (((i = this.teammateSessionIds.at(-1)), i))
          ((r = ["session", "split", "-s", i]),
            logForDebugging(`[ITermBackend] Subsequent split from teammate session: ${i}`));
        else
          ((r = ["session", "split"]),
            logForDebugging(
              "[ITermBackend] Subsequent split from active session (no teammate ID)",
            ));
        let m = await d(r);
        if (m.code !== 0) {
          if (i) {
            let l = await d(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(i)) {
              logForDebugging(
                `[ITermBackend] Split failed targeting dead session ${i}, pruning and retrying: ${m.stderr}`,
              );
              let u = this.teammateSessionIds.indexOf(i);
              if (u !== -1) this.teammateSessionIds.splice(u, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue;
            }
          }
          throw new SwarmPaneError(`Failed to create iTerm2 split pane: ${m.stderr}`);
        }
        let c = p(m.stdout);
        if (!c)
          throw Error(
            `Failed to parse session ID from split output: ${m.stdout}`,
          );
        if ((logForDebugging(`[ITermBackend] Created teammate pane for ${e}: ${c}`), t))
          this.firstPaneUsed = !0;
        return (
          this.teammateSessionIds.push(c),
          { paneId: c, isFirstTeammate: t }
        );
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      assertNoControlCharacters(s);
    } catch (i) {
      throw (logFeatureBad("swarm_pane_spawn", "swarm_pane_command_control_chars"), i);
    }
    let t = e ? ["-s", e] : [];
    await d(["session", "send", ...t, "\x15"]);
    let r = await d(["session", "run", ...t, s]);
    if (r.code !== 0)
      throw new SwarmPaneError(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, t) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await d(["session", "close", "-f", "-s", e]),
      t = this.teammateSessionIds.indexOf(e);
    if (t !== -1) this.teammateSessionIds.splice(t, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0;
  }
}
export { g as ITermBackend };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ke, ic } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "./chunk-h62vxw7j.js";
import { Jh, isBgSession as _t, isBeingWatched as oZe, isBeingWatchedV5 as sZe, H } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { eE } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Ta } from "../../02-功能模块/终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { KI } from "./chunk-mvw7xg6n.js";
var u = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile"]);
function detectSurfaces(e) {
  if (_t()) return new Set(["bg"]);
  let t = new Set();
  if ((e ?? oZe()) || Jh() !== null) t.add("watched");
  if (hasCcrSurface()) t.add("ccr");
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || ic()) t.add("bridge");
  if (a.CLAUDE_CODE_ENTRYPOINT === "claude-desktop") t.add("desktop");
  if (isPostTurnSummaryVisibleInCli()) t.add("cli");
  if (!ke() && Ta()) t.add("repl");
  return t;
}
function hasCcrSurface() {
  if (eE("fanout")) return !0;
  if (a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (a.CLAUDE_CODE_REMOTE)
    return (
      u.has(a.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE
    );
  return !1;
}
async function watchedForSurfaces(e) {
  return M() && e !== void 0 ? sZe(e) : void 0;
}
var i = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
  repl: ["headline"],
};
function sinksFor(e) {
  let t = new Set(),
    s = c(H("tengu_classifier_disabled_surfaces", ""));
  for (let r of e) {
    if (s.has(r)) continue;
    for (let o of i[r]) t.add(o);
  }
  if (e.has("bg")) t.delete("summary");
  if (H("tengu_classifier_summary_kill", !1)) t.delete("summary");
  return t;
}
function c(e) {
  let t = new Set();
  for (let s of e.split(",")) {
    let r = s.trim();
    if (!r) continue;
    if (r in i) t.add(r);
    else if (!KI().warnedUnknownDisabledSurface)
      ((KI().warnedUnknownDisabledSurface = !0),
        n(
          `[classifier] tengu_classifier_disabled_surfaces: unknown surface '${r}' ignored`,
        ));
  }
  return t;
}
function engineFor(e) {
  if (e.size === 0) return null;
  let t = e.has("state")
    ? "llm"
    : !e.has("summary")
      ? "heuristic"
      : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0
        ? Ie(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY)
          ? "llm"
          : "heuristic"
        : l();
  return t === "llm" && H("tengu_cobalt_wren", !1) ? "heuristic" : t;
}
function l() {
  if (H("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}
function isPostTurnSummaryVisibleInCli() {
  return !1;
}
var f = new Map([
  ["blocked", "blocked"],
  ["done", "completed"],
  ["working", "review_ready"],
]);
function classifiedToPostTurnSummary(e) {
  return {
    status_category: f.get(e.state) ?? "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? (e.needs ?? "") : "",
    recent_action: e.output.result ?? "",
  };
}
function runClassifierSummaryForBlocked(e, t) {
  let s = sinksFor(detectSurfaces(!1));
  if (!s.has("summary") || engineFor(s) === null) return;
  let r = e.tool_name.startsWith("dialog:")
    ? {
        status_category: "blocked",
        status_detail: "Waiting on a user dialog",
        needs_action: e.action_description,
      }
    : {
        status_category: "blocked",
        status_detail: `Waiting on permission: ${e.tool_name}`,
        needs_action: `Approve or deny ${e.tool_name}`,
      };
  t?.notifyMetadataChanged({ post_turn_summary: r });
}
export { detectSurfaces, hasCcrSurface, watchedForSurfaces, sinksFor, engineFor, isPostTurnSummaryVisibleInCli, classifiedToPostTurnSummary, runClassifierSummaryForBlocked };

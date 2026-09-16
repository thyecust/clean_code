// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 212 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "./chunk-bkcg0nbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1n8w0wz0.js";
import "./chunk-cd542wve.js";
import { TDt } from "./chunk-hsn6gkzy.js";
import { clt } from "./chunk-a5048zpn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-gkztysec.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-56wrzxpk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7wprkdaj.js";
import "./chunk-pqyn1fh3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g00x7t7w.js";
var i = async (n, t) => {
  let r = n.trim(),
    e = r ? TDt.of(t.session.host).take(r) : void 0;
  if (!e)
    return (
      q("info", "workflow_launch_exec_no_slot", {}),
      {
        type: "text",
        value:
          "workflow-launch-exec: no pending launch handoff for this invocation (expected when a restored session replays the dispatch turn); nothing executed.",
      }
    );
  let o = await clt({
    script: e.script,
    args: e.args,
    telemetrySource: "remote_event",
    serverAuthoredCarrier: !0,
    context: t,
  });
  try {
    await e.onRunSettled(o.ok);
  } catch {
    q("warn", "workflow_launch_settle_failed", {});
  }
  try {
    e.postResultLine(o.line);
  } catch {
    q("warn", "workflow_launch_result_post_failed", {});
  }
  return { type: "text", value: o.line };
};
export { i as call };

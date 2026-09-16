// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fm } from "../../02-功能模块/权限系统/chunk-ynkf3yy4.js";
import { a } from "../设置-配置/chunk-zqr5ctyf.js";
import { q } from "./chunk-7beprh8k.js";
import { Su } from "./chunk-97crm80y.js";
import { CV, ZVn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { dirname as o, join as t } from "path";
var GFn = 1e4;
function qFn(e) {
  try {
    let n = fm(a.CLAUDE_CODE_REMOTE_SESSION_ID ?? "", "remote session id");
    return { sessionId: n, path: t(o(e), ".ccr-dir-sync", `worker-${n}.json`) };
  } catch {
    return null;
  }
}
function zFn(e) {
  let n = ZVn(e, (r) => {
    q("error", "dir_sync_lane_verdict_listener_threw", {
      verdict: e,
      rejected: !0,
      first: r,
    });
  });
  switch (n.kind) {
    case "delivered":
      if (n.threw.length > 0)
        q("error", "dir_sync_lane_verdict_listener_threw", {
          verdict: e,
          listeners: n.listeners,
          threw: n.threw.length,
          first: n.threw[0],
        });
      return;
    case "out_of_order":
      q("error", "dir_sync_lane_verdict_out_of_order", {
        verdict: e,
        basis: n.basis,
      });
      return;
    case "repeat":
    case "queued":
      return;
  }
}
function qst(e) {
  CV.of(B()).stage(e);
}
function VFn(e) {
  CV.of(B()).markCopyCleared(e);
}
async function $Qt() {
  let e = await Su();
  if (e) CV.of(B()).openGate();
  return e;
}
export { GFn, qFn, zFn, qst, VFn, $Qt };

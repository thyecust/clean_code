// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { lit as S, fromEnum as u } from "./chunk-w76kejwn.js";
import { daemonDetachApc as Sj, writeStateAtomic as Ti, logJobWriteError as Mi, readJobState as Zn, isSettled as Hs } from "../../02-功能模块/后台任务-Shell管理/chunk-7wsy8vxb.js";
import { isBgSession as _t, isDaemonBgWorker as pq } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { i } from "./chunk-an83zrbx.js";
import { logFeatureOk as y } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { Ee } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { xn } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
function s() {
  return a.CLAUDE_JOB_DIR;
}
async function Zat(n, e) {
  i("tengu_bg_agent_action", {
    action: S("stop"),
    source: u(n),
    jobSessionId: Ee(K()),
  });
  let o = s();
  if (_t() && o) {
    let r = new Date().toISOString(),
      t = await Zn(o, e);
    if (t && !Hs(t))
      await Ti(
        o,
        {
          ...t,
          state: "stopped",
          detail: "stopped from session",
          tempo: "idle",
          needs: void 0,
          block: void 0,
          inFlight: void 0,
          updatedAt: r,
          firstTerminalAt: t.firstTerminalAt ?? r,
        },
        e,
      ).catch(Mi);
    if (pq()) process.stdout.write(Sj("Session stopped."));
  }
  return (
    y("job_stop_self"),
    xn(0, "prompt_input_exit", { suppressResumeHint: !0 })
  );
}
export { Zat };

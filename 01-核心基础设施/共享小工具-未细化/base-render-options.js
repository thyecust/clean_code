// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { logEvent } from "./analytics-event-queue.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { handleStreamGoneErrors } from "../../02-功能模块/后台任务-Shell管理/chunk-z5vtnzjg.js";
import { lm, zg } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { kBn } from "./relaunch-terminal-size.js";
import { getFirstPositionalArg } from "../../02-功能模块/上下文压缩-Compact/cli-args.js";
import { openSync } from "fs";
import { ReadStream } from "tty";
class o {
  override = null;
  get() {
    if (this.override !== null) return this.override;
    if (process.stdin.isTTY) {
      this.override = void 0;
      return;
    }
    if (Ie(!1)) {
      this.override = void 0;
      return;
    }
    if (getFirstPositionalArg() === "mcp") {
      this.override = void 0;
      return;
    }
    try {
      let t = openSync("/dev/tty", "r"),
        e = new ReadStream(t);
      return (
        handleStreamGoneErrors(e),
        e.on("error", (r) => {
          (logEvent("tengu_tty_stream_error", lm(r)),
            n(`/dev/tty stream error: ${r}`, { level: "debug" }));
        }),
        (e.isTTY = !0),
        (this.override = e),
        this.override
      );
    } catch (t) {
      (n(`Could not open /dev/tty for stdin override: ${t}`, {
        level: "error",
      }),
        (this.override = void 0));
      return;
    }
  }
  reset() {
    this.override = null;
  }
}
var f = new o();
function getBaseRenderOptions(t = !1) {
  kBn();
  let e = f.get(),
    r = { exitOnCtrlC: t };
  if (e) r.stdin = e;
  return ((r.isScreenReaderEnabled = zg()), r);
}
export { getBaseRenderOptions };

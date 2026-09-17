// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { getTerminalFocus, subscribeTerminalFocus } from "../../01-核心基础设施/共享小工具-未细化/terminal-focus-state.js";
import { waitForAttachQuietDrainEnd } from "../../01-核心基础设施/共享小工具-未细化/attach-state-tracking.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { wrapOscForMultiplexer, OSC_CODES } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { createOscQuery } from "../../01-核心基础设施/共享小工具-未细化/terminal-querier.js";
import { isTmuxControlMode } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { sk } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { setSystemTheme, detectThemeFromColor } from "../../01-核心基础设施/共享小工具-未细化/theme-resolution.js";
var v = 2000;
function watchSystemTheme(e, d, p) {
  let o = !1,
    i = !1,
    y = p?.muxTimeoutMs ?? v,
    m = Boolean(a.TMUX || a.STY) && !isTmuxControlMode();
  async function u() {
    if (i) return;
    i = !0;
    try {
      let s = createOscQuery(OSC_CODES.SET_BG_COLOR),
        l = m ? { ...s, request: wrapOscForMultiplexer(s.request) } : s,
        t,
        f = m ? "dcs" : "direct";
      if (m) {
        if (
          ((t = await Promise.race([
            e.send(l),
            sleep(y, void 0, { unref: !0 }).then(() => {
              return;
            }),
          ])),
          !t)
        )
          if (o) e.cancel(l);
          else
            (e.flush(),
              (f = "mux-bare"),
              ([t] = await Promise.all([e.send(s), e.flush()])));
      } else [t] = await Promise.all([e.send(l), e.flush()]);
      if (o) return;
      if (!t) {
        (n(`systemTheme: OSC 11 query (via=${f}) got no response`, {
          level: "debug",
        }),
          (sk().osc11Responsive = !1));
        return;
      }
      sk().osc11Responsive = !0;
      let r = detectThemeFromColor(t.data);
      if (
        (n(`systemTheme: OSC 11 response=${t.data} detected=${r} via=${f}`, {
          level: "debug",
        }),
        r === void 0)
      )
        return;
      (setSystemTheme(r), d(r));
    } finally {
      i = !1;
    }
  }
  let c = a.CLAUDE_BG_BACKEND === "daemon";
  if (sk().osc11Responsive !== !1 && !c) u();
  let T = e.subscribeThemeChange(() => void u()),
    h = c
      ? subscribeTerminalFocus(() => {
          if (getTerminalFocus() === "focused")
            waitForAttachQuietDrainEnd().then(() => {
              if (!o) u();
            });
        })
      : void 0;
  return () => {
    ((o = !0), T(), h?.());
  };
}
export { watchSystemTheme };

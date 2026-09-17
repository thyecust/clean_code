// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { $I, V3 } from "../../01-核心基础设施/共享小工具-未细化/chunk-k2rb4dgd.js";
import { aft } from "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mw, _d } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { gBn } from "../../01-核心基础设施/共享小工具-未细化/chunk-ewa397cg.js";
import { dG } from "../终端环境探测(TUI-tmux)/终端环境探测(TUI-tmux).5pkb0sjc.js";
import { sk } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js";
import { cft, I3n } from "../../01-核心基础设施/共享小工具-未细化/chunk-28p6k62j.js";
var v = 2000;
function watchSystemTheme(e, d, p) {
  let o = !1,
    i = !1,
    y = p?.muxTimeoutMs ?? v,
    m = Boolean(a.TMUX || a.STY) && !dG();
  async function u() {
    if (i) return;
    i = !0;
    try {
      let s = gBn(_d.SET_BG_COLOR),
        l = m ? { ...s, request: mw(s.request) } : s,
        t,
        f = m ? "dcs" : "direct";
      if (m) {
        if (
          ((t = await Promise.race([
            e.send(l),
            Z(y, void 0, { unref: !0 }).then(() => {
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
      let r = I3n(t.data);
      if (
        (n(`systemTheme: OSC 11 response=${t.data} detected=${r} via=${f}`, {
          level: "debug",
        }),
        r === void 0)
      )
        return;
      (cft(r), d(r));
    } finally {
      i = !1;
    }
  }
  let c = a.CLAUDE_BG_BACKEND === "daemon";
  if (sk().osc11Responsive !== !1 && !c) u();
  let T = e.subscribeThemeChange(() => void u()),
    h = c
      ? V3(() => {
          if ($I() === "focused")
            aft().then(() => {
              if (!o) u();
            });
        })
      : void 0;
  return () => {
    ((o = !0), T(), h?.());
  };
}
export { watchSystemTheme };

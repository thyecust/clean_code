// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { ZHe, vh, Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import { PMe } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { bf, VL } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nj1exzcd.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s3mpt973.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wqaxtswb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7m5aewa3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-0mg59v9m.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../工具Bash-Shell/chunk-qnax4jt7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "./chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-86zcr8cb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vwjqzjhr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-x93xfjz0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-p07dva25.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nkg0z9p5.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pvfkaage.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xvyb4e66.js";
var p = 3,
  f = "Initializing\u2026";
function renderToolResultMessage(s) {
  if ("status" in s && s.status === "forked")
    return e(xe, {
      height: 1,
      children: e(t, {
        children: e(ue, {
          children: [s.background ? "Running in the background" : "Done"],
        }),
      }),
    });
  let l = ["Successfully loaded skill"];
  if ("allowedTools" in s && s.allowedTools && s.allowedTools.length > 0) {
    let n = s.allowedTools.length;
    l.push(`${n} ${x(n, "tool")} allowed`);
  }
  if ("model" in s && s.model) l.push(s.model);
  return e(xe, {
    height: 1,
    children: e(t, { children: e(ue, { children: l }) }),
  });
}
function renderToolUseProgressMessage(s, { tools: l, verbose: n }) {
  if (!s.length)
    return e(xe, { height: 1, children: e(t, { dimColor: !0, children: f }) });
  let a = n ? s : s.slice(-p),
    g = s.length - a.length,
    { lookups: d, inProgressToolUseIDs: c } = PMe(s.map((i) => i.data));
  return e(xe, {
    children: r(o, {
      flexDirection: "column",
      children: [
        e(ZHe, {
          children: a.map((i) =>
            e(
              o,
              {
                height: 1,
                overflow: "hidden",
                children: e(VL, {
                  message: i.data.message,
                  lookups: d,
                  addMargin: !1,
                  tools: l,
                  commands: [],
                  verbose: n,
                  inProgressToolUseIDs: c,
                  progressMessagesForMessage: [],
                  shouldAnimate: !1,
                  shouldShowDot: !1,
                  style: "condensed",
                  isTranscriptMode: !1,
                  isStatic: !0,
                }),
              },
              i.uuid,
            ),
          ),
        }),
        e(vh, { count: g, unit: "tool use" }),
      ],
    }),
  });
}
function renderToolUseRejectedMessage(s, { progressMessagesForMessage: l, tools: n, verbose: a }) {
  return r(N, { children: [renderToolUseProgressMessage(l, { tools: n, verbose: a }), e(bf, {})] });
}
function renderToolUseErrorMessage(s, { progressMessagesForMessage: l, tools: n, verbose: a }) {
  return r(N, {
    children: [
      renderToolUseProgressMessage(l, { tools: n, verbose: a }),
      e(Yd, { result: s, verbose: a }),
    ],
  });
}
export {
  renderToolResultMessage,
  renderToolUseErrorMessage,
  renderToolUseProgressMessage,
  renderToolUseRejectedMessage,
};

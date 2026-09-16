// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 238 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import { Yd } from "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import { xe } from "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { l_ } from "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import { JW } from "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import { zZ } from "./chunk-ktp8xtmy.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
var h = 2,
  d = 160;
function I(l, { verbose: a, theme: u }) {
  let { command: g } = l;
  if (!g) return null;
  let m = g;
  if (!a) {
    let i = m.split(`
`),
      s = i.length > h,
      p = m.length > d;
    if (s || p) {
      let n = m;
      if (s)
        n = i.slice(0, h).join(`
`);
      if (n.length > d) n = n.slice(0, d);
      return r(t, { children: [n.trim(), "\u2026"] });
    }
  }
  return m;
}
function k(
  l,
  { verbose: a, tools: u, terminalSize: g, inProgressToolCallCount: m },
) {
  let i = l.at(-1);
  if (!i || !i.data)
    return e(xe, {
      height: 1,
      children: e(t, { dimColor: !0, children: "Running\u2026" }),
    });
  let s = i.data;
  return e(zZ, {
    fullOutput: s.fullOutput,
    output: s.output,
    elapsedTimeSeconds: s.elapsedTimeSeconds,
    totalLines: s.totalLines,
    totalBytes: s.totalBytes,
    timeoutMs: s.timeoutMs,
    taskId: s.taskId,
    verbose: a,
  });
}
function w() {
  return e(xe, {
    height: 1,
    children: e(t, { dimColor: !0, children: "Waiting\u2026" }),
  });
}
function v(l, a, { verbose: u, theme: g, tools: m, style: i }) {
  let p = a.at(-1)?.data?.timeoutMs,
    {
      stdout: n,
      stderr: c,
      interrupted: M,
      returnCodeInterpretation: T,
      isImage: f,
      backgroundTaskId: P,
    } = l;
  if (f)
    return e(xe, {
      height: 1,
      children: e(t, {
        dimColor: !0,
        children: "[Image data detected and sent to Claude]",
      }),
    });
  return r(o, {
    flexDirection: "column",
    children: [
      n !== "" ? e(l_, { content: n, verbose: u }) : null,
      c.trim() !== "" ? e(l_, { content: c, verbose: u, isError: !0 }) : null,
      n === "" && c.trim() === ""
        ? e(xe, {
            height: 1,
            children: e(t, {
              dimColor: !0,
              children: P
                ? r(N, {
                    children: [
                      "Running in the background",
                      " ",
                      e(D, { chord: "down", action: "manage", parens: !0 }),
                    ],
                  })
                : M
                  ? "Interrupted"
                  : T || "(No output)",
            }),
          })
        : null,
      p ? e(xe, { children: e(JW, { timeoutMs: p }) }) : null,
    ],
  });
}
function A(l, { verbose: a, progressMessagesForMessage: u, tools: g }) {
  return e(Yd, { result: l, verbose: a });
}
export {
  v as renderToolResultMessage,
  A as renderToolUseErrorMessage,
  I as renderToolUseMessage,
  k as renderToolUseProgressMessage,
  w as renderToolUseQueuedMessage,
};

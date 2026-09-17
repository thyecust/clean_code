// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 127 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { saveGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Box, Text, Link, Newline } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { CLAUDE_IN_CHROME_URL, isChromeExtensionInstalled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function P(U) {
  return { ...U, hasCompletedClaudeInChromeOnboarding: !0 };
}
var I = "https://clau.de/chrome/permissions";
function ClaudeInChromeOnboarding(J) {
  let n = _(22),
    { onDone: m } = J,
    [l, Q] = d(!1),
    { storageV5: a } = useStorageV5Context(),
    D,
    R;
  if (n[0] !== a)
    ((D = () => {
      (logEvent("tengu_claude_in_chrome_onboarding_shown", {}),
        isChromeExtensionInstalled().then(Q).catch(logError),
        saveGlobalConfig(P, a));
    }),
      (R = [a]),
      (n[0] = a),
      (n[1] = D),
      (n[2] = R));
  else ((D = n[1]), (R = n[2]));
  E(D, R);
  let c;
  if (n[3] !== m)
    ((c = (u) => {
      if (u.key === "return" && !u.ctrl && !u.meta) (u.preventDefault(), m());
    }),
      (n[3] = m),
      (n[4] = c));
  else c = n[4];
  let f;
  if (n[5] !== l)
    ((f =
      !l &&
      r(N, {
        children: [
          e(Newline, {}),
          e(Newline, {}),
          "Requires the Chrome extension. Get started at",
          " ",
          e(Link, { url: CLAUDE_IN_CHROME_URL }),
        ],
      })),
      (n[5] = l),
      (n[6] = f));
  else f = n[6];
  let C;
  if (n[7] !== f)
    ((C = r(Text, {
      children: [
        "Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. You can navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.",
        f,
      ],
    })),
      (n[7] = f),
      (n[8] = C));
  else C = n[8];
  let y;
  if (n[9] !== l)
    ((y = l && r(N, { children: [" ", "(", e(Link, { url: I }), ")"] })),
      (n[9] = l),
      (n[10] = y));
  else y = n[10];
  let g;
  if (n[11] !== y)
    ((g = r(Text, {
      dimColor: !0,
      children: [
        "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on",
        y,
        ".",
      ],
    })),
      (n[11] = y),
      (n[12] = g));
  else g = n[12];
  let K;
  if (n[13] === MEMO_CACHE_SENTINEL)
    ((K = e(Text, { bold: !0, color: "chromeYellow", children: "/chrome" })),
      (n[13] = K));
  else K = n[13];
  let Y;
  if (n[14] === MEMO_CACHE_SENTINEL)
    ((Y = r(Text, {
      dimColor: !0,
      children: [
        "For more info, use",
        " ",
        K,
        " ",
        "or visit ",
        e(Link, { url: "https://code.claude.com/docs/en/chrome" }),
      ],
    })),
      (n[14] = Y));
  else Y = n[14];
  let v;
  if (n[15] !== c || n[16] !== C || n[17] !== g)
    ((v = r(Box, {
      flexDirection: "column",
      gap: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: c,
      children: [C, g, Y],
    })),
      (n[15] = c),
      (n[16] = C),
      (n[17] = g),
      (n[18] = v));
  else v = n[18];
  let q;
  if (n[19] !== m || n[20] !== v)
    ((q = e(de, {
      title: "Claude in Chrome",
      onCancel: m,
      color: "chromeYellow",
      children: v,
    })),
      (n[19] = m),
      (n[20] = v),
      (n[21] = q));
  else q = n[21];
  return q;
}
export { ClaudeInChromeOnboarding };

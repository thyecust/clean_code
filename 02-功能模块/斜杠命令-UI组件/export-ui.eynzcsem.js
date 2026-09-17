// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 270 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he, Mx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { setClipboard } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import "../../01-核心基础设施/共享小工具-未细化/main-loop-model.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../../01-核心基础设施/共享小工具-未细化/session-announcement-state.js";
import { est } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/channel-gate.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/structured-diff.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-content.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../03-入口与运行时/会话UI(REPL)/tool-result-display.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-tool-base.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-use-message-renderers.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/verb-conjugation.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/resumed-agent-handback.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import "../../03-入口与运行时/会话UI(REPL)/clawd-mascot.js";
import "../工具Bash-Shell/bash-output-view.js";
import "../../01-核心基础设施/共享小工具-未细化/diff-hunks.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
import "../../01-核心基础设施/共享小工具-未细化/webfetch-tool-messages.js";
import "../../01-核心基础设施/共享小工具-未细化/private-host-detection.js";
import "../../01-核心基础设施/共享小工具-未细化/dashed-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/titled-border-box.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import "../../01-核心基础设施/共享小工具-未细化/managed-settings-status.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/model-1m-context-suggestion.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/slack-send-tool.js";
import "../../01-核心基础设施/共享小工具-未细化/mcp-output-truncation.js";
import { re, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { mkdir, writeFile } from "fs/promises";
import { dirname, extname } from "path";
function rt(n) {
  let s = extname(n) === "" ? `${n}.txt` : n,
    i = Mx().workspace === "remote" ? he() : void 0;
  return ot(s, i);
}
async function b(n, s) {
  let i = rt(n);
  return (
    await mkdir(dirname(i), { recursive: !0 }),
    await writeFile(i, s, { encoding: "utf-8", flush: !0 }),
    i
  );
}
function wt(Wt) {
  return Wt.project.originalCwd;
}
function yt(Zt) {
  return Zt.project.cwd;
}
function T(Nt) {
  let x = _(32),
    { content: S, defaultFilename: nt, onDone: u } = Nt,
    [, it] = d(null),
    [E, Vt] = d(nt),
    [L, Xt] = d(nt.length),
    [m, st] = d(!1),
    { columns: U } = useTerminalSize(),
    Yt = useSession(wt),
    qt = useSession(yt),
    at;
  if (x[0] === MEMO_CACHE_SENTINEL)
    ((at = () => {
      (st(!1), it(null));
    }),
      (x[0] = at));
  else at = x[0];
  let Ht = at,
    ct;
  if (x[1] !== S || x[2] !== u)
    ((ct = async (lt) => {
      if (lt === "clipboard") {
        let pt = await setClipboard(S);
        if (pt) process.stdout.write(pt);
        (logFeatureOk("export_clipboard"),
          u({ success: !0, message: "Conversation copied to clipboard" }));
      } else if (lt === "file") (it("file"), st(!0));
    }),
      (x[1] = S),
      (x[2] = u),
      (x[3] = ct));
  else ct = x[3];
  let A = ct,
    mt;
  if (x[4] !== S || x[5] !== E || x[6] !== u)
    ((mt = async () => {
      try {
        let Kt = await b(E, S);
        (logFeatureOk("export_file"),
          u({ success: !0, message: `Conversation exported to: ${Kt}` }));
      } catch (k) {
        let ft = k;
        (logFeatureBad("export_file", "write_failed"),
          u({
            success: !1,
            message: `Failed to export conversation: ${ft instanceof Error ? ft.message : "Unknown error"}`,
          }));
      }
    }),
      (x[4] = S),
      (x[5] = E),
      (x[6] = u),
      (x[7] = mt));
  else mt = x[7];
  let j = mt,
    k;
  if (x[8] !== u || x[9] !== m)
    ((k = () => {
      if (m) Ht();
      else u({ success: !1, message: "Export cancelled" });
    }),
      (x[8] = u),
      (x[9] = m),
      (x[10] = k));
  else k = x[10];
  let C = k,
    Qt = Mx().workspace === "remote" && Yt !== qt,
    gt;
  if (x[11] === MEMO_CACHE_SENTINEL)
    ((gt = {
      label: "Copy to clipboard",
      value: "clipboard",
      description: "Copy the conversation to your system clipboard",
    }),
      (x[11] = gt));
  else gt = x[11];
  const z = Qt
    ? "Save the conversation to a file in the directory claude was launched from"
    : "Save the conversation to a file in the current directory";
  let ut;
  if (x[12] !== z)
    ((ut = [gt, { label: "Save to file", value: "file", description: z }]),
      (x[12] = z),
      (x[13] = ut));
  else ut = x[13];
  let G = ut,
    dt;
  if (x[14] !== m)
    ((dt = m
      ? r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "enter", action: "save" }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "go back",
            }),
          ],
        })
      : e(ActionKeybindingHint, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "cancel",
        })),
      (x[14] = m),
      (x[15] = dt));
  else dt = x[15];
  let I = dt,
    xt;
  if (x[16] !== m)
    ((xt = { context: "Settings", isActive: m }), (x[16] = m), (x[17] = xt));
  else xt = x[17];
  useKeybinding("confirm:no", C, xt);
  const J = !m;
  let P;
  if (
    x[18] !== U ||
    x[19] !== L ||
    x[20] !== E ||
    x[21] !== C ||
    x[22] !== j ||
    x[23] !== A ||
    x[24] !== G ||
    x[25] !== m
  )
    ((P = !m
      ? e(ve, { options: G, onChange: A, onCancel: C })
      : r(o, {
          flexDirection: "column",
          children: [
            e(t, { children: "Enter filename:" }),
            r(o, {
              flexDirection: "row",
              gap: 1,
              marginTop: 1,
              children: [
                e(t, { children: ">" }),
                e(hn, {
                  value: E,
                  onChange: Vt,
                  onSubmit: j,
                  focus: !0,
                  showCursor: !0,
                  columns: U,
                  cursorOffset: L,
                  onChangeCursorOffset: Xt,
                }),
              ],
            }),
          ],
        })),
      (x[18] = U),
      (x[19] = L),
      (x[20] = E),
      (x[21] = C),
      (x[22] = j),
      (x[23] = A),
      (x[24] = G),
      (x[25] = m),
      (x[26] = P));
  else P = x[26];
  let ht;
  if (x[27] !== C || x[28] !== I || x[29] !== J || x[30] !== P)
    ((ht = e(de, {
      title: "Export conversation",
      subtitle: "Select export method",
      color: "permission",
      onCancel: C,
      inputGuide: I,
      isCancelActive: J,
      children: P,
    })),
      (x[27] = C),
      (x[28] = I),
      (x[29] = J),
      (x[30] = P),
      (x[31] = ht));
  else ht = x[31];
  return ht;
}
function Ct(n) {
  let s = n.getFullYear(),
    i = String(n.getMonth() + 1).padStart(2, "0"),
    a = String(n.getDate()).padStart(2, "0"),
    l = String(n.getHours()).padStart(2, "0"),
    h = String(n.getMinutes()).padStart(2, "0"),
    w = String(n.getSeconds()).padStart(2, "0");
  return `${s}-${i}-${a}-${l}${h}${w}`;
}
function extractFirstPrompt(n) {
  let s = n.find((l) => l.type === "user");
  if (!s || s.type !== "user") return "";
  let i = s.message?.content,
    a = "";
  if (typeof i === "string") a = i.trim();
  else if (Array.isArray(i)) {
    let l = i.find((h) => h.type === "text");
    if (l && "text" in l) a = l.text.trim();
  }
  if (((a = firstLine(a)), a.length > 50)) a = a.substring(0, 49) + "\u2026";
  return a;
}
function sanitizeFilename(n) {
  return n
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
async function le(n, s, i) {
  let a = await est(s.session, s.messages, s.options.tools || [], {
      storageV5: s.storageV5,
    }),
    l = i.trim();
  if (l) {
    try {
      let c = await b(l, a);
      (logFeatureOk("export_file"), n(`Conversation exported to: ${c}`));
    } catch (c) {
      (logFeatureBad("export_file", "write_failed"),
        n(
          `Failed to export conversation: ${c instanceof Error ? c.message : "Unknown error"}`,
        ));
    }
    return null;
  }
  let h = extractFirstPrompt(s.messages),
    w = Ct(new Date()),
    v;
  if (h) {
    let c = sanitizeFilename(h);
    v = c ? `${w}-${c}.txt` : `conversation-${w}.txt`;
  } else v = `conversation-${w}.txt`;
  return e(T, {
    content: a,
    defaultFilename: v,
    onDone: (c) => {
      n(c.message);
    },
  });
}
export { le as call, extractFirstPrompt, sanitizeFilename };

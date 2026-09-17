// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 270 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he, Mx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { kr } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { ot } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { z_ } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-f4zey5rf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-493670wv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-c9wxfdax.js";
import { est } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-aeg1pn1f.js";
import "../插件系统/chunk-rbjz1q03.js";
import "../插件系统/chunk-4k4dssd9.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-anjm5g41.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-sn6am10p.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vpp75aza.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-jjqazdgg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pkw2prc7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nj1exzcd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s3mpt973.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7m5aewa3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pazpsfq6.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-0mg59v9m.js";
import "../GitHub集成/chunk-bfz9rjjm.js";
import "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wqaxtswb.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import "../../03-入口与运行时/会话UI(REPL)/chunk-mmzy53cr.js";
import "../工具Bash-Shell/chunk-qnax4jt7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bhcz98rd.js";
import "../工具UI渲染/chunk-g4k5jjwt.js";
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
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-ga0qgvpz.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nkg0z9p5.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pvfkaage.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-xvyb4e66.js";
import { re, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
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
    { columns: U } = Se(),
    Yt = Ye(wt),
    qt = Ye(yt),
    at;
  if (x[0] === p)
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
        let pt = await z_(S);
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
  if (x[11] === p)
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
      ? r(ue, {
          children: [
            e(D, { chord: "enter", action: "save" }),
            e(je, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "go back",
            }),
          ],
        })
      : e(je, {
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
  Ne("confirm:no", C, xt);
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
  if (((a = kr(a)), a.length > 50)) a = a.substring(0, 49) + "\u2026";
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

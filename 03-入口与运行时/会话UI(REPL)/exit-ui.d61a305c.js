// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 276 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Ia, isBgSession } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { IF, due, I3, YO } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-xmxjyg29.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-gnmy62vg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yrv8wzwe.js";
import "../../02-功能模块/语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { h4 } from "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { D } from "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../02-功能模块/后台任务-Shell管理/chunk-rh0xpf1w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-pbd0pf42.js";
import { HB, h6e } from "./会话UI(REPL).qs63rzfp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7f3kwdxn.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../../02-功能模块/Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../../02-功能模块/状态栏-主题/chunk-jrr487ty.js";
import { Tv } from "../../02-功能模块/Hooks钩子/chunk-22aft7vr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../../02-功能模块/语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { r0e } from "../../02-功能模块/反馈-错误上报/反馈-错误上报.grgh562d.js";
import { YWe } from "../../02-功能模块/反馈-错误上报/chunk-rmpn4ety.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../02-功能模块/Bridge-RemoteControl/chunk-2c3z3wjk.js";
import { vBn } from "../../02-功能模块/后台任务-Shell管理/chunk-nhnqmzyt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-tpraq69b.js";
import { C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function z() {}
function N(me) {
  let n = _(26),
    { sessionDrafts: i, messages: T, renderExitFlow: f, onExit: k } = me,
    { storageV5: V } = _e(),
    [M, de] = d("nudge"),
    [h, j] = d(null),
    q = C(!1),
    A;
  if (n[0] !== i || n[1] !== V)
    ((A = async function S() {
      for (const fe of i) await YWe(fe, "exit_nudge", V).catch(z);
    }),
      (n[0] = i),
      (n[1] = V),
      (n[2] = A));
  else A = n[2];
  let S = A,
    J;
  if (n[3] !== k || n[4] !== f)
    ((J = function E() {
      if (f) j(f());
      else k();
    }),
      (n[3] = k),
      (n[4] = f),
      (n[5] = J));
  else J = n[5];
  let E = J,
    X;
  if (n[6] !== S || n[7] !== h || n[8] !== k || n[9] !== f || n[10] !== M)
    ((X = function w(c) {
      if (M !== "nudge" || h || c.ctrl || c.meta) {
        return;
      }
      if (q.current) {
        c.preventDefault();
        return;
      }
      if (c.key === "return") (c.preventDefault(), de("panel"));
      else if (c.key === "escape") {
        if ((c.preventDefault(), (q.current = !0), f)) j(f(S));
        else
          (async () => {
            (await S(), k());
          })();
      }
    }),
      (n[6] = S),
      (n[7] = h),
      (n[8] = k),
      (n[9] = f),
      (n[10] = M),
      (n[11] = X));
  else X = n[11];
  let w = X;
  if (h) {
    return h;
  }
  if (M === "panel") {
    let R;
    if (n[12] !== E) ((R = () => E()), (n[12] = E), (n[13] = R));
    else R = n[13];
    let l;
    if (n[14] !== T || n[15] !== R)
      ((l = e(r0e, { messages: T, onDone: R })),
        (n[14] = T),
        (n[15] = R),
        (n[16] = l));
    else l = n[16];
    return l;
  }
  const R = i.length;
  let l;
  if (n[17] !== i.length)
    ((l = x(i.length, "feedback draft")), (n[17] = i.length), (n[18] = l));
  else l = n[18];
  let B;
  if (n[19] !== i.length || n[20] !== l)
    ((B = r(t, { children: ["You have ", R, " unsent", " ", l] })),
      (n[19] = i.length),
      (n[20] = l),
      (n[21] = B));
  else B = n[21];
  let Y;
  if (n[22] === p)
    ((Y = e(t, {
      dimColor: !0,
      children: r(ue, {
        children: [
          e(D, { chord: "enter", action: "review & send" }),
          e(D, { chord: "esc", action: "discard and exit" }),
        ],
      }),
    })),
      (n[22] = Y));
  else Y = n[22];
  let Q;
  if (n[23] !== w || n[24] !== B)
    ((Q = r(mr, { onKeyDown: w, children: [B, Y] })),
      (n[23] = w),
      (n[24] = B),
      (n[25] = Q));
  else Q = n[25];
  return Q;
}
var H = ["Goodbye!", "See ya!", "Bye!", "Catch you later!"];
function L() {
  return Tv(H) ?? "Goodbye!";
}
async function Be(s, o) {
  if (isBgSession()) return (s(), HB(), null);
  let m = Ia() !== null,
    u = vBn(),
    y =
      m || u.length > 0
        ? (g) =>
            e(h6e, {
              showWorktree: m,
              backgroundItems: u,
              messages: o.messages,
              isMidTurn: o.isMidTurn,
              getMessages: o.getMessages,
              getIsResponseStreaming: o.getIsResponseStreaming,
              onDone: s,
              onCancel: () => s(),
              onBeforeExit: g,
            })
        : null;
  if (YO()) {
    let { queued: g } = await I3({ lightweight: !0 }, o.storageV5).catch(
        () => ({ queued: [], expired: [] }),
      ),
      b = g.filter((v) => v.source_session_id === K());
    if (b.length > 0)
      return e(N, {
        sessionDrafts: b,
        messages: [...o.messages],
        renderExitFlow: y,
        onExit: () => {
          (s(L()), h4(IF(o), { responseStreaming: due(o) }, o.storageV5));
        },
      });
  }
  if (y) return y();
  return (
    s(L()),
    await h4(IF(o), { responseStreaming: due(o) }, o.storageV5),
    null
  );
}
export { Be as call };

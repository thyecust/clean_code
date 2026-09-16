// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Te, ee, es, eu } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { H1 } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { el } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Ame } from "../../02-功能模块/策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import { eN } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t, ct } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { tO } from "../../01-核心基础设施/共享小工具-未细化/chunk-37xdmryq.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
class T {
  lastLoggedSessionId = null;
  autoOpenPending = !1;
}
var TWe = new j(() => new T());
var qZ = 110,
  uPt = 144,
  dPt =
    "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository";
function pPt(o) {
  TWe.of(o).autoOpenPending = !0;
}
function CZt(o) {
  let n = TWe.of(o),
    r = n.autoOpenPending;
  return ((n.autoOpenPending = !1), r);
}
function N$n(o) {
  TWe.of(o).autoOpenPending = !1;
}
function bye() {
  return H1(Q()) !== null;
}
function Sit({
  fullscreen: o,
  columns: n,
  isThinClient: r,
  isMainFocused: i,
  hasGitRepo: s,
}) {
  return eN() && o && !r && i && n >= qZ && s;
}
function fPt(o) {
  let n = ee().diffSidebarOpen;
  if (n === !1) return !1;
  return o >= (n === !0 ? qZ : uPt) && bye();
}
function mPt(o, n, r, i) {
  let s = r === "diff" ? "convo" : "diff";
  (N$n(o),
    n((a) =>
      a.replTab === s && a.panelFileView === null
        ? a
        : { ...a, replTab: s, panelFileView: null },
    ));
  let l = s === "diff";
  if (ee().diffSidebarOpen !== l) Te((a) => ({ ...a, diffSidebarOpen: l }), i);
  return (y("repl_tab_switch", { tab: u(s) }), s);
}
function j8(o, n) {
  (N$n(o),
    n((r) =>
      r.replTab === "convo" && r.panelFileView === null
        ? r
        : { ...r, replTab: "convo", panelFileView: null },
    ));
}
function gPt(o, n, r) {
  if ((j8(o, n), ee().diffSidebarOpen !== !1))
    Te((i) => ({ ...i, diffSidebarOpen: !1 }), r);
  y("repl_tab_switch", { tab: u("convo") });
}
var g = ["session", "uncommitted", "branch"];
function hPt() {
  let o = es().diffSidebarBaseMode;
  return o === "uncommitted" || o === "branch" ? o : "session";
}
function _Pt(o, n) {
  let r = g[(g.indexOf(o) + 1) % g.length] ?? "session";
  return (
    eu(
      (i) =>
        i.diffSidebarBaseMode === r ? i : { ...i, diffSidebarBaseMode: r },
      n,
    ),
    y("repl_diff_base_switch", { mode: u(r) }),
    r
  );
}
F();
import { homedir as O } from "os";
import { isAbsolute as H, sep as U } from "path";
import { resolve as le, sep as k, win32 as B } from "path";
function C(o) {
  return Ame(M(o));
}
function M(o) {
  let n = sn(),
    r = P() === "windows",
    i = r ? B.sep : k,
    s = (w) => (r ? w.replaceAll("/", i).toLowerCase() : w),
    l = s(o),
    a = s(n);
  if (l.length !== o.length || a.length !== n.length) return o;
  if (l === a) return "";
  let R = a.endsWith(i) ? a : a + i;
  return l.startsWith(R) ? o.slice(R.length) : o;
}
import { isAbsolute as I, win32 as D } from "path";
function S(o) {
  if (P() === "windows") return D.isAbsolute(o) && D.parse(o).root.length > 1;
  return I(o);
}
var bit = Qt(null);
function Pg(Ue) {
  let h = _(9),
    { filePath: d, children: je } = Ue,
    b = De(bit),
    f = je ?? d;
  if (m(d) || (typeof f === "string" && m(f))) {
    let c;
    if (h[0] === p)
      ((c = e(t, {
        dimColor: !0,
        children: "Path hidden (unsupported characters)",
      })),
        (h[0] = c));
    else c = h[0];
    return c;
  }
  let c;
  if (h[1] !== b || h[2] !== f)
    ((c = b !== null && typeof f === "string" ? el(f, b) : f),
      (h[1] = b),
      (h[2] = f),
      (h[3] = c));
  else c = h[3];
  let A = c,
    v;
  if (h[4] !== d) ((v = S(d) ? tO(d) : null), (h[4] = d), (h[5] = v));
  else v = h[5];
  let x = v,
    E;
  if (h[6] !== A || h[7] !== x)
    ((E = x === null ? e(t, { children: A }) : e(ct, { url: x, children: A })),
      (h[6] = A),
      (h[7] = x),
      (h[8] = E));
  else E = h[8];
  return E;
}
function m(o) {
  let n = L(o);
  return H(n) ? C(n) : Ame(n);
}
function L(o) {
  if (o === "~") return O();
  return o.startsWith("~" + U) ? O() + o.slice(1) : o;
}
export {
  TWe,
  qZ,
  uPt,
  dPt,
  pPt,
  CZt,
  N$n,
  bye,
  Sit,
  fPt,
  mPt,
  j8,
  gPt,
  hPt,
  _Pt,
  bit,
  Pg,
};

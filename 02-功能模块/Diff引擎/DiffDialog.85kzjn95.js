// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 247 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { s4 } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { Pt } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { truncateStartToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { jJt, IB, $ae } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "./chunk-p2gj9dsf.js";
import { Wm } from "../GitHub集成/chunk-bfz9rjjm.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import { E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function gt(n) {
  if (!n || typeof n !== "object") return !1;
  let s = n,
    i = typeof s.filePath === "string",
    l = Array.isArray(s.structuredPatch) && s.structuredPatch.length > 0,
    T = s.type === "create" && typeof s.content === "string";
  return i && (l || T);
}
function yt(n) {
  return "type" in n && (n.type === "create" || n.type === "update");
}
function Tt(n) {
  let s = 0,
    i = 0;
  for (let l of n)
    for (let T of l.lines)
      if (T.startsWith("+")) s++;
      else if (T.startsWith("-")) i++;
  return { added: s, removed: i };
}
function Dt(n) {
  if (n.type !== "user") return "";
  let s = n.message.content,
    i = typeof s === "string" ? s : "";
  if (i.length <= 30) return i;
  return i.slice(0, 29) + "\u2026";
}
function He(n) {
  let s = 0,
    i = 0;
  for (let l of n.files.values()) ((s += l.linesAdded), (i += l.linesRemoved));
  n.stats = { filesChanged: n.files.size, linesAdded: s, linesRemoved: i };
}
function pe(n) {
  let s = C({
    completedTurns: [],
    currentTurn: null,
    lastProcessedIndex: 0,
    lastTurnIndex: 0,
  });
  return V(() => {
    let i = s.current;
    if (n.length < i.lastProcessedIndex)
      ((i.completedTurns = []),
        (i.currentTurn = null),
        (i.lastProcessedIndex = 0),
        (i.lastTurnIndex = 0));
    for (let T = i.lastProcessedIndex; T < n.length; T++) {
      let u = n[T];
      if (!u || u.type !== "user") continue;
      if (
        !(
          u.toolUseResult ||
          (Array.isArray(u.message.content) &&
            u.message.content[0]?.type === "tool_result")
        ) &&
        !u.isMeta
      ) {
        if (i.currentTurn && i.currentTurn.files.size > 0)
          (He(i.currentTurn), i.completedTurns.push(i.currentTurn));
        (i.lastTurnIndex++,
          (i.currentTurn = {
            turnIndex: i.lastTurnIndex,
            userPromptPreview: Dt(u),
            timestamp: u.timestamp,
            files: new Map(),
            stats: { filesChanged: 0, linesAdded: 0, linesRemoved: 0 },
          }));
      } else if (i.currentTurn && u.toolUseResult) {
        let W = u.toolUseResult;
        if (gt(W)) {
          let { filePath: S, structuredPatch: R } = W,
            z = "type" in W && W.type === "create",
            f = i.currentTurn.files.get(S);
          if (!f)
            ((f = {
              filePath: S,
              hunks: [],
              isNewFile: z,
              linesAdded: 0,
              linesRemoved: 0,
            }),
              i.currentTurn.files.set(S, f));
          if (z && R.length === 0 && yt(W)) {
            let m = W.content.split(`
`),
              y = {
                oldStart: 0,
                oldLines: 0,
                newStart: 1,
                newLines: m.length,
                lines: m.map((N) => "+" + N),
              };
            (f.hunks.push(y), (f.linesAdded += m.length));
          } else {
            f.hunks.push(...R);
            let { added: A, removed: m } = Tt(R);
            ((f.linesAdded += A), (f.linesRemoved += m));
          }
          if (z) f.isNewFile = !0;
        }
      }
    }
    i.lastProcessedIndex = n.length;
    let l = [...i.completedTurns];
    if (i.currentTurn && i.currentTurn.files.size > 0)
      (He(i.currentTurn), l.push(i.currentTurn));
    return l.reverse();
  }, [n]);
}
F();
var G = 5;
function fe(wn) {
  let Z = _(36),
    { files: k, selectedIndex: ne } = wn,
    { columns: Be } = useTerminalSize(),
    Oe;
  bb0: {
    if (k.length === 0 || k.length <= G) {
      let U;
      if (Z[0] !== k.length)
        ((U = { startIndex: 0, endIndex: k.length }),
          (Z[0] = k.length),
          (Z[1] = U));
      else U = Z[1];
      Oe = U;
      break bb0;
    }
    let le = Math.max(0, ne - Math.floor(G / 2));
    let re = le + G;
    if (re > k.length) ((re = k.length), (le = Math.max(0, re - G)));
    let U;
    if (Z[2] !== re || Z[3] !== le)
      ((U = { startIndex: le, endIndex: re }),
        (Z[2] = re),
        (Z[3] = le),
        (Z[4] = U));
    else U = Z[4];
    Oe = U;
  }
  let { startIndex: j, endIndex: K } = Oe;
  if (k.length === 0) {
    let U;
    if (Z[5] === MEMO_CACHE_SENTINEL) ((U = e(EmptyStateMessage, { children: "No changed files" })), (Z[5] = U));
    else U = Z[5];
    return U;
  }
  let he, ge, ee, U, ae, ye;
  if (Z[6] !== Be || Z[7] !== K || Z[8] !== k || Z[9] !== ne || Z[10] !== j) {
    let vn = k.slice(j, K);
    let ze = j > 0;
    ge = K < k.length;
    ee = k.length > G;
    let Ee = Math.max(20, Be - 16 - 3 - 4);
    he = o;
    U = "column";
    if (Z[17] !== ze || Z[18] !== ee || Z[19] !== j)
      ((ae =
        ee &&
        e(t, {
          dimColor: !0,
          children: ze ? ` \u2191 ${j} more ${x(j, "file")}` : " ",
        })),
        (Z[17] = ze),
        (Z[18] = ee),
        (Z[19] = j),
        (Z[20] = ae));
    else ae = Z[20];
    let te;
    if (Z[21] !== Ee || Z[22] !== ne || Z[23] !== j)
      ((te = (xt, Cn) =>
        e(
          xe,
          { file: xt, isSelected: j + Cn === ne, maxPathWidth: Ee },
          xt.path,
        )),
        (Z[21] = Ee),
        (Z[22] = ne),
        (Z[23] = j),
        (Z[24] = te));
    else te = Z[24];
    ye = vn.map(te);
    ((Z[6] = Be),
      (Z[7] = K),
      (Z[8] = k),
      (Z[9] = ne),
      (Z[10] = j),
      (Z[11] = he),
      (Z[12] = ge),
      (Z[13] = ee),
      (Z[14] = U),
      (Z[15] = ae),
      (Z[16] = ye));
  } else
    ((he = Z[11]),
      (ge = Z[12]),
      (ee = Z[13]),
      (U = Z[14]),
      (ae = Z[15]),
      (ye = Z[16]));
  let te;
  if (Z[25] !== K || Z[26] !== k.length || Z[27] !== ge || Z[28] !== ee)
    ((te =
      ee &&
      e(t, {
        dimColor: !0,
        children: ge
          ? ` \u2193 ${k.length - K} more ${x(k.length - K, "file")}`
          : " ",
      })),
      (Z[25] = K),
      (Z[26] = k.length),
      (Z[27] = ge),
      (Z[28] = ee),
      (Z[29] = te));
  else te = Z[29];
  let bt;
  if (
    Z[30] !== he ||
    Z[31] !== U ||
    Z[32] !== ae ||
    Z[33] !== ye ||
    Z[34] !== te
  )
    ((bt = r(he, { flexDirection: U, children: [ae, ye, te] })),
      (Z[30] = he),
      (Z[31] = U),
      (Z[32] = ae),
      (Z[33] = ye),
      (Z[34] = te),
      (Z[35] = bt));
  else bt = Z[35];
  return bt;
}
function xe(Fn) {
  let ce = _(14),
    { file: ie, isSelected: Q, maxPathWidth: Ge } = Fn,
    kt;
  if (ce[0] !== ie.path || ce[1] !== Ge)
    ((kt = truncateStartToWidth(ie.path, Ge)), (ce[0] = ie.path), (ce[1] = Ge), (ce[2] = kt));
  else kt = ce[2];
  let Mn = kt,
    Ve = `${Q ? L.pointer + " " : "  "}${Mn}`;
  const Le = Q ? "background" : void 0;
  let Te;
  if (ce[3] !== Q || ce[4] !== Ve || ce[5] !== Le)
    ((Te = e(t, { bold: Q, color: Le, inverse: Q, children: Ve })),
      (ce[3] = Q),
      (ce[4] = Ve),
      (ce[5] = Le),
      (ce[6] = Te));
  else Te = ce[6];
  let wt;
  if (ce[7] === MEMO_CACHE_SENTINEL) ((wt = e(o, { flexGrow: 1 })), (ce[7] = wt));
  else wt = ce[7];
  let De;
  if (ce[8] !== ie || ce[9] !== Q)
    ((De = e(Pe, { file: ie, isSelected: Q })),
      (ce[8] = ie),
      (ce[9] = Q),
      (ce[10] = De));
  else De = ce[10];
  let vt;
  if (ce[11] !== Te || ce[12] !== De)
    ((vt = r(o, { flexDirection: "row", children: [Te, wt, De] })),
      (ce[11] = Te),
      (ce[12] = De),
      (ce[13] = vt));
  else vt = ce[13];
  return vt;
}
function Pe(An) {
  let oe = _(16),
    { file: H, isSelected: Y } = An;
  if (H.isUntracked) {
    const w = !Y;
    let I;
    if (oe[0] !== w)
      ((I = e(t, { dimColor: w, italic: !0, children: "untracked" })),
        (oe[0] = w),
        (oe[1] = I));
    else I = oe[1];
    return I;
  }
  if (H.isBinary) {
    const w = !Y;
    let I;
    if (oe[2] !== w)
      ((I = e(t, { dimColor: w, italic: !0, children: "Binary file" })),
        (oe[2] = w),
        (oe[3] = I));
    else I = oe[3];
    return I;
  }
  if (H.isLargeFile) {
    const w = !Y;
    let I;
    if (oe[4] !== w)
      ((I = e(t, { dimColor: w, italic: !0, children: "Large file modified" })),
        (oe[4] = w),
        (oe[5] = I));
    else I = oe[5];
    return I;
  }
  let w;
  if (oe[6] !== H.linesAdded || oe[7] !== H.linesRemoved || oe[8] !== Y)
    ((w = e(Wm, { added: H.linesAdded, removed: H.linesRemoved, bold: Y })),
      (oe[6] = H.linesAdded),
      (oe[7] = H.linesRemoved),
      (oe[8] = Y),
      (oe[9] = w));
  else w = oe[9];
  let I;
  if (oe[10] !== H.isTruncated || oe[11] !== Y)
    ((I = H.isTruncated && e(t, { dimColor: !Y, children: " (truncated)" })),
      (oe[10] = H.isTruncated),
      (oe[11] = Y),
      (oe[12] = I));
  else I = oe[12];
  let Rt;
  if (oe[13] !== w || oe[14] !== I)
    ((Rt = r(t, { children: [w, I] })),
      (oe[13] = w),
      (oe[14] = I),
      (oe[15] = Rt));
  else Rt = oe[15];
  return Rt;
}
function cn(cr) {
  return { type: "turn", turn: cr };
}
function fn(fr) {
  return Math.max(0, fr - 1);
}
function lt(n) {
  let s = Array.from(n.files.values())
      .map((l) => ({
        path: l.filePath,
        linesAdded: l.linesAdded,
        linesRemoved: l.linesRemoved,
        isBinary: !1,
        isLargeFile: !1,
        isTruncated: !1,
        isNewFile: l.isNewFile,
      }))
      .sort((l, T) => l.path.localeCompare(T.path)),
    i = new Map();
  for (let l of n.files.values()) i.set(l.filePath, l.hunks);
  return {
    stats: {
      filesCount: n.stats.filesChanged,
      linesAdded: n.stats.linesAdded,
      linesRemoved: n.stats.linesRemoved,
    },
    files: s,
    hunks: i,
    loading: !1,
    source: { kind: "working-tree" },
    baseMode: "auto",
  };
}
function DiffDialog(tr) {
  let h = _(84),
    { messages: nr, onDone: rr } = tr,
    Ct;
  if (h[0] === MEMO_CACHE_SENTINEL) ((Ct = Pt()), (h[0] = Ct));
  else Ct = h[0];
  let { data: qe, notice: Ft } = jJt(Ct),
    Je = pe(nr),
    [c, Qe] = d("list"),
    [be, Ye] = d(0),
    [B, ke] = d(0),
    Mt;
  if (h[1] === MEMO_CACHE_SENTINEL) ((Mt = { type: "current" }), (h[1] = Mt));
  else Mt = h[1];
  let At;
  if (h[2] !== Je) ((At = [Mt, ...Je.map(cn)]), (h[2] = Je), (h[3] = At));
  else At = h[3];
  let P = At,
    Nt = P[B],
    O = Nt?.type === "turn" ? Nt.turn : null,
    Ut;
  if (h[4] !== O || h[5] !== qe)
    ((Ut = O ? lt(O) : qe), (h[4] = O), (h[5] = qe), (h[6] = Ut));
  else Ut = h[6];
  let a = Ut,
    g = a.files[be],
    It;
  if (h[7] !== a.hunks || h[8] !== g)
    ((It = g ? a.hunks.get(g.path) || [] : []),
      (h[7] = a.hunks),
      (h[8] = g),
      (h[9] = It));
  else It = h[9];
  let Ke = It,
    Wt,
    $t;
  if (h[10] !== B || h[11] !== P.length)
    ((Wt = () => {
      if (B >= P.length) ke(Math.max(0, P.length - 1));
    }),
      ($t = [P.length, B]),
      (h[10] = B),
      (h[11] = P.length),
      (h[12] = Wt),
      (h[13] = $t));
  else ((Wt = h[12]), ($t = h[13]));
  E(Wt, $t);
  let Ht = C(B),
    Bt,
    Ot;
  if (h[14] !== B)
    ((Bt = () => {
      if (Ht.current !== B) (Ye(0), (Ht.current = B));
    }),
      (Ot = [B]),
      (h[14] = B),
      (h[15] = Bt),
      (h[16] = Ot));
  else ((Bt = h[15]), (Ot = h[16]));
  (E(Bt, Ot), Rs("diff-dialog"));
  let Xe = s4(),
    St;
  if (h[17] !== Xe?.handle || h[18] !== c)
    ((St = function v(ir) {
      let q = Xe?.handle;
      if (c !== "detail" || !q) {
        return !1;
      }
      let zt = Math.max(1, Math.floor(q.getViewportHeight() / 2));
      let Et = Math.max(1, q.getViewportHeight());
      bb49: switch (ir) {
        case "up": {
          q.scrollBy(-1);
          break bb49;
        }
        case "down": {
          q.scrollBy(1);
          break bb49;
        }
        case "pageUp": {
          IB(q, -zt, !1);
          break bb49;
        }
        case "pageDown": {
          IB(q, zt, !1);
          break bb49;
        }
        case "fullPageUp": {
          IB(q, -Et, !1);
          break bb49;
        }
        case "fullPageDown": {
          IB(q, Et, !1);
          break bb49;
        }
        case "top": {
          q.scrollTo(0);
          break bb49;
        }
        case "bottom": {
          q.scrollToBottom();
        }
      }
    }),
      (h[17] = Xe?.handle),
      (h[18] = c),
      (h[19] = St));
  else St = h[19];
  let v = St,
    jt,
    Gt;
  if (h[20] !== P.length || h[21] !== c)
    ((jt = () => {
      if (c === "list" && P.length > 1)
        ke((or) => (or - 1 + P.length) % P.length);
    }),
      (Gt = () => {
        if (c === "list" && P.length > 1) ke((sr) => (sr + 1) % P.length);
      }),
      (h[20] = P.length),
      (h[21] = c),
      (h[22] = jt),
      (h[23] = Gt));
  else ((jt = h[22]), (Gt = h[23]));
  let Vt;
  if (h[24] !== c)
    ((Vt = () => {
      if (c === "detail") Qe("list");
    }),
      (h[24] = c),
      (h[25] = Vt));
  else Vt = h[25];
  let Lt;
  if (h[26] !== g || h[27] !== c)
    ((Lt = () => {
      if (c === "list" && g) Qe("detail");
    }),
      (h[26] = g),
      (h[27] = c),
      (h[28] = Lt));
  else Lt = h[28];
  let qt;
  if (h[29] !== v || h[30] !== c)
    ((qt = () => {
      if (c === "detail") {
        return v("up");
      }
      Ye(fn);
    }),
      (h[29] = v),
      (h[30] = c),
      (h[31] = qt));
  else qt = h[31];
  let Jt;
  if (h[32] !== a.files.length || h[33] !== v || h[34] !== c)
    ((Jt = () => {
      if (c === "detail") {
        return v("down");
      }
      Ye((lr) => Math.min(a.files.length - 1, lr + 1));
    }),
      (h[32] = a.files.length),
      (h[33] = v),
      (h[34] = c),
      (h[35] = Jt));
  else Jt = h[35];
  let Qt, Yt, Zt, Kt, Xt, _t;
  if (h[36] !== v)
    ((Qt = () => v("pageUp")),
      (Yt = () => v("pageDown")),
      (Zt = () => v("fullPageUp")),
      (Kt = () => v("fullPageDown")),
      (Xt = () => v("top")),
      (_t = () => v("bottom")),
      (h[36] = v),
      (h[37] = Qt),
      (h[38] = Yt),
      (h[39] = Zt),
      (h[40] = Kt),
      (h[41] = Xt),
      (h[42] = _t));
  else
    ((Qt = h[37]),
      (Yt = h[38]),
      (Zt = h[39]),
      (Kt = h[40]),
      (Xt = h[41]),
      (_t = h[42]));
  let en;
  if (h[43] === MEMO_CACHE_SENTINEL) ((en = { context: "DiffDialog" }), (h[43] = en));
  else en = h[43];
  useKeybindings(
    {
      "diff:dismiss": se,
      "diff:previousSource": jt,
      "diff:nextSource": Gt,
      "diff:back": Vt,
      "diff:viewDetails": Lt,
      "diff:previousFile": qt,
      "diff:nextFile": Jt,
      "scroll:pageUp": Qt,
      "scroll:pageDown": Yt,
      "scroll:fullPageUp": Zt,
      "scroll:fullPageDown": Kt,
      "scroll:top": Xt,
      "scroll:bottom": _t,
    },
    en,
  );
  let tn;
  if (h[44] !== a.stats)
    ((tn = a.stats
      ? r(t, {
          dimColor: !0,
          children: [
            a.stats.filesCount,
            " ",
            x(a.stats.filesCount, "file"),
            " ",
            "changed",
            " ",
            e(Wm, { added: a.stats.linesAdded, removed: a.stats.linesRemoved }),
          ],
        })
      : null),
      (h[44] = a.stats),
      (h[45] = tn));
  else tn = h[45];
  let _e = tn,
    nn = !O && a.noCommits === !0,
    ar = !O && a.source.kind === "branch",
    et = O
      ? `Turn ${O.turnIndex}`
      : nn
        ? "Staged and new files"
        : ar
          ? "Branch changes"
          : "Uncommitted changes",
    we = O
      ? O.userPromptPreview
        ? `"${O.userPromptPreview}"`
        : ""
      : nn
        ? "(no commits yet)"
        : a.source.kind === "branch"
          ? `(vs ${a.source.baseBranch})`
          : "(git diff HEAD)",
    me;
  bb0: {
    if (O) {
      me = "No file changes in this turn";
      break bb0;
    }
    if (Ft) {
      me = Ft;
      break bb0;
    }
    if (a.stats && a.stats.filesCount > 0 && a.files.length === 0) {
      me = "Too many files to display details";
      break bb0;
    }
    me = "No changes yet";
  }
  let tt = me,
    ve;
  if (h[46] !== we)
    ((ve = we && r(t, { dimColor: !0, children: [" ", we] })),
      (h[46] = we),
      (h[47] = ve));
  else ve = h[47];
  let rn;
  if (h[48] !== et || h[49] !== ve)
    ((rn = r(t, { children: [et, ve] })),
      (h[48] = et),
      (h[49] = ve),
      (h[50] = rn));
  else rn = h[50];
  let nt = rn;
  function se() {
    if (c === "detail") Qe("list");
    else rr("Diff dialog dismissed", { display: "system" });
  }
  let Re;
  if (
    h[51] !== a.files ||
    h[52] !== a.loading ||
    h[53] !== tt ||
    h[54] !== g?.isBinary ||
    h[55] !== g?.isLargeFile ||
    h[56] !== g?.isRestricted ||
    h[57] !== g?.isTruncated ||
    h[58] !== g?.isUntracked ||
    h[59] !== g?.path ||
    h[60] !== Ke ||
    h[61] !== be ||
    h[62] !== c
  )
    ((Re =
      a.files.length === 0
        ? a.loading
          ? e(SpinnerMessageLine, { message: "Loading diff\u2026", dimColor: !0 })
          : e(t, { dimColor: !0, children: tt })
        : c === "list"
          ? e(o, {
              flexDirection: "column",
              children: e(fe, { files: a.files, selectedIndex: be }),
            })
          : e(o, {
              flexDirection: "column",
              children: e($ae, {
                filePath: g?.path || "",
                hunks: Ke,
                isLargeFile: g?.isLargeFile,
                isBinary: g?.isBinary,
                isTruncated: g?.isTruncated,
                isUntracked: g?.isUntracked,
                isRestricted: g?.isRestricted,
              }),
            })),
      (h[51] = a.files),
      (h[52] = a.loading),
      (h[53] = tt),
      (h[54] = g?.isBinary),
      (h[55] = g?.isLargeFile),
      (h[56] = g?.isRestricted),
      (h[57] = g?.isTruncated),
      (h[58] = g?.isUntracked),
      (h[59] = g?.path),
      (h[60] = Ke),
      (h[61] = be),
      (h[62] = c),
      (h[63] = Re));
  else Re = h[63];
  let on;
  if (h[64] !== _e || h[65] !== Re)
    ((on = r(o, { flexDirection: "column", gap: 1, children: [_e, Re] })),
      (h[64] = _e),
      (h[65] = Re),
      (h[66] = on));
  else on = h[66];
  let rt = on;
  const dr = se;
  let Ce;
  if (h[67] !== P.length || h[68] !== c)
    ((Ce =
      c === "list"
        ? r(DotSeparatedList, {
            children: [
              P.length > 1 &&
                e(KeybindingHint, { chord: ["left", "right"], action: "switch source" }),
              e(KeybindingHint, { chord: ["up", "down"], action: "select" }),
              e(KeybindingHint, { chord: "enter", action: "view" }),
              e(ActionKeybindingHint, {
                action: "diff:dismiss",
                context: "DiffDialog",
                fallback: "Esc",
                description: "close",
              }),
            ],
          })
        : r(DotSeparatedList, {
            children: [
              e(KeybindingHint, { chord: ["up", "down"], action: "scroll" }),
              e(ActionKeybindingHint, {
                action: "diff:dismiss",
                context: "DiffDialog",
                fallback: "Esc",
                description: "back",
              }),
            ],
          })),
      (h[67] = P.length),
      (h[68] = c),
      (h[69] = Ce));
  else Ce = h[69];
  const it = P.length <= 1,
    ot = String(B);
  let sn;
  if (h[70] === MEMO_CACHE_SENTINEL) ((sn = (ur) => ke(Number(ur))), (h[70] = sn));
  else sn = h[70];
  const st = c === "detail";
  let Fe;
  if (h[71] !== rt || h[72] !== P)
    ((Fe = P.map((ln, an) =>
      e(
        ss,
        {
          id: String(an),
          title: ln.type === "current" ? "Current" : `T${ln.turn.turnIndex}`,
          children: rt,
        },
        an,
      ),
    )),
      (h[71] = rt),
      (h[72] = P),
      (h[73] = Fe));
  else Fe = h[73];
  let Me;
  if (h[74] !== it || h[75] !== ot || h[76] !== st || h[77] !== Fe)
    ((Me = e(qp, {
      title: null,
      hidden: it,
      selectedTab: ot,
      onTabChange: sn,
      disableNavigation: st,
      children: Fe,
    })),
      (h[74] = it),
      (h[75] = ot),
      (h[76] = st),
      (h[77] = Fe),
      (h[78] = Me));
  else Me = h[78];
  let dn;
  if (h[79] !== se || h[80] !== Ce || h[81] !== Me || h[82] !== nt)
    ((dn = e(de, {
      title: nt,
      onCancel: dr,
      color: "background",
      inputGuide: Ce,
      children: Me,
    })),
      (h[79] = se),
      (h[80] = Ce),
      (h[81] = Me),
      (h[82] = nt),
      (h[83] = dn));
  else dn = h[83];
  return dn;
}
export { DiffDialog };

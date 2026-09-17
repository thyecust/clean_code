// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { An, jf } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { j1, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getLogDisplayTitle } from "../../01-核心基础设施/提示词-SystemPrompt/chunk-27ncq5fr.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { ARTIFACT_MARKER_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { useVirtualScrollViewportSize } from "../../01-核心基础设施/UI组件-TUI/virtual-scroll-viewport-state.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../键位绑定-Keybindings/keybinding-hooks.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { jo } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { getBranch } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { getStringWidth, truncateToWidth, formatRelativeTimeAgo, formatLogMetadata } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { listGitWorktrees } from "./chunk-mkmy4cx2.js";
import { Fuse } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { applyForegroundColor } from "../状态栏-主题/chunk-jz6b76hr.js";
import { useResolvedTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { useTerminalFocus } from "../../01-核心基础设施/终端与时钟/clock-and-terminal-focus.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../键位绑定-Keybindings/exit-keybinding-hooks.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { useVimModeInput, SearchInput } from "../Vim模式/Vim模式.nnewe0gf.js";
import {
  PR_URL_REGEX,
  parsePrUrl,
  dropApiInvalidAssistantBlocks,
  dropRetractedMessages,
  getBuiltinToolDefinitions,
  getFirstMeaningfulUserMessageTextContent,
  saveCustomTitle,
  getSessionIdFromLog,
  isLiteLog,
  loadFullLog,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useSession } from "../../01-核心基础设施/核心工具-未归类/session-context.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { WelcomeChrome, ConversationMessageList } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { EmptyStateMessage } from "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/UI组件-TUI/spinner-message-line.js";
import { WA, Qr } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { ActionKeybindingHint } from "../键位绑定-Keybindings/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, L9, E, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
import { basename, sep as fn } from "path";
F();
F();
function pt(mo) {
  let R = _(36),
    { log: z, onExit: ho, onSelect: Ht } = mo,
    [Ue, Qn] = d(null),
    { storageV5: at } = useStorageV5Context(),
    Gn,
    Kn;
  if (R[0] !== z || R[1] !== at)
    ((Gn = () => {
      if ((Qn(null), isLiteLog(z))) loadFullLog(z, { storageV5: at }).then(Qn);
    }),
      (Kn = [z, at]),
      (R[0] = z),
      (R[1] = at),
      (R[2] = Gn),
      (R[3] = Kn));
  else ((Gn = R[2]), (Kn = R[3]));
  E(Gn, Kn);
  let go = isLiteLog(z) && Ue === null,
    j = Ue ?? z,
    qn;
  if (R[4] !== j.messages)
    ((qn = dropApiInvalidAssistantBlocks(dropRetractedMessages(j.messages), { site: "preview" })),
      (R[4] = j.messages),
      (R[5] = qn));
  else qn = R[5];
  let Ut = qn,
    zn;
  if (R[6] !== j) ((zn = getSessionIdFromLog(j) || ""), (R[6] = j), (R[7] = zn));
  else zn = R[7];
  let At = zn,
    Vn;
  if (R[8] === MEMO_CACHE_SENTINEL) ((Vn = getBuiltinToolDefinitions()), (R[8] = Vn));
  else Vn = R[8];
  let bo = Vn,
    Xn;
  if (R[9] === MEMO_CACHE_SENTINEL) ((Xn = { context: "Confirmation" }), (R[9] = Xn));
  else Xn = R[9];
  useKeybinding("confirm:no", ho, Xn);
  let Yn;
  if (R[10] !== Ue || R[11] !== z || R[12] !== Ht)
    ((Yn = () => {
      Ht(Ue ?? z);
    }),
      (R[10] = Ue),
      (R[11] = z),
      (R[12] = Ht),
      (R[13] = Yn));
  else Yn = R[13];
  let yo = Yn,
    Zn;
  if (R[14] === MEMO_CACHE_SENTINEL) ((Zn = { context: "Confirmation" }), (R[14] = Zn));
  else Zn = R[14];
  if ((useKeybinding("confirm:yes", yo, Zn), go)) {
    let Ae;
    if (R[15] === MEMO_CACHE_SENTINEL)
      ((Ae = e(SpinnerMessageLine, { message: "Loading session\u2026" })), (R[15] = Ae));
    else Ae = R[15];
    let fe;
    if (R[16] === MEMO_CACHE_SENTINEL)
      ((fe = r(Box, {
        flexDirection: "column",
        padding: 1,
        children: [
          Ae,
          e(Text, {
            dimColor: !0,
            children: e(DotSeparatedList, {
              children: e(ActionKeybindingHint, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            }),
          }),
        ],
      })),
        (R[16] = fe));
    else fe = R[16];
    return fe;
  }
  let Ae;
  if (R[17] === MEMO_CACHE_SENTINEL) ((Ae = e(WelcomeChrome, { latchAnnouncementSlot: !1 })), (R[17] = Ae));
  else Ae = R[17];
  let fe;
  if (R[18] !== At || R[19] !== Ut)
    ((fe = { kind: "static", messages: Ut, conversationId: At }),
      (R[18] = At),
      (R[19] = Ut),
      (R[20] = fe));
  else fe = R[20];
  let Jn;
  if (R[21] === MEMO_CACHE_SENTINEL) ((Jn = []), (R[21] = Jn));
  else Jn = R[21];
  let ct;
  if (R[22] !== fe)
    ((ct = e(ConversationMessageList, {
      source: fe,
      tools: bo,
      commands: Jn,
      screen: "transcript",
      history: "all",
    })),
      (R[22] = fe),
      (R[23] = ct));
  else ct = R[23];
  let lt;
  if (R[24] !== j.modified)
    ((lt = formatRelativeTimeAgo(j.modified)), (R[24] = j.modified), (R[25] = lt));
  else lt = R[25];
  const Qt = j.gitBranch ? ` \xB7 ${j.gitBranch}` : "";
  let ut;
  if (R[26] !== j.messageCount || R[27] !== lt || R[28] !== Qt)
    ((ut = r(Text, {
      children: [lt, " \xB7", " ", j.messageCount, " messages", Qt],
    })),
      (R[26] = j.messageCount),
      (R[27] = lt),
      (R[28] = Qt),
      (R[29] = ut));
  else ut = R[29];
  let er;
  if (R[30] === MEMO_CACHE_SENTINEL)
    ((er = e(Text, {
      dimColor: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: "enter", action: "resume" }),
          e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
        ],
      }),
    })),
      (R[30] = er));
  else er = R[30];
  let dt;
  if (R[31] !== ut)
    ((dt = r(Box, {
      flexShrink: 0,
      flexDirection: "column",
      borderTopDimColor: !0,
      borderBottom: !1,
      borderLeft: !1,
      borderRight: !1,
      borderStyle: "single",
      paddingLeft: 2,
      children: [ut, er],
    })),
      (R[31] = ut),
      (R[32] = dt));
  else dt = R[32];
  let tr;
  if (R[33] !== ct || R[34] !== dt)
    ((tr = r(Box, { flexDirection: "column", children: [Ae, ct, dt] })),
      (R[33] = ct),
      (R[34] = dt),
      (R[35] = tr));
  else tr = R[35];
  return tr;
}
F();
function Pr(Ho) {
  return Ho ? "\u25BC " : "\u25B6 ";
}
function kr(_depth) {
  return "  \u25B8 ";
}
function xt(Eo) {
  let H = _(48),
    {
      nodes: Gt,
      onSelect: Kt,
      onCancel: qt,
      onFocus: ce,
      focusNodeId: ne,
      visibleOptionCount: zt,
      layout: nr,
      isDisabled: rr,
      hideIndexes: or,
      isNodeExpanded: ft,
      onExpand: mt,
      onCollapse: ht,
      getParentPrefix: Lo,
      getChildPrefix: Do,
      onUpFromFirstItem: Vt,
    } = Eo,
    Xt = nr === void 0 ? "expanded" : nr,
    Ie = rr === void 0 ? !1 : rr,
    Yt = or === void 0 ? !1 : or,
    sr;
  if (H[0] === MEMO_CACHE_SENTINEL) ((sr = new Set()), (H[0] = sr));
  else sr = H[0];
  let [Zt, ir] = d(sr),
    Jt = C(!1),
    ar = C(null),
    cr;
  if (H[1] !== Zt || H[2] !== ft)
    ((cr = (lr) => {
      if (ft) {
        return ft(lr);
      }
      return Zt.has(lr);
    }),
      (H[1] = Zt),
      (H[2] = ft),
      (H[3] = cr));
  else cr = H[3];
  let en = cr,
    tn;
  if (H[4] !== en || H[5] !== Gt) {
    tn = [];
    function gt(me, ur, Po) {
      let dr = !!me.children && me.children.length > 0;
      let pr = en(me.id);
      if (
        (tn.push({
          node: me,
          depth: ur,
          isExpanded: pr,
          hasChildren: dr,
          parentId: Po,
        }),
        dr && pr && me.children)
      ) {
        for (const ko of me.children) gt(ko, ur + 1, me.id);
      }
    }
    for (const Ro of Gt) gt(Ro, 0);
    ((H[4] = en), (H[5] = Gt), (H[6] = tn));
  } else tn = H[6];
  let oe = tn,
    Io = Pr,
    Mo = kr,
    nn = Lo ?? Io,
    rn = Do ?? Mo,
    fr;
  if (H[7] !== rn || H[8] !== nn)
    ((fr = (Qe) => {
      let on = "";
      if (Qe.hasChildren) on = nn(Qe.isExpanded);
      else if (Qe.depth > 0) on = rn(Qe.depth);
      return on + Qe.node.label;
    }),
      (H[7] = rn),
      (H[8] = nn),
      (H[9] = fr));
  else fr = H[9];
  let sn = fr,
    mr;
  if (H[10] !== sn || H[11] !== oe)
    ((mr = oe.map((bt) => ({
      label: sn(bt),
      description: bt.node.description,
      dimDescription: bt.node.dimDescription ?? !0,
      value: bt.node.id,
    }))),
      (H[10] = sn),
      (H[11] = oe),
      (H[12] = mr));
  else mr = H[12];
  let an = mr,
    hr;
  if (H[13] !== oe) {
    let gr = new Map();
    hr = (oe.forEach((br) => gr.set(br.node.id, br.node)), gr);
    ((H[13] = oe), (H[14] = hr));
  } else hr = H[14];
  let se = hr,
    yr;
  if (H[15] !== oe)
    ((yr = (Oo) => oe.find((No) => No.node.id === Oo)),
      (H[15] = oe),
      (H[16] = yr));
  else yr = H[16];
  let Me = yr,
    xr;
  if (H[17] !== Me || H[18] !== ht || H[19] !== mt)
    ((xr = (Ge, Fo) => {
      let Sr = Me(Ge);
      if (!Sr || !Sr.hasChildren) {
        return;
      }
      if (Fo) {
        if (mt) mt(Ge);
        else ir((Bo) => new Set(Bo).add(Ge));
      } else if (ht) ht(Ge);
      else
        ir(($o) => {
          let Tr = new Set($o);
          return (Tr.delete(Ge), Tr);
        });
    }),
      (H[17] = Me),
      (H[18] = ht),
      (H[19] = mt),
      (H[20] = xr));
  else xr = H[20];
  let Ke = xr,
    Cr;
  if (
    H[21] !== Me ||
    H[22] !== ne ||
    H[23] !== Ie ||
    H[24] !== se ||
    H[25] !== ce ||
    H[26] !== Ke
  )
    ((Cr = (qe) => {
      if (!ne || Ie) {
        return;
      }
      let ge = Me(ne);
      if (!ge) {
        return;
      }
      if (qe.key === "right" && ge.hasChildren)
        (qe.preventDefault(), Ke(ne, !0));
      else if (qe.key === "left") {
        if (ge.hasChildren && ge.isExpanded) (qe.preventDefault(), Ke(ne, !1));
        else if (ge.parentId !== void 0) {
          if (
            (qe.preventDefault(), (Jt.current = !0), Ke(ge.parentId, !1), ce)
          ) {
            let wr = se.get(ge.parentId);
            if (wr) ce(wr);
          }
        }
      }
    }),
      (H[21] = Me),
      (H[22] = ne),
      (H[23] = Ie),
      (H[24] = se),
      (H[25] = ce),
      (H[26] = Ke),
      (H[27] = Cr));
  else Cr = H[27];
  let cn = Cr,
    vr;
  if (H[28] !== se || H[29] !== Kt)
    ((vr = (Wo) => {
      let _r = se.get(Wo);
      if (!_r) {
        return;
      }
      Kt(_r);
    }),
      (H[28] = se),
      (H[29] = Kt),
      (H[30] = vr));
  else vr = H[30];
  let ln = vr,
    Er;
  if (H[31] !== se || H[32] !== ce)
    ((Er = (un) => {
      if (Jt.current) {
        Jt.current = !1;
        return;
      }
      if (ar.current === un) {
        return;
      }
      if (((ar.current = un), ce)) {
        let Lr = se.get(un);
        if (Lr) ce(Lr);
      }
    }),
      (H[31] = se),
      (H[32] = ce),
      (H[33] = Er));
  else Er = H[33];
  let dn = Er,
    yt;
  if (
    H[34] !== ne ||
    H[35] !== ln ||
    H[36] !== dn ||
    H[37] !== Yt ||
    H[38] !== Ie ||
    H[39] !== Xt ||
    H[40] !== qt ||
    H[41] !== Vt ||
    H[42] !== an ||
    H[43] !== zt
  )
    ((yt = e(Select, {
      options: an,
      onChange: ln,
      onFocus: dn,
      onCancel: qt,
      defaultFocusValue: ne,
      visibleOptionCount: zt,
      layout: Xt,
      isDisabled: Ie,
      hideIndexes: Yt,
      onUpFromFirstItem: Vt,
    })),
      (H[34] = ne),
      (H[35] = ln),
      (H[36] = dn),
      (H[37] = Yt),
      (H[38] = Ie),
      (H[39] = Xt),
      (H[40] = qt),
      (H[41] = Vt),
      (H[42] = an),
      (H[43] = zt),
      (H[44] = yt));
  else yt = H[44];
  let Dr;
  if (H[45] !== cn || H[46] !== yt)
    ((Dr = e(Box, { tabIndex: 0, autoFocus: !0, onKeyDown: cn, children: yt })),
      (H[45] = cn),
      (H[46] = yt),
      (H[47] = Dr));
  else Dr = H[47];
  return Dr;
}
function Rr(s, u) {
  let l = s.replace(/\s+/g, " ").trim();
  return truncateToWidth(l, u);
}
var Ir = 2,
  Mr = 4,
  Or = 2000,
  mn = 1000,
  gn = 50000,
  Nr = 0.3,
  Fr = 60000,
  Br = 50,
  $r = 5;
function bn({ before: s, match: u, after: l }, f) {
  return chalk.dim(s) + f(u) + chalk.dim(l);
}
function Wr(s) {
  return s.replace(new RegExp(PR_URL_REGEX.source + '[^,\\s"]*', "g"), (u) => {
    let l = parsePrUrl(u);
    return l ? `PR #${l.prNumber} ${l.prRepository}` : u;
  });
}
function jr(s, u, l) {
  let f = s.toLowerCase().indexOf(u.toLowerCase());
  if (f === -1) return null;
  let h = f + u.length,
    T = Math.max(0, f - l),
    S = Math.min(s.length, h + l),
    x = s.slice(T, f),
    O = s.slice(f, h),
    I = s.slice(h, S);
  return {
    before: (T > 0 ? "\u2026" : "") + x.replace(/\s+/g, " ").trimStart(),
    match: O.trim(),
    after: I.replace(/\s+/g, " ").trimEnd() + (S < s.length ? "\u2026" : ""),
  };
}
function St(s, u, l) {
  let { isGroupHeader: f = !1, isChild: h = !1, forkCount: T = 0 } = l || {},
    S = f && T > 0 ? Ir : h ? Mr : 0,
    x = f && T > 0 ? ` (+${T} other ${T === 1 ? "session" : "sessions"})` : "",
    O = s.isSidechain ? " (sidechain)" : "",
    I =
      s.artifactCount !== void 0 && s.artifactCount > 0
        ? `  ${ARTIFACT_MARKER_GLYPH} ${s.artifactCount}`
        : "",
    w = u - S - O.length - x.length - getStringWidth(I);
  return `${Rr(getLogDisplayTitle(s), w)}${O}${x}${I}`;
}
function Tt(s, u) {
  let { isChild: l = !1, showProjectPath: f = !1 } = u || {},
    h = l ? "    " : "",
    T = formatLogMetadata(s),
    S = f && s.projectPath ? ` \xB7 ${s.projectPath}` : "";
  return h + T + S;
}
function SessionLogPicker({
  logs: s,
  maxHeight: u = 1 / 0,
  forceWidth: l,
  onCancel: f,
  onSelect: h,
  onLogsChanged: T,
  onLoadMore: S,
  initialSearchQuery: x,
  isLoading: O = !1,
  reloadGeneration: I = 0,
  showAllProjects: w = !1,
  onToggleAllProjects: N,
}) {
  let { storageV5: ze } = useStorageV5Context(),
    Ve = useVirtualScrollViewportSize(useTerminalSize()),
    Ze = l === void 0 ? Ve.columns : l,
    be = useGlobalExitKeybinding(f),
    Oe = useTerminalFocus(),
    X = useClock(),
    Je = !1,
    ye = useResolvedTheme(),
    Q = V(() => (n) => applyForegroundColor(n, ye.warning), [ye.warning]),
    [Y, et] = d(null),
    [G, Fe] = d(!0),
    [Z, tt] = d(!1),
    [K, Be] = d(!1),
    [xe, nt] = d(null),
    [Te, rt] = d(null),
    [c, g] = d([]),
    [L, q] = d(!1),
    le = useSession(),
    [U] = d(() => le.project.originalCwd),
    de = useSession((n) => n.id),
    [Ce, we] = d(""),
    [yn, xn] = d(0),
    [Ct, wt] = d(new Set()),
    [_t, Sn] = d(null),
    [Ee, Tn] = d(1),
    [v, B] = d(x ? "search" : "list"),
    [Et, Lt] = d(null),
    {
      query: Le,
      setQuery: ot,
      cursorOffset: Cn,
      handleKeyDown: wn,
      handlePaste: vn,
    } = useVimModeInput({
      isActive: v === "search",
      onExit: () => {
        (B("list"), logEvent("tengu_session_search_toggled", { enabled: !1 }));
      },
      onExitUp: () => {
        (B("list"), logEvent("tengu_session_search_toggled", { enabled: !1 }));
      },
      passthroughCtrlKeys: s.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: x || "",
    }),
    $e = Wr(Le),
    De = L9($e),
    [J, Dt] = d("");
  E(() => {
    if (!De) {
      Dt("");
      return;
    }
    return X.setTimeout(() => Dt(De), 300);
  }, [De, X]);
  let [Pe, st] = d(null),
    Pt = !1;
  E(() => {
    getBranch().then((a) => et(a));
    let n = Date.now();
    listGitWorktrees(U)
      .then((a) => {
        (logEvent("tengu_worktree_detection", {
          duration_ms: Date.now() - n,
          worktree_count: a.length,
          success: !0,
        }),
          Be(a.length > 1),
          g(a),
          nt(a[0] ?? null));
        let b = a.filter((m) => U === m || U.startsWith(m + fn));
        (b.sort((m, k) => k.length - m.length), rt(b[0] ?? null), q(!0));
      })
      .catch(() => {
        (logEvent("tengu_worktree_detection", {
          duration_ms: Date.now() - n,
          worktree_count: 0,
          success: !1,
        }),
          q(!0));
      });
  }, [U]);
  let kt = V(() => new Map(s.map((n) => [n, Ur(n)])), [s]),
    Rt = V(() => null, [s, kt, !1]),
    ke = V(() => {
      let n = s.filter((a) => {
        let b = getSessionIdFromLog(a);
        if (de && b === de) return !0;
        if (a.customTitle ?? a.aiTitle) return !0;
        if (getFirstMeaningfulUserMessageTextContent(a.messages)) return !0;
        if (a.firstPrompt || a.customTitle || a.aiTitle) return !0;
        return !1;
      });
      if (!G && Y) n = n.filter((a) => a.gitBranch === Y);
      if (K && !Z && !w) {
        let a = Te ?? U;
        n = n.filter((b) => {
          if (b.isAlias) return !0;
          let m = b.projectPath;
          if (m === void 0) return !1;
          let k = null;
          for (let y of c)
            if (m === y || m.startsWith(y + fn)) {
              if (k === null || y.length > k.length) k = y;
            }
          if (k === null) return m === a;
          return k === a;
        });
      }
      return n;
    }, [s, de, G, Y, K, Z, w, U, Te, c]),
    It = V(() => {
      if (!$e) return ke;
      let n = $e.toLowerCase();
      return ke.filter((a) => {
        let b = getLogDisplayTitle(a).toLowerCase(),
          m = (a.gitBranch || "").toLowerCase(),
          k = (a.tag || "").toLowerCase(),
          y = a.prNumber
            ? `pr #${a.prNumber} ${a.prRepository || ""}`.toLowerCase()
            : "";
        return b.includes(n) || m.includes(n) || k.includes(n) || y.includes(n);
      });
    }, [ke, $e]);
  E(() => {
    st(null);
    return;
  }, [J, De, Rt, !1, X]);
  let { filteredLogs: W, snippets: it } = V(() => {
      let n = new Map(),
        a = It;
      if (Pe && J && Pe.query === J) {
        for (let y of Pe.results)
          if (y.searchableText) {
            let ae = jr(y.searchableText, J, Br);
            if (ae) n.set(y.log, ae);
          }
        let b = new Set(a.map((y) => y.messages[0]?.uuid)),
          m = new Set(ke),
          k = Pe.results
            .map((y) => y.log)
            .filter((y) => !b.has(y.messages[0]?.uuid) && m.has(y));
        a = [...a, ...k];
      }
      return { filteredLogs: a, snippets: n };
    }, [It, Pe, J, ke]),
    Mt = Ze - 2 * WA,
    We = Math.max(30, Mt - 4),
    _n = V(() => {
      let n = Ar(W);
      return Array.from(n.entries()).map(([a, b]) => {
        let m = b[0],
          k = W.indexOf(m),
          y = it.get(m),
          ae = y ? bn(y, Q) : null;
        if (b.length === 1) {
          let ee = Tt(m, { showProjectPath: w });
          return {
            id: `log:${a}:0`,
            value: { log: m, indexInFiltered: k },
            label: St(m, We),
            description: ae
              ? `${ee}
  ${ae}`
              : ee,
            dimDescription: !0,
          };
        }
        let Wn = b.length - 1,
          jn = b.slice(1).map((ee, Hn) => {
            let Un = W.indexOf(ee),
              $t = it.get(ee),
              Wt = $t ? bn($t, Q) : null,
              jt = Tt(ee, { isChild: !0, showProjectPath: w });
            return {
              id: `log:${a}:${Hn + 1}`,
              value: { log: ee, indexInFiltered: Un },
              label: St(ee, We, { isChild: !0 }),
              description: Wt
                ? `${jt}
      ${Wt}`
                : jt,
              dimDescription: !0,
            };
          }),
          Bt = Tt(m, { showProjectPath: w });
        return {
          id: `group:${a}`,
          value: { log: m, indexInFiltered: k },
          label: St(m, We, { isGroupHeader: !0, forkCount: Wn }),
          description: ae
            ? `${Bt}
  ${ae}`
            : Bt,
          dimDescription: !0,
          children: jn,
        };
      });
    }, [W, We, w, it, Q]),
    M = _t?.value.log ?? null,
    En = () => {
      if (!M) return "";
      let n = getSessionIdFromLog(M);
      if (!n) return "";
      let a = W.filter((y) => getSessionIdFromLog(y) === n);
      if (!(a.length > 1)) return "";
      let m = Ct.has(n);
      if (a.indexOf(M) > 0 || m)
        return e(KeybindingHint, { chord: "left", action: "collapse" });
      return e(KeybindingHint, { chord: "right", action: "expand" });
    },
    Ln = async () => {
      let n = M ? getSessionIdFromLog(M) : void 0;
      if (!M || !n) {
        (B("list"), we(""));
        return;
      }
      if (Ce.trim()) {
        if ((await saveCustomTitle(n, Ce.trim(), M.fullPath, "user", ze), T)) T();
      }
      (B("list"), we(""));
    },
    Dn = () => {
      (B("list"), ot(""), logEvent("tengu_session_search_toggled", { enabled: !1 }));
    },
    Pn = () => {
      (B("search"), logEvent("tengu_session_search_toggled", { enabled: !0 }));
    };
  E(() => {
    if (I === 0) return;
    st(null);
  }, [I]);
  let kn = (n) => {
    Sn(n);
    let a = W.findIndex((b) => getSessionIdFromLog(b) === getSessionIdFromLog(n.value.log));
    if (a >= 0) Tn(a + 1);
  };
  useKeybinding(
    "confirm:no",
    () => {
      (B("list"), we(""));
    },
    { context: "Settings", isActive: v === "rename" },
  );
  function In(n) {
    if (v === "preview") return;
    if (v === "rename");
    else if (v === "search") {
      if ((wn(n), n.ctrl && n.key === "n")) (n.preventDefault(), Dn());
      else if (n.ctrl && n.key === "a" && N && s.length === 0)
        (n.preventDefault(),
          N(),
          logEvent("tengu_session_all_projects_toggled", { enabled: w }));
    } else {
      if (
        W.length === 0 &&
        (n.key === "up" || n.key === "down" || n.key === "return")
      ) {
        (n.preventDefault(), B("search"));
        return;
      }
      let a = !n.ctrl && !n.meta,
        b = n.key.toLowerCase();
      if (n.ctrl && n.key === "a" && N)
        (n.preventDefault(),
          N(),
          logEvent("tengu_session_all_projects_toggled", { enabled: w }));
      else if (n.ctrl && n.key === "b") {
        n.preventDefault();
        let m = !G;
        (Fe(m), logEvent("tengu_session_branch_filter_toggled", { enabled: !m }));
      } else if (n.ctrl && n.key === "w" && K) {
        n.preventDefault();
        let m = !Z;
        (tt(m), logEvent("tengu_session_worktree_filter_toggled", { enabled: !m }));
      } else if (b === "/" && a)
        (n.preventDefault(),
          B("search"),
          logEvent("tengu_session_search_toggled", { enabled: !0 }));
      else if (n.ctrl && n.key === "r" && M)
        (n.preventDefault(),
          B("rename"),
          we(""),
          logEvent("tengu_session_rename_started", {}));
      else if (((n.key === " " && a) || (n.ctrl && n.key === "v")) && M)
        (n.preventDefault(),
          Lt(M),
          B("preview"),
          logEvent("tengu_session_preview_opened", { messageCount: M.messageCount }));
      else if (!n.defaultPrevented && a && n.key.length === 1 && n.key !== " ")
        (n.preventDefault(),
          B("search"),
          ot(n.key),
          logEvent("tengu_session_search_toggled", { enabled: !0 }));
    }
  }
  function Mn(n) {
    if (v === "search") {
      vn(n);
      return;
    }
    let a = (n.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (v === "preview" || v === "rename" || !M || !a) return;
    (n.preventDefault(),
      B("search"),
      ot(a),
      logEvent("tengu_session_search_toggled", { enabled: !0 }));
  }
  let pe = [],
    Ot = !!N && !w && L,
    Nt = xe ?? U;
  if (Ot) pe.push(basename(Nt));
  if (!G && Y) pe.push(Y);
  if (K && !Z && !w) {
    let n = Te ?? U;
    if (!(Ot && Nt === n)) pe.push(basename(n));
  }
  let On = !!N && !w && !L,
    Ft = (pe.length > 0 || On) && v !== "search",
    Nn = 8 + (Ft ? 1 : 0),
    Fn = 2,
    Re = Math.max(1, Math.floor((u - Nn - Fn) / 3)),
    Bn = s.length,
    He = C({ focusedIndex: -1, visible: -1, empty: 0 });
  if (
    (E(() => {
      if (!S) return;
      let n = He.current;
      if (n.focusedIndex !== Ee || n.visible !== W.length)
        He.current = { focusedIndex: Ee, visible: W.length, empty: 0 };
      let a = Re * 2;
      if (Ee + a >= W.length && He.current.empty < $r)
        (He.current.empty++, S(Re * 3));
    }, [Ee, Re, W.length, Bn, S]),
    s.length === 0 && !N)
  )
    return null;
  if (v === "preview" && Et)
    return e(pt, {
      log: Et,
      onExit: () => {
        (B("list"), Lt(null));
      },
      onSelect: h,
    });
  return e(Box, {
    flexDirection: "column",
    height: u - 1,
    onKeyDown: In,
    onPaste: Mn,
    children: r(Qr, {
      color: "suggestion",
      children: [
        e(Box, {
          flexShrink: 0,
          children: r(Text, {
            bold: !0,
            color: "suggestion",
            children: [
              "Resume session",
              v === "list" &&
                W.length > Re &&
                r(Text, {
                  dimColor: !0,
                  children: [" ", "(", Ee, " of ", W.length, ")"],
                }),
              O && e(Text, { dimColor: !0, children: " \xB7 Refreshing\u2026" }),
            ],
          }),
        }),
        e(SearchInput, {
          query: Le,
          isFocused: v === "search",
          isTerminalFocused: Oe,
          cursorOffset: Cn,
        }),
        Ft &&
          (pe.length > 0
            ? e(Box, {
                flexShrink: 0,
                paddingLeft: 2,
                children: e(Text, {
                  dimColor: !0,
                  children: e(DotSeparatedList, { children: pe }),
                }),
              })
            : e(Box, { flexShrink: 0, height: 1 })),
        e(Box, { flexShrink: 0, children: e(Text, { children: " " }) }),
        (v === "search" || v === "list") &&
          Boolean(Le.trim()) &&
          W.length === 0 &&
          !Pt &&
          !O &&
          e(Box, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: r(EmptyStateMessage, { children: ['No sessions match "', Le, '".'] }),
          }),
        s.length === 0 &&
          v === "list" &&
          !O &&
          !Le.trim() &&
          e(Box, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: e(EmptyStateMessage, {
              hint: w
                ? void 0
                : e(KeybindingHint, {
                    chord: "ctrl+a",
                    action: "show all projects",
                    format: { modCase: "title", charCase: "upper" },
                  }),
              children: w
                ? "No conversations found."
                : "No conversations found in this project.",
            }),
          }),
        v === "rename" && M
          ? r(Box, {
              paddingLeft: 2,
              flexDirection: "column",
              children: [
                e(Text, { bold: !0, children: "Rename session:" }),
                e(Box, {
                  paddingTop: 1,
                  children: e(hn, {
                    value: Ce,
                    onChange: we,
                    onSubmit: Ln,
                    placeholder: getLogDisplayTitle(M, "Enter new session name"),
                    columns: Mt - 2,
                    cursorOffset: yn,
                    onChangeCursorOffset: xn,
                    showCursor: !0,
                  }),
                }),
              ],
            })
          : e(xt, {
              nodes: _n,
              onSelect: (n) => {
                h(n.value.log);
              },
              onFocus: kn,
              onCancel: f,
              focusNodeId: _t?.id,
              visibleOptionCount: Re,
              layout: "expanded",
              isDisabled: v === "search",
              hideIndexes: !1,
              isNodeExpanded: (n) => {
                if (v === "search" || !G) return !0;
                let a =
                  typeof n === "string" && n.startsWith("group:")
                    ? n.substring(6)
                    : null;
                return a ? Ct.has(a) : !1;
              },
              onExpand: (n) => {
                let a =
                  typeof n === "string" && n.startsWith("group:")
                    ? n.substring(6)
                    : null;
                if (a)
                  (wt((b) => new Set(b).add(a)),
                    logEvent("tengu_session_group_expanded", {}));
              },
              onCollapse: (n) => {
                let a =
                  typeof n === "string" && n.startsWith("group:")
                    ? n.substring(6)
                    : null;
                if (a)
                  wt((b) => {
                    let m = new Set(b);
                    return (m.delete(a), m);
                  });
              },
              onUpFromFirstItem: Pn,
            }),
        e(Box, {
          paddingLeft: 2,
          children: be.pending
            ? r(Text, {
                dimColor: !0,
                children: ["Press ", be.keyName, " again to exit"],
              })
            : v === "rename"
              ? e(Text, {
                  dimColor: !0,
                  children: r(DotSeparatedList, {
                    children: [
                      e(KeybindingHint, { chord: "enter", action: "save" }),
                      e(ActionKeybindingHint, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                      }),
                    ],
                  }),
                })
              : v === "search"
                ? e(Text, {
                    dimColor: !0,
                    children: r(DotSeparatedList, {
                      children: [
                        e(Text, { children: "Type to Search" }),
                        s.length === 0 &&
                          N &&
                          e(KeybindingHint, {
                            chord: "ctrl+a",
                            action: w
                              ? "only show current repo"
                              : "show all projects",
                            format: { modCase: "title", charCase: "upper" },
                          }),
                        e(KeybindingHint, { chord: "enter", action: "select" }),
                        e(ActionKeybindingHint, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "clear",
                        }),
                      ],
                    }),
                  })
                : e(Text, {
                    dimColor: !0,
                    children: r(DotSeparatedList, {
                      children: [
                        N &&
                          e(KeybindingHint, {
                            chord: "ctrl+a",
                            action: w
                              ? "only show current repo"
                              : "show all projects",
                            format: { modCase: "title", charCase: "upper" },
                          }),
                        Y &&
                          e(KeybindingHint, {
                            chord: "ctrl+b",
                            action: G
                              ? "only show current branch"
                              : "show all branches",
                            format: { modCase: "title", charCase: "upper" },
                          }),
                        K &&
                          e(KeybindingHint, {
                            chord: "ctrl+w",
                            action: Z
                              ? "only show current worktree"
                              : "show all worktrees",
                            format: { modCase: "title", charCase: "upper" },
                          }),
                        M && e(KeybindingHint, { chord: "space", action: "preview" }),
                        M &&
                          e(KeybindingHint, {
                            chord: "ctrl+r",
                            action: "rename",
                            format: { modCase: "title", charCase: "upper" },
                          }),
                        e(Text, { children: "Type to search" }),
                        e(ActionKeybindingHint, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "cancel",
                        }),
                        En(),
                      ],
                    }),
                  }),
        }),
      ],
    }),
  });
}
function Hr(s) {
  if (s.type !== "user" && s.type !== "assistant") return "";
  let u = "message" in s ? s.message?.content : void 0;
  if (!u) return "";
  if (typeof u === "string") return u;
  if (Array.isArray(u))
    return u
      .map((l) => {
        if (typeof l === "string") return l;
        if ("text" in l && typeof l.text === "string") return l.text;
        return "";
      })
      .filter(Boolean)
      .join(" ");
  return "";
}
function Ur(s) {
  let l = (
      s.messages.length <= Or
        ? s.messages
        : [...s.messages.slice(0, mn), ...s.messages.slice(-mn)]
    )
      .map(Hr)
      .filter(Boolean)
      .join(" "),
    h =
      `${[s.customTitle, s.aiTitle, s.summary, s.firstPrompt, s.gitBranch, s.tag, s.prNumber ? `PR #${s.prNumber}` : void 0, s.prRepository].filter(Boolean).join(" ")} ${l}`.trim();
  return h.length > gn ? h.slice(0, gn) : h;
}
function Ar(s) {
  let u = new Map();
  for (let l of s) {
    let f = getSessionIdFromLog(l);
    if (f) {
      let h = u.get(f);
      if (h) h.push(l);
      else u.set(f, [l]);
    }
  }
  return (
    u.forEach((l) =>
      l.sort(
        (f, h) =>
          new Date(h.modified).getTime() - new Date(f.modified).getTime(),
      ),
    ),
    u
  );
}
import { lstat } from "fs/promises";
import { posix, sep as qr, win32 as zr } from "path";
function getShellCommandSeparator() {
  return getCurrentPlatform() === "windows" ? ";" : "&&";
}
async function buildCrossProjectResumeCommand(s, u, l) {
  let f = he();
  if (!u || !s.projectPath || s.projectPath === f) return null;
  if (l.some((x) => s.projectPath === x || s.projectPath.startsWith(x + qr)))
    return null;
  if (!An(s.projectPath) && !jf(s.projectPath) && !(await Vr(s.projectPath)))
    return null;
  let T = getSessionIdFromLog(s),
    S = j1(T) ? ` ${T}` : "";
  return `cd ${jo([s.projectPath])} ${getShellCommandSeparator()} claude --resume${S}`;
}
async function Vr(s) {
  let u = getCurrentPlatform() === "windows",
    { parse: l, sep: f } = u ? zr : posix,
    h = u ? l(s).root.replaceAll("/", f) : l(s).root,
    T = s
      .slice(l(s).root.length)
      .split(u ? /[\\/]+/ : f)
      .filter(Boolean),
    S = h;
  for (let x of T) {
    S = S === "" || S.endsWith(f) ? S + x : S + f + x;
    try {
      if ((await lstat(S)).isSymbolicLink()) return !0;
    } catch (O) {
      let I = A(O);
      return I !== "ENOENT" && I !== "ENOTDIR";
    }
  }
  return !0;
}
export { SessionLogPicker, getShellCommandSeparator, buildCrossProjectResumeCommand };

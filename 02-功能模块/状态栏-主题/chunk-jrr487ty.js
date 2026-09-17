// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, Ox } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { useAppStateSelector, useAppStateSelectorUnchecked } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { areTasksEnabled } from "../Teammates团队/chunk-g6nvp9mm.js";
import { getMainLoopModel, getFeatureValue_CACHED_MAY_BE_STALE, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { getStringWidth, truncateToWidth, formatDuration, formatDurationCoarse, formatNumber, formatResetTime } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { CLAUDE_ASTERISK_GLYPH } from "../权限系统/chunk-e4pfvp7x.js";
import { useTasksV2 } from "../工具TodoWrite-Tasks/tasks-v2-store.js";
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { useResolvedTheme } from "./chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, useIsScreenReaderEnabled, useAnimationFrame } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { AGENT_COLOR_THEME_KEYS } from "../多会话视图-Fleet/agent-color-palette.js";
import { isAgentSwarmsEnabled } from "../Teammates团队/agent-swarms-enablement.js";
import { getSessionEffortLevel, formatEffortSuffix } from "../权限系统/chunk-t3b7pg2x.js";
import { getLowPriorityCopy, getRateLimitTypeLabel, getStatusPageHint, isInProcessTeammateTask, isLiveBackgroundTask, summarizeRecentActivities } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { getSpinnerFrames, getSpinnerPingPongFrames, quantizeToEighth, getPulseProgress, interpolateColor, formatRgbColor, parseRgbColor } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { useRenderHook, useRenderInput, ansiPrimitives, StatusRow, jA } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { shouldExcludeDefaultTips } from "../../01-核心基础设施/设置-配置/spinner-tips-override.js";
import { activeTimeTracker } from "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import { ToolResultRow } from "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import { pickRandom, getSpinnerVerbs, useSpinnerState } from "../Hooks钩子/spinner-store.js";
import { ProgressBar } from "../../01-核心基础设施/UI组件-TUI/progress-bar.js";
import { useSettings } from "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { useReducedMotion } from "../../01-核心基础设施/UI组件-TUI/reduced-motion.js";
import { shouldReduceMotion } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { SHIMMER_STEP_MS, getShimmerPosition, splitTextForShimmer } from "../远程控制-Bridge/remote-control-ui-strings.js";
import { E, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { getGraphemeSegmenter } from "../../01-核心基础设施/核心工具-日期与本地化/intl-text-utils.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function xr(gs) {
  return gs.expandedView;
}
function Sr(Ss, ws) {
  return parseInt(Ss, 10) - parseInt(ws, 10);
}
function wr(Rs) {
  return `#${Rs}`;
}
function ExpandedTasksPanel(fs) {
  let hs = _(2),
    { hidden: ds } = fs,
    ps = useAppStateSelector(xr) === "tasks",
    Oe = useTasksV2();
  if (ds || !ps || !Oe || Oe.length === 0) {
    return null;
  }
  let pr;
  if (hs[0] !== Oe)
    ((pr = e(Box, {
      width: "100%",
      flexDirection: "column",
      children: e(We, { tasks: Oe, isStandalone: !0 }),
    })),
      (hs[0] = Oe),
      (hs[1] = pr));
  else pr = hs[1];
  return pr;
}
var ro = 30000;
function Te(n, s) {
  let c = parseInt(n.id, 10),
    l = parseInt(s.id, 10);
  if (!isNaN(c) && !isNaN(l)) return c - l;
  return n.id.localeCompare(s.id);
}
function We({ tasks: n, isStandalone: s = !1 }) {
  let c = useAppStateSelector((m) => m.teamContext),
    l = useAppStateSelector((m) => m.tasks),
    [f, g] = d(0),
    { rows: h, columns: k } = useTerminalSize(),
    b = useClock(),
    A = C(null);
  A.current ??= new Map(
    n.filter((m) => m.status === "completed").map((m) => [m.id, null]),
  );
  let x = A.current,
    S = h <= 10 ? 0 : Math.min(5, Math.max(3, h - 14)),
    w = new Set(n.filter((m) => m.status === "completed").map((m) => m.id)),
    j = Date.now();
  for (let m of w) if (!x.has(m)) x.set(m, j);
  for (let m of x.keys()) if (!w.has(m)) x.delete(m);
  if (
    (E(() => {
      let m = Date.now(),
        Y = 1 / 0;
      for (let z of x.values()) {
        if (z === null) continue;
        let ot = z + ro;
        if (ot > m && ot < Y) Y = ot;
      }
      if (Y === 1 / 0) return;
      return b.setTimeout(() => g((z) => z + 1), Y - m);
    }, [n, b, x, f]),
    !areTasksEnabled())
  )
    return null;
  if (n.length === 0) return null;
  let I = {};
  if (isAgentSwarmsEnabled() && c?.teammates) {
    for (let m of Object.values(c.teammates))
      if (m.color) {
        let Y = AGENT_COLOR_THEME_KEYS[m.color];
        if (Y) I[m.name] = Y;
      }
  }
  let K = {},
    T = new Set();
  if (isAgentSwarmsEnabled()) {
    for (let m of Object.values(l))
      if (isInProcessTeammateTask(m) && m.status === "running") {
        (T.add(m.identity.agentName), T.add(m.identity.agentId));
        let Y = m.progress?.recentActivities,
          z = (Y && summarizeRecentActivities(Y)) ?? m.progress?.lastActivity?.activityDescription;
        if (z) ((K[m.identity.agentName] = z), (K[m.identity.agentId] = z));
      }
  }
  let B = countMatching(n, (m) => m.status === "completed"),
    R = countMatching(n, (m) => m.status === "pending"),
    P = n.length - B - R,
    X = new Set(n.filter((m) => m.status !== "completed").map((m) => m.id)),
    Z = n.length > S,
    q,
    v;
  if (Z) {
    let m = [],
      Y = [];
    for (let at of n.filter((lt) => lt.status === "completed")) {
      let lt = x.get(at.id);
      if (typeof lt === "number" && j - lt < ro) m.push(at);
      else Y.push(at);
    }
    (m.sort(Te), Y.sort(Te));
    let z = n.filter((at) => at.status === "in_progress").sort(Te),
      ot = n
        .filter((at) => at.status === "pending")
        .sort((at, lt) => {
          let Mt = at.blockedBy.some((xt) => X.has(xt)),
            Lt = lt.blockedBy.some((xt) => X.has(xt));
          if (Mt !== Lt) return Mt ? 1 : -1;
          return Te(at, lt);
        }),
      tt = [...m, ...z, ...ot, ...Y];
    ((q = tt.slice(0, S)), (v = tt.slice(S)));
  } else ((q = [...n].sort(Te)), (v = []));
  let ct = "";
  if (v.length > 0) {
    let m = [],
      Y = countMatching(v, (tt) => tt.status === "pending"),
      z = countMatching(v, (tt) => tt.status === "in_progress"),
      ot = countMatching(v, (tt) => tt.status === "completed");
    if (z > 0) m.push(`${z} in progress`);
    if (Y > 0) m.push(`${Y} pending`);
    if (ot > 0) m.push(`${ot} completed`);
    ct = ` \u2026 +${m.join(", ")}`;
  }
  let Dt = r(N, {
    children: [
      q.map((m) =>
        e(
          so,
          {
            task: m,
            ownerColor: m.owner ? I[m.owner] : void 0,
            openBlockers: m.blockedBy.filter((Y) => X.has(Y)),
            activity: m.owner ? K[m.owner] : void 0,
            ownerActive: m.owner ? T.has(m.owner) : !1,
            columns: k,
          },
          m.id,
        ),
      ),
      S > 0 && ct && e(Text, { dimColor: !0, children: ct }),
    ],
  });
  if (s)
    return r(Box, {
      flexDirection: "column",
      marginTop: 1,
      marginLeft: 2,
      children: [
        e(Box, {
          children: r(Text, {
            dimColor: !0,
            children: [
              e(Text, { bold: !0, children: n.length }),
              " tasks (",
              e(Text, { bold: !0, children: B }),
              " done, ",
              P > 0 &&
                r(N, {
                  children: [e(Text, { bold: !0, children: P }), " in progress, "],
                }),
              e(Text, { bold: !0, children: R }),
              " open)",
            ],
          }),
        }),
        Dt,
      ],
    });
  return e(Box, { flexDirection: "column", children: Dt });
}
function io(n) {
  switch (n) {
    case "completed":
      return { icon: figures.tick, color: "success" };
    case "in_progress":
      return { icon: figures.squareSmallFilled, color: "claude" };
    case "pending":
      return { icon: figures.squareSmall, color: void 0 };
  }
}
function so(Ts) {
  let Et = _(37),
    {
      task: dt,
      ownerColor: on,
      openBlockers: rn,
      activity: De,
      ownerActive: ks,
      columns: Yn,
    } = Ts,
    sn = dt.status === "completed",
    cn = dt.status === "in_progress",
    Le = rn.length > 0,
    hr;
  if (Et[0] !== dt.status)
    ((hr = io(dt.status)), (Et[0] = dt.status), (Et[1] = hr));
  else hr = Et[1];
  let { icon: Jn, color: Qn } = hr,
    Zn = cn && !Le && De,
    ge = Yn >= 60 && dt.owner && ks,
    gr;
  if (Et[2] !== ge || Et[3] !== dt.owner)
    ((gr = ge ? getStringWidth(` (@${dt.owner})`) : 0),
      (Et[2] = ge),
      (Et[3] = dt.owner),
      (Et[4] = gr));
  else gr = Et[4];
  let xs = gr,
    to = Math.max(15, Yn - 15 - xs),
    Tr;
  if (Et[5] !== to || Et[6] !== dt.subject)
    ((Tr = truncateToWidth(dt.subject, to)),
      (Et[5] = to),
      (Et[6] = dt.subject),
      (Et[7] = Tr));
  else Tr = Et[7];
  let eo = Tr,
    no = Math.max(15, Yn - 15),
    kr;
  if (Et[8] !== De || Et[9] !== no)
    ((kr = De ? truncateToWidth(De, no) : void 0),
      (Et[8] = De),
      (Et[9] = no),
      (Et[10] = kr));
  else kr = Et[10];
  let an = kr,
    ln;
  if (Et[11] !== Qn || Et[12] !== Jn)
    ((ln = r(Text, { color: Qn, children: [Jn, " "] })),
      (Et[11] = Qn),
      (Et[12] = Jn),
      (Et[13] = ln));
  else ln = Et[13];
  const oo = sn || Le;
  let mn;
  if (Et[14] !== eo || Et[15] !== sn || Et[16] !== cn || Et[17] !== oo)
    ((mn = e(Text, { bold: cn, strikethrough: sn, dimColor: oo, children: eo })),
      (Et[14] = eo),
      (Et[15] = sn),
      (Et[16] = cn),
      (Et[17] = oo),
      (Et[18] = mn));
  else mn = Et[18];
  let un;
  if (Et[19] !== on || Et[20] !== ge || Et[21] !== dt.owner)
    ((un =
      ge &&
      r(Text, {
        dimColor: !0,
        children: [
          " (",
          on ? r(Text, { color: on, children: ["@", dt.owner] }) : `@${dt.owner}`,
          ")",
        ],
      })),
      (Et[19] = on),
      (Et[20] = ge),
      (Et[21] = dt.owner),
      (Et[22] = un));
  else un = Et[22];
  let fn;
  if (Et[23] !== Le || Et[24] !== rn)
    ((fn =
      Le &&
      r(Text, {
        dimColor: !0,
        children: [
          " ",
          figures.pointerSmall,
          " blocked by",
          " ",
          [...rn].sort(Sr).map(wr).join(", "),
        ],
      })),
      (Et[23] = Le),
      (Et[24] = rn),
      (Et[25] = fn));
  else fn = Et[25];
  let dn;
  if (Et[26] !== ln || Et[27] !== mn || Et[28] !== un || Et[29] !== fn)
    ((dn = r(Box, { children: [ln, mn, un, fn] })),
      (Et[26] = ln),
      (Et[27] = mn),
      (Et[28] = un),
      (Et[29] = fn),
      (Et[30] = dn));
  else dn = Et[30];
  let pn;
  if (Et[31] !== an || Et[32] !== Zn)
    ((pn =
      Zn &&
      an &&
      e(Box, {
        children: r(Text, { dimColor: !0, children: ["  ", an, figures.ellipsis] }),
      })),
      (Et[31] = an),
      (Et[32] = Zn),
      (Et[33] = pn));
  else pn = Et[33];
  let br;
  if (Et[34] !== dn || Et[35] !== pn)
    ((br = r(Box, { flexDirection: "column", children: [dn, pn] })),
      (Et[34] = dn),
      (Et[35] = pn),
      (Et[36] = br));
  else br = Et[36];
  return br;
}
function useSessionEffortLevel() {
  return useAppStateSelector((n) => getSessionEffortLevel(n));
}
var Ge = "\u25CF",
  mo = 2000,
  uo = { r: 171, g: 43, b: 63 },
  fo = { r: 0, g: 0, b: 0 };
function IntensitySpinnerGlyph(As) {
  let Nt = _(35),
    {
      frame: vs,
      messageColor: Xt,
      stalledIntensity: Rr,
      thinkingIntensity: Mr,
      reducedMotion: yr,
      time: _r,
    } = As,
    $e = Rr === void 0 ? 0 : Rr,
    Bt = Mr === void 0 ? 0 : Mr,
    Ps = yr === void 0 ? !1 : yr,
    Ds = _r === void 0 ? 0 : _r,
    ke = useResolvedTheme();
  if (Ps) {
    let hn = 1 - getPulseProgress(Ds, mo);
    let gn = Bt > 0 ? "warning" : Xt;
    let Tn = ke[gn];
    let be;
    if (Nt[0] !== Tn || Nt[1] !== hn || Nt[2] !== Bt) {
      be = EARLY_RETURN_SENTINEL;
      bb0: {
        let co = Tn ? parseRgbColor(Tn) : null;
        if (co) {
          let Ls = interpolateColor(co, fo, 0.5);
          let Ws = interpolateColor(Ls, co, quantizeToEighth(hn));
          const mt = e(Text, { color: formatRgbColor(Ws), bold: Bt >= 0.5, children: Ge });
          let st;
          if (Nt[4] !== mt)
            ((st = e(Box, {
              "aria-hidden": !0,
              flexWrap: "wrap",
              height: 1,
              width: 2,
              children: mt,
            })),
              (Nt[4] = mt),
              (Nt[5] = st));
          else st = Nt[5];
          be = st;
          break bb0;
        }
      }
      ((Nt[0] = Tn), (Nt[1] = hn), (Nt[2] = Bt), (Nt[3] = be));
    } else be = Nt[3];
    if (be !== EARLY_RETURN_SENTINEL) return be;
    const mt = hn < 0.5;
    const st = Bt >= 0.5;
    let Yt;
    if (Nt[6] !== gn || Nt[7] !== mt || Nt[8] !== st)
      ((Yt = e(Box, {
        "aria-hidden": !0,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: e(Text, { color: gn, dimColor: mt, bold: st, children: Ge }),
      })),
        (Nt[6] = gn),
        (Nt[7] = mt),
        (Nt[8] = st),
        (Nt[9] = Yt));
    else Yt = Nt[9];
    return Yt;
  }
  let be;
  if (Nt[10] === MEMO_CACHE_SENTINEL) ((be = getSpinnerPingPongFrames()), (Nt[10] = be));
  else be = Nt[10];
  let Cr = be,
    ht = Cr[vs % Cr.length];
  if ($e > 0) {
    let kn = ke[Xt];
    let mt;
    if (Nt[11] !== kn || Nt[12] !== ht || Nt[13] !== $e) {
      mt = EARLY_RETURN_SENTINEL;
      bb1: {
        let Ir = kn ? parseRgbColor(kn) : null;
        if (Ir) {
          let $s = interpolateColor(Ir, uo, quantizeToEighth($e));
          const st = e(Text, { color: formatRgbColor($s), children: ht });
          let Yt;
          if (Nt[15] !== st)
            ((Yt = e(Box, {
              "aria-hidden": !0,
              flexWrap: "wrap",
              height: 1,
              width: 2,
              children: st,
            })),
              (Nt[15] = st),
              (Nt[16] = Yt));
          else Yt = Nt[16];
          mt = Yt;
          break bb1;
        }
      }
      ((Nt[11] = kn), (Nt[12] = ht), (Nt[13] = $e), (Nt[14] = mt));
    } else mt = Nt[14];
    if (mt !== EARLY_RETURN_SENTINEL) return mt;
    let ao = $e > 0.5 ? "error" : Xt;
    let st;
    if (Nt[17] !== ao || Nt[18] !== ht)
      ((st = e(Box, {
        "aria-hidden": !0,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: e(Text, { color: ao, children: ht }),
      })),
        (Nt[17] = ao),
        (Nt[18] = ht),
        (Nt[19] = st));
    else st = Nt[19];
    return st;
  }
  if (Bt > 0) {
    let bn = ke[Xt];
    let je, mt;
    if (
      Nt[20] !== bn ||
      Nt[21] !== ht ||
      Nt[22] !== ke.warning ||
      Nt[23] !== Bt
    ) {
      mt = EARLY_RETURN_SENTINEL;
      bb2: {
        let Er = bn ? parseRgbColor(bn) : null;
        let Br = parseRgbColor(ke.warning);
        je = Bt >= 0.5;
        if (Er && Br) {
          let js = interpolateColor(Er, Br, quantizeToEighth(Bt));
          const st = e(Text, { bold: je, color: formatRgbColor(js), children: ht });
          let Yt;
          if (Nt[26] !== st)
            ((Yt = e(Box, {
              "aria-hidden": !0,
              flexWrap: "wrap",
              height: 1,
              width: 2,
              children: st,
            })),
              (Nt[26] = st),
              (Nt[27] = Yt));
          else Yt = Nt[27];
          mt = Yt;
          break bb2;
        }
      }
      ((Nt[20] = bn),
        (Nt[21] = ht),
        (Nt[22] = ke.warning),
        (Nt[23] = Bt),
        (Nt[24] = je),
        (Nt[25] = mt));
    } else ((je = Nt[24]), (mt = Nt[25]));
    if (mt !== EARLY_RETURN_SENTINEL) return mt;
    let lo = Bt > 0.5 ? "warning" : Xt;
    let st;
    if (Nt[28] !== je || Nt[29] !== lo || Nt[30] !== ht)
      ((st = e(Box, {
        "aria-hidden": !0,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: e(Text, { bold: je, color: lo, children: ht }),
      })),
        (Nt[28] = je),
        (Nt[29] = lo),
        (Nt[30] = ht),
        (Nt[31] = st));
    else st = Nt[31];
    return st;
  }
  let mt;
  if (Nt[32] !== Xt || Nt[33] !== ht)
    ((mt = e(Box, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(Text, { color: Xt, children: ht }),
    })),
      (Nt[32] = Xt),
      (Nt[33] = ht),
      (Nt[34] = mt));
  else mt = Nt[34];
  return mt;
}
F();
F();
var He = 150;
function wn(zs) {
  let Nr = _(8),
    { tone: po, text: ho } = zs,
    Ys = useReducedMotion(),
    Js = useIsScreenReaderEnabled(),
    xn = Ys || Js,
    [go, Qs] = useAnimationFrame(xn ? null : He);
  const To = Math.floor(Qs / He);
  let Sn;
  if (Nr[0] !== xn || Nr[1] !== To || Nr[2] !== ho || Nr[3] !== po)
    ((Sn = e(StatusRow, {
      state: "live",
      tone: po,
      text: ho,
      linkify: !1,
      frame: To,
      reducedMotion: xn,
    })),
      (Nr[0] = xn),
      (Nr[1] = To),
      (Nr[2] = ho),
      (Nr[3] = po),
      (Nr[4] = Sn));
  else Sn = Nr[4];
  let Ar;
  if (Nr[5] !== go || Nr[6] !== Sn)
    ((Ar = e(Box, { ref: go, flexDirection: "column", children: Sn })),
      (Nr[5] = go),
      (Nr[6] = Sn),
      (Nr[7] = Ar));
  else Ar = Nr[7];
  return Ar;
}
F();
var wo = { r: 171, g: 43, b: 63 };
function SpinnerMessageText(cc) {
  let D = _(97),
    {
      message: O,
      mode: ac,
      messageColor: W,
      glimmerIndex: vr,
      flashOpacity: Rn,
      shimmerColor: Ve,
      stalledIntensity: Pr,
      thinkingIntensity: Or,
    } = cc,
    Ke = Pr === void 0 ? 0 : Pr,
    Fe = Or === void 0 ? 0 : Or,
    ie = useResolvedTheme(),
    Ue;
  if (D[0] !== O) {
    Ue = [];
    for (const { segment: Dr } of getGraphemeSegmenter().segment(O))
      Ue.push({ segment: Dr, width: getStringWidth(Dr) });
    ((D[0] = O), (D[1] = Ue));
  } else Ue = D[1];
  let Mn;
  if (D[2] !== O) ((Mn = getStringWidth(O)), (D[2] = O), (D[3] = Mn));
  else Mn = D[3];
  let Lr;
  if (D[4] !== Ue || D[5] !== Mn)
    ((Lr = { segments: Ue, messageWidth: Mn }),
      (D[4] = Ue),
      (D[5] = Mn),
      (D[6] = Lr));
  else Lr = D[6];
  let { segments: ko, messageWidth: lc } = Lr;
  if (!O) {
    return null;
  }
  if (Ke > 0) {
    let yn = ie[W];
    let it;
    if (D[7] !== yn || D[8] !== O || D[9] !== Ke) {
      it = EARLY_RETURN_SENTINEL;
      bb0: {
        let Wr = yn ? parseRgbColor(yn) : null;
        if (Wr) {
          let mc = interpolateColor(Wr, wo, quantizeToEighth(Ke));
          let we = formatRgbColor(mc);
          let M;
          if (D[11] !== we || D[12] !== O)
            ((M = e(Text, { color: we, children: O })),
              (D[11] = we),
              (D[12] = O),
              (D[13] = M));
          else M = D[13];
          let y;
          if (D[14] !== we)
            ((y = e(Text, { color: we, children: " " })),
              (D[14] = we),
              (D[15] = y));
          else y = D[15];
          let et;
          if (D[16] !== M || D[17] !== y)
            ((et = r(N, { children: [M, y] })),
              (D[16] = M),
              (D[17] = y),
              (D[18] = et));
          else et = D[18];
          it = et;
          break bb0;
        }
      }
      ((D[7] = yn), (D[8] = O), (D[9] = Ke), (D[10] = it));
    } else it = D[10];
    if (it !== EARLY_RETURN_SENTINEL) return it;
    let Re = Ke > 0.5 ? "error" : W;
    let M;
    if (D[19] !== Re || D[20] !== O)
      ((M = e(Text, { color: Re, children: O })),
        (D[19] = Re),
        (D[20] = O),
        (D[21] = M));
    else M = D[21];
    let y;
    if (D[22] !== Re)
      ((y = e(Text, { color: Re, children: " " })), (D[22] = Re), (D[23] = y));
    else y = D[23];
    let et;
    if (D[24] !== M || D[25] !== y)
      ((et = r(N, { children: [M, y] })),
        (D[24] = M),
        (D[25] = y),
        (D[26] = et));
    else et = D[26];
    return et;
  }
  if (Fe > 0) {
    let _n = ie[W];
    let it;
    if (D[27] !== _n || D[28] !== O || D[29] !== ie.warning || D[30] !== Fe) {
      it = EARLY_RETURN_SENTINEL;
      bb1: {
        let $r = _n ? parseRgbColor(_n) : null;
        let jr = parseRgbColor(ie.warning);
        if ($r && jr) {
          let uc = interpolateColor($r, jr, quantizeToEighth(Fe));
          let Me = formatRgbColor(uc);
          let M;
          if (D[32] !== Me || D[33] !== O)
            ((M = e(Text, { color: Me, children: O })),
              (D[32] = Me),
              (D[33] = O),
              (D[34] = M));
          else M = D[34];
          let y;
          if (D[35] !== Me)
            ((y = e(Text, { color: Me, children: " " })),
              (D[35] = Me),
              (D[36] = y));
          else y = D[36];
          let et;
          if (D[37] !== M || D[38] !== y)
            ((et = r(N, { children: [M, y] })),
              (D[37] = M),
              (D[38] = y),
              (D[39] = et));
          else et = D[39];
          it = et;
          break bb1;
        }
      }
      ((D[27] = _n),
        (D[28] = O),
        (D[29] = ie.warning),
        (D[30] = Fe),
        (D[31] = it));
    } else it = D[31];
    if (it !== EARLY_RETURN_SENTINEL) return it;
    let ye = Fe > 0.5 ? "warning" : W;
    let M;
    if (D[40] !== ye || D[41] !== O)
      ((M = e(Text, { color: ye, children: O })),
        (D[40] = ye),
        (D[41] = O),
        (D[42] = M));
    else M = D[42];
    let y;
    if (D[43] !== ye)
      ((y = e(Text, { color: ye, children: " " })), (D[43] = ye), (D[44] = y));
    else y = D[44];
    let et;
    if (D[45] !== M || D[46] !== y)
      ((et = r(N, { children: [M, y] })),
        (D[45] = M),
        (D[46] = y),
        (D[47] = et));
    else et = D[47];
    return et;
  }
  if (ac === "tool-use") {
    let Cn = ie[W];
    let In = ie[Ve];
    let it;
    if (
      D[48] !== Cn ||
      D[49] !== Rn ||
      D[50] !== O ||
      D[51] !== W ||
      D[52] !== In
    ) {
      it = EARLY_RETURN_SENTINEL;
      bb2: {
        let Gr = Cn ? parseRgbColor(Cn) : null;
        let Hr = In ? parseRgbColor(In) : null;
        if (Gr && Hr) {
          let fc = interpolateColor(Gr, Hr, quantizeToEighth(Rn));
          const M = e(Text, { color: formatRgbColor(fc), children: O });
          let y;
          if (D[54] !== W)
            ((y = e(Text, { color: W, children: " " })), (D[54] = W), (D[55] = y));
          else y = D[55];
          let et;
          if (D[56] !== M || D[57] !== y)
            ((et = r(N, { children: [M, y] })),
              (D[56] = M),
              (D[57] = y),
              (D[58] = et));
          else et = D[58];
          it = et;
          break bb2;
        }
      }
      ((D[48] = Cn),
        (D[49] = Rn),
        (D[50] = O),
        (D[51] = W),
        (D[52] = In),
        (D[53] = it));
    } else it = D[53];
    if (it !== EARLY_RETURN_SENTINEL) return it;
    let bo = Rn > 0.5 ? Ve : W;
    let M;
    if (D[59] !== bo || D[60] !== O)
      ((M = e(Text, { color: bo, children: O })),
        (D[59] = bo),
        (D[60] = O),
        (D[61] = M));
    else M = D[61];
    let y;
    if (D[62] !== W)
      ((y = e(Text, { color: W, children: " " })), (D[62] = W), (D[63] = y));
    else y = D[63];
    let et;
    if (D[64] !== M || D[65] !== y)
      ((et = r(N, { children: [M, y] })),
        (D[64] = M),
        (D[65] = y),
        (D[66] = et));
    else et = D[66];
    return et;
  }
  let Vr = vr - 1,
    En = vr + 1;
  if (Vr >= lc || En < 0) {
    let it;
    if (D[67] !== O || D[68] !== W)
      ((it = e(Text, { color: W, children: O })),
        (D[67] = O),
        (D[68] = W),
        (D[69] = it));
    else it = D[69];
    let M;
    if (D[70] !== W)
      ((M = e(Text, { color: W, children: " " })), (D[70] = W), (D[71] = M));
    else M = D[71];
    let y;
    if (D[72] !== it || D[73] !== M)
      ((y = r(N, { children: [it, M] })),
        (D[72] = it),
        (D[73] = M),
        (D[74] = y));
    else y = D[74];
    return y;
  }
  let xo = Math.max(0, Vr),
    se,
    ce,
    _e;
  if (D[75] !== xo || D[76] !== ko || D[77] !== En) {
    let Bn = 0;
    ce = "";
    _e = "";
    se = "";
    for (const { segment: So, width: Kr } of ko) {
      if (Bn + Kr <= xo) ce = ce + So;
      else if (Bn > En) se = se + So;
      else _e = _e + So;
      Bn = Bn + Kr;
    }
    ((D[75] = xo),
      (D[76] = ko),
      (D[77] = En),
      (D[78] = se),
      (D[79] = ce),
      (D[80] = _e));
  } else ((se = D[78]), (ce = D[79]), (_e = D[80]));
  let it;
  if (D[81] !== ce || D[82] !== W)
    ((it = ce && e(Text, { color: W, children: ce })),
      (D[81] = ce),
      (D[82] = W),
      (D[83] = it));
  else it = D[83];
  let M;
  if (D[84] !== _e || D[85] !== Ve)
    ((M = e(Text, { color: Ve, children: _e })),
      (D[84] = _e),
      (D[85] = Ve),
      (D[86] = M));
  else M = D[86];
  let y;
  if (D[87] !== se || D[88] !== W)
    ((y = se && e(Text, { color: W, children: se })),
      (D[87] = se),
      (D[88] = W),
      (D[89] = y));
  else y = D[89];
  let et;
  if (D[90] !== W)
    ((et = e(Text, { color: W, children: " " })), (D[90] = W), (D[91] = et));
  else et = D[91];
  let Fr;
  if (D[92] !== it || D[93] !== M || D[94] !== y || D[95] !== et)
    ((Fr = r(N, { children: [it, M, y, et] })),
      (D[92] = it),
      (D[93] = M),
      (D[94] = y),
      (D[95] = et),
      (D[96] = Fr));
  else Fr = D[96];
  return Fr;
}
F();
function Ro(n) {
  let s = Math.max(0, n) / 1000,
    c = 1 - Math.exp(-s / 90);
  return Math.min(95, Math.round(c * 100));
}
function Mo() {
  return {
    toolWindowStart: null,
    toolWindowEnd: null,
    thinkingBurstStart: null,
    wasThinking: !1,
  };
}
function _o(n, s) {
  let { toolWindowStart: c, toolWindowEnd: l, thinkingBurstStart: f } = n;
  if (s.hasActiveTools) {
    if (c === null || l !== null) c = s.now;
    l = null;
  } else if (c !== null && l === null) l = s.now;
  if (!s.hasActiveTools && s.thinkingStatus !== null) ((c = null), (l = null));
  if (s.isThinking) {
    if (!n.wasThinking) f = s.now;
  } else f = null;
  return {
    toolWindowStart: c,
    toolWindowEnd: l,
    thinkingBurstStart: f,
    wasThinking: s.isThinking,
  };
}
function Co(n, s) {
  if (s.showToolCallTimer && s.hasActiveTools && n.toolWindowStart !== null) {
    let c = s.now - n.toolWindowStart;
    if (c >= 2000) return { kind: "tool-running", toolMs: c };
  }
  if (
    s.showToolCallTimer &&
    !s.hasActiveTools &&
    s.thinkingStatus === null &&
    n.toolWindowStart !== null &&
    n.toolWindowEnd !== null
  ) {
    let c = n.toolWindowEnd - n.toolWindowStart;
    if (c >= 2000) return { kind: "tool-done", toolMs: c };
  }
  if (s.thinkingStatus === "thinking" && !s.hasActiveTools)
    return {
      kind: "thinking",
      thinkingMs:
        n.thinkingBurstStart !== null ? s.now - n.thinkingBurstStart : 0,
    };
  if (typeof s.thinkingStatus === "number")
    return { kind: "thought-for", thoughtMs: s.thinkingStatus };
  return { kind: "none" };
}
function Io(n, s) {
  if (s.hasActiveTools) return 0;
  if (!s.isThinking || n.thinkingBurstStart === null) return 0;
  let c = s.now - n.thinkingBurstStart;
  return Math.min(Math.max((c - 1e4) / 1e4, 0), 1);
}
F();
function Eo(n, s, c = !1, l = !1, f) {
  let g = C(n),
    h = C(s),
    k = C(0),
    b = C(n),
    A = C(f);
  if (s > h.current || A.current !== f)
    ((A.current = f),
      (g.current = n),
      (h.current = s),
      (k.current = 0),
      (b.current = n));
  let x;
  if (c) ((x = 0), (g.current = n));
  else x = n - g.current;
  let S = x > 1e4 && !c,
    w = S ? Math.min((x - 1e4) / 1e4, 1) : 0;
  if (!l && (w > 0 || k.current > 0)) {
    let I = n - b.current;
    if (I >= 50) {
      let K = Math.floor(I / 50),
        T = k.current;
      for (let B = 0; B < K; B++) {
        let R = w - T;
        if (Math.abs(R) < 0.01) {
          T = w;
          break;
        }
        T += R * 0.1;
      }
      ((k.current = T), (b.current = n));
    }
  } else ((k.current = w), (b.current = n));
  let j = l ? w : k.current;
  return { isStalled: S, stalledIntensity: j, timeSinceLastToken: x };
}
var Ur = [1e4, 45000, 300000],
  qr = 2000,
  Xr = 2000,
  Yr = 1e4,
  Jr = 20000,
  Qr = 30000,
  Zr = 45000;
function ti(n) {
  let s = getPulseProgress(n, Xr);
  return Math.round(s * (getSpinnerFrames().length - 1));
}
function ei(n) {
  if (n >= Zr) return "almost done thinking";
  if (n >= Qr) return "thinking some more";
  if (n >= Jr) return "thinking more";
  if (n >= Yr) return "still thinking";
  return "thinking";
}
function ni(n) {
  return quantizeToEighth((Math.sin((n / 1000) * Math.PI) + 1) / 2);
}
function Bo({
  mode: n,
  reducedMotion: s,
  hasActiveTools: c,
  responseLength: l,
  message: f,
  overrideColor: g,
  loadingStartTime: h,
  totalPausedMs: k,
  pauseStartTime: b,
  thinkingStatus: A,
  effortSuffix: x,
  isCompacting: S,
  compactingStartTime: w,
  showToolCallTimer: j,
  agentId: I,
}) {
  let [K, T] = useAnimationFrame(s ? null : n === "requesting" ? 50 : 100),
    B = Date.now(),
    P = b !== null ? b - h - k : B - h - k,
    X = C(Mo()),
    Z = {
      now: B,
      isThinking: n === "thinking",
      hasActiveTools: c,
      thinkingStatus: A,
      showToolCallTimer: j,
    };
  X.current = _o(X.current, Z);
  let q = Co(X.current, Z),
    v = Io(X.current, Z),
    ct = l,
    Dt = c || n === "thinking" || S,
    {
      isStalled: m,
      stalledIntensity: Y,
      timeSinceLastToken: z,
    } = Eo(T, ct, Dt, s, I),
    ot = C(new Set()),
    tt = C(0),
    at = C(I);
  if (at.current !== I)
    ((at.current = I), (ot.current = new Set()), (tt.current = 0));
  if (z === 0) {
    if (ot.current.size > 0)
      (logEvent("tengu_spinner_stall_cleared", {
        max_stall_ms: Math.round(tt.current),
        mode: fromEnum(n),
        override_color: g != null,
        response_length: ct,
        thresholds_fired: ot.current.size,
      }),
        (ot.current = new Set()),
        (tt.current = 0));
  } else {
    if (z > tt.current) tt.current = z;
    for (let pt of Ur)
      if (z >= pt && !ot.current.has(pt))
        (ot.current.add(pt),
          logEvent("tengu_spinner_stalled_ui", {
            threshold_ms: pt,
            mode: fromEnum(n),
            override_color: g != null,
            time_since_last_token_ms: Math.round(z),
            response_length: ct,
            render_loop_dark: z - pt > 5000,
          }));
  }
  let lt = s ? 0 : ti(T),
    Mt = n === "requesting" ? 50 : 200,
    Lt = V(() => getStringWidth(f), [f]),
    xt = Lt + 20,
    zt = Math.floor(T / Mt),
    Zt = s
      ? -100
      : m
        ? -100
        : n === "requesting"
          ? (zt % xt) - 10
          : Lt + 10 - (zt % xt),
    fe = s ? 0 : n === "tool-use" ? ni(T) : 0,
    bt = C(ct),
    Ht = C(T),
    Vt = C(I);
  if (Vt.current !== I || Math.abs(ct - bt.current) > qr)
    ((Vt.current = I), (bt.current = ct), (Ht.current = T));
  if (s) ((bt.current = ct), (Ht.current = T));
  else {
    let pt = Math.floor((T - Ht.current) / 50);
    if (pt > 0) {
      Ht.current += pt * 50;
      for (let re = 0; re < pt; re++) {
        let wt = ct - bt.current;
        if (wt === 0) break;
        let Ct = Math.abs(wt),
          It;
        if (Ct < 70) It = 3;
        else if (Ct < 200) It = Math.max(8, Math.ceil(Ct * 0.15));
        else It = 50;
        bt.current =
          wt > 0
            ? Math.min(bt.current + It, ct)
            : Math.max(bt.current - It, ct);
      }
    }
  }
  let de = bt.current,
    yt = Math.round(de / 4),
    gt = C(0),
    Wt = C(T);
  if (n !== "thinking" || c) ((gt.current = 0), (Wt.current = T));
  else if (!s && (v > 0 || gt.current > 0)) {
    let pt = T - Wt.current;
    if (pt >= 50) {
      let re = Math.floor(pt / 50),
        wt = gt.current;
      for (let Ct = 0; Ct < re; Ct++) {
        let It = v - wt;
        if (Math.abs(It) < 0.01) {
          wt = v;
          break;
        }
        wt += It * 0.1;
      }
      ((gt.current = wt), (Wt.current = T));
    }
  } else ((gt.current = v), (Wt.current = T));
  let pe = s ? v : gt.current,
    Kt = formatDuration(P),
    ne = getStringWidth(Kt),
    ut = yt,
    $t = formatNumber(ut),
    _t = `${figures.arrowDown} ${$t} tokens`,
    St = getStringWidth(_t),
    J = q.kind === "thinking" ? ei(q.thinkingMs) : "thinking",
    ft;
  switch (q.kind) {
    case "tool-running":
      ft = `running tool for ${formatDuration(q.toolMs)}`;
      break;
    case "tool-done":
      ft = `ran tool for ${formatDuration(q.toolMs)}`;
      break;
    case "thinking":
      ft = `${J}${x}`;
      break;
    case "thought-for":
      ft = `thought for ${Math.max(1, Math.round(q.thoughtMs / 1000))}s`;
      break;
    case "none":
      ft = null;
      break;
  }
  let Pe = ft ? getStringWidth(ft) : 0,
    oe = C(0),
    Ft = S && w !== null ? Math.max(oe.current, Ro(B - w)) : null;
  oe.current = Ft ?? 0;
  let he = Ft !== null ? `${Ft}%` : null;
  return {
    viewportRef: K,
    time: T,
    elapsedMs: P,
    frame: lt,
    glimmerIndex: Zt,
    flashOpacity: fe,
    stalledIntensity: Y,
    thinkingIntensity: pe,
    statusText: q,
    progressiveThinkingBase: J,
    thinkingText: ft,
    thinkingWidth: Pe,
    timerText: Kt,
    timerWidth: ne,
    totalTokens: ut,
    tokenCount: $t,
    tokensWidth: St,
    glimmerMessageWidth: Lt,
    compactionPct: Ft,
    compactionPctText: he,
  };
}
function Ao(n) {
  let [s, c] = d(null),
    l = C(null),
    f = C([]),
    g = useClock();
  return (
    E(() => {
      if (n === "thinking") {
        if (l.current === null) {
          for (let h of f.current) h();
          ((f.current = []), (l.current = Date.now()), c("thinking"));
        }
      } else if (l.current !== null) {
        let h = Date.now() - l.current,
          k = Math.max(0, 2000 - h);
        l.current = null;
        let b = () => {
          (c(h), f.current.push(g.setTimeout(() => c(null), 2000)));
        };
        if (k > 0) f.current.push(g.setTimeout(b, k));
        else b();
      }
    }, [n, g]),
    E(
      () => () => {
        for (let h of f.current) h();
        f.current = [];
      },
      [],
    ),
    s
  );
}
var ui = getStringWidth(" \xB7 "),
  Ho = getStringWidth("thinking"),
  fi = 16000,
  di = 40,
  pi = 8,
  Vo = 2,
  hi = { r: 153, g: 153, b: 153 },
  gi = { r: 185, g: 185, b: 185 },
  Ko = 3000,
  Ti = 2;
function ki(n, s, c) {
  let l = (n - Ko) / 1000,
    f = n < Ko ? 0 : (Math.sin((l * Math.PI * 2) / Ti) + 1) / 2,
    g = interpolateColor(hi, gi, quantizeToEighth(f));
  return formatRgbColor(c && s > 0 ? interpolateColor(g, c, quantizeToEighth(s)) : g);
}
function Fo({
  mode: n,
  reducedMotion: s,
  hasActiveTools: c,
  responseLengthRef: l,
  message: f,
  messageColor: g,
  shimmerColor: h,
  overrideColor: k,
  loadingStartTimeRef: b,
  totalPausedMsRef: A,
  pauseStartTimeRef: x,
  spinnerSuffix: S,
  verbose: w,
  columns: j,
  thinkingStatus: I,
  effortSuffix: K,
  isCompacting: T = !1,
  compactingStartTime: B = null,
  showToolCallTimer: R = !1,
  retryStatus: P = null,
  agentId: X,
}) {
  let Z = Bo({
      mode: n,
      reducedMotion: s,
      hasActiveTools: c,
      responseLength: l.current,
      message: f,
      overrideColor: k,
      loadingStartTime: b.current,
      totalPausedMs: A.current,
      pauseStartTime: x.current,
      thinkingStatus: I,
      effortSuffix: K,
      isCompacting: T,
      compactingStartTime: B,
      showToolCallTimer: R,
      agentId: X,
    }),
    q = useResolvedTheme(),
    v = useIsScreenReaderEnabled(),
    ct = jA(w),
    {
      viewportRef: Dt,
      time: m,
      elapsedMs: Y,
      frame: z,
      glimmerIndex: ot,
      flashOpacity: tt,
      stalledIntensity: at,
      thinkingIntensity: lt,
      statusText: Mt,
      progressiveThinkingBase: Lt,
      timerText: xt,
      timerWidth: zt,
      totalTokens: Zt,
      tokenCount: fe,
      tokensWidth: bt,
      glimmerMessageWidth: Ht,
      compactionPct: Vt,
      compactionPctText: de,
    } = Z,
    { thinkingText: yt, thinkingWidth: gt } = Z,
    Wt = Math.min(di, j - Vo - 6),
    pe = Vt !== null && Wt >= pi,
    Kt = Ht + 2,
    ne = ui,
    ut = yt !== null,
    $t = w || ut || Zt > 0 || Y > fi,
    _t = j - Kt - 5,
    St = ut && _t > gt;
  if (!St && ut && Mt.kind === "thinking" && (K || Lt !== "thinking")) {
    if (_t > Ho) ((yt = "thinking"), (gt = Ho), (St = !0));
  }
  let J = St ? gt + ne : 0,
    ft = $t && _t > J + zt,
    Pe = J + (ft ? zt + ne : 0),
    oe = $t && Zt > 0 && _t > Pe + bt,
    Ft = St && Mt.kind === "thinking" && !S && !ft && !oe,
    he = lt > 0 ? parseRgbColor(q.warning) : null,
    pt = ki(m, lt, he),
    re = !he && lt > 0.5 ? "warning" : void 0,
    wt = lt > 0 ? "warning" : void 0,
    Ct = [
      ...(S ? [e(Text, { dimColor: !0, children: S }, "suffix")] : []),
      ...(!v && ft
        ? [e(Text, { dimColor: !0, children: xt }, "elapsedTime")]
        : []),
      ...(!v && oe
        ? [
            r(
              Box,
              {
                flexDirection: "row",
                children: [
                  e(Uo, { mode: n }),
                  r(Text, { dimColor: !0, children: [fe, " tokens"] }),
                ],
              },
              "tokens",
            ),
          ]
        : []),
      ...(!v && St && yt
        ? [
            Mt.kind === "thinking" && !s
              ? e(
                  Text,
                  { color: re ?? pt, children: Ft ? `(${yt})` : yt },
                  "thinking",
                )
              : e(Text, { dimColor: !wt, color: wt, children: yt }, "thinking"),
          ]
        : []),
    ],
    It =
      Ct.length > 0
        ? Ft
          ? e(DotSeparatedList, { children: Ct })
          : r(N, {
              children: [
                e(Text, { dimColor: !0, children: "(" }),
                e(DotSeparatedList, { children: Ct }),
                e(Text, { dimColor: !0, children: ")" }),
              ],
            })
        : null,
    nn =
      pe && Vt !== null
        ? r(Box, {
            flexDirection: "row",
            gap: 1,
            marginLeft: Vo,
            width: "100%",
            children: [
              e(ProgressBar, { ratio: Vt / 100, width: Wt, variant: "pill" }),
              e(Text, { dimColor: !0, children: de }),
            ],
          })
        : null;
  if (nn !== null && P === null && ct)
    return r(Box, {
      ref: Dt,
      flexDirection: "column",
      marginTop: 1,
      width: "100%",
      children: [e(wn, { tone: "dim", text: f.replace(/\u2026$/, "") }), nn],
    });
  return r(Box, {
    ref: Dt,
    flexDirection: "column",
    width: "100%",
    children: [
      e(Box, {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 1,
        width: "100%",
        children: P
          ? e(SpinnerRetryStatusLine, { status: P, columns: j })
          : r(N, {
              children: [
                e(IntensitySpinnerGlyph, {
                  frame: z,
                  messageColor: g,
                  stalledIntensity: k ? 0 : at,
                  thinkingIntensity: k ? 0 : lt,
                  reducedMotion: s,
                  time: m,
                }),
                e(SpinnerMessageText, {
                  message: f,
                  mode: n,
                  messageColor: g,
                  glimmerIndex: ot,
                  flashOpacity: tt,
                  shimmerColor: h,
                  stalledIntensity: k ? 0 : at,
                  thinkingIntensity: k ? 0 : lt,
                }),
                It,
              ],
            }),
      }),
      nn,
    ],
  });
}
function SpinnerRetryStatusLine(Yc) {
  let Q = _(53),
    { status: nt, columns: vo } = Yc,
    Nn = Math.max(0, Math.ceil((nt.deadline - Date.now()) / 1000)) * 1000,
    oi;
  if (Q[0] !== nt.kind)
    ((oi = nt.kind === "low_priority_waiting" ? getLowPriorityCopy().waitBanner : null),
      (Q[0] = nt.kind),
      (Q[1] = oi));
  else oi = Q[1];
  let Jc = oi;
  const Po = Nn >= 300000;
  let ri;
  if (Q[2] !== Nn || Q[3] !== Po)
    ((ri = formatDuration(Nn, { mostSignificantOnly: Po })),
      (Q[2] = Nn),
      (Q[3] = Po),
      (Q[4] = ri));
  else ri = Q[4];
  let qe = ri,
    ii;
  if (Q[5] === MEMO_CACHE_SENTINEL)
    ((ii = e(Box, {
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: e(Text, { color: "error", children: CLAUDE_ASTERISK_GLYPH }),
    })),
      (Q[5] = ii));
  else ii = Q[5];
  let Oo = ii;
  if (nt.kind === "stalled") {
    let At;
    if (Q[6] === MEMO_CACHE_SENTINEL)
      ((At = e(Text, { color: "error", children: "Waiting for API response" })),
        (Q[6] = At));
    else At = Q[6];
    let Rt;
    if (Q[7] !== qe)
      ((Rt = r(N, {
        children: [
          Oo,
          r(Box, {
            flexShrink: 1,
            children: [
              At,
              r(Text, {
                dimColor: !0,
                children: [
                  " \xB7 will retry in ",
                  qe,
                  " \xB7 check your network",
                ],
              }),
            ],
          }),
        ],
      })),
        (Q[7] = qe),
        (Q[8] = Rt));
    else Rt = Q[8];
    return Rt;
  }
  if (nt.kind === "low_priority_waiting") {
    let An = ` \xB7 next try in ${qe} \xB7 attempt ${nt.attempt} \xB7 esc to interrupt`;
    let Do = Math.max(10, vo - 2 - getStringWidth(An) - 2);
    let At;
    if (Q[9] === MEMO_CACHE_SENTINEL)
      ((At = e(Box, {
        "aria-hidden": !0,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: e(Text, { color: "warning", children: CLAUDE_ASTERISK_GLYPH }),
      })),
        (Q[9] = At));
    else At = Q[9];
    const Rt = Jc ?? "";
    let Pt;
    if (Q[10] !== Do || Q[11] !== Rt)
      ((Pt = truncateToWidth(Rt, Do)), (Q[10] = Do), (Q[11] = Rt), (Q[12] = Pt));
    else Pt = Q[12];
    let Tt;
    if (Q[13] !== Pt)
      ((Tt = e(Text, { color: "warning", children: Pt })),
        (Q[13] = Pt),
        (Q[14] = Tt));
    else Tt = Q[14];
    let kt;
    if (Q[15] !== An)
      ((kt = e(Text, { dimColor: !0, children: An })), (Q[15] = An), (Q[16] = kt));
    else kt = Q[16];
    let jt;
    if (Q[17] !== Tt || Q[18] !== kt)
      ((jt = r(N, {
        children: [At, r(Box, { flexShrink: 1, children: [Tt, kt] })],
      })),
        (Q[17] = Tt),
        (Q[18] = kt),
        (Q[19] = jt));
    else jt = Q[19];
    return jt;
  }
  let ae = nt.error.noResponse;
  if (ae) {
    let Qc = nt.attempt >= nt.maxRetries;
    let At;
    if (Q[20] !== ae.retryWaitMs)
      ((At = formatDurationCoarse(ae.retryWaitMs)), (Q[20] = ae.retryWaitMs), (Q[21] = At));
    else At = Q[21];
    let si = At;
    let vn = Qc
      ? ` \xB7 retrying once, waiting up to ${si}`
      : ` \xB7 retrying, waiting up to ${si} \xB7 attempt ${nt.attempt}/${nt.maxRetries}`;
    let Lo = Math.max(10, vo - 2 - getStringWidth(vn) - 2);
    let Rt;
    if (Q[22] !== ae.waitedMs)
      ((Rt = formatDurationCoarse(ae.waitedMs)), (Q[22] = ae.waitedMs), (Q[23] = Rt));
    else Rt = Q[23];
    const Pt = `No response from the API after ${Rt}`;
    let Tt;
    if (Q[24] !== Lo || Q[25] !== Pt)
      ((Tt = truncateToWidth(Pt, Lo)), (Q[24] = Lo), (Q[25] = Pt), (Q[26] = Tt));
    else Tt = Q[26];
    let kt;
    if (Q[27] !== Tt)
      ((kt = e(Text, { color: "error", children: Tt })),
        (Q[27] = Tt),
        (Q[28] = kt));
    else kt = Q[28];
    let jt;
    if (Q[29] !== vn)
      ((jt = e(Text, { dimColor: !0, children: vn })), (Q[29] = vn), (Q[30] = jt));
    else jt = Q[30];
    let Pn;
    if (Q[31] !== jt || Q[32] !== kt)
      ((Pn = r(Box, { children: [kt, jt] })),
        (Q[31] = jt),
        (Q[32] = kt),
        (Q[33] = Pn));
    else Pn = Q[33];
    let ci;
    if (Q[34] === MEMO_CACHE_SENTINEL)
      ((ci = e(Text, {
        dimColor: !0,
        children:
          "A proxy or gateway that buffers streaming responses can cause this \xB7 set CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS to change the first wait",
      })),
        (Q[34] = ci));
    else ci = Q[34];
    let ai;
    if (Q[35] !== Pn)
      ((ai = r(N, {
        children: [
          Oo,
          r(Box, {
            flexBasis: 0,
            flexDirection: "column",
            flexGrow: 1,
            flexShrink: 1,
            children: [Pn, ci],
          }),
        ],
      })),
        (Q[35] = Pn),
        (Q[36] = ai));
    else ai = Q[36];
    return ai;
  }
  let Gt = nt.error.rateLimits,
    At;
  if (Q[37] !== Gt)
    ((At = Gt?.resetsAt ? ` (${formatResetTime(Gt.resetsAt)})` : ""),
      (Q[37] = Gt),
      (Q[38] = At));
  else At = Q[38];
  let On = ` \xB7 Retrying in ${qe}${At} \xB7 attempt ${nt.attempt}/${nt.maxRetries}`,
    Wo =
      nt.attempt >= Math.min(3, nt.maxRetries) ||
      nt.error.isNetworkDown ||
      nt.error.connection?.isSSLError ||
      Gt,
    Rt;
  if (Q[39] !== Gt || Q[40] !== Wo || Q[41] !== nt.error.formatted) {
    let li = Gt?.rateLimitType ? getRateLimitTypeLabel(Gt.rateLimitType) : "usage limit";
    Rt = !Wo
      ? "API error"
      : Gt
        ? `${li[0]?.toUpperCase()}${li.slice(1)} reached`
        : nt.error.formatted;
    ((Q[39] = Gt), (Q[40] = Wo), (Q[41] = nt.error.formatted), (Q[42] = Rt));
  } else Rt = Q[42];
  let $o = Rt,
    jo = Math.max(10, vo - 2 - getStringWidth(On) - 2),
    Pt;
  if (Q[43] !== jo || Q[44] !== $o)
    ((Pt = truncateToWidth($o, jo)), (Q[43] = jo), (Q[44] = $o), (Q[45] = Pt));
  else Pt = Q[45];
  let Go = Pt,
    Tt;
  if (Q[46] !== Go)
    ((Tt = e(Text, { color: "error", children: Go })), (Q[46] = Go), (Q[47] = Tt));
  else Tt = Q[47];
  let kt;
  if (Q[48] !== On)
    ((kt = e(Text, { dimColor: !0, children: On })), (Q[48] = On), (Q[49] = kt));
  else kt = Q[49];
  let jt;
  if (Q[50] !== Tt || Q[51] !== kt)
    ((jt = r(N, {
      children: [Oo, r(Box, { flexShrink: 1, children: [Tt, kt] })],
    })),
      (Q[50] = Tt),
      (Q[51] = kt),
      (Q[52] = jt));
  else jt = Q[52];
  return jt;
}
function Uo(Zc) {
  let mi = _(2),
    { mode: ta } = Zc;
  switch (ta) {
    case "tool-input":
    case "tool-use":
    case "responding":
    case "thinking": {
      let Ye;
      if (mi[0] === MEMO_CACHE_SENTINEL)
        ((Ye = e(Box, {
          width: 2,
          children: e(Text, {
            "aria-hidden": !0,
            dimColor: !0,
            children: figures.arrowDown,
          }),
        })),
          (mi[0] = Ye));
      else Ye = mi[0];
      return Ye;
    }
    case "requesting": {
      let Ye;
      if (mi[1] === MEMO_CACHE_SENTINEL)
        ((Ye = e(Box, {
          width: 2,
          children: e(Text, {
            "aria-hidden": !0,
            dimColor: !0,
            children: figures.arrowUp,
          }),
        })),
          (mi[1] = Ye));
      else Ye = mi[1];
      return Ye;
    }
  }
}
function Hi(Ua) {
  return Ua.isBriefOnly;
}
function Vi(qa) {
  return qa.viewingAgentTaskId;
}
function Ki() {
  return pickRandom(getSpinnerVerbs()) ?? "Working";
}
function Fi(el) {
  return el.remoteConnectionStatus;
}
function Ui(Pi) {
  return countMatching(Object.values(Pi.tasks), isLiveBackgroundTask) + Pi.remoteBackgroundTasks.length;
}
function qi(ol) {
  return ol.remoteConnectionStatus;
}
function zi(Li) {
  return countMatching(Object.values(Li.tasks), isLiveBackgroundTask) + Li.remoteBackgroundTasks.length;
}
function Xi(cl) {
  return cl.settings.prefersReducedMotion;
}
function useSpinnerRenderInput(Jt) {
  let or = _(21),
    {
      mode: Qt,
      overrideMessage: Dn,
      overrideColor: qo,
      overrideShimmerColor: zo,
      isCompacting: Xo,
      compactingHintText: Yo,
      compactingStartTime: Jo,
      turnEffort: Qo,
      turnModel: Zo,
      retryStatus: tr,
      defaultVerb: Ln,
    } = useSpinnerState(Jt.agentId),
    er = useAppStateSelector(Hi),
    nr = useAppStateSelector(Vi),
    Ka = a.CLAUDE_CODE_BRIEF,
    bi,
    xi;
  if (or[0] !== Ln || or[1] !== Qt || or[2] !== Dn || or[3] !== Jt.agentId)
    ((bi = () => ({
      requestId: Jt.agentId ?? "main",
      props: { word: Ln, message: Dn, mode: Qt },
    })),
      (xi = [Jt.agentId, Ln, Dn, Qt]),
      (or[0] = Ln),
      (or[1] = Qt),
      (or[2] = Dn),
      (or[3] = Jt.agentId),
      (or[4] = bi),
      (or[5] = xi));
  else ((bi = or[4]), (xi = or[5]));
  let Fa = ansiPrimitives.useRenderInput("Spinner", bi, xi),
    Si;
  if (or[6] !== er || or[7] !== nr)
    ((Si = Ox() && (Ka || getFeatureValue_CACHED_MAY_BE_STALE("tengu_kairos_brief", !1)) && er && !nr),
      (or[6] = er),
      (or[7] = nr),
      (or[8] = Si));
  else Si = or[8];
  let rr = Si,
    wi;
  if (
    or[9] !== rr ||
    or[10] !== Yo ||
    or[11] !== Jo ||
    or[12] !== Xo ||
    or[13] !== Qt ||
    or[14] !== qo ||
    or[15] !== zo ||
    or[16] !== Jt ||
    or[17] !== tr ||
    or[18] !== Qo ||
    or[19] !== Zo
  )
    ((wi = (ir) =>
      rr
        ? e(Xn, { mode: Qt, overrideMessage: ir.props.message })
        : e(dr, {
            ...Jt,
            mode: Qt,
            overrideMessage: ir.props.message,
            overrideColor: qo,
            overrideShimmerColor: zo,
            isCompacting: Xo,
            compactingHintText: Yo,
            compactingStartTime: Jo,
            turnEffort: Qo,
            turnModel: Zo,
            retryStatus: tr,
            defaultVerb: ir.props.word,
          })),
      (or[9] = rr),
      (or[10] = Yo),
      (or[11] = Jo),
      (or[12] = Xo),
      (or[13] = Qt),
      (or[14] = qo),
      (or[15] = zo),
      (or[16] = Jt),
      (or[17] = tr),
      (or[18] = Qo),
      (or[19] = Zo),
      (or[20] = wi));
  else wi = or[20];
  return ansiPrimitives.useRenderHook(Fa, wi);
}
function dr({
  mode: n,
  loadingStartTimeRef: s,
  totalPausedMsRef: c,
  pauseStartTimeRef: l,
  responseLengthRef: f,
  overrideColor: g,
  overrideShimmerColor: h,
  overrideMessage: k,
  isCompacting: b,
  compactingHintText: A,
  compactingStartTime: x,
  spinnerSuffix: S,
  verbose: w,
  hasActiveTools: j = !1,
  turnEffort: I,
  turnModel: K,
  retryStatus: T,
  defaultVerb: B,
  agentId: R,
}) {
  let P = useSettings(),
    X = useIsScreenReaderEnabled(),
    Z = shouldReduceMotion(P.prefersReducedMotion) || X,
    q = useAppStateSelector((J) => J.spinnerTip),
    v = useAppStateSelector((J) => J.spinnerTipLabel),
    ct = useAppStateSelector((J) => J.expandedView) === "tasks",
    { columns: Dt } = useTerminalSize(),
    m = useTasksV2(),
    Y = Ao(n),
    z = R === void 0 || R === ze(),
    ot = z
      ? m?.find((J) => J.status !== "pending" && J.status !== "completed")
      : void 0,
    tt = z ? Gi(m) : void 0,
    [at] = d(() => pickRandom(getSpinnerVerbs())),
    lt = (k ?? ot?.activeForm ?? ot?.subject ?? (B || at)) + "\u2026";
  E(() => {
    let J = "spinner-" + n;
    return (
      activeTimeTracker.startCLIActivity(J),
      () => {
        activeTimeTracker.endCLIActivity(J);
      }
    );
  }, [n]);
  let Mt = useSessionEffortLevel(),
    Lt = formatEffortSuffix(K ?? getMainLoopModel(), I ?? Mt),
    xt =
      l.current !== null
        ? l.current - s.current - c.current
        : Date.now() - s.current - c.current,
    zt = "claude",
    Zt = "claudeShimmer",
    fe = g ?? zt,
    bt = h ?? Zt,
    Ht = getFeatureValue_CACHED_MAY_BE_STALE("tengu_shining_fractals", !1),
    Vt = useAppStateSelector((J) => J.narration),
    de = useAppStateSelector((J) => J.briefTranscript),
    yt = !1,
    gt = P.spinnerTipsEnabled !== !1,
    Wt = gt && xt > 1800000,
    pe = gt && xt > 30000 && !getGlobalConfig().btwUseCount,
    Kt = yt
      ? q
      : shouldExcludeDefaultTips()
        ? q
        : Wt && !tt
          ? "Use /clear to start fresh when switching topics and free up context"
          : pe && !tt
            ? "Use /btw to ask a quick side question without interrupting Claude's current work"
            : q,
    ne = Kt === q && v ? v : "Tip",
    ut = z && !de && !T ? Vt?.text : void 0,
    $t = ut
      ? void 0
      : tt
        ? `Next: ${tt.subject}`
        : Kt
          ? `${ne}: ${Kt}`
          : void 0,
    _t = null,
    St;
  if (T?.kind === "retrying") {
    let J =
        T.error.status === 529 ||
        T.error.formatted.toLowerCase().includes("overload"),
      ft = T.attempt >= Math.min(3, T.maxRetries);
    if (J && ft) St = getStatusPageHint().trim();
  }
  return r(Box, {
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    marginBottom: ut ? 1 : 0,
    children: [
      e(Fo, {
        mode: n,
        reducedMotion: Z,
        hasActiveTools: j,
        responseLengthRef: f,
        message: lt,
        messageColor: fe,
        shimmerColor: bt,
        overrideColor: g,
        loadingStartTimeRef: s,
        totalPausedMsRef: c,
        pauseStartTimeRef: l,
        spinnerSuffix: S,
        verbose: w,
        columns: Dt,
        thinkingStatus: Y,
        effortSuffix: Lt,
        isCompacting: b,
        compactingStartTime: x,
        showToolCallTimer: Ht,
        retryStatus: T,
        agentId: R,
      }),
      z && ct && m && m.length > 0
        ? r(Box, {
            width: "100%",
            flexDirection: "column",
            children: [
              ut &&
                e(ToolResultRow, {
                  children: e(Text, {
                    dimColor: !0,
                    italic: !0,
                    wrap: "truncate-end",
                    children: ut,
                  }),
                }),
              e(ToolResultRow, { children: e(We, { tasks: m }) }),
            ],
          })
        : b && A
          ? r(Box, {
              width: "100%",
              flexDirection: "column",
              children: [
                ut &&
                  e(ToolResultRow, {
                    children: e(Text, {
                      dimColor: !0,
                      italic: !0,
                      wrap: "truncate-end",
                      children: ut,
                    }),
                  }),
                e(ToolResultRow, { children: e(Text, { dimColor: !0, children: A }) }),
              ],
            })
          : T
            ? St
              ? e(Box, {
                  width: "100%",
                  flexDirection: "column",
                  children: e(ToolResultRow, {
                    children: e(Text, { dimColor: !0, children: St }),
                  }),
                })
              : null
            : ut || $t || _t
              ? r(Box, {
                  width: "100%",
                  flexDirection: "column",
                  children: [
                    _t &&
                      e(ToolResultRow, { children: e(Text, { dimColor: !0, children: _t }) }),
                    ut
                      ? e(ToolResultRow, {
                          children: e(Text, {
                            dimColor: !0,
                            italic: !0,
                            wrap: "truncate-end",
                            children: ut,
                          }),
                        })
                      : $t &&
                        e(ToolResultRow, {
                          children: e(Text, { dimColor: !0, children: $t }),
                        }),
                  ],
                })
              : null,
    ],
  });
}
function Xn(za) {
  let Ut = _(34),
    { mode: Wn, overrideMessage: Xa } = za,
    sr = useSettings(),
    cr = useIsScreenReaderEnabled(),
    Ri;
  if (Ut[0] !== cr || Ut[1] !== sr.prefersReducedMotion)
    ((Ri = shouldReduceMotion(sr.prefersReducedMotion) || cr),
      (Ut[0] = cr),
      (Ut[1] = sr.prefersReducedMotion),
      (Ut[2] = Ri));
  else Ri = Ut[2];
  let le = Ri,
    [Ja] = d(Ki),
    Ce = Xa ?? Ja,
    ar = useAppStateSelector(Fi),
    Mi,
    yi;
  if (Ut[3] !== Wn)
    ((Mi = () => {
      let _i = "spinner-" + Wn;
      return (
        activeTimeTracker.startCLIActivity(_i),
        () => {
          activeTimeTracker.endCLIActivity(_i);
        }
      );
    }),
      (yi = [Wn]),
      (Ut[3] = Wn),
      (Ut[4] = Mi),
      (Ut[5] = yi));
  else ((Mi = Ut[4]), (yi = Ut[5]));
  E(Mi, yi);
  let [, $n] = useAnimationFrame(le ? null : 120),
    Ci = useAppStateSelector(Ui),
    qt = ar === "reconnecting" || ar === "disconnected",
    Ie = ar === "reconnecting" ? "Reconnecting" : "Disconnected",
    lr = Math.floor($n / 300) % 3,
    Ii;
  if (Ut[6] !== lr || Ut[7] !== le)
    ((Ii = le ? "\u2026  " : ".".repeat(lr + 1).padEnd(3)),
      (Ut[6] = lr),
      (Ut[7] = le),
      (Ut[8] = Ii));
  else Ii = Ut[8];
  let jn = Ii,
    Ei;
  if (Ut[9] !== Ce) ((Ei = getStringWidth(Ce)), (Ut[9] = Ce), (Ut[10] = Ei));
  else Ei = Ut[10];
  let Ee = Ei,
    Bi;
  if (
    Ut[11] !== le ||
    Ut[12] !== qt ||
    Ut[13] !== $n ||
    Ut[14] !== Ce ||
    Ut[15] !== Ee
  ) {
    let Qa = le || qt ? -100 : getShimmerPosition(Math.floor($n / SHIMMER_STEP_MS), Ee);
    Bi = splitTextForShimmer(Ce, Qa);
    ((Ut[11] = le),
      (Ut[12] = qt),
      (Ut[13] = $n),
      (Ut[14] = Ce),
      (Ut[15] = Ee),
      (Ut[16] = Bi));
  } else Bi = Ut[16];
  let { before: Gn, shimmer: Hn, after: Vn } = Bi,
    { columns: Za } = useTerminalSize(),
    Je = Ci > 0 ? `${Ci} in background` : "",
    Ni;
  if (Ut[17] !== Ie || Ut[18] !== qt || Ut[19] !== Ee)
    ((Ni = qt ? getStringWidth(Ie) : Ee),
      (Ut[17] = Ie),
      (Ut[18] = qt),
      (Ut[19] = Ee),
      (Ut[20] = Ni));
  else Ni = Ut[20];
  let tl = Ni + 3,
    mr = Math.max(1, Za - 2 - tl - getStringWidth(Je)),
    Kn;
  if (
    Ut[21] !== Vn ||
    Ut[22] !== Gn ||
    Ut[23] !== Ie ||
    Ut[24] !== jn ||
    Ut[25] !== Hn ||
    Ut[26] !== qt
  )
    ((Kn = qt
      ? e(Text, { color: "error", children: Ie + jn })
      : r(N, {
          children: [
            Gn ? e(Text, { dimColor: !0, children: Gn }) : null,
            Hn ? e(Text, { children: Hn }) : null,
            Vn ? e(Text, { dimColor: !0, children: Vn }) : null,
            e(Text, { dimColor: !0, children: jn }),
          ],
        })),
      (Ut[21] = Vn),
      (Ut[22] = Gn),
      (Ut[23] = Ie),
      (Ut[24] = jn),
      (Ut[25] = Hn),
      (Ut[26] = qt),
      (Ut[27] = Kn));
  else Kn = Ut[27];
  let Fn;
  if (Ut[28] !== mr || Ut[29] !== Je)
    ((Fn = Je
      ? r(N, {
          children: [
            e(Text, { children: " ".repeat(mr) }),
            e(Text, { color: "subtle", children: Je }),
          ],
        })
      : null),
      (Ut[28] = mr),
      (Ut[29] = Je),
      (Ut[30] = Fn));
  else Fn = Ut[30];
  let vi;
  if (Ut[31] !== Kn || Ut[32] !== Fn)
    ((vi = r(Box, {
      flexDirection: "row",
      width: "100%",
      marginTop: 1,
      paddingLeft: 2,
      children: [Kn, Fn],
    })),
      (Ut[31] = Kn),
      (Ut[32] = Fn),
      (Ut[33] = vi));
  else vi = Ut[33];
  return vi;
}
function RemoteConnectionStatusLine() {
  let Un = _(9),
    ur = useAppStateSelector(qi),
    Oi = useAppStateSelector(zi),
    { columns: nl } = useTerminalSize(),
    Be =
      ur === "reconnecting" || ur === "disconnected"
        ? ur === "reconnecting"
          ? "Reconnecting\u2026"
          : "Disconnected"
        : "",
    Ne = Oi > 0 ? `${Oi} in background` : "";
  if (!Be && !Ne) {
    let me;
    if (Un[0] === MEMO_CACHE_SENTINEL) ((me = e(Box, { height: 2 })), (Un[0] = me));
    else me = Un[0];
    return me;
  }
  let fr = Math.max(1, nl - 2 - getStringWidth(Be) - getStringWidth(Ne)),
    me;
  if (Un[1] !== Be)
    ((me = Be ? e(Text, { color: "error", children: Be }) : null),
      (Un[1] = Be),
      (Un[2] = me));
  else me = Un[2];
  let qn;
  if (Un[3] !== fr || Un[4] !== Ne)
    ((qn = Ne
      ? r(N, {
          children: [
            e(Text, { children: " ".repeat(fr) }),
            e(Text, { color: "subtle", children: Ne }),
          ],
        })
      : null),
      (Un[3] = fr),
      (Un[4] = Ne),
      (Un[5] = qn));
  else qn = Un[5];
  let Di;
  if (Un[6] !== me || Un[7] !== qn)
    ((Di = e(Box, {
      marginTop: 1,
      paddingLeft: 2,
      children: r(Text, { children: [me, qn] }),
    })),
      (Un[6] = me),
      (Un[7] = qn),
      (Un[8] = Di));
  else Di = Un[8];
  return Di;
}
function SpinnerGlyph() {
  let Qe = _(9),
    rl = useIsScreenReaderEnabled(),
    Wi = shouldReduceMotion(useAppStateSelectorUnchecked(Xi)) || rl,
    [Ae, il] = useAnimationFrame(Wi ? null : 120);
  if (Wi) {
    let Ze;
    if (Qe[0] === MEMO_CACHE_SENTINEL)
      ((Ze = e(Text, { color: "text", children: "\u25CF" })), (Qe[0] = Ze));
    else Ze = Qe[0];
    let ve;
    if (Qe[1] !== Ae)
      ((ve = e(Box, {
        ref: Ae,
        "aria-hidden": !0,
        flexWrap: "wrap",
        height: 1,
        width: 2,
        children: Ze,
      })),
        (Qe[1] = Ae),
        (Qe[2] = ve));
    else ve = Qe[2];
    return ve;
  }
  let Ze;
  if (Qe[3] === MEMO_CACHE_SENTINEL) ((Ze = getSpinnerPingPongFrames()), (Qe[3] = Ze));
  else Ze = Qe[3];
  let $i = Ze,
    sl = Math.floor(il / 120) % $i.length;
  const ve = $i[sl];
  let zn;
  if (Qe[4] !== ve)
    ((zn = e(Text, { color: "text", children: ve })), (Qe[4] = ve), (Qe[5] = zn));
  else zn = Qe[5];
  let ji;
  if (Qe[6] !== Ae || Qe[7] !== zn)
    ((ji = e(Box, {
      ref: Ae,
      "aria-hidden": !0,
      flexWrap: "wrap",
      height: 1,
      width: 2,
      children: zn,
    })),
      (Qe[6] = Ae),
      (Qe[7] = zn),
      (Qe[8] = ji));
  else ji = Qe[8];
  return ji;
}
function applyApiMetricsEvent({ entries: n, responseLength: s, event: c }) {
  if (c.type === "start")
    return (
      n.push({
        id: c.id,
        ttftMs: c.ttftMs,
        firstTokenTime: Date.now(),
        lastTokenTime: Date.now(),
        responseLengthBaseline: s,
        endResponseLength: s,
      }),
      s
    );
  let l =
    c.id != null
      ? n.find((f) => f.id === c.id)
      : n.findLast((f) => f.id == null);
  if (!l) return s;
  if (c.type === "content_block_start")
    return (
      (l.thinkingTokenEstimate = 0),
      (l.thinkingBlockBaseline = s),
      (l.sawEstimatedTokensThisBlock = !1),
      s
    );
  if (c.type === "thinking_progress") {
    if (
      ((l.sawEstimatedTokensThisBlock = !0),
      (l.thinkingTokenEstimate =
        (l.thinkingTokenEstimate ?? 0) + c.estimatedTokensDelta),
      l.outputTokens == null && c.id == null)
    ) {
      let f = l.thinkingBlockBaseline ?? l.responseLengthBaseline;
      return Math.max(s, f + l.thinkingTokenEstimate * 4);
    }
    return s;
  }
  if (c.type === "thinking_signature") {
    if (c.chars > 0 && l.outputTokens == null) {
      if (((l.lastTokenTime = Date.now()), l.sawEstimatedTokensThisBlock)) {
        l.thinkingTokenEstimate = Math.max(
          l.thinkingTokenEstimate ?? 0,
          Math.ceil(c.chars / 4),
        );
        let g = l.thinkingBlockBaseline ?? l.responseLengthBaseline,
          h = Math.max(s, g + l.thinkingTokenEstimate * 4);
        return ((l.endResponseLength = h), h);
      }
      let f = s + c.chars;
      return ((l.endResponseLength = f), f);
    }
    return s;
  }
  if (
    ((l.outputTokens = c.outputTokens),
    (l.lastTokenTime = Date.now()),
    c.id == null)
  )
    return Math.max(s, l.responseLengthBaseline + c.outputTokens * 4);
  return s;
}
function Gi(n) {
  if (!n) return;
  let s = n.filter((l) => l.status === "pending");
  if (s.length === 0) return;
  let c = new Set(n.filter((l) => l.status !== "completed").map((l) => l.id));
  return s.find((l) => !l.blockedBy.some((f) => c.has(f))) ?? s[0];
}
export { ExpandedTasksPanel, useSessionEffortLevel, SpinnerMessageText, IntensitySpinnerGlyph, SpinnerRetryStatusLine, useSpinnerRenderInput, RemoteConnectionStatusLine, SpinnerGlyph, applyApiMetricsEvent };

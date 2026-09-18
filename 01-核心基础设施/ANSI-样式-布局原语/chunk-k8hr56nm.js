// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { vW } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../遥测-OpenTelemetry/analytics-fields.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { isThemeColorKey } from "../../02-功能模块/状态栏-主题/chunk-jz6b76hr.js";
import { Zd, m4, uF, ga, Kx, Z0 } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { ThemeProvider, useResolvedTheme, KillRingProvider } from "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { StorageV5ContextProvider } from "../核心工具-未归类/storage-v5-context.js";
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getStringWidth, CONTROL_CHAR_CODES, CSI_COMMAND_CODES, ERASE_DISPLAY_REGIONS, ERASE_LINE_REGIONS, CURSOR_STYLE_PRESETS, createAnsiTokenizer } from "../核心工具-字符串与文本/ansi-text-utils.js";
import { stripAnsi } from "../核心工具-字符串与文本/text-sanitization.js";
import { shouldUseFullscreen } from "../../02-功能模块/终端环境探测-TUI-tmux/终端环境探测-TUI-tmux.5pkb0sjc.js";
import { sessionServicesFor } from "../../02-功能模块/认证-OAuth登录/credentials-store.js";
import { setTerminalHooks, formatOscSequence, wrapOscForMultiplexer, OSC_CODES, parseOscSequence, RESET_TITLE_AND_ICON_SEQUENCE, RESET_TAB_STATUS_SEQUENCE, isTabStatusEnabled, formatTabStatus } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { getInkInstanceRegistry } from "../../02-功能模块/多会话视图-Fleet/ink-instance-registry.js";
import {
  KB,
  d4,
  JOt,
  QOt,
  Q0,
  sa,
  v9e,
  rDt,
  Yye,
  lF,
} from "../../00-第三方库/ink/ink + react-reconciler.5rs3h07b.js";
import { TERMINAL_MODE_CODES, DISABLE_MOUSE_TRACKING } from "../../02-功能模块/终端环境探测-TUI-tmux/terminal-mode-sequences.js";
import { CLOCK_TICK_INTERVAL_MS, useTerminalFocusState, setTimeoutWithCancel, noopSubscribe, getNullSnapshot, ClockContext } from "../终端与时钟/clock-and-terminal-focus.js";
import { uee, Tf } from "../../00-第三方库/supports-color/chunk-gdyh44zt.js";
import { useClock } from "../终端与时钟/use-clock.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, Ry, Yl, re, De, E, dn, V, C, d, At, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { getGraphemeSegmenter } from "../核心工具-日期与本地化/intl-text-utils.js";
import { MEMO_CACHE_SENTINEL, EARLY_RETURN_SENTINEL } from "../内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
F();
function ao() {
  return { latched: null };
}
var de = Qt(null);
function Ke() {
  return shouldUseFullscreen() ? "fullscreen" : "inline";
}
function fe(Rr) {
  let Er = _(3),
    { value: kr, children: Ve } = Rr,
    [Tr] = d(ao);
  const Ge = kr ?? Tr;
  let uo;
  if (Er[0] !== Ve || Er[1] !== Ge)
    ((uo = e(de.Provider, { value: Ge, children: Ve })),
      (Er[0] = Ve),
      (Er[1] = Ge),
      (Er[2] = uo));
  else uo = Er[2];
  return uo;
}
function useRenderMode() {
  let r = De(de);
  if (r === null) return Ke();
  if (typeof r === "string") return r;
  if (r.latched === null) r.latched = Ke();
  return r.latched;
}
function isFullscreen() {
  return useRenderMode() === "fullscreen";
}
F();
function ze() {
  return {
    markdownTokens: new Map(),
    highlightedCode: new Map(),
    structuredDiff: new WeakMap(),
  };
}
var Ye = Qt(null);
function Je({ children: r }) {
  let s = C(null);
  return (
    (s.current ??= ze()),
    e(Ye.Provider, { value: s.current, children: r })
  );
}
function useRenderCaches() {
  let r = De(Ye),
    s = C(null);
  if (r) return r;
  return ((s.current ??= ze()), s.current);
}
import { Stream } from "stream";
import { writeSync } from "fs";
function co() {
  if (!process.stdout.isTTY) return;
  try {
    (QOt(), writeSync(1, DISABLE_MOUSE_TRACKING));
    let r = getInkInstanceRegistry().get(process.stdout);
    if (r?.isAltScreenActive)
      try {
        r.unmount();
      } catch {
        writeSync(1, uF());
      }
    if (
      (r?.drainStdin(),
      r?.detachForShutdown(),
      rDt(),
      !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE)
    )
      writeSync(1, RESET_TITLE_AND_ICON_SEQUENCE);
  } catch {}
}
function po() {
  getInkInstanceRegistry().get(process.stdout)?.drainStdin();
}
var ye = { cleanupTerminalModes: co, drainStdin: po };
var mo = (r, s) => {
    let l = ho(s),
      c = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...l,
      },
      f = bo(c.stdout, () => new Yye(c));
    return (
      f.render(r),
      {
        rerender: f.render,
        unmount() {
          f.unmount();
        },
        waitUntilExit: f.waitUntilExit,
        cleanup: () => getInkInstanceRegistry().delete(c.stdout),
      }
    );
  },
  yo = async (r, s) => {
    let l = getInkInstanceRegistry();
    while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
    await Promise.resolve();
    let c = mo(r, s);
    return (
      logForDebugging(
        `[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`,
      ),
      c
    );
  },
  he = yo;
async function $e({
  stdout: r = process.stdout,
  stdin: s = process.stdin,
  stderr: l = process.stderr,
  exitOnCtrlC: c = !0,
  patchConsole: f = !0,
  onFrame: h,
  nativeCursor: m,
  isScreenReaderEnabled: b,
  atlasRecorder: S,
} = {}) {
  await Promise.resolve();
  let x = getInkInstanceRegistry();
  while (x.pendingStandaloneRender) await x.pendingStandaloneRender;
  setTerminalHooks(ye);
  let R = new Yye({
    stdout: r,
    stdin: s,
    stderr: l,
    exitOnCtrlC: c,
    patchConsole: f,
    onFrame: h,
    nativeCursor: m,
    isScreenReaderEnabled: b,
    atlasRecorder: S,
  });
  return (
    x.set(r, R),
    {
      render: (v) => R.render(v),
      unmount: () => R.unmount(),
      waitUntilExit: () => R.waitUntilExit(),
    }
  );
}
var ho = (r = {}) => {
    if (r instanceof Stream) return { stdout: r, stdin: process.stdin };
    return r;
  },
  bo = (r, s) => {
    let l = getInkInstanceRegistry(),
      c = l.get(r);
    if (!c) (setTerminalHooks(ye), (c = s()), l.set(r, c));
    return c;
  };
function reportStylePoolHealth() {
  let r = getInkInstanceRegistry().get(process.stdout);
  if (!r) return;
  go(r.getStylePool());
}
function qe() {
  let r = getFeatureValue_CACHED_MAY_BE_STALE("tengu_xterm_atlas_reset", !0),
    s = getFeatureValue_CACHED_MAY_BE_STALE("tengu_basalt_meadow", !1);
  return { autoResetEnabled: r, recording: r || s };
}
function go(r) {
  let s = r.atlasRecorder;
  if (s.debugTainted) return;
  if (!getFeatureValue_CACHED_MAY_BE_STALE("tengu_basalt_meadow", !1)) {
    if (!s.autoResetEnabled) s.recording = !1;
    return;
  }
  s.recording = !0;
  let c = s.proactiveResetStats;
  if (
    (logEvent("tengu_render_glyph_cardinality", {
      stylepool_styles: r.size,
      stylepool_overflowed: r.overflowed,
      atlas_glyph_keys: s.size,
      atlas_keys_saturated: s.saturated,
      term_program: fromEnum(xo()),
      is_xtermjs: Zd(),
      session_age_bucket: fromEnum(Co(vW())),
      proactive_reset_count: c.count,
      proactive_reset_last_reason: fromEnum(c.lastReason),
    }),
    !s.stylePoolHealthyReported)
  )
    ((s.stylePoolHealthyReported = !0), logFeatureOk("render_stylepool"));
  if (r.overflowed && !s.stylePoolCapHitReported)
    ((s.stylePoolCapHitReported = !0), logFeatureSad("render_stylepool", "cap_hit"));
}
function xo() {
  if (a.CURSOR_TRACE_ID !== void 0) return "cursor";
  switch (a.TERM_PROGRAM) {
    case "vscode":
      return "vscode";
    case "iTerm.app":
      return "iterm";
    case "Apple_Terminal":
      return "apple_terminal";
    case "ghostty":
      return "ghostty";
    case "WezTerm":
      return "wezterm";
    case "tmux":
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function Co(r) {
  let s = r / 60000;
  if (s < 5) return "lt_5m";
  if (s < 30) return "5m_30m";
  if (s < 120) return "30m_2h";
  if (s < 480) return "2h_8h";
  return "gt_8h";
}
function w(r, s) {
  if (!r) return;
  if (
    r.startsWith("rgb(") ||
    r.startsWith("#") ||
    r.startsWith("ansi256(") ||
    r.startsWith("ansi:")
  )
    return r;
  return isThemeColorKey(r) ? s[r] : void 0;
}
function Xe(k) {
  let Y = _(26),
    T = useResolvedTheme(),
    be;
  if (Y[0] !== k.borderColor || Y[1] !== T)
    ((be = w(k.borderColor, T)),
      (Y[0] = k.borderColor),
      (Y[1] = T),
      (Y[2] = be));
  else be = Y[2];
  let ge;
  if (Y[3] !== k.borderTopColor || Y[4] !== T)
    ((ge = w(k.borderTopColor, T)),
      (Y[3] = k.borderTopColor),
      (Y[4] = T),
      (Y[5] = ge));
  else ge = Y[5];
  let xe;
  if (Y[6] !== k.borderBottomColor || Y[7] !== T)
    ((xe = w(k.borderBottomColor, T)),
      (Y[6] = k.borderBottomColor),
      (Y[7] = T),
      (Y[8] = xe));
  else xe = Y[8];
  let Ce;
  if (Y[9] !== k.borderLeftColor || Y[10] !== T)
    ((Ce = w(k.borderLeftColor, T)),
      (Y[9] = k.borderLeftColor),
      (Y[10] = T),
      (Y[11] = Ce));
  else Ce = Y[11];
  let Se;
  if (Y[12] !== k.borderRightColor || Y[13] !== T)
    ((Se = w(k.borderRightColor, T)),
      (Y[12] = k.borderRightColor),
      (Y[13] = T),
      (Y[14] = Se));
  else Se = Y[14];
  let ve;
  if (Y[15] !== k.backgroundColor || Y[16] !== T)
    ((ve = w(k.backgroundColor, T)),
      (Y[15] = k.backgroundColor),
      (Y[16] = T),
      (Y[17] = ve));
  else ve = Y[17];
  let So;
  if (
    Y[18] !== k ||
    Y[19] !== be ||
    Y[20] !== ge ||
    Y[21] !== xe ||
    Y[22] !== Ce ||
    Y[23] !== Se ||
    Y[24] !== ve
  )
    ((So = e(ga, {
      ...k,
      borderColor: be,
      borderTopColor: ge,
      borderBottomColor: xe,
      borderLeftColor: Ce,
      borderRightColor: Se,
      backgroundColor: ve,
    })),
      (Y[18] = k),
      (Y[19] = be),
      (Y[20] = ge),
      (Y[21] = xe),
      (Y[22] = Ce),
      (Y[23] = Se),
      (Y[24] = ve),
      (Y[25] = So));
  else So = Y[25];
  return So;
}
var Box = Xe;
F();
F();
var HoverHighlightContext = Qt(!1);
function ue(r, s) {
  if (!r) return;
  if (
    r.startsWith("rgb(") ||
    r.startsWith("#") ||
    r.startsWith("ansi256(") ||
    r.startsWith("ansi:")
  )
    return r;
  return isThemeColorKey(r) ? s[r] : void 0;
}
function Text(Qe) {
  let Re = _(31),
    ke,
    Te,
    Ee,
    Ae,
    Ze,
    et,
    tt,
    ot,
    rt,
    nt,
    it;
  if (Re[0] !== Qe)
    (({
      color: Ae,
      backgroundColor: Te,
      dimColor: Ze,
      bold: et,
      italic: tt,
      underline: ot,
      strikethrough: rt,
      inverse: nt,
      wrap: it,
      children: Ee,
      ...ke
    } = Qe),
      (Re[0] = Qe),
      (Re[1] = ke),
      (Re[2] = Te),
      (Re[3] = Ee),
      (Re[4] = Ae),
      (Re[5] = Ze),
      (Re[6] = et),
      (Re[7] = tt),
      (Re[8] = ot),
      (Re[9] = rt),
      (Re[10] = nt),
      (Re[11] = it));
  else
    ((ke = Re[1]),
      (Te = Re[2]),
      (Ee = Re[3]),
      (Ae = Re[4]),
      (Ze = Re[5]),
      (et = Re[6]),
      (tt = Re[7]),
      (ot = Re[8]),
      (rt = Re[9]),
      (nt = Re[10]),
      (it = Re[11]));
  let st = Ze === void 0 ? !1 : Ze,
    lt = et === void 0 ? !1 : et,
    ut = tt === void 0 ? !1 : tt,
    at = ot === void 0 ? !1 : ot,
    dt = rt === void 0 ? !1 : rt,
    ft = nt === void 0 ? !1 : nt,
    mt = it === void 0 ? "wrap" : it,
    J = useResolvedTheme(),
    yt = De(HoverHighlightContext),
    vo;
  if (Re[12] !== Ae || Re[13] !== st || Re[14] !== yt || Re[15] !== J)
    ((vo = st && !yt ? J.inactive : ue(Ae, J)),
      (Re[12] = Ae),
      (Re[13] = st),
      (Re[14] = yt),
      (Re[15] = J),
      (Re[16] = vo));
  else vo = Re[16];
  let ht = vo,
    Ro;
  if (Re[17] !== Te || Re[18] !== J)
    ((Ro = ue(Te, J)), (Re[17] = Te), (Re[18] = J), (Re[19] = Ro));
  else Ro = Re[19];
  let bt = Ro,
    To;
  if (
    Re[20] !== ke ||
    Re[21] !== lt ||
    Re[22] !== Ee ||
    Re[23] !== ft ||
    Re[24] !== ut ||
    Re[25] !== bt ||
    Re[26] !== ht ||
    Re[27] !== dt ||
    Re[28] !== at ||
    Re[29] !== mt
  )
    ((To = e(sa, {
      color: ht,
      backgroundColor: bt,
      bold: lt,
      italic: ut,
      underline: at,
      strikethrough: dt,
      inverse: ft,
      wrap: mt,
      ...ke,
      children: Ee,
    })),
      (Re[20] = ke),
      (Re[21] = lt),
      (Re[22] = Ee),
      (Re[23] = ft),
      (Re[24] = ut),
      (Re[25] = bt),
      (Re[26] = ht),
      (Re[27] = dt),
      (Re[28] = at),
      (Re[29] = mt),
      (Re[30] = To));
  else To = Re[30];
  return To;
}
F();
function Link(An) {
  let Ao = _(5),
    { children: wn, url: we, fallback: Pn, assumeSupport: _n } = An,
    Pe = wn ?? we;
  if (_n ? (uee() ?? !0) : Tf()) {
    let ee;
    if (Ao[0] !== Pe || Ao[1] !== we)
      ((ee = e(sa, { children: e("ink-link", { href: we, children: Pe }) })),
        (Ao[0] = Pe),
        (Ao[1] = we),
        (Ao[2] = ee));
    else ee = Ao[2];
    return ee;
  }
  const ee = Pn ?? Pe;
  let wo;
  if (Ao[3] !== ee)
    ((wo = e(sa, { children: ee })), (Ao[3] = ee), (Ao[4] = wo));
  else wo = Ao[4];
  return wo;
}
function gt(r) {
  if (r.length === 0) return null;
  let s = r[0];
  if (s === "c") return { type: "reset" };
  if (s === "7") return { type: "cursor", action: { type: "save" } };
  if (s === "8") return { type: "cursor", action: { type: "restore" } };
  if (s === "D") return { type: "scroll", action: { type: "index" } };
  if (s === "M") return { type: "scroll", action: { type: "reverseIndex" } };
  if (s === "E")
    return { type: "cursor", action: { type: "nextLine", count: 1 } };
  if (s === "H") return null;
  if ("()".includes(s) && r.length >= 2) return null;
  return { type: "unknown", sequence: `\x1B${r}` };
}
function q() {
  return {
    bold: !1,
    dim: !1,
    italic: !1,
    underline: "none",
    blink: !1,
    inverse: !1,
    hidden: !1,
    strikethrough: !1,
    overline: !1,
    fg: { type: "default" },
    bg: { type: "default" },
    underlineColor: { type: "default" },
  };
}
var ae = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite",
  ],
  Po = ["none", "single", "double", "curly", "dotted", "dashed"];
function _o(r) {
  if (r === "") return [{ value: 0, subparams: [], colon: !1 }];
  let s = [],
    l = { value: null, subparams: [], colon: !1 },
    c = "",
    f = !1;
  for (let h = 0; h <= r.length; h++) {
    let m = r[h];
    if (m === ";" || m === void 0) {
      let b = c === "" ? null : parseInt(c, 10);
      if (f) {
        if (b !== null) l.subparams.push(b);
      } else l.value = b;
      (s.push(l),
        (l = { value: null, subparams: [], colon: !1 }),
        (c = ""),
        (f = !1));
    } else if (m === ":") {
      let b = c === "" ? null : parseInt(c, 10);
      if (!f) ((l.value = b), (l.colon = !0), (f = !0));
      else if (b !== null) l.subparams.push(b);
      c = "";
    } else if (m >= "0" && m <= "9") c += m;
  }
  return s;
}
function No(r, s) {
  let l = r[s];
  if (!l) return null;
  if (l.colon && l.subparams.length >= 1) {
    if (l.subparams[0] === 5 && l.subparams.length >= 2)
      return { index: l.subparams[1] };
    if (l.subparams[0] === 2 && l.subparams.length >= 4) {
      let f = l.subparams.length >= 5 ? 1 : 0;
      return {
        r: l.subparams[1 + f],
        g: l.subparams[2 + f],
        b: l.subparams[3 + f],
      };
    }
  }
  let c = r[s + 1];
  if (!c) return null;
  if (c.value === 5 && r[s + 2]?.value !== null && r[s + 2]?.value !== void 0)
    return { index: r[s + 2].value };
  if (c.value === 2) {
    let f = r[s + 2]?.value,
      h = r[s + 3]?.value,
      m = r[s + 4]?.value;
    if (
      f !== null &&
      f !== void 0 &&
      h !== null &&
      h !== void 0 &&
      m !== null &&
      m !== void 0
    )
      return { r: f, g: h, b: m };
  }
  return null;
}
function xt(r, s) {
  let l = _o(r),
    c = { ...s },
    f = 0;
  while (f < l.length) {
    let h = l[f],
      m = h.value ?? 0;
    if (m === 0) {
      ((c = q()), f++);
      continue;
    }
    if (m === 1) {
      ((c.bold = !0), f++);
      continue;
    }
    if (m === 2) {
      ((c.dim = !0), f++);
      continue;
    }
    if (m === 3) {
      ((c.italic = !0), f++);
      continue;
    }
    if (m === 4) {
      ((c.underline = h.colon ? (Po[h.subparams[0]] ?? "single") : "single"),
        f++);
      continue;
    }
    if (m === 5 || m === 6) {
      ((c.blink = !0), f++);
      continue;
    }
    if (m === 7) {
      ((c.inverse = !0), f++);
      continue;
    }
    if (m === 8) {
      ((c.hidden = !0), f++);
      continue;
    }
    if (m === 9) {
      ((c.strikethrough = !0), f++);
      continue;
    }
    if (m === 21) {
      ((c.underline = "double"), f++);
      continue;
    }
    if (m === 22) {
      ((c.bold = !1), (c.dim = !1), f++);
      continue;
    }
    if (m === 23) {
      ((c.italic = !1), f++);
      continue;
    }
    if (m === 24) {
      ((c.underline = "none"), f++);
      continue;
    }
    if (m === 25) {
      ((c.blink = !1), f++);
      continue;
    }
    if (m === 27) {
      ((c.inverse = !1), f++);
      continue;
    }
    if (m === 28) {
      ((c.hidden = !1), f++);
      continue;
    }
    if (m === 29) {
      ((c.strikethrough = !1), f++);
      continue;
    }
    if (m === 53) {
      ((c.overline = !0), f++);
      continue;
    }
    if (m === 55) {
      ((c.overline = !1), f++);
      continue;
    }
    if (m >= 30 && m <= 37) {
      ((c.fg = { type: "named", name: ae[m - 30] }), f++);
      continue;
    }
    if (m === 39) {
      ((c.fg = { type: "default" }), f++);
      continue;
    }
    if (m >= 40 && m <= 47) {
      ((c.bg = { type: "named", name: ae[m - 40] }), f++);
      continue;
    }
    if (m === 49) {
      ((c.bg = { type: "default" }), f++);
      continue;
    }
    if (m >= 90 && m <= 97) {
      ((c.fg = { type: "named", name: ae[m - 90 + 8] }), f++);
      continue;
    }
    if (m >= 100 && m <= 107) {
      ((c.bg = { type: "named", name: ae[m - 100 + 8] }), f++);
      continue;
    }
    if (m === 38 || m === 48 || m === 58) {
      let b = No(l, f);
      if (b) {
        let x =
          "index" in b
            ? { type: "indexed", index: b.index }
            : { type: "rgb", ...b };
        if (m === 38) c.fg = x;
        else if (m === 48) c.bg = x;
        else c.underlineColor = x;
      }
      let S = l[f + 1]?.value;
      f += h.colon ? 1 : S === 5 ? 3 : S === 2 ? 5 : 1;
      continue;
    }
    if (m === 59) {
      ((c.underlineColor = { type: "default" }), f++);
      continue;
    }
    f++;
  }
  return c;
}
function* Ct(r) {
  let s = !0;
  for (let l = 0; l < r.length; l++)
    if (r.charCodeAt(l) >= 128) {
      s = !1;
      break;
    }
  if (s) {
    for (let l = 0; l < r.length; l++) yield { value: r[l], width: 1 };
    return;
  }
  for (let { segment: l } of getGraphemeSegmenter().segment(r)) {
    if (l.length === 1) {
      let c = l.charCodeAt(0);
      if (c >= 32 && c < 127) {
        yield { value: l, width: 1 };
        continue;
      }
    }
    yield { value: l, width: Math.max(1, getStringWidth(l)) };
  }
}
function Oo(r, s) {
  switch (r) {
    case TERMINAL_MODE_CODES.CURSOR_VISIBLE:
      return {
        type: "cursor",
        action: s ? { type: "show" } : { type: "hide" },
      };
    case TERMINAL_MODE_CODES.ALT_SCREEN_CLEAR:
    case TERMINAL_MODE_CODES.ALT_SCREEN:
      return { type: "mode", action: { type: "alternateScreen", enabled: s } };
    case TERMINAL_MODE_CODES.BRACKETED_PASTE:
      return { type: "mode", action: { type: "bracketedPaste", enabled: s } };
    case TERMINAL_MODE_CODES.MOUSE_NORMAL:
      return {
        type: "mode",
        action: { type: "mouseTracking", mode: s ? "normal" : "off" },
      };
    case TERMINAL_MODE_CODES.MOUSE_BUTTON:
      return {
        type: "mode",
        action: { type: "mouseTracking", mode: s ? "button" : "off" },
      };
    case TERMINAL_MODE_CODES.MOUSE_ANY:
      return {
        type: "mode",
        action: { type: "mouseTracking", mode: s ? "any" : "off" },
      };
    case TERMINAL_MODE_CODES.FOCUS_EVENTS:
      return { type: "mode", action: { type: "focusEvents", enabled: s } };
    default:
      return null;
  }
}
function Mo(r) {
  let s = r.slice(2);
  if (s.length === 0) return null;
  let l = s.charCodeAt(s.length - 1),
    c = s.slice(0, -1),
    f = "",
    h = c,
    m = "";
  if (c.length > 0 && "?>=<".includes(c[0])) ((f = c[0]), (h = c.slice(1)));
  let b = h.charCodeAt(h.length - 1);
  if (h.length > 0 && !(b >= 48 && b <= 59)) {
    let v = h.match(/([^0-9;:]+)$/);
    if (v) ((m = v[1]), (h = h.slice(0, -m.length)));
  }
  if (l === CSI_COMMAND_CODES.SGR && f === "") return { type: "sgr", params: h };
  let S =
      h === ""
        ? []
        : h.split(/[;:]/).map((v) => (v === "" ? 0 : parseInt(v, 10))),
    x = S[0] ?? 1,
    R = S[1] ?? 1;
  if (l === CSI_COMMAND_CODES.CUU)
    return {
      type: "cursor",
      action: { type: "move", direction: "up", count: x },
    };
  if (l === CSI_COMMAND_CODES.CUD || l === CSI_COMMAND_CODES.VPR)
    return {
      type: "cursor",
      action: { type: "move", direction: "down", count: x },
    };
  if (l === CSI_COMMAND_CODES.CUF || l === CSI_COMMAND_CODES.HPR)
    return {
      type: "cursor",
      action: { type: "move", direction: "forward", count: x },
    };
  if (l === CSI_COMMAND_CODES.CUB)
    return {
      type: "cursor",
      action: { type: "move", direction: "back", count: x },
    };
  if (l === CSI_COMMAND_CODES.CNL)
    return { type: "cursor", action: { type: "nextLine", count: x } };
  if (l === CSI_COMMAND_CODES.CPL)
    return { type: "cursor", action: { type: "prevLine", count: x } };
  if (l === CSI_COMMAND_CODES.CHA || l === CSI_COMMAND_CODES.HPA)
    return { type: "cursor", action: { type: "column", col: x } };
  if (l === CSI_COMMAND_CODES.CUP || l === CSI_COMMAND_CODES.HVP)
    return { type: "cursor", action: { type: "position", row: x, col: R } };
  if (l === CSI_COMMAND_CODES.VPA) return { type: "cursor", action: { type: "row", row: x } };
  if (l === CSI_COMMAND_CODES.ED)
    return {
      type: "erase",
      action: { type: "display", region: ERASE_DISPLAY_REGIONS[S[0] ?? 0] ?? "toEnd" },
    };
  if (l === CSI_COMMAND_CODES.EL)
    return {
      type: "erase",
      action: { type: "line", region: ERASE_LINE_REGIONS[S[0] ?? 0] ?? "toEnd" },
    };
  if (l === CSI_COMMAND_CODES.ECH)
    return { type: "erase", action: { type: "chars", count: x } };
  if (l === CSI_COMMAND_CODES.IL)
    return { type: "edit", action: { type: "insertLines", count: x } };
  if (l === CSI_COMMAND_CODES.DL)
    return { type: "edit", action: { type: "deleteLines", count: x } };
  if (l === CSI_COMMAND_CODES.ICH)
    return { type: "edit", action: { type: "insertChars", count: x } };
  if (l === CSI_COMMAND_CODES.DCH)
    return { type: "edit", action: { type: "deleteChars", count: x } };
  if (l === CSI_COMMAND_CODES.SU) return { type: "scroll", action: { type: "up", count: x } };
  if (l === CSI_COMMAND_CODES.SD)
    return { type: "scroll", action: { type: "down", count: x } };
  if (l === CSI_COMMAND_CODES.DECSTBM)
    return {
      type: "scroll",
      action: { type: "setRegion", top: x, bottom: S[1] ?? 0 },
    };
  if (l === CSI_COMMAND_CODES.SCOSC) return { type: "cursor", action: { type: "save" } };
  if (l === CSI_COMMAND_CODES.SCORC) return { type: "cursor", action: { type: "restore" } };
  if (l === CSI_COMMAND_CODES.DECSCUSR && m === " ")
    return { type: "cursor", action: { type: "style", ...(CURSOR_STYLE_PRESETS[x] ?? CURSOR_STYLE_PRESETS[0]) } };
  if (f === "?" && (l === CSI_COMMAND_CODES.SM || l === CSI_COMMAND_CODES.RM)) {
    let v = l === CSI_COMMAND_CODES.SM,
      N = [];
    for (let O of S) {
      let P = Oo(O, v);
      if (P) N.push(P);
    }
    return N.length ? N : { type: "unknown", sequence: r };
  }
  return { type: "unknown", sequence: r };
}
function Io(r) {
  if (r.length < 2) return "unknown";
  if (r.charCodeAt(0) !== CONTROL_CHAR_CODES.ESC) return "unknown";
  let s = r.charCodeAt(1);
  if (s === 91) return "csi";
  if (s === 93) return "osc";
  if (s === 79) return "ss3";
  return "esc";
}
class ce {
  tokenizer;
  forOutput;
  tail = "";
  constructor(r) {
    ((this.forOutput = r?.forOutput ?? !1),
      (this.tokenizer = createAnsiTokenizer({ forOutput: this.forOutput })));
  }
  style = q();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let r = this.processText(this.tail, !1);
    return ((this.tail = ""), r);
  }
  reset() {
    ((this.tail = ""),
      this.tokenizer.reset(),
      (this.style = q()),
      (this.inLink = !1),
      (this.linkUrl = void 0));
  }
  feed(r) {
    let s = this.tokenizer.feed(r),
      l = [];
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (f.type === "text") {
        let h = this.tail + f.value;
        this.tail = "";
        let m = this.forOutput && c === s.length - 1;
        l.push(...this.processText(h, m));
      } else {
        if (this.tail)
          (l.push(...this.processText(this.tail, !1)), (this.tail = ""));
        l.push(...this.processSequence(f.value));
      }
    }
    return l;
  }
  processText(r, s) {
    let l = this.style;
    if (r.indexOf("\x07") === -1) {
      let h = [...Ct(r)];
      return (
        this.holdTail(h, s),
        h.length > 0 ? [{ type: "text", graphemes: h, style: l }] : []
      );
    }
    let c = [];
    for (let h of r.split("\x07")) {
      if (h) {
        let m = [...Ct(h)];
        if (m.length > 0) c.push({ type: "text", graphemes: m, style: l });
      }
      c.push({ type: "bell" });
    }
    c.pop();
    let f = c.at(-1);
    if (f?.type === "text") {
      if ((this.holdTail(f.graphemes, s), f.graphemes.length === 0)) c.pop();
    }
    return c;
  }
  holdTail(r, s) {
    if (!s || r.length === 0) return;
    let l = r.at(-1),
      c = l.value.charCodeAt(l.value.length - 1);
    if (c < 32) return;
    if (
      ((this.tail = l.value), r.pop(), c >= 55296 && c <= 56319 && r.length > 0)
    )
      this.tail = r.pop().value + this.tail;
    while (r.length > 0 && this.tail.length <= 64) {
      let f = r.at(-1).value,
        h = f.charCodeAt(f.length - 1),
        m = h >= 56320 && h <= 57343 ? f.codePointAt(f.length - 2) : h;
      if (m === 8205 || (m !== void 0 && m >= 127462 && m <= 127487))
        ((this.tail = f + this.tail), r.pop());
      else break;
    }
  }
  processSequence(r) {
    switch (Io(r)) {
      case "csi": {
        let l = Mo(r);
        if (!l) return [];
        if (Array.isArray(l)) return l;
        if (l.type === "sgr")
          return ((this.style = xt(l.params, this.style)), []);
        return [l];
      }
      case "osc": {
        let l = r.slice(2);
        if (l.endsWith("\x07")) l = l.slice(0, -1);
        else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
        let c = parseOscSequence(l);
        if (c) {
          if (c.type === "link")
            if (c.action.type === "start")
              ((this.inLink = !0), (this.linkUrl = c.action.url));
            else ((this.inLink = !1), (this.linkUrl = void 0));
          return [c];
        }
        return [];
      }
      case "esc": {
        let l = r.slice(1),
          c = gt(l);
        if (c?.type === "reset")
          ((this.style = q()), (this.inLink = !1), (this.linkUrl = void 0));
        return c ? [c] : [];
      }
      case "ss3":
        return [{ type: "unknown", sequence: r }];
      default:
        return [{ type: "unknown", sequence: r }];
    }
  }
}
var Ansi = Yl(function (ti) {
  let _e = _(19),
    { children: oe, dimColor: j, italic: G, wrap: U } = ti;
  if (typeof oe !== "string") {
    const ne = !!j;
    const K = !!G;
    const I = String(oe);
    let ie;
    if (_e[0] !== ne || _e[1] !== K || _e[2] !== I || _e[3] !== U)
      ((ie = e(sa, { dim: ne, italic: K, wrap: U, children: I })),
        (_e[0] = ne),
        (_e[1] = K),
        (_e[2] = I),
        (_e[3] = U),
        (_e[4] = ie));
    else ie = _e[4];
    return ie;
  }
  if (oe === "") {
    return null;
  }
  let ne, K;
  if (_e[5] !== oe || _e[6] !== j || _e[7] !== G || _e[8] !== U) {
    K = EARLY_RETURN_SENTINEL;
    bb0: {
      let se = kt(oe);
      if (se.length === 0) {
        K = null;
        break bb0;
      }
      if (
        se.length === 1 &&
        !pe(se[0].props) &&
        se[0].props.hyperlink === void 0
      ) {
        K = e(sa, { dim: !!j, italic: !!G, wrap: U, children: se[0].text });
        break bb0;
      }
      let I;
      if (_e[11] !== j || _e[12] !== G)
        ((I = (A, Lo) => {
          let Bo = A.props.hyperlink;
          if (j) A.props.dim = !0;
          if (G) A.props.italic = !0;
          let Do = pe(A.props)
            ? e(
                Oe,
                {
                  color: A.props.color,
                  backgroundColor: A.props.backgroundColor,
                  dim: A.props.dim,
                  bold: A.props.bold,
                  italic: A.props.italic,
                  underline: A.props.underline,
                  strikethrough: A.props.strikethrough,
                  inverse: A.props.inverse,
                  children: A.text,
                },
                Lo,
              )
            : A.text;
          return Bo ? e(Link, { url: Bo, children: Do }, Lo) : Do;
        }),
          (_e[11] = j),
          (_e[12] = G),
          (_e[13] = I));
      else I = _e[13];
      ne = se.map(I);
    }
    ((_e[5] = oe),
      (_e[6] = j),
      (_e[7] = G),
      (_e[8] = U),
      (_e[9] = ne),
      (_e[10] = K));
  } else ((ne = _e[9]), (K = _e[10]));
  if (K !== EARLY_RETURN_SENTINEL) return K;
  let St = ne;
  const I = !!j,
    ie = !!G;
  let Fo;
  if (_e[14] !== St || _e[15] !== I || _e[16] !== ie || _e[17] !== U)
    ((Fo = e(sa, { dim: I, italic: ie, wrap: U, children: St })),
      (_e[14] = St),
      (_e[15] = I),
      (_e[16] = ie),
      (_e[17] = U),
      (_e[18] = Fo));
  else Fo = _e[18];
  return Fo;
});
function kt(r) {
  let l = new ce().feed(r),
    c = [],
    f;
  for (let h of l) {
    if (h.type === "link") {
      if (h.action.type === "start") f = h.action.url;
      else f = void 0;
      continue;
    }
    if (h.type === "text") {
      let m = h.graphemes.map((x) => x.value).join("");
      if (!m) continue;
      let b = Ho(h.style);
      if (f) b.hyperlink = f;
      let S = c.at(-1);
      if (S && Vo(S.props, b)) S.text += m;
      else c.push({ text: m, props: b });
    }
  }
  return c;
}
function Ho(r) {
  return {
    color: Tt(r.fg),
    backgroundColor: Tt(r.bg),
    dim: r.dim ? !0 : void 0,
    bold: r.bold ? !0 : void 0,
    italic: r.italic ? !0 : void 0,
    underline: r.underline !== "none" ? !0 : void 0,
    strikethrough: r.strikethrough ? !0 : void 0,
    inverse: r.inverse ? !0 : void 0,
    hyperlink: void 0,
  };
}
var jo = {
  black: "ansi:black",
  red: "ansi:red",
  green: "ansi:green",
  yellow: "ansi:yellow",
  blue: "ansi:blue",
  magenta: "ansi:magenta",
  cyan: "ansi:cyan",
  white: "ansi:white",
  brightBlack: "ansi:blackBright",
  brightRed: "ansi:redBright",
  brightGreen: "ansi:greenBright",
  brightYellow: "ansi:yellowBright",
  brightBlue: "ansi:blueBright",
  brightMagenta: "ansi:magentaBright",
  brightCyan: "ansi:cyanBright",
  brightWhite: "ansi:whiteBright",
};
function Tt(r) {
  switch (r.type) {
    case "named":
      return jo[r.name];
    case "indexed":
      return `ansi256(${r.index})`;
    case "rgb":
      return `rgb(${r.r},${r.g},${r.b})`;
    case "default":
      return;
  }
}
function Vo(r, s) {
  return (
    r.color === s.color &&
    r.backgroundColor === s.backgroundColor &&
    r.bold === s.bold &&
    r.dim === s.dim &&
    r.italic === s.italic &&
    r.underline === s.underline &&
    r.strikethrough === s.strikethrough &&
    r.inverse === s.inverse &&
    r.hyperlink === s.hyperlink
  );
}
function pe(r) {
  return (
    r.color !== void 0 ||
    r.backgroundColor !== void 0 ||
    r.dim === !0 ||
    r.bold === !0 ||
    r.italic === !0 ||
    r.underline === !0 ||
    r.strikethrough === !0 ||
    r.inverse === !0
  );
}
function Oe(Rt) {
  let Ne = _(14),
    Uo,
    L,
    Wo,
    B;
  if (Ne[0] !== Rt)
    (({ bold: Uo, dim: Wo, children: L, ...B } = Rt),
      (Ne[0] = Rt),
      (Ne[1] = Uo),
      (Ne[2] = L),
      (Ne[3] = Wo),
      (Ne[4] = B));
  else ((Uo = Ne[1]), (L = Ne[2]), (Wo = Ne[3]), (B = Ne[4]));
  if (Wo) {
    let z;
    if (Ne[5] !== L || Ne[6] !== B)
      ((z = e(sa, { ...B, dim: !0, children: L })),
        (Ne[5] = L),
        (Ne[6] = B),
        (Ne[7] = z));
    else z = Ne[7];
    return z;
  }
  if (Uo) {
    let z;
    if (Ne[8] !== L || Ne[9] !== B)
      ((z = e(sa, { ...B, bold: !0, children: L })),
        (Ne[8] = L),
        (Ne[9] = B),
        (Ne[10] = z));
    else z = Ne[10];
    return z;
  }
  let z;
  if (Ne[11] !== L || Ne[12] !== B)
    ((z = e(sa, { ...B, children: L })),
      (Ne[11] = L),
      (Ne[12] = B),
      (Ne[13] = z));
  else z = Ne[13];
  return z;
}
F();
function Ht(Et) {
  let M = _(37),
    Me,
    le,
    X,
    Ie,
    Le,
    wt,
    Pt;
  if (M[0] !== Et)
    (({
      onAction: X,
      tabIndex: wt,
      autoFocus: Me,
      mountSettleMs: Pt,
      children: le,
      ref: Ie,
      ...Le
    } = Et),
      (M[0] = Et),
      (M[1] = Me),
      (M[2] = le),
      (M[3] = X),
      (M[4] = Ie),
      (M[5] = Le),
      (M[6] = wt),
      (M[7] = Pt));
  else
    ((Me = M[1]),
      (le = M[2]),
      (X = M[3]),
      (Ie = M[4]),
      (Le = M[5]),
      (wt = M[6]),
      (Pt = M[7]));
  let _t = wt === void 0 ? 0 : wt,
    Nt = Pt === void 0 ? v9e : Pt,
    [Ot, Go] = d(!1),
    [Mt, Ko] = d(!1),
    [It, zo] = d(!1),
    W = useClock(),
    Lt = C(null),
    Yo;
  if (M[8] !== W) ((Yo = () => W.now()), (M[8] = W), (M[9] = Yo));
  else Yo = M[9];
  let [Bt] = d(Yo),
    Jo,
    $o;
  if (M[10] === MEMO_CACHE_SENTINEL)
    ((Jo = () => () => {
      Lt.current?.();
    }),
      ($o = []),
      (M[10] = Jo),
      (M[11] = $o));
  else ((Jo = M[10]), ($o = M[11]));
  E(Jo, $o);
  let qo;
  if (M[12] !== W || M[13] !== X)
    ((qo = (Dt) => {
      if (Dt.key === "return" || Dt.key === " ")
        (Dt.preventDefault(),
          zo(!0),
          X(),
          Lt.current?.(),
          (Lt.current = W.setTimeout(() => zo(!1), 100)));
    }),
      (M[12] = W),
      (M[13] = X),
      (M[14] = qo));
  else qo = M[14];
  let Ft = qo,
    Xo;
  if (M[15] !== W || M[16] !== Nt || M[17] !== Bt || M[18] !== X)
    ((Xo = (Qo) => {
      if (Qo.isWindowActivation || W.now() - Bt < Nt) {
        Qo.dropAsStray();
        return;
      }
      X();
    }),
      (M[15] = W),
      (M[16] = Nt),
      (M[17] = Bt),
      (M[18] = X),
      (M[19] = Xo));
  else Xo = M[19];
  let Ut = Xo,
    Zo;
  if (M[20] === MEMO_CACHE_SENTINEL) ((Zo = (_e) => Go(!0)), (M[20] = Zo));
  else Zo = M[20];
  let ci = Zo,
    er;
  if (M[21] === MEMO_CACHE_SENTINEL) ((er = (_e_0) => Go(!1)), (M[21] = er));
  else er = M[21];
  let pi = er,
    tr;
  if (M[22] === MEMO_CACHE_SENTINEL) ((tr = () => Ko(!0)), (M[22] = tr));
  else tr = M[22];
  let di = tr,
    or;
  if (M[23] === MEMO_CACHE_SENTINEL) ((or = () => Ko(!1)), (M[23] = or));
  else or = M[23];
  let fi = or,
    rr;
  if (M[24] !== le || M[25] !== It || M[26] !== Ot || M[27] !== Mt) {
    let mi = { focused: Ot, hovered: Mt, active: It };
    rr = typeof le === "function" ? le(mi) : le;
    ((M[24] = le), (M[25] = It), (M[26] = Ot), (M[27] = Mt), (M[28] = rr));
  } else rr = M[28];
  let Wt = rr,
    nr;
  if (
    M[29] !== Me ||
    M[30] !== Wt ||
    M[31] !== Ut ||
    M[32] !== Ft ||
    M[33] !== Ie ||
    M[34] !== Le ||
    M[35] !== _t
  )
    ((nr = e(ga, {
      ref: Ie,
      tabIndex: _t,
      autoFocus: Me,
      onKeyDown: Ft,
      onClick: Ut,
      onFocus: ci,
      onBlur: pi,
      onMouseEnter: di,
      onMouseLeave: fi,
      ...Le,
      children: Wt,
    })),
      (M[29] = Me),
      (M[30] = Wt),
      (M[31] = Ut),
      (M[32] = Ft),
      (M[33] = Ie),
      (M[34] = Le),
      (M[35] = _t),
      (M[36] = nr));
  else nr = M[36];
  return nr;
}
var Button = Ht;
F();
function useIsScreenReaderEnabled() {
  return De(JOt);
}
function Decorative(ki) {
  let { children: Ti, fallback: Ei } = ki;
  return useIsScreenReaderEnabled() ? (Ei ?? null) : Ti;
}
function Newline(wi) {
  let sr = _(4),
    { count: ir } = wi,
    jt = ir === void 0 ? 1 : ir,
    Be;
  if (sr[0] !== jt)
    ((Be = `
`.repeat(jt)),
      (sr[0] = jt),
      (sr[1] = Be));
  else Be = sr[1];
  let lr;
  if (sr[2] !== Be)
    ((lr = e("ink-text", { children: Be })), (sr[2] = Be), (sr[3] = lr));
  else lr = sr[3];
  return lr;
}
function NoSelect(Vt) {
  let ur = _(9),
    Fe,
    Ue,
    Gt;
  if (ur[0] !== Vt)
    (({ children: Ue, fromLeftEdge: Gt, ...Fe } = Vt),
      (ur[0] = Vt),
      (ur[1] = Fe),
      (ur[2] = Ue),
      (ur[3] = Gt));
  else ((Fe = ur[1]), (Ue = ur[2]), (Gt = ur[3]));
  const Kt = Gt ? "stretch" : void 0,
    zt = Gt ? "from-left-edge" : !0;
  let ar;
  if (ur[4] !== Fe || ur[5] !== Ue || ur[6] !== Kt || ur[7] !== zt)
    ((ar = e(ga, { alignSelf: Kt, ...Fe, noSelect: zt, children: Ue })),
      (ur[4] = Fe),
      (ur[5] = Ue),
      (ur[6] = Kt),
      (ur[7] = zt),
      (ur[8] = ar));
  else ar = ur[8];
  return ar;
}
function RawAnsi(Bi) {
  let cr = _(6),
    { lines: Q, width: Yt } = Bi;
  if (Q.length === 0) {
    return null;
  }
  let We;
  if (cr[0] !== Q)
    ((We = Q.join(`
`)),
      (cr[0] = Q),
      (cr[1] = We));
  else We = cr[1];
  let pr;
  if (cr[2] !== Q.length || cr[3] !== We || cr[4] !== Yt)
    ((pr = e("ink-raw-ansi", {
      rawText: We,
      rawWidth: Yt,
      rawHeight: Q.length,
    })),
      (cr[2] = Q.length),
      (cr[3] = We),
      (cr[4] = Yt),
      (cr[5] = pr));
  else pr = cr[5];
  return pr;
}
F();
F();
function Jt(r, s) {
  if (!r?.yogaNode || !s) return null;
  let l = r.yogaNode.getComputedHeight(),
    c = s.rows,
    f = r.yogaNode.getComputedTop(),
    { parentNode: h, yogaNode: m } = r;
  while (h) {
    if (h.yogaNode) ((f += h.yogaNode.getComputedTop()), (m = h.yogaNode));
    if (h.scrollTop) f -= d4(h);
    h = h.parentNode;
  }
  let b = m.getComputedHeight(),
    S = f + l,
    x = b > c ? 1 : 0,
    R = Math.max(0, b - c) + x,
    v = R + c;
  if (l === 0) return f >= R && f < v;
  return S > R && f < v;
}
function useTerminalViewport() {
  let r = De(Kx),
    s = C(null),
    l = C({ isVisible: !0 }),
    c = re((x) => {
      s.current = x;
    }, []);
  function f() {
    let x = Jt(s.current, r);
    if (x === null) return l.current.isVisible;
    if (x !== l.current.isVisible) l.current = { isVisible: x };
    return x;
  }
  let h = C(f);
  h.current = f;
  let m = re(() => h.current(), []),
    b = C(r);
  b.current = r;
  let S = re(() => Jt(s.current, b.current), []);
  return (
    dn(() => {
      f();
    }),
    [c, l.current, m, S]
  );
}
var dr = 480;
function He(r) {
  return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(r, dr) : r;
}
function useAnimationFrame(r = 16) {
  let s = De(ClockContext),
    [l, { isVisible: c }, f] = useTerminalViewport(),
    h = useTerminalFocusState(),
    m = C(h),
    b = c;
  if (m.current !== h) ((m.current = h), (b = f()));
  let S = !!s && b && r !== null,
    x = r === null ? null : Math.ceil(He(r) / CLOCK_TICK_INTERVAL_MS) * CLOCK_TICK_INTERVAL_MS,
    R = C(0),
    v = At(S ? s.subscribeKeepAlive : noopSubscribe, () =>
      S
        ? (R.current = Math.max(R.current, Math.floor(s.now() / x) * x))
        : R.current,
    );
  return [l, v];
}
F();
var fr = () => De(Q0),
  useApp = fr;
F();
function useDebouncedCallback(r, s) {
  let l = De(ClockContext),
    c = C(r);
  c.current = r;
  let f = C(null),
    h = re((b) => () => f.current?.(), []);
  At(h, getNullSnapshot);
  let m = l?.setTimeout ?? setTimeoutWithCancel;
  return V(() => {
    let b = (...S) => {
      (f.current?.(),
        (f.current = m(() => {
          ((f.current = null), c.current(...S));
        }, s)));
    };
    return (
      (b.cancel = () => {
        (f.current?.(), (f.current = null));
      }),
      b
    );
  }, [m, s]);
}
F();
var $t = () => () => {};
function useFocus() {
  let { focusManager: r, rootNode: s } = De(Q0),
    l = At(r?.subscribe ?? $t, () => r?.activeElement ?? null);
  return V(
    () => ({
      activeElement: l,
      focusNext: () => {
        if (r && s) r.focusNext(s);
      },
      focusPrevious: () => {
        if (r && s) r.focusPrevious(s);
      },
      focusDirection: (c) => {
        if (r && s) return r.focusDirection(c, s);
        return !1;
      },
      focus: (c) => r?.focus(c),
      blur: () => r?.blur(),
      subscribe: r?.subscribe ?? $t,
    }),
    [l, r, s],
  );
}
F();
var mr = () => () => {};
function useHasFocus(r) {
  let { focusManager: s } = De(Q0);
  return At(
    s?.subscribe ?? mr,
    () => {
      let l = r.current,
        c = s?.activeElement;
      if (!l || !c) return !1;
      return KB(c, l);
    },
    () => !1,
  );
}
F();
function useAnimationTimer(r) {
  let s = De(ClockContext),
    l = r === null ? null : Math.ceil(He(r) / CLOCK_TICK_INTERVAL_MS) * CLOCK_TICK_INTERVAL_MS,
    c = C(null),
    f = V(() => {
      if (!s || l === null) return noopSubscribe;
      return (h) =>
        s.subscribeFollower(() => {
          ((c.current = s.now()), h());
        });
    }, [s, l]);
  return At(f, () => {
    if (!s || l === null) return ((c.current = null), 0);
    if (c.current === null) c.current = s.now();
    return Math.floor(c.current / l) * l;
  });
}
function useInterval(r, s, l) {
  let c = C(r);
  c.current = r;
  let f = De(ClockContext),
    h = l?.immediate ?? !1,
    m = C(null),
    b = V(
      () =>
        !f || s === null
          ? (S) => ((m.current = null), () => {})
          : (S) => {
              if (h && m.current === null) c.current();
              return ((m.current = s), startClockInterval(f, () => c.current(), s));
            },
      [f, s, h],
    );
  At(b, getNullSnapshot);
}
function startClockInterval(r, s, l) {
  let c = !1,
    f,
    h = () => {
      if (c) return;
      try {
        s();
      } finally {
        if (!c) f = r.setTimeout(h, l);
      }
    };
  return (
    (f = r.setTimeout(h, l)),
    () => {
      ((c = !0), f());
    }
  );
}
F();
function useMeasured(r) {
  let { subscribeLayout: s } = De(Q0);
  return At(s, r);
}
F();
function useSelection() {
  De(m4);
  let r = getInkInstanceRegistry().get(process.stdout);
  return V(() => {
    if (!r)
      return {
        copySelection: () => "",
        copySelectionNoClear: () => "",
        getSelectedText: () => "",
        clearSelection: () => {},
        hasSelection: () => !1,
        getState: () => null,
        subscribe: () => () => {},
        moveFocus: () => {},
        setSelectionBgColor: () => {},
      };
    return {
      copySelection: () => r.copySelection(),
      copySelectionNoClear: () => r.copySelectionNoClear(),
      getSelectedText: () => r.getSelectedText(),
      clearSelection: () => r.clearTextSelection(),
      hasSelection: () => r.hasTextSelection(),
      getState: () => r.selection,
      subscribe: (s) => r.subscribeToSelectionChange(s),
      moveFocus: (s) => r.moveSelectionFocus(s),
      setSelectionBgColor: (s) => r.setSelectionBgColor(s),
    };
  }, [r]);
}
var yr = () => () => {},
  hr = () => !1;
function useHasTextSelection() {
  De(m4);
  let r = getInkInstanceRegistry().get(process.stdout);
  return At(r ? r.subscribeToSelectionChange : yr, r ? r.hasTextSelection : hr);
}
F();
var Z = (r, s, l) => ({ type: "rgb", r, g: s, b: l }),
  br = {
    idle: {
      indicator: Z(0, 215, 95),
      status: "Idle",
      statusColor: Z(136, 136, 136),
    },
    busy: {
      indicator: Z(255, 149, 0),
      status: "Working\u2026",
      statusColor: Z(255, 149, 0),
    },
    waiting: {
      indicator: Z(95, 135, 255),
      status: "Waiting",
      statusColor: Z(95, 135, 255),
    },
  };
function useTabStatus(r, s) {
  let l = De(Z0),
    c = C(null);
  E(() => {
    if (r === null) {
      if (c.current !== null && l && isTabStatusEnabled()) l(wrapOscForMultiplexer(RESET_TAB_STATUS_SEQUENCE));
      c.current = null;
      return;
    }
    if (((c.current = r), !l || !isTabStatusEnabled())) return;
    let f = br[r],
      h = r === "idle" && s !== void 0 ? { ...f, status: s } : f;
    l(wrapOscForMultiplexer(formatTabStatus(h)));
  }, [r, s, l]);
}
F();
function useTerminalTitle(r) {
  let s = De(Z0);
  E(() => {
    if (r === null || !s) return;
    let l = stripAnsi(r);
    s(formatOscSequence(OSC_CODES.SET_TITLE_AND_ICON, l));
  }, [r, s]);
}
F();
var gr = () => !1;
function useTimeout(r, s, l) {
  let c = De(ClockContext),
    f = typeof r === "function",
    h = f ? r : null,
    m = f ? s : r,
    b = f ? void 0 : s,
    S = C(h);
  S.current = h;
  let x = C(null),
    R = c?.setTimeout ?? setTimeoutWithCancel,
    v = V(() => {
      if (m === null) return noopSubscribe;
      let O = (P) => (
        (x.current = null),
        P(),
        R(() => {
          if (((x.current = O), f)) S.current?.();
          else P();
        }, m)
      );
      return O;
    }, [R, m, f, b, ...(l ?? [])]),
    N = At(v, f ? gr : () => x.current === v);
  if (!f) return N;
}
var xr = (r) => ({
    width: r.yogaNode?.getComputedWidth() ?? 0,
    height: r.yogaNode?.getComputedHeight() ?? 0,
  }),
  measureElement = xr;
function je(r, s) {
  let l = Ry(fe, null, Ry(ThemeProvider, null, Ry(KillRingProvider, null, Ry(Je, null, r))));
  return s !== void 0 ? Ry(StorageV5ContextProvider, { ...s, children: l }) : l;
}
function qt() {
  return { nativeCursor: lF(), atlasRecorder: qe() };
}
async function render(r, s, l) {
  let c = l?.storageV5 !== void 0 ? sessionServicesFor(l.storageV5) : void 0;
  if (s !== void 0 && "write" in s) return he(je(r, c), s);
  return he(je(r, c), { ...qt(), ...s });
}
var Xt = new WeakMap();
async function createRoot(r, s) {
  let l = await $e({ ...qt(), ...r }),
    c = s?.storageV5 !== void 0 ? sessionServicesFor(s.storageV5) : void 0,
    f = { ...l, render: (m) => l.render(je(m, c)) },
    h = getInkInstanceRegistry().get(r?.stdout ?? process.stdout);
  if (h) Xt.set(h, f);
  return f;
}
function rootOf(r = process.stdout) {
  let s = getInkInstanceRegistry().get(r);
  return s && Xt.get(s);
}
export {
  useRenderMode,
  isFullscreen,
  useRenderCaches,
  reportStylePoolHealth,
  Box,
  HoverHighlightContext,
  Text,
  Link,
  Ansi,
  Button,
  useIsScreenReaderEnabled,
  Decorative,
  Newline,
  NoSelect,
  RawAnsi,
  useTerminalViewport,
  useAnimationFrame,
  useApp,
  useDebouncedCallback,
  useFocus,
  useHasFocus,
  useAnimationTimer,
  useInterval,
  startClockInterval,
  useMeasured,
  useSelection,
  useHasTextSelection,
  useTabStatus,
  useTerminalTitle,
  useTimeout,
  measureElement,
  render,
  createRoot,
  rootOf,
};

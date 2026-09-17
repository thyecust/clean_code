// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { te } from "../核心工具-字符串与文本/chunk-01cse5zg.js";
import { PROPORTION_GLYPH, THINKING_SPINNER_FRAMES } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { o, t, ct, iO } from "./chunk-k8hr56nm.js";
import { LYt } from "../../02-功能模块/Workflow编排/chunk-0t0sve49.js";
import { HooksError } from "../../02-功能模块/Hooks钩子/chunk-bzqqe6xh.js";
import {
  Uzn,
  Bzn,
  jzn,
  IO,
  mVe,
  Apn,
  WDe,
  Kue,
  pgt,
  gVe,
  bX,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useTerminalSize } from "../共享小工具-未细化/use-terminal-size.js";
import { useStoreSelector } from "../共享小工具-未细化/use-store-selector.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { StaticFrameContext } from "../共享小工具-未细化/one-shot-render.js";
import { useForcedExpandedContent } from "../共享小工具-未细化/expanded-content-context.js";
import { useQueuedMessageContext } from "../共享小工具-未细化/queued-message-context.js";
import { LinkifiedText } from "../共享小工具-未细化/linkified-text.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, Ry, De, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { defineExportGetters } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var le = 600;
function Ke(s, p, i) {
  let f = mVe(s, p);
  return f !== void 0 && f.component === i.component ? f : i;
}
var ue = ["color", "backgroundColor", "borderColor"];
var Y = {
  black: "#000000",
  red: "#e5484d",
  green: "#46a758",
  yellow: "#f5d90a",
  blue: "#3e63dd",
  magenta: "#d6409f",
  cyan: "#05a2c2",
  white: "#ffffff",
  gray: "#8b8d98",
  grey: "#8b8d98",
  blackBright: "#6e6e6e",
  redBright: "#ff6369",
  greenBright: "#5bd07f",
  yellowBright: "#ffe629",
  blueBright: "#5b8def",
  magentaBright: "#ee6ac2",
  cyanBright: "#3ec2e0",
  whiteBright: "#ffffff",
};
var Z = (s) => (Object.hasOwn(Y, s) ? Y[s] : void 0);
function Qe(s) {
  if (!s) return null;
  let p = { ...s };
  for (let i of ue) {
    let f = p[i],
      u = typeof f === "string" ? Z(f) : void 0;
    if (u !== void 0) p[i] = u;
  }
  return p;
}
function de(s, p) {
  let i = {};
  if (p) i.bold = !0;
  if (typeof s !== "string") return i;
  for (let f of s.split(";")) {
    let u = f.indexOf(":");
    if (u === -1) continue;
    let a = f.slice(0, u).trim().toLowerCase(),
      m = f
        .slice(u + 1)
        .trim()
        .toLowerCase(),
      x = a === "font-weight" && (m === "bold" || Number(m) >= le);
    if (a === "color" && m !== "") i.color = Z(m) ?? m;
    else if (x) i.bold = !0;
    else if (a === "font-style" && m === "italic") i.italic = !0;
    else if (a === "text-decoration" && m.includes("underline"))
      i.underline = !0;
  }
  return i;
}
var ee = 12;
F();
F();
var JZ = Qt(null);
F();
var Jit = Qt(null);
function re(v) {
  let Q = _(30),
    { plugin: D, handle: ce, element: K, placeholder: xe } = v,
    Xe = De(JZ),
    O = De(Jit),
    { columns: Ge } = useTerminalSize(),
    Er;
  if (Q[0] !== K || Q[1] !== O || Q[2] !== D || Q[3] !== v.value)
    ((Er = O?.textOf(D, K) ?? v.value ?? ""),
      (Q[0] = K),
      (Q[1] = O),
      (Q[2] = D),
      (Q[3] = v.value),
      (Q[4] = Er));
  else Er = Q[4];
  let I = Er,
    [We, wr] = d(I.length),
    N = v.label === void 0 ? "" : `${v.label}: `,
    X = ` \u23CE ${v.submitLabel ?? "submit"}`,
    R = O !== null && Xe !== null && Xe.plugin === D && Xe.handle === ce,
    kr,
    Ir;
  if (Q[5] !== R)
    ((kr = () => {
      if (R) wr(Number.MAX_SAFE_INTEGER);
    }),
      (Ir = [R]),
      (Q[5] = R),
      (Q[6] = kr),
      (Q[7] = Ir));
  else ((kr = Q[6]), (Ir = Q[7]));
  E(kr, Ir);
  let ye;
  if (Q[8] !== R || Q[9] !== N)
    ((ye = N !== "" && e(t, { bold: R, children: N })),
      (Q[8] = R),
      (Q[9] = N),
      (Q[10] = ye));
  else ye = Q[10];
  let ge;
  if (
    Q[11] !== Ge ||
    Q[12] !== We ||
    Q[13] !== K ||
    Q[14] !== O ||
    Q[15] !== ce ||
    Q[16] !== X ||
    Q[17] !== R ||
    Q[18] !== N ||
    Q[19] !== xe ||
    Q[20] !== D ||
    Q[21] !== I
  )
    ((ge = R
      ? e(hn, {
          value: I,
          onChange: (zo) => O.edit({ plugin: D, handle: ce, element: K }, zo),
          placeholder: xe,
          columns: Math.max(ee, Ge - te(N) - te(X)),
          cursorOffset: Math.min(We, I.length),
          onChangeCursorOffset: wr,
          focus: !0,
          showCursor: !0,
          multiline: !1,
          disableEscapeDoublePress: !0,
        })
      : e(t, {
          dimColor: I === "",
          wrap: "truncate-end",
          children: I === "" ? (xe ?? "") : I,
        })),
      (Q[11] = Ge),
      (Q[12] = We),
      (Q[13] = K),
      (Q[14] = O),
      (Q[15] = ce),
      (Q[16] = X),
      (Q[17] = R),
      (Q[18] = N),
      (Q[19] = xe),
      (Q[20] = D),
      (Q[21] = I),
      (Q[22] = ge));
  else ge = Q[22];
  let Te;
  if (Q[23] !== X || Q[24] !== R)
    ((Te = R && e(t, { dimColor: !0, children: X })),
      (Q[23] = X),
      (Q[24] = R),
      (Q[25] = Te));
  else Te = Q[25];
  let Sr;
  if (Q[26] !== ye || Q[27] !== ge || Q[28] !== Te)
    ((Sr = r(o, {
      flexDirection: "row",
      flexShrink: 0,
      children: [ye, ge, Te],
    })),
      (Q[26] = ye),
      (Q[27] = ge),
      (Q[28] = Te),
      (Q[29] = Sr));
  else Sr = Q[29];
  return Sr;
}
F();
var S = (s, p) =>
  p.catch((i) => {
    n(`${s}: ${l(i)}`, { level: "error" });
    return;
  });
var Qit = (s) =>
  void S(`ui.press ${s.plugin}`, Bzn({ ...s, surface: "terminal" }));
function Re({ plugin: s, handle: p, label: i, hotkey: f, plain: u }) {
  let a = De(JZ),
    m = a !== null && a.plugin === s && a.handle === p;
  return Ry(iO, {
    tabIndex: -1,
    flexShrink: 0,
    alignSelf: "flex-start",
    onAction: () => Qit({ plugin: s, handle: p }),
    children: ({ focused: x, hovered: c }) => {
      let y = x || c || m,
        g = u === !0,
        T = f === void 0;
      return g
        ? Ry(
            t,
            { inverse: y },
            T ? i : Ry(t, { color: "suggestion" }, f),
            T ? "" : ": ",
            T ? "" : i,
          )
        : Ry(t, { inverse: y, bold: !0 }, `[ ${i} ]`);
    },
  });
}
F();
var oe = 8;
function Zit(s, p) {
  let i = Math.max(0, p - oe + 1),
    f = Math.max(0, Math.min(oe, s - i)),
    u = s - i - f;
  return { first: i, size: f, hidden: u, rows: f + (u > 0 ? 1 : 0) };
}
F();
F();
var eat = Qt(null);
function fe(G) {
  let b = _(40),
    { plugin: ne, handle: $r, element: ze, options: L } = G,
    Ye = De(JZ),
    be = De(eat),
    Mr;
  if (b[0] !== ze || b[1] !== be || b[2] !== ne || b[3] !== G.value)
    ((Mr = be?.pickedOf(ne, ze) ?? G.value),
      (b[0] = ze),
      (b[1] = be),
      (b[2] = ne),
      (b[3] = G.value),
      (b[4] = Mr));
  else Mr = b[4];
  let se = Mr,
    jr;
  if (b[5] !== L || b[6] !== se) {
    let W;
    if (b[8] !== se) ((W = (Ft) => Ft.value === se), (b[8] = se), (b[9] = W));
    else W = b[9];
    jr = L.find(W);
    ((b[5] = L), (b[6] = se), (b[7] = jr));
  } else jr = b[7];
  let pe = jr,
    Ze = G.label === void 0 ? "" : `${G.label}: `,
    q = Ye !== null && Ye.plugin === ne && Ye.handle === $r,
    ie = be?.open,
    z = ie !== null && ie !== void 0 && ie.plugin === ne && ie.handle === $r,
    P = z ? ie.highlight : 0;
  const W = z ? L.length : 0;
  let Ur;
  if (b[10] !== P || b[11] !== W)
    ((Ur = Zit(W, P)), (b[10] = P), (b[11] = W), (b[12] = Ur));
  else Ur = b[12];
  let { first: B, size: er, hidden: Ce } = Ur,
    he;
  if (b[13] !== q || b[14] !== Ze)
    ((he = e(t, { bold: q, children: Ze })),
      (b[13] = q),
      (b[14] = Ze),
      (b[15] = he));
  else he = b[15];
  let Ee;
  if (b[16] !== pe || b[17] !== q || b[18] !== z)
    ((Ee =
      pe === void 0
        ? e(t, { dimColor: !0, children: "none" })
        : e(t, { inverse: q && !z, children: pe.label ?? pe.value })),
      (b[16] = pe),
      (b[17] = q),
      (b[18] = z),
      (b[19] = Ee));
  else Ee = b[19];
  const rr = z ? " \u25B4" : " \u25BE";
  let we;
  if (b[20] !== rr)
    ((we = e(t, { dimColor: !0, children: rr })), (b[20] = rr), (b[21] = we));
  else we = b[21];
  let ke;
  if (b[22] !== he || b[23] !== Ee || b[24] !== we)
    ((ke = r(t, { wrap: "truncate-end", children: [he, Ee, we] })),
      (b[22] = he),
      (b[23] = Ee),
      (b[24] = we),
      (b[25] = ke));
  else ke = b[25];
  let Ie;
  if (b[26] !== B || b[27] !== P || b[28] !== L || b[29] !== er) {
    let H;
    if (b[31] !== B || b[32] !== P)
      ((H = (or, Lt) =>
        e(
          t,
          {
            inverse: B + Lt === P,
            wrap: "truncate-end",
            children: `  ${or.label ?? or.value}`,
          },
          or.value,
        )),
        (b[31] = B),
        (b[32] = P),
        (b[33] = H));
    else H = b[33];
    Ie = L.slice(B, B + er).map(H);
    ((b[26] = B), (b[27] = P), (b[28] = L), (b[29] = er), (b[30] = Ie));
  } else Ie = b[30];
  let H;
  if (b[34] !== Ce)
    ((H = Ce > 0 && e(t, { dimColor: !0, children: `  \u2026 ${Ce} more` })),
      (b[34] = Ce),
      (b[35] = H));
  else H = b[35];
  let Kr;
  if (b[36] !== H || b[37] !== ke || b[38] !== Ie)
    ((Kr = r(o, {
      flexDirection: "column",
      flexShrink: 0,
      children: [ke, Ie, H],
    })),
      (b[36] = H),
      (b[37] = ke),
      (b[38] = Ie),
      (b[39] = Kr));
  else Kr = b[39];
  return Kr;
}
function Pe(s, p) {
  if (typeof s === "string") return Ry(t, null, s);
  if (s.type === "engine") return p(s.ref);
  if (s.type === "Button")
    return Ry(Re, {
      plugin: s.press.plugin,
      handle: s.press.handle,
      label: s.props.label,
      hotkey: s.props.hotkey,
      plain: s.props.plain,
    });
  if (s.type === "Input")
    return Ry(re, {
      plugin: s.press.plugin,
      handle: s.press.handle,
      element: s.props.key,
      label: s.props.label,
      placeholder: s.props.placeholder,
      value: s.props.value,
      submitLabel: s.props.submitLabel,
    });
  if (s.type === "Select")
    return Ry(fe, {
      plugin: s.press.plugin,
      handle: s.press.handle,
      element: s.props.key,
      label: s.props.label,
      options: s.props.options,
      value: s.props.value,
    });
  if (s.type === "Svg") return Ry(t, { dimColor: !0 }, s.props.alt);
  let i =
      s.type === "Text" ||
      s.type === "span" ||
      s.type === "b" ||
      s.type === "Link",
    f = (s.children ?? []).map((m) =>
      i && typeof m === "string" ? m : Pe(m, p),
    );
  if (s.type === "Link") {
    let { href: m, label: x } = s.props,
      c = f.length > 0 ? f : [x ?? m],
      g =
        f.length === 0 && x === void 0
          ? void 0
          : Ry(t, null, ...c, " ", Ry(t, { dimColor: !0 }, m));
    return Ry(ct, { url: m, fallback: g }, ...c);
  }
  if (s.type === "Box" || s.type === "Text")
    return Ry(s.type === "Box" ? o : t, Qe(s.props), ...f);
  return s.type === "div"
    ? Ry(o, { flexDirection: "column" }, ...f)
    : Ry(t, de(s.props?.style, s.type === "b"), ...f);
}
F();
function ve(s) {
  let p = C(!1);
  if (!s) p.current = !0;
  return p.current;
}
F();
var Oe = (s, p) => (s ? `${p.component}\x00${p.requestId}\x00` + Apn(p) : "");
var _e = (s, p) =>
  n(`ui.render (${s.component} ${s.requestId}): site failed: ${l(p)}`, {
    level: "error",
  });
function Ne(s, p, { version: i, staticFrame: f, submittedBy: u }) {
  let a = u === void 0 ? void 0 : [u],
    [m, x] = d(() => (s ? gVe.settled(p, a) : void 0)),
    c = Oe(s, p);
  return (
    E(() => {
      if (!s) {
        x(void 0);
        return;
      }
      if (f) return;
      let y = new AbortController();
      return (
        bX({ signal: y.signal, origin: a })
          .ui.render(p)
          .then(
            (g) => {
              if (!y.signal.aborted) x(g);
            },
            (g) => {
              if ((_e(p, g), !y.signal.aborted)) x(LYt);
            },
          ),
        () => {
          y.abort(new HooksError("ui.render: superseded"));
        }
      );
    }, [c, i, s, u, f]),
    m
  );
}
var S0e = () => useStoreSelector(WDe(), (s) => s.get(IO) ?? 0);
function ben(s, p, i) {
  let f = Kue(s.component),
    u = De(StaticFrameContext),
    a = Ne(f, s, { version: S0e(), staticFrame: u, submittedBy: i }),
    m = ve(f) || u;
  return {
    node: Ry(
      o,
      {
        flexDirection: "column",
        renderEvent: IO,
        renderComponent: s.component,
      },
      f ? (a ? Pe(a, (c) => p(Ke(a, c, s))) : m ? p(s) : null) : p(s),
    ),
    drawn: a,
  };
}
var nF = (s, p, i) => ben(s, p, i).node;
F();
var QL = (s, p, i) => {
  let f = S0e(),
    u = V(p, i);
  return V(() => {
    let a = pgt.get();
    return {
      surface: "terminal",
      component: s,
      ...(a !== void 0 && { viewport: a }),
      ...u,
    };
  }, [s, u, f]);
};
var La = {};
defineExportGetters(La, {
  BOLD_WEIGHT: () => le,
  FIELD_MIN_COLUMNS: () => ee,
  FocusedPress: () => JZ,
  HEX_COLOR_PROPS: () => ue,
  InputField: () => re,
  InputFields: () => Jit,
  NAMED_TO_HEX: () => Y,
  PressButton: () => Re,
  SelectField: () => fe,
  SelectFields: () => eat,
  VISIBLE_OPTIONS: () => oe,
  default: () => La,
  fieldKey: () => b0e,
  heldFor: () => Ke,
  hexOfNamed: () => Z,
  inkTextPropsOf: () => de,
  inputFromTerminal: () => wen,
  listWindow: () => Zit,
  pressFromTerminal: () => Qit,
  rebuild: () => Pe,
  renderInputKey: () => Oe,
  selectFromTerminal: () => OUn,
  settleQuietly: () => S,
  siteFailed: () => _e,
  useEngineDrew: () => ve,
  useRenderAnswer: () => Ne,
  useRenderDrawing: () => ben,
  useRenderHook: () => nF,
  useRenderInput: () => QL,
  useRenderVersion: () => S0e,
  withHexColors: () => Qe,
});
var b0e = (s, p) => `${s}\x00${p}`;
var wen = (s) => S(`ui.input ${s.plugin}`, Uzn({ ...s, surface: "terminal" }));
var OUn = (s) => S(`ui.select ${s.plugin}`, jzn({ ...s, surface: "terminal" }));
function pr() {
  return !1;
}
function jA(s) {
  let p = useForcedExpandedContent(),
    i = useQueuedMessageContext()?.isQueued === !0;
  return !s && !p && !i && pr();
}
function QZ(Fe) {
  let M = _(25),
    { tone: me, text: ir, detail: Le, subLines: fr, linkify: Gs } = Fe,
    w = Gs ? LinkifiedText : t,
    mr =
      Fe.state === "live" && !Fe.reducedMotion
        ? THINKING_SPINNER_FRAMES[Fe.frame % THINKING_SPINNER_FRAMES.length]
        : PROPORTION_GLYPH,
    J = me === "gold" ? "warning" : me === "red" ? "error" : void 0,
    A = me === "dim";
  const lr = me === "red" ? "error:" : me === "gold" ? "warning:" : void 0;
  let Be;
  if (M[0] !== J || M[1] !== A || M[2] !== mr || M[3] !== lr)
    ((Be = r(t, {
      "aria-hidden": A,
      "aria-label": lr,
      italic: !0,
      color: J,
      dimColor: A,
      children: [mr, " "],
    })),
      (M[0] = J),
      (M[1] = A),
      (M[2] = mr),
      (M[3] = lr),
      (M[4] = Be));
  else Be = M[4];
  let He;
  if (M[5] !== w || M[6] !== ir)
    ((He = e(w, { children: ir })), (M[5] = w), (M[6] = ir), (M[7] = He));
  else He = M[7];
  let Ae;
  if (M[8] !== w || M[9] !== Le)
    ((Ae =
      Le !== void 0 &&
      r(t, { dimColor: !0, children: [" \xB7 ", e(w, { children: Le })] })),
      (M[8] = w),
      (M[9] = Le),
      (M[10] = Ae));
  else Ae = M[10];
  let Ve;
  if (M[11] !== J || M[12] !== A || M[13] !== He || M[14] !== Ae)
    ((Ve = r(t, { italic: !0, color: J, dimColor: A, children: [He, Ae] })),
      (M[11] = J),
      (M[12] = A),
      (M[13] = He),
      (M[14] = Ae),
      (M[15] = Ve));
  else Ve = M[15];
  let $e;
  if (M[16] !== w || M[17] !== fr)
    (($e = fr?.map((Ws, qs) =>
      e(t, { dimColor: !0, children: e(w, { children: Ws }) }, qs),
    )),
      (M[16] = w),
      (M[17] = fr),
      (M[18] = $e));
  else $e = M[18];
  let je;
  if (M[19] !== Ve || M[20] !== $e)
    ((je = r(o, { flexDirection: "column", flexGrow: 1, children: [Ve, $e] })),
      (M[19] = Ve),
      (M[20] = $e),
      (M[21] = je));
  else je = M[21];
  let io;
  if (M[22] !== Be || M[23] !== je)
    ((io = r(o, { flexDirection: "row", children: [Be, je] })),
      (M[22] = Be),
      (M[23] = je),
      (M[24] = io));
  else io = M[24];
  return io;
}
export { JZ, Jit, Qit, Zit, eat, S0e, ben, b0e, wen, OUn, nF, QL, La, QZ, jA };

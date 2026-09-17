// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 247 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { truncatePathMiddle as el } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { an } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { WZ, v$n, WHe, _ye, yWe, rPt } from "../Bridge-RemoteControl/chunk-sc8n0cp3.js";
import { z_e } from "../Hooks钩子/chunk-6wg4v2yj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-400h8hta.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var Y = 72;
function B(uo) {
  let c = _(34),
    { forwarded: f, stayed: P, consentLocation: M, onDone: T } = uo,
    G = C(!1),
    I;
  if (c[0] !== M) ((I = el(M.replace(/\s+/g, " "), Y)), (c[0] = M), (c[1] = I));
  else I = c[1];
  let V = I,
    J;
  if (c[2] !== T)
    ((J = function h(co) {
      if (G.current) {
        return;
      }
      ((G.current = !0), T(co));
    }),
      (c[2] = T),
      (c[3] = J));
  else J = c[3];
  let h = J,
    b;
  if (c[4] !== f)
    ((b = f > 0 ? [`${f} plugin ${x(f, "choice")} would be sent`] : []),
      (c[4] = f),
      (c[5] = b));
  else b = c[5];
  let v;
  if (c[6] !== f || c[7] !== P)
    ((v =
      P > 0
        ? [
            `${P} ${f > 0 ? "" : `plugin ${x(P, "choice")} `}would stay on this machine (you are told which, and why, when a session starts)`,
          ]
        : []),
      (c[6] = f),
      (c[7] = P),
      (c[8] = v));
  else v = c[8];
  let U;
  if (c[9] !== b || c[10] !== v)
    ((U = [...b, ...v]), (c[9] = b), (c[10] = v), (c[11] = U));
  else U = c[11];
  let k = U.join("; "),
    N;
  if (c[12] !== h) ((N = () => h("not_now")), (c[12] = h), (c[13] = N));
  else N = c[13];
  let X;
  if (c[14] === p)
    ((X = r(ue, {
      children: [
        e(D, { chord: "enter", action: "confirm" }),
        e(je, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: "not now",
        }),
      ],
    })),
      (c[14] = X));
  else X = c[14];
  let H;
  if (c[15] === p)
    ((H = e(t, {
      children:
        "A cloud session normally loads only the repository's and your organization's plugins. If you say yes, each cloud session you start or attach to from this machine is also told which plugins you have turned on or off here for its folder \u2014 their names, and the address of any marketplace they come from on GitHub, in a git repository or at a URL \u2014 and installs the enabled ones itself. Saying yes sends nothing else: no plugin files, no other settings, no credentials, no local paths.",
    })),
      (c[15] = H));
  else H = c[15];
  let A;
  if (c[16] !== k)
    ((A =
      k !== "" && r(t, { dimColor: !0, children: ["Right now: ", k, "."] })),
      (c[16] = k),
      (c[17] = A));
  else A = c[17];
  let O;
  if (c[18] === p)
    ((O = e(t, {
      dimColor: !0,
      children:
        "Yes and No are saved for this machine; run /cloud-plugins again to change your answer. Not now decides nothing. The answer is kept in:",
    })),
      (c[18] = O));
  else O = c[18];
  let R;
  if (c[19] !== V)
    ((R = r(o, {
      flexDirection: "column",
      children: [O, e(t, { dimColor: !0, children: V })],
    })),
      (c[19] = V),
      (c[20] = R));
  else R = c[20];
  let L;
  if (c[21] !== R || c[22] !== A)
    ((L = r(o, { flexDirection: "column", gap: 1, children: [H, A, R] })),
      (c[21] = R),
      (c[22] = A),
      (c[23] = L));
  else L = c[23];
  let W;
  if (c[24] === p)
    ((W = [
      {
        label: "Yes, use my enabled plugins in cloud sessions",
        value: "accepted",
      },
      { label: "No, keep them on this machine only", value: "declined" },
      { label: "Not now", value: "not_now" },
    ]),
      (c[24] = W));
  else W = c[24];
  let S;
  if (c[25] !== h) ((S = () => h("not_now")), (c[25] = h), (c[26] = S));
  else S = c[26];
  let z;
  if (c[27] !== h || c[28] !== S)
    ((z = e(ve, {
      options: W,
      defaultFocusValue: "not_now",
      onChange: h,
      onCancel: S,
    })),
      (c[27] = h),
      (c[28] = S),
      (c[29] = z));
  else z = c[29];
  let q;
  if (c[30] !== L || c[31] !== z || c[32] !== N)
    ((q = r(de, {
      title:
        "Use your enabled plugins in cloud sessions you run from this machine?",
      onCancel: N,
      isCancelActive: !1,
      inputGuide: X,
      children: [L, z],
    })),
      (c[30] = L),
      (c[31] = z),
      (c[32] = N),
      (c[33] = q));
  else q = c[33];
  return q;
}
var No = async (s, a) => {
  let d = WHe(a.storageV5),
    m = z_e.of(a.session.host),
    g = await K(a.storageV5);
  return e(B, {
    forwarded: g.forwarded,
    stayed: g.stayed,
    consentLocation: an(WZ()),
    onDone: (w) => {
      Q(w, { deps: d, memory: m }).then((y) => s(y));
    },
  });
};
async function K(s) {
  try {
    let a = yWe(await rPt(s));
    return { forwarded: a.counts.forwarded, stayed: a.dropped.length };
  } catch (a) {
    return (
      n(
        `/cloud-plugins: could not read this machine's plugin choices (${l(a)})`,
        { level: "warn" },
      ),
      { forwarded: 0, stayed: 0 }
    );
  }
}
async function Q(s, { deps: a, memory: d }) {
  let m = await _ye(d.consentPin, a).catch(() => "unset");
  i("tengu_cloud_plugins_consent", { choice: u(s), previous: u(m) });
  let g =
    m === "accepted"
      ? "cloud sessions from this machine use your enabled plugins"
      : m === "declined"
        ? "your plugins stay on this machine"
        : "cloud sessions from this machine keep loading only the repository\u2019s and your organization\u2019s plugins";
  if (s === "not_now") {
    if (m === "accepted" && d.setAsideSessions.size > 0)
      return "Nothing decided for the session attached here, which does not go by the saved answer: answer Yes or No in /cloud-plugins when you want to choose for it. Other cloud sessions from this machine use your enabled plugins.";
    return m === "unset"
      ? `Nothing decided: ${g}. Run /cloud-plugins when you want to choose.`
      : `Left as it was: ${g}.`;
  }
  if (!(await v$n(s, a)))
    return `Couldn\u2019t save that: ${an(WZ())} could not be written, so nothing changed \u2014 ${g}. Check that the folder is writable, then run /cloud-plugins again.`;
  return (
    (d.consentPin.value = Promise.resolve(s)),
    (d.consentPin.given = !0),
    (d.consentPin.persisted = !0),
    d.decided.emit(s),
    `Saved: ${s === "accepted" ? "cloud sessions from this machine use your enabled plugins \u2014 the ones attached from this terminal now, new ones from the start" : m === "accepted" ? "your plugins stay on this machine from now on \u2014 nothing more is sent from this terminal, and a session already using them keeps them only until it restarts" : "your plugins stay on this machine; cloud sessions load only the repository\u2019s and your organization\u2019s plugins"}. Run /cloud-plugins again to change it.`
  );
}
export { No as call, Q as decideCloudPlugins };

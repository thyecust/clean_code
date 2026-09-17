// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, nk } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { YX, JX } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { M8 } from "../Vim模式/Vim模式.nnewe0gf.js";
import { Xot } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, V, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Ue() {}
var Q = [
  { value: "yes-session", label: "Yes, for this session" },
  { value: "yes-remember", label: "Yes, and remember this directory" },
  { value: "no", label: "No" },
];
function C() {
  let po = _(1),
    xe;
  if (po[0] === MEMO_CACHE_SENTINEL)
    ((xe = e(t, {
      dimColor: !0,
      children:
        "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on.",
    })),
      (po[0] = xe));
  else xe = po[0];
  return xe;
}
function U(fo) {
  let se = _(5),
    { path: re } = fo,
    B;
  if (se[0] !== re)
    ((B = e(t, { color: "permission", children: re })),
      (se[0] = re),
      (se[1] = B));
  else B = se[1];
  let De;
  if (se[2] === MEMO_CACHE_SENTINEL) ((De = e(C, {})), (se[2] = De));
  else De = se[2];
  let we;
  if (se[3] !== B)
    ((we = r(o, { flexDirection: "column", gap: 1, children: [B, De] })),
      (se[3] = B),
      (se[4] = we));
  else we = se[4];
  return we;
}
function X(yo) {
  let w = _(14),
    {
      value: K,
      onChange: ie,
      onSubmit: le,
      error: ce,
      suggestions: O,
      selectedSuggestion: ae,
    } = yo,
    Re;
  if (w[0] === MEMO_CACHE_SENTINEL)
    ((Re = e(t, { children: "Enter the path to the directory:" })),
      (w[0] = Re));
  else Re = w[0];
  let W;
  if (w[1] !== ie || w[2] !== le || w[3] !== K)
    ((W = e(o, {
      borderDimColor: !0,
      borderStyle: "round",
      marginTop: 1,
      paddingLeft: 1,
      children: e(hn, {
        showCursor: !0,
        placeholder: `Directory path${figures.ellipsis}`,
        value: K,
        onChange: ie,
        onSubmit: le,
        columns: 80,
        cursorOffset: K.length,
        onChangeCursorOffset: Ue,
      }),
    })),
      (w[1] = ie),
      (w[2] = le),
      (w[3] = K),
      (w[4] = W));
  else W = w[4];
  let j;
  if (w[5] !== ae || w[6] !== O)
    ((j =
      O.length > 0 &&
      e(o, {
        marginBottom: 1,
        children: e(M8, { suggestions: O, selectedSuggestion: ae, noPad: !0 }),
      })),
      (w[5] = ae),
      (w[6] = O),
      (w[7] = j));
  else j = w[7];
  let G;
  if (w[8] !== ce) ((G = e(ErrorMessage, { error: ce })), (w[8] = ce), (w[9] = G));
  else G = w[9];
  let Ae;
  if (w[10] !== W || w[11] !== j || w[12] !== G)
    ((Ae = r(o, { flexDirection: "column", children: [Re, W, j, G] })),
      (w[10] = W),
      (w[11] = j),
      (w[12] = G),
      (w[13] = Ae));
  else Ae = w[13];
  return Ae;
}
function AddDirectoryToWorkspaceDialog(bo) {
  let l = _(38),
    {
      onAddDirectory: f,
      onAlreadyAccessible: me,
      onCancel: y,
      permissionContext: ge,
      directoryPath: i,
    } = bo,
    pe = useSession(),
    [b, Te] = d(""),
    [fe, Ie] = d(null),
    Be;
  if (l[0] === MEMO_CACHE_SENTINEL) ((Be = []), (l[0] = Be));
  else Be = l[0];
  let [u, Ee] = d(Be),
    [h, Y] = d(0),
    Ke;
  if (l[1] !== pe)
    ((Ke = async (Fe) => {
      if (!Fe) {
        (Ee([]), Y(0));
        return;
      }
      let ho = await Xot(pe, Fe);
      (Ee(ho), Y(0));
    }),
      (l[1] = pe),
      (l[2] = Ke));
  else Ke = l[2];
  let q = nk(Ke, 100),
    Oe,
    Ve;
  if (l[3] !== q || l[4] !== b)
    ((Oe = () => {
      q(b);
    }),
      (Ve = [b, q]),
      (l[3] = q),
      (l[4] = b),
      (l[5] = Oe),
      (l[6] = Ve));
  else ((Oe = l[5]), (Ve = l[6]));
  E(Oe, Ve);
  let We;
  if (l[7] === MEMO_CACHE_SENTINEL)
    ((We = (vo) => {
      let So = vo.id + "/";
      (Te(So), Ie(null));
    }),
      (l[7] = We));
  else We = l[7];
  let ko = We,
    Ge;
  if (l[8] !== f || l[9] !== me || l[10] !== ge)
    ((Ge = async (Co) => {
      let S = await YX(Co, ge);
      if (S.resultType === "success") {
        f(S.absolutePath, !1);
        return;
      }
      if (
        S.resultType === "alreadyInWorkingDirectory" &&
        !S.isExactMatch &&
        me?.(S)
      ) {
        return;
      }
      Ie(JX(S));
    }),
      (l[8] = f),
      (l[9] = me),
      (l[10] = ge),
      (l[11] = Ge));
  else Ge = l[11];
  let k = Ge,
    Le;
  if (l[12] === MEMO_CACHE_SENTINEL) ((Le = { context: "Settings" }), (l[12] = Le));
  else Le = l[12];
  useKeybinding("confirm:no", y, Le);
  let $e;
  if (l[13] !== k || l[14] !== h || l[15] !== u)
    (($e = (c) => {
      if (u.length > 0) {
        if (c.key === "tab") {
          c.preventDefault();
          let qe = u[h];
          if (qe) ko(qe);
          return;
        }
        if (c.key === "return") {
          c.preventDefault();
          let ze = u[h];
          if (ze) k(ze.id + "/");
          return;
        }
        if (c.key === "up" || (c.ctrl && c.key === "p")) {
          (c.preventDefault(), Y((Je) => (Je <= 0 ? u.length - 1 : Je - 1)));
          return;
        }
        if (c.key === "down" || (c.ctrl && c.key === "n")) {
          (c.preventDefault(), Y((Me) => (Me >= u.length - 1 ? 0 : Me + 1)));
          return;
        }
      }
    }),
      (l[13] = k),
      (l[14] = h),
      (l[15] = u),
      (l[16] = $e));
  else $e = l[16];
  let ye = $e,
    Pe;
  if (l[17] !== i || l[18] !== f || l[19] !== y)
    ((Pe = (xo) => {
      if (!i) {
        return;
      }
      bb89: switch (xo) {
        case "yes-session": {
          f(i, !1);
          break bb89;
        }
        case "yes-remember": {
          f(i, !0);
          break bb89;
        }
        case "no": {
          y();
        }
      }
    }),
      (l[17] = i),
      (l[18] = f),
      (l[19] = y),
      (l[20] = Pe));
  else Pe = l[20];
  let z = Pe,
    J;
  if (l[21] !== i)
    ((J = i
      ? void 0
      : r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "tab", action: "complete" }),
            e(KeybindingHint, { chord: "enter", action: "add" }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel",
            }),
          ],
        })),
      (l[21] = i),
      (l[22] = J));
  else J = l[22];
  let M;
  if (
    l[23] !== b ||
    l[24] !== i ||
    l[25] !== fe ||
    l[26] !== z ||
    l[27] !== k ||
    l[28] !== h ||
    l[29] !== u
  )
    ((M = i
      ? r(o, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(U, { path: i }),
            e(ve, { options: Q, onChange: z, onCancel: () => z("no") }),
          ],
        })
      : r(o, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(C, {}),
            e(X, {
              value: b,
              onChange: Te,
              onSubmit: k,
              error: fe,
              suggestions: u,
              selectedSuggestion: h,
            }),
          ],
        })),
      (l[23] = b),
      (l[24] = i),
      (l[25] = fe),
      (l[26] = z),
      (l[27] = k),
      (l[28] = h),
      (l[29] = u),
      (l[30] = M));
  else M = l[30];
  let P;
  if (l[31] !== y || l[32] !== J || l[33] !== M)
    ((P = e(de, {
      title: "Add directory to workspace",
      onCancel: y,
      color: "permission",
      isCancelActive: !1,
      inputGuide: J,
      children: M,
    })),
      (l[31] = y),
      (l[32] = J),
      (l[33] = M),
      (l[34] = P));
  else P = l[34];
  let Qe;
  if (l[35] !== ye || l[36] !== P)
    ((Qe = e(FocusableBox, { onKeyDown: ye, children: P })),
      (l[35] = ye),
      (l[36] = P),
      (l[37] = Qe));
  else Qe = l[37];
  return Qe;
}
export { AddDirectoryToWorkspaceDialog };

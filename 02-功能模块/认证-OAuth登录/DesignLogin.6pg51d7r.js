// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { DESIGN_OAUTH_SCOPES, getOauthConfig } from "./chunk-9g2q4bjq.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { revokeOAuthToken } from "./认证-OAuth登录.419zdfz3.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { o, t, ct, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { e9, YL, JL } from "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import { fbe, Sdt, bdt, FPe, l1t } from "../DesignSync/chunk-aycc6z76.js";
import { ck } from "./chunk-5bg9xwqx.js";
import { fM } from "../../01-核心基础设施/核心工具-路径与平台/chunk-p6wxwtjk.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function oe() {
  return new ck();
}
function ne(Ie) {
  return Ie();
}
function ie(Te) {
  return Te();
}
var G = "Paste code here if prompted > ";
function DesignLogin(Re) {
  let g = _(54),
    { onDone: k, hadExistingCredential: pt } = Re,
    Bt;
  if (g[0] === p) ((Bt = { state: "starting" }), (g[0] = Bt));
  else Bt = g[0];
  let [s, b] = d(Bt),
    [D] = d(oe),
    [O, Y] = d(""),
    [ht, yt] = d(0),
    [y, Z] = d(!1),
    {
      copiedVia: tt,
      copy: j,
      reset: Ct,
    } = e9(s.state === "waiting_for_login" ? s.url : null),
    et = vt(),
    Lt;
  if (g[1] === p) ((Lt = new Set()), (g[1] = Lt));
  else Lt = g[1];
  let W = C(Lt),
    rt = C(!1),
    ke = Se(),
    _t = Math.max(50, ke.columns - G.length - 4),
    Nt;
  if (g[2] !== s.state || g[3] !== s.toRetry || g[4] !== k)
    ((Nt = function M(S) {
      if (s.state === "success") {
        (S.preventDefault(), k("Design-system access authorized."));
        return;
      }
      if (s.state !== "error") {
        if (
          S.key === "escape" ||
          ((S.ctrl || S.meta) && (S.key === "c" || S.key === "d"))
        )
          (S.preventDefault(), (rt.current = !0), k("Design login cancelled."));
        return;
      }
      if ((S.preventDefault(), S.key === "return" && s.toRetry))
        (Y(""), yt(0), b({ state: "about_to_retry", nextState: s.toRetry }));
      else ((rt.current = !0), k("Design login cancelled."));
    }),
      (g[2] = s.state),
      (g[3] = s.toRetry),
      (g[4] = k),
      (g[5] = Nt));
  else Nt = g[5];
  let M = Nt,
    Ft;
  if (g[6] !== D)
    ((Ft = function q(Kt, jt) {
      if (!Kt.trim()) {
        (Y(""), yt(0));
        return;
      }
      let [Xt, Jt] = Kt.split("#");
      if (!Xt || !Jt) {
        (b({
          state: "error",
          message: "Invalid code. Please make sure the full code was copied",
          toRetry: { state: "waiting_for_login", url: jt },
        }),
          n(`Design login: invalid pasted code for ${jt}`));
        return;
      }
      (i("tengu_design_oauth_manual_entry", {}),
        D.handleManualAuthCodeInput({ authorizationCode: Xt, state: Jt }));
    }),
      (g[6] = D),
      (g[7] = Ft));
  else Ft = g[7];
  let q = Ft,
    Wt;
  if (g[8] !== et || g[9] !== D || g[10] !== k || g[11] !== Ct)
    ((Wt = async () => {
      if ((W.current.forEach(ne), W.current.clear(), !FPe())) {
        b({
          state: "error",
          message:
            "The Claude Design OAuth client is not configured in this build. Set CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID to the registered client id, or update to a build with the registered client.",
        });
        return;
      }
      try {
        let Pe = getOauthConfig();
        let wt = bdt();
        let bt = await D.startOAuthFlow(
          async (Ae) => {
            if ((Ct(), Z(!1), b({ state: "waiting_for_login", url: Ae }), fM()))
              Z(!0);
            else W.current.add(et.setTimeout(() => Z(!0), 3000));
          },
          {
            loginWithClaudeAi: !0,
            oauthClient: { clientId: wt, scopes: DESIGN_OAUTH_SCOPES },
            skipProfileFetch: !0,
            successRedirectUrl: Pe.CLAUDEAI_SUCCESS_URL,
          },
        );
        if (rt.current) {
          if (bt.refreshToken) await revokeOAuthToken(bt.refreshToken, wt);
          return;
        }
        b({ state: "processing" });
        let z = await l1t(bt, wt);
        if (!z.ok) {
          b({
            state: "error",
            message: z.message,
            toRetry: { state: "starting" },
          });
          return;
        }
        if (rt.current) {
          await revokeOAuthToken(z.slot.refreshToken, z.slot.clientId);
          return;
        }
        let $t = await Sdt(z.slot);
        if (!$t.success) {
          (await revokeOAuthToken(z.slot.refreshToken, z.slot.clientId),
            b({
              state: "error",
              message:
                $t.warning ??
                "Could not save the design credential to secure storage.",
              toRetry: { state: "starting" },
            }));
          return;
        }
        (i("tengu_design_oauth_login_success", {}),
          b({ state: "success" }),
          W.current.add(
            et.setTimeout(() => k("Design-system access authorized."), 1500),
          ));
      } catch (st) {
        let Mt = st;
        (logError(Mt),
          i("tengu_design_oauth_login_error", {}),
          b({
            state: "error",
            message: l(Mt),
            toRetry: { state: "starting" },
          }));
      }
    }),
      (g[8] = et),
      (g[9] = D),
      (g[10] = k),
      (g[11] = Ct),
      (g[12] = Wt));
  else Wt = g[12];
  let ot = Wt,
    st,
    qt;
  if (g[13] !== s.state || g[14] !== ot)
    ((st = () => {
      if (s.state === "starting") ot();
    }),
      (qt = [s.state, ot]),
      (g[13] = s.state),
      (g[14] = ot),
      (g[15] = st),
      (g[16] = qt));
  else ((st = g[15]), (qt = g[16]));
  E(st, qt);
  let Gt;
  if (g[17] !== s.nextState || g[18] !== s.state)
    ((Gt = () => {
      if (s.state === "about_to_retry")
        (Z(s.nextState.state === "waiting_for_login"), b(s.nextState));
    }),
      (g[17] = s.nextState),
      (g[18] = s.state),
      (g[19] = Gt));
  else Gt = g[19];
  Un(Gt, s.state === "about_to_retry" ? 500 : null);
  let Ht;
  if (
    g[20] !== j ||
    g[21] !== s.state ||
    g[22] !== s.url ||
    g[23] !== O ||
    g[24] !== y
  )
    ((Ht = () => {
      if (/^c+$/.test(O) && s.state === "waiting_for_login" && y)
        (Y(""), j(s.url));
    }),
      (g[20] = j),
      (g[21] = s.state),
      (g[22] = s.url),
      (g[23] = O),
      (g[24] = y),
      (g[25] = Ht));
  else Ht = g[25];
  let Qt;
  if (g[26] !== j || g[27] !== s || g[28] !== O || g[29] !== y)
    ((Qt = [O, s, y, j]),
      (g[26] = j),
      (g[27] = s),
      (g[28] = O),
      (g[29] = y),
      (g[30] = Qt));
  else Qt = g[30];
  E(Ht, Qt);
  let Yt, Zt;
  if (g[31] !== D)
    ((Yt = () => {
      let te = W.current;
      return () => {
        (D.cleanup(), te.forEach(ie), te.clear());
      };
    }),
      (Zt = [D]),
      (g[31] = D),
      (g[32] = Yt),
      (g[33] = Zt));
  else ((Yt = g[32]), (Zt = g[33]));
  E(Yt, Zt);
  let nt;
  if (g[34] !== pt || g[35] !== s.state)
    ((nt =
      s.state !== "success" &&
      r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        children: [
          e(t, { bold: !0, children: "Design login" }),
          e(t, {
            dimColor: !0,
            children:
              "Authorize design-system access (read and write your organization's claude.ai/design projects) with your claude.ai account. This is separate from this session's authentication and changes nothing else.",
          }),
          pt &&
            e(t, {
              dimColor: !0,
              children:
                "A design credential is already stored \u2014 completing this flow replaces it.",
            }),
        ],
      })),
      (g[34] = pt),
      (g[35] = s.state),
      (g[36] = nt));
  else nt = g[36];
  let it;
  if (g[37] !== s.state || g[38] !== s.url || g[39] !== y || g[40] !== tt)
    ((it =
      s.state === "waiting_for_login" &&
      y &&
      r(o, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        children: [
          r(o, {
            flexDirection: "column",
            paddingX: 1,
            children: [
              r(o, {
                children: [
                  r(t, {
                    dimColor: !0,
                    children: [
                      "Browser didn't open? Use the url below to sign in",
                      " ",
                    ],
                  }),
                  e(YL, { via: tt }),
                ],
              }),
              e(JL, { via: tt }),
            ],
          }),
          e(ct, {
            url: s.url,
            assumeSupport: !0,
            children: e(t, { dimColor: !0, children: s.url }),
          }),
        ],
      })),
      (g[37] = s.state),
      (g[38] = s.url),
      (g[39] = y),
      (g[40] = tt),
      (g[41] = it));
  else it = g[41];
  let at;
  if (
    g[42] !== ht ||
    g[43] !== q ||
    g[44] !== s ||
    g[45] !== O ||
    g[46] !== y ||
    g[47] !== _t
  )
    ((at = e(o, {
      paddingLeft: 1,
      flexDirection: "column",
      gap: 1,
      children: e(ut, {
        oauthStatus: s,
        showPastePrompt: y,
        pastedCode: O,
        setPastedCode: Y,
        cursorOffset: ht,
        setCursorOffset: yt,
        textInputColumns: _t,
        onSubmitCode: q,
      }),
    })),
      (g[42] = ht),
      (g[43] = q),
      (g[44] = s),
      (g[45] = O),
      (g[46] = y),
      (g[47] = _t),
      (g[48] = at));
  else at = g[48];
  let ee;
  if (g[49] !== M || g[50] !== nt || g[51] !== it || g[52] !== at)
    ((ee = r(mr, { gap: 1, onKeyDown: M, children: [nt, it, at] })),
      (g[49] = M),
      (g[50] = nt),
      (g[51] = it),
      (g[52] = at),
      (g[53] = ee));
  else ee = g[53];
  return ee;
}
function ut(ze) {
  let v = _(23),
    {
      oauthStatus: P,
      showPastePrompt: Dt,
      pastedCode: xt,
      setPastedCode: Ot,
      cursorOffset: St,
      setCursorOffset: Rt,
      textInputColumns: kt,
      onSubmitCode: Pt,
    } = ze;
  switch (P.state) {
    case "starting": {
      let u;
      if (v[0] === p)
        ((u = e($n, { message: "Starting design login\u2026" })), (v[0] = u));
      else u = v[0];
      return u;
    }
    case "waiting_for_login": {
      let u;
      if (v[1] === p)
        ((u = e($n, { message: "Waiting for browser authorization\u2026" })),
          (v[1] = u));
      else u = v[1];
      let A;
      if (
        v[2] !== St ||
        v[3] !== P.url ||
        v[4] !== Pt ||
        v[5] !== xt ||
        v[6] !== Rt ||
        v[7] !== Ot ||
        v[8] !== Dt ||
        v[9] !== kt
      )
        ((A =
          Dt &&
          r(o, {
            children: [
              e(t, { children: G }),
              e(hn, {
                value: xt,
                onChange: Ot,
                onSubmit: (Ue) => Pt(Ue, P.url),
                cursorOffset: St,
                onChangeCursorOffset: Rt,
                columns: kt,
              }),
            ],
          })),
          (v[2] = St),
          (v[3] = P.url),
          (v[4] = Pt),
          (v[5] = xt),
          (v[6] = Rt),
          (v[7] = Ot),
          (v[8] = Dt),
          (v[9] = kt),
          (v[10] = A));
      else A = v[10];
      let U;
      if (v[11] !== A)
        ((U = r(o, { flexDirection: "column", gap: 1, children: [u, A] })),
          (v[11] = A),
          (v[12] = U));
      else U = v[12];
      return U;
    }
    case "processing": {
      let u;
      if (v[13] === p)
        ((u = e($n, { message: "Saving design credential\u2026" })),
          (v[13] = u));
      else u = v[13];
      return u;
    }
    case "success": {
      let u;
      if (v[14] === p)
        ((u = e(t, {
          color: "success",
          children:
            "Design-system access authorized. /design-sync can now reach your claude.ai/design projects.",
        })),
          (v[14] = u));
      else u = v[14];
      return u;
    }
    case "error": {
      let u;
      if (v[15] !== P.message)
        ((u = e(t, { color: "error", children: P.message })),
          (v[15] = P.message),
          (v[16] = u));
      else u = v[16];
      const A = P.toRetry
        ? "Press Enter to retry, or any other key to cancel."
        : "Press any key to close.";
      let U;
      if (v[17] !== A)
        ((U = e(t, { dimColor: !0, children: A })), (v[17] = A), (v[18] = U));
      else U = v[18];
      let se;
      if (v[19] !== u || v[20] !== U)
        ((se = r(o, { flexDirection: "column", gap: 1, children: [u, U] })),
          (v[19] = u),
          (v[20] = U),
          (v[21] = se));
      else se = v[21];
      return se;
    }
    case "about_to_retry": {
      let u;
      if (v[22] === p)
        ((u = e(t, { color: "permission", children: "Retrying\u2026" })),
          (v[22] = u));
      else u = v[22];
      return u;
    }
  }
}
async function xe(m) {
  let B = (await fbe()) !== null;
  return e(DesignLogin, { onDone: (a) => m(a), hadExistingCredential: B });
}
export { DesignLogin, xe as call };

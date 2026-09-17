// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 270 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { eI } from "../../00-第三方库/_未识别/第三方库-其他/chunk-x46ksw6d.js";
import { ns } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { lit as S } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { getOauthAccountInfo, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getBridgeAccessToken, getBridgeAccessTokenAsync } from "../../01-核心基础设施/共享小工具-未细化/chunk-203p0p9a.js";
import { getBridgeDisabledReason } from "./chunk-9estzwf5.js";
import { ndt } from "./chunk-ga43tr2w.js";
import { PROACTIVE_ENROLLMENT_DISABLED_MESSAGE, isProactiveEnrollmentDisabled, isTrustedDeviceUnenrolled, enrollTrustedDeviceIfNeeded } from "./chunk-tyce0p0b.js";
import { vAe, Hre } from "./chunk-ct52ffwb.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { nl } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { U, It } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { Rs } from "../../01-核心基础设施/共享小工具-未细化/chunk-axrnefsa.js";
import { D0e } from "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import { R0e } from "../后台任务-Shell管理/chunk-c7mzes79.js";
import { Z1 } from "../../01-核心基础设施/共享小工具-未细化/chunk-0k3bh4m8.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-hxt46tkz.js";
import "../../01-核心基础设施/设置-配置/chunk-tswdb9jt.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-85wxphev.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-csjxh2sy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kp7erqvh.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-nvzk8dj1.js";
import { N8, Kz } from "./chunk-3b6ct3yp.js";
import { o6e } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { zJt } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import "../权限系统/chunk-n5mgv42x.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { ik } from "./chunk-2c3z3wjk.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function br(Eo) {
  return Eo.replBridgeConnected;
}
function Cr(jo) {
  return jo.replBridgeEnabled;
}
function Rr(ko) {
  return ko.replBridgeOutboundOnly;
}
function Er() {
  let ve = getOauthAccountInfo();
  return (
    ve && { accountUuid: ve.accountUuid, organizationUuid: ve.organizationUuid }
  );
}
function jr() {
  return ns();
}
function kr(Ue) {
  return Ue.remoteDialogSeen ? Ue : { ...Ue, remoteDialogSeen: !0 };
}
function wr(So) {
  return So.replBridgeSessionUrl;
}
function Ir(Fo) {
  return Fo.replBridgeConnectUrl;
}
function xr(Po) {
  return Po.replBridgeSessionActive;
}
function Or(te) {
  if (!te.replBridgeEnabled && te.replBridgeError === void 0) {
    return te;
  }
  return {
    ...te,
    replBridgeEnabled: !1,
    replBridgeExplicit: !1,
    replBridgeOutboundOnly: !1,
    replBridgeError: void 0,
    replBridgeErrorKind: void 0,
    replBridgeSessionGroupingId: void 0,
    notifications: D0e(te.notifications, ik),
  };
}
function Tr(Lo) {
  return !Lo;
}
function Sr(Do) {
  return (Do + 1) % 3;
}
function Fr(Ao) {
  return (Ao - 1 + 3) % 3;
}
function Pr(No) {
  return No.length > 0;
}
function Lr(Go, vo) {
  return e(t, { children: Go }, vo);
}
var He =
  "Remote Control is already connected \u2014 a session's Project is fixed when it's created. Disconnect first, then re-run /remote-control --project to start a new session in the Project.";
function ze(_o) {
  let K = _(25),
    { onDone: u, name: Y, sessionGroupingId: x, context: g } = _o,
    W = It(),
    Se = U(br),
    Fe = U(Cr),
    Pe = U(Rr),
    [yo, ho] = d(!1),
    [Bo, bo] = d(!1),
    [Le] = d(Er),
    [De] = d(jr),
    Ye;
  if (
    K[0] !== g?.dialogStore ||
    K[1] !== g?.requestDialog ||
    K[2] !== g?.storageV5 ||
    K[3] !== Y ||
    K[4] !== u ||
    K[5] !== x ||
    K[6] !== W
  )
    ((Ye = function P() {
      if ((o6e(g?.storageV5), zJt())) {
        let $e = g?.requestDialog;
        if (!$e) {
          u(
            "Remote Control asks for a one-time confirmation before it's first enabled, and this session can't show it. Run /remote-control from an interactive Claude Code session.",
            { display: "system" },
          );
          return;
        }
        let We = g?.dialogStore;
        if (We && R0e(We.getState(), Z1.kind)) {
          u("", { display: "system" });
          return;
        }
        (W((ae) =>
          ae.replBridgeInitialName === Y && ae.replBridgeSessionGroupingId === x
            ? ae
            : {
                ...ae,
                replBridgeInitialName: Y,
                replBridgeSessionGroupingId: x,
              },
        ),
          u("", { display: "system" }));
        let Co = se(getOauthAccountInfo());
        $e(Z1, {}, { place: "under" })
          .then((Ke) => {
            let Ae = Ke === "enable" && se(getOauthAccountInfo()) === Co;
            if (Ke === "enable" && !Ae)
              n(
                "[bridge:repl] Remote Control callout answered under a different account than it was asked for \u2014 not enabling",
              );
            if (Ae)
              (Te(kr, g?.storageV5),
                i("tengu_bridge_command", { action: S("connect") }));
            W((O) => {
              if (Ae) {
                return O.replBridgeEnabled &&
                  O.replBridgeExplicit &&
                  !O.replBridgeOutboundOnly
                  ? O
                  : {
                      ...O,
                      replBridgeEnabled: !0,
                      replBridgeExplicit: !0,
                      replBridgeOutboundOnly: !1,
                    };
              }
              return O.replBridgeInitialName === void 0 &&
                O.replBridgeSessionGroupingId === void 0
                ? O
                : {
                    ...O,
                    replBridgeInitialName: void 0,
                    replBridgeSessionGroupingId: void 0,
                  };
            });
          })
          .catch(logError);
        return;
      }
      i("tengu_bridge_command", { action: S("connect") });
      let er = !1;
      if (
        (W((ce) => {
          if (ce.replBridgeEnabled && !ce.replBridgeOutboundOnly) {
            if (x !== void 0) er = !0;
            return ce;
          }
          return {
            ...ce,
            replBridgeEnabled: !0,
            replBridgeExplicit: !0,
            replBridgeOutboundOnly: !1,
            replBridgeInitialName: Y,
            replBridgeSessionGroupingId: x,
          };
        }),
        er)
      ) {
        u(He, { display: "system" });
        return;
      }
      u("", { display: "system" });
    }),
      (K[0] = g?.dialogStore),
      (K[1] = g?.requestDialog),
      (K[2] = g?.storageV5),
      (K[3] = Y),
      (K[4] = u),
      (K[5] = x),
      (K[6] = W),
      (K[7] = Ye));
  else Ye = K[7];
  let P = Ye,
    rr;
  if (
    K[8] !== g?.credentials ||
    K[9] !== P ||
    K[10] !== u ||
    K[11] !== Se ||
    K[12] !== Fe ||
    K[13] !== Pe
  )
    ((rr = () => {
      if ((Se || Fe) && !Pe) {
        ho(!0);
        return;
      }
      let or = !1;
      return (
        (async () => {
          let Ne = await ie(g?.credentials);
          if (or) {
            return;
          }
          if (Ne?.kind === "error") {
            (i("tengu_bridge_command", { action: S("preflight_failed") }),
              u(Ne.message, { display: "system" }));
            return;
          }
          if (Ne?.kind === "unenrolled-trusted-device") {
            (i("tengu_bridge_command", {
              action: S("preflight_login_for_enrollment"),
            }),
              bo(!0));
            return;
          }
          P();
        })(),
        () => {
          or = !0;
        }
      );
    }),
      (K[8] = g?.credentials),
      (K[9] = P),
      (K[10] = u),
      (K[11] = Se),
      (K[12] = Fe),
      (K[13] = Pe),
      (K[14] = rr));
  else rr = K[14];
  let nr;
  if (K[15] === p) ((nr = []), (K[15] = nr));
  else nr = K[15];
  if ((E(rr, nr), yo)) {
    let Z;
    if (K[16] !== u || K[17] !== x)
      ((Z = e(Oe, { onDone: u, sessionGroupingId: x })),
        (K[16] = u),
        (K[17] = x),
        (K[18] = Z));
    else Z = K[18];
    return Z;
  }
  if (Bo) {
    if (!g) {
      return (
        u(
          "Your organization requires Trusted Devices for Remote Control, but this device is not enrolled. Please run `/login` in Claude Code to enroll this device.",
          { display: "system" },
        ),
        null
      );
    }
    let Z;
    if (
      K[19] !== g ||
      K[20] !== P ||
      K[21] !== u ||
      K[22] !== Le ||
      K[23] !== De
    )
      ((Z = e(Kz, {
        startingMessage: "Sign in to enroll this device for Remote Control.",
        onDone: async (tr, _mainLoopModel, Ro) => {
          let me = await N8(g, tr, {
            setAppState: Ro,
            awaitEnrollment: !0,
            previousAccount: Le,
            previousGatewayAuth: De,
          });
          if (me.gatewayLoginError !== void 0 || me.relaunching) {
            u(
              me.gatewayLoginError,
              me.gatewayLoginError !== void 0 ? { display: "system" } : void 0,
            );
            return;
          }
          if (!tr) {
            (i("tengu_bridge_command", {
              action: S("preflight_login_canceled"),
            }),
              u(
                "Sign-in canceled. Run /remote-control after enrolling this device.",
                { display: "system" },
              ));
            return;
          }
          let Ge = await ie(g?.credentials);
          if (Ge?.kind === "error") {
            u(Ge.message, { display: "system" });
            return;
          }
          if (Ge?.kind === "unenrolled-trusted-device") {
            (i("tengu_bridge_command", {
              action: S("preflight_enrollment_did_not_complete"),
            }),
              u(
                "Signed in, but device enrollment didn't complete. Run /remote-control again, or check the debug log for [trusted-device] messages.",
                { display: "system" },
              ));
            return;
          }
          P();
        },
      })),
        (K[19] = g),
        (K[20] = P),
        (K[21] = u),
        (K[22] = Le),
        (K[23] = De),
        (K[24] = Z));
    else Z = K[24];
    return Z;
  }
  return null;
}
function Oe(wo) {
  let c = _(69),
    { onDone: Q, sessionGroupingId: ee } = wo;
  Rs("bridge-disconnect-dialog");
  let Ve = It(),
    Io = U(wr),
    xo = U(Ir),
    Oo = U(xr),
    [G, ir] = d(2),
    [j, To] = d(!1),
    [pe, Je] = d(""),
    T = Oo ? Io : xo,
    sr,
    lr;
  if (c[0] !== T || c[1] !== j)
    ((sr = () => {
      if (!j || !T) {
        Je("");
        return;
      }
      eI(T, { type: "utf8", errorCorrectionLevel: "L", small: !0 })
        .then(Je)
        .catch(() => Je(""));
    }),
      (lr = [j, T]),
      (c[0] = T),
      (c[1] = j),
      (c[2] = sr),
      (c[3] = lr));
  else ((sr = c[2]), (lr = c[3]));
  E(sr, lr);
  let dr;
  if (c[4] !== Q || c[5] !== Ve)
    ((dr = function re() {
      (Ve(Or),
        i("tengu_bridge_command", { action: S("disconnect") }),
        Q(Hre, { display: "system" }));
    }),
      (c[4] = Q),
      (c[5] = Ve),
      (c[6] = dr));
  else dr = c[6];
  let re = dr,
    ar;
  if (c[7] === p)
    ((ar = function Me() {
      To(Tr);
    }),
      (c[7] = ar));
  else ar = c[7];
  let Me = ar,
    cr;
  if (c[8] !== Q)
    ((cr = function L() {
      Q(void 0, { display: "skip" });
    }),
      (c[8] = Q),
      (c[9] = cr));
  else cr = c[9];
  let L = cr,
    ur,
    mr;
  if (c[10] === p)
    ((ur = () => ir(Sr)), (mr = () => ir(Fr)), (c[10] = ur), (c[11] = mr));
  else ((ur = c[10]), (mr = c[11]));
  let pr;
  if (c[12] !== G || c[13] !== L || c[14] !== re)
    ((pr = {
      "select:next": ur,
      "select:previous": mr,
      "select:accept": () => {
        if (G === 0) re();
        else if (G === 1) Me();
        else L();
      },
    }),
      (c[12] = G),
      (c[13] = L),
      (c[14] = re),
      (c[15] = pr));
  else pr = c[15];
  let gr;
  if (c[16] === p) ((gr = { context: "Select" }), (c[16] = gr));
  else gr = c[16];
  Ze(pr, gr);
  let ge, fe, _e, ye, oe, ne, he, Be, be, Ce;
  if (
    c[17] !== T ||
    c[18] !== L ||
    c[19] !== pe ||
    c[20] !== ee ||
    c[21] !== j
  ) {
    let fr = pe
      ? pe
          .split(
            `
`,
          )
          .filter(Pr)
      : [];
    fe = de;
    Be = "Remote Control";
    be = L;
    Ce = !0;
    ge = o;
    _e = "column";
    ye = 1;
    if (c[32] !== ee)
      ((oe =
        ee !== void 0 &&
        e(t, {
          children:
            "A session's Project is fixed when it's created \u2014 disconnect first, then re-run /remote-control --project to start a new one.",
        })),
        (c[32] = ee),
        (c[33] = oe));
    else oe = c[33];
    const v = T ? ` and at ${T}` : " and claude.ai/code";
    if (c[34] !== v)
      ((ne = r(t, {
        children: [
          "This session is available in the Claude mobile app",
          v,
          ".",
        ],
      })),
        (c[34] = v),
        (c[35] = ne));
    else ne = c[35];
    he =
      j &&
      fr.length > 0 &&
      e(o, { flexDirection: "column", children: fr.map(Lr) });
    ((c[17] = T),
      (c[18] = L),
      (c[19] = pe),
      (c[20] = ee),
      (c[21] = j),
      (c[22] = ge),
      (c[23] = fe),
      (c[24] = _e),
      (c[25] = ye),
      (c[26] = oe),
      (c[27] = ne),
      (c[28] = he),
      (c[29] = Be),
      (c[30] = be),
      (c[31] = Ce));
  } else
    ((ge = c[22]),
      (fe = c[23]),
      (_e = c[24]),
      (ye = c[25]),
      (oe = c[26]),
      (ne = c[27]),
      (he = c[28]),
      (Be = c[29]),
      (be = c[30]),
      (Ce = c[31]));
  const v = G === 0;
  let _r;
  if (c[36] === p)
    ((_r = e(t, { children: "Disconnect this session" })), (c[36] = _r));
  else _r = c[36];
  let Re;
  if (c[37] !== v)
    ((Re = e(nl, { isFocused: v, children: _r })), (c[37] = v), (c[38] = Re));
  else Re = c[38];
  const qe = G === 1,
    Xe = j ? "Hide QR code" : "Show QR code";
  let Ee;
  if (c[39] !== j)
    ((Ee =
      !j &&
      e(t, {
        dimColor: !0,
        children: "  Scan with your phone to open this session",
      })),
      (c[39] = j),
      (c[40] = Ee));
  else Ee = c[40];
  let je;
  if (c[41] !== Xe || c[42] !== Ee)
    ((je = r(t, { children: [Xe, Ee] })),
      (c[41] = Xe),
      (c[42] = Ee),
      (c[43] = je));
  else je = c[43];
  let ke;
  if (c[44] !== qe || c[45] !== je)
    ((ke = e(nl, { isFocused: qe, children: je })),
      (c[44] = qe),
      (c[45] = je),
      (c[46] = ke));
  else ke = c[46];
  const Qe = G === 2;
  let yr;
  if (c[47] === p) ((yr = e(t, { children: "Continue" })), (c[47] = yr));
  else yr = c[47];
  let we;
  if (c[48] !== Qe)
    ((we = e(nl, { isFocused: Qe, children: yr })), (c[48] = Qe), (c[49] = we));
  else we = c[49];
  let Ie;
  if (c[50] !== Re || c[51] !== ke || c[52] !== we)
    ((Ie = r(o, { flexDirection: "column", children: [Re, ke, we] })),
      (c[50] = Re),
      (c[51] = ke),
      (c[52] = we),
      (c[53] = Ie));
  else Ie = c[53];
  let hr;
  if (c[54] === p)
    ((hr = e(t, {
      dimColor: !0,
      children: r(ue, {
        children: [
          e(D, { chord: "enter", action: "select" }),
          e(D, { chord: "escape", action: "continue" }),
        ],
      }),
    })),
      (c[54] = hr));
  else hr = c[54];
  let xe;
  if (
    c[55] !== ge ||
    c[56] !== _e ||
    c[57] !== ye ||
    c[58] !== oe ||
    c[59] !== ne ||
    c[60] !== he ||
    c[61] !== Ie
  )
    ((xe = r(ge, {
      flexDirection: _e,
      gap: ye,
      children: [oe, ne, he, Ie, hr],
    })),
      (c[55] = ge),
      (c[56] = _e),
      (c[57] = ye),
      (c[58] = oe),
      (c[59] = ne),
      (c[60] = he),
      (c[61] = Ie),
      (c[62] = xe));
  else xe = c[62];
  let Br;
  if (
    c[63] !== fe ||
    c[64] !== Be ||
    c[65] !== be ||
    c[66] !== Ce ||
    c[67] !== xe
  )
    ((Br = e(fe, {
      title: Be,
      onCancel: be,
      hideInputGuide: Ce,
      children: xe,
    })),
      (c[63] = fe),
      (c[64] = Be),
      (c[65] = be),
      (c[66] = Ce),
      (c[67] = xe),
      (c[68] = Br));
  else Br = c[68];
  return Br;
}
async function ie(l) {
  let C = await getBridgeDisabledReason();
  if (C) return { kind: "error", message: C };
  let b = await ndt();
  if (b) return { kind: "error", message: b };
  if (!(M() && l !== void 0 ? await getBridgeAccessTokenAsync(l) : getBridgeAccessToken()))
    return { kind: "error", message: vAe };
  if ((await enrollTrustedDeviceIfNeeded(l), await isTrustedDeviceUnenrolled())) {
    if (isProactiveEnrollmentDisabled()) return { kind: "error", message: PROACTIVE_ENROLLMENT_DISABLED_MESSAGE };
    return { kind: "unenrolled-trusted-device" };
  }
  return (n("[bridge] Prerequisites passed, enabling bridge"), null);
}
async function go(l, C, b) {
  let f,
    V = b.trim() || void 0;
  return e(ze, { onDone: l, name: V, sessionGroupingId: f, context: C });
}
function se(l) {
  return l && `${l.accountUuid}/${l.organizationUuid || ""}`;
}
export { go as call };

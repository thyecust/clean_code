// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 252 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getOauthConfig } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { fromEnumOpt } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { setBgExitCause } from "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { cn } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { getUserAgent, isAnthropicAuthEnabled, getUnapprovedCustomApiKey, gatewaySignInScreenConfigured, adminPolicyUnreadable, zg } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getProxyUrlWithSource, getProxyAuthFromHelper, getProxyFetchOptions } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { o, t, zb, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { shouldOfferTerminalSetup, setupTerminal } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { Ze } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import { kG } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-cwpbthvg.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-8spdkj0k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-y9z0dpn0.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { En } from "../../01-核心基础设施/共享小工具-未细化/chunk-979tv7jj.js";
import { k0t } from "../../01-核心基础设施/共享小工具-未细化/chunk-4q59mpqf.js";
import "../认证-OAuth登录/chunk-9g86t9bp.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-r2ab1bp6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1phhhgcj.js";
import "../向导(Wizard)UI/向导(Wizard)UI.7xe5wk62.js";
import "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import "../Bedrock-Vertex/chunk-g6sqdw6w.js";
import { V8 } from "../认证-OAuth登录/chunk-xvt7fc9t.js";
import "../Bedrock-Vertex/chunk-yvs1a1sd.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../语法高亮-Markdown渲染/chunk-hqp2e8nr.js";
import "../Diff引擎/chunk-p2gj9dsf.js";
import { KZ } from "../状态栏-主题/chunk-rhjpq9s2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vwjqzjhr.js";
import { Gp } from "../../01-核心基础设施/共享小工具-未细化/chunk-c8g7bday.js";
import "../认证-OAuth登录/chunk-dtt2nn79.js";
import "../通知(Notifications)/通知(Notifications).g4xng0pg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1371sqbk.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bg4saywz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-g3h141c1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { zB } from "../../03-入口与运行时/CLI入口-Commander/chunk-nhpr06js.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/chunk-2c3z3wjk.js";
import "../认证-OAuth登录/chunk-5bg9xwqx.js";
import { ew, Qt, L_, De, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function be() {
  (setBgExitCause("preflight_endpoint"), process.exit(1));
}
var ce = 1e4;
async function ae() {
  try {
    await getProxyAuthFromHelper();
    let s = getOauthConfig(),
      c = new URL(s.TOKEN_URL),
      g = [`${s.BASE_API_URL}/api/hello`, `${c.origin}/v1/oauth/hello`],
      R = async (u) => {
        let S = new URL(u).hostname,
          b = getProxyFetchOptions({ url: u }),
          T = b.proxy !== void 0;
        try {
          let n = await fetch(u, {
            headers: { "User-Agent": getUserAgent() },
            signal: AbortSignal.timeout(ce),
            ...b,
          });
          if ((n.body?.cancel().catch(() => {}), n.status !== 200))
            return {
              success: !1,
              error: `Failed to connect to ${S}: Status ${n.status}`,
              usedProxy: T,
            };
          return { success: !0 };
        } catch (n) {
          if (n instanceof Error && n.name === "TimeoutError")
            return {
              success: !1,
              error: `Connection to ${S} timed out after ${ce / 1000} seconds`,
              usedProxy: T,
            };
          let Y = kG(n);
          return {
            success: !1,
            error: `Failed to connect to ${S}: ${n instanceof Error ? n.code || n.message : String(n)}`,
            sslHint: Y ?? void 0,
            usedProxy: T,
          };
        }
      },
      x = (await Promise.all(g.map(R))).find((u) => !u.success);
    if (x)
      i("tengu_preflight_check_failed", {
        isConnectivityError: !1,
        hasErrorMessage: !!x.error,
        isSSLError: !!x.sslHint,
      });
    return x || { success: !0 };
  } catch (s) {
    return (
      logError(s),
      i("tengu_preflight_check_failed", { isConnectivityError: !0 }),
      {
        success: !1,
        error: `Connectivity check error: ${s instanceof Error ? s.code || s.message : String(s)}`,
      }
    );
  }
}
function z(Ge) {
  let B = _(14),
    { onSuccess: w } = Ge,
    [l, Ve] = d(null),
    [I, Xe] = d(!0),
    ye = getProxyUrlWithSource()?.source,
    ie = Un(1000) && I,
    Se,
    Ce;
  if (B[0] === p)
    ((Se = () => {
      let se = async function se() {
        let qe = await ae();
        (Ve(qe), Xe(!1));
      };
      se();
    }),
      (Ce = []),
      (B[0] = Se),
      (B[1] = Ce));
  else ((Se = B[0]), (Ce = B[1]));
  E(Se, Ce);
  let ke;
  if (B[2] !== w || B[3] !== l?.success)
    ((ke = () => {
      if (l?.success) w();
    }),
      (B[2] = w),
      (B[3] = l?.success),
      (B[4] = ke));
  else ke = B[4];
  let Re;
  if (B[5] !== w || B[6] !== l)
    ((Re = [l, w]), (B[5] = w), (B[6] = l), (B[7] = Re));
  else Re = B[7];
  (E(ke, Re), Un(be, l && !l.success ? 100 : null));
  let q;
  if (B[8] !== I || B[9] !== l || B[10] !== ie)
    ((q =
      I && ie
        ? r(o, {
            paddingLeft: 1,
            children: [
              e(yo, {}),
              e(t, { children: "Checking connectivity..." }),
            ],
          })
        : !l?.success &&
          !I &&
          r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(t, {
                color: "error",
                children: "Unable to connect to Anthropic services",
              }),
              e(t, { color: "error", children: l?.error }),
              l?.sslHint
                ? r(o, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      e(t, { children: l.sslHint }),
                      e(t, {
                        color: "suggestion",
                        children:
                          "See https://code.claude.com/docs/en/network-config",
                      }),
                    ],
                  })
                : r(o, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      ye && l?.usedProxy
                        ? r(t, {
                            children: [
                              "A proxy is configured via ",
                              ye,
                              ". Check that it allows connections to the host above.",
                              " ",
                              e(t, {
                                color: "suggestion",
                                children:
                                  "See https://code.claude.com/docs/en/network-config",
                              }),
                            ],
                          })
                        : null,
                      e(t, {
                        children:
                          "Please check your internet connection and network settings.",
                      }),
                      r(t, {
                        children: [
                          "Note: Claude Code might not be available in your country. Check supported countries at",
                          " ",
                          e(t, {
                            color: "suggestion",
                            children:
                              "https://anthropic.com/supported-countries",
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          })),
      (B[8] = I),
      (B[9] = l),
      (B[10] = ie),
      (B[11] = q));
  else q = B[11];
  let Pe;
  if (B[12] !== q)
    ((Pe = e(o, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: q,
    })),
      (B[12] = q),
      (B[13] = Pe));
  else Pe = B[13];
  return Pe;
}
function J() {
  let tt = _(1),
    Te;
  if (tt[0] === p)
    ((Te = r(t, {
      color: "permission",
      children: [
        "Press ",
        e(t, { bold: !0, children: "Enter" }),
        " to continue\u2026",
      ],
    })),
      (tt[0] = Te));
  else Te = tt[0];
  return Te;
}
F();
F();
F();
var L = Qt({ marker: "" });
function P(at) {
  let le = _(7),
    { children: pe } = at,
    { marker: me } = De(L),
    Q;
  if (le[0] !== me)
    ((Q = e(t, { dimColor: !0, children: me })), (le[0] = me), (le[1] = Q));
  else Q = le[1];
  let Z;
  if (le[2] !== pe)
    ((Z = e(o, { flexDirection: "column", children: pe })),
      (le[2] = pe),
      (le[3] = Z));
  else Z = le[3];
  let ve;
  if (le[4] !== Q || le[5] !== Z)
    ((ve = r(o, { gap: 1, children: [Q, Z] })),
      (le[4] = Q),
      (le[5] = Z),
      (le[6] = ve));
  else ve = le[6];
  return ve;
}
var M = Qt({ marker: "" });
function oe(gt) {
  let de = _(9),
    { children: j } = gt,
    { marker: H } = De(M),
    Ee = 0;
  for (const Oe of ew.toArray(j)) {
    if (!L_(Oe) || Oe.type !== P) {
      continue;
    }
    Ee++;
  }
  let U = String(Ee).length,
    ee;
  if (de[0] !== j || de[1] !== U || de[2] !== H) {
    let K;
    if (de[4] !== U || de[5] !== H)
      ((K = (te, xt) => {
        if (!L_(te) || te.type !== P) {
          return te;
        }
        let yt = `${String(xt + 1).padStart(U)}.`;
        let Le = `${H}${yt}`;
        return e(M.Provider, {
          value: { marker: Le },
          children: e(L.Provider, { value: { marker: Le }, children: te }),
        });
      }),
        (de[4] = U),
        (de[5] = H),
        (de[6] = K));
    else K = de[6];
    ee = ew.map(j, K);
    ((de[0] = j), (de[1] = U), (de[2] = H), (de[3] = ee));
  } else ee = de[3];
  let K;
  if (de[7] !== ee)
    ((K = e(o, { flexDirection: "column", children: ee })),
      (de[7] = ee),
      (de[8] = K));
  else K = de[8];
  return K;
}
oe.Item = P;
var W = oe;
function Yt({ host: s, onDone: c }) {
  let [g, R] = d(0),
    [m] = d(() => isAnthropicAuthEnabled()),
    [x] = d(() => gatewaySignInScreenConfigured() || adminPolicyUnreadable()),
    u = C(!1),
    [S, b] = cn(),
    { storageV5: T } = _e();
  E(() => {
    i("tengu_began_setup", { oauthEnabled: m });
  }, [m]);
  function n(v = 1) {
    let O = g + v;
    if (O < k.length) {
      R(O);
      for (let X = g + 1; X <= O; X++)
        (i("tengu_onboarding_step", { oauthEnabled: m, stepId: fromEnumOpt(k[X]?.id) }),
          logFeatureOk("onboarding_step_complete"));
    } else {
      if (u.current) return;
      ((u.current = !0), logFeatureOk("onboarding_complete"), c());
    }
  }
  function Y(v) {
    (b(v), n());
  }
  let A = is(),
    fe = e(o, {
      marginX: 1,
      children: e(KZ, {
        onThemeSelect: Y,
        showIntroText: !0,
        helpText: "To change this later, run /theme",
        hideEscToCancel: !0,
        skipExitHandling: !0,
      }),
    }),
    he = r(o, {
      flexDirection: "column",
      gap: 1,
      paddingLeft: 1,
      children: [
        e(t, { bold: !0, children: "Security notes:" }),
        e(o, {
          flexDirection: "column",
          width: 70,
          children: r(W, {
            children: [
              r(W.Item, {
                children: [
                  e(t, { children: "Claude can make mistakes." }),
                  r(t, {
                    dimColor: !0,
                    wrap: "wrap",
                    children: [
                      "You're responsible for Claude's actions and should always",
                      e(zb, {}),
                      "review them, especially when running code.",
                      e(zb, {}),
                    ],
                  }),
                ],
              }),
              r(W.Item, {
                children: [
                  e(t, {
                    children:
                      "Due to prompt injection risks, only use it with code you trust",
                  }),
                  e(Gp, { url: "https://code.claude.com/docs/en/security" }),
                ],
              }),
            ],
          }),
        }),
        e(J, {}),
      ],
    }),
    ge = e(z, { onSuccess: n }),
    re = V(getUnapprovedCustomApiKey, []);
  function xe(v) {
    let O = v && k[g + 1]?.id === "oauth";
    n(O ? 2 : 1);
  }
  let k = [];
  if (m && !x) k.push({ id: "preflight", component: ge });
  if ((k.push({ id: "theme", component: fe }), re))
    k.push({
      id: "api-key",
      component: e(k0t, { customApiKeyTruncated: re, onDone: xe }),
    });
  if (m)
    k.push({
      id: "oauth",
      component: e(o, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: e(V8, { onDone: n, urlOutdent: 1 }),
      }),
    });
  if ((k.push({ id: "security", component: he }), shouldOfferTerminalSetup()))
    k.push({
      id: "terminal-setup",
      component: r(o, {
        flexDirection: "column",
        gap: 1,
        paddingLeft: 1,
        children: [
          e(t, { bold: !0, children: "Use Claude Code's terminal setup?" }),
          r(o, {
            flexDirection: "column",
            width: 70,
            gap: 1,
            children: [
              r(t, {
                children: [
                  "For the optimal coding experience, enable the recommended settings",
                  e(zb, {}),
                  "for your terminal:",
                  " ",
                  a.terminal === "Apple_Terminal"
                    ? zg()
                      ? "Option+Enter for newlines"
                      : "Option+Enter for newlines and no audible bell"
                    : "Shift+Enter for newlines",
                ],
              }),
              e(En, {
                confirmLabel: "Yes, use recommended settings",
                cancelLabel: "No, maybe later with /terminal-setup",
                onConfirm: () =>
                  void setupTerminal(s, S, T)
                    .then(() => logFeatureOk("onboarding_terminal_setup"))
                    .catch(() =>
                      logFeatureBad(
                        "onboarding_terminal_setup",
                        "onboarding_terminal_setup_failed",
                      ),
                    )
                    .finally(n),
                onCancel: n,
              }),
              e(t, {
                dimColor: !0,
                children: A.pending
                  ? r(N, { children: ["Press ", A.keyName, " again to exit"] })
                  : r(ue, {
                      children: [
                        e(D, { chord: "enter", action: "confirm" }),
                        e(D, { chord: "escape", action: "skip" }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
    });
  let G = k[g];
  function ne() {
    n();
  }
  return (
    Ze(
      { "confirm:yes": ne },
      { context: "Confirmation", isActive: G?.id === "security" },
    ),
    Ze(
      { "confirm:no": ne },
      { context: "Confirmation", isActive: G?.id === "terminal-setup" },
    ),
    r(o, {
      flexDirection: "column",
      children: [
        e(zB, {}),
        r(o, {
          flexDirection: "column",
          marginTop: 1,
          children: [
            G?.component,
            A.pending &&
              e(o, {
                padding: 1,
                children: r(t, {
                  dimColor: !0,
                  children: ["Press ", A.keyName, " again to exit"],
                }),
              }),
          ],
        }),
      ],
    })
  );
}
export { Yt as Onboarding };

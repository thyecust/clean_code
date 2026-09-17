// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 134 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { isClaudeAISubscriber, Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { U } from "../../01-核心基础设施/共享小工具-未细化/chunk-r3y9qj3r.js";
import { HI, CHROME_EXTENSION_RECONNECT_URL, isChromeExtensionInstalled } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { openInChrome } from "./chunk-hnp84hf6.js";
import { GI } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { LearnMoreLink } from "../../01-核心基础设施/共享小工具-未细化/learn-more-link.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { CLAUDE_IN_CHROME_MCP_SERVER_NAME } from "../../01-核心基础设施/共享小工具-未细化/chunk-h6f18586.js";
import { s, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
var fo = createLazyValue(() =>
  c({
    deviceId: s(),
    name: s().default("Browser"),
    osPlatform: s().optional(),
  }),
);
function ce(jo) {
  let x = _(36),
    { chromeClient: q, onDone: Ae } = jo,
    [O, Fo] = d(null),
    [eo, Ko] = d(null),
    [He, Go] = d(!1),
    X = C(!1),
    oo;
  if (x[0] === MEMO_CACHE_SENTINEL) ((oo = ee().chromeExtension?.pairedDeviceId), (x[0] = oo));
  else oo = x[0];
  let no = oo,
    ro,
    to;
  if (x[1] !== q)
    ((ro = () => (
      (X.current = !1),
      Ye(q)
        .then((Jo) => {
          if (!X.current) Fo(Jo);
        })
        .catch((Qo) => {
          if ((logFeatureBad("chrome_browser_picker", "list_failed"), !X.current))
            Ko(ge(Qo).message);
        }),
      () => {
        X.current = !0;
      }
    )),
      (to = [q]),
      (x[1] = q),
      (x[2] = ro),
      (x[3] = to));
  else ((ro = x[2]), (to = x[3]));
  E(ro, to);
  let so;
  if (x[4] !== Ae)
    ((so = function u(Xo) {
      if (X.current) {
        return;
      }
      ((X.current = !0), Ae(Xo));
    }),
      (x[4] = Ae),
      (x[5] = so));
  else so = x[5];
  let u = so,
    io;
  if (x[6] !== O || x[7] !== q || x[8] !== u || x[9] !== He)
    ((io = function ie(co) {
      if (He) {
        return;
      }
      Go(!0);
      let lo = O?.find((Zo) => Zo.deviceId === co);
      Se(q, "select_browser", { deviceId: co })
        .then(() => {
          (logFeatureOk("chrome_browser_picker"),
            u(
              lo
                ? `Now using browser "${lo.name}" for Chrome actions.`
                : void 0,
            ));
        })
        .catch((ao) => {
          (logFeatureBad("chrome_browser_picker", "select_failed"),
            n(`claude-in-chrome select_browser failed: ${ge(ao).message}`, {
              level: "error",
            }),
            u(`Couldn't switch browser: ${ge(ao).message}`));
        });
    }),
      (x[6] = O),
      (x[7] = q),
      (x[8] = u),
      (x[9] = He),
      (x[10] = io));
  else io = x[10];
  let ie = io;
  if (eo) {
    const B = `Couldn't list connected browsers: ${eo}`;
    let g;
    if (x[11] !== B)
      ((g = e(t, { color: "error", children: B })), (x[11] = B), (x[12] = g));
    else g = x[12];
    let L;
    if (x[13] !== u || x[14] !== g)
      ((L = e(W, { onDone: u, children: g })),
        (x[13] = u),
        (x[14] = g),
        (x[15] = L));
    else L = x[15];
    return L;
  }
  if (O === null) {
    let B;
    if (x[16] === MEMO_CACHE_SENTINEL)
      ((B = e(t, {
        dimColor: !0,
        children: "Looking for connected browsers\u2026",
      })),
        (x[16] = B));
    else B = x[16];
    let g;
    if (x[17] !== u)
      ((g = e(W, { onDone: u, children: B })), (x[17] = u), (x[18] = g));
    else g = x[18];
    return g;
  }
  if (O.length === 0) {
    let B;
    if (x[19] === MEMO_CACHE_SENTINEL)
      ((B = e(t, {
        children:
          "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.",
      })),
        (x[19] = B));
    else B = x[19];
    let g;
    if (x[20] !== u)
      ((g = e(W, { onDone: u, children: B })), (x[20] = u), (x[21] = g));
    else g = x[21];
    return g;
  }
  let B;
  if (x[22] !== O) {
    let g;
    if (x[24] === MEMO_CACHE_SENTINEL)
      ((g = (ye) => ({
        value: ye.deviceId,
        label: r(N, {
          children: [
            e(t, { children: ye.name }),
            r(t, {
              dimColor: !0,
              children: [
                " ",
                "\xB7 ",
                ye.osPlatform ?? "unknown OS",
                ye.deviceId === no ? " \xB7 current" : "",
              ],
            }),
          ],
        }),
      })),
        (x[24] = g));
    else g = x[24];
    B = O.map(g);
    ((x[22] = O), (x[23] = B));
  } else B = x[23];
  let We = B;
  const g =
    O.length === 1
      ? "One browser is connected:"
      : `Choose which browser to use (${O.length} connected):`;
  let L;
  if (x[25] !== g) ((L = e(t, { children: g })), (x[25] = g), (x[26] = L));
  else L = x[26];
  let De;
  if (x[27] !== u) ((De = () => u()), (x[27] = u), (x[28] = De));
  else De = x[28];
  let Ee;
  if (x[29] !== ie || x[30] !== We || x[31] !== De)
    ((Ee = e(ve, {
      options: We,
      onChange: ie,
      onCancel: De,
      defaultFocusValue: no,
      hideIndexes: !0,
    })),
      (x[29] = ie),
      (x[30] = We),
      (x[31] = De),
      (x[32] = Ee));
  else Ee = x[32];
  let mo;
  if (x[33] !== Ee || x[34] !== L)
    ((mo = r(o, { flexDirection: "column", gap: 1, children: [L, Ee] })),
      (x[33] = Ee),
      (x[34] = L),
      (x[35] = mo));
  else mo = x[35];
  return mo;
}
function W(en) {
  let Ue = _(6),
    { onDone: Ie, children: $e } = en,
    uo;
  if (Ue[0] === MEMO_CACHE_SENTINEL)
    ((uo = [{ value: "back", label: "\u2039 Back" }]), (Ue[0] = uo));
  else uo = Ue[0];
  let Re;
  if (Ue[1] !== Ie)
    ((Re = e(ve, {
      options: uo,
      onChange: () => Ie(),
      onCancel: () => Ie(),
      hideIndexes: !0,
    })),
      (Ue[1] = Ie),
      (Ue[2] = Re));
  else Re = Ue[2];
  let po;
  if (Ue[3] !== $e || Ue[4] !== Re)
    ((po = r(o, { flexDirection: "column", gap: 1, children: [$e, Re] })),
      (Ue[3] = $e),
      (Ue[4] = Re),
      (Ue[5] = po));
  else po = Ue[5];
  return po;
}
async function Ye(b) {
  let R = await Se(b, "list_connected_browsers", {});
  if (!R) return [];
  let w = v(fo()).safeParse(z(R));
  return w.success ? w.data : [];
}
async function Se(b, R, w) {
  let M = await GI(b, { name: R, arguments: w }),
    D = Array.isArray(M.content) ? M.content[0] : void 0;
  return D && typeof D === "object" && "text" in D && typeof D.text === "string"
    ? D.text
    : void 0;
}
function So(zn) {
  return zn.mcp.clients;
}
function Po(Ro) {
  return Ro.name === CLAUDE_IN_CHROME_MCP_SERVER_NAME && Ro.type === "connected";
}
function ko(An) {
  return An + 1;
}
function _o(Hn) {
  return Hn + 1;
}
function Bo(Wn) {
  return Wn + 1;
}
function Mo(Tn) {
  return Tn + 1;
}
var Ge = "https://clau.de/chrome/permissions";
function Je(Sn) {
  let i = _(47),
    {
      onDone: Z,
      isExtensionInstalled: Pn,
      configEnabled: kn,
      isClaudeAISubscriber: Pe,
      isWSL: ke,
    } = Sn,
    qe = U(So),
    { storageV5: Le } = useStorageV5Context(),
    [Ve, Be] = d(0),
    [oe, _n] = d(kn ?? !1),
    [je, ho] = d(!1),
    [V, Bn] = d(Pn),
    [Fe, go] = d("menu"),
    bo;
  if (i[0] !== qe) ((bo = qe.find(Po)), (i[0] = qe), (i[1] = bo));
  else bo = i[1];
  let le = bo,
    j = le !== void 0,
    Co;
  if (i[2] === MEMO_CACHE_SENTINEL) ((Co = ee().chromeExtension?.pairedDeviceName), (i[2] = Co));
  else Co = i[2];
  let wo = Co,
    vo;
  if (i[3] === MEMO_CACHE_SENTINEL)
    ((vo = function ae(Mn) {
      openInChrome(Mn).catch(logError);
    }),
      (i[3] = vo));
  else vo = i[3];
  let ae = vo,
    xo;
  if (i[4] !== oe || i[5] !== Le)
    ((xo = function me(Nn) {
      bb19: switch (Nn) {
        case "install-extension": {
          (Be(ko), ho(!0), ae(HI));
          break bb19;
        }
        case "reconnect": {
          (Be(_o),
            isChromeExtensionInstalled()
              .then((yo) => {
                if ((Bn(yo), yo)) ho(!1);
              })
              .catch(logError),
            ae(CHROME_EXTENSION_RECONNECT_URL));
          break bb19;
        }
        case "manage-permissions": {
          (Be(Bo), ae(Ge));
          break bb19;
        }
        case "toggle-default": {
          let Do = !oe;
          (Te((On) => ({ ...On, claudeInChromeDefaultEnabled: Do }), Le),
            _n(Do));
          break bb19;
        }
        case "select-browser": {
          go("select-browser");
        }
      }
    }),
      (i[4] = oe),
      (i[5] = Le),
      (i[6] = xo));
  else xo = i[6];
  let me = xo,
    K;
  if (i[7] !== oe || i[8] !== j || i[9] !== V) {
    K = [];
    let ne = V ? "" : " (requires extension)";
    if (!V) {
      let S;
      if (i[11] === MEMO_CACHE_SENTINEL)
        ((S = {
          label: "Install Chrome extension",
          value: "install-extension",
        }),
          (i[11] = S));
      else S = i[11];
      K.push(S);
    }
    if (j) {
      let S;
      if (i[12] === MEMO_CACHE_SENTINEL)
        ((S = { label: "Select browser\u2026", value: "select-browser" }),
          (i[12] = S));
      else S = i[12];
      K.push(S);
    }
    let S;
    if (i[13] === MEMO_CACHE_SENTINEL)
      ((S = e(t, { children: "Manage permissions" })), (i[13] = S));
    else S = i[13];
    let ue;
    if (i[14] !== ne)
      ((ue = {
        label: r(N, { children: [S, e(t, { dimColor: !0, children: ne })] }),
        value: "manage-permissions",
      }),
        (i[14] = ne),
        (i[15] = ue));
    else ue = i[15];
    let G;
    if (i[16] === MEMO_CACHE_SENTINEL)
      ((G = e(t, { children: "Reconnect extension" })), (i[16] = G));
    else G = i[16];
    let J;
    if (i[17] !== ne)
      ((J = {
        label: r(N, { children: [G, e(t, { dimColor: !0, children: ne })] }),
        value: "reconnect",
      }),
        (i[17] = ne),
        (i[18] = J));
    else J = i[18];
    const T = `Enabled by default: ${oe ? "Yes" : "No"}`;
    let pe;
    if (i[19] !== T)
      ((pe = { label: T, value: "toggle-default" }), (i[19] = T), (i[20] = pe));
    else pe = i[20];
    K.push(ue, J, pe);
    ((i[7] = oe), (i[8] = j), (i[9] = V), (i[10] = K));
  } else K = i[10];
  let Ke = ke || !Pe,
    S;
  if (i[21] !== Z) ((S = () => Z()), (i[21] = Z), (i[22] = S));
  else S = i[22];
  let ue;
  if (i[23] === MEMO_CACHE_SENTINEL)
    ((ue = e(t, {
      children:
        "Claude in Chrome works with the Chrome extension to let you control your browser directly from Claude Code. Navigate websites, fill forms, capture screenshots, record GIFs, and debug with console logs and network requests.",
    })),
      (i[23] = ue));
  else ue = i[23];
  let G;
  if (i[24] !== ke)
    ((G =
      ke &&
      e(t, {
        color: "error",
        children: "Claude in Chrome is not supported in WSL at this time.",
      })),
      (i[24] = ke),
      (i[25] = G));
  else G = i[25];
  let J;
  if (i[26] !== Pe)
    ((J =
      !Pe &&
      e(t, {
        color: "error",
        children: "Claude in Chrome requires a claude.ai subscription.",
      })),
      (i[26] = Pe),
      (i[27] = J));
  else J = i[27];
  let T;
  if (
    i[28] !== le ||
    i[29] !== me ||
    i[30] !== j ||
    i[31] !== Ke ||
    i[32] !== V ||
    i[33] !== Z ||
    i[34] !== K ||
    i[35] !== Ve ||
    i[36] !== je ||
    i[37] !== Fe
  )
    ((T =
      !Ke &&
      r(N, {
        children: [
          r(o, {
            flexDirection: "column",
            children: [
              r(t, {
                children: [
                  "Status:",
                  " ",
                  j
                    ? e(t, { color: "success", children: "Enabled" })
                    : e(t, { color: "inactive", children: "Disabled" }),
                ],
              }),
              r(t, {
                children: [
                  "Extension:",
                  " ",
                  V
                    ? e(t, { color: "success", children: "Installed" })
                    : e(t, { color: "warning", children: "Not detected" }),
                ],
              }),
              j && wo
                ? r(t, {
                    children: [
                      "Browser: ",
                      e(t, { color: "success", children: wo }),
                    ],
                  })
                : null,
            ],
          }),
          Fe === "select-browser" && le
            ? e(ce, {
                chromeClient: le,
                onDone: (Eo) => {
                  if ((go("menu"), Be(Mo), Eo)) Z(Eo);
                },
              })
            : e(ve, { options: K, onChange: me, hideIndexes: !0 }, Ve),
          je &&
            r(t, {
              color: "warning",
              children: [
                "Once installed, select ",
                '"Reconnect extension"',
                " to connect.",
              ],
            }),
          r(t, {
            children: [
              e(t, { dimColor: !0, children: "Usage: " }),
              e(t, { children: "claude --chrome" }),
              e(t, { dimColor: !0, children: " or " }),
              e(t, { children: "claude --no-chrome" }),
            ],
          }),
          e(t, {
            dimColor: !0,
            children:
              "Site-level permissions are inherited from the Chrome extension. Manage permissions in the Chrome extension settings to control which sites Claude can browse, click, and type on.",
          }),
        ],
      })),
      (i[28] = le),
      (i[29] = me),
      (i[30] = j),
      (i[31] = Ke),
      (i[32] = V),
      (i[33] = Z),
      (i[34] = K),
      (i[35] = Ve),
      (i[36] = je),
      (i[37] = Fe),
      (i[38] = T));
  else T = i[38];
  let pe;
  if (i[39] === MEMO_CACHE_SENTINEL)
    ((pe = e(LearnMoreLink, { url: "https://code.claude.com/docs/en/chrome" })),
      (i[39] = pe));
  else pe = i[39];
  let Me;
  if (i[40] !== G || i[41] !== J || i[42] !== T)
    ((Me = r(o, {
      flexDirection: "column",
      gap: 1,
      children: [ue, G, J, T, pe],
    })),
      (i[40] = G),
      (i[41] = J),
      (i[42] = T),
      (i[43] = Me));
  else Me = i[43];
  let Io;
  if (i[44] !== Me || i[45] !== S)
    ((Io = e(de, {
      title: "Claude in Chrome",
      onCancel: S,
      color: "chromeYellow",
      children: Me,
    })),
      (i[44] = Me),
      (i[45] = S),
      (i[46] = Io));
  else Io = i[46];
  return Io;
}
var In = async function (b) {
  let R = await isChromeExtensionInstalled().catch(
      (H) => (
        n(
          `[Claude in Chrome] Extension detection failed: ${H instanceof Error ? H.message : String(H)}`,
          { level: "error" },
        ),
        !1
      ),
    ),
    w = ee(),
    M = isClaudeAISubscriber(),
    D = a.isWslEnvironment();
  return e(Je, {
    onDone: b,
    isExtensionInstalled: R,
    configEnabled: w.claudeInChromeDefaultEnabled,
    isClaudeAISubscriber: M,
    isWSL: D,
  });
};
export { In as call };

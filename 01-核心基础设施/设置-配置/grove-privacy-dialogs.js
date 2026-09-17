// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { logEvent } from "../遥测-OpenTelemetry/analytics-event-queue.js";
import { fromEnum } from "../遥测-OpenTelemetry/analytics-fields.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../核心工具-未归类/storage-v5-context.js";
import { Box, Text, Link } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getAccountSettings, markGroveNoticeViewed, updateGroveSettings, getGroveConfig, isGroveNoticeDue } from "../../02-功能模块/隐私设置-Grove/chunk-a4mdm49v.js";
import { Select } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定-Keybindings/keybinding-display.js";
import { DotSeparatedList } from "../核心工具-未归类/chunk-ff1hq6qq.js";
import { de } from "../UI组件-TUI/chunk-92g8hxqw.js";
import { FocusableBox } from "../UI组件-TUI/focusable-box.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function Qe() {
  logEvent("tengu_grove_privacy_settings_viewed", {});
}
var ce = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
function Q() {
  let y = _(9),
    le;
  if (y[0] === MEMO_CACHE_SENTINEL)
    ((le = r(Text, {
      children: [
        "An update to our Consumer Terms and Privacy Policy will take effect on",
        " ",
        e(Text, { bold: !0, children: "October 8, 2025" }),
        ". You can accept the updated terms today.",
      ],
    })),
      (y[0] = le));
  else le = y[0];
  let pe;
  if (y[1] === MEMO_CACHE_SENTINEL) ((pe = e(Text, { children: "What's changing?" })), (y[1] = pe));
  else pe = y[1];
  let me, fe;
  if (y[2] === MEMO_CACHE_SENTINEL)
    ((me = e(Text, { children: "\xB7 " })),
      (fe = e(Text, { bold: !0, children: "Help improve our AI models " })),
      (y[2] = me),
      (y[3] = fe));
  else ((me = y[2]), (fe = y[3]));
  let ge;
  if (y[4] === MEMO_CACHE_SENTINEL)
    ((ge = e(Box, {
      paddingLeft: 1,
      children: r(Text, {
        children: [
          me,
          fe,
          r(Text, {
            children: [
              "\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (",
              e(Link, {
                url: "https://claude.ai/settings/data-privacy-controls",
              }),
              ").",
            ],
          }),
        ],
      }),
    })),
      (y[4] = ge));
  else ge = y[4];
  let ye;
  if (y[5] === MEMO_CACHE_SENTINEL)
    ((ye = r(Box, {
      flexDirection: "column",
      children: [
        pe,
        ge,
        e(Box, {
          paddingLeft: 1,
          children: r(Text, {
            children: [
              e(Text, { children: "\xB7 " }),
              e(Text, { bold: !0, children: "Updates to data retention " }),
              e(Text, {
                children:
                  "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years.",
              }),
            ],
          }),
        }),
      ],
    })),
      (y[5] = ye));
  else ye = y[5];
  let he;
  if (y[6] === MEMO_CACHE_SENTINEL)
    ((he = e(Link, {
      url: "https://www.anthropic.com/news/updates-to-our-consumer-terms",
    })),
      (y[6] = he));
  else he = y[6];
  let we;
  if (y[7] === MEMO_CACHE_SENTINEL)
    ((we = e(Link, { url: "https://anthropic.com/legal/terms" })), (y[7] = we));
  else we = y[7];
  let be;
  if (y[8] === MEMO_CACHE_SENTINEL)
    ((be = r(N, {
      children: [
        le,
        ye,
        r(Text, {
          children: [
            "Learn more (",
            he,
            ") or read the updated Consumer Terms (",
            we,
            ") and Privacy Policy (",
            e(Link, { url: "https://anthropic.com/legal/privacy" }),
            ")",
          ],
        }),
      ],
    })),
      (y[8] = be));
  else be = y[8];
  return be;
}
function X() {
  let A = _(7),
    De;
  if (A[0] === MEMO_CACHE_SENTINEL)
    ((De = e(Text, {
      children: "We've updated our Consumer Terms and Privacy Policy.",
    })),
      (A[0] = De));
  else De = A[0];
  let Ae;
  if (A[1] === MEMO_CACHE_SENTINEL) ((Ae = e(Text, { children: "What's changing?" })), (A[1] = Ae));
  else Ae = A[1];
  let ke;
  if (A[2] === MEMO_CACHE_SENTINEL)
    ((ke = r(Box, {
      flexDirection: "column",
      children: [
        e(Text, { bold: !0, children: "Help improve our AI models" }),
        e(Text, {
          children:
            "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings",
        }),
        e(Link, { url: "https://claude.ai/settings/data-privacy-controls" }),
      ],
    })),
      (A[2] = ke));
  else ke = A[2];
  let xe;
  if (A[3] === MEMO_CACHE_SENTINEL)
    ((xe = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        Ae,
        ke,
        r(Box, {
          flexDirection: "column",
          children: [
            e(Text, { bold: !0, children: "How this affects data retention" }),
            e(Text, {
              children:
                "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime.",
            }),
          ],
        }),
      ],
    })),
      (A[3] = xe));
  else xe = A[3];
  let Ce;
  if (A[4] === MEMO_CACHE_SENTINEL)
    ((Ce = e(Link, {
      url: "https://www.anthropic.com/news/updates-to-our-consumer-terms",
    })),
      (A[4] = Ce));
  else Ce = A[4];
  let Pe;
  if (A[5] === MEMO_CACHE_SENTINEL)
    ((Pe = e(Link, { url: "https://anthropic.com/legal/terms" })), (A[5] = Pe));
  else Pe = A[5];
  let Re;
  if (A[6] === MEMO_CACHE_SENTINEL)
    ((Re = r(N, {
      children: [
        De,
        xe,
        r(Text, {
          children: [
            "Learn more (",
            Ce,
            ") or read the updated Consumer Terms (",
            Pe,
            ") and Privacy Policy (",
            e(Link, { url: "https://anthropic.com/legal/privacy" }),
            ")",
          ],
        }),
      ],
    })),
      (A[6] = Re));
  else Re = A[6];
  return Re;
}
function GroveDialog(so) {
  let n = _(37),
    { showIfAlreadyViewed: H, location: S, onDone: k } = so,
    [Te, lo] = d(null),
    [a, po] = d(null),
    { credentials: m } = useStorageV5Context(),
    Ie,
    Ne;
  if (n[0] !== m || n[1] !== S || n[2] !== k || n[3] !== H)
    ((Ie = () => {
      let ie = async function ie() {
        let [uo, te] = await Promise.all([getAccountSettings(m), getGroveConfig(m)]);
        let Fe = te.success ? te.data : null;
        po(Fe);
        let Oe = isGroveNoticeDue(uo, te, H);
        if ((lo(Oe), !Oe)) {
          k("skip_rendering");
          return;
        }
        (markGroveNoticeViewed(m),
          logEvent("tengu_grove_policy_viewed", {
            location: fromEnum(S),
            dismissable: Fe?.notice_is_grace_period,
          }));
      };
      ie();
    }),
      (Ne = [H, S, k, m]),
      (n[0] = m),
      (n[1] = S),
      (n[2] = k),
      (n[3] = H),
      (n[4] = Ie),
      (n[5] = Ne));
  else ((Ie = n[4]), (Ne = n[5]));
  if ((E(Ie, Ne), Te === null)) {
    return null;
  }
  if (!Te) {
    return null;
  }
  let Ge;
  if (n[6] !== m || n[7] !== a?.notice_is_grace_period || n[8] !== k)
    ((Ge = async function v(Le) {
      bb25: switch (Le) {
        case "accept_opt_in": {
          (await updateGroveSettings(!0, m),
            logEvent("tengu_grove_policy_submitted", {
              state: !0,
              dismissable: a?.notice_is_grace_period,
            }));
          break bb25;
        }
        case "accept_opt_out": {
          (await updateGroveSettings(!1, m),
            logEvent("tengu_grove_policy_submitted", {
              state: !1,
              dismissable: a?.notice_is_grace_period,
            }));
          break bb25;
        }
        case "defer": {
          logEvent("tengu_grove_policy_dismissed", { state: !0 });
          break bb25;
        }
        case "escape": {
          logEvent("tengu_grove_policy_escaped", {});
        }
      }
      k(Le);
    }),
      (n[6] = m),
      (n[7] = a?.notice_is_grace_period),
      (n[8] = k),
      (n[9] = Ge));
  else Ge = n[9];
  let v = Ge,
    Be;
  if (n[10] !== a?.domain_excluded)
    ((Be = a?.domain_excluded
      ? [
          {
            label:
              "Accept terms \xB7 Help improve our AI models: OFF (for emails with your domain)",
            value: "accept_opt_out",
          },
        ]
      : [
          {
            label: "Accept terms \xB7 Help improve our AI models: ON",
            value: "accept_opt_in",
          },
          {
            label: "Accept terms \xB7 Help improve our AI models: OFF",
            value: "accept_opt_out",
          },
        ]),
      (n[10] = a?.domain_excluded),
      (n[11] = Be));
  else Be = n[11];
  let re = Be,
    We;
  if (n[12] !== a?.notice_is_grace_period || n[13] !== v)
    ((We = function h() {
      if (a?.notice_is_grace_period) {
        v("defer");
        return;
      }
      v("escape");
    }),
      (n[12] = a?.notice_is_grace_period),
      (n[13] = v),
      (n[14] = We));
  else We = n[14];
  let h = We,
    He;
  if (n[15] === MEMO_CACHE_SENTINEL)
    ((He = r(DotSeparatedList, {
      children: [
        e(KeybindingHint, { chord: "enter", action: "confirm" }),
        e(KeybindingHint, { chord: "escape", action: "cancel" }),
      ],
    })),
      (n[15] = He));
  else He = n[15];
  let Y;
  if (n[16] !== a?.notice_is_grace_period)
    ((Y = e(Box, {
      flexDirection: "column",
      gap: 1,
      flexGrow: 1,
      children: a?.notice_is_grace_period ? e(Q, {}) : e(X, {}),
    })),
      (n[16] = a?.notice_is_grace_period),
      (n[17] = Y));
  else Y = n[17];
  let Se;
  if (n[18] === MEMO_CACHE_SENTINEL)
    ((Se = e(Box, {
      flexShrink: 0,
      children: e(Text, { color: "professionalBlue", children: ce }),
    })),
      (n[18] = Se));
  else Se = n[18];
  let U;
  if (n[19] !== Y)
    ((U = r(Box, { flexDirection: "row", children: [Y, Se] })),
      (n[19] = Y),
      (n[20] = U));
  else U = n[20];
  let Ye;
  if (n[21] === MEMO_CACHE_SENTINEL)
    ((Ye = r(Box, {
      flexDirection: "column",
      children: [
        e(Text, {
          bold: !0,
          children: "Please select how you'd like to continue",
        }),
        e(Text, {
          children: "Your choice takes effect immediately upon confirmation.",
        }),
      ],
    })),
      (n[21] = Ye));
  else Ye = n[21];
  let M;
  if (n[22] !== a?.notice_is_grace_period)
    ((M = a?.notice_is_grace_period
      ? [{ label: "Not now", value: "defer" }]
      : []),
      (n[22] = a?.notice_is_grace_period),
      (n[23] = M));
  else M = n[23];
  let V;
  if (n[24] !== re || n[25] !== M)
    ((V = [...re, ...M]), (n[24] = re), (n[25] = M), (n[26] = V));
  else V = n[26];
  let j;
  if (n[27] !== v) ((j = (mo) => v(mo)), (n[27] = v), (n[28] = j));
  else j = n[28];
  let q;
  if (n[29] !== h || n[30] !== V || n[31] !== j)
    ((q = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [Ye, e(Select, { options: V, onChange: j, onCancel: h })],
    })),
      (n[29] = h),
      (n[30] = V),
      (n[31] = j),
      (n[32] = q));
  else q = n[32];
  let Ue;
  if (n[33] !== h || n[34] !== q || n[35] !== U)
    ((Ue = r(de, {
      title: "Updates to Consumer Terms and Policies",
      color: "professionalBlue",
      onCancel: h,
      inputGuide: He,
      children: [U, q],
    })),
      (n[33] = h),
      (n[34] = q),
      (n[35] = U),
      (n[36] = Ue));
  else Ue = n[36];
  return Ue;
}
function PrivacySettingsDialog(_o) {
  let l = _(21),
    { settings: fo, domainExcluded: x, onDone: ae } = _o,
    [z, go] = d(fo.grove_enabled),
    { credentials: ne } = useStorageV5Context(),
    Me;
  if (l[0] === MEMO_CACHE_SENTINEL) ((Me = []), (l[0] = Me));
  else Me = l[0];
  E(Qe, Me);
  let Ve;
  if (l[1] !== ne || l[2] !== x || l[3] !== z)
    ((Ve = function O(R) {
      if (R.ctrl || R.meta) {
        return;
      }
      if (!x && (R.key === "tab" || R.key === "return" || R.key === " ")) {
        R.preventDefault();
        let je = !z;
        (go(je), updateGroveSettings(je, ne));
      }
    }),
      (l[1] = ne),
      (l[2] = x),
      (l[3] = z),
      (l[4] = Ve));
  else Ve = l[4];
  let O = Ve,
    qe;
  if (l[5] === MEMO_CACHE_SENTINEL)
    ((qe = e(Text, { color: "error", children: "false" })), (l[5] = qe));
  else qe = l[5];
  let G = qe;
  if (x) {
    let f;
    if (l[6] === MEMO_CACHE_SENTINEL)
      ((f = e(Text, {
        color: "error",
        children: "false (for emails with your domain)",
      })),
        (l[6] = f));
    else f = l[6];
    G = f;
  } else if (z) {
    let f;
    if (l[7] === MEMO_CACHE_SENTINEL)
      ((f = e(Text, { color: "success", children: "true" })), (l[7] = f));
    else f = l[7];
    G = f;
  }
  let f;
  if (l[8] !== x)
    ((f = x
      ? e(KeybindingHint, { chord: "escape", action: "cancel" })
      : r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: ["enter", "tab", "space"], action: "toggle" }),
            e(KeybindingHint, { chord: "escape", action: "cancel" }),
          ],
        })),
      (l[8] = x),
      (l[9] = f));
  else f = l[9];
  let ze;
  if (l[10] === MEMO_CACHE_SENTINEL)
    ((ze = r(Text, {
      children: [
        "Review and manage your privacy settings at",
        " ",
        e(Link, { url: "https://claude.ai/settings/data-privacy-controls" }),
      ],
    })),
      (l[10] = ze));
  else ze = l[10];
  let Je;
  if (l[11] === MEMO_CACHE_SENTINEL)
    ((Je = e(Box, {
      width: 44,
      children: e(Text, { bold: !0, children: "Help improve our AI models" }),
    })),
      (l[11] = Je));
  else Je = l[11];
  let J;
  if (l[12] !== G)
    ((J = r(Box, { children: [Je, e(Box, { children: G })] })),
      (l[12] = G),
      (l[13] = J));
  else J = l[13];
  let K;
  if (l[14] !== O || l[15] !== J)
    ((K = r(FocusableBox, { gap: 1, onKeyDown: O, children: [ze, J] })),
      (l[14] = O),
      (l[15] = J),
      (l[16] = K));
  else K = l[16];
  let Ke;
  if (l[17] !== ae || l[18] !== f || l[19] !== K)
    ((Ke = e(de, {
      title: "Data privacy",
      color: "professionalBlue",
      onCancel: ae,
      inputGuide: f,
      children: K,
    })),
      (l[17] = ae),
      (l[18] = f),
      (l[19] = K),
      (l[20] = Ke));
  else Ke = l[20];
  return Ke;
}
export { GroveDialog, PrivacySettingsDialog };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 249 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ge } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { describeSettingsSourceShort } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getSettingsForSource, updateSettingsForSource } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { isSelfHostedPool, getEnvironmentOrPoolId, getDefaultRemoteEnvironment } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { fetchRemoteEnvironments } from "../../01-核心基础设施/共享小工具-未细化/remote-environments.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function Ye(Un) {
  return !isSelfHostedPool(Un);
}
var v = "Select remote environment",
  Q = "Configure environments at: https://claude.ai/code";
function fe(fn) {
  let s = _(35),
    { onDone: i } = fn,
    { storageV5: S, credentials: M } = useStorageV5Context(),
    [A, he] = d("loading"),
    we;
  if (s[0] === MEMO_CACHE_SENTINEL) ((we = []), (s[0] = we));
  else we = s[0];
  let [k, gn] = d(we),
    [I, pn] = d(null),
    [Re, vn] = d(null),
    [P, hn] = d(null),
    [C, Rn] = d(null),
    [ee, Sn] = d(null),
    Je,
    Ve;
  if (s[1] !== M || s[2] !== S)
    ((Je = () => {
      let Se = !1;
      let Ce = async function Ce() {
        try {
          let W = await fetchRemoteEnvironments(S, M);
          if (Se) {
            return;
          }
          (gn(W.availableTargets),
            pn(W.selectedTarget),
            vn(W.selectedTargetSource),
            hn(W.environmentsError),
            Rn(W.ignoredUntrustedPool),
            he(null));
        } catch (ne) {
          let Cn = ne;
          if (Se) {
            return;
          }
          let Xe = ge(Cn);
          (logForDebugging(`Failed to fetch remote environments: ${Xe.message}`, {
            level: "error",
          }),
            Sn(Xe.message),
            he(null));
        }
      };
      return (
        Ce(),
        () => {
          Se = !0;
        }
      );
    }),
      (Ve = [M, S]),
      (s[1] = M),
      (s[2] = S),
      (s[3] = Je),
      (s[4] = Ve));
  else ((Je = s[3]), (Ve = s[4]));
  E(Je, Ve);
  let ne;
  if (s[5] !== i || s[6] !== S || s[7] !== k)
    ((ne = function q(Be) {
      if (Be === "cancel") {
        i();
        return;
      }
      he("updating");
      let L = k.find((En) => getEnvironmentOrPoolId(En) === Be);
      if (!L) {
        i("Error: Selected environment not found");
        return;
      }
      let yn =
        getSettingsForSource("localSettings")?.remote?.defaultEnvironmentId !== void 0
          ? updateSettingsForSource(
              "localSettings",
              { remote: { defaultEnvironmentId: void 0 } },
              void 0,
              S,
            )
          : Promise.resolve({ error: null });
      let bn = updateSettingsForSource(
        "userSettings",
        { remote: { defaultEnvironmentId: getEnvironmentOrPoolId(L) } },
        void 0,
        S,
      );
      let Nn = isSelfHostedPool(L) ? "self-hosted environment" : "remote environment";
      Promise.all([yn, bn]).then(() => {
        let j = getDefaultRemoteEnvironment();
        let Tn =
          j.id !== void 0 && j.id !== getEnvironmentOrPoolId(L) && j.source !== void 0
            ? ` \u2014 note: ${describeSettingsSourceShort(j.source)} settings pin ${j.id}, which takes precedence here`
            : "";
        i(`Set default ${Nn} to ${chalk.bold(L.name)} (${getEnvironmentOrPoolId(L)})${Tn}`);
      });
    }),
      (s[5] = i),
      (s[6] = S),
      (s[7] = k),
      (s[8] = ne));
  else ne = s[8];
  let q = ne;
  if (A === "loading") {
    let l;
    if (s[9] === MEMO_CACHE_SENTINEL)
      ((l = e(SpinnerMessageLine, { message: "Loading environments\u2026" })), (s[9] = l));
    else l = s[9];
    let u;
    if (s[10] !== i)
      ((u = e(de, { title: v, onCancel: i, hideInputGuide: !0, children: l })),
        (s[10] = i),
        (s[11] = u));
    else u = s[11];
    return u;
  }
  if (ee) {
    let l;
    if (s[12] !== ee)
      ((l = r(Text, { color: "error", children: ["Error: ", ee] })),
        (s[12] = ee),
        (s[13] = l));
    else l = s[13];
    let u;
    if (s[14] !== i || s[15] !== l)
      ((u = e(de, { title: v, onCancel: i, children: l })),
        (s[14] = i),
        (s[15] = l),
        (s[16] = u));
    else u = s[16];
    return u;
  }
  if (!I) {
    let l;
    if (s[17] === MEMO_CACHE_SENTINEL)
      ((l = e(Text, { children: "No remote environments available." })),
        (s[17] = l));
    else l = s[17];
    let u;
    if (s[18] !== P)
      ((u =
        P &&
        r(Text, {
          dimColor: !0,
          children: ["(couldn't list environments: ", P, ")"],
        })),
        (s[18] = P),
        (s[19] = u));
    else u = s[19];
    let te;
    if (s[20] !== C)
      ((te =
        C &&
        r(Text, {
          dimColor: !0,
          children: [
            "(ignoring self-hosted environment default ",
            C.id,
            " ",
            "from ",
            describeSettingsSourceShort(C.source),
            " settings \u2014 self-hosted placement is only honoured from user/policy/flag settings)",
          ],
        })),
        (s[20] = C),
        (s[21] = te));
    else te = s[21];
    let Oe;
    if (s[22] !== i || s[23] !== u || s[24] !== te)
      ((Oe = r(de, {
        title: v,
        subtitle: Q,
        onCancel: i,
        children: [l, u, te],
      })),
        (s[22] = i),
        (s[23] = u),
        (s[24] = te),
        (s[25] = Oe));
    else Oe = s[25];
    return Oe;
  }
  let l;
  if (
    s[26] !== P ||
    s[27] !== q ||
    s[28] !== C ||
    s[29] !== A ||
    s[30] !== i ||
    s[31] !== I ||
    s[32] !== Re ||
    s[33] !== k
  )
    ((l = e(me, {
      targets: k,
      selectedTarget: I,
      selectedTargetSource: Re,
      environmentsError: P,
      ignoredUntrustedPool: C,
      loadingState: A,
      onSelect: q,
      onCancel: i,
    })),
      (s[26] = P),
      (s[27] = q),
      (s[28] = C),
      (s[29] = A),
      (s[30] = i),
      (s[31] = I),
      (s[32] = Re),
      (s[33] = k),
      (s[34] = l));
  else l = s[34];
  return l;
}
function K(o) {
  let a = getEnvironmentOrPoolId(o),
    c = isSelfHostedPool(o)
      ? ` \xB7 ${o.alive_runner_count} ${pluralize(o.alive_runner_count, "runner")}`
      : "";
  return {
    label: r(Text, {
      children: [
        o.name,
        " ",
        r(Text, { dimColor: !0, children: ["(", a, c, ")"] }),
      ],
    }),
    value: a,
  };
}
function me(Pn) {
  let g = _(27),
    {
      targets: oe,
      selectedTarget: w,
      selectedTargetSource: y,
      environmentsError: re,
      ignoredUntrustedPool: z,
      loadingState: Ee,
      onSelect: le,
      onCancel: be,
    } = Pn,
    We;
  if (g[0] !== y)
    ((We = y && y !== "userSettings" ? ` (from ${describeSettingsSourceShort(y)} settings)` : ""),
      (g[0] = y),
      (g[1] = We));
  else We = g[1];
  let $e = We,
    qe;
  if (g[2] !== w || g[3] !== y || g[4] !== $e)
    ((qe = y
      ? r(Text, {
          children: [
            "Currently using: ",
            e(Text, { bold: !0, children: w.name }),
            $e,
          ],
        })
      : void 0),
      (g[2] = w),
      (g[3] = y),
      (g[4] = $e),
      (g[5] = qe));
  else qe = g[5];
  let Ne = qe,
    H,
    ze;
  if (g[6] !== oe) {
    H = oe.filter(Ye);
    let De = oe.filter(isSelfHostedPool);
    ze = [
      ...H.map(K),
      ...(De.length > 0
        ? [
            {
              label: e(Text, {
                dimColor: !0,
                children: "\u2014 Self-hosted environments \u2014",
              }),
              value: "",
              disabled: !0,
            },
          ]
        : []),
      ...De.map(K),
    ];
    ((g[6] = oe), (g[7] = H), (g[8] = ze));
  } else ((H = g[7]), (ze = g[8]));
  let Te = ze,
    He;
  if (g[9] === MEMO_CACHE_SENTINEL) ((He = e(Text, { dimColor: !0, children: Q })), (g[9] = He));
  else He = g[9];
  let se;
  if (g[10] !== re || g[11] !== H)
    ((se =
      re &&
      H.length === 0 &&
      r(Text, {
        dimColor: !0,
        children: ["(couldn't list environments: ", re, ")"],
      })),
      (g[10] = re),
      (g[11] = H),
      (g[12] = se));
  else se = g[12];
  let ae;
  if (g[13] !== z)
    ((ae =
      z &&
      r(Text, {
        dimColor: !0,
        children: [
          "(ignoring self-hosted environment default ",
          z.id,
          " ",
          "from ",
          describeSettingsSourceShort(z.source),
          " settings \u2014 self-hosted placement is only honoured from user/policy/flag settings)",
        ],
      })),
      (g[13] = z),
      (g[14] = ae));
  else ae = g[14];
  let ce;
  if (g[15] !== Ee || g[16] !== le || g[17] !== Te || g[18] !== w)
    ((ce =
      Ee === "updating"
        ? e(SpinnerMessageLine, { message: "Updating\u2026" })
        : e(Select, {
            options: Te,
            defaultValue: getEnvironmentOrPoolId(w),
            onChange: le,
            onCancel: () => le("cancel"),
            layout: "compact-vertical",
          })),
      (g[15] = Ee),
      (g[16] = le),
      (g[17] = Te),
      (g[18] = w),
      (g[19] = ce));
  else ce = g[19];
  let Ke;
  if (g[20] === MEMO_CACHE_SENTINEL)
    ((Ke = e(Text, {
      dimColor: !0,
      children: r(DotSeparatedList, {
        children: [
          e(KeybindingHint, { chord: "enter", action: "select" }),
          e(ActionKeybindingHint, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
        ],
      }),
    })),
      (g[20] = Ke));
  else Ke = g[20];
  let Qe;
  if (
    g[21] !== be ||
    g[22] !== Ne ||
    g[23] !== se ||
    g[24] !== ae ||
    g[25] !== ce
  )
    ((Qe = r(de, {
      title: v,
      subtitle: Ne,
      onCancel: be,
      hideInputGuide: !0,
      children: [He, se, ae, ce, Ke],
    })),
      (g[21] = be),
      (g[22] = Ne),
      (g[23] = se),
      (g[24] = ae),
      (g[25] = ce),
      (g[26] = Qe));
  else Qe = g[26];
  return Qe;
}
async function Fn(o) {
  return e(fe, { onDone: o });
}
export { Fn as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 252 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { parseUserSpecifiedModel } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { stripAnsi } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { stripLongContextTags } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/核心工具-未归类/app-state-context.js";
import { baseModelSupportsAdvisor, isValidAdvisorModelString, getAdvisorModelAliases, isValidAdvisorModel, isAdvisorModelPendingCreditsConsent } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import "../../01-核心基础设施/核心工具-未归类/feature-flag-version.js";
import { useMainLoopModel } from "../../01-核心基础设施/核心工具-未归类/main-loop-model.js";
import { LearnMoreLink } from "../../01-核心基础设施/核心工具-未归类/learn-more-link.js";
import "../../01-核心基础设施/核心工具-未归类/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { formatAdvisorConsentHint, applyAdvisorModelSetting } from "./advisor-command.js";
import { validateModelAvailability, formatModelDisplayName } from "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import { E, vr, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
function lo(Do) {
  return Do.advisorModel;
}
function mo(ao) {
  return { label: formatModelDisplayName(ao), value: ao };
}
function co() {
  logEvent("tengu_advisor_dialog_shown", {});
}
var H = "https://claude.com/blog/the-advisor-strategy";
function K(Lo) {
  let a = _(37),
    { onDone: f, storageV5: j } = Lo,
    l = useAppStateSelector(lo),
    h = useMainLoopModel(),
    A = useSetAppState(),
    g,
    w,
    Q;
  if (a[0] !== l) {
    let Y = getAdvisorModelAliases();
    let Z = l?.toLowerCase();
    w = Z ? Y.find((To) => Z.includes(To)) : void 0;
    g = l && !w && isValidAdvisorModelString(l) ? { label: stripAnsi(formatModelDisplayName(l)), value: l } : void 0;
    let k;
    if (a[4] !== g) ((k = g ? [g] : []), (a[4] = g), (a[5] = k));
    else k = a[5];
    let y;
    if (a[6] === MEMO_CACHE_SENTINEL) ((y = { label: "No advisor", value: "off" }), (a[6] = y));
    else y = a[6];
    Q = [...Y.map(mo), ...k, y];
    ((a[0] = l), (a[1] = g), (a[2] = w), (a[3] = Q));
  } else ((g = a[1]), (w = a[2]), (Q = a[3]));
  let N = Q,
    k;
  if (a[7] !== l || a[8] !== g || a[9] !== w)
    ((k = l && isAdvisorModelPendingCreditsConsent(stripLongContextTags(parseUserSpecifiedModel(l))) ? "off" : g ? g.value : (w ?? "off")),
      (a[7] = l),
      (a[8] = g),
      (a[9] = w),
      (a[10] = k));
  else k = a[10];
  let S = k,
    y;
  if (a[11] === MEMO_CACHE_SENTINEL) ((y = []), (a[11] = y));
  else y = a[11];
  E(co, y);
  let b;
  if (a[12] !== f)
    ((b = () => f(void 0, { display: "skip" })), (a[12] = f), (a[13] = b));
  else b = a[13];
  let oo;
  if (a[14] === MEMO_CACHE_SENTINEL)
    ((oo = e(Text, {
      children:
        "When Claude needs stronger judgment \u2014 a complex decision, an ambiguous failure, a problem it's circling without progress \u2014 it escalates to the advisor model for guidance, then resumes. The advisor runs server-side and uses additional tokens.",
    })),
      (a[14] = oo));
  else oo = a[14];
  let O;
  if (a[15] !== h)
    ((O =
      !baseModelSupportsAdvisor(h) &&
      r(Text, {
        color: "warning",
        children: [
          "The current main model (",
          stripAnsi(formatModelDisplayName(h)),
          ") does not support the advisor.",
        ],
      })),
      (a[15] = h),
      (a[16] = O));
  else O = a[16];
  let R;
  if (a[17] !== h || a[18] !== f || a[19] !== A || a[20] !== j)
    ((R = (Xo) => f(applyAdvisorModelSetting(Xo, h, A, j))),
      (a[17] = h),
      (a[18] = f),
      (a[19] = A),
      (a[20] = j),
      (a[21] = R));
  else R = a[21];
  let B;
  if (a[22] !== f)
    ((B = () => f(void 0, { display: "skip" })), (a[22] = f), (a[23] = B));
  else B = a[23];
  let J;
  if (a[24] !== S || a[25] !== N || a[26] !== R || a[27] !== B)
    ((J = e(Select, {
      options: N,
      defaultValue: S,
      defaultFocusValue: S,
      onChange: R,
      onCancel: B,
    })),
      (a[24] = S),
      (a[25] = N),
      (a[26] = R),
      (a[27] = B),
      (a[28] = J));
  else J = a[28];
  let eo, to;
  if (a[29] === MEMO_CACHE_SENTINEL)
    ((eo = r(Text, {
      children: [
        e(Text, { color: "suggestion", children: "Recommended setup: " }),
        e(Text, {
          children:
            "Sonnet as the main model with Opus as the advisor. For certain workloads this gives near-Opus performance with reduced token usage.",
        }),
      ],
    })),
      (to = e(LearnMoreLink, { url: H })),
      (a[29] = eo),
      (a[30] = to));
  else ((eo = a[29]), (to = a[30]));
  let L;
  if (a[31] !== O || a[32] !== J)
    ((L = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [oo, O, J, eo, to],
    })),
      (a[31] = O),
      (a[32] = J),
      (a[33] = L));
  else L = a[33];
  let ro;
  if (a[34] !== L || a[35] !== b)
    ((ro = e(de, {
      title: "Advisor (experimental)",
      onCancel: b,
      children: L,
    })),
      (a[34] = L),
      (a[35] = b),
      (a[36] = ro));
  else ro = a[36];
  return ro;
}
function T(jo) {
  let z = _(9),
    { choice: x, onDone: I, storageV5: M } = jo,
    W = useSetAppState(),
    q = useMainLoopModel(),
    no;
  if (z[0] !== q || z[1] !== x || z[2] !== I || z[3] !== W || z[4] !== M)
    ((no = () => {
      I(applyAdvisorModelSetting(x, q, W, M));
    }),
      (z[0] = q),
      (z[1] = x),
      (z[2] = I),
      (z[3] = W),
      (z[4] = M),
      (z[5] = no));
  else no = z[5];
  let G = vr(no),
    so;
  if (z[6] !== G)
    ((so = () => {
      let Ao = setTimeout(G, 0);
      return () => clearTimeout(Ao);
    }),
      (z[6] = G),
      (z[7] = so));
  else so = z[7];
  let io;
  if (z[8] === MEMO_CACHE_SENTINEL) ((io = []), (z[8] = io));
  else io = z[8];
  return (E(so, io), null);
}
var Bo = async (s, m, d) => {
  let n = d.trim().toLowerCase();
  if (!n) return e(K, { onDone: s, storageV5: m.storageV5 });
  if (n === "off" || n === "unset")
    return e(T, { choice: "off", onDone: s, storageV5: m.storageV5 });
  let c = parseUserSpecifiedModel(n),
    v = await validateModelAvailability(c, { credentials: m.credentials });
  if (!v.valid) return (s(`Invalid advisor model: ${v.error}`), null);
  if (!isValidAdvisorModel(c))
    return (
      s(
        isAdvisorModelPendingCreditsConsent(c)
          ? formatAdvisorConsentHint(c)
          : `${n} cannot be used as an advisor. Valid options: ${[...getAdvisorModelAliases(), "off"].join(", ")}`,
      ),
      null
    );
  return e(T, { choice: n, onDone: s, storageV5: m.storageV5 });
};
export { Bo as call };

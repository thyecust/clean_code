// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { CLAUDE_BULLET_GLYPH } from "../../02-功能模块/权限系统/chunk-e4pfvp7x.js";
import { getCanonicalName, getFeatureValue_CACHED_MAY_BE_STALE } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { useFeatureFlagValue } from "../../01-核心基础设施/共享小工具-未细化/feature-flag-version.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t, pd } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { resolveModelCapability } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/protobuf-decoding.js";
import "../../01-核心基础设施/共享小工具-未细化/use-hyperlink-support.js";
import "../../02-功能模块/语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import "../../01-核心基础设施/共享小工具-未细化/syntax-highlight-adapter.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { js } from "../../02-功能模块/语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { SUMMARIZED_HINT_LABEL } from "../../01-核心基础设施/共享小工具-未细化/narration-signature.js";
function AssistantNarrationSummaryMessage(N) {
  let n = _(13),
    { param: S, model: i, addMargin: E, shouldShowDot: c } = N,
    { thinking: l } = S,
    x;
  if (n[0] !== i)
    ((x = () =>
      (typeof i === "string" && resolveModelCapability("quizzical_shore", void 0, getCanonicalName(i), i)) ||
      getFeatureValue_CACHED_MAY_BE_STALE("tengu_quizzical_shore", !1)),
      (n[0] = i),
      (n[1] = x));
  else x = n[1];
  let G = useFeatureFlagValue(x);
  const d = E ? 1 : 0;
  let m;
  if (n[2] !== c)
    ((m =
      c &&
      e(pd, {
        fromLeftEdge: !0,
        minWidth: 2,
        children: e(t, {
          "aria-label": "claude:",
          color: "text",
          children: CLAUDE_BULLET_GLYPH,
        }),
      })),
      (n[2] = c),
      (n[3] = m));
  else m = n[3];
  const h = G ? void 0 : SUMMARIZED_HINT_LABEL;
  let f;
  if (n[4] !== l) ((f = l.trim()), (n[4] = l), (n[5] = f));
  else f = n[5];
  let p;
  if (n[6] !== h || n[7] !== f)
    ((p = e(o, {
      flexDirection: "column",
      flexGrow: 1,
      children: e(js, { hint: h, children: f }),
    })),
      (n[6] = h),
      (n[7] = f),
      (n[8] = p));
  else p = n[8];
  let T;
  if (n[9] !== d || n[10] !== m || n[11] !== p)
    ((T = r(o, {
      flexDirection: "row",
      marginTop: d,
      width: "100%",
      children: [m, p],
    })),
      (n[9] = d),
      (n[10] = m),
      (n[11] = p),
      (n[12] = T));
  else T = n[12];
  return T;
}
export { AssistantNarrationSummaryMessage };

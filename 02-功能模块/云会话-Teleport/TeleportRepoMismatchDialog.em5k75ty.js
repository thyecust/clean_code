// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 260 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { formatPathForDisplay } from "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import { SpinnerGlyph } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { doesDirectoryRemoteMatchRepo, removeTrackedRepoPath } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
function I(G) {
  return {
    label: r(Text, { children: ["Use ", e(Text, { bold: !0, children: formatPathForDisplay(G) })] }),
    value: G,
  };
}
function TeleportRepoMismatchDialog(ro) {
  let f = _(19),
    {
      targetRepo: a,
      initialPaths: eo,
      onSelectPath: k,
      onCancel: s,
      storageV5: v,
    } = ro,
    [i, no] = d(eo),
    [h, j] = d(null),
    [y, q] = d(!1),
    w;
  if (f[0] !== i || f[1] !== s || f[2] !== k || f[3] !== v || f[4] !== a)
    ((w = async (c) => {
      if (c === "cancel") {
        s();
        return;
      }
      if ((q(!0), j(null), await doesDirectoryRemoteMatchRepo(c, a))) {
        k(c);
        return;
      }
      removeTrackedRepoPath(a, c, v);
      let ao = i.filter((io) => io !== c);
      (no(ao),
        q(!1),
        j(
          `${formatPathForDisplay(c)} no longer contains the correct repository. Select another path.`,
        ));
    }),
      (f[0] = i),
      (f[1] = s),
      (f[2] = k),
      (f[3] = v),
      (f[4] = a),
      (f[5] = w));
  else w = f[5];
  let V = w,
    z;
  if (f[6] !== i) {
    let l;
    if (f[8] === MEMO_CACHE_SENTINEL) ((l = { label: "Cancel", value: "cancel" }), (f[8] = l));
    else l = f[8];
    z = [...i.map(I), l];
    ((f[6] = i), (f[7] = z));
  } else z = f[7];
  let B = z,
    l;
  if (
    f[9] !== i.length ||
    f[10] !== h ||
    f[11] !== V ||
    f[12] !== B ||
    f[13] !== a ||
    f[14] !== y
  )
    ((l =
      i.length > 0
        ? r(N, {
            children: [
              r(Box, {
                flexDirection: "column",
                gap: 1,
                children: [
                  e(ErrorMessage, { error: h }),
                  r(Text, {
                    children: [
                      "Open Claude Code in ",
                      e(Text, { bold: !0, children: a }),
                      ":",
                    ],
                  }),
                ],
              }),
              y
                ? r(Box, {
                    children: [
                      e(SpinnerGlyph, {}),
                      e(Text, { children: " Validating repository\u2026" }),
                    ],
                  })
                : e(ve, { options: B, onChange: (lo) => void V(lo) }),
            ],
          })
        : r(Box, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(ErrorMessage, { error: h }),
              r(Text, {
                dimColor: !0,
                children: ["Run claude --teleport from a checkout of ", a],
              }),
            ],
          })),
      (f[9] = i.length),
      (f[10] = h),
      (f[11] = V),
      (f[12] = B),
      (f[13] = a),
      (f[14] = y),
      (f[15] = l));
  else l = f[15];
  let E;
  if (f[16] !== s || f[17] !== l)
    ((E = e(de, {
      title: "Teleport to Repo",
      onCancel: s,
      color: "background",
      children: l,
    })),
      (f[16] = s),
      (f[17] = l),
      (f[18] = E));
  else E = f[18];
  return E;
}
export { TeleportRepoMismatchDialog };

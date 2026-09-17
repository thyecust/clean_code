// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 276 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonStringify, writeFileSyncTraced } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, render } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getBaseRenderOptions } from "../共享小工具-未细化/base-render-options.js";
import { AppRoot } from "../../02-功能模块/后台任务-Shell管理/chunk-c7mzes79.js";
import { Select } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { de } from "../UI组件-TUI/chunk-92g8hxqw.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
function C(K) {
  let n = _(19),
    { filePath: R, errorDescription: h, onExit: i, onReset: u } = K,
    O;
  if (n[0] !== i || n[1] !== u)
    ((O = (M) => {
      if (M === "exit") i();
      else u();
    }),
      (n[0] = i),
      (n[1] = u),
      (n[2] = O));
  else O = n[2];
  let E = O,
    m;
  if (n[3] !== R)
    ((m = r(Text, {
      children: [
        "The configuration file at ",
        e(Text, { bold: !0, children: R }),
        " contains invalid JSON.",
      ],
    })),
      (n[3] = R),
      (n[4] = m));
  else m = n[4];
  let d;
  if (n[5] !== h) ((d = e(Text, { children: h })), (n[5] = h), (n[6] = d));
  else d = n[6];
  let c;
  if (n[7] !== m || n[8] !== d)
    ((c = r(Box, { flexDirection: "column", gap: 1, children: [m, d] })),
      (n[7] = m),
      (n[8] = d),
      (n[9] = c));
  else c = n[9];
  let x;
  if (n[10] === MEMO_CACHE_SENTINEL)
    ((x = e(Text, { bold: !0, children: "Choose an option:" })), (n[10] = x));
  else x = n[10];
  let y;
  if (n[11] === MEMO_CACHE_SENTINEL)
    ((y = [
      { label: "Exit and fix manually", value: "exit" },
      { label: "Reset with default configuration", value: "reset" },
    ]),
      (n[11] = y));
  else y = n[11];
  let g;
  if (n[12] !== E || n[13] !== i)
    ((g = r(Box, {
      flexDirection: "column",
      children: [x, e(Select, { options: y, onChange: E, onCancel: i })],
    })),
      (n[12] = E),
      (n[13] = i),
      (n[14] = g));
  else g = n[14];
  let S;
  if (n[15] !== i || n[16] !== c || n[17] !== g)
    ((S = r(de, {
      title: "Configuration error",
      color: "error",
      onCancel: i,
      children: [c, g],
    })),
      (n[15] = i),
      (n[16] = c),
      (n[17] = g),
      (n[18] = S));
  else S = n[18];
  return S;
}
var D = "dark";
async function showInvalidConfigDialog({ error: a }) {
  let f = { ...getBaseRenderOptions(!1), theme: D };
  await new Promise(async (s) => {
    let { unmount: l } = await render(
      e(AppRoot, {
        session: B(),
        children: e(C, {
          filePath: a.filePath,
          errorDescription: a.message,
          onExit: () => {
            (l(), s(), process.exit(1));
          },
          onReset: () => {
            (writeFileSyncTraced(a.filePath, jsonStringify(a.defaultConfig, null, 2), {
              flush: !1,
              encoding: "utf8",
            }),
              l(),
              s(),
              process.exit(0));
          },
        }),
      }),
      f,
    );
  });
}
export { showInvalidConfigDialog };

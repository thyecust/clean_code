// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 248 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { fromEnum } from "../共享小工具-未细化/chunk-w76kejwn.js";
import { logError } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { o, t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Pr, pT, Lht, an } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { D } from "../../02-功能模块/键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ve } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { Ne } from "../共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../共享小工具-未细化/chunk-ff1hq6qq.js";
import { is } from "../共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { je } from "../共享小工具-未细化/chunk-7ejhgecr.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
function RemoteFileModeDialog({ repositoryRoot: _, onDone: a, storageV5: w }) {
  let [s, x] = d(!1),
    c = C(!1),
    p = is(
      () => {
        if (c.current) return;
        ((c.current = !0), logFeatureSad("ccr_dir_sync_mode_prompt", "cancelled"), Pr(1));
      },
      void 0,
      !s,
    );
  (Ne("confirm:no", () => m("not_now"), {
    context: "Confirmation",
    isActive: !s,
  }),
    E(() => {
      i("tengu_dir_sync_mode_prompt_shown", {});
    }, []));
  function m(n) {
    if (c.current) return;
    if (
      ((c.current = !0),
      x(!0),
      i("tengu_dir_sync_mode_prompt", { choice: fromEnum(n) }),
      n === "not_now")
    ) {
      (logFeatureSad("ccr_dir_sync_mode_prompt", "dismissed"), a(n));
      return;
    }
    Lht(n, w).then(
      (l) => {
        if (!l) logFeatureBad("ccr_dir_sync_mode_prompt", "not_written");
        else if (n === "container_sync") logFeatureOk("ccr_dir_sync_mode_prompt");
        else logFeatureSad("ccr_dir_sync_mode_prompt", "declined");
        a(n);
      },
      (l) => {
        (logError(l), a(n));
      },
    );
  }
  if (s) return null;
  return r(de, {
    title: pT["consent.sync.title"],
    onCancel: () => m("not_now"),
    isCancelActive: !1,
    inputGuide: p.pending
      ? r(t, { children: ["Press ", p.keyName, " again to exit"] })
      : r(ue, {
          children: [
            e(D, { chord: "enter", action: "confirm" }),
            e(je, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "skip for now",
            }),
          ],
        }),
    children: [
      r(o, {
        flexDirection: "column",
        gap: 1,
        children: [
          e(t, { bold: !0, children: an(_) }),
          e(t, { children: pT["consent.sync.body"] }),
          e(t, { dimColor: !0, children: pT["consent.sync.detail"] }),
        ],
      }),
      e(ve, {
        options: [
          {
            label: "Yes, sync this project directory",
            value: "container_sync",
          },
          { label: "No, don't sync", value: "device_tools" },
          { label: "Not now", value: "not_now" },
        ],
        defaultFocusValue: "not_now",
        onChange: m,
        onCancel: () => m("not_now"),
      }),
    ],
  });
}
export { RemoteFileModeDialog };

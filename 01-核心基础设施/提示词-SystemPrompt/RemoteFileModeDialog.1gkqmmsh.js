// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 248 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { fromEnum } from "../遥测-OpenTelemetry/analytics-fields.js";
import { logError } from "./chunk-27ncq5fr.js";
import { logEvent } from "../遥测-OpenTelemetry/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Box, Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { gracefulShutdownSync, CLOUD_SESSION_CONSENT_MESSAGES, setRemoteFileMode, sanitizeForDisplay } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定-Keybindings/keybinding-display.js";
import { Select } from "../../02-功能模块/交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { useKeybinding } from "../../02-功能模块/键位绑定-Keybindings/keybinding-hooks.js";
import { DotSeparatedList } from "../核心工具-未归类/chunk-ff1hq6qq.js";
import { useGlobalExitKeybinding } from "../../02-功能模块/键位绑定-Keybindings/exit-keybinding-hooks.js";
import { de } from "../UI组件-TUI/chunk-92g8hxqw.js";
import { ActionKeybindingHint } from "../../02-功能模块/键位绑定-Keybindings/action-keybinding-hint.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function RemoteFileModeDialog({ repositoryRoot: _, onDone: a, storageV5: w }) {
  let [s, x] = d(!1),
    c = C(!1),
    p = useGlobalExitKeybinding(
      () => {
        if (c.current) return;
        ((c.current = !0), logFeatureSad("ccr_dir_sync_mode_prompt", "cancelled"), gracefulShutdownSync(1));
      },
      void 0,
      !s,
    );
  (useKeybinding("confirm:no", () => m("not_now"), {
    context: "Confirmation",
    isActive: !s,
  }),
    E(() => {
      logEvent("tengu_dir_sync_mode_prompt_shown", {});
    }, []));
  function m(n) {
    if (c.current) return;
    if (
      ((c.current = !0),
      x(!0),
      logEvent("tengu_dir_sync_mode_prompt", { choice: fromEnum(n) }),
      n === "not_now")
    ) {
      (logFeatureSad("ccr_dir_sync_mode_prompt", "dismissed"), a(n));
      return;
    }
    setRemoteFileMode(n, w).then(
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
    title: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.title"],
    onCancel: () => m("not_now"),
    isCancelActive: !1,
    inputGuide: p.pending
      ? r(Text, { children: ["Press ", p.keyName, " again to exit"] })
      : r(DotSeparatedList, {
          children: [
            e(KeybindingHint, { chord: "enter", action: "confirm" }),
            e(ActionKeybindingHint, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "skip for now",
            }),
          ],
        }),
    children: [
      r(Box, {
        flexDirection: "column",
        gap: 1,
        children: [
          e(Text, { bold: !0, children: sanitizeForDisplay(_) }),
          e(Text, { children: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.body"] }),
          e(Text, { dimColor: !0, children: CLOUD_SESSION_CONSENT_MESSAGES["consent.sync.detail"] }),
        ],
      }),
      e(Select, {
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

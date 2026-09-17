// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 78 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isRemoteActive } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { useSession } from "../../01-核心基础设施/共享小工具-未细化/session-context.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { isReplDiffSidebarEnabled } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
F();
function h(M) {
  return M.replTab;
}
var N = async (t, o) => {
  if (
    !isRemoteActive() &&
    o.presentation === "fullscreen" &&
    (isReplDiffSidebarEnabled() || o.dispatchedAsImmediate)
  ) {
    let i = await import("./chunk-vpp75aza.js");
    return e(ToggleDiffSidebar, { onDone: t, sidebar: i });
  }
  let { DiffDialog: a } = await import("../../02-功能模块/Diff引擎/DiffDialog.85kzjn95.js");
  return e(a, { messages: o.messages, onDone: t });
};
function ToggleDiffSidebar(B) {
  let G = _(9),
    { onDone: s, sidebar: r } = B,
    m = useAppStateSelector(h),
    n = useSetAppState(),
    { storageV5: f } = useStorageV5Context(),
    p = useSession().host,
    { columns: l } = useTerminalSize(),
    D = C(!1),
    I,
    R;
  if (
    G[0] !== l ||
    G[1] !== p ||
    G[2] !== s ||
    G[3] !== m ||
    G[4] !== n ||
    G[5] !== r ||
    G[6] !== f
  )
    ((I = () => {
      if (D.current) {
        return;
      }
      if (((D.current = !0), m !== "diff")) {
        if (!isReplDiffSidebarEnabled()) {
          s(
            "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes",
            { display: "system" },
          );
          return;
        }
        if (!r.diffSidebarHasGitRepo()) {
          s(r.DIFF_SIDEBAR_NO_GIT_MESSAGE, { display: "system" });
          return;
        }
        if (l < r.DIFF_SIDEBAR_MIN_COLS) {
          s(
            `Resize your terminal to at least ${r.DIFF_SIDEBAR_MIN_COLS} columns to show the diff panel`,
            { display: "system" },
          );
          return;
        }
      }
      (r.toggleReplDiffTab(p, n, m, f), s(void 0, { display: "skip" }));
    }),
      (R = [l, p, s, m, n, r, f]),
      (G[0] = l),
      (G[1] = p),
      (G[2] = s),
      (G[3] = m),
      (G[4] = n),
      (G[5] = r),
      (G[6] = f),
      (G[7] = I),
      (G[8] = R));
  else ((I = G[7]), (R = G[8]));
  return (E(I, R), null);
}
export { ToggleDiffSidebar, N as call };

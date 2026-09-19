// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, sn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { fromEnum } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { saveGlobalConfig, getGlobalConfig, getCurrentProjectConfig, saveCurrentProjectConfig } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { findGitRootRecheckingNegative } from "../../01-核心基础设施/安全文件系统-FS加固/安全文件系统-FS加固.gbme4p3n.js";
import { truncatePathMiddle } from "../../01-核心基础设施/核心工具-字符串与文本/ansi-text-utils.js";
import { hasUnsupportedDisplayCharacters } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-8sw91yn5.js";
import { isReplDiffSidebarEnabled } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Text, Link } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { toLocalFileUrl } from "../../01-核心基础设施/核心工具-路径与平台/to-local-file-url.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { Qt, De, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
class ReplDiffPanelState {
  lastLoggedSessionId = null;
  autoOpenPending = !1;
}
var ReplDiffPanelStateStore = new j(() => new ReplDiffPanelState());
var DIFF_SIDEBAR_MIN_COLS = 110,
  DIFF_SIDEBAR_AUTO_OPEN_MIN_COLS = 144,
  DIFF_SIDEBAR_NO_GIT_MESSAGE =
    "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository";
function markReplDiffPanelAutoOpen(o) {
  ReplDiffPanelStateStore.of(o).autoOpenPending = !0;
}
function consumeReplDiffPanelAutoOpen(o) {
  let n = ReplDiffPanelStateStore.of(o),
    r = n.autoOpenPending;
  return ((n.autoOpenPending = !1), r);
}
function clearReplDiffPanelAutoOpen(o) {
  ReplDiffPanelStateStore.of(o).autoOpenPending = !1;
}
function diffSidebarHasGitRepo() {
  return findGitRootRecheckingNegative(getCwd()) !== null;
}
function diffPanelCanMount({
  fullscreen: o,
  columns: n,
  isThinClient: r,
  isMainFocused: i,
  hasGitRepo: s,
}) {
  return isReplDiffSidebarEnabled() && o && !r && i && n >= DIFF_SIDEBAR_MIN_COLS && s;
}
function shouldAutoOpenDiffSidebar(o) {
  let n = getGlobalConfig().diffSidebarOpen;
  if (n === !1) return !1;
  return o >= (n === !0 ? DIFF_SIDEBAR_MIN_COLS : DIFF_SIDEBAR_AUTO_OPEN_MIN_COLS) && diffSidebarHasGitRepo();
}
function toggleReplDiffTab(o, n, r, i) {
  let s = r === "diff" ? "convo" : "diff";
  (clearReplDiffPanelAutoOpen(o),
    n((a) =>
      a.replTab === s && a.panelFileView === null
        ? a
        : { ...a, replTab: s, panelFileView: null },
    ));
  let l = s === "diff";
  if (getGlobalConfig().diffSidebarOpen !== l) saveGlobalConfig((a) => ({ ...a, diffSidebarOpen: l }), i);
  return (logFeatureOk("repl_tab_switch", { tab: fromEnum(s) }), s);
}
function resetReplTabToConvo(o, n) {
  (clearReplDiffPanelAutoOpen(o),
    n((r) =>
      r.replTab === "convo" && r.panelFileView === null
        ? r
        : { ...r, replTab: "convo", panelFileView: null },
    ));
}
function closeReplDiffTab(o, n, r) {
  if ((resetReplTabToConvo(o, n), getGlobalConfig().diffSidebarOpen !== !1))
    saveGlobalConfig((i) => ({ ...i, diffSidebarOpen: !1 }), r);
  logFeatureOk("repl_tab_switch", { tab: fromEnum("convo") });
}
var g = ["session", "uncommitted", "branch"];
function getPersistedDiffBaseMode() {
  let o = getCurrentProjectConfig().diffSidebarBaseMode;
  return o === "uncommitted" || o === "branch" ? o : "session";
}
function cycleDiffBaseMode(o, n) {
  let r = g[(g.indexOf(o) + 1) % g.length] ?? "session";
  return (
    saveCurrentProjectConfig(
      (i) =>
        i.diffSidebarBaseMode === r ? i : { ...i, diffSidebarBaseMode: r },
      n,
    ),
    logFeatureOk("repl_diff_base_switch", { mode: fromEnum(r) }),
    r
  );
}
F();
import { homedir } from "os";
import { isAbsolute, sep } from "path";
import { win32 } from "path";
function C(o) {
  return hasUnsupportedDisplayCharacters(M(o));
}
function M(o) {
  let n = sn(),
    r = getCurrentPlatform() === "windows",
    i = r ? win32.sep : sep,
    s = (w) => (r ? w.replaceAll("/", i).toLowerCase() : w),
    l = s(o),
    a = s(n);
  if (l.length !== o.length || a.length !== n.length) return o;
  if (l === a) return "";
  let R = a.endsWith(i) ? a : a + i;
  return l.startsWith(R) ? o.slice(R.length) : o;
}
function S(o) {
  if (getCurrentPlatform() === "windows") return win32.isAbsolute(o) && win32.parse(o).root.length > 1;
  return isAbsolute(o);
}
var ToolResultPreviewWidthContext = Qt(null);
function TruncatedFilePath(Ue) {
  let h = _(9),
    { filePath: d, children: je } = Ue,
    b = De(ToolResultPreviewWidthContext),
    f = je ?? d;
  if (m(d) || (typeof f === "string" && m(f))) {
    let c;
    if (h[0] === MEMO_CACHE_SENTINEL)
      ((c = e(Text, {
        dimColor: !0,
        children: "Path hidden (unsupported characters)",
      })),
        (h[0] = c));
    else c = h[0];
    return c;
  }
  let c;
  if (h[1] !== b || h[2] !== f)
    ((c = b !== null && typeof f === "string" ? truncatePathMiddle(f, b) : f),
      (h[1] = b),
      (h[2] = f),
      (h[3] = c));
  else c = h[3];
  let A = c,
    v;
  if (h[4] !== d) ((v = S(d) ? toLocalFileUrl(d) : null), (h[4] = d), (h[5] = v));
  else v = h[5];
  let x = v,
    E;
  if (h[6] !== A || h[7] !== x)
    ((E = x === null ? e(Text, { children: A }) : e(Link, { url: x, children: A })),
      (h[6] = A),
      (h[7] = x),
      (h[8] = E));
  else E = h[8];
  return E;
}
function m(o) {
  let n = L(o);
  return isAbsolute(n) ? C(n) : hasUnsupportedDisplayCharacters(n);
}
function L(o) {
  if (o === "~") return homedir();
  return o.startsWith("~" + sep) ? homedir() + o.slice(1) : o;
}
export {
  ReplDiffPanelStateStore,
  DIFF_SIDEBAR_MIN_COLS,
  DIFF_SIDEBAR_AUTO_OPEN_MIN_COLS,
  DIFF_SIDEBAR_NO_GIT_MESSAGE,
  markReplDiffPanelAutoOpen,
  consumeReplDiffPanelAutoOpen,
  clearReplDiffPanelAutoOpen,
  diffSidebarHasGitRepo,
  diffPanelCanMount,
  shouldAutoOpenDiffSidebar,
  toggleReplDiffTab,
  resetReplTabToConvo,
  closeReplDiffTab,
  getPersistedDiffBaseMode,
  cycleDiffBaseMode,
  ToolResultPreviewWidthContext,
  TruncatedFilePath,
};

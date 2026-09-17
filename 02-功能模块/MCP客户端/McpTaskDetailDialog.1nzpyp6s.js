// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 123 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { sanitizeSingleLineDisplayText } from "../键位绑定-Keybindings/键位绑定-Keybindings.sanfja6a.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useElapsedDuration } from "../../01-核心基础设施/共享小工具-未细化/use-elapsed-duration.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { useDetailDialogKeys } from "../../01-核心基础设施/共享小工具-未细化/detail-dialog-keys.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { sanitizeMcpTaskId, formatDurationMs } from "./mcp-task-id.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
function McpTaskDetailDialog(so) {
  let s = _(63),
    { task: n, onDone: K, onKill: d, onBack: m } = so,
    c;
  if (s[0] !== m || s[1] !== d || s[2] !== n.status)
    ((c =
      n.status === "running" && d
        ? () => {
            (d(), m());
          }
        : void 0),
      (s[0] = m),
      (s[1] = d),
      (s[2] = n.status),
      (s[3] = c));
  else c = s[3];
  let Q;
  if (s[4] !== m || s[5] !== K || s[6] !== c)
    ((Q = { onClose: K, onBack: m, onKill: c }),
      (s[4] = m),
      (s[5] = K),
      (s[6] = c),
      (s[7] = Q));
  else Q = s[7];
  let S = useDetailDialogKeys(Q),
    b = useElapsedDuration(n.startTime, n.status === "running", 1000, 0, n.endTime),
    U;
  if (s[8] !== n.pollIntervalMs)
    ((U = n.pollIntervalMs === void 0 ? void 0 : formatDurationMs(n.pollIntervalMs)),
      (s[8] = n.pollIntervalMs),
      (s[9] = U));
  else U = s[9];
  let V = U,
    a = n.mcpTaskId === n.id ? void 0 : n.mcpTaskId,
    W;
  if (s[10] === MEMO_CACHE_SENTINEL)
    ((W = e(KeybindingHint, { chord: "escape", action: "go back" })), (s[10] = W));
  else W = s[10];
  let f;
  if (s[11] !== d || s[12] !== n.status)
    ((f = n.status === "running" && d && e(KeybindingHint, { chord: "x", action: "stop" })),
      (s[11] = d),
      (s[12] = n.status),
      (s[13] = f));
  else f = s[13];
  let g;
  if (s[14] !== f)
    ((g = r(DotSeparatedList, { children: [W, f] })), (s[14] = f), (s[15] = g));
  else g = s[15];
  let C;
  if (s[16] !== n.serverName)
    ((C = sanitizeSingleLineDisplayText(n.serverName) ?? ""), (s[16] = n.serverName), (s[17] = C));
  else C = s[17];
  let v;
  if (s[18] !== n.toolName)
    ((v = sanitizeSingleLineDisplayText(n.toolName) ?? ""), (s[18] = n.toolName), (s[19] = v));
  else v = s[19];
  let T;
  if (s[20] !== C || s[21] !== v)
    ((T = r(Text, { bold: !0, children: [C, "/", v] })),
      (s[20] = C),
      (s[21] = v),
      (s[22] = T));
  else T = s[22];
  let M;
  if (s[23] !== n.id)
    ((M = r(Text, { dimColor: !0, children: [" \xB7 ", n.id] })),
      (s[23] = n.id),
      (s[24] = M));
  else M = s[24];
  let y;
  if (s[25] !== M || s[26] !== T)
    ((y = r(Text, { children: [T, M] })), (s[25] = M), (s[26] = T), (s[27] = y));
  else y = s[27];
  let I;
  if (s[28] !== a)
    ((I = a && r(Text, { dimColor: !0, children: ["server task ", sanitizeMcpTaskId(a)] })),
      (s[28] = a),
      (s[29] = I));
  else I = s[29];
  let X;
  if (s[30] === MEMO_CACHE_SENTINEL)
    ((X = e(Text, { dimColor: !0, children: "status " })), (s[30] = X));
  else X = s[30];
  let x;
  if (s[31] !== n.mcpStatus || s[32] !== n.status)
    ((x = n.status === "killed" ? "stopped" : n.mcpStatus.replace("_", " ")),
      (s[31] = n.mcpStatus),
      (s[32] = n.status),
      (s[33] = x));
  else x = s[33];
  let h;
  if (s[34] !== n.statusMessage)
    ((h =
      n.statusMessage &&
      r(Text, { dimColor: !0, children: [" ", "\xB7 ", sanitizeSingleLineDisplayText(n.statusMessage)] })),
      (s[34] = n.statusMessage),
      (s[35] = h));
  else h = s[35];
  let w;
  if (s[36] !== x || s[37] !== h)
    ((w = r(Text, { children: [X, x, h] })),
      (s[36] = x),
      (s[37] = h),
      (s[38] = w));
  else w = s[38];
  let N;
  if (s[39] !== n.mcpStatus || s[40] !== n.status)
    ((N =
      n.mcpStatus === "input_required" &&
      n.status === "running" &&
      e(Text, {
        dimColor: !0,
        children: "waiting for your answer in the elicitation dialog",
      })),
      (s[39] = n.mcpStatus),
      (s[40] = n.status),
      (s[41] = N));
  else N = s[41];
  const z = n.status === "running" ? "running for " : "ran for ",
    A = V !== void 0 && ` \xB7 polls every ${V}`;
  let P;
  if (s[42] !== b || s[43] !== z || s[44] !== A)
    ((P = r(Text, { dimColor: !0, children: [z, b, A] })),
      (s[42] = b),
      (s[43] = z),
      (s[44] = A),
      (s[45] = P));
  else P = s[45];
  let R;
  if (s[46] !== n.protocol || s[47] !== n.status)
    ((R =
      n.protocol === "sep2663" &&
      n.status === "running" &&
      e(Text, {
        dimColor: !0,
        children: "runs on the server; survives exiting this session",
      })),
      (s[46] = n.protocol),
      (s[47] = n.status),
      (s[48] = R));
  else R = s[48];
  let B;
  if (
    s[49] !== y ||
    s[50] !== I ||
    s[51] !== w ||
    s[52] !== N ||
    s[53] !== P ||
    s[54] !== R
  )
    ((B = r(Box, { flexDirection: "column", children: [y, I, w, N, P, R] })),
      (s[49] = y),
      (s[50] = I),
      (s[51] = w),
      (s[52] = N),
      (s[53] = P),
      (s[54] = R),
      (s[55] = B));
  else B = s[55];
  let j;
  if (s[56] !== m || s[57] !== B || s[58] !== g)
    ((j = e(de, {
      onCancel: m,
      title: "MCP task",
      inputGuide: g,
      children: B,
    })),
      (s[56] = m),
      (s[57] = B),
      (s[58] = g),
      (s[59] = j));
  else j = s[59];
  let Y;
  if (s[60] !== S || s[61] !== j)
    ((Y = e(FocusableBox, { onKeyDown: S, children: j })),
      (s[60] = S),
      (s[61] = j),
      (s[62] = Y));
  else Y = s[62];
  return Y;
}
export { McpTaskDetailDialog };

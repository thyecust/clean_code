// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 257 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { ToolResultRow } from "../../01-核心基础设施/UI组件-TUI/tool-result-row.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { validateWorkingDirectory, formatDirectoryValidationMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { AddDirectoryToWorkspaceDialog } from "../权限系统/add-directory-to-workspace.js";
import "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import "../../01-核心基础设施/UI组件-TUI/empty-state-message.js";
import "../../01-核心基础设施/UI组件-TUI/error-message.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { addWorkingDirectory, explainAlreadyAccessibleDirectory } from "../../01-核心基础设施/设置-配置/add-working-directory.js";
import "../Skills技能/reload-skills.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
function D(X) {
  let C = _(7),
    { message: g, args: u, onDone: v } = X;
  useTimeout(v, 0);
  let l;
  if (C[0] !== u)
    ((l = r(Text, { dimColor: !0, children: [figures.pointer, " /add-dir ", u] })),
      (C[0] = u),
      (C[1] = l));
  else l = C[1];
  let p;
  if (C[2] !== g)
    ((p = e(ToolResultRow, { children: e(Text, { children: g }) })), (C[2] = g), (C[3] = p));
  else p = C[3];
  let k;
  if (C[4] !== l || C[5] !== p)
    ((k = r(Box, { flexDirection: "column", children: [l, p] })),
      (C[4] = l),
      (C[5] = p),
      (C[6] = k));
  else k = C[6];
  return k;
}
async function T(s, a, m) {
  let y = (m ?? "").trim(),
    d = getToolPermissionContext(a),
    f = async (n, c = !1) => {
      let A = await addWorkingDirectory(a, n, c);
      s(`${A} ${chalk.dim("\xB7 /permissions to manage")}`);
    };
  if (!y)
    return e(AddDirectoryToWorkspaceDialog, {
      permissionContext: d,
      onAddDirectory: f,
      onAlreadyAccessible: (n) => {
        let c = explainAlreadyAccessibleDirectory(a, n);
        if (c === null) return !1;
        return (s(c), !0);
      },
      onCancel: () => {
        s("Did not add a working directory.");
      },
    });
  let i = await validateWorkingDirectory(y, d);
  if (i.resultType !== "success") {
    let n =
      (i.resultType === "alreadyInWorkingDirectory" ? explainAlreadyAccessibleDirectory(a, i) : null) ??
      formatDirectoryValidationMessage(i);
    return e(D, { message: n, args: m ?? "", onDone: () => s(n) });
  }
  return e(AddDirectoryToWorkspaceDialog, {
    directoryPath: i.absolutePath,
    permissionContext: d,
    onAddDirectory: f,
    onCancel: () => {
      s(`Did not add ${chalk.bold(i.absolutePath)} as a working directory.`);
    },
  });
}
export { T as call };

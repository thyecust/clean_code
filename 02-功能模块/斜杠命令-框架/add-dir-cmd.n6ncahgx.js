// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 210 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { validateWorkingDirectory, formatDirectoryValidationMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { addWorkingDirectory, explainAlreadyAccessibleDirectory } from "../../01-核心基础设施/设置-配置/add-working-directory.js";
import "../../01-核心基础设施/共享小工具-未细化/reload-skills.js";
async function d(r, t) {
  let o = r.trim();
  if (!o) return { type: "text", value: "Usage: /add-dir <path>" };
  let e = await validateWorkingDirectory(o, getToolPermissionContext(t));
  if (e.resultType !== "success")
    return {
      type: "text",
      value:
        (e.resultType === "alreadyInWorkingDirectory" ? explainAlreadyAccessibleDirectory(t, e) : null) ??
        formatDirectoryValidationMessage(e),
    };
  return { type: "text", value: await addWorkingDirectory(t, e.absolutePath, !1) };
}
export { d as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 280 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { showStandaloneSecurityDialog as FIt } from "../核心工具-未归类/standalone-security-dialog.js";
import "./managed-settings-approval-dialog.js";
import "../核心工具-未归类/use-answer-refusal-state.js";
import "../../02-功能模块/权限系统/permission-dialog.js";
import "../UI组件-TUI/confirm-prompt.js";
import "../UI组件-TUI/input-guide.js";
export { FIt as showStandaloneSecurityDialog };

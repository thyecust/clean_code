// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { customSchema, defineDialog } from "../对话框-确认UI/对话框-确认UI.4ggnfbtb.js";
var workflowPermissionDialog = defineDialog({
  kind: "permission_workflow",
  payload: createLazyValue(() =>
    customSchema(
      (o) =>
        typeof o === "object" &&
        o !== null &&
        "requestId" in o &&
        "toolName" in o &&
        "permissionResult" in o &&
        "script" in o,
    ),
  ),
  result: createLazyValue(() =>
    customSchema((o) => typeof o === "object" && o !== null && "behavior" in o),
  ),
  default: { behavior: "cancelled" },
});
export { workflowPermissionDialog };

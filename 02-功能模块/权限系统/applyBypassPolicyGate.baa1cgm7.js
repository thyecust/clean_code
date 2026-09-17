// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 74 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { runtimeEnvironment, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { hasSkipDangerousModePermissionPrompt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { getBypassPermissionsModeDisabledMessage, isBypassPermissionsModeDisabled } from "./bypass-permissions-mode-policy.js";
function i(s) {
  return s?.permissionMode === "bypassPermissions" || s?.allowBypass === !0;
}
function refuseBypassUnderRoot(s) {
  if (!i(s)) return;
  if (runtimeEnvironment.isRootOutsideDeliberateSandbox())
    (console.error(
      "--dangerously-skip-permissions cannot be used with root/sudo privileges for security reasons",
    ),
      process.exit(1));
}
function applyBypassPolicyGate(s) {
  if (!s || !i(s)) return s;
  let o = getBypassPermissionsModeDisabledMessage();
  if (!o) return s;
  return (
    console.error(o),
    {
      ...s,
      permissionMode:
        s.permissionMode === "bypassPermissions" ? void 0 : s.permissionMode,
      allowBypass: void 0,
    }
  );
}
async function ensureAgentsBypassConsent(s, o, r) {
  if (!i(o)) return;
  if (isBypassPermissionsModeDisabled()) return;
  if (hasSkipDangerousModePermissionPrompt() || getGlobalConfig().bypassPermissionsModeAccepted) return;
  let [{ runSteps: n }, t] = await Promise.all([
    import("../../00-第三方库/_未识别/chunk-cq8x5zt4.js"),
    import("../斜杠命令-UI组件/BypassPermissionsModeDialog.d9va36zm.js"),
  ]);
  await n(
    s,
    [
      (a) =>
        e(t.BypassPermissionsModeDialog, { onAccept: () => a(), storageV5: r }),
    ],
    { session: B() },
  );
}
export {
  applyBypassPolicyGate,
  ensureAgentsBypassConsent,
  refuseBypassUnderRoot,
};

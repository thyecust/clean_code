// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 236 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isBgSession } from "./认证-OAuth登录.419zdfz3.js";
import { t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Pr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { emitAuthEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/otel-events.js";
import { performLogout } from "./chunk-9g86t9bp.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
async function l(n, o) {
  let r = isBgSession();
  if (!r) emitAuthEvent({ action: "logout", success: !0, authMethod: "oauth" });
  if (
    (await performLogout({
      clearOnboarding: !0,
      storageV5: o.storageV5,
      credentials: o.credentials,
    }),
    r)
  )
    return (
      n(
        "This background session shares credentials with other sessions; /logout here has no effect. Run /logout from your main terminal to sign out.",
        { display: "system" },
      ),
      null
    );
  let s = e(t, {
    children: "Successfully logged out from your Anthropic account.",
  });
  return (
    setTimeout(() => {
      Pr(0, "logout");
    }, 200),
    s
  );
}
export { l as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 76 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { isBgSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
var t = {
    type: "local-jsx",
    name: "stop",
    description:
      "Stop this background session; transcript and worktree are kept",
    immediate: !0,
    isEnabled: isBgSession,
  },
  stopNonInteractive = {
    type: "local",
    name: "stop",
    supportsNonInteractive: !0,
    description:
      "Stop this background session; transcript and worktree are kept",
    isEnabled: isBgSession,
    load: () => import("./stop-cmd.3kf59me0.js"),
  },
  r = t;
export { r as default, stopNonInteractive };

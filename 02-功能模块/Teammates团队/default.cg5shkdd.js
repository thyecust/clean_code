// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 77 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-rfb3s38d.js";
var s = {
    type: "local",
    name: "list-agents",
    aliases: ["peers"],
    description:
      "List subagents, teammates, and other Claude sessions you can message",
    supportsNonInteractive: !0,
    isEnabled: () => Mo(),
    load: () => import("./list-agents-cmd.p17nwag3.js"),
  },
  a = s;
export { a as default };

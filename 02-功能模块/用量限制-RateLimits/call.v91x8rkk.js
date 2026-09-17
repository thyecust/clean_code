// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 211 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { MF, yk } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { B9e, j9e, W9e, EBn } from "../限流-重试/限流-重试.4mc5yc28.js";
import "../../01-核心基础设施/共享小工具-未细化/usage-limit-continuation.js";
async function r() {
  if (MF()) return (yk("user"), { type: "text", value: EBn() });
  let t = B9e("command");
  if (t === "unavailable") return { type: "text", value: W9e() };
  return { type: "text", value: j9e(t) };
}
export { r as call };

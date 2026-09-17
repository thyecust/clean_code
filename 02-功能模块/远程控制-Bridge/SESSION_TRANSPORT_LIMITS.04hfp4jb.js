// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 87 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { SESSION_TRANSPORT_LIMITS as jDt, createSessionEventTransport as zgr } from "./session-event-transport.js";
import "../../01-核心基础设施/核心工具-未归类/request-delivery-errors.js";
import "../../01-核心基础设施/核心工具-未归类/remote-tools-logger.js";
import "../远程工具执行/remote-tool-protocol.js";
export { jDt as SESSION_TRANSPORT_LIMITS, zgr as createSessionEventTransport };

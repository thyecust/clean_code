// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 81 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import "../../02-功能模块/Memory-CLAUDE.md/chunk-9b6sc1gb.js";
import "../../02-功能模块/DesignSync/design-consent-and-grants.js";
import { runDesignCommand } from "./design-command-handler.js";
import "../../02-功能模块/DesignSync/design-oauth-credentials.js";
import "../../02-功能模块/认证-OAuth登录/oauth-login-flow.js";
var m = (l, a) => runDesignCommand("revoke", a);
export { m as call };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
var OTEL_DIAG_ERROR_LOG_PREFIX = "[3P telemetry] OTEL diag error:";
class OtelDiagLogger {
  error(r, ...e) {
    if (a.CLAUDE_CODE_OTEL_DIAG_STDERR)
      process.stderr.write(`${OTEL_DIAG_ERROR_LOG_PREFIX} ${r}
`);
    n(`${OTEL_DIAG_ERROR_LOG_PREFIX} ${r}`, { level: "error" });
  }
  warn(r, ...e) {
    n(`[3P telemetry] OTEL diag warn: ${r}`, { level: "warn" });
  }
  info(r, ...e) {
    return;
  }
  debug(r, ...e) {
    return;
  }
  verbose(r, ...e) {
    return;
  }
}
export { OTEL_DIAG_ERROR_LOG_PREFIX, OtelDiagLogger };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { otlpExporterBaseModule, otlpTransformerModule, otlpHttpExporterBaseModule } from "../../01-核心基础设施/遥测-OpenTelemetry/遥测-OpenTelemetry.0xhcvej6.js";
import "../../00-第三方库/@opentelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var t = toESM(otlpExporterBaseModule()),
  e = toESM(otlpTransformerModule()),
  o = toESM(otlpHttpExporterBaseModule());
class r extends t.OTLPExporterBase {
  constructor(p = {}) {
    super(
      o.createOtlpHttpExportDelegate(
        o.convertLegacyHttpOptions(p, "LOGS", "v1/logs", {
          "Content-Type": "application/x-protobuf",
        }),
        e.ProtobufLogsSerializer,
      ),
    );
  }
}
export { r as OTLPLogExporter };

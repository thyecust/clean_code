// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { otlpExporterBaseModule, otlpTransformerModule, otlpHttpExporterBaseModule } from "../../01-核心基础设施/遥测-OpenTelemetry/遥测-OpenTelemetry.0xhcvej6.js";
import "../../00-第三方库/@opentelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { toESM } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var e = toESM(otlpExporterBaseModule()),
  o = toESM(otlpTransformerModule()),
  r = toESM(otlpHttpExporterBaseModule());
class t extends e.OTLPExporterBase {
  constructor(p = {}) {
    super(
      r.createOtlpHttpExportDelegate(
        r.convertLegacyHttpOptions(p, "TRACES", "v1/traces", {
          "Content-Type": "application/x-protobuf",
        }),
        o.ProtobufTraceSerializer,
      ),
    );
  }
}
export { t as OTLPTraceExporter };

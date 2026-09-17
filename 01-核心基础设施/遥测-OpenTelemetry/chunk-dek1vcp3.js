// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m3e } from "../../00-第三方库/@grpc/grpc-js/grpc-js.5zkynjxh.js";
import { otlpExporterBaseModule, otlpTransformerModule } from "./遥测-OpenTelemetry.0xhcvej6.js";
import "../../00-第三方库/@opentelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { commonJS } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
var p = commonJS(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  o.OTLPTraceExporter = void 0;
  var r = m3e(),
    s = otlpTransformerModule(),
    u = otlpExporterBaseModule();
  class t extends u.OTLPExporterBase {
    constructor(a = {}) {
      super(
        (0, r.createOtlpGrpcExportDelegate)(
          (0, r.convertLegacyOtlpGrpcOptions)(a, "TRACES"),
          s.ProtobufTraceSerializer,
          "TraceExportService",
          "/opentelemetry.proto.collector.trace.v1.TraceService/Export",
        ),
      );
    }
  }
  o.OTLPTraceExporter = t;
});
var l = commonJS(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.OTLPTraceExporter = void 0;
  var i = p();
  Object.defineProperty(e, "OTLPTraceExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPTraceExporter;
    },
  });
});
export default l();

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { klt } from "../../00-第三方库/@opentelemetry/chunk-3zapb67e.js";
import { m3e } from "../../00-第三方库/@grpc/grpc-js/grpc-js.5zkynjxh.js";
import { otlpTransformerModule } from "./遥测-OpenTelemetry.0xhcvej6.js";
import "../../00-第三方库/@opentelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { commonJS } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
var i = commonJS(function (c) {
  Object.defineProperty(c, "__esModule", { value: !0 });
  c.OTLPMetricExporter = void 0;
  var s = klt(),
    t = m3e(),
    u = otlpTransformerModule();
  class o extends s.OTLPMetricExporterBase {
    constructor(r) {
      super(
        (0, t.createOtlpGrpcExportDelegate)(
          (0, t.convertLegacyOtlpGrpcOptions)(r ?? {}, "METRICS"),
          u.ProtobufMetricsSerializer,
          "MetricsExportService",
          "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export",
        ),
        r,
      );
    }
  }
  c.OTLPMetricExporter = o;
});
var n = commonJS(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.OTLPMetricExporter = void 0;
  var l = i();
  Object.defineProperty(e, "OTLPMetricExporter", {
    enumerable: !0,
    get: function () {
      return l.OTLPMetricExporter;
    },
  });
});
export default n();

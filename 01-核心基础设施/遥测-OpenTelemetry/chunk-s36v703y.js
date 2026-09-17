// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { m3e } from "../../00-第三方库/@grpc/grpc-js/grpc-js.5zkynjxh.js";
import { otlpExporterBaseModule, otlpTransformerModule } from "./遥测-OpenTelemetry.0xhcvej6.js";
import "../../00-第三方库/_未识别/第三方库-OpenTelemetry/第三方库-OpenTelemetry.fy6ebeyr.js";
import { commonJS } from "../共享小工具-未细化/chunk-2c9tjhwd.js";
var s = commonJS(function (o) {
  Object.defineProperty(o, "__esModule", { value: !0 });
  o.OTLPLogExporter = void 0;
  var r = m3e(),
    u = otlpTransformerModule(),
    L = otlpExporterBaseModule();
  class t extends L.OTLPExporterBase {
    constructor(c = {}) {
      super(
        (0, r.createOtlpGrpcExportDelegate)(
          (0, r.convertLegacyOtlpGrpcOptions)(c, "LOGS"),
          u.ProtobufLogsSerializer,
          "LogsExportService",
          "/opentelemetry.proto.collector.logs.v1.LogsService/Export",
        ),
      );
    }
  }
  o.OTLPLogExporter = t;
});
var n = commonJS(function (e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  e.OTLPLogExporter = void 0;
  var i = s();
  Object.defineProperty(e, "OTLPLogExporter", {
    enumerable: !0,
    get: function () {
      return i.OTLPLogExporter;
    },
  });
});
export default n();

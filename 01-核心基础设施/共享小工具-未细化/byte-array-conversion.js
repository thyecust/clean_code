// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { s_ } from "../../02-功能模块/Bedrock-Vertex/chunk-p991cddr.js";
import { toESM } from "./chunk-2c9tjhwd.js";
var n = toESM(s_()),
  e =
    typeof Buffer < "u" && Buffer.from
      ? function (r) {
          return Buffer.from(r, "utf8");
        }
      : n.fromUtf8;
function toUint8Array(r) {
  if (r instanceof Uint8Array) return r;
  if (typeof r === "string") return e(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(
      r.buffer,
      r.byteOffset,
      r.byteLength / Uint8Array.BYTES_PER_ELEMENT,
    );
  return new Uint8Array(r);
}
function isEmptyData(r) {
  if (typeof r === "string") return r.length === 0;
  return r.byteLength === 0;
}
function uint32ToBytes(r) {
  return new Uint8Array([
    (r & 4278190080) >> 24,
    (r & 16711680) >> 16,
    (r & 65280) >> 8,
    r & 255,
  ]);
}
function toUint32Array(r) {
  if (!Uint32Array.from) {
    var t = new Uint32Array(r.length),
      f = 0;
    while (f < r.length) ((t[f] = r[f]), (f += 1));
    return t;
  }
  return Uint32Array.from(r);
}
export { toUint8Array, isEmptyData, uint32ToBytes, toUint32Array };

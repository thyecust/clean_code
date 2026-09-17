// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { readProtoFieldBytes, readProtoStringField } from "./protobuf-decoding.js";
var o = 2,
  A = 1,
  a = 8,
  NARRATION_BLOCK_TAG = "narration",
  SUMMARIZED_HINT_LABEL = "summarized";
function readNarrationBlockTag(d) {
  let n;
  try {
    n = atob(d);
  } catch {
    return;
  }
  let e = new Uint8Array(n.length);
  for (let t = 0; t < n.length; t++) e[t] = n.charCodeAt(t);
  let r = readProtoFieldBytes(e, o);
  if (r === void 0) return;
  let i = readProtoFieldBytes(r, A);
  if (i === void 0) return;
  return readProtoStringField(i, a);
}
export { NARRATION_BLOCK_TAG, SUMMARIZED_HINT_LABEL, readNarrationBlockTag };

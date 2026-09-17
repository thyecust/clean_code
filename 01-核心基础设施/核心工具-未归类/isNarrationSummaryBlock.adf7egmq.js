// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 10 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { getClaimRegistry } from "./host-claim-registry.js";
import "./protobuf-decoding.js";
import { NARRATION_BLOCK_TAG, readNarrationBlockTag } from "../../03-入口与运行时/会话UI-REPL/narration-signature.js";
var t = new WeakMap();
function isNarrationTaggedBlock(n) {
  try {
    if (n.type !== "thinking" || !n.signature) return !1;
    let r;
    if (t.has(n)) r = t.get(n);
    else ((r = readNarrationBlockTag(n.signature)), t.set(n, r));
    return r === NARRATION_BLOCK_TAG;
  } catch (r) {
    if (getClaimRegistry().claim("narration_classifier_error")) logError(r);
    return !1;
  }
}
function isNarrationSummaryBlock(n) {
  return !!n.thinking?.trim() && isNarrationTaggedBlock(n);
}
function narrationBlockIndexes(n) {
  let r = [];
  return (
    n.forEach((e, s) => {
      if (isNarrationTaggedBlock(e)) r.push(s);
    }),
    r
  );
}
export {
  isNarrationSummaryBlock,
  isNarrationTaggedBlock,
  narrationBlockIndexes,
};

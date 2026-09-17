// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 10 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { logError as h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { Ol } from "./chunk-7xabjzfw.js";
import "./chunk-kk3mqttk.js";
import { _Gn, yGn } from "./chunk-se27pkgx.js";
var t = new WeakMap();
function i(n) {
  try {
    if (n.type !== "thinking" || !n.signature) return !1;
    let r;
    if (t.has(n)) r = t.get(n);
    else ((r = yGn(n.signature)), t.set(n, r));
    return r === _Gn;
  } catch (r) {
    if (Ol().claim("narration_classifier_error")) h(r);
    return !1;
  }
}
function u(n) {
  return !!n.thinking?.trim() && i(n);
}
function f(n) {
  let r = [];
  return (
    n.forEach((e, s) => {
      if (i(e)) r.push(s);
    }),
    r
  );
}
export {
  u as isNarrationSummaryBlock,
  i as isNarrationTaggedBlock,
  f as narrationBlockIndexes,
};

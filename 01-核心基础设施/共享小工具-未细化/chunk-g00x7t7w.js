// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { wo } from "./chunk-k6pta6f5.js";
import { jy } from "./chunk-vp8yvx5r.js";
function Q6n(o, e, r) {
  wo().bundledWorkflows.push({
    source: "built-in",
    ...e,
    script: o,
    disableModelInvocation: r?.disableModelInvocation,
  });
}
function xqe() {
  if (jy()) return [];
  return wo().bundledWorkflows;
}
export { Q6n, xqe };

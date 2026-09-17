// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { UQ } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { commonJS } from "./chunk-2c9tjhwd.js";
var smithyContextModule = commonJS(function (s) {
  var r = UQ(),
    o = (e) => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}),
    i = (e) => {
      if (typeof e === "function") return e;
      let t = Promise.resolve(e);
      return () => t;
    };
  s.getSmithyContext = o;
  s.normalizeProvider = i;
});
export { smithyContextModule };

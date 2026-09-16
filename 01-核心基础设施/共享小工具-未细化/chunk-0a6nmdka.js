// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { TYn, G8e } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
class o extends Map {
  get everMounted() {
    return G8e();
  }
  set everMounted(e) {
    TYn(e);
  }
  set(e, n) {
    return ((this.everMounted = !0), super.set(e, n));
  }
  standaloneRender = null;
  claimForStandaloneRender(e) {
    let n = () => {
        if (this.standaloneRender === t) this.standaloneRender = null;
      },
      t = e.then(n, n);
    this.standaloneRender = t;
  }
  get pendingStandaloneRender() {
    return this.standaloneRender;
  }
}
var r = new j(() => new o());
function ws() {
  return r.of(B().host);
}
export { ws };

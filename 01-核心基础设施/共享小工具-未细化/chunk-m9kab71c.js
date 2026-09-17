// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { pm } from "./chunk-0ypv8gq2.js";
import { Eg } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { isFirstPartyProvider } from "../模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { G7 } from "./chunk-t0m264jc.js";
import { Mwt } from "./chunk-7wbbnp7y.js";
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? !1;
  }
}
var o = new r();
function _un(e) {
  o.register(e);
}
function cue() {
  if (pm("hipaa")) return !1;
  if (G7()) return !0;
  return Eg() && isFirstPartyProvider() && o.read();
}
function u_r(e) {
  if (!Mwt.includes(e)) return !0;
  return cue();
}
export { _un, cue, u_r };

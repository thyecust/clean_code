// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Q } from "./chunk-rsr7cnyv.js";
import { h } from "../../02-功能模块/Bedrock-Vertex/chunk-27ncq5fr.js";
import { qIn, N7t } from "../安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Y } from "./chunk-d16fhdtx.js";
async function n(o, t, e) {
  return;
}
async function h4t(o) {
  for (let t of Y([he(), Q()]))
    try {
      let e = await qIn(o, t);
      if (e !== void 0) {
        let r = await n(t, e.gitRoot, o);
        if (typeof r === "string") N7t(r, e.gitRoot, e.canonicalRoot);
      }
    } catch (e) {
      h(e);
    }
}
export { h4t };

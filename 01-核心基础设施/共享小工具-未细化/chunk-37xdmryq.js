// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { hbe, kdt } from "./chunk-kk7p3hsm.js";
import { An, ku, NW } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { resolve } from "path";
import { pathToFileURL } from "url";
function tO(n) {
  try {
    let r = NW(n),
      e = NW(resolve(r));
    if (ku(r) || An(e) || hbe(r) || hbe(e)) return null;
    let t = pathToFileURL(r);
    return t.hostname !== "" || kdt(t.href) ? null : t.href;
  } catch {
    return null;
  }
}
export { tO };

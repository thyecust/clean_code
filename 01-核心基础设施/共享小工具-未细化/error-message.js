// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { t } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function ErrorMessage(u) {
  let n = _(4),
    { error: o } = u;
  if (!o) {
    return null;
  }
  let r;
  if (n[0] !== o) ((r = l(o)), (n[0] = o), (n[1] = r));
  else r = n[1];
  let f;
  if (n[2] !== r)
    ((f = e(t, { color: "error", children: r })), (n[2] = r), (n[3] = f));
  else f = n[3];
  return f;
}
export { ErrorMessage };

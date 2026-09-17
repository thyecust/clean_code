// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Qt, De, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var VirtualScrollViewportStateContext = Qt(null);
function useHasVirtualScrollViewport() {
  return De(VirtualScrollViewportStateContext) !== null;
}
function useVirtualScrollViewportSize(o) {
  let m = _(3),
    l = De(VirtualScrollViewportStateContext),
    u;
  if (m[0] !== l || m[1] !== o)
    ((u = l ? { rows: l.rows, columns: l.columns } : o),
      (m[0] = l),
      (m[1] = o),
      (m[2] = u));
  else u = m[2];
  return u;
}
function useScrollViewport() {
  return De(VirtualScrollViewportStateContext)?.scrollViewport ?? null;
}
function useClaimScrollBox() {
  return De(VirtualScrollViewportStateContext)?.claimScrollBox ?? null;
}
export { VirtualScrollViewportStateContext, useHasVirtualScrollViewport, useVirtualScrollViewportSize, useScrollViewport, useClaimScrollBox };

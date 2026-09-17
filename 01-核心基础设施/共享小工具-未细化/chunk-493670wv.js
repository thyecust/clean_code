// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Kx } from "../../00-第三方库/_未识别/chunk-hm8z9h7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { formatDuration } from "../核心工具-字符串与文本/ansi-text-utils.js";
import { Box, Text, useTerminalViewport } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { VirtualScrollViewportContext } from "./virtual-scroll-viewport-context.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { De, dn, pk, C, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
function ElapsedTimeoutText(w) {
  let a = _(10),
    { elapsedTimeSeconds: b, timeoutMs: l } = w;
  if (b === void 0 && !l) {
    return null;
  }
  let v;
  if (a[0] !== l)
    ((v = l ? formatDuration(l, { hideTrailingZeros: !0 }) : void 0),
      (a[0] = l),
      (a[1] = v));
  else v = a[1];
  let x = v;
  if (b === void 0) {
    const m = `(timeout ${x})`;
    let p;
    if (a[2] !== m)
      ((p = e(Text, { dimColor: !0, children: m })), (a[2] = m), (a[3] = p));
    else p = a[3];
    return p;
  }
  const m = b * 1000;
  let p;
  if (a[4] !== m) ((p = formatDuration(m)), (a[4] = m), (a[5] = p));
  else p = a[5];
  let O = p;
  if (x) {
    const u = `(${O} \xB7 timeout ${x})`;
    let d;
    if (a[6] !== u)
      ((d = e(Text, { dimColor: !0, children: u })), (a[6] = u), (a[7] = d));
    else d = a[7];
    return d;
  }
  const u = `(${O})`;
  let d;
  if (a[8] !== u)
    ((d = e(Text, { dimColor: !0, children: u })), (a[8] = u), (a[9] = d));
  else d = a[9];
  return d;
}
F();
function y() {
  let r = De(VirtualScrollViewportContext),
    [n, i, s, f] = useTerminalViewport(),
    c = f() ?? i.isVisible;
  return [n, c || r, s];
}
function OffscreenFrozenContent({ children: r }) {
  let n = De(Kx),
    [i, s, f] = y(),
    c = C(r),
    [, z] = pk((T) => T + 1, 0),
    R = !s;
  if (!R) c.current = r;
  let V = n?.columns,
    L = n?.rows;
  return (
    dn(() => {
      if (R && f()) z();
    }, [V, L, R, f]),
    e(Box, { ref: i, children: c.current })
  );
}
function useOffscreenFrozenValue(r) {
  let [n, i] = y(),
    s = C(r);
  if (i) s.current = r;
  return [n, s.current];
}
export { OffscreenFrozenContent, useOffscreenFrozenValue, ElapsedTimeoutText };

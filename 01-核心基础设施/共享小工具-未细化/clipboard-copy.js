// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Text } from "../ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { getClipboardCopyStrategy, probeLinuxClipboardTool, setClipboard } from "../../02-功能模块/终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { useClock } from "./use-clock.js";
import { KeybindingHint } from "../../02-功能模块/键位绑定(Keybindings)/keybinding-display.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "./chunk-2c9tjhwd.js";
F();
var g = 2000,
  x = 2000;
function useCopyToClipboard(r) {
  let i = useClock(),
    [P, s] = d(null),
    n = C(null),
    l = C(null),
    o = C(null),
    a = C(0),
    f = C(!0),
    m = re(() => {
      ((a.current += 1),
        o.current?.(),
        (o.current = null),
        (l.current = null),
        n.current?.(),
        (n.current = null),
        s(null));
    }, []);
  (E(() => {
    if ((m(), r !== null)) probeLinuxClipboardTool();
  }, [r, m]),
    E(
      () => (
        (f.current = !0),
        () => {
          ((f.current = !1),
            o.current?.(),
            (o.current = null),
            (l.current = null),
            n.current?.(),
            (n.current = null));
        }
      ),
      [],
    ));
  let v = re(
    (b) => {
      if (l.current === b) return;
      ((l.current = b),
        o.current?.(),
        (o.current = i.setTimeout(() => {
          ((o.current = null), (l.current = null));
        }, g)));
      let y = getClipboardCopyStrategy(),
        R = a.current;
      setClipboard(b).then((h) => {
        if (!f.current || R !== a.current) return;
        if (h) process.stdout.write(h);
        if ((n.current?.(), (n.current = null), s(y), y === "native"))
          n.current = i.setTimeout(() => {
            ((n.current = null), s(null));
          }, x);
      });
    },
    [i],
  );
  return { copiedVia: P, copy: v, reset: m };
}
function CopyFeedbackHint(W) {
  let L = _(2),
    { via: k } = W;
  if (k === "native") {
    let u;
    if (L[0] === MEMO_CACHE_SENTINEL)
      ((u = e(Text, { color: "success", children: "(Copied!)" })), (L[0] = u));
    else u = L[0];
    return u;
  }
  if (k === null) {
    let u;
    if (L[1] === MEMO_CACHE_SENTINEL)
      ((u = e(Text, {
        dimColor: !0,
        children: e(KeybindingHint, { chord: "c", action: "copy", parens: !0 }),
      })),
        (L[1] = u));
    else u = L[1];
    return u;
  }
  return null;
}
function CopyFallbackNotice(B) {
  let O = _(2),
    { via: U } = B;
  if (U === "tmux-buffer") {
    let c;
    if (O[0] === MEMO_CACHE_SENTINEL)
      ((c = e(Text, {
        dimColor: !0,
        children:
          "(Copied to tmux buffer \xB7 select the URL manually if paste fails)",
      })),
        (O[0] = c));
    else c = O[0];
    return c;
  }
  if (U === "osc52") {
    let c;
    if (O[1] === MEMO_CACHE_SENTINEL)
      ((c = e(Text, {
        dimColor: !0,
        children:
          "(Sent via OSC 52 \xB7 select the URL manually if paste fails)",
      })),
        (O[1] = c));
    else c = O[1];
    return c;
  }
  return null;
}
export { useCopyToClipboard, CopyFeedbackHint, CopyFallbackNotice };

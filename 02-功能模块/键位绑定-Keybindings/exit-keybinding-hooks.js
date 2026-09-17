// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useApp } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "./keybinding-hooks.js";
import { useKeybindingDisplayText } from "./use-keybinding-display-text.js";
import { useDoublePressConfirm } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { isKbCohesionFixesEnabled } from "../../01-核心基础设施/核心工具-未归类/kb-cohesion-fixes.js";
import { re, V, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
F();
function useGlobalExitKeybinding(i, r, e = !0) {
  let { handleInterrupt: n, handleExit: t, exitState: o } = c(r, i),
    a = V(() => ({ "app:interrupt": n, "app:exit": t }), [n, t]);
  return (useKeybindings(a, { context: "Global", isActive: e }), o);
}
function useExitKeybindingEntries(i, r, e = !0) {
  let { handleInterrupt: n, handleExit: t, exitState: o } = c(r, i);
  return {
    entries: V(
      () =>
        e
          ? [
              { action: "app:interrupt", run: n },
              { action: "app:exit", run: t },
            ]
          : [],
      [e, n, t],
    ),
    exitState: o,
  };
}
function c(i, r) {
  let { exit: e } = useApp(),
    [n, t] = d({ pending: !1, keyName: null }),
    o = V(() => r ?? e, [r, e]),
    a = isKbCohesionFixesEnabled(),
    l = useKeybindingDisplayText("app:interrupt", "Global", "Ctrl-C"),
    p = useKeybindingDisplayText("app:exit", "Global", "Ctrl-D"),
    m = a && l ? l : "Ctrl-C",
    y = a && p ? p : "Ctrl-D",
    u = useDoublePressConfirm((s) => t({ pending: s, keyName: m }), o),
    x = useDoublePressConfirm((s) => t({ pending: s, keyName: y }), o),
    b = re(() => {
      if (i?.()) return;
      u();
    }, [u, i]),
    C = re(() => {
      x();
    }, [x]);
  return { handleInterrupt: b, handleExit: C, exitState: n };
}
export { useGlobalExitKeybinding, useExitKeybindingEntries };

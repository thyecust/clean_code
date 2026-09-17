// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { o, t, tn, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { ui, $o, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { mo } from "../../01-核心基础设施/共享小工具-未细化/chunk-vzqtx1mx.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { Pr, an, Qht } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { is } from "../../01-核心基础设施/共享小工具-未细化/chunk-fafq09h6.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
F();
function x(_, { selfOpened: m, onCancelled: l }) {
  let [S, p] = d(!1),
    n = C(!1),
    [c, a] = d(!1),
    s = C(!1),
    R = Un(m ? mo : null),
    w = !m || R,
    k = tn() ? !0 : !1,
    H = ui(mo),
    { refusedWithin: B, noteRefused: A } = $o();
  function N() {
    if (m && (H() || B(mo))) return (A(), !0);
    return !1;
  }
  let v = is(
    () => {
      if (s.current) return;
      s.current = !0;
      let b = n.current;
      ((n.current = !0), l(b), Pr(1));
    },
    void 0,
    m && !c,
  );
  function P() {
    if (n.current || !w) return !1;
    return ((n.current = !0), p(!0), !0);
  }
  function T(b) {
    if (s.current) return;
    ((s.current = !0), a(!0), _(b));
  }
  return {
    choicesDisabled: !w && !k,
    decided: S,
    take: P,
    refuseInput: N,
    settled: () => s.current,
    handBack: T,
    exit: v,
    exitHintShowing: v.pending && !c,
  };
}
function RemoteHomeSettingsDialog({ configHome: _, storageV5: m, origin: l, onDone: S }) {
  let p = l === "first_run",
    n = x(S, {
      selfOpened: p,
      onCancelled: (a) =>
        logFeatureSad("ccr_home_seed_mode_prompt", a ? "cancelled_saving" : "cancelled"),
    });
  (Ne("confirm:no", () => c("not_now"), {
    context: "Confirmation",
    isActive: p && !n.decided,
  }),
    E(() => {
      i("tengu_home_settings_mode_prompt_shown", { origin: fromEnum(l) });
    }, [l]));
  function c(a) {
    if (!n.take()) return;
    if (
      (i("tengu_home_settings_mode_prompt", { choice: fromEnum(a), origin: fromEnum(l) }),
      a === "not_now")
    ) {
      (logFeatureSad("ccr_home_seed_mode_prompt", "dismissed"), n.handBack(a));
      return;
    }
    Qht(a, m).then(
      (s) => {
        if (n.settled()) return;
        if (s === "refused") logFeatureBad("ccr_home_seed_mode_prompt", "not_written");
        else if (s === "unconfirmed")
          logFeatureSad("ccr_home_seed_mode_prompt", "unconfirmed");
        else if (a === "forward") logFeatureOk("ccr_home_seed_mode_prompt");
        else logFeatureSad("ccr_home_seed_mode_prompt", "declined");
        n.handBack(s === "refused" ? "not_saved" : a);
      },
      (s) => {
        if ((logError(s), n.settled())) return;
        (logFeatureBad("ccr_home_seed_mode_prompt", "write_failed"),
          n.handBack("not_saved"));
      },
    );
  }
  if (n.decided)
    return n.exitHintShowing
      ? r(t, {
          dimColor: !0,
          italic: !0,
          children: ["Press ", n.exit.keyName, " again to exit"],
        })
      : null;
  return r(de, {
    title: "Use this machine's settings in cloud sessions?",
    onCancel: () => c("not_now"),
    isCancelActive: !p,
    inputGuide: n.exit.pending
      ? r(t, { children: ["Press ", n.exit.keyName, " again to exit"] })
      : r(ue, {
          children: [
            e(D, { chord: "enter", action: "confirm" }),
            e(je, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "skip for now",
            }),
          ],
        }),
    children: [
      r(o, {
        flexDirection: "column",
        gap: 1,
        children: [
          e(t, { bold: !0, children: an(_) }),
          e(t, {
            children:
              "Send the CLAUDE.md, rules, output styles, and preferences in this folder, plus the permission rules that don't name paths on this machine, into each cloud session you start with claude --cloud, so it follows the same instructions and preferences. It skips credential files and anything your Read rules or sandbox settings deny, never sends hooks, environment variables, MCP servers, or plugins, and sends nothing outside this folder, even through a link or an @import. What is sent is encrypted at rest, and each launch tells you what it sent.",
          }),
          e(t, {
            dimColor: !0,
            children:
              "Without this, cloud sessions keep their own default settings, as they do today. Yes and No are saved for this machine; /config changes it later, from a session started without --cloud.",
          }),
        ],
      }),
      e(ve, {
        options: [
          { label: "Yes, send my settings", value: "forward" },
          { label: "No, keep them on this machine", value: "keep_local" },
          { label: "Not now", value: "not_now" },
        ],
        defaultFocusValue: "not_now",
        hideIndexes: p,
        isDisabled: n.choicesDisabled,
        refuseInput: n.refuseInput,
        onChange: c,
        onCancel: () => c("not_now"),
      }),
    ],
  });
}
export { RemoteHomeSettingsDialog };

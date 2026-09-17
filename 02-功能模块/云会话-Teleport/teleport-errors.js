// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getFileStatus, stashToCleanState } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { gracefulShutdownSync, getCloudSessionBlockers } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useHasVirtualScrollViewport } from "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-state.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { runSteps } from "../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js";
import { WA, Vx, de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import { V8 } from "../认证-OAuth登录/chunk-xvt7fc9t.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function k({ onStashAndContinue: h, onCancel: m }) {
  let [g, S] = d(null),
    f = g !== null ? [...g.tracked, ...g.untracked] : [],
    [x, b] = d(!0),
    [v, T] = d(!1),
    [u, l] = d(null);
  E(() => {
    (async () => {
      try {
        let i = await getFileStatus();
        S(i);
      } catch (i) {
        let y = i instanceof Error ? i.message : String(i);
        (n(`Error getting changed files: ${y}`, { level: "error" }),
          l("Failed to get changed files"));
      } finally {
        b(!1);
      }
    })();
  }, []);
  let w = async () => {
    T(!0);
    try {
      if (
        (n("Stashing changes before teleport..."),
        await stashToCleanState("Teleport auto-stash"))
      )
        (n("Successfully stashed changes"), h());
      else l("Failed to stash changes");
    } catch (s) {
      let i = s instanceof Error ? s.message : String(s);
      (n(`Error stashing changes: ${i}`, { level: "error" }),
        l("Failed to stash changes"));
    } finally {
      T(!1);
    }
  };
  if (x)
    return e(o, {
      flexDirection: "column",
      padding: 1,
      children: r(o, {
        marginBottom: 1,
        children: [
          e(yo, {}),
          r(t, { children: [" Checking git status", figures.ellipsis] }),
        ],
      }),
    });
  if (u)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      children: [
        r(t, { bold: !0, color: "error", children: ["Error: ", u] }),
        e(o, {
          marginTop: 1,
          children: e(t, {
            dimColor: !0,
            children: e(KeybindingHint, { chord: "escape", action: "cancel", bold: !0 }),
          }),
        }),
      ],
    });
  let R = f.length > 8;
  return r(de, {
    title: "Working directory has changes",
    onCancel: m,
    children: [
      e(t, {
        children:
          "Teleport will switch git branches. The following changes were found:",
      }),
      e(o, {
        flexDirection: "column",
        paddingLeft: 2,
        children:
          f.length > 0
            ? R
              ? r(t, { children: [f.length, " files changed"] })
              : f.map((s, i) => e(t, { children: s }, i))
            : e(EmptyStateMessage, { children: "No changes detected" }),
      }),
      e(t, {
        children:
          "Would you like to stash these changes and continue with teleport?",
      }),
      v
        ? r(o, {
            children: [e(yo, {}), e(t, { children: " Stashing changes..." })],
          })
        : e(ConfirmPrompt, {
            confirmLabel: "Stash changes and continue",
            cancelLabel: "Exit",
            onConfirm: () => void w(),
            onCancel: m,
          }),
    ],
  });
}
function le() {
  gracefulShutdownSync(0);
}
var J = new Set();
function TeleportError(We) {
  let c = _(23),
    { onComplete: M, errorsToIgnore: U, isStandalone: V } = We,
    W = U === void 0 ? J : U,
    $e = V === void 0 ? !1 : V,
    [q, X] = d(null),
    [G, Z] = d(!1),
    z = useHasVirtualScrollViewport(),
    { credentials: H } = useStorageV5Context(),
    j;
  if (c[0] !== H || c[1] !== W || c[2] !== M)
    ((j = async () => {
      let qe = await getCloudSessionBlockers(H);
      let K = new Set(Array.from(qe).filter((ze) => !W.has(ze)));
      if (K.size === 0) {
        M();
        return;
      }
      if (K.has("needsLogin")) X("needsLogin");
      else if (K.has("needsGitStash")) X("needsGitStash");
    }),
      (c[0] = H),
      (c[1] = W),
      (c[2] = M),
      (c[3] = j));
  else j = c[3];
  let a = j,
    ee,
    oe;
  if (c[4] !== a)
    ((ee = () => {
      a();
    }),
      (oe = [a]),
      (c[4] = a),
      (c[5] = ee),
      (c[6] = oe));
  else ((ee = c[5]), (oe = c[6]));
  E(ee, oe);
  let I = le,
    te;
  if (c[7] !== a)
    ((te = () => {
      (Z(!1), a());
    }),
      (c[7] = a),
      (c[8] = te));
  else te = c[8];
  let P = te,
    ne;
  if (c[9] === MEMO_CACHE_SENTINEL)
    ((ne = () => {
      Z(!0);
    }),
      (c[9] = ne));
  else ne = c[9];
  let He = ne,
    ie;
  if (c[10] !== a)
    ((ie = () => {
      a();
    }),
      (c[10] = a),
      (c[11] = ie));
  else ie = c[11];
  let O = ie;
  const Y = $e && q === "needsGitStash";
  let se;
  if (c[12] !== Y)
    ((se = { context: "Confirmation", isActive: Y }),
      (c[12] = Y),
      (c[13] = se));
  else se = c[13];
  if ((useKeybinding("confirm:no", I, se), !q)) {
    return null;
  }
  switch (q) {
    case "needsGitStash": {
      let C;
      if (c[14] !== O)
        ((C = e(k, { onStashAndContinue: O, onCancel: I })),
          (c[14] = O),
          (c[15] = C));
      else C = c[15];
      return C;
    }
    case "needsLogin": {
      const C = G ? P : I;
      let A;
      if (c[16] !== P || c[17] !== z || c[18] !== G)
        ((A = G
          ? e(V8, {
              onDone: P,
              mode: "login",
              forceLoginMethod: "claudeai",
              urlOutdent: z ? Vx : WA,
            })
          : r(N, {
              children: [
                r(o, {
                  flexDirection: "column",
                  children: [
                    e(t, {
                      dimColor: !0,
                      children: "Teleport requires a Claude.ai account.",
                    }),
                    e(t, {
                      dimColor: !0,
                      children:
                        "Your Claude Pro/Max subscription will be used by Claude Code.",
                    }),
                  ],
                }),
                e(ConfirmPrompt, {
                  confirmLabel: "Login with Claude account",
                  cancelLabel: "Exit",
                  onConfirm: He,
                  onCancel: I,
                }),
              ],
            })),
          (c[16] = P),
          (c[17] = z),
          (c[18] = G),
          (c[19] = A));
      else A = c[19];
      let ae;
      if (c[20] !== C || c[21] !== A)
        ((ae = e(de, { title: "Log in to Claude", onCancel: C, children: A })),
          (c[20] = C),
          (c[21] = A),
          (c[22] = ae));
      else ae = c[22];
      return ae;
    }
  }
}
function showTeleportErrorsImpl(h, m) {
  return runSteps(
    h,
    [
      (g) =>
        e(TeleportError, { errorsToIgnore: m, onComplete: () => g(), isStandalone: !0 }),
    ],
    { session: B() },
  );
}
export { TeleportError, showTeleportErrorsImpl };

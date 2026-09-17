// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 244 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { fOn, NXt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { R, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { createSystemInfoMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { getSettingsForSource, autoModeConfigSchema } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { emitTaskNotification } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { resolveAutoModeReconScope, writeAutoModeSetup } from "../权限系统/chunk-4wrkmv3h.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, useIsScreenReaderEnabled } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { useKeybinding, useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../使用时长-Wellbeing/使用时长-Wellbeing.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { ScreenReaderSelect, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { REFUSE_INPUT_WINDOW_MS } from "../../01-核心基础设施/共享小工具-未细化/recent-window.js";
import { FlaggedItemsRemoveDialog, AutoModeSetupReviewDialog, AUTO_MODE_SETUP_REVIEW_DIALOG, AUTO_MODE_FLAGGED_ALLOW_DIALOG } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { proposeAutoModeSetup } from "./auto-mode-setup-proposal.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../远程控制-Bridge/remote-control-ui-strings.js";
import "../工作树-Git/git-operations.js";
import { toInteger } from "../../01-核心基础设施/共享小工具-未细化/to-integer.js";
import { E, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { generateTaskId, createPendingTask, figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var Me = "Expected a function";
function be(n, a) {
  var s;
  if (typeof a != "function") throw TypeError(Me);
  return (
    (n = toInteger(n)),
    function () {
      if (--n > 0) s = a.apply(this, arguments);
      if (n <= 1) a = void 0;
      return s;
    }
  );
}
var oe = be;
function _e(n) {
  return oe(2, n);
}
var te = _e;
function ke(n) {
  return (
    typeof n === "object" &&
    n !== null &&
    "type" in n &&
    n.type === "auto_mode_scan"
  );
}
function Z(n) {
  for (let a of Object.values(n.all()))
    if (ke(a) && a.status === "running") return a;
  return;
}
function re(n, a, s) {
  let w = generateTaskId("auto_mode_scan"),
    M = {
      ...createPendingTask(w, "auto_mode_scan", "scanning for auto-mode setup"),
      type: "auto_mode_scan",
      status: "running",
      skipTranscript: !0,
      gathersFromGitHubOrg: s,
      abortController: a,
    };
  return (n.register(M), w);
}
function X(n, a, s) {
  let w = !1;
  if (
    (a.update(n, (M) => {
      if (M.status !== "running") return M;
      return (
        (w = !0),
        {
          ...M,
          status: s,
          endTime: Date.now(),
          notified: !0,
          abortController: void 0,
        }
      );
    }),
    w)
  )
    emitTaskNotification(n, s, { skipTranscript: !0, ambient: !0 });
}
F();
function J(n) {
  return {
    environment: n.environment,
    ...(n.allow.length > 0 && { allow: n.allow }),
    ...(n.soft_deny.length > 0 && { soft_deny: n.soft_deny }),
    ...(n.hard_deny.length > 0 && { hard_deny: n.hard_deny }),
  };
}
function K(n, a) {
  return (
    `Saved to ${n.filePath} (${n.autoModeKeysWritten.join(", ")}` +
    (n.environmentEntriesPreserved > 0
      ? `; kept ${n.environmentEntriesPreserved} existing environment ${n.environmentEntriesPreserved === 1 ? "entry" : "entries"}`
      : "") +
    (a.removed > 0
      ? `; removed ${a.removed} permissions.allow ${a.removed === 1 ? "entry" : "entries"}`
      : "") +
    "). Run `claude auto-mode config` to see the effective result." +
    (a.skipped > 0
      ? ` Note: ${a.skipped} ${a.skipped === 1 ? "rule" : "rules"} couldn\u2019t be removed \u2014 permissions.allow isn\u2019t an array in your settings.`
      : "") +
    ((a.notFound ?? 0) > 0
      ? ` Note: ${a.notFound} ${a.notFound === 1 ? "rule was" : "rules were"} already gone from permissions.allow.`
      : "") +
    (n.warnings.length > 0
      ? `
${n.warnings.join(`
`)}`
      : "")
  );
}
function pe(n = !1) {
  return {
    step: n ? "existing" : "confirm",
    hasExisting: n,
    mode: "append",
    posture: "mixed",
    gathersFromGitHubOrg: !1,
    flaggedPicking: !1,
    flaggedSelection: [],
    confirmSelection: ["shell"],
    confirmFocus: 1,
    confirmSrAtPosture: !0,
    shownLogged: !1,
    resolution: "none",
  };
}
var me = "Teach auto mode about your environment?",
  ge =
    "Claude Code reads this project, your recent Claude sessions, and optionally your shell history and other repositories. Claude analyzes this data and customizes auto mode to make better decisions.",
  ee = "How you use Claude here",
  q = [
    { value: "enterprise", label: "Work" },
    { value: "open-source", label: "Open source" },
    { value: "personal", label: "Hobby" },
    { value: "mixed", label: "Mixed" },
  ],
  Q = [
    { value: "shell", label: "Also scan shell history" },
    { value: "repos", label: "Also scan your other repos" },
  ],
  Pe = [
    { value: "shell", label: "Also scan shell history (default)" },
    { value: "repos", label: "Also scan your other repos" },
    { value: "both", label: "Scan both" },
    { value: "here", label: "Neither \u2014 just this project and sessions" },
  ];
function Fe(n) {
  switch (n) {
    case "both":
      return ["shell", "repos"];
    case "shell":
      return ["shell"];
    case "repos":
      return ["repos"];
    case "here":
      return [];
  }
}
function fe({
  state: n,
  propose: a,
  onBackgroundStart: s,
  abort: w,
  write: M,
  writeRemoval: T,
  onDone: k,
  onCancel: v,
}) {
  let [, m] = d(n.step),
    b = n.step,
    I = useClock();
  (d(() => ((n.lastAcceptAt = Math.max(I.now(), n.lastAcceptAt ?? 0)), null)),
    E(
      () => (
        (n.notify = () => m(n.step)),
        m(n.step),
        () => {
          n.notify = void 0;
        }
      ),
      [n],
    ),
    E(() => {
      if (!n.shownLogged)
        ((n.shownLogged = !0),
          logEvent("tengu_auto_mode_setup_wizard_shown", {
            has_existing: n.hasExisting ? 1 : 0,
          }));
    }, [n]));
  function z() {
    let S = I.now(),
      A = n.lastAcceptAt;
    return (
      (n.lastAcceptAt = Math.max(S, A ?? S)),
      A !== void 0 && S - A >= REFUSE_INPUT_WINDOW_MS
    );
  }
  function C(S) {
    if (!z()) return !1;
    return n.step === S && n.resolution === "none";
  }
  function x(S) {
    ((n.lastAcceptAt = Math.max(I.now(), n.lastAcceptAt ?? 0)),
      (n.step = S),
      n.notify?.());
  }
  function P(S) {
    if (n.resolution !== "none") return;
    ((n.resolution = "cancel"),
      logEvent("tengu_auto_mode_setup_wizard_resolved", {
        choice: fromEnum(S),
        step: fromEnum(n.step),
      }),
      v());
  }
  function c() {
    P("cancel");
  }
  function O(S, A) {
    if (n.resolution !== "none") return;
    ((n.resolution = "done"),
      logEvent("tengu_auto_mode_setup_wizard_resolved", {
        choice: fromEnum("saved"),
        mode: fromEnum(n.mode),
      }),
      k(K(S, A)));
  }
  function j() {
    if (!z()) return;
    if (n.saved) {
      O(n.saved, { removed: 0, skipped: 0 });
      return;
    }
    P("error");
  }
  let G = r(DotSeparatedList, {
    children: [
      b === "confirm"
        ? e(KeybindingHint, { chord: ["left", "right"], action: "change usage" })
        : null,
      e(KeybindingHint, { chord: "enter", action: "continue" }),
      e(KeybindingHint, { chord: "escape", action: "cancel" }),
    ],
  });
  if (b === "existing")
    return e(de, {
      title:
        "You already have auto-mode entries \u2014 add to them, or start fresh?",
      onCancel: c,
      inputGuide: G,
      children: e(Select, {
        options: [
          {
            value: "append",
            label: "Add to them (keeps your existing entries)",
          },
          {
            value: "replace",
            label: "Start fresh (replaces the environment section)",
          },
          { value: "cancel", label: "Cancel" },
        ],
        onChange: (S) => {
          if (!C("existing")) return;
          if (S === "cancel") {
            c();
            return;
          }
          ((n.mode = S), x("confirm"));
        },
        onCancel: c,
      }),
    });
  if (b === "confirm")
    return e(he, {
      persisted: n,
      cancel: c,
      footer: G,
      isFreshKeypress: z,
      onContinue: (S) => {
        if (!C("confirm")) return;
        let A = S.includes("shell"),
          B = S.includes("repos"),
          V = {
            posture: n.posture,
            scope: "project",
            depth: A && B ? "both" : A ? "shell" : B ? "repos" : "here",
          };
        if (
          (logEvent("tengu_auto_mode_setup_wizard_answers", {
            posture: fromEnum(V.posture),
            scope: fromEnum(V.scope),
            depth: fromEnum(V.depth),
          }),
          (n.gathersFromGitHubOrg = resolveAutoModeReconScope(V).allProjects),
          s)
        ) {
          ((n.resolution = "done"),
            s(V),
            k(
              `Gathering data and drafting your auto-mode setup; back soon${n.gathersFromGitHubOrg ? " (also scanning your GitHub org \u2014 stoppable from the background tasks list)" : ""}`,
            ));
          return;
        }
        (x("propose"),
          a(V).then(
            (W) => {
              if (W.ok) ((n.proposal = W.proposal), x("review"));
              else if (W.code === "aborted") c();
              else ((n.error = W.reason), x("error"));
            },
            (W) => {
              ((n.error = W instanceof Error ? W.message : String(W)),
                x("error"));
            },
          ));
      },
    });
  if (b === "propose")
    return e(Se, {
      message: n.gathersFromGitHubOrg
        ? "Scanning your repo, recent sessions, and your GitHub org\u2026"
        : "Scanning your repo and recent sessions\u2026",
      subtitle:
        "then drafting a proposal \u2014 this can take a moment (Esc to cancel)",
      onEscape: w,
    });
  if (b === "review" && n.proposal) {
    let S = n.proposal;
    return e(AutoModeSetupReviewDialog, {
      hideIndexes: !0,
      proposal: S,
      onCancel: c,
      onDecline: () => {
        if (!C("review")) return;
        ((n.resolution = "done"),
          logEvent("tengu_auto_mode_setup_wizard_resolved", { choice: fromEnum("decline") }),
          k(
            "Discarded \u2014 nothing was saved. Re-run /auto-mode-setup anytime.",
          ));
      },
      onAccept: () => {
        if (!C("review")) return;
        (x("write"),
          M(S, n.mode).then(
            (A) => {
              if (((n.saved = A), S.remove_from_permissions_allow.length > 0))
                x("flagged");
              else O(A, { removed: 0, skipped: 0 });
            },
            (A) => {
              ((n.error = A instanceof Error ? A.message : String(A)),
                x("error"));
            },
          ));
      },
    });
  }
  if (b === "write") return e(SpinnerMessageLine, { message: "Saving\u2026" });
  if (b === "flagged" && n.proposal && n.saved) {
    let S = n.saved;
    return e(FlaggedItemsRemoveDialog, {
      hideIndexes: !0,
      flagged: n.proposal.remove_from_permissions_allow,
      initialPicking: n.flaggedPicking,
      onPickingChange: (A) => {
        if (!C("flagged")) return !1;
        return ((n.flaggedPicking = A), !0);
      },
      initialSelection: n.flaggedSelection,
      onSelectionChange: (A) => {
        n.flaggedSelection = A;
      },
      onCancel: () => {
        if (!z()) return;
        O(S, { removed: 0, skipped: 0 });
      },
      onResolve: (A) => {
        if (!C("flagged")) return;
        if (A.length === 0) {
          O(S, { removed: 0, skipped: 0 });
          return;
        }
        (x("write"),
          T(A).then(
            (B) =>
              O(S, {
                removed: B.permissionsAllowRemoved.length,
                skipped: B.permissionsAllowSkipped ? A.length : 0,
                notFound: B.permissionsAllowNotFound.length,
              }),
            (B) => {
              ((n.error = B instanceof Error ? B.message : String(B)),
                x("error"));
            },
          ));
      },
    });
  }
  return e(de, {
    title: "Auto-mode setup",
    onCancel: j,
    children: r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [
        r(Box, {
          children: [
            e(StatusIndicator, { status: "error" }),
            r(Text, { children: [" ", n.error ?? "Something went wrong."] }),
          ],
        }),
        e(Select, {
          options: [{ value: "close", label: "Close" }],
          onChange: j,
          onCancel: j,
        }),
      ],
    }),
  });
}
var se = Math.max(ee.length, ...Q.map((n) => n.label.length));
function he(U) {
  let Re = _(4);
  if (useIsScreenReaderEnabled()) {
    let Y;
    if (Re[0] !== U) ((Y = e(le, { ...U })), (Re[0] = U), (Re[1] = Y));
    else Y = Re[1];
    return Y;
  }
  let Y;
  if (Re[2] !== U) ((Y = e(ie, { ...U })), (Re[2] = U), (Re[3] = Y));
  else Y = Re[3];
  return Y;
}
function ie({
  persisted: n,
  cancel: a,
  footer: s,
  onContinue: w,
  isFreshKeypress: M,
}) {
  let [, T] = d(0),
    k = () => T((c) => c + 1),
    v = Q.length + 2,
    m = n.confirmFocus,
    b = (c) => {
      let O = q.findIndex((G) => G.value === n.posture),
        j = q[(O + c + q.length) % q.length];
      if (j) ((n.posture = j.value), k());
    },
    I = (c) => {
      ((n.confirmFocus = (n.confirmFocus + c + v) % v), k());
    },
    z = (c) => {
      ((n.confirmSelection = n.confirmSelection.includes(c)
        ? n.confirmSelection.filter((O) => O !== c)
        : [...n.confirmSelection, c]),
        k());
    },
    C = () => {
      let c = n.confirmFocus;
      if (c === v - 1) {
        w(n.confirmSelection);
        return;
      }
      if (!M()) return;
      let O = Q[c - 1];
      if (O) z(O.value);
    };
  (useKeybindings(
    { "tabs:previous": () => b(-1), "tabs:next": () => b(1) },
    { context: "Tabs", isActive: n.confirmFocus === 0 },
  ),
    useKeybindings(
      {
        "confirm:previous": () => I(-1),
        "confirm:next": () => I(1),
        "confirm:toggle": C,
        "confirm:yes": C,
      },
      { context: "Confirmation" },
    ));
  let x = q.find((c) => c.value === n.posture)?.label ?? n.posture,
    P = (c) =>
      r(Text, {
        color: m === c ? "suggestion" : void 0,
        children: [m === c ? figures.pointer : " ", " "],
      });
  return r(de, {
    title: me,
    onCancel: a,
    inputGuide: s,
    children: [
      e(Text, { children: ge }),
      r(Box, {
        flexDirection: "column",
        children: [
          r(Box, {
            children: [
              P(0),
              r(Text, {
                color: m === 0 ? "suggestion" : void 0,
                children: [ee.padEnd(se), " "],
              }),
              r(Text, { dimColor: !0, children: [figures.triangleLeft, " "] }),
              e(Text, { children: x }),
              r(Text, { dimColor: !0, children: [" ", figures.triangleRight] }),
            ],
          }),
          Q.map((c, O) => {
            let j = O + 1,
              G = n.confirmSelection.includes(c.value);
            return r(
              Box,
              {
                children: [
                  P(j),
                  r(Text, {
                    color: m === j ? "suggestion" : void 0,
                    children: [c.label.padEnd(se), " "],
                  }),
                  r(Text, {
                    color: G ? "success" : void 0,
                    children: ["[", G ? figures.tick : " ", "]"],
                  }),
                ],
              },
              c.value,
            );
          }),
          r(Box, {
            marginTop: 1,
            children: [
              P(v - 1),
              e(Text, {
                bold: !0,
                color: m === v - 1 ? "suggestion" : void 0,
                children: "Continue",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function le({ persisted: n, cancel: a, onContinue: s }) {
  let w = useClock(),
    [, M] = d(0),
    T = () => {
      n.lastAcceptAt = Math.max(w.now(), n.lastAcceptAt ?? 0);
    };
  return r(de, {
    title: me,
    onCancel: a,
    children: [
      e(Text, { children: ge }),
      n.confirmSrAtPosture
        ? r(N, {
            children: [
              r(Text, { children: [ee, ":"] }),
              e(ScreenReaderSelect, {
                options: q,
                defaultValue: n.posture,
                onChange: (k) => {
                  ((n.posture = k),
                    (n.confirmSrAtPosture = !1),
                    T(),
                    M((v) => v + 1));
                },
                onCancel: a,
              }),
            ],
          })
        : r(N, {
            children: [
              e(Text, {
                children: "Optional reads (Claude already reads this project):",
              }),
              e(ScreenReaderSelect, {
                options: Pe,
                defaultValue: "shell",
                onChange: (k) => {
                  let v = Fe(k);
                  ((n.confirmSelection = v), s(v));
                },
                onCancel: a,
              }),
            ],
          }),
    ],
  });
}
function Se(go) {
  let Ce = _(4),
    { message: ne, subtitle: ae, onEscape: fo } = go,
    xe;
  if (Ce[0] === MEMO_CACHE_SENTINEL) ((xe = { context: "Settings" }), (Ce[0] = xe));
  else xe = Ce[0];
  useKeybinding("confirm:no", fo, xe);
  let Te;
  if (Ce[1] !== ne || Ce[2] !== ae)
    ((Te = e(SpinnerMessageLine, { message: ne, subtitle: ae })),
      (Ce[1] = ne),
      (Ce[2] = ae),
      (Ce[3] = Te));
  else Te = Ce[3];
  return Te;
}
function H(n, a, s) {
  if (
    (logEvent("tengu_auto_mode_setup_wizard_resolved", {
      choice: fromEnum(n),
      step: fromEnum(a),
      ...(s !== void 0 && { mode: fromEnum(s) }),
    }),
    n === "saved")
  )
    logFeatureOk("auto_mode_setup_wizard");
  else if (n === "error") logFeatureBad("auto_mode_setup_wizard", a);
  else logFeatureSad("auto_mode_setup_wizard", n);
}
function Ae() {
  return fOn();
}
async function we(n) {
  NXt(!0);
  try {
    await Ee(n);
  } catch (a) {
    (n.appendSystemMessage?.(
      createSystemInfoMessage(
        `Auto-mode setup hit an unexpected error and stopped: ${l(a)}. Re-run /auto-mode-setup to try again.`,
        "warning",
      ),
    ),
      logError(
        new R(
          `background auto-mode setup crashed: ${l(a)}`,
          "background auto-mode setup crashed",
        ),
      ),
      H("error", "background_crash"));
  } finally {
    NXt(!1);
  }
}
async function Ee(n) {
  let { taskRegistry: a } = n,
    s = new AbortController(),
    w = re(a, s, resolveAutoModeReconScope(n.answers).allProjects);
  try {
    await De(n, w, s);
  } finally {
    X(w, a, "failed");
  }
}
async function De(n, a, s) {
  let {
      taskRegistry: w,
      requestDialog: M,
      appendSystemMessage: T,
      propose: k = proposeAutoModeSetup,
      write: v = writeAutoModeSetup,
    } = n,
    m = await k(
      n.answers,
      n.permissionContext,
      s.signal,
      void 0,
      void 0,
      n.storageV5,
      n.credentials,
    ).catch(
      (C) => (
        logError(
          new R(
            `background auto-mode scan rejected: ${l(C)}`,
            "background auto-mode scan rejected",
          ),
        ),
        {
          ok: !1,
          code: "api_failed",
          reason:
            "The model call didn\u2019t complete. This is usually temporary \u2014 re-run /auto-mode-setup to try again.",
        }
      ),
    );
  if (!m.ok) {
    if (m.code === "aborted" || s.signal.aborted) {
      H("cancel", "background_scan");
      return;
    }
    (X(a, w, "failed"),
      T?.(createSystemInfoMessage(`Auto-mode setup scan failed: ${m.reason}`, "warning")),
      H("error", "background_scan"));
    return;
  }
  if (s.signal.aborted) {
    H("cancel", "background_scan");
    return;
  }
  X(a, w, "completed");
  let b = await M(AUTO_MODE_SETUP_REVIEW_DIALOG, { ...m.proposal, mode: n.mode }, { place: "under" });
  if (b !== "accept") {
    (T?.(
      createSystemInfoMessage(
        "Auto-mode proposal discarded \u2014 nothing was saved. Re-run /auto-mode-setup anytime.",
        "notice",
      ),
    ),
      H(b === "decline" ? "decline" : "cancel", "background_review"));
    return;
  }
  let I;
  try {
    I = await v({ mode: n.mode, autoMode: J(m.proposal) }, n.storageV5);
  } catch (C) {
    (T?.(
      createSystemInfoMessage(
        `Auto-mode setup couldn\u2019t save: ${l(C)}. Re-run /auto-mode-setup to try again.`,
        "warning",
      ),
    ),
      H("error", "background_write"));
    return;
  }
  let z = { removed: 0, skipped: 0, notFound: 0 };
  if (m.proposal.remove_from_permissions_allow.length > 0) {
    let C = await M(
        AUTO_MODE_FLAGGED_ALLOW_DIALOG,
        { flagged: m.proposal.remove_from_permissions_allow, runId: a },
        { place: "under" },
      ),
      x =
        C === "cancelled"
          ? []
          : C.toRemove.filter((P) =>
              m.proposal.remove_from_permissions_allow.includes(P),
            );
    if (x.length > 0)
      try {
        let P = await v({ removeFromPermissionsAllow: x }, n.storageV5);
        z = {
          removed: P.permissionsAllowRemoved.length,
          skipped: P.permissionsAllowSkipped ? x.length : 0,
          notFound: P.permissionsAllowNotFound.length,
        };
      } catch (P) {
        (T?.(
          createSystemInfoMessage(
            `${K(I, { removed: 0, skipped: 0 })}
Note: removing the flagged permissions.allow entries failed: ${l(P)}`,
            "warning",
          ),
        ),
          H("saved", "background_write", n.mode));
        return;
      }
  }
  (T?.(createSystemInfoMessage(K(I, z), "notice")), H("saved", "background", n.mode));
}
var Vo = async (n, a, s) => {
  if (s.trim() !== "")
    return (
      n(
        "/auto-mode-setup doesn\u2019t take arguments \u2014 run it on its own to open the setup dialog. In non-interactive mode, use --propose / --apply-file.",
        { display: "system" },
      ),
      null
    );
  if (Ae() || Z(a.taskRegistry))
    return (
      n(
        Z(a.taskRegistry)
          ? "An auto-mode setup is already in progress \u2014 the proposal review will pop up when the scan finishes. (The scan shows in the background tasks list.)"
          : "An auto-mode setup is already wrapping up \u2014 if its proposal review hasn\u2019t popped up, answer it when it does; if you just stopped the scan, it\u2019s winding down \u2014 try again in a moment.",
        { display: "system" },
      ),
      null
    );
  let w = te(n),
    M = new AbortController(),
    T = pe(hasExistingAutoModeConfig()),
    k = !1,
    v = a.requestDialog;
  return e(fe, {
    state: T,
    onBackgroundStart:
      v &&
      ((m) => {
        ((k = !0),
          we({
            answers: m,
            mode: T.mode,
            permissionContext: getToolPermissionContext(a),
            taskRegistry: a.taskRegistry,
            requestDialog: v,
            appendSystemMessage: a.appendSystemMessage,
            storageV5: a.storageV5,
            credentials: a.credentials,
          }).catch((b) => {
            logError(
              new R(
                `background auto-mode setup crashed: ${l(b)}`,
                "background auto-mode setup crashed",
              ),
            );
          }));
      }),
    propose: (m) =>
      proposeAutoModeSetup(
        m,
        getToolPermissionContext(a),
        AbortSignal.any([a.abortController.signal, M.signal]),
        void 0,
        void 0,
        a.storageV5,
        a.credentials,
      ),
    abort: () => M.abort(),
    write: (m, b) => writeAutoModeSetup({ mode: b, autoMode: J(m) }, a.storageV5),
    writeRemoval: (m) => writeAutoModeSetup({ removeFromPermissionsAllow: m }, a.storageV5),
    onCancel: () => {
      (logFeatureSad("auto_mode_setup_wizard", "cancelled"),
        w(void 0, { display: "skip" }));
    },
    onDone: (m) => {
      if (!k) logFeatureOk("auto_mode_setup_wizard");
      w(m, { display: "system" });
    },
  });
};
function hasExistingAutoModeConfig() {
  let n = autoModeConfigSchema().safeParse(getSettingsForSource("userSettings")?.autoMode);
  if (!n.success) return !1;
  let a = n.data;
  return (
    (a.environment?.length ?? 0) > 0 ||
    (a.allow?.length ?? 0) > 0 ||
    (a.soft_deny?.length ?? 0) > 0 ||
    (a.hard_deny?.length ?? 0) > 0
  );
}
export { Vo as call, hasExistingAutoModeConfig };

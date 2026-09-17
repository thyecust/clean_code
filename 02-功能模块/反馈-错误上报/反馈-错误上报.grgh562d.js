// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useTerminalSize } from "../../01-核心基础设施/UI组件-TUI/use-terminal-size.js";
import { Box, Text, useIsScreenReaderEnabled } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useClock } from "../../01-核心基础设施/终端与时钟/use-clock.js";
import { fromNumber } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-fields.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { useStorageV5Context } from "../../01-核心基础设施/核心工具-未归类/storage-v5-context.js";
import { logEvent } from "../../01-核心基础设施/遥测-OpenTelemetry/analytics-event-queue.js";
import { stripInvisibleChars, replaceControlChars } from "../../01-核心基础设施/核心工具-字符串与文本/text-sanitization.js";
import { sanitizeForDisplay, sanitizeMultilineForDisplay, FEEDBACK_DETAILS_MAX_BYTES, selectRecentRequestIds, FEEDBACK_FAILURE_MODES, FEEDBACK_TASK_CATEGORIES, saveFeedbackDraft, listQueuedFeedbackDrafts, setSessionDraftCount } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { supportsShiftEnter } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { useSession } from "../../01-核心基础设施/核心工具-未归类/session-context.js";
import { DotSeparatedList } from "../../01-核心基础设施/核心工具-未归类/chunk-ff1hq6qq.js";
import { de } from "../../01-核心基础设施/UI组件-TUI/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定-Keybindings/keybinding-display.js";
import { StatusIndicator } from "../../01-核心基础设施/UI组件-TUI/chunk-dsg6bce8.js";
import { hn } from "../../01-核心基础设施/UI组件-TUI/chunk-tp42fv8j.js";
import { BorderedTextPreview } from "../../03-入口与运行时/会话UI-REPL/会话UI-REPL.qs63rzfp.js";
import { submitFeedbackDraft, discardFeedbackDraft } from "./feedback-draft-submit.js";
import { FocusableBox } from "../../01-核心基础设施/UI组件-TUI/focusable-box.js";
import { ErrorMessage } from "../../01-核心基础设施/UI组件-TUI/error-message.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, E, V, C, d, F } from "../../00-第三方库/react/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { countMatching } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
F();
var De = ["bug", "idea", "missing_capability"],
  tt = { bug: "bug", idea: "idea", missing_capability: "missing capability" },
  Qe = [void 0, ...FEEDBACK_FAILURE_MODES],
  Ze = [void 0, ...FEEDBACK_TASK_CATEGORIES];
function Dt(m) {
  return m === void 0 ? "(none)" : m.replace(/_/g, " ");
}
function _t(m) {
  return [
    "type",
    "title",
    "area",
    "failure_mode",
    "task_category",
    "details",
    ...(m.transcriptAvailable ? ["transcript"] : []),
    "send",
  ];
}
var We = 500;
function FeedbackDraftsPanel({ messages: m, onDone: y, abortSignal: w, onWriteNew: b }) {
  let [g, k] = d(null),
    [T, z] = d(0),
    [h, M] = d("list"),
    [s, P] = d(null),
    [j, q] = d(!1),
    [Re, Ee] = d(0),
    [u, O] = d(null),
    [Me, H] = d(null),
    Be = C(-1 / 0),
    [st, B] = d(null),
    [ot, Ft] = d(null),
    Ae = useTerminalSize().columns - 6,
    v = useClock(),
    oe = C(0),
    ae = C(!1),
    le = C(0),
    Le = C(!1),
    { storageV5: K, credentials: at } = useStorageV5Context(),
    U = useSession((n) => n.id),
    ce = b !== void 0,
    X = re(async () => {
      let { queued: n } = await listQueuedFeedbackDrafts(void 0, K).catch(() => ({
        queued: [],
        expired: [],
      }));
      (setSessionDraftCount(countMatching(n, (l) => l.source_session_id === U)), k(n));
      let a = n.length - (ce ? 0 : 1);
      return (z((l) => Math.min(l, Math.max(0, a))), n);
    }, [U, ce, K]);
  E(() => {
    X().then((n) => {
      logEvent("tengu_feedback_queue_opened", {
        queued_count: fromNumber(n.length),
        this_session_count: fromNumber(countMatching(n, (a) => a.source_session_id === U)),
      });
    });
  }, [X, U]);
  let fe = (g ?? []).filter((n) => n.source_session_id === U),
    Ie = (g ?? []).filter((n) => n.source_session_id !== U),
    J = [...fe, ...Ie],
    me = ce && T === J.length,
    Oe = J.length + (ce ? 1 : 0),
    Q = J[T],
    Ke = s ? selectRecentRequestIds(s.request_ids).length : 0,
    Z = re(
      (n) => {
        if (n === void 0) y();
        else y(n, { display: "system" });
      },
      [y],
    ),
    Y = V(() => (s ? _t(s) : []), [s]),
    Ne = re(
      (n) => {
        ((oe.current = v.now()), Ee(n.length - 1));
      },
      [v],
    ),
    c = Y[Re],
    W = c === "title" || c === "area" || c === "details",
    Rt = re(
      (n) => {
        (P(n),
          q(n.transcriptAvailable),
          B(null),
          O({
            type: n.type,
            title: sanitizeForDisplay(n.title),
            area: sanitizeForDisplay(n.area ?? ""),
            failureMode: n.failure_mode,
            taskCategory: n.task_category,
            details: sanitizeMultilineForDisplay(n.details),
          }),
          H(null),
          (Be.current = -1 / 0),
          Ne(_t(n)),
          (le.current = v.now()),
          (ae.current = !1),
          M("review"));
      },
      [v, Ne],
    ),
    lt = re(
      async (n) => {
        let a = v.now(),
          l = le.current;
        if (((le.current = Math.max(a, l)), a - l < We || Le.current)) return;
        Le.current = !0;
        try {
          (await discardFeedbackDraft(n, "panel", K).catch(() => {}),
            M("list"),
            P(null),
            await X());
        } finally {
          Le.current = !1;
        }
      },
      [X, v, K],
    ),
    pe = re(
      (n) => {
        (P(n),
          k((f) =>
            f ? f.map((R) => (R.draft_id === n.draft_id ? n : R)) : f,
          ));
        let { transcriptAvailable: a, ...l } = n;
        return saveFeedbackDraft(l, new Date(), K).then((f) => {
          if (!f.success)
            B(
              f.reason === "too_large"
                ? "That draft is too large to save. Trim the details."
                : "Could not save the draft to disk.",
            );
        });
      },
      [K],
    ),
    ge = re(() => {
      if (!s || !u) return s;
      let n = sanitizeForDisplay(s.title),
        a = sanitizeForDisplay(s.area ?? ""),
        l = sanitizeMultilineForDisplay(s.details),
        f = u.title === n || u.title.trim() === "" ? s.title : u.title.trim(),
        R = u.area === a ? (s.area ?? "") : u.area.trim(),
        dt =
          u.details === l
            ? s.details
            : u.details.trim() === ""
              ? ""
              : u.details;
      if (
        u.type === s.type &&
        f === s.title &&
        (R === "" ? void 0 : R) === s.area &&
        u.failureMode === s.failure_mode &&
        u.taskCategory === s.task_category &&
        dt === s.details
      )
        return s;
      return {
        ...s,
        type: u.type,
        title: f,
        area: R === "" ? void 0 : R,
        failure_mode: u.failureMode,
        task_category: u.taskCategory,
        details: dt,
      };
    }, [s, u]),
    ct = re(() => {
      let n = ge();
      if (n && n !== s) {
        if (
          s &&
          n.details === "" &&
          s.details !== "" &&
          v.now() - Be.current < We
        )
          n = { ...n, details: s.details };
        pe(n);
      }
    }, [ge, s, pe, v]),
    A = re(
      (n) => {
        (H(null),
          B((a) => (a === Te ? null : a)),
          Ee((a) => {
            let l = Math.max(0, Math.min(Y.length - 1, a + n));
            if (l !== a && Y[l] === "send") oe.current = v.now();
            return l;
          }));
      },
      [Y, v],
    ),
    St = re(
      (n) => {
        if (c === "type")
          O((a) => {
            if (!a) return a;
            let l = De.indexOf(a.type),
              f = De[(l + n + De.length) % De.length];
            return f ? { ...a, type: f } : a;
          });
        else if (c === "failure_mode")
          O((a) => {
            if (!a) return a;
            let l = Qe.indexOf(a.failureMode),
              f = Qe.length;
            return { ...a, failureMode: Qe[(l + n + f) % f] };
          });
        else if (c === "task_category")
          O((a) => {
            if (!a) return a;
            let l = Ze.indexOf(a.taskCategory),
              f = Ze.length;
            return { ...a, taskCategory: Ze[(l + n + f) % f] };
          });
        else if (c === "transcript") q((a) => !a);
      },
      [c],
    ),
    Et = re(async () => {
      if (!s || ae.current) return;
      let n = v.now(),
        a = oe.current;
      if (((oe.current = Math.max(n, a)), n - a < We)) return;
      if (u && u.title.trim() === "") {
        B(
          "Title is blank. Type a title, or press esc on the field to restore it.",
        );
        return;
      }
      let l = ge() ?? s;
      if (((ae.current = !0), M("submitting"), B(null), l !== s)) await pe(l);
      let f;
      try {
        f = await submitFeedbackDraft({
          draft: l,
          includeTranscript: j && l.transcriptAvailable,
          currentSessionMessages: m,
          signal: w,
          storageV5: K,
          credentials: at,
        });
      } catch {
        f = {
          success: !1,
          error:
            "Couldn't send feedback. The draft is still queued. Try again later.",
        };
      }
      if (f.success) (Ft(f.feedbackId), M("receipt"), X());
      else {
        if (((ae.current = !1), B(f.error), f.payloadTooLarge)) {
          let R = Y.indexOf("transcript");
          if (R >= 0) Ee(R);
        }
        M("review");
      }
    }, [s, u, j, m, w, X, v, ge, pe, K, at, Y]);
  function Mt(n) {
    if (n.ctrl || n.meta) return;
    if (h === "submitting") {
      n.preventDefault();
      return;
    }
    if (n.key === "escape" && !(h === "review" && W)) return;
    if (h === "receipt") {
      if ((n.preventDefault(), (g?.length ?? 0) > 0)) (M("list"), P(null));
      else Z(`Feedback sent (receipt ${ot})`);
      return;
    }
    if (h === "list") {
      if (!g) {
        n.preventDefault();
        return;
      }
      if (n.key.toLowerCase() === "w" && b) {
        (n.preventDefault(), b());
        return;
      }
      if (Oe === 0) {
        (n.preventDefault(), Z());
        return;
      }
      if (n.key === "up") (n.preventDefault(), z((a) => Math.max(0, a - 1)));
      else if (n.key === "down")
        (n.preventDefault(), z((a) => Math.min(Oe - 1, a + 1)));
      else if (n.key === "return" && me && b) (n.preventDefault(), b());
      else if (n.key === "return" && Q) (n.preventDefault(), Rt(Q));
      else if (n.key.toLowerCase() === "d" && Q) (n.preventDefault(), lt(Q));
      else if (J.length === 0 && n.key !== "escape") (n.preventDefault(), Z());
      return;
    }
    if (h === "review" && s) {
      if (W) {
        if (n.key === "escape" && c) {
          n.preventDefault();
          let a = c;
          (O((l) =>
            l && s
              ? { ...l, [a]: a === "details" ? sanitizeMultilineForDisplay(s.details) : sanitizeForDisplay(s[a] ?? "") }
              : l,
          ),
            H(null),
            Ne(Y),
            B((l) => (l === Te ? null : l)));
        }
        return;
      }
      if (n.key === "up") (n.preventDefault(), A(-1));
      else if (n.key === "down") (n.preventDefault(), A(1));
      else if (n.key === "left" || n.key === "right")
        (n.preventDefault(), St(n.key === "left" ? -1 : 1));
      else if (n.key === " " && c === "transcript")
        (n.preventDefault(), q((a) => !a));
      else if (n.key === "return")
        if ((n.preventDefault(), c === "send")) Et();
        else A(1);
      else if (n.key.toLowerCase() === "d") (n.preventDefault(), lt(s));
    }
  }
  let he = re(() => {
      if (h === "review") {
        (ct(), (le.current = -1 / 0), M("list"), P(null));
        return;
      }
      Z();
    }, [h, ct, Z]),
    Bt =
      h === "list"
        ? r(DotSeparatedList, {
            children: [
              Oe > 0 &&
                e(KeybindingHint, {
                  chord: "enter",
                  action: me ? "write new feedback" : "review",
                }),
              Q !== void 0 && e(KeybindingHint, { chord: "d", action: "discard" }),
              e(KeybindingHint, { chord: "esc", action: "close" }),
            ],
          })
        : h === "review"
          ? r(DotSeparatedList, {
              children: [
                e(KeybindingHint, { chord: ["up", "down"], action: "move" }),
                (c === "type" ||
                  c === "failure_mode" ||
                  c === "task_category" ||
                  c === "transcript") &&
                  e(KeybindingHint, { chord: ["left", "right"], action: "change" }),
                e(KeybindingHint, {
                  chord: "enter",
                  action: c === "send" ? "send" : "next",
                }),
                c === "details" &&
                  e(KeybindingHint, {
                    chord: supportsShiftEnter() ? "shift+enter" : "ctrl+j",
                    action: "new line",
                  }),
                !W && e(KeybindingHint, { chord: "d", action: "discard" }),
                e(KeybindingHint, { chord: "esc", action: W ? "cancel edit" : "later" }),
              ],
            })
          : null;
  return e(FocusableBox, {
    onKeyDown: Mt,
    children: r(de, {
      title: "Feedback drafts",
      onCancel: he,
      isCancelActive: h !== "submitting" && !W,
      hideInputGuide: h === "receipt" || h === "submitting",
      inputGuide: Bt,
      children: [
        h === "list" &&
          g === null &&
          e(Text, { dimColor: !0, children: "Loading\u2026" }),
        h === "list" &&
          g !== null &&
          J.length === 0 &&
          r(Box, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(Text, { children: "No feedback drafts queued." }),
              e(Text, {
                dimColor: !0,
                children:
                  "Claude drafts feedback at high-signal moments; drafts appear here for your review.",
              }),
              b
                ? r(Box, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      e(nt, { isSelected: me }),
                      e(Text, {
                        dimColor: !0,
                        children:
                          "/bug works anytime. Any other key closes this panel.",
                      }),
                    ],
                  })
                : e(Text, {
                    dimColor: !0,
                    children: "Any key closes this panel.",
                  }),
            ],
          }),
        h === "list" &&
          g !== null &&
          J.length > 0 &&
          r(Box, {
            flexDirection: "column",
            children: [
              fe.length > 0 &&
                e(rt, {
                  title: "This session",
                  drafts: fe,
                  offset: 0,
                  cursor: T,
                }),
              Ie.length > 0 &&
                e(rt, {
                  title: "Other sessions",
                  drafts: Ie,
                  offset: fe.length,
                  cursor: T,
                }),
              b && e(Box, { marginTop: 1, children: e(nt, { isSelected: me }) }),
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  dimColor: !0,
                  wrap: "wrap",
                  children:
                    "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days.",
                }),
              }),
            ],
          }),
        h === "review" &&
          s &&
          u &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Box, {
                children: [
                  e(S, { isFocused: c === "type" }),
                  e(Text, { children: "Type: " }),
                  e(se, { value: tt[u.type], isFocused: c === "type" }),
                ],
              }),
              e(Fe, {
                label: "Title:",
                value: u.title,
                isFocused: c === "title",
                bold: !0,
                columns: Ae,
                cursorOffset: Me,
                onChange: (n) => O((a) => (a ? { ...a, title: n } : a)),
                onCursorChange: H,
                onNext: () => A(1),
                onPrev: () => A(-1),
                onExit: he,
              }),
              e(Fe, {
                label: "Area:",
                value: u.area,
                isFocused: c === "area",
                dim: !0,
                columns: Ae,
                cursorOffset: Me,
                onChange: (n) => O((a) => (a ? { ...a, area: n } : a)),
                onCursorChange: H,
                onNext: () => A(1),
                onPrev: () => A(-1),
                onExit: he,
              }),
              r(Box, {
                children: [
                  e(S, { isFocused: c === "failure_mode" }),
                  e(Text, { children: "Failure mode: " }),
                  e(se, {
                    value: Dt(u.failureMode),
                    isFocused: c === "failure_mode",
                  }),
                ],
              }),
              r(Box, {
                children: [
                  e(S, { isFocused: c === "task_category" }),
                  e(Text, { children: "Task: " }),
                  e(se, {
                    value: Dt(u.taskCategory),
                    isFocused: c === "task_category",
                  }),
                ],
              }),
              e(Fe, {
                label: "Details:",
                value: u.details,
                isFocused: c === "details",
                dim: !0,
                multiline: !0,
                columns: Ae,
                cursorOffset: Me,
                onChange: (n) => {
                  let a = Buffer.byteLength(n, "utf8");
                  if (a > FEEDBACK_DETAILS_MAX_BYTES && a >= Buffer.byteLength(u.details, "utf8")) {
                    B(Te);
                    return;
                  }
                  (O((l) => {
                    if (l && l.details.trim() !== "" && n.trim() === "")
                      Be.current = v.now();
                    return l ? { ...l, details: n } : l;
                  }),
                    B((l) => (l === Te ? null : l)));
                },
                onCursorChange: H,
                onNext: () => A(1),
                onPrev: () => A(-1),
                onExit: he,
              }),
              s.transcriptAvailable
                ? r(Box, {
                    flexDirection: "column",
                    children: [
                      r(Box, {
                        children: [
                          e(S, { isFocused: c === "transcript" }),
                          e(Text, { children: "Send transcript: " }),
                          e(se, {
                            value: j ? "yes" : "no",
                            isFocused: c === "transcript",
                          }),
                          r(Text, {
                            dimColor: !0,
                            children: [
                              " \xB7 ",
                              j
                                ? "sends this conversation to Anthropic"
                                : "report only",
                            ],
                          }),
                        ],
                      }),
                      s.source_session_id !== U &&
                        e(Box, {
                          marginLeft: 4,
                          children: r(Text, {
                            dimColor: !0,
                            wrap: "wrap",
                            children: [
                              "from ",
                              sanitizeForDisplay(s.cwd),
                              " \xB7 session",
                              " ",
                              sanitizeForDisplay(s.source_session_id),
                            ],
                          }),
                        }),
                    ],
                  })
                : r(Box, {
                    children: [
                      e(S, { isFocused: !1 }),
                      r(Text, {
                        children: [
                          "Send transcript: ",
                          e(Text, {
                            dimColor: !0,
                            children: "expired (report only)",
                          }),
                        ],
                      }),
                    ],
                  }),
              r(Box, {
                marginTop: 1,
                children: [
                  e(S, { isFocused: !1 }),
                  r(Text, {
                    dimColor: !0,
                    wrap: "wrap",
                    children: [
                      "Environment info (",
                      sanitizeForDisplay(s.os),
                      ", v",
                      sanitizeForDisplay(s.cli_version),
                      ",",
                      " ",
                      sanitizeForDisplay(s.model),
                      s.effort !== void 0 &&
                        r(N, { children: [", effort", " ", sanitizeForDisplay(s.effort)] }),
                      s.thinking_type !== void 0 &&
                        r(N, {
                          children: [
                            ", thinking ",
                            s.thinking_type,
                            s.thinking_budget !== void 0 &&
                              r(N, {
                                children: [" (budget ", s.thinking_budget, ")"],
                              }),
                          ],
                        }),
                      s.assistant_turn_count !== void 0 &&
                        r(N, {
                          children: [
                            ", turn ",
                            s.assistant_turn_count,
                            s.message_count !== void 0 &&
                              r(N, { children: ["/", s.message_count] }),
                            s.subagent_count !== void 0 &&
                              s.subagent_count > 0 &&
                              r(N, {
                                children: [
                                  " ",
                                  "with ",
                                  s.subagent_count,
                                  " ",
                                  pluralize(s.subagent_count, "subagent"),
                                ],
                              }),
                          ],
                        }),
                      ", drafted ",
                      it(s.created_at),
                      " ago)",
                      Ke > 0
                        ? ` and ${Ke} API request ${pluralize(Ke, "id")} are`
                        : " is",
                      " ",
                      "always attached.",
                    ],
                  }),
                ],
              }),
              st && e(Box, { marginTop: 1, children: e(ErrorMessage, { error: st }) }),
              r(Box, {
                marginTop: 1,
                children: [
                  e(S, { isFocused: c === "send" }),
                  e(Text, { bold: c === "send", children: "Send feedback" }),
                ],
              }),
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  dimColor: !0,
                  wrap: "wrap",
                  children:
                    "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config.",
                }),
              }),
            ],
          }),
        h === "submitting" && e(Text, { children: "Sending feedback\u2026" }),
        h === "receipt" &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Text, {
                color: "success",
                children: [
                  e(StatusIndicator, { status: "success", withSpace: !0 }),
                  "Feedback sent (receipt ",
                  ot,
                  "). Thanks!",
                ],
              }),
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  dimColor: !0,
                  italic: !0,
                  children: "Any key to continue",
                }),
              }),
            ],
          }),
      ],
    }),
  });
}
var Te = `That edit would push Details past the ${Math.floor(FEEDBACK_DETAILS_MAX_BYTES / 1024)}KB limit. Trim the details first.`;
function Tt(m, y) {
  return stripInvisibleChars(
    m.replace(
      /\r\n|\r/g,
      `
`,
    ),
  )
    .split(
      `
`,
    )
    .map((w) => replaceControlChars(w))
    .join(
      y
        ? `
`
        : " ",
    );
}
function S(bn) {
  let wn = _(3),
    { isFocused: At } = bn;
  const ut = At ? "suggestion" : void 0,
    ft = At ? `${figures.pointer} ` : "  ";
  let Lt;
  if (wn[0] !== ut || wn[1] !== ft)
    ((Lt = e(Text, { color: ut, children: ft })),
      (wn[0] = ut),
      (wn[1] = ft),
      (wn[2] = Lt));
  else Lt = wn[2];
  return Lt;
}
function se(kn) {
  let Pe = _(6),
    { value: ee, isFocused: xn } = kn;
  if (!xn) {
    let ye;
    if (Pe[0] !== ee)
      ((ye = e(Text, { dimColor: !0, children: ee })), (Pe[0] = ee), (Pe[1] = ye));
    else ye = Pe[1];
    return ye;
  }
  let ye;
  if (Pe[2] === MEMO_CACHE_SENTINEL)
    ((ye = r(Text, { dimColor: !0, children: [figures.triangleLeft, " "] })),
      (Pe[2] = ye));
  else ye = Pe[2];
  let It;
  if (Pe[3] === MEMO_CACHE_SENTINEL)
    ((It = r(Text, { dimColor: !0, children: [" ", figures.triangleRight] })),
      (Pe[3] = It));
  else It = Pe[3];
  let Ot;
  if (Pe[4] !== ee)
    ((Ot = r(Text, { children: [ye, ee, It] })), (Pe[4] = ee), (Pe[5] = Ot));
  else Ot = Pe[5];
  return Ot;
}
function Fe(Cn) {
  let ke = _(24),
    {
      label: mt,
      value: te,
      isFocused: ne,
      bold: $e,
      dim: qe,
      multiline: I,
      columns: be,
      cursorOffset: pt,
      onChange: gt,
      onCursorChange: ht,
      onNext: Ge,
      onPrev: yt,
      onExit: bt,
    } = Cn,
    we = useIsScreenReaderEnabled(),
    Ue;
  if (ke[0] !== ne)
    ((Ue = e(S, { isFocused: ne })), (ke[0] = ne), (ke[1] = Ue));
  else Ue = ke[1];
  let je;
  if (ke[2] !== mt) ((je = e(Text, { children: mt })), (ke[2] = mt), (ke[3] = je));
  else je = ke[3];
  let He;
  if (ke[4] !== Ue || ke[5] !== je)
    ((He = r(Box, { children: [Ue, je] })),
      (ke[4] = Ue),
      (ke[5] = je),
      (ke[6] = He));
  else He = ke[6];
  let Ve;
  if (
    ke[7] !== $e ||
    ke[8] !== be ||
    ke[9] !== pt ||
    ke[10] !== qe ||
    ke[11] !== ne ||
    ke[12] !== we ||
    ke[13] !== I ||
    ke[14] !== gt ||
    ke[15] !== ht ||
    ke[16] !== bt ||
    ke[17] !== Ge ||
    ke[18] !== yt ||
    ke[19] !== te
  )
    ((Ve = e(Box, {
      marginLeft: 4,
      children: ne
        ? e(Box, {
            borderStyle: I && !we ? "single" : void 0,
            borderLeft: !0,
            borderTop: !1,
            borderBottom: !1,
            borderRight: !1,
            borderDimColor: !0,
            paddingLeft: I && !we ? 1 : 0,
            children: e(hn, {
              value: te,
              onChange: gt,
              columns: I && !we ? be - 2 : be,
              onSubmit: Ge,
              onExit: bt,
              onHistoryUp: yt,
              onHistoryDown: Ge,
              cursorOffset: pt ?? te.length,
              onChangeCursorOffset: ht,
              multiline: I,
              inputFilter: (vn) => Tt(vn, I),
              clearOnSubmit: !1,
              disableCtrlCClear: !0,
              disableBackslashReturn: I,
              disableCursorMovementForUpDownKeys: !I,
              disableEscapeDoublePress: !0,
              showCursor: !0,
            }),
          })
        : I
          ? e(BorderedTextPreview, { value: te, bold: $e, dim: qe, columns: be })
          : e(Text, { bold: $e, dimColor: qe, wrap: "wrap", children: sanitizeForDisplay(te) }),
    })),
      (ke[7] = $e),
      (ke[8] = be),
      (ke[9] = pt),
      (ke[10] = qe),
      (ke[11] = ne),
      (ke[12] = we),
      (ke[13] = I),
      (ke[14] = gt),
      (ke[15] = ht),
      (ke[16] = bt),
      (ke[17] = Ge),
      (ke[18] = yt),
      (ke[19] = te),
      (ke[20] = Ve));
  else Ve = ke[20];
  let Kt;
  if (ke[21] !== He || ke[22] !== Ve)
    ((Kt = r(Box, { flexDirection: "column", children: [He, Ve] })),
      (ke[21] = He),
      (ke[22] = Ve),
      (ke[23] = Kt));
  else Kt = ke[23];
  return Kt;
}
function nt(Dn) {
  let _n = _(3),
    { isSelected: Nt } = Dn;
  const wt = Nt ? "suggestion" : void 0,
    kt = Nt ? `${figures.pointer} ` : "  ";
  let Pt;
  if (_n[0] !== wt || _n[1] !== kt)
    ((Pt = e(Box, {
      marginLeft: 1,
      children: r(Text, { color: wt, children: [kt, "+ Write new feedback"] }),
    })),
      (_n[0] = wt),
      (_n[1] = kt),
      (_n[2] = Pt));
  else Pt = _n[2];
  return Pt;
}
function rt(Tn) {
  let Xe = _(12),
    { title: xt, drafts: Ct, offset: xe, cursor: Ce } = Tn,
    Je;
  if (Xe[0] !== xt)
    ((Je = e(Text, { bold: !0, children: xt })), (Xe[0] = xt), (Xe[1] = Je));
  else Je = Xe[1];
  let ze;
  if (Xe[2] !== Ce || Xe[3] !== Ct || Xe[4] !== xe) {
    let ve;
    if (Xe[6] !== Ce || Xe[7] !== xe)
      ((ve = (ie, Fn) => {
        let $t = xe + Fn === Ce;
        return e(
          Box,
          {
            marginLeft: 1,
            children: r(Text, {
              color: $t ? "suggestion" : void 0,
              wrap: "truncate-end",
              children: [
                $t ? `${figures.pointer} ` : "  ",
                "[",
                tt[ie.type],
                "]",
                " ",
                sanitizeForDisplay(ie.title),
                " ",
                r(Text, {
                  dimColor: !0,
                  children: [
                    it(ie.created_at),
                    " \xB7",
                    " ",
                    sanitizeForDisplay(ie.cwd),
                    " \xB7",
                    " ",
                    ie.transcriptAvailable
                      ? "transcript available"
                      : "transcript expired (report only)",
                  ],
                }),
              ],
            }),
          },
          ie.draft_id,
        );
      }),
        (Xe[6] = Ce),
        (Xe[7] = xe),
        (Xe[8] = ve));
    else ve = Xe[8];
    ze = Ct.map(ve);
    ((Xe[2] = Ce), (Xe[3] = Ct), (Xe[4] = xe), (Xe[5] = ze));
  } else ze = Xe[5];
  let ve;
  if (Xe[9] !== Je || Xe[10] !== ze)
    ((ve = r(Box, { flexDirection: "column", children: [Je, ze] })),
      (Xe[9] = Je),
      (Xe[10] = ze),
      (Xe[11] = ve));
  else ve = Xe[11];
  return ve;
}
function it(m, y = Date.now()) {
  let w = y - Date.parse(m);
  if (!Number.isFinite(w) || w < 0) return "now";
  let b = Math.floor(w / 60000);
  if (b < 60) return `${Math.max(1, b)}m`;
  let g = Math.floor(b / 60);
  if (g < 24) return `${g}h`;
  return `${Math.floor(g / 24)}d`;
}
export { FeedbackDraftsPanel };

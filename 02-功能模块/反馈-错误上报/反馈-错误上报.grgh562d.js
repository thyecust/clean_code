// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { o, t, tn } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { Yr } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { up, Sn } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { an, KTe, Z6t, mEe, d5e, p5e, aWt, I3, R8n } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ZZ } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import { Ye } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5g6jeny.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { m6e } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { xye, YWe } from "./chunk-rmpn4ety.js";
import { mr } from "../../01-核心基础设施/共享小工具-未细化/chunk-e6f86vzh.js";
import { Ur } from "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { L } from "../Teammates团队/chunk-mrfx53ye.js";
import { G } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var De = ["bug", "idea", "missing_capability"],
  tt = { bug: "bug", idea: "idea", missing_capability: "missing capability" },
  Qe = [void 0, ...d5e],
  Ze = [void 0, ...p5e];
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
function r0e({ messages: m, onDone: y, abortSignal: w, onWriteNew: b }) {
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
    Ae = Se().columns - 6,
    v = vt(),
    oe = C(0),
    ae = C(!1),
    le = C(0),
    Le = C(!1),
    { storageV5: K, credentials: at } = _e(),
    U = Ye((n) => n.id),
    ce = b !== void 0,
    X = re(async () => {
      let { queued: n } = await I3(void 0, K).catch(() => ({
        queued: [],
        expired: [],
      }));
      (R8n(G(n, (l) => l.source_session_id === U)), k(n));
      let a = n.length - (ce ? 0 : 1);
      return (z((l) => Math.min(l, Math.max(0, a))), n);
    }, [U, ce, K]);
  E(() => {
    X().then((n) => {
      i("tengu_feedback_queue_opened", {
        queued_count: Yr(n.length),
        this_session_count: Yr(G(n, (a) => a.source_session_id === U)),
      });
    });
  }, [X, U]);
  let fe = (g ?? []).filter((n) => n.source_session_id === U),
    Ie = (g ?? []).filter((n) => n.source_session_id !== U),
    J = [...fe, ...Ie],
    me = ce && T === J.length,
    Oe = J.length + (ce ? 1 : 0),
    Q = J[T],
    Ke = s ? mEe(s.request_ids).length : 0,
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
            title: an(n.title),
            area: an(n.area ?? ""),
            failureMode: n.failure_mode,
            taskCategory: n.task_category,
            details: KTe(n.details),
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
          (await YWe(n, "panel", K).catch(() => {}),
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
        return aWt(l, new Date(), K).then((f) => {
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
      let n = an(s.title),
        a = an(s.area ?? ""),
        l = KTe(s.details),
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
        f = await xye({
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
              ? { ...l, [a]: a === "details" ? KTe(s.details) : an(s[a] ?? "") }
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
        ? r(ue, {
            children: [
              Oe > 0 &&
                e(D, {
                  chord: "enter",
                  action: me ? "write new feedback" : "review",
                }),
              Q !== void 0 && e(D, { chord: "d", action: "discard" }),
              e(D, { chord: "esc", action: "close" }),
            ],
          })
        : h === "review"
          ? r(ue, {
              children: [
                e(D, { chord: ["up", "down"], action: "move" }),
                (c === "type" ||
                  c === "failure_mode" ||
                  c === "task_category" ||
                  c === "transcript") &&
                  e(D, { chord: ["left", "right"], action: "change" }),
                e(D, {
                  chord: "enter",
                  action: c === "send" ? "send" : "next",
                }),
                c === "details" &&
                  e(D, {
                    chord: ZZ() ? "shift+enter" : "ctrl+j",
                    action: "new line",
                  }),
                !W && e(D, { chord: "d", action: "discard" }),
                e(D, { chord: "esc", action: W ? "cancel edit" : "later" }),
              ],
            })
          : null;
  return e(mr, {
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
          e(t, { dimColor: !0, children: "Loading\u2026" }),
        h === "list" &&
          g !== null &&
          J.length === 0 &&
          r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(t, { children: "No feedback drafts queued." }),
              e(t, {
                dimColor: !0,
                children:
                  "Claude drafts feedback at high-signal moments; drafts appear here for your review.",
              }),
              b
                ? r(o, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      e(nt, { isSelected: me }),
                      e(t, {
                        dimColor: !0,
                        children:
                          "/bug works anytime. Any other key closes this panel.",
                      }),
                    ],
                  })
                : e(t, {
                    dimColor: !0,
                    children: "Any key closes this panel.",
                  }),
            ],
          }),
        h === "list" &&
          g !== null &&
          J.length > 0 &&
          r(o, {
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
              b && e(o, { marginTop: 1, children: e(nt, { isSelected: me }) }),
              e(o, {
                marginTop: 1,
                children: e(t, {
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
          r(o, {
            flexDirection: "column",
            children: [
              r(o, {
                children: [
                  e(S, { isFocused: c === "type" }),
                  e(t, { children: "Type: " }),
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
              r(o, {
                children: [
                  e(S, { isFocused: c === "failure_mode" }),
                  e(t, { children: "Failure mode: " }),
                  e(se, {
                    value: Dt(u.failureMode),
                    isFocused: c === "failure_mode",
                  }),
                ],
              }),
              r(o, {
                children: [
                  e(S, { isFocused: c === "task_category" }),
                  e(t, { children: "Task: " }),
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
                  if (a > Z6t && a >= Buffer.byteLength(u.details, "utf8")) {
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
                ? r(o, {
                    flexDirection: "column",
                    children: [
                      r(o, {
                        children: [
                          e(S, { isFocused: c === "transcript" }),
                          e(t, { children: "Send transcript: " }),
                          e(se, {
                            value: j ? "yes" : "no",
                            isFocused: c === "transcript",
                          }),
                          r(t, {
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
                        e(o, {
                          marginLeft: 4,
                          children: r(t, {
                            dimColor: !0,
                            wrap: "wrap",
                            children: [
                              "from ",
                              an(s.cwd),
                              " \xB7 session",
                              " ",
                              an(s.source_session_id),
                            ],
                          }),
                        }),
                    ],
                  })
                : r(o, {
                    children: [
                      e(S, { isFocused: !1 }),
                      r(t, {
                        children: [
                          "Send transcript: ",
                          e(t, {
                            dimColor: !0,
                            children: "expired (report only)",
                          }),
                        ],
                      }),
                    ],
                  }),
              r(o, {
                marginTop: 1,
                children: [
                  e(S, { isFocused: !1 }),
                  r(t, {
                    dimColor: !0,
                    wrap: "wrap",
                    children: [
                      "Environment info (",
                      an(s.os),
                      ", v",
                      an(s.cli_version),
                      ",",
                      " ",
                      an(s.model),
                      s.effort !== void 0 &&
                        r(N, { children: [", effort", " ", an(s.effort)] }),
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
                                  x(s.subagent_count, "subagent"),
                                ],
                              }),
                          ],
                        }),
                      ", drafted ",
                      it(s.created_at),
                      " ago)",
                      Ke > 0
                        ? ` and ${Ke} API request ${x(Ke, "id")} are`
                        : " is",
                      " ",
                      "always attached.",
                    ],
                  }),
                ],
              }),
              st && e(o, { marginTop: 1, children: e(Ur, { error: st }) }),
              r(o, {
                marginTop: 1,
                children: [
                  e(S, { isFocused: c === "send" }),
                  e(t, { bold: c === "send", children: "Send feedback" }),
                ],
              }),
              e(o, {
                marginTop: 1,
                children: e(t, {
                  dimColor: !0,
                  wrap: "wrap",
                  children:
                    "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config.",
                }),
              }),
            ],
          }),
        h === "submitting" && e(t, { children: "Sending feedback\u2026" }),
        h === "receipt" &&
          r(o, {
            flexDirection: "column",
            children: [
              r(t, {
                color: "success",
                children: [
                  e(et, { status: "success", withSpace: !0 }),
                  "Feedback sent (receipt ",
                  ot,
                  "). Thanks!",
                ],
              }),
              e(o, {
                marginTop: 1,
                children: e(t, {
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
var Te = `That edit would push Details past the ${Math.floor(Z6t / 1024)}KB limit. Trim the details first.`;
function Tt(m, y) {
  return up(
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
    .map((w) => Sn(w))
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
    ft = At ? `${L.pointer} ` : "  ";
  let Lt;
  if (wn[0] !== ut || wn[1] !== ft)
    ((Lt = e(t, { color: ut, children: ft })),
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
      ((ye = e(t, { dimColor: !0, children: ee })), (Pe[0] = ee), (Pe[1] = ye));
    else ye = Pe[1];
    return ye;
  }
  let ye;
  if (Pe[2] === p)
    ((ye = r(t, { dimColor: !0, children: [L.triangleLeft, " "] })),
      (Pe[2] = ye));
  else ye = Pe[2];
  let It;
  if (Pe[3] === p)
    ((It = r(t, { dimColor: !0, children: [" ", L.triangleRight] })),
      (Pe[3] = It));
  else It = Pe[3];
  let Ot;
  if (Pe[4] !== ee)
    ((Ot = r(t, { children: [ye, ee, It] })), (Pe[4] = ee), (Pe[5] = Ot));
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
    we = tn(),
    Ue;
  if (ke[0] !== ne)
    ((Ue = e(S, { isFocused: ne })), (ke[0] = ne), (ke[1] = Ue));
  else Ue = ke[1];
  let je;
  if (ke[2] !== mt) ((je = e(t, { children: mt })), (ke[2] = mt), (ke[3] = je));
  else je = ke[3];
  let He;
  if (ke[4] !== Ue || ke[5] !== je)
    ((He = r(o, { children: [Ue, je] })),
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
    ((Ve = e(o, {
      marginLeft: 4,
      children: ne
        ? e(o, {
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
          ? e(m6e, { value: te, bold: $e, dim: qe, columns: be })
          : e(t, { bold: $e, dimColor: qe, wrap: "wrap", children: an(te) }),
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
    ((Kt = r(o, { flexDirection: "column", children: [He, Ve] })),
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
    kt = Nt ? `${L.pointer} ` : "  ";
  let Pt;
  if (_n[0] !== wt || _n[1] !== kt)
    ((Pt = e(o, {
      marginLeft: 1,
      children: r(t, { color: wt, children: [kt, "+ Write new feedback"] }),
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
    ((Je = e(t, { bold: !0, children: xt })), (Xe[0] = xt), (Xe[1] = Je));
  else Je = Xe[1];
  let ze;
  if (Xe[2] !== Ce || Xe[3] !== Ct || Xe[4] !== xe) {
    let ve;
    if (Xe[6] !== Ce || Xe[7] !== xe)
      ((ve = (ie, Fn) => {
        let $t = xe + Fn === Ce;
        return e(
          o,
          {
            marginLeft: 1,
            children: r(t, {
              color: $t ? "suggestion" : void 0,
              wrap: "truncate-end",
              children: [
                $t ? `${L.pointer} ` : "  ",
                "[",
                tt[ie.type],
                "]",
                " ",
                an(ie.title),
                " ",
                r(t, {
                  dimColor: !0,
                  children: [
                    it(ie.created_at),
                    " \xB7",
                    " ",
                    an(ie.cwd),
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
    ((ve = r(o, { flexDirection: "column", children: [Je, ze] })),
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
export { r0e };

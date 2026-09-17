// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 228 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ze, VP } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { isBgSession, isUnattendedBgSession, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { jn, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { truncateToWidth } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { io, cnt, Xkt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { mS } from "../权限系统/chunk-e4pfvp7x.js";
import { o, t, ko, Un } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { z_ } from "../终端-剪贴板/终端-剪贴板.e33btqf0.js";
import { yln } from "../../01-核心基础设施/共享小工具-未细化/chunk-pw4nttt4.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nvfdjg8e.js";
import "../语法高亮-Markdown渲染/语法高亮-Markdown渲染.jhbtay9y.js";
import {
  Nue,
  BS,
  Hy,
  asSystemPrompt,
  getLastCacheSafeParams,
  Vc,
  Re,
  ya,
  j_,
  hC,
  VS,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-05js9xfq.js";
import { Td } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { createAbortController } from "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-5mzs51m4.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { js } from "../语法高亮-Markdown渲染/chunk-wj93jy9j.js";
import { $8 } from "../../00-第三方库/_未识别/React组件(TUI视图)/React组件(TUI视图).ym1wn9mq.js";
import { j_e, HB } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { oat, sat, EOt, AOt, COt, vOt, ROt } from "../文本编辑-输入缓冲/文本编辑-输入缓冲.vge66r1j.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import { IS } from "../../03-入口与运行时/会话UI(REPL)/chunk-vwjrfkgt.js";
import { runSideQuestion } from "../权限系统/chunk-qjqc5vxm.js";
import { Ur } from "../../01-核心基础设施/共享小工具-未细化/chunk-qhcr4b0p.js";
import { o4 } from "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-wst7w7tj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-s339rbnn.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { kv } from "../../01-核心基础设施/共享小工具-未细化/chunk-mnzfncps.js";
import { re, E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { Ci } from "../../01-核心基础设施/共享小工具-未细化/chunk-w8hsca1t.js";
import { s, se, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
var wt = 5,
  bt = 6,
  qe = 3,
  $e = 5,
  kt = m(() =>
    c({
      response: s().nullable(),
      synthetic: se()
        .optional()
        .transform((i) => i === !0),
      refusal_fallback: c({
        original_model: s(),
        fallback_model: s(),
        content: s(),
      })
        .optional()
        .catch(void 0),
    }),
  );
function ve({
  question: i,
  initialResponse: u,
  initialFallbackNotice: h,
  inFlight: B,
  context: x,
  onDone: b,
}) {
  let R = C(!1),
    w = re(
      (a, A) => {
        ((R.current = !0), b(a, A));
      },
      [b],
    ),
    [T, Ye] = d(u ?? null),
    [Fe, Ze] = d(!1),
    [te, tt] = d(h ?? null),
    [ne, rt] = d(null),
    [nt, de] = d(null),
    [ot, st] = d(0),
    k = x.session.btwHistory,
    [U, it] = d(() =>
      u !== void 0
        ? k.exchanges.slice(0, -1)
        : k.exchanges.filter((a) => a !== B?.landed),
    ),
    z = C(U),
    K = C(!1),
    [Ie, Me] = d(!1),
    P = C(null),
    [Q, Pe] = d(null),
    [Ne] = d(AOt),
    [G, me] = d(null),
    X = C(!1),
    oe = C(B ?? null),
    [De] = d(() => ({})),
    ie = C(u === void 0 ? "pending" : "answered"),
    V = C(null),
    pe = () => {
      ((P.current = null), Pe(null), V.current?.scrollTo(0));
    },
    [ge, Ee] = d(0),
    { rows: at, columns: lt } = ks(Se()),
    ye = jn(),
    J = isBgSession() && !ye;
  (ko(() => st((a) => a + 1), T || ne ? null : 80),
    Un(() => Ee(0), ge ? 2000 : null, [ge]),
    Un(() => me(null), G ? oat : null, [G]));
  let ae = re(() => {
    if (R.current) return;
    switch (ie.current) {
      case "pending":
        if (((X.current = !0), oe.current))
          (k.setInFlight(oe.current), j(k, oe.current, !0));
        break;
      case "answered":
        j(k, De, !0);
        break;
      case "nothing":
        break;
    }
    w(void 0, { display: "skip" });
  }, [k, w, De]);
  function he(a, A = !1) {
    let f = z.current.length,
      S = Math.min(f, $e),
      g = P.current === null ? 0 : f - P.current,
      L = a === "older" ? 1 : -1,
      Y = A ? (g + L + S + 1) % (S + 1) : Math.min(Math.max(g + L, 0), S);
    if (Y === g) return;
    ((P.current = Y === 0 ? null : f - Y),
      Pe(P.current),
      V.current?.scrollTo(0));
  }
  E(() => {
    if (!J) return;
    let a = !fe(),
      A = VP(() => {
        let f = !fe();
        if (a && !f && !K.current) ae();
        a = f;
      });
    if (!a && !K.current) ae();
    return A;
  }, [J, ae]);
  function ct(a) {
    if (K.current) {
      a.preventDefault();
      return;
    }
    let A = P.current !== null ? z.current[P.current]?.response : T;
    if (
      a.key === "escape" ||
      a.key === "return" ||
      a.key === " " ||
      (a.ctrl && (a.key === "c" || a.key === "d"))
    ) {
      (a.preventDefault(), w(void 0, { display: "skip" }));
      return;
    }
    if ((a.key === "[" || a.key === "]") && !a.ctrl && !a.meta) {
      (a.preventDefault(), he(a.key === "[" ? "older" : "newer"));
      return;
    }
    if (a.name === "tab" && !a.ctrl && !a.meta) {
      (a.preventDefault(), he(a.shift ? "newer" : "older", !0));
      return;
    }
    if (a.name === "left" || a.name === "right") {
      if (
        (a.preventDefault(),
        a.shift && !(a.ctrl || a.meta || a.fn || a.superKey))
      ) {
        he(a.name === "left" ? "older" : "newer");
        return;
      }
      if (J && a.name === "left" && !(a.ctrl || a.meta || a.fn || a.superKey)) {
        let f = Date.now(),
          S = COt(Ne, f, a.soloKeypress);
        switch ((vOt(Ne, S, f), ROt(S, f), S)) {
          case "fire":
            (ae(), HB());
            return;
          case "arm":
            me({ text: sat });
            return;
          case "attach-arm":
            me({ text: EOt });
            return;
          case "absorb":
          case "attach-absorb":
          case "reject":
            return;
        }
      }
      return;
    }
    if (a.key === "x" && !a.ctrl && !a.meta && z.current.length > 0) {
      a.preventDefault();
      let f = new Set(z.current);
      (k.replace(k.exchanges.filter((S) => !f.has(S))),
        (z.current = []),
        it([]),
        pe());
      return;
    }
    if (a.key === "c" && !a.ctrl && !a.meta && A) {
      (a.preventDefault(),
        z_(Td(A)).then((f) => {
          if (f) process.stdout.write(f);
        }),
        Ee((f) => f + 1));
      return;
    }
    if (
      a.key === "f" &&
      !a.ctrl &&
      !a.meta &&
      T &&
      !Fe &&
      !ye &&
      P.current === null
    ) {
      (a.preventDefault(), (K.current = !0), Me(!0));
      let f = [
          Re({ content: i }),
          Vc({
            content: te
              ? `\u26A0 ${te}

${T}`
              : T,
          }),
        ],
        S = () => {
          ((K.current = !1), Me(!1));
        };
      if (!Ci())
        Promise.all([
          import("../权限系统/chunk-asdzywd2.js"),
          import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
        ])
          .then(
            ([{ spawnForkFromDirective: g }, { hasPermissionsToUseTool: L }]) =>
              g(i, x, x.canUseTool ?? L, f, "btw"),
          )
          .then((g) => {
            if (g)
              w(`${mS} forked ${g.name} (${g.agentId.slice(-4)})`, {
                display: "system",
              });
            else
              (S(),
                w("Cannot fork before the first conversation turn", {
                  display: "system",
                }));
          })
          .catch((g) => {
            (S(), w(`Failed to fork: ${l(g)}`));
          });
      else
        import("../会话-历史-恢复/branch-cmd.36vyfzw0.js")
          .then(({ branchAndResume: g }) =>
            g(x, w, {
              customTitle: Be(`btw: ${i}`, 80),
              extraMessages: f,
            }).then((L) => {
              if (!L) S();
            }),
          )
          .catch((g) => {
            (S(), w(`Failed to branch conversation: ${l(g)}`));
          });
      return;
    }
    if (a.key === "up" || (a.ctrl && a.key === "p"))
      (a.preventDefault(), V.current?.scrollBy(-qe));
    if (a.key === "down" || (a.ctrl && a.key === "n"))
      (a.preventDefault(), V.current?.scrollBy(qe));
  }
  E(() => {
    if (u !== void 0) return;
    let a = createAbortController(),
      A = k.inFlight,
      f = B ?? (A?.question === i ? A : void 0),
      S = () => {},
      g = f ?? {
        question: i,
        settled: new Promise((y) => {
          S = y;
        }),
        abort: () => a.abort(),
      };
    if (
      ((oe.current = g),
      (g.onRetry = de),
      f?.retry && f.retry.retryAt > Date.now())
    )
      de(f.retry);
    if (X.current) (k.setInFlight(g), j(k, g, !0));
    n(
      `[btw] panel mounted: ${f ? "adopting the running side question" : "asking"}`,
    );
    async function L() {
      let y = jn();
      if (y && !Ks())
        return {
          error: y.viewerOnly
            ? "Side questions aren't available when viewing a session read-only"
            : "This remote connection doesn't support side questions",
        };
      let v = y
        ? kv(
            "side_question",
            kt(),
            await y.sendControlRequest(
              { subtype: "side_question", question: i },
              {
                signal: a.signal,
                onProgress: (be) => {
                  if (a.signal.aborted) return;
                  let ke = Ct(be);
                  if (ke) ((g.retry = ke), g.onRetry?.(ke));
                },
              },
            ),
          )
        : await runSideQuestion({
            question: i,
            cacheSafeParams: await Je(x),
            parentController: a,
            onRetry: (be) => {
              if (a.signal.aborted) return;
              Qe(g, be);
            },
          });
      if (a.signal.aborted) return null;
      if (v === null)
        return {
          error: "The remote session sent a reply this version can't display",
        };
      if (!v.response) return xe(v.response);
      let Oe =
        !y && "refusalFallback" in v
          ? v.refusalFallback
          : "refusal_fallback" in v &&
              v.refusal_fallback &&
              typeof v.refusal_fallback.content === "string"
            ? {
                originalModel: v.refusal_fallback.original_model,
                fallbackModel: v.refusal_fallback.fallback_model,
                content: io(v.refusal_fallback.content, {
                  drop: Xkt,
                  maxCodeUnits: cnt,
                }),
              }
            : void 0;
      if (y && !v.synthetic)
        x.session.btwHistory.append(i, v.response, Oe?.content);
      return xe(v.response, v.synthetic, Oe?.content);
    }
    async function Y() {
      let y;
      if (f) ((y = await f.settled), k.clearInFlight(f));
      else {
        try {
          y = await L();
        } catch (v) {
          y = a.signal.aborted ? null : Ge(v);
        }
        if (
          (n(
            `[btw] side question settled: ${y === null ? "cancelled" : "error" in y ? "error" : "answer"}${X.current ? " (panel had stepped aside)" : ""}`,
          ),
          y !== null && "response" in y && !y.synthetic)
        )
          g.landed = k.exchanges.at(-1);
        (S(y), k.clearInFlight(g));
      }
      if (y === null) return;
      if ("error" in y) {
        dt(y.error);
        return;
      }
      if ((pe(), Ye(y.response), Ze(y.synthetic), y.fallbackNotice))
        tt(y.fallbackNotice);
      if (y.synthetic) He("came back synthetic");
      else ie.current = "answered";
    }
    function He(y) {
      if (((ie.current = "nothing"), X.current))
        (_e(k, g),
          n(`[btw] side question ${y} after the panel stepped aside`, {
            level: "warn",
          }));
    }
    function dt(y) {
      (He("failed"), pe(), rt(y));
    }
    return (
      Y(),
      () => {
        if (g.onRetry === de) g.onRetry = void 0;
        if (X.current) return;
        if (R.current) {
          (g.abort(), k.clearInFlight(g), _e(k, g));
          return;
        }
        if (ie.current === "pending")
          (n("[btw] panel torn down undismissed; question handed on"),
            k.setInFlight(g));
      }
    );
  }, [i, x, k, u, B]);
  let we = U.slice(-$e),
    le = U.length - we.length,
    M = Q !== null ? U[Q] : null,
    ut = we.length + (le > 0 ? 1 : 0),
    Le = Math.max(20, lt - 7),
    ft = Math.max(5, at - wt - bt - ut);
  return r(o, {
    flexDirection: "column",
    paddingLeft: 2,
    marginTop: 1,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: ct,
    children: [
      le > 0 && r(t, { dimColor: !0, children: ["(+", le, " earlier /btw)"] }),
      we.map((a, A) => {
        let f = le + A;
        return r(
          t,
          {
            dimColor: Q !== f,
            bold: Q === f,
            children: ["/btw ", Be(a.question, Le)],
          },
          f,
        );
      }),
      r(t, {
        children: [
          r(t, {
            color: M ? void 0 : "warning",
            bold: !M,
            dimColor: !!M,
            children: ["/btw", " "],
          }),
          e(t, { dimColor: !0, children: Be(i, Le) }),
        ],
      }),
      e(o, {
        marginTop: 1,
        marginLeft: 2,
        maxHeight: ft,
        children: e(IS, {
          ref: V,
          flexDirection: "column",
          flexGrow: 1,
          stickyScroll: !1,
          children: M
            ? r(N, {
                children: [
                  M.fallbackNotice && e(Ae, { notice: M.fallbackNotice }),
                  e(js, { children: M.response }),
                ],
              })
            : ne
              ? e(Ur, { error: ne })
              : T
                ? r(N, {
                    children: [
                      te && e(Ae, { notice: te }),
                      e(js, { children: T }),
                    ],
                  })
                : e(Ve, { frame: ot, retry: nt }),
        }),
      }),
      r(o, {
        marginTop: 1,
        children: [
          Ie
            ? e(t, { dimColor: !0, children: "Forking\u2026" })
            : G
              ? e(t, { dimColor: !0, children: G.text })
              : r(t, {
                  dimColor: !0,
                  children: [
                    r(ue, {
                      children: [
                        U.length > 0
                          ? e(D, {
                              chord: ["shift+left", "shift+right"],
                              format: {
                                modCase: "glyph",
                                modSep: "",
                                arrowSep: "/",
                              },
                              action: "browse",
                            })
                          : (M || T || ne) &&
                            e(D, { chord: ["up", "down"], action: "scroll" }),
                        (M || T) &&
                          (ge > 0
                            ? e(t, {
                                color: "success",
                                children: "Copied to clipboard",
                              })
                            : e(D, { chord: "c", action: "copy" })),
                        T &&
                          !Fe &&
                          !ye &&
                          Q === null &&
                          e(D, { chord: "f", action: "fork" }),
                        U.length > 0 &&
                          e(D, { chord: "x", action: "clear history" }),
                        e(D, { chord: "escape", action: "close" }),
                      ],
                    }),
                    J && " \xB7 ",
                  ],
                }),
          !Ie && !G && J && e(j_e, {}),
        ],
      }),
    ],
  });
}
function Qe(i, u) {
  let h = { ...u, retryAt: Date.now() + u.retryInMs };
  ((i.retry = h), i.onRetry?.(h));
}
function xe(i, u, h) {
  if (!i) return { error: "No response received" };
  return { response: i, synthetic: u ?? !1, ...(h && { fallbackNotice: h }) };
}
function Ge(i) {
  return { error: l(i) || "Failed to get response" };
}
function fe() {
  return isUnattendedBgSession() || (isBgSession() && yln());
}
function Rt(i) {
  i.clearPendingReopen();
  for (let u of i.pendingBesidesTop()) j(i, u);
  if (i.reopenNow()) {
    Hy(ee);
    return;
  }
  if (Nue().some(ee)) return;
  BS({ ...ce, agentId: ze() });
}
function _e(i, u) {
  if ((i.clearPendingReopen(u), !i.inFlight && i.exchanges.length === 0))
    Hy(ee);
}
var ce = {
  value: "/btw",
  mode: "task-notification",
  priority: "later",
  origin: { kind: "task-notification" },
};
function ee(i) {
  return (
    i.value === ce.value &&
    i.mode === ce.mode &&
    i.origin?.kind === ce.origin.kind
  );
}
function j(i, u, h = fe()) {
  if (
    (i.armReopen(u, () =>
      VP(() => {
        if (yln()) i.reopenAway = !0;
        if (isUnattendedBgSession()) {
          i.reopenAway = !0;
          return;
        }
        if (i.reopenAway) ((i.reopenAway = !1), queueMicrotask(() => Rt(i)));
      }),
    ),
    h)
  )
    i.reopenAway = !0;
}
function Ae(pr) {
  let mt = _(3),
    { notice: Ue } = pr,
    pt;
  if (mt[0] === p)
    ((pt = e(t, {
      color: "warning",
      bold: !0,
      children: e(et, { status: "warning", withSpace: !0 }),
    })),
      (mt[0] = pt));
  else pt = mt[0];
  let gt;
  if (mt[1] !== Ue)
    ((gt = r(o, {
      marginBottom: 1,
      children: [pt, e($8, { color: "warning", bold: !0, children: Ue })],
    })),
      (mt[1] = Ue),
      (mt[2] = gt));
  else gt = mt[2];
  return gt;
}
function Be(i, u) {
  return truncateToWidth(i.replace(/\s+/g, " ").trim(), u);
}
function Ct(i) {
  if (
    i.status !== "api_retry" ||
    typeof i.attempt !== "number" ||
    typeof i.max_retries !== "number" ||
    typeof i.retry_delay_ms !== "number"
  )
    return null;
  return {
    retryAttempt: i.attempt,
    maxRetries: i.max_retries,
    retryInMs: i.retry_delay_ms,
    status: i.error_status ?? void 0,
    retryAt: Date.now() + i.retry_delay_ms,
  };
}
function Ve(gr) {
  let O = _(19),
    { frame: Z, retry: I } = gr;
  if (!I) {
    let H;
    if (O[0] !== Z)
      ((H = e(o4, { frame: Z, messageColor: "warning" })),
        (O[0] = Z),
        (O[1] = H));
    else H = O[1];
    let W;
    if (O[2] === p)
      ((W = e(t, { color: "warning", children: "Answering\u2026" })),
        (O[2] = W));
    else W = O[2];
    let q;
    if (O[3] !== H) ((q = r(o, { children: [H, W] })), (O[3] = H), (O[4] = q));
    else q = O[4];
    return q;
  }
  let We = Math.max(0, Math.ceil((I.retryAt - Date.now()) / 1000)),
    H;
  if (O[5] !== Z)
    ((H = e(o4, { frame: Z, messageColor: "warning" })),
      (O[5] = Z),
      (O[6] = H));
  else H = O[6];
  let W;
  if (O[7] !== I.status) ((W = je(I.status)), (O[7] = I.status), (O[8] = W));
  else W = O[8];
  let q;
  if (O[9] !== W)
    ((q = e(t, { color: "warning", children: W })), (O[9] = W), (O[10] = q));
  else q = O[10];
  let Ce;
  if (O[11] !== We || O[12] !== I.maxRetries || O[13] !== I.retryAttempt)
    ((Ce = r(t, {
      dimColor: !0,
      children: [
        " \xB7 retrying in ",
        We,
        "s \xB7 attempt ",
        I.retryAttempt,
        "/",
        I.maxRetries,
      ],
    })),
      (O[11] = We),
      (O[12] = I.maxRetries),
      (O[13] = I.retryAttempt),
      (O[14] = Ce));
  else Ce = O[14];
  let yt;
  if (O[15] !== H || O[16] !== q || O[17] !== Ce)
    ((yt = r(o, { children: [H, q, Ce] })),
      (O[15] = H),
      (O[16] = q),
      (O[17] = Ce),
      (O[18] = yt));
  else yt = O[18];
  return yt;
}
function je(i) {
  switch (i) {
    case 429:
      return "Rate limited";
    case 529:
      return "API overloaded";
    case 401:
    case 403:
      return "Authentication failed";
    default:
      return "API error";
  }
}
function St(i) {
  let u = i.at(-1);
  if (u?.type === "assistant" && u.message.stop_reason === null)
    return i.slice(0, -1);
  return i;
}
async function Je(i) {
  let u = ya(St(i.messages)),
    h = getLastCacheSafeParams();
  if (h)
    return {
      systemPrompt: h.systemPrompt,
      userContext: h.userContext,
      systemContext: h.systemContext,
      toolUseContext: i,
      forkContextMessages: u,
      advisorModel: i.getAdvisorSetting(),
    };
  let [B, x, b] = await Promise.all([
    VS(i.options.tools, i.options.mainLoopModel, []),
    hC(i.session, i.storageV5, i.credentials),
    j_(i.session, i.options.cacheBreakerPhrase),
  ]);
  return {
    systemPrompt: asSystemPrompt(B),
    userContext: x,
    systemContext: b,
    toolUseContext: i,
    forkContextMessages: u,
    advisorModel: i.getAdvisorSetting(),
  };
}
async function dr(i, u, h) {
  let B = h?.trim();
  if (!B) {
    let b = u.session.btwHistory,
      R = b.inFlight,
      w = b.exchanges.at(-1);
    if ((R || w) && Ke())
      return (j(b, w ?? R ?? b), i(void 0, { display: "skip" }), null);
    if ((Hy(ee), R))
      return e(ve, {
        question: R.question,
        inFlight: R,
        context: u,
        onDone: i,
      });
    if (!w)
      return (i("Usage: /btw <your question>", { display: "system" }), null);
    return e(ve, {
      question: w.question,
      initialResponse: w.response,
      initialFallbackNotice: w.fallbackNotice,
      context: u,
      onDone: i,
    });
  }
  if (
    (await Te((b) => ({ ...b, btwUseCount: b.btwUseCount + 1 }), u.storageV5),
    Ke())
  )
    return (vt(B, u), i(void 0, { display: "skip" }), null);
  let x = u.session.btwHistory.inFlight;
  if (x === null || x.question === B) Hy(ee);
  return e(ve, { question: B, context: u, onDone: i });
}
function Ke() {
  return jn() === null && fe();
}
async function vt(i, u) {
  let h = u.session.btwHistory,
    B = createAbortController(),
    x = () => {},
    b = {
      question: i,
      settled: new Promise((w) => {
        x = w;
      }),
      abort: () => B.abort(),
    };
  (h.setInFlight(b), j(h, b));
  let R;
  try {
    let w = await runSideQuestion({
      question: i,
      cacheSafeParams: await Je(u),
      parentController: B,
      onRetry: (T) => Qe(b, T),
    });
    R = B.signal.aborted
      ? null
      : xe(w.response, w.synthetic, w.refusalFallback?.content);
  } catch (w) {
    R = B.signal.aborted ? null : Ge(w);
  }
  if (R !== null && "response" in R && !R.synthetic)
    b.landed = h.exchanges.at(-1);
  if ((x(R), h.clearInFlight(b), b.landed)) return;
  (_e(h, b),
    n(
      `[btw] unwatched side question ${R === null ? "was cancelled" : "error" in R ? "failed" : "came back synthetic"}`,
      { level: "warn" },
    ));
}
export { dr as call };

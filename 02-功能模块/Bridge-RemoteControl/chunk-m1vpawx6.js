// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Cje } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum as u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { withFeatureTelemetry as Sr } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { Iu, l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { fetchCodeSessionsFromSessionsAPI as Uvn, si } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { truncateToWidth as Xe, formatRelativeTime as I1 } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { Ee } from "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { She } from "../Git-Worktree/chunk-bk9696gx.js";
import { teleportResumeCodeSession as Wne } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Ne } from "../../01-核心基础设施/共享小工具-未细化/chunk-eebsvd7r.js";
import { D } from "../键位绑定(Keybindings)/chunk-j7q2s4h6.js";
import { Se } from "../../01-核心基础设施/共享小工具-未细化/chunk-mb654mj6.js";
import { ks } from "../../01-核心基础设施/共享小工具-未细化/chunk-4ctm4frf.js";
import { Zr } from "../../01-核心基础设施/共享小工具-未细化/chunk-jhstj6d7.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { ue } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { yo } from "../状态栏-主题/chunk-jrr487ty.js";
import { tit } from "../云会话-Teleport/chunk-eq05pssv.js";
import { $n } from "../../01-核心基础设施/共享小工具-未细化/chunk-dz9yaz9k.js";
import { je } from "../../01-核心基础设施/共享小工具-未细化/chunk-7ejhgecr.js";
import { kh } from "../../01-核心基础设施/共享小工具-未细化/chunk-tw8akhx1.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { re, E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
function G(de) {
  let Te = _(8),
    [me, pe] = d(!1),
    [fe, ge] = d(null),
    [xe, xo] = d(null),
    He;
  if (Te[0] !== de)
    ((He = async (Q) => {
      (pe(!0),
        ge(null),
        xo(Q),
        i("tengu_teleport_resume_session", {
          source: u(de),
          session_id: Ee(Q.id),
        }));
      try {
        let To = await Sr("teleport_resume", () => Wne(Q.id));
        return (Cje({ sessionId: Q.id }), pe(!1), To);
      } catch (X) {
        let K = X;
        let Co = {
          message: K instanceof Iu ? K.message : l(K),
          formattedMessage: K instanceof Iu ? K.formattedMessage : void 0,
          isOperationError: K instanceof Iu,
        };
        return (ge(Co), pe(!1), null);
      }
    }),
      (Te[0] = de),
      (Te[1] = He));
  else He = Te[1];
  let Ce = He,
    X;
  if (Te[2] === p)
    ((X = () => {
      ge(null);
    }),
      (Te[2] = X));
  else X = Te[2];
  let ho = X,
    We;
  if (Te[3] !== fe || Te[4] !== me || Te[5] !== Ce || Te[6] !== xe)
    ((We = {
      resumeSession: Ce,
      isResuming: me,
      error: fe,
      selectedSession: xe,
      clearError: ho,
    }),
      (Te[3] = fe),
      (Te[4] = me),
      (Te[5] = Ce),
      (Te[6] = xe),
      (Te[7] = We));
  else We = Te[7];
  return We;
}
F();
var he = "Updated",
  ye = "Origin",
  Re = "Remote Control",
  Z = Math.max(ye.length, Re.length),
  L = "  ";
function ee({ onSelect: h, onCancel: a, isEmbedded: C = !1 }) {
  let { rows: I, columns: y } = ks(Se()),
    [g, O] = d([]),
    [m, k] = d(null),
    [R, c] = d(!0),
    [b, P] = d(null),
    [ke, ne] = d(!1),
    [Le, ie] = d(!1),
    [Me, Fe] = d(1),
    se = Zr("confirm:no", "Confirmation", "Esc"),
    W = re(async () => {
      try {
        (c(!0), P(null));
        let s = await She();
        (k(s), n(`Current repository: ${s || "not detected"}`));
        let f = await Uvn(),
          S = f;
        if (s)
          ((S = f.filter((v) => {
            if (!v.repo) return !1;
            return `${v.repo.owner.login}/${v.repo.name}` === s;
          })),
            n(
              `Filtered ${S.length} sessions for repo ${s} from ${f.length} total`,
            ));
        let V = [...S].sort((v, J) => {
          let qe = new Date(v.updated_at);
          return new Date(J.updated_at).getTime() - qe.getTime();
        });
        O(V);
      } catch (s) {
        let f = s instanceof Error ? s.message : String(s);
        (n(`Error loading code sessions: ${f}`), P(Ye(f)));
      } finally {
        (c(!1), ne(!1));
      }
    }, []),
    Oe = () => {
      (ne(!0), W());
    };
  Ne("confirm:no", a, { context: "Confirmation" });
  function A(s) {
    if (s.ctrl && s.key === "c") {
      (s.preventDefault(), a());
      return;
    }
    if (s.ctrl && s.key === "r" && b) {
      (s.preventDefault(), Oe());
      return;
    }
    if (b !== null && s.key === "return") {
      (s.preventDefault(), a());
      return;
    }
  }
  let Pe = re(() => {
    (ie(!0), W());
  }, [ie, W]);
  if (!Le) return e(tit, { onComplete: Pe });
  if (R)
    return e(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: A,
      children: e($n, {
        message: "Loading Claude Code sessions\u2026",
        bold: !0,
        subtitle: ke
          ? "Retrying\u2026"
          : "Fetching your Claude Code sessions\u2026",
      }),
    });
  if (b)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: A,
      children: [
        e(t, {
          bold: !0,
          color: "error",
          children: "Error loading Claude Code sessions",
        }),
        ze(b),
        r(t, {
          dimColor: !0,
          children: [
            "Press ",
            e(t, { bold: !0, children: "Ctrl+R" }),
            " to retry \xB7 Press",
            " ",
            e(t, { bold: !0, children: se }),
            " to cancel",
          ],
        }),
      ],
    });
  if (g.length === 0)
    return r(o, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: A,
      children: [
        r(t, {
          bold: !0,
          children: [
            "No Claude Code sessions found",
            m && r(t, { children: [" for ", m] }),
          ],
        }),
        e(o, {
          marginTop: 1,
          children: r(t, {
            dimColor: !0,
            children: [
              "Press ",
              e(t, { bold: !0, children: se }),
              " to cancel",
            ],
          }),
        }),
      ],
    });
  let le = g.map((s) => ({ ...s, timeString: I1(new Date(s.updated_at)) })),
    Y = Math.max(he.length, ...le.map((s) => s.timeString.length)),
    j = g.some((s) => s.environment_kind === "bridge"),
    Ke = j ? Z + L.length : 0,
    ae = String(g.length).length + 2,
    Ae = y - 4 - ae - Y - L.length - Ke,
    ce = le.map(({ timeString: s, title: f, id: S, environment_kind: V }) => {
      let v = s.padEnd(Y, " ");
      return {
        label: r(N, {
          children: [
            v,
            L,
            j &&
              r(N, {
                children: [
                  e(t, {
                    dimColor: !0,
                    children: (V === "bridge" ? Re : "").padEnd(Z, " "),
                  }),
                  L,
                ],
              }),
            Xe(si(f).replace(/\s+/g, " ").trim(), Ae),
          ],
        }),
        value: S,
      };
    }),
    z = 7,
    U = Math.max(
      1,
      C ? Math.min(g.length, 5, I - 6 - z) : Math.min(g.length, I - 1 - z),
    ),
    Ge = U + z,
    $e = g.length > U;
  return r(o, {
    flexDirection: "column",
    padding: 1,
    height: Ge,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: A,
    children: [
      r(t, {
        bold: !0,
        children: [
          "Select a session to resume",
          $e &&
            r(t, {
              dimColor: !0,
              children: [" ", "(", Me, " of ", g.length, ")"],
            }),
          m && r(t, { dimColor: !0, children: [" (", m, ")"] }),
          ":",
        ],
      }),
      r(o, {
        flexDirection: "column",
        marginTop: 1,
        flexGrow: 1,
        children: [
          e(o, {
            marginLeft: 2 + ae,
            children: r(t, {
              bold: !0,
              children: [
                he.padEnd(Y, " "),
                L,
                j && ye.padEnd(Z, " ") + L,
                "Session Title",
              ],
            }),
          }),
          e(ve, {
            visibleOptionCount: U,
            options: ce,
            onChange: (s) => {
              let f = g.find((S) => S.id === s);
              if (f) h(f);
            },
            onFocus: (s) => {
              let f = ce.findIndex((S) => S.value === s);
              if (f >= 0) Fe(f + 1);
            },
          }),
        ],
      }),
      e(o, {
        flexDirection: "row",
        children: e(t, {
          dimColor: !0,
          children: r(ue, {
            children: [
              e(D, { chord: ["up", "down"], action: "select" }),
              e(D, { chord: "enter", action: "confirm" }),
              e(je, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Ye(h) {
  let a = h.toLowerCase();
  if (a.includes("fetch") || a.includes("network") || a.includes("timeout"))
    return "network";
  if (
    a.includes("auth") ||
    a.includes("token") ||
    a.includes("permission") ||
    a.includes("oauth") ||
    a.includes("not authenticated") ||
    a.includes("/login") ||
    a.includes("console account") ||
    a.includes("403")
  )
    return "auth";
  if (
    a.includes("api") ||
    a.includes("rate limit") ||
    a.includes("500") ||
    a.includes("529")
  )
    return "api";
  return "other";
}
function ze(h) {
  switch (h) {
    case "network":
      return e(o, {
        marginY: 1,
        flexDirection: "column",
        children: e(t, {
          dimColor: !0,
          children: "Check your internet connection",
        }),
      });
    case "auth":
      return r(o, {
        marginY: 1,
        flexDirection: "column",
        children: [
          e(t, {
            dimColor: !0,
            children: "Teleport requires a Claude account",
          }),
          r(t, {
            dimColor: !0,
            children: [
              "Run ",
              e(t, { bold: !0, children: "/login" }),
              ' and select "Claude account with subscription"',
            ],
          }),
        ],
      });
    case "api":
      return e(o, {
        marginY: 1,
        flexDirection: "column",
        children: e(t, {
          dimColor: !0,
          children: "Sorry, Claude encountered an error",
        }),
      });
    case "other":
      return e(o, {
        marginY: 1,
        flexDirection: "row",
        children: e(t, {
          dimColor: !0,
          children: "Sorry, Claude Code encountered an error",
        }),
      });
  }
}
function tye(et) {
  let T = _(30),
    {
      onComplete: be,
      onCancel: De,
      onError: w,
      isEmbedded: Ue,
      source: q,
    } = et,
    we = Ue === void 0 ? !1 : Ue,
    { resumeSession: Be, isResuming: ot, error: x, selectedSession: oe } = G(q),
    Ve,
    Je;
  if (T[0] !== q)
    ((Ve = () => {
      i("tengu_teleport_started", { source: u(q) });
    }),
      (Je = [q]),
      (T[0] = q),
      (T[1] = Ve),
      (T[2] = Je));
  else ((Ve = T[1]), (Je = T[2]));
  E(Ve, Je);
  let Qe;
  if (T[3] !== x || T[4] !== be || T[5] !== w || T[6] !== Be)
    ((Qe = async (tt) => {
      let Ze = await Be(tt);
      if (Ze) be(Ze);
      else if (x) {
        if (w) w(x.message, x.formattedMessage);
      }
    }),
      (T[3] = x),
      (T[4] = be),
      (T[5] = w),
      (T[6] = Be),
      (T[7] = Qe));
  else Qe = T[7];
  let _e = Qe,
    eo;
  if (T[8] !== De)
    ((eo = () => {
      (i("tengu_teleport_cancelled", {}), De());
    }),
      (T[8] = De),
      (T[9] = eo));
  else eo = T[9];
  let H = eo;
  const Ie = !!x && !w;
  let oo;
  if (T[10] !== Ie)
    ((oo = { context: "Global", isActive: Ie }), (T[10] = Ie), (T[11] = oo));
  else oo = T[11];
  Ne("app:interrupt", H, oo);
  let te;
  if (T[12] !== x || T[13] !== w)
    ((te = !!x && !w && kh()), (T[12] = x), (T[13] = w), (T[14] = te));
  else te = T[14];
  let to;
  if (T[15] !== te)
    ((to = { context: "Confirmation", isActive: te }),
      (T[15] = te),
      (T[16] = to));
  else to = T[16];
  if ((Ne("confirm:no", H, to), ot && oe)) {
    let B;
    if (T[17] === p)
      ((B = r(o, {
        flexDirection: "row",
        children: [
          e(yo, {}),
          e(t, { bold: !0, children: "Resuming session\u2026" }),
        ],
      })),
        (T[17] = B));
    else B = T[17];
    let M;
    if (T[18] !== oe.title)
      ((M = r(o, {
        flexDirection: "column",
        padding: 1,
        children: [
          B,
          r(t, { dimColor: !0, children: ['Loading "', oe.title, '"\u2026'] }),
        ],
      })),
        (T[18] = oe.title),
        (T[19] = M));
    else M = T[19];
    return M;
  }
  if (x && !w) {
    let B;
    if (T[20] === p)
      ((B = e(t, {
        bold: !0,
        color: "error",
        children: "Failed to resume session",
      })),
        (T[20] = B));
    else B = T[20];
    let M;
    if (T[21] !== x.message)
      ((M = e(t, { dimColor: !0, children: x.message })),
        (T[21] = x.message),
        (T[22] = M));
    else M = T[22];
    let ro;
    if (T[23] === p)
      ((ro = e(o, {
        marginTop: 1,
        children: e(t, {
          dimColor: !0,
          italic: !0,
          children: e(D, { chord: "escape", action: "cancel" }),
        }),
      })),
        (T[23] = ro));
    else ro = T[23];
    let no;
    if (T[24] !== M)
      ((no = r(o, {
        flexDirection: "column",
        padding: 1,
        children: [B, M, ro],
      })),
        (T[24] = M),
        (T[25] = no));
    else no = T[25];
    return no;
  }
  let B;
  if (T[26] !== H || T[27] !== _e || T[28] !== we)
    ((B = e(ee, { onSelect: _e, onCancel: H, isEmbedded: we })),
      (T[26] = H),
      (T[27] = _e),
      (T[28] = we),
      (T[29] = B));
  else B = T[29];
  return B;
}
export { tye };

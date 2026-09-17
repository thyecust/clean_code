// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 71 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Ir } from "../../03-入口与运行时/会话UI(REPL)/chunk-fgcep5na.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { _e } from "../../01-核心基础设施/共享小工具-未细化/chunk-gd42wcxf.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { Te, ee } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, Kd, Vje } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { We, b, z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { St, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { execFileNoThrow } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { T$ } from "../../01-核心基础设施/共享小工具-未细化/chunk-1avr3bqa.js";
import { s, T, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { Y } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
F();
import { join as V } from "path";
var q = m(() => c({ number: T(), title: s(), closedAt: s() })),
  L = m(() => v(q())),
  W = 5000,
  Q = 86400000,
  X = 30;
function B() {
  return T$(V(be(), "cache", "my-closed-issues.json"), L, {
    defaultValue: () => [],
    ensureDir: !0,
  });
}
function K() {
  return Ce.cache("my-closed-issues", "my-closed-issues.json");
}
function Z(e) {
  return new Date(e - X * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
async function O(e) {
  if (ke()) return null;
  if (St()) return null;
  let t = ee(),
    o = Date.now();
  if (o - (t.closedIssuesLastChecked ?? 0) < Q) return null;
  let a = o,
    { stdout: u, code: l } = await execFileNoThrow(
      "gh",
      [
        "issue",
        "list",
        "-R",
        "anthropics/claude-code",
        "--author",
        "@me",
        "--state",
        "closed",
        "--search",
        `closed:>${Z(o)}`,
        "--json",
        "number,title,closedAt,stateReason",
        "--limit",
        "30",
      ],
      { timeout: W, preserveOutputOnError: !1 },
    ),
    k = Date.now() - a,
    g = null;
  if (l === 0)
    try {
      g = z(u)
        .filter((p) => p.stateReason === "COMPLETED")
        .map((p) => ({
          number: p.number,
          title: p.title,
          closedAt: p.closedAt,
        }));
    } catch (r) {
      n(`Failed to parse gh issue list output: ${r}`, { level: "error" });
    }
  if (g !== null)
    if (M() && e !== void 0)
      try {
        let r = await e.write(K(), b(g), { mode: 438 & ~process.umask() });
        if (!r.ok)
          n(`Failed to write closed-issues cache: ${We(r.error)}`, {
            level: "error",
          });
      } catch (r) {
        n(`Failed to write closed-issues cache: ${r}`, { level: "error" });
      }
    else
      try {
        await B().write(g);
      } catch (r) {
        n(`Failed to write closed-issues cache: ${r}`, { level: "error" });
      }
  let w = t.closedIssuesAcknowledged ?? [],
    d = w;
  if (g !== null) {
    let r = new Set(g.map((p) => p.number));
    d = w.filter((p) => r.has(p));
  }
  let f = d.length !== w.length || d.some((r, p) => r !== w[p]);
  return (
    await Te(
      (r) => ({
        ...r,
        closedIssuesLastChecked: o,
        ...(f && { closedIssuesAcknowledged: d }),
      }),
      e,
    ),
    k
  );
}
async function S(e) {
  if (e) {
    let t;
    try {
      t = await e.read([K()]);
    } catch (l) {
      if (Kd(l)) n(`closed-issues cache read failed: ${l}`);
      else logError(l);
      return [];
    }
    if (!t.ok) {
      let l = t.error;
      if ("telemetryCode" in l && Vje(l.telemetryCode))
        n(`closed-issues cache read failed: ${We(l)}`);
      else
        logError(
          new R(
            `closed-issues cache read failed: ${We(l)}`,
            "closed-issues cache read failed (v5 backend error)",
          ),
        );
      return [];
    }
    let o = t.value.items[0];
    if (!o?.found) return [];
    let a;
    try {
      a = z(Buffer.from(o.value).toString("utf-8"));
    } catch (l) {
      return (
        n(`closed-issues cache is not valid JSON: ${l}`, { level: "warn" }),
        []
      );
    }
    let u = L().safeParse(a);
    if (!u.success)
      return (
        n(`closed-issues cache failed schema validation: ${u.error.message}`, {
          level: "warn",
        }),
        []
      );
    return u.data;
  }
  try {
    return await B().read();
  } catch (t) {
    if (Kd(t)) n(`closed-issues cache read failed: ${t}`);
    else logError(t);
    return [];
  }
}
function y(e) {
  let t = new Set(ee().closedIssuesAcknowledged ?? []);
  return e.filter((o) => !t.has(o.number));
}
function x(e, t) {
  if (e.length === 0) return;
  let o = ee().closedIssuesAcknowledged ?? [],
    a = Y([...o, ...e]);
  if (a.length === o.length) return;
  Te((u) => ({ ...u, closedIssuesAcknowledged: a }), t);
}
function ue(Xe) {
  return Xe.number;
}
function de(_, Ze) {
  return Ze;
}
function fe(es) {
  return es.number;
}
var H = 4000,
  J = 1e4,
  le = "https://github.com/anthropics/claude-code/issues/";
function U(e) {
  return { text: `#${e}`, color: "success", url: `${le}${e}` };
}
function G(e) {
  if (e.length === 1)
    return [
      { text: "\u2713 Your issue ", color: "success" },
      U(e[0].number),
      { text: " has been closed. Thanks for reporting!", color: "success" },
    ];
  return [
    {
      text: `\u2713 ${e.length} of your issues have been closed (`,
      color: "success",
    },
    ...e.flatMap((t, o) => [
      ...(o > 0 ? [{ text: ", ", color: "success" }] : []),
      U(t.number),
    ]),
    { text: "). Thanks for reporting!", color: "success" },
  ];
}
function ClosedIssueNotice() {
  let Ge = _(4),
    { storageV5: I } = _e(),
    { addNotification: A } = Ir(),
    se = C(!1),
    te,
    oe;
  if (Ge[0] !== A || Ge[1] !== I)
    ((te = () => {
      if (se.current) {
        return;
      }
      if (((se.current = !0), isFirstPartyProvider())) {
        let re = function (Ve) {
          let Ye = new Set(D.map(ue));
          let N = Ve.filter((qe) => !Ye.has(qe.number));
          if (N.length === 0) {
            return;
          }
          (D.push(...N),
            i("tengu_closed_issue_notice_shown", {
              newClosedIssueCount: N.length,
              totalClosedIssueCount: D.length,
            }),
            A({
              key: "closed-issue-notice",
              kind: "event",
              segments: G(D),
              priority: "low",
              timeoutMs: J,
              fold: de,
            }),
            x(N.map(fe), I));
        };
        let j = !1;
        let D = [];
        let P = async function P() {
          let Qe = await S(I);
          let ne = y(Qe);
          if (!j && ne.length > 0) re(ne);
          let ce = await O(I);
          if (j || ce === null || ce > H) {
            return;
          }
          let ie = y(await S(I));
          if (!j && ie.length > 0) re(ie);
        };
        return (
          P().catch(logError),
          () => {
            j = !0;
          }
        );
      }
    }),
      (oe = [A, I]),
      (Ge[0] = A),
      (Ge[1] = I),
      (Ge[2] = te),
      (Ge[3] = oe));
  else ((te = Ge[2]), (oe = Ge[3]));
  return (E(te, oe), null);
}
export { ClosedIssueNotice };

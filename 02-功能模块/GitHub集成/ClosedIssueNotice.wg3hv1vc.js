// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 71 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { ke } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useNotificationQueue } from "../../03-入口与运行时/会话UI-REPL/notification-queue.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R, Kd, Vje } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { describeStorageError, jsonStringify, jsonParse, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { isEssentialTrafficOnly, logError } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { isFirstPartyProvider } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { E, C, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { createJsonFileStore } from "../../01-核心基础设施/共享小工具-未细化/json-file-store.js";
import { s, T, v, c } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { dedupe } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
F();
import { join as V } from "path";
var q = createLazyValue(() => c({ number: T(), title: s(), closedAt: s() })),
  L = createLazyValue(() => v(q())),
  W = 5000,
  Q = 86400000,
  X = 30;
function B() {
  return createJsonFileStore(V(getClaudeConfigDir(), "cache", "my-closed-issues.json"), L, {
    defaultValue: () => [],
    ensureDir: !0,
  });
}
function K() {
  return STORAGE_KEYS.cache("my-closed-issues", "my-closed-issues.json");
}
function Z(e) {
  return new Date(e - X * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
async function O(e) {
  if (ke()) return null;
  if (isEssentialTrafficOnly()) return null;
  let t = getGlobalConfig(),
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
      g = jsonParse(u)
        .filter((p) => p.stateReason === "COMPLETED")
        .map((p) => ({
          number: p.number,
          title: p.title,
          closedAt: p.closedAt,
        }));
    } catch (r) {
      logForDebugging(`Failed to parse gh issue list output: ${r}`, { level: "error" });
    }
  if (g !== null)
    if (isHoverRestEnabled() && e !== void 0)
      try {
        let r = await e.write(K(), jsonStringify(g), { mode: 438 & ~process.umask() });
        if (!r.ok)
          logForDebugging(`Failed to write closed-issues cache: ${describeStorageError(r.error)}`, {
            level: "error",
          });
      } catch (r) {
        logForDebugging(`Failed to write closed-issues cache: ${r}`, { level: "error" });
      }
    else
      try {
        await B().write(g);
      } catch (r) {
        logForDebugging(`Failed to write closed-issues cache: ${r}`, { level: "error" });
      }
  let w = t.closedIssuesAcknowledged ?? [],
    d = w;
  if (g !== null) {
    let r = new Set(g.map((p) => p.number));
    d = w.filter((p) => r.has(p));
  }
  let f = d.length !== w.length || d.some((r, p) => r !== w[p]);
  return (
    await saveGlobalConfig(
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
      if (Kd(l)) logForDebugging(`closed-issues cache read failed: ${l}`);
      else logError(l);
      return [];
    }
    if (!t.ok) {
      let l = t.error;
      if ("telemetryCode" in l && Vje(l.telemetryCode))
        logForDebugging(`closed-issues cache read failed: ${describeStorageError(l)}`);
      else
        logError(
          new R(
            `closed-issues cache read failed: ${describeStorageError(l)}`,
            "closed-issues cache read failed (v5 backend error)",
          ),
        );
      return [];
    }
    let o = t.value.items[0];
    if (!o?.found) return [];
    let a;
    try {
      a = jsonParse(Buffer.from(o.value).toString("utf-8"));
    } catch (l) {
      return (
        logForDebugging(`closed-issues cache is not valid JSON: ${l}`, { level: "warn" }),
        []
      );
    }
    let u = L().safeParse(a);
    if (!u.success)
      return (
        logForDebugging(`closed-issues cache failed schema validation: ${u.error.message}`, {
          level: "warn",
        }),
        []
      );
    return u.data;
  }
  try {
    return await B().read();
  } catch (t) {
    if (Kd(t)) logForDebugging(`closed-issues cache read failed: ${t}`);
    else logError(t);
    return [];
  }
}
function y(e) {
  let t = new Set(getGlobalConfig().closedIssuesAcknowledged ?? []);
  return e.filter((o) => !t.has(o.number));
}
function x(e, t) {
  if (e.length === 0) return;
  let o = getGlobalConfig().closedIssuesAcknowledged ?? [],
    a = dedupe([...o, ...e]);
  if (a.length === o.length) return;
  saveGlobalConfig((u) => ({ ...u, closedIssuesAcknowledged: a }), t);
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
    { storageV5: I } = useStorageV5Context(),
    { addNotification: A } = useNotificationQueue(),
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
            logEvent("tengu_closed_issue_notice_shown", {
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

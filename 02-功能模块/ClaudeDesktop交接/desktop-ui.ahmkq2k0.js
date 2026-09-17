// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 247 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { isBgSession } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../后台任务-Shell管理/chunk-rh0xpf1w.js";
import { IF, xn, flushSessionStorage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { m0t, SJt, ZNn } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { recordExitTranscript, appendCancelledContinueNotice } from "../../01-核心基础设施/核心工具-进程与信号/session-relaunch.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-v7hyg861.js";
import "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import "../Wellbeing-使用时长/Wellbeing-使用时长.0s8r3ncd.js";
import "../../01-核心基础设施/共享小工具-未细化/tool-result-row.js";
import "../状态栏-主题/chunk-jrr487ty.js";
import "../../01-核心基础设施/共享小工具-未细化/expanded-content-context.js";
import "../../01-核心基础设施/共享小工具-未细化/queued-message-context.js";
import { HB } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { SpinnerMessageLine } from "../../01-核心基础设施/共享小工具-未细化/spinner-message-line.js";
import "../../01-核心基础设施/共享小工具-未细化/progress-bar.js";
import "../../01-核心基础设施/共享小工具-未细化/linkified-text.js";
import "../../01-核心基础设施/共享小工具-未细化/use-settings.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../Bridge-RemoteControl/remote-control-ui-strings.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
F();
var D = "https://clau.de/desktop";
function b() {
  switch ("darwin") {
    case "win32":
      return "https://claude.ai/api/desktop/win32/x64/exe/latest/redirect";
    default:
      return "https://claude.ai/api/desktop/darwin/universal/dmg/latest/redirect";
  }
}
function v() {
  return { current: null };
}
function C({ onDone: m, handoff: n, getTranscript: x }) {
  let { storageV5: H } = useStorageV5Context(),
    [p, f] = d(n.current?.state ?? "checking"),
    [w, g] = d(n.current?.error ?? null),
    [M, y] = d(n.current?.downloadMessage ?? ""),
    R = useClock();
  E(() => {
    let s = n.current;
    if (s)
      ((s.setters = { setState: f, setError: g, setDownloadMessage: y }),
        f(s.state),
        g(s.error),
        y(s.downloadMessage));
    return () => {
      if (n.current?.setters?.setState === f) n.current.setters = null;
    };
  }, [n]);
  function u(s, c) {
    ((n.current = null), m(s, c));
  }
  function S(s) {
    if (
      s.key === "escape" ||
      ((s.ctrl || s.meta) && (s.key === "c" || s.key === "d"))
    ) {
      (s.preventDefault(),
        u(`Cancelled. Learn more about Claude Desktop at ${D}`, {
          display: "system",
        }));
      return;
    }
    if (s.ctrl || s.meta) return;
    if (p === "error") {
      (s.preventDefault(), u(w ?? "Unknown error", { display: "system" }));
      return;
    }
    if (p === "prompt-download") {
      if (s.key === "y" || s.key === "Y")
        (s.preventDefault(),
          tryOpenUrlInBrowser(b()).catch(() => {}),
          u(
            `Starting download. Re-run /desktop once you\u2019ve installed the app.
Learn more at ${D}`,
            { display: "system" },
          ));
      else if (s.key === "n" || s.key === "N")
        (s.preventDefault(),
          u(`The desktop app is required for /desktop. Learn more at ${D}`, {
            display: "system",
          }));
    }
  }
  if (
    (E(() => {
      if (n.current) return;
      n.current = {
        state: "checking",
        error: null,
        downloadMessage: "",
        setters: { setState: f, setError: g, setDownloadMessage: y },
      };
      function s(a) {
        let i = n.current;
        if (!i) return;
        Object.assign(i, a);
        let k = i.setters;
        if (a.state !== void 0) k?.setState(a.state);
        if (a.error !== void 0) k?.setError(a.error);
        if (a.downloadMessage !== void 0)
          k?.setDownloadMessage(a.downloadMessage);
      }
      let c = !1;
      async function T() {
        s({ state: "checking" });
        let a = await SJt();
        if (a.status === "not-installed") {
          s({
            state: "prompt-download",
            downloadMessage: "Claude Desktop is not installed.",
          });
          return;
        }
        if (a.status === "version-too-old") {
          s({
            state: "prompt-download",
            downloadMessage: `Claude Desktop needs to be updated (found v${a.version}, need v${m0t}+).`,
          });
          return;
        }
        ((c = await recordExitTranscript(x(), "desktop_handoff", {}, H)),
          s({ state: "flushing" }),
          await flushSessionStorage(),
          s({ state: "opening" }));
        let i = await ZNn();
        if (!i.success) {
          s({ state: "error", error: appendCancelledContinueNotice(i.error, c) });
          return;
        }
        (s({ state: "success" }),
          R.setTimeout(async () => {
            if (
              (u("Session transferred to Claude Desktop", {
                display: "system",
              }),
              isBgSession())
            )
              HB({ broadcast: !0 });
            await xn(0, "other");
          }, 500));
      }
      T().catch((a) => {
        s({ state: "error", error: appendCancelledContinueNotice(l(a), c, { as: "clause" }) });
      });
    }, []),
    p === "error")
  )
    return r(o, {
      flexDirection: "column",
      paddingX: 2,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: S,
      children: [
        r(t, { color: "error", children: ["Error: ", w] }),
        e(t, { dimColor: !0, children: "Press any key to continue\u2026" }),
      ],
    });
  if (p === "prompt-download")
    return r(o, {
      flexDirection: "column",
      paddingX: 2,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: S,
      children: [
        e(t, { children: M }),
        e(t, { children: "Download now? (y/n)" }),
      ],
    });
  return e(o, {
    paddingX: 2,
    children: e(SpinnerMessageLine, {
      message: {
        checking: "Checking for Claude Desktop\u2026",
        flushing: "Saving session\u2026",
        opening: "Opening Claude Desktop\u2026",
        success: "Opening in Claude Desktop\u2026",
      }[p],
    }),
  });
}
async function Q(m, n) {
  return e(C, { onDone: m, handoff: v(), getTranscript: () => IF(n) });
}
export { Q as call };

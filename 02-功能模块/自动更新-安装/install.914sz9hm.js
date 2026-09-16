// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 228 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Jt } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { o, t, Un, J0 } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { vt } from "../../01-核心基础设施/共享小工具-未细化/chunk-tmxdrqem.js";
import { et } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { rT, Bce, jce, Can, van } from "./chunk-2g5h49pk.js";
import "./chunk-brx72pf1.js";
import { lu } from "../../01-核心基础设施/共享小工具-未细化/chunk-qck6h2yw.js";
import { oO } from "./chunk-dv82rn71.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-j86cs2ar.js";
import { E, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { p } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { homedir as U } from "os";
import { join as L } from "path";
function H(ce, pe) {
  return e(lu, { children: e(t, { dimColor: !0, children: ce }) }, pe);
}
function N() {
  let y = a.platform === "win32",
    m = U();
  if (y) return L(m, ".local", "bin", "claude.exe").replaceAll("/", "\\");
  return "~/.local/bin/claude";
}
function k(ie) {
  let b = _(5),
    { messages: T } = ie;
  if (T.length === 0) {
    return null;
  }
  let P;
  if (b[0] === p)
    ((P = e(o, {
      children: r(t, {
        color: "warning",
        children: [e(et, { status: "warning", withSpace: !0 }), "Setup notes:"],
      }),
    })),
      (b[0] = P));
  else P = b[0];
  let V;
  if (b[1] !== T) ((V = T.map(H)), (b[1] = T), (b[2] = V));
  else V = b[2];
  let A;
  if (b[3] !== V)
    ((A = r(o, {
      flexDirection: "column",
      gap: 0,
      marginBottom: 1,
      children: [
        P,
        e(o, { flexDirection: "column", marginLeft: 2, children: V }),
      ],
    })),
      (b[3] = V),
      (b[4] = A));
  else A = b[4];
  return A;
}
function j({ onDone: y, force: m, target: c, storageV5: v }) {
  let [s, h] = d({ type: "checking" }),
    w = vt();
  return (
    E(() => {
      async function C() {
        try {
          n(`Install: Starting installation process (force=${m}, target=${c})`);
          let f = c || oO();
          (h({ type: "installing", version: f }),
            n(
              `Install: Calling installLatest(channelOrVersion=${f}, forceReinstall=${m})`,
            ));
          let u = await jce(f, m, v);
          if (
            (n(
              `Install: installLatest returned version=${u.latestVersion}, wasUpdated=${u.wasUpdated}, lockFailed=${u.lockFailed}`,
            ),
            u.lockFailed)
          )
            throw Error(
              "Could not install - another process is currently installing Claude. Please try again in a moment.",
            );
          if (!u.latestVersion)
            n(
              "Install: Failed to retrieve version information during install",
              { level: "error" },
            );
          let S = !1;
          if (c === "latest" || c === "stable" || c === "rc") {
            let g = c === "rc" ? "stable" : c,
              { error: D } = await Jt(
                "userSettings",
                { autoUpdatesChannel: g },
                void 0,
                v,
              );
            ((S = D === null),
              n(
                S
                  ? `Install: Saved autoUpdatesChannel=${g} to user settings`
                  : `Install: Could not save autoUpdatesChannel=${g}: ${l(D)}`,
                { level: S ? "debug" : "warn" },
              ));
          }
          if (u.skippedUnverifiedRelease && u.latestVersion) {
            h({
              type: "error",
              message: `Skipped: the update target for @${f} resolved to ${u.latestVersion}, which predates release-signature enforcement, so this client (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) will not switch to it automatically.${S ? " Channel preference saved." : ""} Run \`claude install ${u.latestVersion}\` to install that exact version.`,
            });
            return;
          }
          if (!u.wasUpdated) n("Install: Already up to date");
          h({ type: "setting-up" });
          let x = await Bce(!0);
          if (
            (n(`Install: Setup launcher completed with ${x.length} messages`),
            x.length > 0)
          )
            x.forEach((g) => n(`Install: Setup message: ${g.message}`));
          n("Install: Cleaning up npm installations after successful install");
          let { removed: R, errors: B, warnings: O } = await van();
          if (R > 0) n(`Cleaned up ${R} npm installation(s)`);
          if (B.length > 0) n(`Cleanup errors: ${B.join(", ")}`);
          let I = await Can();
          if (I.length > 0)
            n(`Shell alias cleanup: ${I.map((g) => g.message).join("; ")}`);
          i("tengu_claude_install_command", {
            has_version: u.latestVersion ? 1 : 0,
            forced: m ? 1 : 0,
          });
          let M = [...O, ...I.map((g) => g.message)];
          if (x.length > 0)
            (h({ type: "set-up", messages: x.map((g) => g.message) }),
              w.setTimeout(
                () =>
                  h({
                    type: "success",
                    version: u.latestVersion || "current",
                    setupMessages: [...x.map((g) => g.message), ...M],
                  }),
                2000,
              ));
          else
            (n("Install: Shell PATH already configured"),
              h({
                type: "success",
                version: u.latestVersion || "current",
                setupMessages: M,
              }));
        } catch (f) {
          (n(`Install command failed: ${f}`, { level: "error" }),
            h({
              type: "error",
              message: l(f),
              forceMayHelp: !(f instanceof rT),
            }));
        }
      }
      C();
    }, [w, m, c, v]),
    Un(
      () => {
        if (s.type === "success")
          y("Claude Code installation completed successfully", {
            display: "system",
          });
        else if (s.type === "error")
          y("Claude Code installation failed", { display: "system" });
      },
      s.type === "success" ? 2000 : s.type === "error" ? 3000 : null,
    ),
    r(o, {
      flexDirection: "column",
      marginTop: 1,
      children: [
        s.type === "checking" &&
          e(t, {
            color: "claude",
            children: "Checking installation status...",
          }),
        s.type === "cleaning-npm" &&
          e(t, {
            color: "warning",
            children: "Cleaning up old npm installations...",
          }),
        s.type === "installing" &&
          r(t, {
            color: "claude",
            children: [
              "Installing Claude Code native build ",
              s.version,
              "...",
            ],
          }),
        s.type === "setting-up" &&
          e(t, {
            color: "claude",
            children: "Setting up launcher and shell integration...",
          }),
        s.type === "set-up" && e(k, { messages: s.messages }),
        s.type === "success" &&
          r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              r(o, {
                children: [
                  e(et, { status: "success", withSpace: !0 }),
                  e(t, {
                    color: "success",
                    bold: !0,
                    children: "Claude Code successfully installed!",
                  }),
                ],
              }),
              r(o, {
                marginLeft: 2,
                flexDirection: "column",
                gap: 1,
                children: [
                  s.version !== "current" &&
                    r(o, {
                      children: [
                        e(t, { dimColor: !0, children: "Version: " }),
                        e(t, { color: "claude", children: s.version }),
                      ],
                    }),
                  r(o, {
                    children: [
                      e(t, { dimColor: !0, children: "Location: " }),
                      e(t, { color: "text", children: N() }),
                    ],
                  }),
                ],
              }),
              e(o, {
                marginLeft: 2,
                flexDirection: "column",
                gap: 1,
                children: r(o, {
                  marginTop: 1,
                  children: [
                    e(t, { dimColor: !0, children: "Next: Run " }),
                    e(t, {
                      color: "claude",
                      bold: !0,
                      children: "claude --help",
                    }),
                    e(t, { dimColor: !0, children: " to get started" }),
                  ],
                }),
              }),
              s.setupMessages.length > 0 && e(k, { messages: s.setupMessages }),
            ],
          }),
        s.type === "error" &&
          r(o, {
            flexDirection: "column",
            gap: 1,
            children: [
              r(o, {
                children: [
                  e(et, { status: "error", withSpace: !0 }),
                  e(t, { color: "error", children: "Installation failed" }),
                ],
              }),
              e(t, { color: "error", children: s.message }),
              s.forceMayHelp &&
                e(o, {
                  marginTop: 1,
                  children: e(t, {
                    dimColor: !0,
                    children: "Try running with --force to override checks",
                  }),
                }),
            ],
          }),
      ],
    })
  );
}
var le = {
  type: "local-jsx",
  name: "install",
  description: "Install Claude Code native build",
  argumentHint: "[options]",
  async call(y, m, c) {
    let v = c.includes("--force"),
      h = c.filter((C) => !C.startsWith("--"))[0],
      { unmount: w } = await J0(
        e(j, {
          onDone: (C, f) => {
            (w(), y(C, f));
          },
          force: v,
          target: h,
          storageV5: m?.storageV5,
        }),
      );
  },
};
export { le as install };

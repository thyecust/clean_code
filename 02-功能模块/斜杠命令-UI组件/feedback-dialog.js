// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { yt } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, qr, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { firstLine } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { createMainAgentContext, getFeatureValue_CACHED_MAY_BE_STALE } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getRemoteTransport, isRemoteActive, getIsGit, getGitState } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybinding } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { getFeedbackDisabledReason, isAuthenticationErrorMessage, asSystemPrompt, isSendFeedbackEnabled, runSmallFastModelQuery } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { useAppStateSelector } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { hn } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-tp42fv8j.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { FeedbackDraftsPanel } from "../反馈-错误上报/反馈-错误上报.grgh562d.js";
import { resolveFeedbackSubmissionMode, getRedactedInMemoryErrors, submitFeedbackPayload, createFeedbackBundle } from "../输入分发-查询构造/输入分发-查询构造.eerwnvjy.js";
import { hasPendingSurveyFeedback, takePendingSurveyFeedback } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { FocusableBox } from "../../01-核心基础设施/共享小工具-未细化/focusable-box.js";
import { ErrorMessage } from "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { ActionKeybindingHint } from "../../01-核心基础设施/共享小工具-未细化/action-keybinding-hint.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { tryOpenUrlInBrowser } from "../../01-核心基础设施/核心工具-路径与平台/open-external-url.js";
import { Dn, kn, re, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
F();
var ut = 7250,
  Xe = "https://github.com/anthropics/claude-code/issues",
  be = {
    session: "this session only",
    day: "this session + this project\u2019s other sessions from the last 24 hours",
    week: "this session + this project\u2019s other sessions from the last 7 days",
  },
  mt = [
    { label: "This session only", value: "session" },
    { label: "This session + the last 24 hours", value: "day" },
    { label: "This session + the last 7 days", value: "week" },
  ],
  V = {
    post: {
      consentAction: "submit",
      consentIntro: "This report will include:",
      consentFooter:
        "We may use these to debug related issues and improve Claude Code.",
      submitting: "Submitting report\u2026",
    },
    bundle: {
      consentAction: "save",
      consentIntro: "An archive will be saved to disk containing:",
      consentFooter:
        "Nothing leaves this machine until you send the bundle file. Secrets (API keys, tokens, credentials) are redacted before writing.",
      submitting: "Saving bundle\u2026",
    },
    share: {
      consentAction: "share",
      consentIntro: "This shared conversation will include:",
      consentFooter:
        "A shareable link will be created so you can post the conversation for debugging and support.",
      submitting: "Uploading share\u2026",
    },
  };
function gt({
  abortSignal: u,
  messages: s,
  initialDescription: f,
  onDone: m,
  backgroundTasks: S = {},
  mode: g = "post",
  readFileState: J,
  surveyFeedbackSource: Z,
  command: ee = "/feedback",
}) {
  let { storageV5: B, credentials: le } = useStorageV5Context(),
    [y, R] = d("userInput"),
    [te, se] = d(0),
    [x, ce] = d(f ?? ""),
    [X, O] = d(null),
    [K, me] = d(null),
    [A, I] = d(null),
    Q = isRemoteActive(),
    P = Q ? (getRemoteTransport()?.sessionId ?? null) : null,
    [pe] = d(() =>
      Q
        ? Promise.resolve(null)
        : getIsGit()
            .then((i) => (i ? getGitState() : null))
            .catch(() => null),
    ),
    [Ze, St] = d(null),
    [ie, Ct] = d("session"),
    ye = useAppStateSelector((i) => i.transcripts),
    vt = useTerminalSize().columns - 4,
    fe = getFeatureValue_CACHED_MAY_BE_STALE("tengu_amber_lynx", !1),
    Ft = re(async () => {
      if ((R("submitting"), I(null), O(null), g === "bundle")) {
        let oe = await createFeedbackBundle({
          messages: s,
          description: x,
          surface: "cli",
          scope: ie,
          backgroundTasks: S,
          transcripts: ye,
          surveyFeedbackSource: Z,
          storageV5: B,
        });
        if (oe.success) (O(oe.bundleId), me(oe.zipPath), R("done"));
        else
          (I(`Couldn't save the feedback bundle to disk: ${oe.error}`),
            R("userInput"));
        return;
      }
      let [i, Ce] = await Promise.all([
        submitFeedbackPayload({
          messages: s,
          description: x,
          surface: "cli",
          scope: ie,
          backgroundTasks: S,
          transcripts: ye,
          signal: u,
          surveyFeedbackSource: Z,
          storageV5: B,
          credentials: le,
        }),
        fe ? Promise.resolve(null) : ft(x, u, le),
      ]);
      if ((St(Ce), i.success)) (O(i.feedbackId), R("done"));
      else {
        if (i.isZdrOrg)
          I(
            "Feedback collection is not available for organizations with custom data retention policies.",
          );
        else if (i.failureReason === "auth_error")
          I("Couldn't send feedback: not signed in. Run /login, then retry.");
        else if (i.failureReason === "policy_blocked")
          I(getFeedbackDisabledReason(ee) ?? "Feedback is disabled by your organization's policy.");
        else {
          let oe = i.statusCode
            ? ` (server returned ${i.statusCode})`
            : i.failureReason === "timeout"
              ? " (request timed out)"
              : i.failureReason === "network_error"
                ? " (couldn't reach the service)"
                : "";
          I(
            `Couldn't send feedback${oe}. If it keeps failing, you can file at ${Xe} instead.`,
          );
        }
        R("userInput");
      }
    }, [x, s, fe, S, ye, u, g, ie, B, le]),
    ke = re(() => {
      m("Feedback / bug report cancelled", { display: "system" });
    }, [m]),
    Vt = re(() => {
      R("done");
    }, []),
    qt = re((i) => {
      (I(i), R("userInput"));
    }, []);
  useKeybinding("confirm:no", ke, { context: "Settings", isActive: y === "userInput" });
  let Rt = y === "done" || (A && y !== "userInput");
  function It(i) {
    if (i.ctrl || i.meta) return;
    if (y === "done") {
      if ((i.preventDefault(), g === "share")) return;
      if (!fe && i.key === "return" && Ze) {
        let Ce = pt(X ?? "", Ze, x, getRedactedInMemoryErrors());
        tryOpenUrlInBrowser(Ce);
      }
      if (A) m("Error submitting feedback / bug report", { display: "system" });
      else if (g === "bundle" && K)
        m(`Feedback bundle saved to \`${K}\``, { display: "system" });
      else m("Feedback / bug report submitted", { display: "system" });
      return;
    }
    if (A && y !== "userInput") {
      (i.preventDefault(),
        m("Error submitting feedback / bug report", { display: "system" }));
      return;
    }
    if (y === "consent") {
      if (i.key === "left") {
        (i.preventDefault(), R(g === "share" || Q ? "userInput" : "scope"));
        return;
      }
      if (i.key === "return" || i.key === " ") (i.preventDefault(), Ft());
    }
  }
  return e(FocusableBox, {
    onKeyDown: It,
    children: r(de, {
      title: "Submit feedback / bug report",
      onCancel: ke,
      isCancelActive: y !== "userInput" && !Rt,
      hideInputGuide: y === "done",
      inputGuide:
        y === "userInput"
          ? r(DotSeparatedList, {
              children: [
                e(KeybindingHint, { chord: "enter", action: "continue" }),
                e(ActionKeybindingHint, {
                  action: "confirm:no",
                  context: "Confirmation",
                  fallback: "Esc",
                  description: "cancel",
                }),
              ],
            })
          : y === "scope"
            ? r(DotSeparatedList, {
                children: [
                  e(KeybindingHint, { chord: "enter", action: "choose" }),
                  e(ActionKeybindingHint, {
                    action: "confirm:no",
                    context: "Confirmation",
                    fallback: "Esc",
                    description: "cancel",
                  }),
                ],
              })
            : y === "consent"
              ? r(DotSeparatedList, {
                  children: [
                    e(KeybindingHint, { chord: "enter", action: V[g].consentAction }),
                    e(KeybindingHint, { chord: "left", action: "change" }),
                    e(ActionKeybindingHint, {
                      action: "confirm:no",
                      context: "Confirmation",
                      fallback: "Esc",
                      description: "cancel",
                    }),
                  ],
                })
              : null,
      children: [
        y === "userInput" &&
          r(Box, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(Text, { children: "Describe the issue below:" }),
              e(hn, {
                value: x,
                onChange: (i) => {
                  if ((ce(i), A)) I(null);
                },
                columns: vt,
                onSubmit: (i) => {
                  if (g !== "share" && i.trim() === "") {
                    I("Please describe the issue before submitting.");
                    return;
                  }
                  (I(null), R(g === "share" || Q ? "consent" : "scope"));
                },
                onExitMessage: (i) => {
                  if (i) m("Feedback cancelled", { display: "system" });
                },
                cursorOffset: te,
                onChangeCursorOffset: se,
                showCursor: !0,
              }),
              A &&
                r(Box, {
                  flexDirection: "column",
                  gap: 1,
                  children: [
                    e(ErrorMessage, { error: A }),
                    e(Text, {
                      dimColor: !0,
                      children:
                        "Edit and press Enter to retry, or Esc to cancel",
                    }),
                  ],
                }),
            ],
          }),
        y === "scope" &&
          r(Box, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(Text, { children: "How much session history should we include?" }),
              e(ve, {
                options: mt,
                defaultFocusValue: ie,
                onChange: (i) => {
                  (Ct(i), R("consent"));
                },
                onCancel: ke,
              }),
            ],
          }),
        y === "consent" &&
          r(Box, {
            flexDirection: "column",
            children: [
              e(Text, { children: V[g].consentIntro }),
              r(Box, {
                marginLeft: 2,
                flexDirection: "column",
                children: [
                  r(Text, {
                    children: [
                      "- Your feedback / bug description:",
                      " ",
                      e(Text, { dimColor: !0, children: x }),
                    ],
                  }),
                  r(Text, {
                    children: [
                      "- Environment info:",
                      " ",
                      r(Text, {
                        dimColor: !0,
                        children: [
                          a.platform,
                          ", ",
                          a.terminal,
                          ", v",
                          {
                            ISSUES_EXPLAINER:
                              "report the issue at https://github.com/anthropics/claude-code/issues",
                            PACKAGE_URL: "@anthropic-ai/claude-code",
                            README_URL:
                              "https://code.claude.com/docs/en/overview",
                            VERSION: "2.1.263",
                            FEEDBACK_CHANNEL:
                              "https://github.com/anthropics/claude-code/issues",
                            BUILD_TIME: "2026-09-06T01:08:56Z",
                            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                            HOOKS_WORKER_URL:
                              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                            DD_SOURCEMAP_GROUP: "darwin",
                          }.VERSION,
                        ],
                      }),
                    ],
                  }),
                  g !== "share" &&
                    Q &&
                    r(Text, {
                      children: [
                        "- Remote workspace:",
                        " ",
                        r(Text, {
                          dimColor: !0,
                          children: [
                            P ? `session ${P}; ` : "",
                            "git metadata is not collected from this machine",
                          ],
                        }),
                      ],
                    }),
                  g !== "share" &&
                    e(Dn, {
                      fallback: null,
                      children: e(We, { gitStatePromise: pe }),
                    }),
                  r(Text, {
                    children: [
                      "- Session transcript:",
                      " ",
                      e(Text, {
                        dimColor: !0,
                        children: g === "share" ? be.session : be[ie],
                      }),
                    ],
                  }),
                ],
              }),
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  wrap: "wrap",
                  dimColor: !0,
                  children: V[g].consentFooter,
                }),
              }),
            ],
          }),
        y === "submitting" &&
          e(Box, {
            flexDirection: "row",
            gap: 1,
            children: e(Text, { children: V[g].submitting }),
          }),
        y === "done" &&
          g === "bundle" &&
          r(Box, {
            flexDirection: "column",
            children: [
              r(Text, {
                color: "success",
                children: [
                  e(StatusIndicator, { status: "success", withSpace: !0 }),
                  "Feedback bundle saved",
                ],
              }),
              K &&
                r(Box, {
                  marginTop: 1,
                  flexDirection: "column",
                  children: [
                    r(Text, {
                      children: [
                        "Bundle: ",
                        e(Text, { dimColor: !0, children: K }),
                      ],
                    }),
                    r(Text, {
                      children: [
                        "Reference ID: ",
                        e(Text, { dimColor: !0, children: X }),
                      ],
                    }),
                    e(Box, {
                      marginTop: 1,
                      children: e(Text, {
                        wrap: "wrap",
                        children:
                          "Send this file to your Anthropic account representative or attach it to your support request.",
                      }),
                    }),
                  ],
                }),
              e(Box, {
                marginTop: 1,
                children: e(Text, {
                  dimColor: !0,
                  children: "Press any key to close",
                }),
              }),
            ],
          }),
        y === "done" &&
          g === "post" &&
          (fe
            ? r(Box, {
                flexDirection: "column",
                children: [
                  A
                    ? e(ErrorMessage, { error: A })
                    : r(Text, {
                        color: "success",
                        children: [
                          e(StatusIndicator, { status: "success", withSpace: !0 }),
                          "Feedback sent",
                        ],
                      }),
                  X &&
                    r(N, {
                      children: [
                        e(Box, {
                          marginTop: 1,
                          children: r(Text, {
                            children: [
                              "Reference ID: ",
                              e(Text, { dimColor: !0, children: X }),
                            ],
                          }),
                        }),
                        e(Box, {
                          marginTop: 1,
                          children: e(Text, {
                            wrap: "wrap",
                            children:
                              "If you're working with Anthropic support, please include the ID above.",
                          }),
                        }),
                      ],
                    }),
                  e(Box, {
                    marginTop: 1,
                    children: e(Text, {
                      dimColor: !0,
                      italic: !0,
                      children: "Any key to close",
                    }),
                  }),
                ],
              })
            : r(Box, {
                flexDirection: "column",
                children: [
                  A
                    ? e(ErrorMessage, { error: A })
                    : e(Text, {
                        color: "success",
                        children: "Thank you for your report!",
                      }),
                  X && r(Text, { dimColor: !0, children: ["Feedback ID: ", X] }),
                  e(Box, {
                    marginTop: 1,
                    children: e(Text, {
                      dimColor: !0,
                      italic: !0,
                      children: r(DotSeparatedList, {
                        children: [
                          e(KeybindingHint, { chord: "enter", action: "open GitHub issue" }),
                          e(Text, { children: "any key to close" }),
                        ],
                      }),
                    }),
                  }),
                ],
              })),
        null,
      ],
    }),
  });
}
function pt(u, s, f, m) {
  let S = qr(s),
    J = `**Bug Description**
${qr(f)}

**Environment Info**
- Platform: ${a.platform}
- Terminal: ${a.terminal}
- Version: ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION || "unknown"}
- Feedback ID: ${u}

**Errors**
\`\`\`json
`,
    Z = "\n```\n",
    ee = jsonStringify(m),
    B = `${Xe}/new?title=${encodeURIComponent(S)}&labels=user-reported,bug&body=`,
    le = `
**Note:** Content was truncated.
`,
    y = encodeURIComponent(J),
    R = encodeURIComponent("\n```\n"),
    te = encodeURIComponent(`
**Note:** Content was truncated.
`),
    se = encodeURIComponent(ee),
    x = ut - B.length - y.length - R.length - te.length;
  if (x <= 0) {
    let me = encodeURIComponent("\u2026"),
      A = 50,
      I = ut - B.length - me.length - te.length - 50,
      Q = J + ee + "\n```\n",
      P = encodeURIComponent(Q);
    if (P.length > I) {
      P = P.slice(0, I);
      let pe = P.lastIndexOf("%");
      if (pe >= P.length - 2) P = P.slice(0, pe);
    }
    return B + P + me + te;
  }
  if (se.length <= x) return B + y + se + R;
  let ce = encodeURIComponent("\u2026"),
    X = 50,
    O = se.slice(0, x - ce.length - X),
    K = O.lastIndexOf("%");
  if (K >= O.length - 2) O = O.slice(0, K);
  return B + y + O + ce + R + te;
}
async function ft(u, s, f) {
  try {
    let m = await runSmallFastModelQuery({
        systemPrompt: asSystemPrompt([
          "Generate a concise, technical issue title (max 80 chars) for a public GitHub issue based on this bug report for Claude Code.",
          "Claude Code is an agentic coding CLI based on the Anthropic API.",
          "The title should:",
          "- Include the type of issue [Bug] or [Feature Request] as the first thing in the title",
          "- Be concise, specific and descriptive of the actual problem",
          "- Use technical terminology appropriate for a software issue",
          '- For error messages, extract the key error (e.g., "Missing Tool Result Block" rather than the full message)',
          "- Be direct and clear for developers to understand the problem",
          '- If you cannot determine a clear issue, use "Bug Report: [brief description]"',
          "- Any LLM API errors are from the Anthropic API, not from any other model provider",
          "Your response will be directly used as the title of the Github issue, and as such should not contain any other commentary or explaination",
          'Examples of good titles include: "[Bug] Auto-Compact triggers to soon", "[Bug] Anthropic API Error: Missing Tool Result Block", "[Bug] Error: Invalid Model Name for Opus"',
        ]),
        userPrompt: u,
        signal: s,
        options: {
          hasAppendSystemPrompt: !1,
          toolChoice: void 0,
          isNonInteractiveSession: !1,
          agents: [],
          querySource: "feedback",
          mcpTools: [],
          agentContext: createMainAgentContext(),
          credentials: f,
        },
      }),
      S =
        m.message.content[0]?.type === "text"
          ? m.message.content[0].text
          : "Bug Report";
    if (isAuthenticationErrorMessage(S)) return Je(u);
    if (Gt(S)) return Je(u);
    return S;
  } catch (m) {
    if (yt(m))
      logForDebugging("Feedback title generation via Haiku aborted, using fallback", {
        level: "debug",
      });
    else logError(m);
    return Je(u);
  }
}
var zt =
  /^(i can['\u2019]t|i cannot|i['\u2019]m unable|i am unable|i['\u2019]m sorry|i am sorry|i apologize|sorry,)/i;
function Gt(u) {
  let s = u.trim();
  return s === "" || zt.test(s);
}
function Je(u) {
  let s = firstLine(u);
  if (s.length <= 60 && s.length > 5) return s;
  let f = s.slice(0, 60);
  if (s.length > 60) {
    let m = f.lastIndexOf(" ");
    if (m > 30) f = f.slice(0, m);
    f += "...";
  }
  return f.length < 10 ? "Bug Report" : f;
}
function We(An) {
  let Mt = _(8),
    { gitStatePromise: Pn } = An,
    L = kn(Pn);
  if (!L) {
    return null;
  }
  let He;
  if (Mt[0] !== L.commitHash)
    ((He = L.commitHash ? `, ${L.commitHash.slice(0, 7)}` : ""),
      (Mt[0] = L.commitHash),
      (Mt[1] = He));
  else He = Mt[1];
  const lt = L.remoteUrl ? ` @ ${L.remoteUrl}` : "",
    ct = !L.isHeadOnRemote && ", not synced",
    dt = !L.isClean && ", has local changes";
  let jt;
  if (
    Mt[2] !== L.branchName ||
    Mt[3] !== He ||
    Mt[4] !== lt ||
    Mt[5] !== ct ||
    Mt[6] !== dt
  )
    ((jt = r(Text, {
      children: [
        "- Git repo metadata:",
        " ",
        r(Text, { dimColor: !0, children: [L.branchName, He, lt, ct, dt] }),
      ],
    })),
      (Mt[2] = L.branchName),
      (Mt[3] = He),
      (Mt[4] = lt),
      (Mt[5] = ct),
      (Mt[6] = dt),
      (Mt[7] = jt));
  else jt = Mt[7];
  return jt;
}
function renderFeedbackComponent(u, s, f, m = "", S = {}, g, J = "/feedback") {
  let Z = resolveFeedbackSubmissionMode(J);
  if (Z.kind === "disabled") return (u(Z.reason), null);
  let ee = takePendingSurveyFeedback() ?? void 0;
  return e(gt, {
    abortSignal: s,
    messages: f,
    initialDescription: m,
    onDone: u,
    backgroundTasks: S,
    mode: Z.kind,
    readFileState: g,
    surveyFeedbackSource: ee,
    command: J,
  });
}
function qe(u, s, f, m) {
  return renderFeedbackComponent(
    u,
    s.abortController.signal,
    s.messages,
    f,
    { ...s.taskRegistry.all() },
    s.readFileState,
    m,
  );
}
async function callLegacyFeedbackDialog(u, s, f, m = "/feedback") {
  let S = f?.trim() === "public" ? "" : f || "";
  return qe(u, s, S, m);
}
function kt(Gn) {
  let ht = _(10),
    { onDone: ae, context: q } = Gn,
    [Ht, Hn] = d(),
    Jt;
  if (ht[0] !== q.messages)
    ((Jt = () => [...q.messages]), (ht[0] = q.messages), (ht[1] = Jt));
  else Jt = ht[1];
  let [bt] = d(Jt),
    Xt = C(!1);
  if (Ht !== void 0) {
    return Ht;
  }
  let Ve;
  if (ht[2] !== q || ht[3] !== ae)
    ((Ve = () => {
      if (Xt.current) {
        return;
      }
      let Jn = qe(ae, q, "", "/feedback");
      ((Xt.current = !0), Hn(Jn));
    }),
      (ht[2] = q),
      (ht[3] = ae),
      (ht[4] = Ve));
  else Ve = ht[4];
  let Wt;
  if (
    ht[5] !== q.abortController.signal ||
    ht[6] !== bt ||
    ht[7] !== ae ||
    ht[8] !== Ve
  )
    ((Wt = e(FeedbackDraftsPanel, {
      messages: bt,
      onDone: ae,
      abortSignal: q.abortController.signal,
      onWriteNew: Ve,
    })),
      (ht[5] = q.abortController.signal),
      (ht[6] = bt),
      (ht[7] = ae),
      (ht[8] = Ve),
      (ht[9] = Wt));
  else Wt = ht[9];
  return Wt;
}
async function call(u, s, f) {
  if (isSendFeedbackEnabled() && !f?.trim() && !hasPendingSurveyFeedback()) return e(kt, { onDone: u, context: s });
  return callLegacyFeedbackDialog(u, s, f);
}
export { renderFeedbackComponent, callLegacyFeedbackDialog, call };

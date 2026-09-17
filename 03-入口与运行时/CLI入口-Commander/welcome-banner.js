// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { useTheme } from "../../02-功能模块/状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Box, Text, useIsScreenReaderEnabled } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useTerminalSize } from "../../01-核心基础设施/共享小工具-未细化/use-terminal-size.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var b = 58,
  W = 30;
function WelcomeBanner() {
  let d = _(39),
    [L] = useTheme(),
    io = useIsScreenReaderEnabled(),
    { rows: to } = useTerminalSize();
  if (io || to < W) {
    let c;
    if (d[0] === MEMO_CACHE_SENTINEL)
      ((c = r(Text, {
        color: "claude",
        children: ["Welcome to Claude Code", " "],
      })),
        (d[0] = c));
    else c = d[0];
    let m;
    if (d[1] === MEMO_CACHE_SENTINEL)
      ((m = r(Text, {
        children: [
          c,
          r(Text, {
            dimColor: !0,
            children: [
              "v",
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
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
      })),
        (d[1] = m));
    else m = d[1];
    return m;
  }
  if (a.terminal === "Apple_Terminal") {
    let c;
    if (d[2] !== L)
      ((c = e(H, { theme: L, welcomeMessage: "Welcome to Claude Code" })),
        (d[2] = L),
        (d[3] = c));
    else c = d[3];
    return c;
  }
  if (["light", "light-daltonized", "light-ansi"].includes(L)) {
    let c;
    if (d[4] === MEMO_CACHE_SENTINEL)
      ((c = r(Text, {
        color: "claude",
        children: ["Welcome to Claude Code", " "],
      })),
        (d[4] = c));
    else c = d[4];
    let m, g, s, y, k, R, h, f, M;
    if (d[5] === MEMO_CACHE_SENTINEL)
      ((m = r(Text, {
        children: [
          c,
          r(Text, {
            dimColor: !0,
            children: [
              "v",
              {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.263",
                FEEDBACK_CHANNEL:
                  "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-09-06T01:08:56Z",
                GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
                HOOKS_WORKER_URL:
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                DD_SOURCEMAP_GROUP: "darwin",
              }.VERSION,
              " ",
            ],
          }),
        ],
      })),
        (g = e(Text, {
          children:
            "..........................................................",
        })),
        (s = e(Text, {
          children:
            "                                                          ",
        })),
        (y = e(Text, {
          children:
            "                                                          ",
        })),
        (k = e(Text, {
          children:
            "                                                          ",
        })),
        (R = e(Text, {
          children:
            "            \u2591\u2591\u2591\u2591\u2591\u2591                                        ",
        })),
        (h = e(Text, {
          children:
            "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      ",
        })),
        (f = e(Text, {
          children:
            "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    ",
        })),
        (M = e(Text, {
          children:
            "                                                          ",
        })),
        (d[5] = m),
        (d[6] = g),
        (d[7] = s),
        (d[8] = y),
        (d[9] = k),
        (d[10] = R),
        (d[11] = h),
        (d[12] = f),
        (d[13] = M));
    else
      ((m = d[5]),
        (g = d[6]),
        (s = d[7]),
        (y = d[8]),
        (k = d[9]),
        (R = d[10]),
        (h = d[11]),
        (f = d[12]),
        (M = d[13]));
    let A;
    if (d[14] === MEMO_CACHE_SENTINEL)
      ((A = r(Text, {
        children: [
          e(Text, {
            dimColor: !0,
            children: "                           \u2591\u2591\u2591\u2591",
          }),
          e(Text, { children: "                     \u2588\u2588    " }),
        ],
      })),
        (d[14] = A));
    else A = d[14];
    let N, O;
    if (d[15] === MEMO_CACHE_SENTINEL)
      ((N = r(Text, {
        children: [
          e(Text, {
            dimColor: !0,
            children:
              "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591",
          }),
          e(Text, {
            children: "               \u2588\u2588\u2592\u2592\u2588\u2588  ",
          }),
        ],
      })),
        (O = e(Text, {
          children:
            "                                            \u2592\u2592      \u2588\u2588   \u2592",
        })),
        (d[15] = N),
        (d[16] = O));
    else ((N = d[15]), (O = d[16]));
    let x;
    if (d[17] === MEMO_CACHE_SENTINEL)
      ((x = r(Text, {
        children: [
          "      ",
          e(Text, {
            color: "clawd_body",
            children:
              " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ",
          }),
          "                         \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592",
        ],
      })),
        (d[17] = x));
    else x = d[17];
    let S;
    if (d[18] === MEMO_CACHE_SENTINEL)
      ((S = r(Text, {
        children: [
          "      ",
          e(Text, {
            color: "clawd_body",
            backgroundColor: "clawd_background",
            children:
              "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588",
          }),
          "                           \u2592\u2592         \u2592\u2592 ",
        ],
      })),
        (d[18] = S));
    else S = d[18];
    let v;
    if (d[19] === MEMO_CACHE_SENTINEL)
      ((v = r(Text, {
        children: [
          "      ",
          e(Text, {
            color: "clawd_body",
            children:
              " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ",
          }),
          "                          \u2591          \u2592   ",
        ],
      })),
        (d[19] = v));
    else v = d[19];
    let V;
    if (d[20] === MEMO_CACHE_SENTINEL)
      ((V = e(Box, {
        width: b,
        children: r(Box, {
          flexDirection: "column",
          children: [
            m,
            g,
            s,
            y,
            k,
            R,
            h,
            f,
            M,
            A,
            N,
            O,
            x,
            S,
            v,
            r(Text, {
              children: [
                ".......",
                e(Text, {
                  color: "clawd_body",
                  children: "\u2588 \u2588   \u2588 \u2588",
                }),
                "..........................\u2591..........\u2592....",
              ],
            }),
          ],
        }),
      })),
        (d[20] = V));
    else V = d[20];
    return V;
  }
  let c;
  if (d[21] === MEMO_CACHE_SENTINEL)
    ((c = r(Text, { color: "claude", children: ["Welcome to Claude Code", " "] })),
      (d[21] = c));
  else c = d[21];
  let m, g, s, y, k, R, h;
  if (d[22] === MEMO_CACHE_SENTINEL)
    ((m = r(Text, {
      children: [
        c,
        r(Text, {
          dimColor: !0,
          children: [
            "v",
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.263",
              FEEDBACK_CHANNEL:
                "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-09-06T01:08:56Z",
              GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
              HOOKS_WORKER_URL:
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              DD_SOURCEMAP_GROUP: "darwin",
            }.VERSION,
            " ",
          ],
        }),
      ],
    })),
      (g = e(Text, {
        children: "..........................................................",
      })),
      (s = e(Text, {
        children: "                                                          ",
      })),
      (y = e(Text, {
        children:
          "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     ",
      })),
      (k = e(Text, {
        children:
          "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   ",
      })),
      (R = e(Text, {
        children:
          "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           ",
      })),
      (h = e(Text, {
        children:
          "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           ",
      })),
      (d[22] = m),
      (d[23] = g),
      (d[24] = s),
      (d[25] = y),
      (d[26] = k),
      (d[27] = R),
      (d[28] = h));
  else
    ((m = d[22]),
      (g = d[23]),
      (s = d[24]),
      (y = d[25]),
      (k = d[26]),
      (R = d[27]),
      (h = d[28]));
  let A, N, O, f, M;
  if (d[29] === MEMO_CACHE_SENTINEL)
    ((f = r(Text, {
      children: [
        e(Text, {
          children:
            "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    ",
        }),
        e(Text, { bold: !0, children: "*" }),
        e(Text, {
          children:
            "                \u2588\u2588\u2593\u2591\u2591      \u2593   ",
        }),
      ],
    })),
      (M = e(Text, {
        children:
          "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    ",
      })),
      (A = e(Text, {
        dimColor: !0,
        children:
          " *                                 \u2591\u2591\u2591\u2591                   ",
      })),
      (N = e(Text, {
        dimColor: !0,
        children:
          "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 ",
      })),
      (O = e(Text, {
        dimColor: !0,
        children:
          "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           ",
      })),
      (d[29] = A),
      (d[30] = N),
      (d[31] = O),
      (d[32] = f),
      (d[33] = M));
  else ((A = d[29]), (N = d[30]), (O = d[31]), (f = d[32]), (M = d[33]));
  let x;
  if (d[34] === MEMO_CACHE_SENTINEL)
    ((x = e(Text, {
      color: "clawd_body",
      children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ",
    })),
      (d[34] = x));
  else x = d[34];
  let S;
  if (d[35] === MEMO_CACHE_SENTINEL)
    ((S = r(Text, {
      children: [
        "      ",
        x,
        "                                       ",
        e(Text, { dimColor: !0, children: "*" }),
        e(Text, { children: " " }),
      ],
    })),
      (d[35] = S));
  else S = d[35];
  let v;
  if (d[36] === MEMO_CACHE_SENTINEL)
    ((v = r(Text, {
      children: [
        "      ",
        e(Text, {
          color: "clawd_body",
          children:
            "\u2588\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2588\u2588",
        }),
        e(Text, { children: "                        " }),
        e(Text, { bold: !0, children: "*" }),
        e(Text, { children: "                " }),
      ],
    })),
      (d[36] = v));
  else v = d[36];
  let V;
  if (d[37] === MEMO_CACHE_SENTINEL)
    ((V = r(Text, {
      children: [
        "      ",
        e(Text, {
          color: "clawd_body",
          children: " \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 ",
        }),
        "     *                                   ",
      ],
    })),
      (d[37] = V));
  else V = d[37];
  let oo;
  if (d[38] === MEMO_CACHE_SENTINEL)
    ((oo = e(Box, {
      width: b,
      children: r(Box, {
        flexDirection: "column",
        children: [
          m,
          g,
          s,
          y,
          k,
          R,
          h,
          f,
          M,
          A,
          N,
          O,
          S,
          v,
          V,
          r(Text, {
            children: [
              ".......",
              e(Text, {
                color: "clawd_body",
                children: "\u2588 \u2588   \u2588 \u2588",
              }),
              "..........................................",
            ],
          }),
        ],
      }),
    })),
      (d[38] = oo));
  else oo = d[38];
  return oo;
}
function H(no) {
  let l = _(44),
    { theme: bo, welcomeMessage: w } = no;
  if (["light", "light-daltonized", "light-ansi"].includes(bo)) {
    let i;
    if (l[0] !== w)
      ((i = r(Text, { color: "claude", children: [w, " "] })),
        (l[0] = w),
        (l[1] = i));
    else i = l[1];
    let z;
    if (l[2] === MEMO_CACHE_SENTINEL)
      ((z = r(Text, {
        dimColor: !0,
        children: [
          "v",
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.VERSION,
          " ",
        ],
      })),
        (l[2] = z));
    else z = l[2];
    let n;
    if (l[3] !== i) ((n = r(Text, { children: [i, z] })), (l[3] = i), (l[4] = n));
    else n = l[4];
    let I, P, B, D, T, q, F, G;
    if (l[5] === MEMO_CACHE_SENTINEL)
      ((B = e(Text, {
        children: "..........................................................",
      })),
        (D = e(Text, {
          children:
            "                                                          ",
        })),
        (T = e(Text, {
          children:
            "                                                          ",
        })),
        (q = e(Text, {
          children:
            "                                                          ",
        })),
        (F = e(Text, {
          children:
            "            \u2591\u2591\u2591\u2591\u2591\u2591                                        ",
        })),
        (G = e(Text, {
          children:
            "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                      ",
        })),
        (I = e(Text, {
          children:
            "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                                    ",
        })),
        (P = e(Text, {
          children:
            "                                                          ",
        })),
        (l[5] = I),
        (l[6] = P),
        (l[7] = B),
        (l[8] = D),
        (l[9] = T),
        (l[10] = q),
        (l[11] = F),
        (l[12] = G));
    else
      ((I = l[5]),
        (P = l[6]),
        (B = l[7]),
        (D = l[8]),
        (T = l[9]),
        (q = l[10]),
        (F = l[11]),
        (G = l[12]));
    let J;
    if (l[13] === MEMO_CACHE_SENTINEL)
      ((J = r(Text, {
        children: [
          e(Text, {
            dimColor: !0,
            children: "                           \u2591\u2591\u2591\u2591",
          }),
          e(Text, { children: "                     \u2588\u2588    " }),
        ],
      })),
        (l[13] = J));
    else J = l[13];
    let K, Q, U;
    if (l[14] === MEMO_CACHE_SENTINEL)
      ((K = r(Text, {
        children: [
          e(Text, {
            dimColor: !0,
            children:
              "                         \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591",
          }),
          e(Text, {
            children: "               \u2588\u2588\u2592\u2592\u2588\u2588  ",
          }),
        ],
      })),
        (Q = e(Text, {
          children:
            "                                            \u2592\u2592      \u2588\u2588   \u2592",
        })),
        (U = e(Text, {
          children:
            "                                          \u2592\u2592\u2591\u2591\u2592\u2592      \u2592 \u2592\u2592",
        })),
        (l[14] = K),
        (l[15] = Q),
        (l[16] = U));
    else ((K = l[14]), (Q = l[15]), (U = l[16]));
    let X;
    if (l[17] === MEMO_CACHE_SENTINEL)
      ((X = r(Text, {
        children: [
          "      ",
          e(Text, { color: "clawd_body", children: "\u2597" }),
          r(Text, {
            color: "clawd_background",
            backgroundColor: "clawd_body",
            children: [" ", "\u2597", "     ", "\u2596", " "],
          }),
          e(Text, { color: "clawd_body", children: "\u2596" }),
          "                           \u2592\u2592         \u2592\u2592 ",
        ],
      })),
        (l[17] = X));
    else X = l[17];
    let Y;
    if (l[18] === MEMO_CACHE_SENTINEL)
      ((Y = r(Text, {
        children: [
          "       ",
          e(Text, { backgroundColor: "clawd_body", children: " ".repeat(9) }),
          "                           \u2591          \u2592   ",
        ],
      })),
        (l[18] = Y));
    else Y = l[18];
    let Z;
    if (l[19] === MEMO_CACHE_SENTINEL)
      ((Z = r(Text, {
        children: [
          ".......",
          e(Text, { backgroundColor: "clawd_body", children: " " }),
          e(Text, { children: " " }),
          e(Text, { backgroundColor: "clawd_body", children: " " }),
          e(Text, { children: "   " }),
          e(Text, { backgroundColor: "clawd_body", children: " " }),
          e(Text, { children: " " }),
          e(Text, { backgroundColor: "clawd_body", children: " " }),
          "..........................\u2591..........\u2592....",
        ],
      })),
        (l[19] = Z));
    else Z = l[19];
    let j;
    if (l[20] !== n)
      ((j = e(Box, {
        width: b,
        children: r(Box, {
          flexDirection: "column",
          children: [n, B, D, T, q, F, G, I, P, J, K, Q, U, X, Y, Z],
        }),
      })),
        (l[20] = n),
        (l[21] = j));
    else j = l[21];
    return j;
  }
  let i;
  if (l[22] !== w)
    ((i = r(Text, { color: "claude", children: [w, " "] })),
      (l[22] = w),
      (l[23] = i));
  else i = l[23];
  let z;
  if (l[24] === MEMO_CACHE_SENTINEL)
    ((z = r(Text, {
      dimColor: !0,
      children: [
        "v",
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        " ",
      ],
    })),
      (l[24] = z));
  else z = l[24];
  let n;
  if (l[25] !== i) ((n = r(Text, { children: [i, z] })), (l[25] = i), (l[26] = n));
  else n = l[26];
  let B, D, T, q, F, G;
  if (l[27] === MEMO_CACHE_SENTINEL)
    ((B = e(Text, {
      children: "..........................................................",
    })),
      (D = e(Text, {
        children: "                                                          ",
      })),
      (T = e(Text, {
        children:
          "     *                                       \u2588\u2588\u2588\u2588\u2588\u2593\u2593\u2591     ",
      })),
      (q = e(Text, {
        children:
          "                                 *         \u2588\u2588\u2588\u2593\u2591     \u2591\u2591   ",
      })),
      (F = e(Text, {
        children:
          "            \u2591\u2591\u2591\u2591\u2591\u2591                        \u2588\u2588\u2588\u2593\u2591           ",
      })),
      (G = e(Text, {
        children:
          "    \u2591\u2591\u2591   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                      \u2588\u2588\u2588\u2593\u2591           ",
      })),
      (l[27] = B),
      (l[28] = D),
      (l[29] = T),
      (l[30] = q),
      (l[31] = F),
      (l[32] = G));
  else
    ((B = l[27]),
      (D = l[28]),
      (T = l[29]),
      (q = l[30]),
      (F = l[31]),
      (G = l[32]));
  let I, P, J, K, Q;
  if (l[33] === MEMO_CACHE_SENTINEL)
    ((I = r(Text, {
      children: [
        e(Text, {
          children:
            "   \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591    ",
        }),
        e(Text, { bold: !0, children: "*" }),
        e(Text, {
          children:
            "                \u2588\u2588\u2593\u2591\u2591      \u2593   ",
        }),
      ],
    })),
      (P = e(Text, {
        children:
          "                                             \u2591\u2593\u2593\u2588\u2588\u2588\u2593\u2593\u2591    ",
      })),
      (J = e(Text, {
        dimColor: !0,
        children:
          " *                                 \u2591\u2591\u2591\u2591                   ",
      })),
      (K = e(Text, {
        dimColor: !0,
        children:
          "                                 \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591                 ",
      })),
      (Q = e(Text, {
        dimColor: !0,
        children:
          "                               \u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591           ",
      })),
      (l[33] = I),
      (l[34] = P),
      (l[35] = J),
      (l[36] = K),
      (l[37] = Q));
  else ((I = l[33]), (P = l[34]), (J = l[35]), (K = l[36]), (Q = l[37]));
  let U;
  if (l[38] === MEMO_CACHE_SENTINEL)
    ((U = r(Text, {
      children: [
        "                                                      ",
        e(Text, { dimColor: !0, children: "*" }),
        e(Text, { children: "   " }),
      ],
    })),
      (l[38] = U));
  else U = l[38];
  let X;
  if (l[39] === MEMO_CACHE_SENTINEL)
    ((X = r(Text, {
      children: [
        "      ",
        e(Text, { color: "clawd_body", children: "\u2597" }),
        r(Text, {
          color: "clawd_background",
          backgroundColor: "clawd_body",
          children: [" ", "\u2597", "     ", "\u2596", " "],
        }),
        e(Text, { color: "clawd_body", children: "\u2596" }),
        e(Text, { children: "                       " }),
        e(Text, { bold: !0, children: "*" }),
        e(Text, { children: "                 " }),
      ],
    })),
      (l[39] = X));
  else X = l[39];
  let Y;
  if (l[40] === MEMO_CACHE_SENTINEL)
    ((Y = r(Text, {
      children: [
        "       ",
        e(Text, { backgroundColor: "clawd_body", children: " ".repeat(9) }),
        "      *                                   ",
      ],
    })),
      (l[40] = Y));
  else Y = l[40];
  let Z;
  if (l[41] === MEMO_CACHE_SENTINEL)
    ((Z = r(Text, {
      children: [
        ".......",
        e(Text, { backgroundColor: "clawd_body", children: " " }),
        e(Text, { children: " " }),
        e(Text, { backgroundColor: "clawd_body", children: " " }),
        e(Text, { children: "   " }),
        e(Text, { backgroundColor: "clawd_body", children: " " }),
        e(Text, { children: " " }),
        e(Text, { backgroundColor: "clawd_body", children: " " }),
        "..........................................",
      ],
    })),
      (l[41] = Z));
  else Z = l[41];
  let j;
  if (l[42] !== n)
    ((j = e(Box, {
      width: b,
      children: r(Box, {
        flexDirection: "column",
        children: [n, B, D, T, q, F, G, I, P, J, K, Q, U, X, Y, Z],
      }),
    })),
      (l[42] = n),
      (l[43] = j));
  else j = l[43];
  return j;
}
export { WelcomeBanner };

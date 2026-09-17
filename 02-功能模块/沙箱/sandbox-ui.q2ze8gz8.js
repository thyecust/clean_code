// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 155 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Bw } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { beforeFirst } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { useTheme } from "../状态栏-主题/chunk-w5jaj6kg.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { getRemoteTransport, isRemoteActive } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { getSettingsFilePathForSource, getSettings_DEPRECATED } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import {
  checkWindowsSandboxStatusAsync,
  isWindowsSandboxEnabled,
  getSrtWinLaunchConfig,
  formatWindowsSandboxErrorMessage,
  resolveWindowsTlsTerminateCaSource,
  willSandboxTlsTerminate,
  isInstalledWindowsTlsCaCurrent,
  shouldAllowManagedSandboxDomainsOnly,
  shouldForceSandboxOn,
  addToExcludedCommands,
  SandboxManager,
} from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss, Jd } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { runWindowsSandboxInstall } from "./windows-sandbox-install.js";
import { StatusLine } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { LearnMoreLink } from "../../01-核心基础设施/共享小工具-未细化/learn-more-link.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { InputGuide } from "../../01-核心基础设施/共享小工具-未细化/input-guide.js";
import { Qr } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getThemeColor } from "../../01-核心基础设施/共享小工具-未细化/theme-color.js";
import { Dn, kn, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { relative } from "path";
function ce(Un, Fn) {
  return e(Text, { dimColor: !0, children: Un }, Fn);
}
function G() {
  let Ao = _(3),
    Bn = SandboxManager.isSandboxingEnabled(),
    ie;
  if (Ao[0] === MEMO_CACHE_SENTINEL) {
    let le = SandboxManager.checkDependencies();
    ie =
      le.warnings.length > 0
        ? e(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: le.warnings.map(ce),
          })
        : null;
    Ao[0] = ie;
  } else ie = Ao[0];
  let ae = ie;
  if (!Bn) {
    let j;
    if (Ao[1] === MEMO_CACHE_SENTINEL)
      ((j = r(Box, {
        flexDirection: "column",
        children: [
          e(Text, { color: "subtle", children: "Sandbox is not enabled" }),
          ae,
        ],
      })),
        (Ao[1] = j));
    else j = Ao[1];
    return j;
  }
  let j;
  if (Ao[2] === MEMO_CACHE_SENTINEL) {
    let M = SandboxManager.getFsReadConfig();
    let Z = SandboxManager.getFsWriteConfig();
    let S = SandboxManager.getNetworkRestrictionConfig();
    let Eo = SandboxManager.getAllowUnixSockets();
    let de = SandboxManager.getExcludedCommands();
    let oo = SandboxManager.getLinuxGlobPatternWarnings();
    j = r(Box, {
      flexDirection: "column",
      children: [
        r(Box, {
          flexDirection: "column",
          children: [
            e(Text, {
              bold: !0,
              color: "permission",
              children: "Excluded Commands:",
            }),
            e(Text, {
              dimColor: !0,
              children: de.length > 0 ? de.join(", ") : "None",
            }),
          ],
        }),
        M.denyOnly.length > 0 &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, {
                bold: !0,
                color: "permission",
                children: "Filesystem Read Restrictions:",
              }),
              r(Text, {
                dimColor: !0,
                children: ["Denied: ", M.denyOnly.join(", ")],
              }),
              M.allowWithinDeny &&
                M.allowWithinDeny.length > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: [
                    "Allowed within denied: ",
                    M.allowWithinDeny.join(", "),
                  ],
                }),
            ],
          }),
        Z.allowOnly.length > 0 &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, {
                bold: !0,
                color: "permission",
                children: "Filesystem Write Restrictions:",
              }),
              r(Text, {
                dimColor: !0,
                children: ["Allowed: ", Z.allowOnly.join(", ")],
              }),
              Z.denyWithinAllow.length > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: [
                    "Denied within allowed: ",
                    Z.denyWithinAllow.join(", "),
                  ],
                }),
            ],
          }),
        ((S.allowedHosts && S.allowedHosts.length > 0) ||
          (S.deniedHosts && S.deniedHosts.length > 0)) &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              r(Text, {
                bold: !0,
                color: "permission",
                children: [
                  "Network Restrictions",
                  shouldAllowManagedSandboxDomainsOnly() ? " (Managed)" : "",
                  ":",
                ],
              }),
              S.allowedHosts &&
                S.allowedHosts.length > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["Allowed: ", S.allowedHosts.join(", ")],
                }),
              S.deniedHosts &&
                S.deniedHosts.length > 0 &&
                r(Text, {
                  dimColor: !0,
                  children: ["Denied: ", S.deniedHosts.join(", ")],
                }),
            ],
          }),
        Eo &&
          Eo.length > 0 &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, {
                bold: !0,
                color: "permission",
                children: "Allowed Unix Sockets:",
              }),
              e(Text, { dimColor: !0, children: Eo.join(", ") }),
            ],
          }),
        oo.length > 0 &&
          r(Box, {
            marginTop: 1,
            flexDirection: "column",
            children: [
              e(Text, {
                bold: !0,
                color: "warning",
                children:
                  "\u26A0 Warning: Glob patterns not fully supported on Linux",
              }),
              r(Text, {
                dimColor: !0,
                children: [
                  "The following patterns will be ignored:",
                  " ",
                  oo.slice(0, 3).join(", "),
                  oo.length > 3 && ` (${oo.length - 3} more)`,
                ],
              }),
            ],
          }),
        ae,
      ],
    });
    Ao[2] = j;
  } else j = Ao[2];
  return j;
}
F();
function We(Qn) {
  return Qn.includes("ripgrep");
}
function Ae(Xn) {
  return Xn.includes("bwrap");
}
function Ee(Yn) {
  return Yn.includes("socat");
}
function Ne(Bo) {
  return (
    !Bo.includes("ripgrep") && !Bo.includes("bwrap") && !Bo.includes("socat")
  );
}
function Be(we) {
  return e(Text, { color: "error", children: we }, we);
}
function Fe(Ho) {
  let ke = null;
  let Re = !0;
  if (willSandboxTlsTerminate())
    ((ke = Ho.user.caCertThumb !== void 0 && isInstalledWindowsTlsCaCurrent(Ho.user.caCertThumb)),
      (Re = resolveWindowsTlsTerminateCaSource().source === "managed"));
  return { ...Ho, caTrusted: ke, caManaged: Re };
}
function He(ot) {
  return { probeError: formatWindowsSandboxErrorMessage(l(ot), { omitCcRemedy: !0 }) };
}
function Ue() {
  return checkWindowsSandboxStatusAsync({ srtWin: getSrtWinLaunchConfig() }).then(Fe).catch(He);
}
function Ie(Te) {
  return (
    !Te.startsWith("Sandbox user is not provisioned") &&
    !Te.startsWith("WFP filters not installed")
  );
}
function Oe(tt) {
  return formatWindowsSandboxErrorMessage(tt);
}
function Le(Pe) {
  return e(Text, { color: "error", children: Pe }, Pe);
}
function E(_n) {
  let k = _(26),
    { depCheck: h } = _n,
    me;
  if (k[0] === MEMO_CACHE_SENTINEL) ((me = getCurrentPlatform()), (k[0] = me));
  else me = k[0];
  let ue = me,
    No = ue === "macos";
  if (ue === "windows") {
    let q;
    if (k[1] !== h) ((q = e(ao, { depCheck: h })), (k[1] = h), (k[2] = q));
    else q = k[2];
    return q;
  }
  let q;
  if (k[3] !== h.errors)
    ((q = h.errors.some(We)), (k[3] = h.errors), (k[4] = q));
  else q = k[4];
  let B = q,
    pe;
  if (k[5] !== h.errors)
    ((pe = h.errors.some(Ae)), (k[5] = h.errors), (k[6] = pe));
  else pe = k[6];
  let U = pe,
    be;
  if (k[7] !== h.errors)
    ((be = h.errors.some(Ee)), (k[7] = h.errors), (k[8] = be));
  else be = k[8];
  let H = be,
    A = h.warnings.length > 0,
    fe;
  if (
    k[9] !== U ||
    k[10] !== h.errors ||
    k[11] !== B ||
    k[12] !== A ||
    k[13] !== H
  ) {
    let zn = h.errors.filter(Ne);
    let Jn = No ? "brew install ripgrep" : "apt install ripgrep";
    let ge;
    if (k[15] === MEMO_CACHE_SENTINEL)
      ((ge =
        No &&
        e(Box, {
          flexDirection: "column",
          children: r(Text, {
            children: [
              "seatbelt: ",
              e(Text, { color: "success", children: "built-in (macOS)" }),
            ],
          }),
        })),
        (k[15] = ge));
    else ge = k[15];
    let eo, no;
    if (k[16] !== B)
      ((eo = r(Text, {
        children: [
          "ripgrep (rg):",
          " ",
          B
            ? e(Text, { color: "error", children: "not found" })
            : e(Text, { color: "success", children: "found" }),
        ],
      })),
        (no = B && r(Text, { dimColor: !0, children: ["  ", "\xB7 ", Jn] })),
        (k[16] = B),
        (k[17] = eo),
        (k[18] = no));
    else ((eo = k[17]), (no = k[18]));
    let xe;
    if (k[19] !== eo || k[20] !== no)
      ((xe = r(Box, { flexDirection: "column", children: [eo, no] })),
        (k[19] = eo),
        (k[20] = no),
        (k[21] = xe));
    else xe = k[21];
    let he;
    if (k[22] !== U || k[23] !== A || k[24] !== H)
      ((he =
        !No &&
        r(N, {
          children: [
            r(Box, {
              flexDirection: "column",
              children: [
                r(Text, {
                  children: [
                    "bubblewrap (bwrap):",
                    " ",
                    U
                      ? e(Text, { color: "error", children: "not installed" })
                      : e(Text, { color: "success", children: "installed" }),
                  ],
                }),
                U &&
                  r(Text, {
                    dimColor: !0,
                    children: ["  ", "\xB7 apt install bubblewrap"],
                  }),
              ],
            }),
            r(Box, {
              flexDirection: "column",
              children: [
                r(Text, {
                  children: [
                    "socat:",
                    " ",
                    H
                      ? e(Text, { color: "error", children: "not installed" })
                      : e(Text, { color: "success", children: "installed" }),
                  ],
                }),
                H &&
                  r(Text, {
                    dimColor: !0,
                    children: ["  ", "\xB7 apt install socat"],
                  }),
              ],
            }),
            r(Box, {
              flexDirection: "column",
              children: [
                r(Text, {
                  children: [
                    "seccomp filter:",
                    " ",
                    A
                      ? e(Text, { color: "warning", children: "not installed" })
                      : e(Text, { color: "success", children: "installed" }),
                    A &&
                      e(Text, {
                        dimColor: !0,
                        children: " (required to block unix domain sockets)",
                      }),
                  ],
                }),
                A &&
                  r(Box, {
                    flexDirection: "column",
                    children: [
                      r(Text, {
                        dimColor: !0,
                        children: [
                          "  ",
                          "\xB7 npm install -g @anthropic-ai/sandbox-runtime",
                        ],
                      }),
                      r(Text, {
                        dimColor: !0,
                        children: [
                          "  ",
                          "\xB7 or copy vendor/seccomp/* from sandbox-runtime and set",
                        ],
                      }),
                      r(Text, {
                        dimColor: !0,
                        children: [
                          "    ",
                          "sandbox.seccomp.bpfPath and applyPath in settings.json",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })),
        (k[22] = U),
        (k[23] = A),
        (k[24] = H),
        (k[25] = he));
    else he = k[25];
    fe = r(Box, {
      flexDirection: "column",
      gap: 1,
      children: [ge, xe, he, zn.map(Be)],
    });
    ((k[9] = U),
      (k[10] = h.errors),
      (k[11] = B),
      (k[12] = A),
      (k[13] = H),
      (k[14] = fe));
  } else fe = k[14];
  return fe;
}
function ao(Zn) {
  let ye = _(4),
    { depCheck: Uo } = Zn,
    [Fo] = d(Ue),
    Ce;
  if (ye[0] === MEMO_CACHE_SENTINEL)
    ((Ce = e(Text, {
      dimColor: !0,
      children: "Checking Windows sandbox status\u2026",
    })),
      (ye[0] = Ce));
  else Ce = ye[0];
  let Se;
  if (ye[1] !== Uo || ye[2] !== Fo)
    ((Se = e(Dn, {
      fallback: Ce,
      children: e(co, { statusPromise: Fo, depCheck: Uo }),
    })),
      (ye[1] = Uo),
      (ye[2] = Fo),
      (ye[3] = Se));
  else Se = ye[3];
  return Se;
}
function co(et) {
  let so = _(10),
    { statusPromise: nt, depCheck: to } = et,
    f = kn(nt),
    ro;
  if (so[0] !== f)
    ((ro =
      "probeError" in f
        ? r(Box, {
            flexDirection: "column",
            children: [
              r(Text, {
                color: "error",
                children: ["could not check sandbox status: ", f.probeError],
              }),
              r(Text, {
                dimColor: !0,
                children: [
                  "  ",
                  "\xB7 ask your administrator to install the network filters, or see https://code.claude.com/docs/en/sandboxing",
                ],
              }),
            ],
          })
        : r(Box, {
            flexDirection: "column",
            children: [
              r(Text, {
                children: [
                  "sandbox user:",
                  " ",
                  f.user.provisioned && f.user.credPresent
                    ? e(Text, { color: "success", children: "provisioned" })
                    : f.user.provisioned
                      ? e(Text, {
                          color: "warning",
                          children:
                            "provisioned \u2014 credential not readable",
                        })
                      : e(Text, { color: "error", children: "not installed" }),
                ],
              }),
              r(Text, {
                children: [
                  "network filters (WFP):",
                  " ",
                  f.wfp.state === "installed"
                    ? e(Text, { color: "success", children: "installed" })
                    : f.wfp.state === "cannot-read"
                      ? e(Text, {
                          color: "warning",
                          children: "cannot read (run elevated to check)",
                        })
                      : e(Text, { color: "error", children: "not installed" }),
                ],
              }),
              f.caTrusted !== null &&
                r(Text, {
                  children: [
                    "TLS inspection CA:",
                    " ",
                    f.caTrusted
                      ? e(Text, { color: "success", children: "trusted" })
                      : e(Text, { color: "error", children: "not trusted" }),
                  ],
                }),
              (!f.user.provisioned ||
                !f.user.credPresent ||
                f.wfp.state === "absent" ||
                (f.caTrusted === !1 && f.caManaged)) &&
                r(Text, {
                  dimColor: !0,
                  children: ["  ", "\xB7 run /sandbox install"],
                }),
              f.caTrusted === !1 &&
                !f.caManaged &&
                r(Text, {
                  dimColor: !0,
                  children: [
                    "  ",
                    "\xB7 ask your administrator to trust the configured sandbox CA \u2014 see https://code.claude.com/docs/en/sandboxing",
                  ],
                }),
            ],
          })),
      (so[0] = f),
      (so[1] = ro));
  else ro = so[1];
  let io;
  if (so[2] !== to.errors || so[3] !== f)
    ((io = "probeError" in f ? to.errors : to.errors.filter(Ie)),
      (so[2] = to.errors),
      (so[3] = f),
      (so[4] = io));
  else io = so[4];
  let lo;
  if (so[5] !== io) ((lo = io.map(Oe).map(Le)), (so[5] = io), (so[6] = lo));
  else lo = so[6];
  let De;
  if (so[7] !== ro || so[8] !== lo)
    ((De = r(Box, { flexDirection: "column", gap: 1, children: [ro, lo] })),
      (so[7] = ro),
      (so[8] = lo),
      (so[9] = De));
  else De = so[9];
  return De;
}
function K(gt) {
  let mo = _(5),
    { onComplete: Io } = gt,
    xt = SandboxManager.isSandboxingEnabled(),
    ht =
      SandboxManager.areSandboxSettingsLockedByPolicy() ||
      SandboxManager.areUnsandboxedCommandsForbiddenByPolicy(),
    je = SandboxManager.areUnsandboxedCommandsAllowed();
  if (!xt) {
    let W;
    if (mo[0] === MEMO_CACHE_SENTINEL)
      ((W = e(Box, {
        flexDirection: "column",
        children: e(Text, {
          color: "subtle",
          children:
            "Sandbox is not enabled. Enable sandbox to configure override settings.",
        }),
      })),
        (mo[0] = W));
    else W = mo[0];
    return W;
  }
  if (ht) {
    let W;
    if (mo[1] === MEMO_CACHE_SENTINEL)
      ((W = e(Text, {
        color: "subtle",
        children:
          "Override settings are managed by a higher-priority configuration and cannot be changed locally.",
      })),
        (mo[1] = W));
    else W = mo[1];
    let Me;
    if (mo[2] === MEMO_CACHE_SENTINEL)
      ((Me = r(Box, {
        flexDirection: "column",
        children: [
          W,
          e(Box, {
            marginTop: 1,
            children: r(Text, {
              dimColor: !0,
              children: [
                "Current setting:",
                " ",
                je ? "Allow unsandboxed fallback" : "Strict sandbox mode",
              ],
            }),
          }),
        ],
      })),
        (mo[2] = Me));
    else Me = mo[2];
    return Me;
  }
  let W;
  if (mo[3] !== Io)
    ((W = e(go, { onComplete: Io, currentMode: je ? "open" : "closed" })),
      (mo[3] = Io),
      (mo[4] = W));
  else W = mo[4];
  return W;
}
function go(wt) {
  let C = _(24),
    { onComplete: I, currentMode: $e } = wt,
    [Oo] = useTheme(),
    { headerFocused: Lo, focusHeader: jo } = Jd(),
    Ge;
  if (C[0] !== Oo)
    ((Ge = getThemeColor("success", Oo)("(current)")), (C[0] = Oo), (C[1] = Ge));
  else Ge = C[1];
  let qe = Ge;
  const Mo =
    $e === "open"
      ? `Allow unsandboxed fallback ${qe}`
      : "Allow unsandboxed fallback";
  let uo;
  if (C[2] !== Mo)
    ((uo = { label: Mo, value: "open" }), (C[2] = Mo), (C[3] = uo));
  else uo = C[3];
  const $o =
    $e === "closed" ? `Strict sandbox mode ${qe}` : "Strict sandbox mode";
  let po;
  if (C[4] !== $o)
    ((po = { label: $o, value: "closed" }), (C[4] = $o), (C[5] = po));
  else po = C[5];
  let Ve;
  if (C[6] !== uo || C[7] !== po)
    ((Ve = [uo, po]), (C[6] = uo), (C[7] = po), (C[8] = Ve));
  else Ve = C[8];
  let Go = Ve,
    Ke;
  if (C[9] !== I)
    ((Ke = async function V(yt) {
      let _e = yt;
      (await SandboxManager.setSandboxSettings({ allowUnsandboxedCommands: _e === "open" }),
        I(
          _e === "open"
            ? "\u2713 Unsandboxed fallback allowed - commands can run outside sandbox when necessary"
            : "\u2713 Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option",
        ));
    }),
      (C[9] = I),
      (C[10] = Ke));
  else Ke = C[10];
  let V = Ke,
    ze;
  if (C[11] === MEMO_CACHE_SENTINEL)
    ((ze = e(Box, {
      marginBottom: 1,
      children: e(Text, { bold: !0, children: "Configure overrides" }),
    })),
      (C[11] = ze));
  else ze = C[11];
  let bo;
  if (C[12] !== I)
    ((bo = () => I(void 0, { display: "skip" })), (C[12] = I), (C[13] = bo));
  else bo = C[13];
  let fo;
  if (
    C[14] !== jo ||
    C[15] !== V ||
    C[16] !== Lo ||
    C[17] !== Go ||
    C[18] !== bo
  )
    ((fo = e(ve, {
      options: Go,
      onChange: V,
      onCancel: bo,
      onUpFromFirstItem: jo,
      isDisabled: Lo,
    })),
      (C[14] = jo),
      (C[15] = V),
      (C[16] = Lo),
      (C[17] = Go),
      (C[18] = bo),
      (C[19] = fo));
  else fo = C[19];
  let Je;
  if (C[20] === MEMO_CACHE_SENTINEL)
    ((Je = r(Text, {
      dimColor: !0,
      wrap: "wrap-trim",
      children: [
        e(Text, {
          bold: !0,
          dimColor: !0,
          children: "Allow unsandboxed fallback:",
        }),
        " ",
        "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions).",
      ],
    })),
      (C[20] = Je));
  else Je = C[20];
  let Qe;
  if (C[21] === MEMO_CACHE_SENTINEL)
    ((Qe = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [
        Je,
        r(Text, {
          dimColor: !0,
          wrap: "wrap-trim",
          children: [
            e(Text, { bold: !0, dimColor: !0, children: "Strict sandbox mode:" }),
            " ",
            "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands.",
          ],
        }),
        e(LearnMoreLink, {
          url: "https://code.claude.com/docs/en/sandboxing#configure-sandboxing",
        }),
      ],
    })),
      (C[21] = Qe));
  else Qe = C[21];
  let Xe;
  if (C[22] !== fo)
    ((Xe = r(Box, { flexDirection: "column", children: [ze, fo, Qe] })),
      (C[22] = fo),
      (C[23] = Xe));
  else Xe = C[23];
  return Xe;
}
function Pn(Yt) {
  return Yt.value === "auto-allow";
}
function vo(Mt) {
  let x = _(32),
    { onComplete: y, depCheck: O } = Mt,
    Ye;
  if (x[0] === MEMO_CACHE_SENTINEL) ((Ye = SandboxManager.isSandboxingEnabled()), (x[0] = Ye));
  else Ye = x[0];
  let $t = Ye,
    on;
  if (x[1] === MEMO_CACHE_SENTINEL) ((on = SandboxManager.isAutoAllowBashIfSandboxedEnabled()), (x[1] = on));
  else on = x[1];
  let Gt = on,
    xo = O.warnings.length > 0,
    en;
  if (x[2] === MEMO_CACHE_SENTINEL) ((en = getSettings_DEPRECATED()), (x[2] = en));
  else en = x[2];
  let qt = en.sandbox?.network?.allowAllUnixSockets,
    qo = xo && !qt,
    nn;
  if (x[3] === MEMO_CACHE_SENTINEL)
    ((nn = () => {
      if (!$t) {
        return "disabled";
      }
      if (Gt) {
        return "auto-allow";
      }
      return "regular";
    }),
      (x[3] = nn));
  else nn = x[3];
  let Vt = nn,
    tn;
  if (x[4] === MEMO_CACHE_SENTINEL) ((tn = shouldForceSandboxOn()), (x[4] = tn));
  else tn = x[4];
  let sn = tn,
    rn = Vt(),
    Kt = sn && rn === "disabled" ? "regular" : rn,
    ln;
  if (x[5] === MEMO_CACHE_SENTINEL) ((ln = SandboxManager.isAutoAllowSupported()), (x[5] = ln));
  else ln = x[5];
  let z = ln,
    an;
  if (x[6] === MEMO_CACHE_SENTINEL)
    ((an = z
      ? [{ label: "Sandbox BashTool, with auto-allow", value: "auto-allow" }]
      : []),
      (x[6] = an));
  else an = x[6];
  let dn;
  if (x[7] === MEMO_CACHE_SENTINEL)
    ((dn = [
      ...an,
      {
        label: z
          ? "Sandbox BashTool, with regular permissions"
          : "Sandbox BashTool",
        value: "regular",
      },
      ...(sn ? [] : [{ label: "No Sandbox", value: "disabled" }]),
    ]),
      (x[7] = dn));
  else dn = x[7];
  let _t = dn,
    zt,
    mn;
  if (x[8] !== y)
    ((mn = async function J(Jt) {
      bb41: switch (Jt) {
        case "auto-allow": {
          (await SandboxManager.setSandboxSettings({
            enabled: !0,
            autoAllowBashIfSandboxed: !0,
          }),
            y("\u2713 Sandbox enabled with auto-allow for bash commands"));
          break bb41;
        }
        case "regular": {
          (await SandboxManager.setSandboxSettings({
            enabled: !0,
            ...(z && { autoAllowBashIfSandboxed: !1 }),
          }),
            y(
              z
                ? "\u2713 Sandbox enabled with regular bash permissions"
                : "\u2713 Sandbox enabled",
            ));
          break bb41;
        }
        case "disabled": {
          (await SandboxManager.setSandboxSettings({
            enabled: !1,
            ...(z && { autoAllowBashIfSandboxed: !1 }),
          }),
            y("\u25CB Sandbox disabled"));
        }
      }
    }),
      (x[8] = y),
      (x[9] = mn));
  else mn = x[9];
  let J = mn,
    un;
  if (x[10] !== y)
    ((un = { "confirm:no": () => y(void 0, { display: "skip" }) }),
      (x[10] = y),
      (x[11] = un));
  else un = x[11];
  let pn;
  if (x[12] === MEMO_CACHE_SENTINEL) ((pn = { context: "Settings" }), (x[12] = pn));
  else pn = x[12];
  useKeybindings(un, pn);
  let fn;
  if (x[13] !== J || x[14] !== y || x[15] !== qo)
    ((fn = e(
      ss,
      {
        title: "Mode",
        children: e(Wo, {
          showSocketWarning: qo,
          options: _t,
          currentMode: Kt,
          noSandboxHint: zt,
          onSelect: J,
          onComplete: y,
        }),
      },
      "mode",
    )),
      (x[13] = J),
      (x[14] = y),
      (x[15] = qo),
      (x[16] = fn));
  else fn = x[16];
  let Vo = fn,
    gn;
  if (x[17] !== y)
    ((gn = e(
      ss,
      { title: "Overrides", children: e(K, { onComplete: y }) },
      "overrides",
    )),
      (x[17] = y),
      (x[18] = gn));
  else gn = x[18];
  let Ko = gn,
    xn;
  if (x[19] === MEMO_CACHE_SENTINEL)
    ((xn = e(ss, { title: "Config", children: e(G, {}) }, "config")),
      (x[19] = xn));
  else xn = x[19];
  let Qt = xn,
    _o = O.errors.length > 0,
    hn;
  if (
    x[20] !== O ||
    x[21] !== _o ||
    x[22] !== xo ||
    x[23] !== Vo ||
    x[24] !== Ko
  )
    ((hn = _o
      ? [
          e(
            ss,
            { title: "Dependencies", children: e(E, { depCheck: O }) },
            "dependencies",
          ),
        ]
      : [
          Vo,
          ...(xo
            ? [
                e(
                  ss,
                  { title: "Dependencies", children: e(E, { depCheck: O }) },
                  "dependencies",
                ),
              ]
            : []),
          Ko,
          Qt,
        ]),
      (x[20] = O),
      (x[21] = _o),
      (x[22] = xo),
      (x[23] = Vo),
      (x[24] = Ko),
      (x[25] = hn));
  else hn = x[25];
  let zo = hn,
    wn;
  if (x[26] === MEMO_CACHE_SENTINEL)
    ((wn = isRemoteActive()
      ? e(Box, {
          marginTop: 1,
          children: e(Text, {
            dimColor: !0,
            wrap: "wrap-trim",
            children:
              getRemoteTransport()?.sessionId !== void 0
                ? "Commands Claude runs on this computer use this sandbox; the cloud session's own sandbox, in its container, isn't shown or changed here."
                : "Commands Claude runs on this computer use this sandbox; the remote session's own sandbox isn't shown or changed here.",
          }),
        })
      : void 0),
      (x[26] = wn));
  else wn = x[26];
  let wo;
  if (x[27] !== zo)
    ((wo = e(qp, {
      title: "Sandbox",
      color: "permission",
      defaultTab: "Mode",
      banner: wn,
      children: zo,
    })),
      (x[27] = zo),
      (x[28] = wo));
  else wo = x[28];
  let yn;
  if (x[29] === MEMO_CACHE_SENTINEL)
    ((yn = e(Box, {
      marginTop: 1,
      children: e(InputGuide, {
        children:
          "\u2190/\u2192 to switch \xB7 \u2191/\u2193 to navigate \xB7 Enter to select \xB7 Esc to close",
      }),
    })),
      (x[29] = yn));
  else yn = x[29];
  let Cn;
  if (x[30] !== wo)
    ((Cn = r(Qr, { color: "permission", children: [wo, yn] })),
      (x[30] = wo),
      (x[31] = Cn));
  else Cn = x[31];
  return Cn;
}
function Wo(Xt) {
  let D = _(24),
    {
      showSocketWarning: Jo,
      options: L,
      currentMode: yo,
      noSandboxHint: Co,
      onSelect: Qo,
      onComplete: Xo,
    } = Xt,
    { headerFocused: Yo, focusHeader: Zo } = Jd(),
    So;
  if (D[0] !== Jo)
    ((So =
      Jo &&
      e(Box, {
        marginBottom: 1,
        children: e(StatusLine, {
          status: "warning",
          children: "Cannot block unix domain sockets (see Dependencies tab)",
        }),
      })),
      (D[0] = Jo),
      (D[1] = So));
  else So = D[1];
  let Sn;
  if (D[2] === MEMO_CACHE_SENTINEL)
    ((Sn = e(Box, {
      marginBottom: 1,
      children: e(Text, { bold: !0, children: "Configure mode" }),
    })),
      (D[2] = Sn));
  else Sn = D[2];
  let ko;
  if (D[3] !== Xo)
    ((ko = () => Xo(void 0, { display: "skip" })), (D[3] = Xo), (D[4] = ko));
  else ko = D[4];
  let Ro;
  if (
    D[5] !== yo ||
    D[6] !== Zo ||
    D[7] !== Yo ||
    D[8] !== Qo ||
    D[9] !== L ||
    D[10] !== ko
  )
    ((Ro = e(ve, {
      options: L,
      defaultValue: yo,
      defaultFocusValue: yo,
      onChange: Qo,
      onCancel: ko,
      onUpFromFirstItem: Zo,
      isDisabled: Yo,
    })),
      (D[5] = yo),
      (D[6] = Zo),
      (D[7] = Yo),
      (D[8] = Qo),
      (D[9] = L),
      (D[10] = ko),
      (D[11] = Ro));
  else Ro = D[11];
  let Do;
  if (D[12] !== Co)
    ((Do =
      Co &&
      e(Box, { marginTop: 1, children: e(Text, { dimColor: !0, children: Co }) })),
      (D[12] = Co),
      (D[13] = Do));
  else Do = D[13];
  let To;
  if (D[14] !== L)
    ((To =
      L.some(Pn) &&
      r(Text, {
        dimColor: !0,
        children: [
          e(Text, { bold: !0, dimColor: !0, children: "Auto-allow mode:" }),
          " ",
          "Commands will try to run in the sandbox automatically, and attempts to run outside of the sandbox fallback to regular permissions. Explicit ask/deny rules are always respected.",
        ],
      })),
      (D[14] = L),
      (D[15] = To));
  else To = D[15];
  let Rn;
  if (D[16] === MEMO_CACHE_SENTINEL)
    ((Rn = e(LearnMoreLink, { url: "https://code.claude.com/docs/en/sandboxing" })),
      (D[16] = Rn));
  else Rn = D[16];
  let Po;
  if (D[17] !== To)
    ((Po = r(Box, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [To, Rn],
    })),
      (D[17] = To),
      (D[18] = Po));
  else Po = D[18];
  let Tn;
  if (D[19] !== So || D[20] !== Ro || D[21] !== Do || D[22] !== Po)
    ((Tn = r(Box, { flexDirection: "column", children: [So, Sn, Ro, Do, Po] })),
      (D[19] = So),
      (D[20] = Ro),
      (D[21] = Do),
      (D[22] = Po),
      (D[23] = Tn));
  else Tn = D[23];
  return Tn;
}
async function ps(s, u, n) {
  let c = getSettings_DEPRECATED().theme || "light",
    b = getCurrentPlatform();
  if (!SandboxManager.isSupportedPlatform()) {
    let a =
        b === "wsl"
          ? "Error: Sandboxing requires WSL2. WSL1 is not supported."
          : "Error: Sandboxing is currently only supported on macOS, Linux, and WSL2.",
      m = getThemeColor("error", c)(a);
    return (s(m), null);
  }
  if (!SandboxManager.isPlatformInEnabledList()) {
    let a = getThemeColor(
      "error",
      c,
    )(
      `Error: Sandboxing is disabled for this platform (${b}) via the enabledPlatforms setting.`,
    );
    return (s(a), null);
  }
  if (SandboxManager.areSandboxSettingsLockedByPolicy()) {
    let a = getThemeColor(
      "error",
      c,
    )(
      "Error: Sandbox settings are overridden by a higher-priority configuration and cannot be changed locally.",
    );
    return (s(a), null);
  }
  let g = n?.trim() || "",
    w = beforeFirst(g, " ");
  if (w === "install" && b === "windows" && isWindowsSandboxEnabled()) {
    if (g !== "install")
      return (
        s(
          getThemeColor(
            "error",
            c,
          )("install takes no arguments. Run /sandbox install by itself."),
        ),
        null
      );
    let a = await runWindowsSandboxInstall(u.session.host);
    return (
      s(
        getThemeColor(
          {
            ok: "success",
            cancelled: "warning",
            partial: "warning",
            error: "error",
          }[a.status],
          c,
        )(a.message),
      ),
      null
    );
  }
  if (!g) {
    let a = SandboxManager.checkDependencies();
    return e(vo, { onComplete: s, depCheck: a });
  }
  if (g)
    if (w === "exclude") {
      let a = g.slice(8).trim();
      if (!a) {
        let Y = getThemeColor(
          "error",
          c,
        )(
          'Error: Please provide a command pattern to exclude (e.g., /sandbox exclude "npm run test:*")',
        );
        return (s(Y), null);
      }
      let m = a.replace(/^["']|["']$/g, ""),
        { settingsSource: T } = addToExcludedCommands(m),
        v = getSettingsFilePathForSource(T),
        R = v ? relative(Bw(), v) : ".claude/settings.local.json",
        Q = v && R.startsWith("..") ? v : R,
        X = getThemeColor("success", c)(`Added "${m}" to excluded commands in ${Q}`);
      return (s(X), null);
    } else {
      let a = getThemeColor(
        "error",
        c,
      )(
        `Error: Unknown subcommand "${w}". Available: ${b === "windows" && isWindowsSandboxEnabled() ? "install, exclude" : "exclude"}`,
      );
      return (s(a), null);
    }
  return null;
}
export { ps as call };

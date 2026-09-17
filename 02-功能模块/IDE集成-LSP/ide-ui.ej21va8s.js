// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 247 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { chalk } from "../../01-核心基础设施/ANSI-样式-布局原语/chalk-ansi.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { useStorageV5Context } from "../../01-核心基础设施/共享小工具-未细化/storage-v5-context.js";
import { getCurrentWorktreeSession, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { Box, Text, useTimeout } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useAppStateSelector, useSetAppState } from "../../01-核心基础设施/共享小工具-未细化/app-state-context.js";
import { useIsMountRecent, useSettleAfterChange, useRefusedInputWindow, NO_COMMITTED_ROW, Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { REFUSE_INPUT_WINDOW_MS } from "../../01-核心基础设施/共享小工具-未细化/recent-window.js";
import { isJetBrainsIde, isJetBrainsTerminal, isSupportedIdeTerminal, discoverIdeServers, identifyVscodeFork, resolveVscodeCommand, detectRunningIdes, getIdeDisplayName } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import "../../01-核心基础设施/共享小工具-未细化/virtual-scroll-viewport-context.js";
import { OverflowHint } from "../../03-入口与运行时/会话UI-REPL/tool-result-display.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { setMcpClientOnClose } from "../../01-核心基础设施/共享小工具-未细化/chunk-7wm8t84g.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import { BulletItem } from "../../01-核心基础设施/共享小工具-未细化/bullet-item.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { E, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import * as fe from "path";
F();
function St(Wo) {
  return { ...Wo, autoConnectIde: !1 };
}
function ne(_o) {
  let O = _(20),
    { onComplete: X } = _o,
    { storageV5: $e } = useStorageV5Context(),
    Ae = useIsMountRecent(REFUSE_INPUT_WINDOW_MS),
    { refusedWithin: je, noteRefused: Me, epoch: ko } = useRefusedInputWindow(),
    We = useSettleAfterChange(ko, REFUSE_INPUT_WINDOW_MS),
    Le = C(!1),
    ht;
  if (O[0] !== Ae || O[1] !== Me || O[2] !== je)
    ((ht = () => {
      if (Ae() || je(REFUSE_INPUT_WINDOW_MS)) {
        return (Me(), !0);
      }
      return !1;
    }),
      (O[0] = Ae),
      (O[1] = Me),
      (O[2] = je),
      (O[3] = ht));
  else ht = O[3];
  let M = ht,
    gt;
  if (O[4] !== X || O[5] !== M || O[6] !== $e)
    ((gt = async (Po) => {
      if (M()) {
        return;
      }
      if (Le.current) {
        return;
      }
      Le.current = !0;
      let Fo = Po === "yes";
      (await saveGlobalConfig(
        (Ao) => ({
          ...Ao,
          autoConnectIde: Fo,
          hasIdeAutoConnectDialogBeenShown: !0,
        }),
        $e,
      ),
        X());
    }),
      (O[4] = X),
      (O[5] = M),
      (O[6] = $e),
      (O[7] = gt));
  else gt = O[7];
  let Oe = gt,
    Dt;
  if (O[8] !== X || O[9] !== M)
    ((Dt = () => {
      if (M()) {
        return;
      }
      if (Le.current) {
        return;
      }
      X();
    }),
      (O[8] = X),
      (O[9] = M),
      (O[10] = Dt));
  else Dt = O[10];
  let Be = Dt,
    Ct;
  if (O[11] === MEMO_CACHE_SENTINEL)
    ((Ct = [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ]),
      (O[11] = Ct));
  else Ct = O[11];
  let jo = Ct,
    he;
  if (O[12] !== Oe || O[13] !== We.remountKey || O[14] !== M)
    ((he = e(
      Select,
      {
        hideIndexes: !0,
        refuseInput: M,
        options: jo,
        onChange: Oe,
        defaultFocusValue: "no",
        selectedValue: NO_COMMITTED_ROW,
      },
      We.remountKey,
    )),
      (O[12] = Oe),
      (O[13] = We.remountKey),
      (O[14] = M),
      (O[15] = he));
  else he = O[15];
  let yt;
  if (O[16] === MEMO_CACHE_SENTINEL)
    ((yt = e(Text, {
      dimColor: !0,
      children: "You can also configure this in /config or with the --ide flag",
    })),
      (O[16] = yt));
  else yt = O[16];
  let wt;
  if (O[17] !== Be || O[18] !== he)
    ((wt = r(de, {
      title: "Do you wish to enable auto-connect to IDE?",
      color: "ide",
      onCancel: Be,
      children: [he, yt],
    })),
      (O[17] = Be),
      (O[18] = he),
      (O[19] = wt));
  else wt = O[19];
  return wt;
}
function De() {
  let n = getGlobalConfig();
  return (
    !isSupportedIdeTerminal() &&
    n.autoConnectIde !== !0 &&
    n.hasIdeAutoConnectDialogBeenShown !== !0
  );
}
function re(Mo) {
  let ge = _(11),
    { onComplete: H } = Mo,
    { storageV5: Ye } = useStorageV5Context(),
    Et;
  if (ge[0] !== H || ge[1] !== Ye)
    ((Et = () => {
      (saveGlobalConfig(St, Ye), H(!0));
    }),
      (ge[0] = H),
      (ge[1] = Ye),
      (ge[2] = Et));
  else Et = ge[2];
  let qe = Et,
    bt;
  if (ge[3] !== H)
    ((bt = () => {
      H(!1);
    }),
      (ge[3] = H),
      (ge[4] = bt));
  else bt = ge[4];
  let K = bt,
    Ie;
  if (ge[5] !== K || ge[6] !== qe)
    ((Ie = e(ConfirmPrompt, {
      hideIndexes: !0,
      cancelFirst: !0,
      focus: "cancel",
      onConfirm: qe,
      onCancel: K,
    })),
      (ge[5] = K),
      (ge[6] = qe),
      (ge[7] = Ie));
  else Ie = ge[7];
  let vt;
  if (ge[8] !== K || ge[9] !== Ie)
    ((vt = e(de, {
      title: "Do you wish to disable auto-connect to IDE?",
      subtitle: "You can also configure this in /config",
      onCancel: K,
      color: "ide",
      children: Ie,
    })),
      (ge[8] = K),
      (ge[9] = Ie),
      (ge[10] = vt));
  else vt = ge[10];
  return vt;
}
function Ce() {
  let n = getGlobalConfig();
  return !isSupportedIdeTerminal() && n.autoConnectIde === !0;
}
function ro(Ke, kt) {
  return ((Ke[kt.name] = (Ke[kt.name] || 0) + 1), Ke);
}
function so(Pt) {
  return Pt.name === "VS Code" || Pt.name === "Visual Studio Code";
}
function ao(Ft, Dn) {
  return e(
    BulletItem,
    {
      children: r(Text, {
        dimColor: !0,
        children: [Ft.name, ": ", formatWorkspaceFolders(Ft.workspaceFolders)],
      }),
    },
    Dn,
  );
}
function co(Ot) {
  return { label: Ot.name, value: Ot.port.toString() };
}
function lo(Xt) {
  return { label: getIdeDisplayName(Xt), value: Xt };
}
function go(An) {
  return An.name === "ide";
}
function uo(jn) {
  return jn.mcp.clients.find(go);
}
function po() {}
function Io(Mn) {
  return Mn.name !== "ide";
}
function Do(Wn) {
  return !Wn.name?.startsWith("mcp__ide__");
}
function Co(Ln) {
  return !Ln.name?.startsWith("mcp__ide__");
}
function fo(pe) {
  return {
    ...pe,
    mcp: {
      ...pe.mcp,
      clients: pe.mcp.clients.filter(Io),
      tools: pe.mcp.tools.filter(Do),
      commands: pe.mcp.commands.filter(Co),
    },
  };
}
function ho(On) {
  let { ide: _removed, ...Bn } = On ?? {};
  return Bn;
}
function Pe(dn) {
  let A = _(30),
    {
      availableIDEs: V,
      unavailableIDEs: B,
      selectedIDE: Je,
      onClose: ze,
      onSelect: Z,
    } = dn,
    Rt;
  if (A[0] !== Je?.port)
    ((Rt = Je?.port?.toString() ?? "None"), (A[0] = Je?.port), (A[1] = Rt));
  else Rt = A[1];
  let [Y, un] = d(Rt),
    [pn, mn] = d(!1),
    [fn, hn] = d(!1),
    xt;
  if (A[2] !== V || A[3] !== Z)
    ((xt = (Xe) => {
      if (Xe !== "None" && De()) mn(!0);
      else if (Xe === "None" && Ce()) hn(!0);
      else Z(V.find((gn) => gn.port === parseInt(Xe)));
    }),
      (A[2] = V),
      (A[3] = Z),
      (A[4] = xt));
  else xt = A[4];
  let G = xt,
    Nt;
  if (A[5] !== V) ((Nt = V.reduce(ro, {})), (A[5] = V), (A[6] = Nt));
  else Nt = A[6];
  let se = Nt,
    Tt;
  if (A[7] !== V || A[8] !== se) {
    let k;
    if (A[10] !== se)
      ((k = (ae) => {
        let In = (se[ae.name] || 0) > 1 && ae.workspaceFolders.length > 0;
        return {
          label: ae.name,
          value: ae.port.toString(),
          description: In ? formatWorkspaceFolders(ae.workspaceFolders) : void 0,
        };
      }),
        (A[10] = se),
        (A[11] = k));
    else k = A[11];
    Tt = V.map(k).concat([
      { label: "None", value: "None", description: void 0 },
    ]);
    ((A[7] = V), (A[8] = se), (A[9] = Tt));
  } else Tt = A[9];
  let He = Tt;
  if (pn) {
    let k;
    if (A[12] !== G || A[13] !== Y)
      ((k = e(ne, { onComplete: () => G(Y) })),
        (A[12] = G),
        (A[13] = Y),
        (A[14] = k));
    else k = A[14];
    return k;
  }
  if (fn) {
    let k;
    if (A[15] !== Z)
      ((k = e(re, {
        onComplete: () => {
          Z(void 0);
        },
      })),
        (A[15] = Z),
        (A[16] = k));
    else k = A[16];
    return k;
  }
  let k;
  if (A[17] !== V || A[18] !== G || A[19] !== He || A[20] !== Y)
    ((k =
      V.length === 0
        ? e(EmptyStateMessage, {
            children: isJetBrainsTerminal()
              ? `No available IDEs detected. Please install the plugin and restart your IDE:
https://code.claude.com/docs/en/jetbrains`
              : "No available IDEs detected. Make sure your IDE has the Claude Code extension or plugin installed and is running.",
          })
        : r(N, {
            children: [
              e(Select, {
                defaultValue: Y,
                defaultFocusValue: Y,
                options: He,
                onChange: (Vt) => {
                  (un(Vt), G(Vt));
                },
              }),
              V.some(so) &&
                e(Box, {
                  marginTop: 1,
                  children: e(Text, {
                    color: "warning",
                    children:
                      "Note: Only one Claude Code instance can be connected to VS Code at a time.",
                  }),
                }),
              !isSupportedIdeTerminal() &&
                e(Box, {
                  marginTop: 1,
                  children: e(Text, {
                    dimColor: !0,
                    children:
                      "Tip: You can enable auto-connect to IDE in /config or with the --ide flag",
                  }),
                }),
            ],
          })),
      (A[17] = V),
      (A[18] = G),
      (A[19] = He),
      (A[20] = Y),
      (A[21] = k));
  else k = A[21];
  let ye;
  if (A[22] !== B)
    ((ye =
      B.length > 0 &&
      r(Box, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          r(Text, {
            dimColor: !0,
            children: [
              "Found ",
              B.length,
              " other running IDE(s). However, their workspace/project directories do not match the current cwd.",
            ],
          }),
          r(Box, {
            marginTop: 1,
            paddingLeft: 3,
            flexDirection: "column",
            children: [
              B.slice(0, 4).map(ao),
              B.length > 4 && e(OverflowHint, { count: B.length - 4, unit: "IDE" }),
            ],
          }),
        ],
      })),
      (A[22] = B),
      (A[23] = ye));
  else ye = A[23];
  let we;
  if (A[24] !== k || A[25] !== ye)
    ((we = r(Box, { flexDirection: "column", children: [k, ye] })),
      (A[24] = k),
      (A[25] = ye),
      (A[26] = we));
  else we = A[26];
  let _t;
  if (A[27] !== ze || A[28] !== we)
    ((_t = e(de, {
      title: "Select IDE",
      subtitle: "Connect to an IDE for integrated development features.",
      onCancel: ze,
      color: "ide",
      children: we,
    })),
      (A[27] = ze),
      (A[28] = we),
      (A[29] = _t));
  else _t = A[29];
  return _t;
}
async function no(n, s) {
  let m = s?.ide;
  if (!m || (m.type !== "sse-ide" && m.type !== "ws-ide")) return null;
  for (let l of n) if (l.url === m.url) return l;
  return null;
}
function ut(Cn) {
  let q = _(18),
    { availableIDEs: W, onSelectIDE: Ue, onDone: Qe } = Cn,
    $t;
  if (q[0] !== W[0]?.port)
    (($t = W[0]?.port?.toString() ?? ""), (q[0] = W[0]?.port), (q[1] = $t));
  else $t = q[1];
  let [Ee, yn] = d($t),
    At;
  if (q[2] !== W || q[3] !== Ue)
    ((At = (wn) => {
      let vn = W.find((bn) => bn.port === parseInt(wn));
      Ue(vn);
    }),
      (q[2] = W),
      (q[3] = Ue),
      (q[4] = At));
  else At = q[4];
  let Ze = At,
    jt;
  if (q[5] !== W) ((jt = W.map(co)), (q[5] = W), (q[6] = jt));
  else jt = q[6];
  let Ge = jt,
    Mt;
  if (q[7] !== Qe)
    ((Mt = function ce() {
      Qe("IDE selection cancelled", { display: "system" });
    }),
      (q[7] = Qe),
      (q[8] = Mt));
  else Mt = q[8];
  let ce = Mt,
    be;
  if (q[9] !== Ze)
    ((be = (Wt) => {
      (yn(Wt), Ze(Wt));
    }),
      (q[9] = Ze),
      (q[10] = be));
  else be = q[10];
  let Se;
  if (q[11] !== Ge || q[12] !== Ee || q[13] !== be)
    ((Se = e(Select, {
      defaultValue: Ee,
      defaultFocusValue: Ee,
      options: Ge,
      onChange: be,
    })),
      (q[11] = Ge),
      (q[12] = Ee),
      (q[13] = be),
      (q[14] = Se));
  else Se = q[14];
  let Lt;
  if (q[15] !== ce || q[16] !== Se)
    ((Lt = e(de, {
      title: "Select an IDE to open the project",
      onCancel: ce,
      color: "ide",
      children: Se,
    })),
      (q[15] = ce),
      (q[16] = Se),
      (q[17] = Lt));
  else Lt = q[17];
  return Lt;
}
function pt(Sn) {
  let te = _(15),
    { runningIDEs: Re, onSelectIDE: et, onDone: tt } = Sn,
    [ot, xn] = d(Re[0] ?? ""),
    Bt;
  if (te[0] !== et)
    ((Bt = (Nn) => {
      et(Nn);
    }),
      (te[0] = et),
      (te[1] = Bt));
  else Bt = te[1];
  let nt = Bt,
    Yt;
  if (te[2] !== Re) ((Yt = Re.map(lo)), (te[2] = Re), (te[3] = Yt));
  else Yt = te[3];
  let it = Yt,
    qt;
  if (te[4] !== tt)
    ((qt = function le() {
      tt("IDE selection cancelled", { display: "system" });
    }),
      (te[4] = tt),
      (te[5] = qt));
  else qt = te[5];
  let le = qt,
    xe;
  if (te[6] !== nt)
    ((xe = (Jt) => {
      (xn(Jt), nt(Jt));
    }),
      (te[6] = nt),
      (te[7] = xe));
  else xe = te[7];
  let Ne;
  if (te[8] !== it || te[9] !== ot || te[10] !== xe)
    ((Ne = e(Select, { defaultFocusValue: ot, options: it, onChange: xe })),
      (te[8] = it),
      (te[9] = ot),
      (te[10] = xe),
      (te[11] = Ne));
  else Ne = te[11];
  let zt;
  if (te[12] !== le || te[13] !== Ne)
    ((zt = e(de, {
      title: "Select IDE to install extension",
      onCancel: le,
      color: "ide",
      children: Ne,
    })),
      (te[12] = le),
      (te[13] = Ne),
      (te[14] = zt));
  else zt = te[14];
  return zt;
}
function mt(Tn) {
  let Vn = _(4),
    { ide: Ve, onInstall: ke } = Tn,
    Ht,
    Kt;
  if (Vn[0] !== Ve || Vn[1] !== ke)
    ((Ht = () => {
      ke(Ve);
    }),
      (Kt = [Ve, ke]),
      (Vn[0] = Ve),
      (Vn[1] = ke),
      (Vn[2] = Ht),
      (Vn[3] = Kt));
  else ((Ht = Vn[2]), (Kt = Vn[3]));
  return (E(Ht, Kt), null);
}
async function openProjectInSelectedIDE(n, s, m, l) {
  if (!n) {
    l("No IDE selected.");
    return;
  }
  let h = identifyVscodeFork(n.name),
    a = h ? await resolveVscodeCommand(h, n.name) : null;
  if (!a) {
    l(
      `Please open the ${m ? "worktree" : "project"} manually in ${chalk.bold(n.name)}: ${s}`,
    );
    return;
  }
  let w = { useCwd: !0, useToolMemoryCgroup: !1 },
    { code: g } = await execFileNoThrow(a, [s], w);
  if (g !== 0 && !fe.basename(a).startsWith("code"))
    ({ code: g } = await execFileNoThrow("code", [s], w));
  if (g === 0) {
    (logFeatureOk("ide_open_project"),
      l(`Opened ${m ? "worktree" : "project"} in ${chalk.bold(n.name)}`));
    return;
  }
  (logFeatureBad("ide_open_project", "ide_open_project_failed"),
    l(`Failed to open in ${n.name}. Try opening manually: ${s}`));
}
async function cn(n, s, m) {
  logEvent("tengu_ext_ide_command", {});
  let {
    options: { dynamicMcpConfig: l },
    onChangeDynamicMcpConfig: h,
  } = s;
  if (m?.trim() === "open") {
    let I = getCurrentWorktreeSession(),
      x = I ? I.worktreePath : getCwd(),
      b = (await discoverIdeServers(!0)).filter((T) => T.isValid);
    if (b.length === 0)
      return (n("No IDEs with Claude Code extension detected."), null);
    return e(ut, {
      availableIDEs: b,
      onSelectIDE: (T) => openProjectInSelectedIDE(T, x, !!I, n),
      onDone: () => {
        n("Exited without opening IDE", { display: "system" });
      },
    });
  }
  let a = await discoverIdeServers(!0);
  if (a.length === 0 && s.onInstallIDEExtension && !isSupportedIdeTerminal()) {
    let I = await detectRunningIdes(),
      x = (D) => {
        if (s.onInstallIDEExtension)
          if ((s.onInstallIDEExtension(D), isJetBrainsIde(D)))
            n(`Installed plugin to ${chalk.bold(getIdeDisplayName(D))}
Please ${chalk.bold("restart your IDE")} completely for it to take effect`);
          else n(`Installed extension to ${chalk.bold(getIdeDisplayName(D))}`);
      };
    if (I.length > 1)
      return e(pt, {
        runningIDEs: I,
        onSelectIDE: x,
        onDone: () => {
          n("No IDE selected.", { display: "system" });
        },
      });
    else if (I.length === 1) return e(mt, { ide: I[0], onInstall: x });
  }
  let w = a.filter((I) => I.isValid),
    g = a.filter((I) => !I.isValid),
    u = await no(w, l);
  return e(ft, {
    availableIDEs: w,
    unavailableIDEs: g,
    currentIDE: u,
    onChangeDynamicMcpConfig: h,
    onDone: n,
  });
}
var IDE_CONNECTION_TIMEOUT_MS = 35000;
function ft(_n) {
  let J = _(27),
    {
      availableIDEs: rt,
      unavailableIDEs: st,
      currentIDE: L,
      onChangeDynamicMcpConfig: ue,
      onDone: v,
    } = _n,
    [S, kn] = d(null),
    P = useAppStateSelector(uo),
    at = useSetAppState(),
    ct = C(!0),
    Ut,
    Qt;
  if (J[0] !== S || J[1] !== P || J[2] !== v)
    ((Ut = () => {
      if (!S) {
        return;
      }
      if (ct.current) {
        ct.current = !1;
        return;
      }
      if (!P || P.type === "pending") {
        return;
      }
      if (P.type === "connected")
        (logFeatureOk("ide_connect"), v(`Connected to ${S.name}.`));
      else if (P.type === "failed")
        (logFeatureBad("ide_connect", "ide_connect_failed"),
          v(`Failed to connect to ${S.name}.`));
    }),
      (Qt = [P, S, v]),
      (J[0] = S),
      (J[1] = P),
      (J[2] = v),
      (J[3] = Ut),
      (J[4] = Qt));
  else ((Ut = J[3]), (Qt = J[4]));
  E(Ut, Qt);
  let Zt;
  if (J[5] !== S || J[6] !== v)
    ((Zt = () => {
      if (!S) {
        return;
      }
      (logFeatureBad("ide_connect", "ide_connect_timeout"),
        v(`Connection to ${S.name} timed out.`));
    }),
      (J[5] = S),
      (J[6] = v),
      (J[7] = Zt));
  else Zt = J[7];
  let Gt;
  if (J[8] !== S || J[9] !== v)
    ((Gt = [S, v]), (J[8] = S), (J[9] = v), (J[10] = Gt));
  else Gt = J[10];
  useTimeout(Zt, S ? IDE_CONNECTION_TIMEOUT_MS : null, Gt);
  let eo;
  if (J[11] !== L || J[12] !== P || J[13] !== ue || J[14] !== v || J[15] !== at)
    ((eo = (oe) => {
      if (!ue) {
        v("Error connecting to IDE.");
        return;
      }
      if (!oe) {
        if (P && P.type === "connected" && L) {
          setMcpClientOnClose(P, po);
          let { clearServerCache: Pn } = import.meta
            .require("../MCP客户端/mcpClientModule.4cyej0np.js")
            .mcpClientModule();
          (Pn("ide", P.config), at(fo));
        }
        if ((ue(ho), L)) logFeatureOk("ide_disconnect");
        v(L ? `Disconnected from ${L.name}.` : "No IDE selected.");
        return;
      }
      let to = oe.url;
      let Fn = {
        type: to.startsWith("ws:") ? "ws-ide" : "sse-ide",
        url: to,
        ideName: oe.name,
        authToken: oe.authToken,
        ideRunningInWindows: oe.ideRunningInWindows,
        scope: "dynamic",
      };
      ((ct.current = !0), kn(oe), ue(($n) => ({ ...$n, ide: Fn })));
    }),
      (J[11] = L),
      (J[12] = P),
      (J[13] = ue),
      (J[14] = v),
      (J[15] = at),
      (J[16] = eo));
  else eo = J[16];
  let lt = eo;
  if (S) {
    let z;
    if (J[17] !== S.name)
      ((z = r(Text, {
        dimColor: !0,
        children: ["Connecting to ", S.name, "\u2026"],
      })),
        (J[17] = S.name),
        (J[18] = z));
    else z = J[18];
    return z;
  }
  let z;
  if (J[19] !== v)
    ((z = () => v("IDE selection cancelled", { display: "system" })),
      (J[19] = v),
      (J[20] = z));
  else z = J[20];
  let oo;
  if (
    J[21] !== rt ||
    J[22] !== L ||
    J[23] !== lt ||
    J[24] !== z ||
    J[25] !== st
  )
    ((oo = e(Pe, {
      availableIDEs: rt,
      unavailableIDEs: st,
      selectedIDE: L,
      onClose: z,
      onSelect: lt,
    })),
      (J[21] = rt),
      (J[22] = L),
      (J[23] = lt),
      (J[24] = z),
      (J[25] = st),
      (J[26] = oo));
  else oo = J[26];
  return oo;
}
function formatWorkspaceFolders(n, s = 100) {
  if (n.length === 0) return "";
  let m = getCwd(),
    l = n.slice(0, 2),
    h = n.length > 2,
    a = h ? 3 : 0,
    w = (l.length - 1) * 2,
    g = s - w - a,
    u = Math.floor(g / l.length),
    I = m.normalize("NFC"),
    D = l
      .map((b) => {
        let T = b.normalize("NFC");
        if (T.startsWith(I + fe.sep)) b = T.slice(I.length + 1);
        if (b.length <= u) return b;
        return "\u2026" + b.slice(-(u - 1));
      })
      .join(", ");
  if (h) D += ", \u2026";
  return D;
}
export {
  ft as IDECommandFlow,
  IDE_CONNECTION_TIMEOUT_MS,
  cn as call,
  formatWorkspaceFolders,
  openProjectInSelectedIDE,
};

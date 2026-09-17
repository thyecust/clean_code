// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 137 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { B, he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ju } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { isPathTrusted, setPathTrusted } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { findCanonicalGitRootUncached } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { te, truncateStartToWidth, formatRelativeTime } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import { o, t, ko } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { useClock } from "../../01-核心基础设施/共享小工具-未细化/use-clock.js";
import { DotSeparatedList } from "../../01-核心基础设施/共享小工具-未细化/chunk-ff1hq6qq.js";
import { useKeybindings } from "../../01-核心基础设施/共享小工具-未细化/keybinding-hooks.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { KeybindingHint } from "../键位绑定(Keybindings)/keybinding-display.js";
import { nl, ve } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import "../../03-入口与运行时/会话UI(REPL)/scroll-box.js";
import { qp, ss, Jd } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-yhkvt9ba.js";
import { readRoster } from "../后台任务-Shell管理/chunk-7wsy8vxb.js";
import { getVerifiedDaemonLock } from "../后台任务-Shell管理/daemon-lock.js";
import { parseCronExpression, getNextCronFireDate, formatCronSchedule } from "../后台任务-Shell管理/scheduled-tasks.js";
import { readScheduledStatus } from "../权限系统/chunk-3kjwvb3e.js";
import { getEnabledModelOptions } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { bgSupervisorNoun } from "../../01-核心基础设施/共享小工具-未细化/agent-view-feature-gates.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { XL } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import { D9e, L9e } from "../认证-OAuth登录/chunk-n76cf9e6.js";
import { loadDaemonConfig } from "../../01-核心基础设施/设置-配置/daemon-config.js";
import { loadScheduledTasks, ScheduledTaskDetail, ScheduledTaskForm } from "../权限系统/scheduled-task-ui.js";
import { readDaemonStatus } from "../../01-核心基础设施/共享小工具-未细化/daemon-status.js";
import { ole, XHe, DWe, tF } from "../后台任务-Shell管理/chunk-jfk5mpe1.js";
import "../../01-核心基础设施/共享小工具-未细化/background-text.js";
import { EmptyStateMessage } from "../../01-核心基础设施/共享小工具-未细化/empty-state-message.js";
import "../../01-核心基础设施/共享小工具-未细化/error-message.js";
import { N, e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { getDaemonJsonPath } from "../../01-核心基础设施/共享小工具-未细化/daemon-paths.js";
import { E, V, C, d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { figures } from "../Teammates团队/chunk-mrfx53ye.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
F();
import { basename, resolve } from "path";
function po(mn) {
  return mn === "worktree"
    ? "Each session gets its own git worktree (requires a git repo)."
    : "All sessions share the directory.";
}
async function Nt(n, s) {
  let i = await loadDaemonConfig(getDaemonJsonPath(), s);
  if (!i.ok) return [];
  return (i.config.remoteControl ?? []).map((f) => ({
    dir: f.dir,
    name: f.name ?? basename(f.dir),
    spawnMode: f.spawnMode ?? "same-dir",
    isRunning: n,
  }));
}
function _e(Zo) {
  let J = _(42),
    { server: K, onBack: oe, onDone: Be, refresh: St, storageV5: kt } = Zo,
    [ke, _o] = d(!1),
    [en, Ct] = d(!1),
    Zt;
  if (
    J[0] !== ke ||
    J[1] !== Be ||
    J[2] !== St ||
    J[3] !== K.dir ||
    J[4] !== kt
  )
    ((Zt = async function se(tn) {
      if (ke) {
        return;
      }
      _o(!0);
      try {
        if (tn === "remove")
          (await L9e(K.dir, void 0, kt),
            await St(),
            Be(`Removed remote-control server for ${K.dir}.`, {
              display: "system",
            }));
        else
          Be(
            "The background server picks up config changes automatically \u2014 no restart needed.",
            { display: "system" },
          );
      } catch (Ce) {
        let _t = Ce;
        (logError(_t), Be(`Action failed: ${l(_t)}`, { display: "system" }));
      }
    }),
      (J[0] = ke),
      (J[1] = Be),
      (J[2] = St),
      (J[3] = K.dir),
      (J[4] = kt),
      (J[5] = Zt));
  else Zt = J[5];
  let se = Zt;
  if (en) {
    const Ce = K.dir;
    let ge;
    if (J[6] === MEMO_CACHE_SENTINEL) ((ge = bgSupervisorNoun()), (J[6] = ge));
    else ge = J[6];
    const ae = `Stop serving ${Ce} to claude.ai. The ${ge} will stop the worker on its next reconcile.`;
    let Re;
    if (J[7] === MEMO_CACHE_SENTINEL) ((Re = () => Ct(!1)), (J[7] = Re));
    else Re = J[7];
    let ne;
    if (J[8] !== se) ((ne = () => void se("remove")), (J[8] = se), (J[9] = ne));
    else ne = J[9];
    let De;
    if (J[10] === MEMO_CACHE_SENTINEL) ((De = () => Ct(!1)), (J[10] = De));
    else De = J[10];
    let re;
    if (J[11] !== ne)
      ((re = e(ConfirmPrompt, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, remove",
        cancelLabel: "No, cancel",
        onConfirm: ne,
        onCancel: De,
      })),
        (J[11] = ne),
        (J[12] = re));
    else re = J[12];
    let be;
    if (J[13] !== ae || J[14] !== re)
      ((be = e(de, {
        title: "Remove server?",
        subtitle: ae,
        onCancel: Re,
        color: "error",
        children: re,
      })),
        (J[13] = ae),
        (J[14] = re),
        (J[15] = be));
    else be = J[15];
    return be;
  }
  let Ce;
  if (J[16] === MEMO_CACHE_SENTINEL)
    ((Ce = [
      { label: `Restart ${bgSupervisorNoun()}`, value: "restart" },
      { label: "Remove", value: "remove" },
      { label: "Back", value: "back" },
    ]),
      (J[16] = Ce));
  else Ce = J[16];
  let on = Ce,
    ge;
  if (J[17] !== K.dir)
    ((ge = r(t, { dimColor: !0, children: ["Directory ", K.dir] })),
      (J[17] = K.dir),
      (J[18] = ge));
  else ge = J[18];
  let ae;
  if (J[19] !== K.spawnMode)
    ((ae = r(t, { dimColor: !0, children: ["Spawn mode ", K.spawnMode] })),
      (J[19] = K.spawnMode),
      (J[20] = ae));
  else ae = J[20];
  const Re = K.isRunning ? "success" : "pending";
  let ne;
  if (J[21] !== Re)
    ((ne = e(StatusIndicator, { status: Re, withSpace: !0 })), (J[21] = Re), (J[22] = ne));
  else ne = J[22];
  const De = K.isRunning ? "running" : "not running";
  let re;
  if (J[23] !== ne || J[24] !== De)
    ((re = r(t, { dimColor: !0, children: ["Status", "     ", ne, De] })),
      (J[23] = ne),
      (J[24] = De),
      (J[25] = re));
  else re = J[25];
  let be;
  if (J[26] !== ge || J[27] !== ae || J[28] !== re)
    ((be = r(o, {
      flexDirection: "column",
      marginBottom: 1,
      children: [ge, ae, re],
    })),
      (J[26] = ge),
      (J[27] = ae),
      (J[28] = re),
      (J[29] = be));
  else be = J[29];
  let Ke;
  if (J[30] !== oe || J[31] !== se)
    ((Ke = (Rt) => {
      if (Rt === "back") {
        return oe();
      }
      if (Rt === "remove") {
        return Ct(!0);
      }
      se(Rt);
    }),
      (J[30] = oe),
      (J[31] = se),
      (J[32] = Ke));
  else Ke = J[32];
  let Ee;
  if (J[33] !== ke || J[34] !== oe || J[35] !== Ke)
    ((Ee = e(ve, { options: on, isDisabled: ke, onChange: Ke, onCancel: oe })),
      (J[33] = ke),
      (J[34] = oe),
      (J[35] = Ke),
      (J[36] = Ee));
  else Ee = J[36];
  let eo;
  if (J[37] !== oe || J[38] !== K.name || J[39] !== Ee || J[40] !== be)
    ((eo = r(de, { title: K.name, onCancel: oe, children: [be, Ee] })),
      (J[37] = oe),
      (J[38] = K.name),
      (J[39] = Ee),
      (J[40] = be),
      (J[41] = eo));
  else eo = J[41];
  return eo;
}
function tt(nn) {
  let P = _(50),
    { defaultDir: M, onCancel: xe, onAdded: Dt, storageV5: Te } = nn,
    Je;
  if (P[0] !== M) ((Je = basename(M)), (P[0] = M), (P[1] = Je));
  else Je = P[1];
  let to;
  if (P[2] !== M || P[3] !== Je)
    ((to = { dir: M, name: Je, spawnMode: "same-dir" }),
      (P[2] = M),
      (P[3] = Je),
      (P[4] = to));
  else to = P[4];
  let [Y, rn] = d(to),
    [Ae, sn] = d(!1),
    [Z, Xe] = d(null),
    [je, oo] = d(!1),
    no;
  if (P[5] !== M || P[6] !== Ae)
    ((no = function Oe(We, xt) {
      if (We === "name") sn(!0);
      rn((Tt) => {
        if (Tt[We] === xt) {
          return Tt;
        }
        let ro = { ...Tt, [We]: xt };
        if (We === "dir" && !Ae) ro.name = basename(resolve(Ju(xt.trim() || M)));
        return ro;
      });
    }),
      (P[5] = M),
      (P[6] = Ae),
      (P[7] = no));
  else no = P[7];
  let Oe = no,
    io;
  if (P[8] !== M || P[9] !== Y.dir)
    ((io = resolve(Ju(Y.dir?.trim() || M))),
      (P[8] = M),
      (P[9] = Y.dir),
      (P[10] = io));
  else io = P[10];
  let Ie = io,
    qe;
  if (P[11] !== M)
    ((qe = (an) => {
      let so = resolve(Ju(an.trim() || M));
      return isPathTrusted(so, { advisoryNoFsProbe: !0 })
        ? "Available on claude.ai/code and the Claude mobile app."
        : `${so} is not yet trusted \u2014 you'll be asked to trust it on submit.`;
    }),
      (P[11] = M),
      (P[12] = qe));
  else qe = P[12];
  let ze;
  if (P[13] !== M || P[14] !== qe)
    ((ze = {
      type: "text",
      key: "dir",
      label: "Directory",
      placeholder: M,
      required: !0,
      hint: qe,
    }),
      (P[13] = M),
      (P[14] = qe),
      (P[15] = ze));
  else ze = P[15];
  let Ye;
  if (P[16] !== Ae)
    ((Ye = {
      type: "text",
      key: "name",
      label: "Name",
      hint: () =>
        Ae
          ? "Shown in the claude.ai session picker."
          : "Auto-generated from the directory name.",
    }),
      (P[16] = Ae),
      (P[17] = Ye));
  else Ye = P[17];
  let ao;
  if (P[18] === MEMO_CACHE_SENTINEL)
    ((ao = {
      type: "select",
      key: "spawnMode",
      label: "Spawn mode",
      options: [
        { label: "same-dir", value: "same-dir" },
        { label: "worktree", value: "worktree" },
      ],
      hint: po,
    }),
      (P[18] = ao));
  else ao = P[18];
  let lo;
  if (P[19] !== ze || P[20] !== Ye)
    ((lo = [ze, Ye, ao]), (P[19] = ze), (P[20] = Ye), (P[21] = lo));
  else lo = P[21];
  let At = lo,
    co;
  if (
    P[22] !== Dt ||
    P[23] !== xe ||
    P[24] !== Te ||
    P[25] !== Y.name ||
    P[26] !== Y.spawnMode
  )
    ((co = async function le(It) {
      oo(!0);
      let ln = Y.name?.trim() || basename(It);
      let cn = Y.spawnMode ?? "same-dir";
      try {
        (await D9e({ dir: It, name: ln, spawnMode: cn }, void 0, Te),
          Dt(It, void 0));
      } catch (Ge) {
        let dn = Ge;
        (logError(dn), oo(!1), xe());
      }
    }),
      (P[22] = Dt),
      (P[23] = xe),
      (P[24] = Te),
      (P[25] = Y.name),
      (P[26] = Y.spawnMode),
      (P[27] = co));
  else co = P[27];
  let le = co,
    Ge;
  if (P[28] !== je || P[29] !== le || P[30] !== Ie)
    ((Ge = function $e() {
      if (je) {
        return;
      }
      if (!isPathTrusted(Ie)) {
        Xe({ dir: Ie, trustRoot: findCanonicalGitRootUncached(Ie) });
        return;
      }
      le(Ie);
    }),
      (P[28] = je),
      (P[29] = le),
      (P[30] = Ie),
      (P[31] = Ge));
  else Ge = P[31];
  let $e = Ge;
  if (Z !== null) {
    let un =
      Z.trustRoot != null && Z.trustRoot !== Z.dir
        ? ` It's part of the repository at ${Z.trustRoot} \u2014 trusting it trusts that whole repository.`
        : "";
    const ye = `${Z.dir} hasn't been trusted yet.${un} Trusting allows Claude to read and execute files there.`;
    let Le;
    if (P[32] === MEMO_CACHE_SENTINEL) ((Le = () => Xe(null)), (P[32] = Le));
    else Le = P[32];
    let Ue;
    if (P[33] !== le || P[34] !== Z.dir || P[35] !== Te)
      ((Ue = () => {
        (setPathTrusted(Z.dir, Te).then(() => le(Z.dir)), Xe(null));
      }),
        (P[33] = le),
        (P[34] = Z.dir),
        (P[35] = Te),
        (P[36] = Ue));
    else Ue = P[36];
    let uo;
    if (P[37] === MEMO_CACHE_SENTINEL) ((uo = () => Xe(null)), (P[37] = uo));
    else uo = P[37];
    let Qe;
    if (P[38] !== Ue)
      ((Qe = e(ConfirmPrompt, {
        hideIndexes: !0,
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, trust and add server",
        cancelLabel: "No, go back",
        onConfirm: Ue,
        onCancel: uo,
      })),
        (P[38] = Ue),
        (P[39] = Qe));
    else Qe = P[39];
    let mo;
    if (P[40] !== ye || P[41] !== Qe)
      ((mo = e(de, {
        title: "Trust this directory?",
        subtitle: ye,
        onCancel: Le,
        children: Qe,
      })),
        (P[40] = ye),
        (P[41] = Qe),
        (P[42] = mo));
    else mo = P[42];
    return mo;
  }
  const ye = je ? "Adding\u2026" : "Add server";
  let Le;
  if (
    P[43] !== At ||
    P[44] !== $e ||
    P[45] !== xe ||
    P[46] !== Oe ||
    P[47] !== ye ||
    P[48] !== Y
  )
    ((Le = e(XL, {
      title: "New Remote Control server",
      subtitle:
        "Make a directory available on claude.ai/code and the Claude mobile app",
      fields: At,
      values: Y,
      onChange: Oe,
      onSubmit: $e,
      onCancel: xe,
      submitLabel: ye,
    })),
      (P[43] = At),
      (P[44] = $e),
      (P[45] = xe),
      (P[46] = Oe),
      (P[47] = ye),
      (P[48] = Y),
      (P[49] = Le));
  else Le = P[49];
  return Le;
}
async function yt(n) {
  let s = await ole(),
    i = getVerifiedDaemonLock(1, n).catch(() => null),
    [k, f, H, R, T, m, b] = await Promise.all([
      i,
      loadScheduledTasks(n),
      i.then((A) => Nt(A !== null, n)),
      readDaemonStatus(n).catch(() => null),
      readScheduledStatus(n).catch(() => null),
      readRoster({ silent: !0 }, n),
      s ? tF() : Promise.resolve(!1),
    ]);
  return {
    tasks: f,
    servers: H,
    lock: k,
    status: R,
    scheduledStatus: T,
    bgCount: Object.keys(m.workers).length,
    serviceInstalled: b,
    serviceSupported: s,
  };
}
function Ut() {
  return getEnabledModelOptions(!1).map((n) => ({
    label: n.label,
    value: n.value ?? "",
    description: n.description,
  }));
}
async function Jn(n, s) {
  let i = await yt(s.storageV5);
  return e(DaemonHub, {
    initialData: i,
    modelOptions: Ut(),
    onDone: n,
    storageV5: s.storageV5,
  });
}
function DaemonHub({ initialData: n, modelOptions: s, onDone: i, storageV5: k }) {
  let [f, H] = d(n),
    R = useClock(),
    [T] = d(() => ({ wall: Date.now(), clock: R.now() })),
    [m, b] = d(T.wall),
    [A, u] = d({ type: "hub" }),
    [W, j] = d("scheduled"),
    [g, a] = d(!1),
    [y, c] = d(null);
  async function v() {
    let I = await yt(k);
    H(I);
  }
  let X = C(0);
  ko(
    () => {
      if ((b(T.wall + (R.now() - T.clock)), X.current++ % 2 === 0)) v();
    },
    A.type === "hub" ? 1000 : null,
  );
  async function z(I) {
    if (g) return;
    (a(!0), c(null));
    let Pe;
    try {
      switch (I) {
        case "uninstall":
          Pe = await XHe();
          break;
        case "stop":
          Pe = await DWe();
          break;
      }
      if (!Pe.ok) c(`${I} failed: ${Pe.error}`);
    } finally {
      try {
        await v();
      } catch {}
      a(!1);
    }
  }
  function fe() {
    (v(), u({ type: "hub" }));
  }
  switch (A.type) {
    case "detail-scheduled":
      return e(ScheduledTaskDetail, {
        task: A.entry,
        onBack: fe,
        onEdit: (I) => u({ type: "new", kind: "scheduled", prefill: I }),
        onDone: i,
        refresh: v,
        storageV5: k,
      });
    case "detail-remoteControl":
      return e(_e, {
        server: A.entry,
        onBack: fe,
        onDone: i,
        refresh: v,
        storageV5: k,
      });
    case "new":
      if (A.kind === "remoteControl")
        return e(tt, {
          defaultDir: he(),
          onCancel: fe,
          onAdded: () => fe(),
          storageV5: k,
        });
      return e(ScheduledTaskForm, {
        defaultDir: he(),
        existingIds: f.tasks.map((I) => I.id),
        prefill: A.prefill,
        modelOptions: s,
        onCancel: fe,
        onDone: i,
        onSaved: async () => fe(),
        storageV5: k,
      });
    case "hub":
      break;
  }
  let wt = [
    e(
      ss,
      {
        id: "scheduled",
        title: "Scheduled",
        children: e(ht, {
          kind: "scheduled",
          data: f,
          now: m,
          busy: g,
          message: y,
          onSelect: (I) => u({ type: "detail-scheduled", entry: I }),
          onAddNew: () => u({ type: "new", kind: "scheduled" }),
          onService: (I) => void z(I),
          onCancel: () => i(),
        }),
      },
      "scheduled",
    ),
  ];
  return (
    wt.push(
      e(
        ss,
        {
          id: "remoteControl",
          title: "Remote Control",
          children: e(ht, {
            kind: "remoteControl",
            data: f,
            now: m,
            busy: g,
            message: y,
            onSelect: (I) => u({ type: "detail-remoteControl", entry: I }),
            onAddNew: () => u({ type: "new", kind: "remoteControl" }),
            onService: (I) => void z(I),
            onCancel: () => i(),
          }),
        },
        "remoteControl",
      ),
    ),
    e(de, {
      title: "Claude daemon",
      onCancel: () => i(),
      hideInputGuide: !0,
      children: e(qp, {
        title: null,
        color: "permission",
        selectedTab: W,
        onTabChange: (I) => j(I),
        children: wt,
      }),
    })
  );
}
var He = {
  scheduled: "scheduled task",
  remoteControl: "remote-control server",
};
function ht(Wn) {
  let O = _(58),
    {
      kind: me,
      data: ie,
      now: Mt,
      busy: fo,
      message: qn,
      onSelect: zn,
      onAddNew: Yn,
      onService: Gn,
      onCancel: Un,
    } = Wn,
    { headerFocused: ee, focusHeader: Ft } = Jd(),
    q = me === "scheduled" ? ie.tasks : ie.servers,
    Pt = Gt(ie),
    Ne = q.length,
    pe = q.length + 1 + Pt.length,
    [w, Bt] = d(0),
    go,
    ho;
  if (O[0] !== w || O[1] !== pe)
    ((go = () => {
      if (w >= pe) Bt(Math.max(0, pe - 1));
    }),
      (ho = [pe, w]),
      (O[0] = w),
      (O[1] = pe),
      (O[2] = go),
      (O[3] = ho));
  else ((go = O[2]), (ho = O[3]));
  E(go, ho);
  let vo;
  if (O[4] !== Ft || O[5] !== w)
    ((vo = () => {
      if (w === 0) Ft();
      else Bt(w - 1);
    }),
      (O[4] = Ft),
      (O[5] = w),
      (O[6] = vo));
  else vo = O[6];
  let bo;
  if (O[7] !== w || O[8] !== pe)
    ((bo = () => Bt(Math.min(pe - 1, w + 1))),
      (O[7] = w),
      (O[8] = pe),
      (O[9] = bo));
  else bo = O[9];
  const Ot = !ee;
  let yo;
  if (O[10] !== Ot)
    ((yo = { context: "Select", isActive: Ot }), (O[10] = Ot), (O[11] = yo));
  else yo = O[11];
  useKeybindings(
    {
      "select:previous": vo,
      "select:next": bo,
      "select:accept": () => {
        if (fo) {
          return;
        }
        if (w < q.length) zn(q[w]);
        else if (w === Ne) Yn();
        else Gn(Pt[w - Ne - 1]);
      },
      "select:cancel": Un,
    },
    yo,
  );
  let wo;
  if (O[12] !== ie || O[13] !== q || O[14] !== me || O[15] !== Mt)
    ((wo = zt(me, q, ie, Mt)),
      (O[12] = ie),
      (O[13] = q),
      (O[14] = me),
      (O[15] = Mt),
      (O[16] = wo));
  else wo = O[16];
  let G = wo;
  const $t = o,
    Qn = "column",
    Lt = "  " + G.header;
  let ot;
  if (O[17] !== Lt)
    ((ot = e(t, { dimColor: !0, children: Lt })), (O[17] = Lt), (O[18] = ot));
  else ot = O[18];
  let nt;
  if (O[19] !== q.length || O[20] !== me)
    ((nt = q.length === 0 && e(EmptyStateMessage, { children: `  (no ${He[me]}s)` })),
      (O[19] = q.length),
      (O[20] = me),
      (O[21] = nt));
  else nt = O[21];
  let rt;
  if (
    O[22] !== q ||
    O[23] !== w ||
    O[24] !== ee ||
    O[25] !== G.keys ||
    O[26] !== G.rows
  ) {
    let Me;
    if (O[28] !== w || O[29] !== ee || O[30] !== G.keys || O[31] !== G.rows)
      ((Me = (_, it) => {
        let Vt = !ee && w === it;
        return r(
          o,
          {
            children: [
              r(t, {
                color: Vt ? "suggestion" : void 0,
                children: [Vt ? figures.pointer : " ", " "],
              }),
              e(t, { bold: Vt, children: G.rows[it].text }),
              G.rows[it].suffix,
            ],
          },
          G.keys[it],
        );
      }),
        (O[28] = w),
        (O[29] = ee),
        (O[30] = G.keys),
        (O[31] = G.rows),
        (O[32] = Me));
    else Me = O[32];
    rt = q.map(Me);
    ((O[22] = q),
      (O[23] = w),
      (O[24] = ee),
      (O[25] = G.keys),
      (O[26] = G.rows),
      (O[27] = rt));
  } else rt = O[27];
  const Me = !ee && w === Ne,
    Ht = `+ Add new ${He[me]}\u2026`;
  let st;
  if (O[33] !== Me || O[34] !== Ht)
    ((st = e(o, {
      marginTop: 1,
      children: e(Fe, { isFocused: Me, label: Ht }),
    })),
      (O[33] = Me),
      (O[34] = Ht),
      (O[35] = st));
  else st = O[35];
  const Kt = o,
    Zn = 1,
    _n = "column",
    er = "single",
    tr = !1,
    or = !1,
    nr = !1,
    rr = !0;
  let So, Co;
  if (O[36] === MEMO_CACHE_SENTINEL)
    ((So = e(t, { bold: !0, children: "Daemon service" })),
      (Co = e(t, { dimColor: !0, children: " \xB7 " })),
      (O[36] = So),
      (O[37] = Co));
  else ((So = O[36]), (Co = O[37]));
  const Et = fo ? "working\u2026" : qn;
  let at;
  if (O[38] !== ie || O[39] !== Et)
    ((at = r(o, { children: [So, Co, e(bt, { data: ie, message: Et })] })),
      (O[38] = ie),
      (O[39] = Et),
      (O[40] = at));
  else at = O[40];
  let Ro;
  if (O[41] !== Ne || O[42] !== w || O[43] !== ee)
    ((Ro = (Jt, ir) =>
      e(
        Fe,
        {
          isFocused: !ee && w === Ne + 1 + ir,
          label: Yt[Jt],
          color: Jt === "uninstall" ? "error" : void 0,
        },
        Jt,
      )),
      (O[41] = Ne),
      (O[42] = w),
      (O[43] = ee),
      (O[44] = Ro));
  else Ro = O[44];
  const Xt = Pt.map(Ro);
  let lt;
  if (O[45] !== Kt || O[46] !== at || O[47] !== Xt)
    ((lt = r(Kt, {
      marginTop: Zn,
      flexDirection: _n,
      borderStyle: er,
      borderBottom: tr,
      borderLeft: or,
      borderRight: nr,
      borderDimColor: rr,
      children: [at, Xt],
    })),
      (O[45] = Kt),
      (O[46] = at),
      (O[47] = Xt),
      (O[48] = lt));
  else lt = O[48];
  let Do;
  if (O[49] === MEMO_CACHE_SENTINEL)
    ((Do = e(KeybindingHint, { chord: ["left", "right"], action: "tabs" })), (O[49] = Do));
  else Do = O[49];
  let xo;
  if (O[50] === MEMO_CACHE_SENTINEL)
    ((xo = e(o, {
      marginTop: 1,
      children: e(t, {
        dimColor: !0,
        children: r(DotSeparatedList, {
          children: [
            Do,
            e(KeybindingHint, { chord: ["up", "down"], action: "move" }),
            e(KeybindingHint, { chord: "enter", action: "select" }),
            e(KeybindingHint, { chord: "escape", action: "close" }),
          ],
        }),
      }),
    })),
      (O[50] = xo));
  else xo = O[50];
  let To;
  if (
    O[51] !== $t ||
    O[52] !== ot ||
    O[53] !== nt ||
    O[54] !== rt ||
    O[55] !== st ||
    O[56] !== lt
  )
    ((To = r($t, { flexDirection: Qn, children: [ot, nt, rt, st, lt, xo] })),
      (O[51] = $t),
      (O[52] = ot),
      (O[53] = nt),
      (O[54] = rt),
      (O[55] = st),
      (O[56] = lt),
      (O[57] = To));
  else To = O[57];
  return To;
}
function Fe(sr) {
  let Ao = _(7),
    { isFocused: Se, label: jt, color: ar } = sr;
  const Wt = Se ? void 0 : ar;
  let ct;
  if (Ao[0] !== Se || Ao[1] !== jt || Ao[2] !== Wt)
    ((ct = e(t, { bold: Se, color: Wt, children: jt })),
      (Ao[0] = Se),
      (Ao[1] = jt),
      (Ao[2] = Wt),
      (Ao[3] = ct));
  else ct = Ao[3];
  let Io;
  if (Ao[4] !== Se || Ao[5] !== ct)
    ((Io = e(nl, { isFocused: Se, styled: !1, children: ct })),
      (Ao[4] = Se),
      (Ao[5] = ct),
      (Ao[6] = Io));
  else Io = Ao[6];
  return Io;
}
function zt(n, s, i, k) {
  let f = new Date(k),
    H = i.lock !== null,
    R,
    T,
    m,
    b;
  if (n === "scheduled") {
    ((R = ["Name", "Schedule", "Next run", "Last run", "PID"]), (b = 2));
    let g = s,
      a = i.scheduledStatus?.workerPid ?? i.status?.workers["scheduled:0"]?.pid;
    ((m = g.map((y) => y.id)),
      (T = g.map((y) => {
        let c = i.scheduledStatus?.tasks[y.id],
          v = y.enabled ? Fo(y.cron, f) : null;
        return [
          y.id,
          formatCronSchedule(y.cron),
          !y.enabled
            ? "disabled"
            : !H
              ? "daemon stopped"
              : c?.running
                ? "running"
                : v
                  ? formatRelativeTime(v, { now: f })
                  : "\u2014",
          c?.lastFiredAt ? formatRelativeTime(new Date(c.lastFiredAt), { now: f }) : "\u2014",
          c?.running && a !== void 0 ? String(a) : "\u2014",
        ];
      })));
  } else {
    ((R = ["Name", "Directory", "Status", "PID"]), (b = 2));
    let g = s;
    ((m = g.map((a) => a.dir)),
      (T = g.map((a, y) => {
        let c = i.status?.workers[`${n}:${y}`]?.pid,
          v = H && (i.status === null || c !== void 0);
        return [
          a.name,
          Po(a.dir),
          v ? "running" : "stopped",
          c !== void 0 ? String(c) : v ? "\u2014" : "",
        ];
      })));
  }
  let A = R.map((g, a) => Math.max(te(g), ...T.map((y) => te(y[a] ?? "")))),
    u = (g, a) => g + " ".repeat(Math.max(0, A[a] - te(g))),
    W = R.map(u).join("  "),
    j = T.map((g) => ({
      text: g.slice(0, b).map(u).join("  ") + "  ",
      suffix: r(N, {
        children: [
          Mo(g[b], A[b]),
          e(t, {
            children: g
              .slice(b + 1)
              .map((a, y) => "  " + u(a, b + 1 + y))
              .join(""),
          }),
        ],
      }),
    }));
  return { header: W, rows: j, keys: m };
}
function Mo(n, s) {
  let i = n + " ".repeat(Math.max(0, s - te(n)));
  return n === "running"
    ? e(t, { color: "success", children: i })
    : e(t, { dimColor: !0, children: i });
}
function Fo(n, s) {
  let i = parseCronExpression(n);
  return i ? getNextCronFireDate(i, s) : null;
}
function Po(n) {
  return truncateStartToWidth(n, 40);
}
var Yt = { uninstall: "Uninstall service", stop: "Stop" };
function Gt(n) {
  if (!n.serviceSupported || !n.serviceInstalled) return [];
  if (n.lock === null) return ["uninstall"];
  return ["stop", "uninstall"];
}
function bt(lr) {
  let Q = _(25),
    { data: S, message: dt } = lr;
  if (dt) {
    let U;
    if (Q[0] !== dt)
      ((U = e(t, { dimColor: !0, children: dt })), (Q[0] = dt), (Q[1] = U));
    else U = Q[1];
    return U;
  }
  if (!S.serviceSupported) {
    let U;
    if (Q[2] === MEMO_CACHE_SENTINEL)
      ((U = e(t, {
        dimColor: !0,
        children:
          "service install not available on this platform \u2014 runs on demand",
      })),
        (Q[2] = U));
    else U = Q[2];
    return U;
  }
  if (S.lock === null) {
    const U = S.serviceInstalled
      ? "installed \xB7 not running"
      : "not installed (runs on demand)";
    let Ve;
    if (Q[3] !== U)
      ((Ve = e(t, { dimColor: !0, children: U })), (Q[3] = U), (Q[4] = Ve));
    else Ve = Q[4];
    return Ve;
  }
  let U;
  if (Q[5] !== S.lock.version || Q[6] !== S.status)
    ((U =
      S.status === null ||
      S.lock.version !==
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
        }.VERSION),
      (Q[5] = S.lock.version),
      (Q[6] = S.status),
      (Q[7] = U));
  else U = Q[7];
  let qt = U,
    Ve;
  if (Q[8] === MEMO_CACHE_SENTINEL)
    ((Ve = e(t, { color: "success", children: "running" })), (Q[8] = Ve));
  else Ve = Q[8];
  let ut;
  if (Q[9] !== S.lock.pid)
    ((ut = r(N, { children: ["pid ", S.lock.pid] })),
      (Q[9] = S.lock.pid),
      (Q[10] = ut));
  else ut = Q[10];
  let mt;
  if (Q[11] !== S.lock.version)
    ((mt = r(N, { children: ["v", S.lock.version] })),
      (Q[11] = S.lock.version),
      (Q[12] = mt));
  else mt = Q[12];
  let pt;
  if (Q[13] !== S.bgCount)
    ((pt =
      S.bgCount > 0 &&
      r(N, { children: [S.bgCount, " ", pluralize(S.bgCount, "background session")] })),
      (Q[13] = S.bgCount),
      (Q[14] = pt));
  else pt = Q[14];
  let ft;
  if (Q[15] !== S.serviceInstalled)
    ((ft =
      !S.serviceInstalled && e(N, { children: "not installed as service" })),
      (Q[15] = S.serviceInstalled),
      (Q[16] = ft));
  else ft = Q[16];
  let gt;
  if (Q[17] !== qt)
    ((gt = qt && e(t, { color: "warning", children: "restart to update" })),
      (Q[17] = qt),
      (Q[18] = gt));
  else gt = Q[18];
  let No;
  if (
    Q[19] !== ut ||
    Q[20] !== mt ||
    Q[21] !== pt ||
    Q[22] !== ft ||
    Q[23] !== gt
  )
    ((No = e(t, {
      dimColor: !0,
      children: r(DotSeparatedList, { children: [Ve, ut, mt, pt, ft, gt] }),
    })),
      (Q[19] = ut),
      (Q[20] = mt),
      (Q[21] = pt),
      (Q[22] = ft),
      (Q[23] = gt),
      (Q[24] = No));
  else No = Q[24];
  return No;
}
async function renderDaemonHubStandalone(n) {
  let [{ createRoot: s }, { getBaseRenderOptions: i }] = await Promise.all([
      import("./createRoot.pw1402cq.js"),
      import("./getBaseRenderOptions.caxv2veh.js"),
    ]),
    { AppRoot: k } = await import("../后台任务-Shell管理/chunk-c7mzes79.js"),
    { getEraseScreenSequence: f } = await import("../../00-第三方库/_未识别/Ink终端渲染器/chunk-hm8z9h7j.js"),
    H = await yt(n);
  process.stdout.write(f());
  let R = await s(i(!1));
  (await new Promise((T) => {
    R.render(
      e(k, {
        session: B(),
        children: e(DaemonHub, {
          initialData: H,
          modelOptions: Ut(),
          storageV5: n,
          onDone: (m) => {
            if (m)
              process.stdout.write(
                m +
                  `
`,
              );
            T();
          },
        }),
      }),
    );
  }),
    R.unmount());
}
export { DaemonHub, Jn as call, renderDaemonHubStandalone };

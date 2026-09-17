// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { Ju } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getPermissionModeTitle } from "./chunk-e4pfvp7x.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { Select } from "../交互UI-选择器/交互UI-选择器.arb9gcjv.js";
import { StatusIndicator } from "../../01-核心基础设施/共享小工具-未细化/chunk-dsg6bce8.js";
import { ConfirmPrompt } from "../../01-核心基础设施/共享小工具-未细化/confirm-prompt.js";
import { de } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-92g8hxqw.js";
import { XL } from "../../00-第三方库/_未识别/React组件(TUI视图)/chunk-2x6t9gq6.js";
import { formatCronSchedule, parseScheduleInput } from "../后台任务-Shell管理/scheduled-tasks.js";
import { VALID_PERMISSION_MODES, addScheduledTask, removeScheduledTask, readScheduledTasks } from "./chunk-3kjwvb3e.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
import { d, F } from "../../00-第三方库/_未识别/React运行时-JSX/React运行时-JSX.j03jpdbn.js";
import { MEMO_CACHE_SENTINEL } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
F();
import { basename, resolve } from "path";
function qo() {
  return "Sent to Claude on each fire. Slash commands work.";
}
function Jo(Lo) {
  return Lo.trim() === "" ? null : (parseScheduleInput(Lo).error ?? null);
}
function Oo(Fo) {
  if (Fo.trim() === "") {
    return;
  }
  let ro = parseScheduleInput(Fo);
  return ro.error ? void 0 : `${ro.human} \xB7 ${ro.cron}`;
}
function Xo(Qo) {
  return { label: getPermissionModeTitle(Qo), value: Qo };
}
async function loadScheduledTasks(s) {
  return readScheduledTasks(void 0, s).catch((v) => (logError(v), []));
}
function ScheduledTaskDetail(st) {
  let m = _(76),
    {
      task: i,
      onBack: k,
      onEdit: Qe,
      onDone: B,
      refresh: q,
      storageV5: J,
    } = st,
    [P, po] = d(!1),
    [at, Ne] = d(!1),
    fo;
  if (m[0] !== P || m[1] !== B || m[2] !== q || m[3] !== J || m[4] !== i)
    ((fo = async function Y() {
      if (P) {
        return;
      }
      po(!0);
      try {
        (await addScheduledTask(so({ ...i, enabled: !i.enabled }), void 0, J),
          await q(),
          B(`${i.enabled ? "Disabled" : "Enabled"} scheduled task '${i.id}'.`, {
            display: "system",
          }));
      } catch (re) {
        let bo = re;
        (logError(bo), B(`Toggle failed: ${l(bo)}`, { display: "system" }));
      }
    }),
      (m[0] = P),
      (m[1] = B),
      (m[2] = q),
      (m[3] = J),
      (m[4] = i),
      (m[5] = fo));
  else fo = m[5];
  let Y = fo,
    re;
  if (m[6] !== P || m[7] !== B || m[8] !== q || m[9] !== J || m[10] !== i.id)
    ((re = async function G() {
      if (P) {
        return;
      }
      po(!0);
      try {
        (await removeScheduledTask(i.id, void 0, J),
          await q(),
          B(`Removed scheduled task '${i.id}'.`, { display: "system" }));
      } catch (R) {
        let yo = R;
        (logForDebugging(
          `Failed to remove scheduled task '${i.id}' from daemon.json: ${l(yo)}`,
          { level: "error" },
        ),
          B(`Remove failed: ${l(yo)}`, { display: "system" }));
      }
    }),
      (m[6] = P),
      (m[7] = B),
      (m[8] = q),
      (m[9] = J),
      (m[10] = i.id),
      (m[11] = re));
  else re = m[11];
  let G = re;
  if (at) {
    const R = `Delete '${i.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`;
    let V;
    if (m[12] === MEMO_CACHE_SENTINEL) ((V = () => Ne(!1)), (m[12] = V));
    else V = m[12];
    let A;
    if (m[13] !== G) ((A = () => void G()), (m[13] = G), (m[14] = A));
    else A = m[14];
    let H;
    if (m[15] === MEMO_CACHE_SENTINEL) ((H = () => Ne(!1)), (m[15] = H));
    else H = m[15];
    let j;
    if (m[16] !== A)
      ((j = e(ConfirmPrompt, {
        cancelFirst: !0,
        focus: "cancel",
        confirmLabel: "Yes, remove",
        cancelLabel: "No, cancel",
        onConfirm: A,
        onCancel: H,
      })),
        (m[16] = A),
        (m[17] = j));
    else j = m[17];
    let K;
    if (m[18] !== R || m[19] !== j)
      ((K = e(de, {
        title: "Remove task?",
        subtitle: R,
        onCancel: V,
        color: "error",
        children: j,
      })),
        (m[18] = R),
        (m[19] = j),
        (m[20] = K));
    else K = m[20];
    return K;
  }
  const R = i.enabled ? "Disable" : "Enable";
  let V;
  if (m[21] !== R)
    ((V = { label: R, value: "toggle" }), (m[21] = R), (m[22] = V));
  else V = m[22];
  let A, H, j;
  if (m[23] === MEMO_CACHE_SENTINEL)
    ((A = { label: "Edit", value: "edit" }),
      (H = { label: "Remove", value: "remove" }),
      (j = { label: "Back", value: "back" }),
      (m[23] = A),
      (m[24] = H),
      (m[25] = j));
  else ((A = m[23]), (H = m[24]), (j = m[25]));
  let K;
  if (m[26] !== V) ((K = [V, A, H, j]), (m[26] = V), (m[27] = K));
  else K = m[27];
  let qe = K;
  const { id: mt, cron: lt } = i;
  let se;
  if (m[28] !== i.cron) ((se = formatCronSchedule(i.cron)), (m[28] = i.cron), (m[29] = se));
  else se = m[29];
  let ae;
  if (m[30] !== se || m[31] !== i.cron)
    ((ae = r(Text, { dimColor: !0, children: ["Cron ", lt, " (", se, ")"] })),
      (m[30] = se),
      (m[31] = i.cron),
      (m[32] = ae));
  else ae = m[32];
  let me;
  if (m[33] !== i.directory)
    ((me = r(Text, { dimColor: !0, children: ["Directory ", i.directory] })),
      (m[33] = i.directory),
      (m[34] = me));
  else me = m[34];
  let le;
  if (m[35] !== i.prompt)
    ((le = r(Text, { dimColor: !0, children: ["Prompt ", i.prompt] })),
      (m[35] = i.prompt),
      (m[36] = le));
  else le = m[36];
  const Je = i.enabled ? "success" : "pending";
  let ce;
  if (m[37] !== Je)
    ((ce = e(StatusIndicator, { status: Je, withSpace: !0 })), (m[37] = Je), (m[38] = ce));
  else ce = m[38];
  const Oe = i.enabled ? "enabled" : "disabled";
  let ue;
  if (m[39] !== ce || m[40] !== Oe)
    ((ue = r(Text, { dimColor: !0, children: ["Status", " ", ce, Oe] })),
      (m[39] = ce),
      (m[40] = Oe),
      (m[41] = ue));
  else ue = m[41];
  let pe;
  if (m[42] !== i.permissionMode)
    ((pe = getPermissionModeTitle(i.permissionMode)), (m[42] = i.permissionMode), (m[43] = pe));
  else pe = m[43];
  let fe;
  if (m[44] !== pe)
    ((fe = r(Text, { dimColor: !0, children: ["Mode ", pe] })),
      (m[44] = pe),
      (m[45] = fe));
  else fe = m[45];
  let be;
  if (m[46] !== i.model)
    ((be = i.model && r(Text, { dimColor: !0, children: ["Model ", i.model] })),
      (m[46] = i.model),
      (m[47] = be));
  else be = m[47];
  let ye;
  if (m[48] !== i.runTimeoutMinutes)
    ((ye = r(Text, {
      dimColor: !0,
      children: ["Timeout ", i.runTimeoutMinutes, "m"],
    })),
      (m[48] = i.runTimeoutMinutes),
      (m[49] = ye));
  else ye = m[49];
  let ge;
  if (m[50] !== i.maxQueued)
    ((ge = r(Text, { dimColor: !0, children: ["Max queue ", i.maxQueued] })),
      (m[50] = i.maxQueued),
      (m[51] = ge));
  else ge = m[51];
  let he;
  if (
    m[52] !== ae ||
    m[53] !== me ||
    m[54] !== le ||
    m[55] !== ue ||
    m[56] !== fe ||
    m[57] !== be ||
    m[58] !== ye ||
    m[59] !== ge
  )
    ((he = r(Box, {
      flexDirection: "column",
      marginBottom: 1,
      children: [ae, me, le, ue, fe, be, ye, ge],
    })),
      (m[52] = ae),
      (m[53] = me),
      (m[54] = le),
      (m[55] = ue),
      (m[56] = fe),
      (m[57] = be),
      (m[58] = ye),
      (m[59] = ge),
      (m[60] = he));
  else he = m[60];
  let Ce;
  if (m[61] !== k || m[62] !== Qe || m[63] !== i || m[64] !== Y)
    ((Ce = (Se) => {
      if (Se === "back") {
        return k();
      }
      if (Se === "edit") {
        return Qe(i);
      }
      if (Se === "remove") {
        return Ne(!0);
      }
      if (Se === "toggle") {
        return void Y();
      }
    }),
      (m[61] = k),
      (m[62] = Qe),
      (m[63] = i),
      (m[64] = Y),
      (m[65] = Ce));
  else Ce = m[65];
  let xe;
  if (m[66] !== P || m[67] !== k || m[68] !== qe || m[69] !== Ce)
    ((xe = e(Select, { options: qe, isDisabled: P, onChange: Ce, onCancel: k })),
      (m[66] = P),
      (m[67] = k),
      (m[68] = qe),
      (m[69] = Ce),
      (m[70] = xe));
  else xe = m[70];
  let go;
  if (m[71] !== k || m[72] !== he || m[73] !== xe || m[74] !== i.id)
    ((go = r(de, { title: mt, onCancel: k, children: [he, xe] })),
      (m[71] = k),
      (m[72] = he),
      (m[73] = xe),
      (m[74] = i.id),
      (m[75] = go));
  else go = m[75];
  return go;
}
function ScheduledTaskForm(ct) {
  let f = _(59),
    {
      defaultDir: x,
      existingIds: Te,
      prefill: c,
      modelOptions: Me,
      onCancel: Xe,
      onDone: Ie,
      onSaved: ze,
      storageV5: $e,
    } = ct,
    ho;
  if (f[0] !== Me)
    ((ho = Me === void 0 ? [{ label: "default", value: "" }] : Me),
      (f[0] = Me),
      (f[1] = ho));
  else ho = f[1];
  let W = ho,
    T = c !== void 0,
    vo;
  if (f[2] !== Te || f[3] !== T || f[4] !== c)
    ((vo = T ? Te.filter((ut) => ut !== c.id) : Te),
      (f[2] = Te),
      (f[3] = T),
      (f[4] = c),
      (f[5] = vo));
  else vo = f[5];
  let Ue = vo;
  const Ye = c?.prompt ?? "",
    Ge = c?.cron ?? "",
    He = c?.directory ?? x,
    Ke = c?.id ?? "",
    We = c?.permissionMode ?? "dontAsk",
    Ze = c?.model ?? "";
  let Co;
  if (
    f[6] !== Ye ||
    f[7] !== Ge ||
    f[8] !== He ||
    f[9] !== Ke ||
    f[10] !== We ||
    f[11] !== Ze
  )
    ((Co = {
      prompt: Ye,
      schedule: Ge,
      dir: He,
      id: Ke,
      permissionMode: We,
      model: Ze,
    }),
      (f[6] = Ye),
      (f[7] = Ge),
      (f[8] = He),
      (f[9] = Ke),
      (f[10] = We),
      (f[11] = Ze),
      (f[12] = Co));
  else Co = f[12];
  let [g, pt] = d(Co),
    [O, ft] = d(T),
    [_e, So] = d(!1),
    xo;
  if (f[13] !== x || f[14] !== O)
    ((xo = function Z(X, To) {
      if (X === "id") ft(!0);
      pt((eo) => {
        if (eo[X] === To) {
          return eo;
        }
        let ke = { ...eo, [X]: To };
        if (X !== "id" && !O && (X === "prompt" || X === "dir"))
          ke.id = ie(resolve(Ju(ke.dir?.trim() || x)), ke.prompt ?? "");
        return ke;
      });
    }),
      (f[13] = x),
      (f[14] = O),
      (f[15] = xo));
  else xo = f[15];
  let Z = xo,
    Mo;
  if (f[16] !== W || f[17] !== c)
    ((Mo =
      c?.model && !W.some((bt) => bt.value === c.model)
        ? [...W, { label: c.model, value: c.model }]
        : W),
      (f[16] = W),
      (f[17] = c),
      (f[18] = Mo));
  else Mo = f[18];
  let I = Mo,
    $o,
    ko;
  if (f[19] === MEMO_CACHE_SENTINEL)
    (($o = {
      type: "text",
      key: "prompt",
      label: "Prompt",
      placeholder: "/babysit-prs",
      required: !0,
      hint: qo,
    }),
      (ko = {
        type: "text",
        key: "schedule",
        label: "Schedule",
        placeholder: "5m, 2h, 1d  or  */15 * * * *",
        required: !0,
        validate: Jo,
        hint: Oo,
      }),
      (f[19] = $o),
      (f[20] = ko));
  else (($o = f[19]), (ko = f[20]));
  let Pe;
  if (f[21] !== x)
    ((Pe = { type: "text", key: "dir", label: "Directory", placeholder: x }),
      (f[21] = x),
      (f[22] = Pe));
  else Pe = f[22];
  let Re;
  if (f[23] !== Ue)
    ((Re = (yt) => {
      let oo = yt.trim();
      if (oo !== "" && Ue.includes(oo)) {
        return `id '${oo}' is already in use`;
      }
      return null;
    }),
      (f[23] = Ue),
      (f[24] = Re));
  else Re = f[24];
  let we;
  if (f[25] !== O)
    ((we = () => (O ? void 0 : "Auto-generated from prompt and directory.")),
      (f[25] = O),
      (f[26] = we));
  else we = f[26];
  let Be;
  if (f[27] !== Re || f[28] !== we)
    ((Be = { type: "text", key: "id", label: "Id", validate: Re, hint: we }),
      (f[27] = Re),
      (f[28] = we),
      (f[29] = Be));
  else Be = f[29];
  let Po;
  if (f[30] === MEMO_CACHE_SENTINEL)
    ((Po = {
      type: "select",
      key: "permissionMode",
      label: "Permission mode",
      options: VALID_PERMISSION_MODES.map(Xo),
    }),
      (f[30] = Po));
  else Po = f[30];
  let De;
  if (f[31] !== I)
    ((De = (Ro) =>
      I.find((gt) => gt.value === Ro)?.description ??
      (Ro === "" ? "Uses your configured default model." : void 0)),
      (f[31] = I),
      (f[32] = De));
  else De = f[32];
  let Ve;
  if (f[33] !== I || f[34] !== De)
    ((Ve = {
      type: "select",
      key: "model",
      label: "Model",
      options: I,
      hint: De,
    }),
      (f[33] = I),
      (f[34] = De),
      (f[35] = Ve));
  else Ve = f[35];
  let wo;
  if (f[36] !== Pe || f[37] !== Be || f[38] !== Ve)
    ((wo = [$o, ko, Pe, Be, Po, Ve]),
      (f[36] = Pe),
      (f[37] = Be),
      (f[38] = Ve),
      (f[39] = wo));
  else wo = f[39];
  let to = wo,
    Bo;
  if (
    f[40] !== _e ||
    f[41] !== x ||
    f[42] !== T ||
    f[43] !== Ie ||
    f[44] !== ze ||
    f[45] !== c ||
    f[46] !== $e ||
    f[47] !== g
  )
    ((Bo = async function oe() {
      if (_e) {
        return;
      }
      So(!0);
      let Do = resolve(Ju(g.dir?.trim() || x));
      let Vo = parseScheduleInput(g.schedule ?? "");
      if (Vo.cron === void 0) {
        So(!1);
        return;
      }
      let io = g.id?.trim() || ie(Do, g.prompt?.trim() ?? "");
      let ht = g.permissionMode ?? "dontAsk";
      let Ao = g.model?.trim() || void 0;
      let vt = {
        id: io,
        cron: Vo.cron,
        prompt: g.prompt.trim(),
        directory: Do,
        enabled: c?.enabled ?? !0,
        permissionMode: ht,
        runTimeoutMinutes: c?.runTimeoutMinutes ?? 30,
        maxQueued: c?.maxQueued ?? 1,
        ...(Ao && { model: Ao }),
      };
      try {
        if (T && c.id !== io) await removeScheduledTask(c.id, void 0, $e);
        (await addScheduledTask(vt, void 0, $e), await ze(io, T));
      } catch (ee) {
        let jo = ee;
        (logError(jo), Ie(`Save failed: ${l(jo)}`, { display: "system" }));
      }
    }),
      (f[40] = _e),
      (f[41] = x),
      (f[42] = T),
      (f[43] = Ie),
      (f[44] = ze),
      (f[45] = c),
      (f[46] = $e),
      (f[47] = g),
      (f[48] = Bo));
  else Bo = f[48];
  let oe = Bo;
  const ee = T ? `Edit '${c.id}'` : "New scheduled task";
  let Ae;
  if (f[49] !== oe) ((Ae = () => void oe()), (f[49] = oe), (f[50] = Ae));
  else Ae = f[50];
  const no = T ? "Save changes" : "Create task";
  let Eo;
  if (
    f[51] !== to ||
    f[52] !== Xe ||
    f[53] !== Z ||
    f[54] !== ee ||
    f[55] !== Ae ||
    f[56] !== no ||
    f[57] !== g
  )
    ((Eo = e(XL, {
      title: ee,
      subtitle: "Fire a prompt on a recurring schedule",
      fields: to,
      values: g,
      onChange: Z,
      onSubmit: Ae,
      onCancel: Xe,
      submitLabel: no,
    })),
      (f[51] = to),
      (f[52] = Xe),
      (f[53] = Z),
      (f[54] = ee),
      (f[55] = Ae),
      (f[56] = no),
      (f[57] = g),
      (f[58] = Eo));
  else Eo = f[58];
  return Eo;
}
function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}
function ie(s, v) {
  let u = slugify(basename(s)),
    C = slugify(v.split(/\s+/).slice(0, 4).join(" "));
  return [u, C].filter(Boolean).join("-") || "task";
}
function so(s) {
  return {
    id: s.id,
    cron: s.cron,
    prompt: s.prompt,
    directory: s.directory,
    enabled: s.enabled,
    permissionMode: s.permissionMode,
    runTimeoutMinutes: s.runTimeoutMinutes,
    maxQueued: s.maxQueued,
    ...(s.model && { model: s.model }),
  };
}
export { loadScheduledTasks, ScheduledTaskDetail, ScheduledTaskForm, slugify };

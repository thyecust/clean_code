// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 223 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { h8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { withTimeout } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getRemoteTransport, isRemoteActive, hasRemoteControlChannel } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { stripAnsi } from "../../01-核心基础设施/共享小工具-未细化/text-sanitization.js";
import { Box, Text } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { planArtifactSlot, ModePushTimeoutError, registerModePushWaiter } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { resolveEditorCommand, editFileInExternalEditor } from "../../03-入口与运行时/会话UI(REPL)/external-editor.js";
import { getIdeDisplayName, prepareContextForPlanMode, createUserMessage } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { applyPermissionUpdate } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { notePlanFileForgotten, peekPlanSlug, getPlanFilePath, getPlanAsync } from "./计划模式(Plan).e5mh1avy.js";
import { renderToPlainText } from "../../01-核心基础设施/共享小工具-未细化/one-shot-render.js";
import { TitleWithSubtitle } from "../../01-核心基础设施/共享小工具-未细化/title-with-subtitle.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
var x = 15000,
  G = 1e4,
  J = 1e6;
function A(fe) {
  let w = _(14),
    { planContent: F, planPath: L, editorName: h, canShare: U } = fe,
    E;
  if (w[0] !== L)
    ((E = e(TitleWithSubtitle, { subtitle: L, children: "Current Plan" })),
      (w[0] = L),
      (w[1] = E));
  else E = w[1];
  let S;
  if (w[2] !== F)
    ((S = e(Box, { marginTop: 1, children: e(Text, { children: F }) })),
      (w[2] = F),
      (w[3] = S));
  else S = w[3];
  let R;
  if (w[4] !== h)
    ((R =
      h &&
      r(Box, {
        marginTop: 1,
        children: [
          e(Text, { dimColor: !0, children: '"/plan open"' }),
          e(Text, { dimColor: !0, children: " to edit this plan in " }),
          e(Text, { bold: !0, dimColor: !0, children: h }),
        ],
      })),
      (w[4] = h),
      (w[5] = R));
  else R = w[5];
  let T;
  if (w[6] !== U || w[7] !== h)
    ((T =
      U &&
      r(Box, {
        marginTop: h ? 0 : 1,
        children: [
          e(Text, { dimColor: !0, children: '"/plan share"' }),
          e(Text, {
            dimColor: !0,
            children: " to publish this plan as an artifact",
          }),
        ],
      })),
      (w[6] = U),
      (w[7] = h),
      (w[8] = T));
  else T = w[8];
  let X;
  if (w[9] !== E || w[10] !== S || w[11] !== R || w[12] !== T)
    ((X = r(Box, { flexDirection: "column", children: [E, S, R, T] })),
      (w[9] = E),
      (w[10] = S),
      (w[11] = R),
      (w[12] = T),
      (w[13] = X));
  else X = w[13];
  return X;
}
async function me(a, l, m) {
  let { getAppState: P, setAppState: M } = l,
    O = P().toolPermissionContext.mode,
    c = O !== "plan";
  if (c)
    (h8(O, "plan"),
      M((s) => ({
        ...s,
        toolPermissionContext: applyPermissionUpdate(prepareContextForPlanMode(s.toolPermissionContext), {
          type: "setMode",
          mode: "plan",
          destination: "session",
        }),
      })));
  if (isRemoteActive()) {
    if (!hasRemoteControlChannel())
      return (a(c ? "Enabled plan mode" : "Already in plan mode."), null);
    let s = getRemoteTransport(),
      i = m.trim();
    if (c && i && i !== "open" && i !== "share") {
      try {
        await registerModePushWaiter(l.session, "plan", x);
      } catch (u) {
        let b = u instanceof ModePushTimeoutError;
        return (
          logFeatureBad(
            "plan_remote_query",
            b ? "mode_push_timeout" : "mode_push_rejected",
          ),
          a(
            b
              ? `Enabled plan mode locally, but the cloud session didn\u2019t confirm the switch in time \u2014 your description was not sent: ${i}. The session may be having connection trouble; once it\u2019s responding again, send the description as a normal message.`
              : `The cloud session couldn\u2019t switch to plan mode, so your description was not sent: ${i}`,
          ),
          null
        );
      }
      let p = createUserMessage({ content: i, origin: { kind: "human" } });
      if (
        (l.setMessages((u) => [...u, p]),
        !(await s.sendMessage(i, { uuid: p.uuid })))
      )
        return (
          logFeatureBad("plan_remote_query", "send_failed"),
          a("Enabled plan mode"),
          null
        );
      return (logFeatureOk("plan_remote_query"), a("Enabled plan mode"), null);
    }
    if (i.split(/\s+/)[0] === "open")
      return (
        logFeatureOk("plan_remote_open"),
        a(
          "The plan file lives in the cloud workspace, so /plan open can\u2019t open it in a local editor. Use /plan to view it; to change it, tell Claude what to revise, or edit the plan in the approval dialog when Claude finishes planning.",
        ),
        null
      );
    if (i.split(/\s+/)[0] === "share")
      return (
        logFeatureOk("plan_remote_share"),
        a(
          "The plan lives in the cloud workspace, so /plan share can\u2019t publish it from this machine yet. Use /plan to view it and share its contents from there.",
        ),
        null
      );
    try {
      let p = await withTimeout(
        s.sendControlRequest({ subtype: "get_plan" }),
        G,
        "get_plan timed out",
      );
      if (!p.exists || !p.content)
        return (
          logFeatureOk("plan_remote_view"),
          a(
            c
              ? "Enabled plan mode"
              : "Already in plan mode. No plan written yet.",
          ),
          null
        );
      logFeatureOk("plan_remote_view");
      let d = mayHaveRemoteClient(l.session),
        u = p.content,
        b = (I) =>
          e(A, {
            planContent: stripAnsi(u).slice(0, J),
            planPath:
              p.path !== void 0 && !I
                ? stripAnsi(p.path).replace(/[\r\n]/g, " ")
                : void 0,
            editorName: void 0,
            canShare: !1,
          }),
        B = await renderToPlainText(b(d), { storageV5: l.storageV5 });
      if (!d && mayHaveRemoteClient(l.session)) B = await renderToPlainText(b(!0), { storageV5: l.storageV5 });
      return (a(B), null);
    } catch (p) {
      let d = p instanceof Error ? p.message : String(p),
        u = d.includes("Unsupported control request subtype");
      return (
        logFeatureBad(
          "plan_remote_view",
          u
            ? "unsupported_subtype"
            : d.includes("get_plan timed out")
              ? "timeout"
              : "request_failed",
        ),
        a(
          c
            ? "Enabled plan mode"
            : u
              ? "Viewing plans in cloud sessions needs a newer session runtime."
              : "Couldn\u2019t fetch the plan from the cloud session \u2014 try again.",
        ),
        null
      );
    }
  }
  if (c) {
    let s = m.trim();
    if (s && s !== "open" && s !== "share")
      return (a("Enabled plan mode", { shouldQuery: !0 }), null);
    if (!peekPlanSlug()) return (a("Enabled plan mode"), null);
  }
  let g = getPlanFilePath();
  notePlanFileForgotten(g);
  let C = await getPlanAsync(void 0, l.storageV5);
  if (!C)
    return (
      a(c ? "Enabled plan mode" : "Already in plan mode. No plan written yet."),
      null
    );
  let V = m.trim().split(/\s+/);
  if (V[0] === "open") {
    let s = await editFileInExternalEditor(g);
    notePlanFileForgotten(g);
    let i = mayHaveRemoteClient(l.session);
    if (s.error) {
      if (i) logForDebugging(`/plan open failed: ${s.error}`, { level: "error" });
      a(i ? "Couldn't open the plan in the editor" : s.error);
    } else a(i ? "Opened plan in editor" : `Opened plan in editor: ${g}`);
    return null;
  }
  if (V[0] === "share") {
    if (!planArtifactSlot.isPlanArtifactEnabled())
      return (a("Publishing plans is not available in this session."), null);
    let s =
      "Couldn't publish plan \u2014 try /plan share again, or run with --debug for details.";
    try {
      let i = await planArtifactSlot.publishPlanArtifact(
        C,
        l.artifactRegistries.ownPublishes,
        l.credentials,
      );
      if (i.url)
        (M((p) => {
          let d = planArtifactSlot.workshopVerifiedSlugsWith(p.workshopVerifiedSlugs, i);
          return d === null ? p : { ...p, workshopVerifiedSlugs: d };
        }),
          a(`Published plan: ${i.url}`));
      else (logForDebugging(`plan share: publish returned ${i.err}`), a(s));
    } catch (i) {
      (logForDebugging(
        `plan share: publish threw ${i instanceof Error ? i.message : String(i)}`,
      ),
        a(s));
    }
    return null;
  }
  let N = resolveEditorCommand(),
    H = N ? getIdeDisplayName(N) : void 0,
    k = mayHaveRemoteClient(l.session),
    q = (s) =>
      e(A, {
        planContent: C,
        planPath: s ? void 0 : g,
        editorName: H,
        canShare: planArtifactSlot.isPlanArtifactEnabled(),
      }),
    v = await renderToPlainText(q(k), { storageV5: l.storageV5 });
  if (!k && mayHaveRemoteClient(l.session)) v = await renderToPlainText(q(!0), { storageV5: l.storageV5 });
  return (a(v), null);
}
export { me as call };

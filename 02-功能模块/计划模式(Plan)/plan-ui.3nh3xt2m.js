// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 223 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { h8 } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Dt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { lo } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import { _ } from "../../00-第三方库/react/react.zhnvc798.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { jn, Pt, Ks } from "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import { pt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { o, t } from "../../01-核心基础设施/ANSI-样式-布局原语/chunk-k8hr56nm.js";
import { _6e, B0t, Q1n } from "../../03-入口与运行时/会话UI(REPL)/会话UI(REPL).qs63rzfp.js";
import { OS, f9 } from "../../03-入口与运行时/会话UI(REPL)/chunk-zds66w6y.js";
import { Ng, JKe, Re } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { Oc } from "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import { Cp, GK, Gh, tve } from "./计划模式(Plan).e5mh1avy.js";
import { uat } from "../../01-核心基础设施/共享小工具-未细化/chunk-9jeb00w7.js";
import { uc } from "../../01-核心基础设施/共享小工具-未细化/chunk-2gabx7f1.js";
import { e, r } from "../../00-第三方库/react/react.kwtapczy.js";
var x = 15000,
  G = 1e4,
  J = 1e6;
function A(fe) {
  let w = _(14),
    { planContent: F, planPath: L, editorName: h, canShare: U } = fe,
    E;
  if (w[0] !== L)
    ((E = e(uc, { subtitle: L, children: "Current Plan" })),
      (w[0] = L),
      (w[1] = E));
  else E = w[1];
  let S;
  if (w[2] !== F)
    ((S = e(o, { marginTop: 1, children: e(t, { children: F }) })),
      (w[2] = F),
      (w[3] = S));
  else S = w[3];
  let R;
  if (w[4] !== h)
    ((R =
      h &&
      r(o, {
        marginTop: 1,
        children: [
          e(t, { dimColor: !0, children: '"/plan open"' }),
          e(t, { dimColor: !0, children: " to edit this plan in " }),
          e(t, { bold: !0, dimColor: !0, children: h }),
        ],
      })),
      (w[4] = h),
      (w[5] = R));
  else R = w[5];
  let T;
  if (w[6] !== U || w[7] !== h)
    ((T =
      U &&
      r(o, {
        marginTop: h ? 0 : 1,
        children: [
          e(t, { dimColor: !0, children: '"/plan share"' }),
          e(t, {
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
    ((X = r(o, { flexDirection: "column", children: [E, S, R, T] })),
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
        toolPermissionContext: Oc(JKe(s.toolPermissionContext), {
          type: "setMode",
          mode: "plan",
          destination: "session",
        }),
      })));
  if (Pt()) {
    if (!Ks())
      return (a(c ? "Enabled plan mode" : "Already in plan mode."), null);
    let s = jn(),
      i = m.trim();
    if (c && i && i !== "open" && i !== "share") {
      try {
        await Q1n(l.session, "plan", x);
      } catch (u) {
        let b = u instanceof B0t;
        return (
          f(
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
      let p = Re({ content: i, origin: { kind: "human" } });
      if (
        (l.setMessages((u) => [...u, p]),
        !(await s.sendMessage(i, { uuid: p.uuid })))
      )
        return (
          f("plan_remote_query", "send_failed"),
          a("Enabled plan mode"),
          null
        );
      return (y("plan_remote_query"), a("Enabled plan mode"), null);
    }
    if (i.split(/\s+/)[0] === "open")
      return (
        y("plan_remote_open"),
        a(
          "The plan file lives in the cloud workspace, so /plan open can\u2019t open it in a local editor. Use /plan to view it; to change it, tell Claude what to revise, or edit the plan in the approval dialog when Claude finishes planning.",
        ),
        null
      );
    if (i.split(/\s+/)[0] === "share")
      return (
        y("plan_remote_share"),
        a(
          "The plan lives in the cloud workspace, so /plan share can\u2019t publish it from this machine yet. Use /plan to view it and share its contents from there.",
        ),
        null
      );
    try {
      let p = await Dt(
        s.sendControlRequest({ subtype: "get_plan" }),
        G,
        "get_plan timed out",
      );
      if (!p.exists || !p.content)
        return (
          y("plan_remote_view"),
          a(
            c
              ? "Enabled plan mode"
              : "Already in plan mode. No plan written yet.",
          ),
          null
        );
      y("plan_remote_view");
      let d = lo(l.session),
        u = p.content,
        b = (I) =>
          e(A, {
            planContent: pt(u).slice(0, J),
            planPath:
              p.path !== void 0 && !I
                ? pt(p.path).replace(/[\r\n]/g, " ")
                : void 0,
            editorName: void 0,
            canShare: !1,
          }),
        B = await uat(b(d), { storageV5: l.storageV5 });
      if (!d && lo(l.session)) B = await uat(b(!0), { storageV5: l.storageV5 });
      return (a(B), null);
    } catch (p) {
      let d = p instanceof Error ? p.message : String(p),
        u = d.includes("Unsupported control request subtype");
      return (
        f(
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
    if (!GK()) return (a("Enabled plan mode"), null);
  }
  let g = Gh();
  Cp(g);
  let C = await tve(void 0, l.storageV5);
  if (!C)
    return (
      a(c ? "Enabled plan mode" : "Already in plan mode. No plan written yet."),
      null
    );
  let V = m.trim().split(/\s+/);
  if (V[0] === "open") {
    let s = await f9(g);
    Cp(g);
    let i = lo(l.session);
    if (s.error) {
      if (i) n(`/plan open failed: ${s.error}`, { level: "error" });
      a(i ? "Couldn't open the plan in the editor" : s.error);
    } else a(i ? "Opened plan in editor" : `Opened plan in editor: ${g}`);
    return null;
  }
  if (V[0] === "share") {
    if (!_6e.isPlanArtifactEnabled())
      return (a("Publishing plans is not available in this session."), null);
    let s =
      "Couldn't publish plan \u2014 try /plan share again, or run with --debug for details.";
    try {
      let i = await _6e.publishPlanArtifact(
        C,
        l.artifactRegistries.ownPublishes,
        l.credentials,
      );
      if (i.url)
        (M((p) => {
          let d = _6e.workshopVerifiedSlugsWith(p.workshopVerifiedSlugs, i);
          return d === null ? p : { ...p, workshopVerifiedSlugs: d };
        }),
          a(`Published plan: ${i.url}`));
      else (n(`plan share: publish returned ${i.err}`), a(s));
    } catch (i) {
      (n(
        `plan share: publish threw ${i instanceof Error ? i.message : String(i)}`,
      ),
        a(s));
    }
    return null;
  }
  let N = OS(),
    H = N ? Ng(N) : void 0,
    k = lo(l.session),
    q = (s) =>
      e(A, {
        planContent: C,
        planPath: s ? void 0 : g,
        editorName: H,
        canShare: _6e.isPlanArtifactEnabled(),
      }),
    v = await uat(q(k), { storageV5: l.storageV5 });
  if (!k && lo(l.session)) v = await uat(q(!0), { storageV5: l.storageV5 });
  return (a(v), null);
}
export { me as call };

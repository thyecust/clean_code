// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { ze, ke, YLn, JLn, Nn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { S, u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { _t } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { h } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import { tke, jxn } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import { cve, AJe } from "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import { g2 } from "../../01-核心基础设施/共享小工具-未细化/chunk-6k8nm416.js";
import { t5 } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { _dt } from "../../01-核心基础设施/共享小工具-未细化/chunk-ch1x7wx1.js";
import { LPe } from "../../01-核心基础设施/共享小工具-未细化/chunk-16992wzt.js";
import { MPe, zee } from "../../01-核心基础设施/共享小工具-未细化/chunk-s5e85mz9.js";
import { Vbt, Kbt, WQn, GQn } from "../../01-核心基础设施/共享小工具-未细化/chunk-wew8t48z.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { s, O, c, Qe } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { randomUUID as I } from "crypto";
var T = m(() =>
    Qe({
      condition: s()
        .min(1)
        .max(Kbt)
        .describe(
          `The completion condition to propose, written so a separate evaluator can verify it from the conversation (e.g. "all tests in test/auth pass (bun test exits 0)"). At most ${Kbt} characters \u2014 the user must be able to read the whole condition in the approval dialog.`,
        ),
      ask_user: O()
        .optional()
        .describe(
          "Whether to ask the user for approval before the goal is set. Defaults to true \u2014 an approval dialog is shown. Set false ONLY when the user's own words in this conversation stated this outcome as what they want; the goal is then set directly, with a visible notice in the transcript, and the user can clear it with /goal clear.",
        ),
    }),
  ),
  P = m(() =>
    c({
      condition: s().describe(
        "The condition shown to the user for approval, or set directly when ask_user was false",
      ),
      askUser: O().describe(
        "Whether the user was asked for approval (true) or the goal was set directly (false)",
      ),
    }),
  );
function E(e) {
  if (YLn()) return;
  (JLn(), i("tengu_goal_proposal_available", { setting: u(e) }));
}
var X = Tt({
  name: Vbt,
  maxResultSizeChars: 1000,
  searchHint:
    "propose a session goal condition for the user to approve with one keypress",
  get inputSchema() {
    return T();
  },
  get outputSchema() {
    return P();
  },
  shouldDefer: !0,
  isEnabled() {
    if (ke() || Nn()) return !1;
    if (_t()) return !1;
    if (!_dt()) return !1;
    let e = tke();
    if (e === "disabled") return !1;
    return (E(e), !0);
  },
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `ask_user=${e.ask_user !== !1}: ${e.condition ?? ""}`;
  },
  async description() {
    return WQn;
  },
  async prompt() {
    return GQn;
  },
  renderToolUseMessage(e) {
    if (!e.condition) return "";
    return `Propose goal: ${zee(MPe(e.condition), 200)}`;
  },
  create(e) {
    return {
      async call({ condition: r, ask_user: w }) {
        if (e.agentId)
          throw Error("ProposeGoal cannot be used in agent contexts");
        if (ke() || Nn() || _t())
          throw (
            g("goal_propose", "session_shape"),
            Error(
              "Goal proposals are only available in interactive local sessions.",
            )
          );
        let o = t5(MPe(r)).trim();
        if (o === "")
          throw Error(
            "The goal condition is empty once whitespace and invisible characters are removed. Provide a visible condition.",
          );
        if (o.length > Kbt)
          throw new R(
            `The goal condition exceeds ${Kbt} characters once canonicalized for display (tabs expand to spaces). Shorten the condition \u2014 the user must be able to read all of it in the approval dialog.`,
            "goal condition exceeds the canonicalized-length cap",
          );
        if (cve(o))
          throw Error(
            "ProposeGoal only proposes a new goal; it cannot clear one. The user can clear an active goal with /goal clear.",
          );
        let n = AJe();
        if (n !== null)
          throw (
            g("goal_propose", n.code),
            new R(n.message, "goal evaluator blocked")
          );
        if (e.permissions().mode === "plan")
          throw (
            g("goal_propose", "plan_mode"),
            Error(
              "Plan mode is active, so a goal cannot be proposed yet. Keep planning; propose the goal after the plan is approved.",
            )
          );
        let _ = await jxn(e.storageV5);
        if (_ === "disabled")
          throw (
            g("goal_propose", "setting_disabled"),
            Error(
              "The user has disabled model-proposed goals in their settings. Do not propose goals; the user can set one themselves with /goal.",
            )
          );
        let l = _ === "alwaysAsk" || w !== !1,
          { messageQueue: b, requestDialog: k } = e;
        if (k === void 0)
          throw Error(
            "Goal proposals need an interactive session to render the approval prompt; none is available here.",
          );
        if (e.toolState.get(LPe).id)
          throw Error(
            "A goal proposal is already awaiting the user's decision. Keep working; if it is approved you will receive a kickoff message.",
          );
        if (
          (i("tengu_goal_proposed", {
            promptLength: o.length,
            askUser: l,
            forcedAsk: l && w === !1,
          }),
          y("goal_propose"),
          !l)
        )
          return (
            e.recordQueuedGoalOrigin(o, "proposal_direct"),
            b.enqueue({
              agentId: ze(),
              mode: "prompt",
              value: `/goal ${o}`,
              origin: { kind: "task-notification" },
            }),
            { data: { condition: o, askUser: !1 } }
          );
        let a = e.toolState.get(LPe),
          p = I();
        return (
          (a.id = p),
          k(g2, { condition: o }, { place: "under" })
            .then((t) => {
              let d = a.id !== p,
                f = tke() === "disabled",
                v = e.permissions().mode === "plan";
              if (
                (i("tengu_goal_proposal_decided", {
                  decision: t.approved
                    ? d
                      ? S("approved_stale")
                      : f
                        ? S("approved_disabled")
                        : v
                          ? S("approved_plan_mode")
                          : S("approved")
                    : t.explicit === !0
                      ? S("declined")
                      : S("unanswered"),
                }),
                !t.approved || d || f || v)
              ) {
                if (t.approved && !d) {
                  if (f) g("goal_propose", "approved_dropped_disabled");
                  else if (v) g("goal_propose", "approved_dropped_plan_mode");
                }
                return;
              }
              (e.recordQueuedGoalOrigin(o, "proposal_approved"),
                b.enqueue({
                  agentId: ze(),
                  mode: "prompt",
                  value: `/goal ${o}`,
                  origin: { kind: "auto-continuation" },
                }));
            })
            .catch((t) => {
              h(t);
            })
            .finally(() => {
              if (a.id === p) a.clear();
            }),
          { data: { condition: o, askUser: !0 } }
        );
      },
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return {
      tool_use_id: r,
      type: "tool_result",
      content:
        e.askUser === !1
          ? "Setting the goal now, without an approval dialog \u2014 the user sees it being set and can clear it with /goal clear. It becomes active at the end of this turn, when you will receive a kickoff message confirming it; until that message arrives, any previously set goal remains in effect. Continue working \u2014 do not wait for the kickoff."
          : "Shown the goal proposal to the user for approval. Continue working \u2014 do not wait for their decision. If they approve, the proposed goal is set and you will receive a kickoff message; until then, no new goal is active \u2014 any previously set goal remains in effect. If they decline you will not be notified \u2014 do not ask about the decision or re-propose the same condition.",
    };
  },
});
export { X as ProposeGoalTool };

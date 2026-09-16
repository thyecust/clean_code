// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { tYt } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { y } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { R } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
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
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
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
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import { Tt } from "../权限系统/chunk-qdy0h5k2.js";
import { tm, WNe } from "../../01-核心基础设施/共享小工具-未细化/chunk-6dk85bs6.js";
import { _G, m1e, ZQn, Tbn, Rj, rCe, ofe, oCe, h1e } from "../Channel-Slack集成/Channel-Slack集成.wnn25q3j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-6ffbt6s0.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-px58ry6q.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import { s, T, v, c, Qe, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var d = m(() => Qe({})),
  f = m(() =>
    c({
      content: s().describe(`Rendered event envelopes, or "${m1e}"`),
      eventCount: T()
        .int()
        .describe("Number of events delivered in this result"),
      remainingWakeCount: T()
        .int()
        .describe(
          "Wake events still queued after this chunk; they follow in the next delivery",
        ),
      provenance: v(
        c({
          authority: X(Tbn),
          senderId: s().optional(),
          senderText: s().optional(),
        }).nullable(),
      ).optional(),
    }),
  ),
  k = Tt({
    name: _G,
    searchHint: "wait for and receive queued harness events",
    maxResultSizeChars: 1e5,
    skipAggregateToolResultBudget: !0,
    get inputSchema() {
      return d();
    },
    get outputSchema() {
      return f();
    },
    isEnabled() {
      return Rj();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return "Wait for pending harness events";
    },
    async prompt() {
      return ZQn;
    },
    mapToolResultToToolResultBlockParam(e, t) {
      return { tool_use_id: t, type: "tool_result", content: e.content };
    },
    renderToolUseMessage() {
      return "";
    },
    extractSearchText() {
      return "";
    },
    create({ agentId: e, messageQueue: t, toolState: o }) {
      return {
        async call(i, { signal: n }) {
          if (e !== void 0)
            throw new R("Poll is available on the main thread only");
          let a = t;
          if (!a.tryBeginPollCall())
            return {
              data: { content: m1e, eventCount: 0, remainingWakeCount: 0 },
            };
          try {
            let u = tYt() === "evals" ? h1e({ toolState: o }) : null;
            return await g(a, n, u);
          } finally {
            a.endPollCall();
          }
        },
      };
    },
  });
async function g(e, t, o) {
  let i = { data: { content: m1e, eventCount: 0, remainingWakeCount: 0 } };
  for (;;) {
    if (t.aborted) return i;
    let { commands: n, remainingWakeCount: a } = e.drainPollEventChunk();
    if (n.length > 0) {
      let u = n.map(rCe);
      return (
        y("poll_event_delivery"),
        WNe(n),
        oCe(n),
        {
          data: {
            content: ofe(u, a),
            eventCount: n.length,
            remainingWakeCount: a,
            provenance: n.map((r) => r.pollEvent?.provenance ?? null),
          },
        }
      );
    }
    if (e.peek(tm) !== void 0) return i;
    if (o !== null && o.outstanding() === 0) return i;
    await new Promise((u) => {
      function r() {
        (l(), p?.(), t.removeEventListener("abort", r), u());
      }
      let l = e.subscribe(r),
        p = o?.onOutstandingChange(r);
      if (
        (t.addEventListener("abort", r),
        t.aborted ||
          e.peek(tm) !== void 0 ||
          (o !== null && o.outstanding() === 0))
      )
        r();
    });
  }
}
export { k as PollTool };

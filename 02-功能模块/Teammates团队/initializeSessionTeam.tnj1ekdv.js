// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { K, he, TYt, QLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { ef } from "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import "./chunk-qe04h4c5.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-btrgwq6w.js";
import "./chunk-811z9z0t.js";
import { TZn, Wk, CXe } from "./chunk-g6nvp9mm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import { ioe, Pf, DGt, LGt, Wbn } from "./chunk-6b13bhw1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-bacs4ztm.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import { ix } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { fs } from "./chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { rename as d } from "fs/promises";
var l = "session";
function c(t) {
  return `${l}-${t.slice(0, 8)}`;
}
function p() {
  if (TYt() === void 0) {
    let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    (delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, QLn(t));
  }
  return TYt() ?? null;
}
async function x(t, n) {
  let i = t?.existingTeamName || p(),
    e = i ?? c(K()),
    a = ix(fs, e),
    m = ioe(e);
  if (!(i ? await Pf(e, n) : null)) {
    let r = {
      name: e,
      createdAt: Date.now(),
      leadAgentId: a,
      leadSessionId: K(),
      members: [
        {
          agentId: a,
          name: fs,
          agentType: fs,
          joinedAt: Date.now(),
          tmuxPaneId: "leader",
          cwd: he(),
          subscriptions: [],
          backendType: "in-process",
        },
      ],
    };
    await LGt(e, r, n).catch((T) => DGt(e, T));
  }
  TZn(e);
  let o = K();
  if (e !== o) await d(Wk(o), Wk(e)).catch(() => {});
  (await CXe(e, n), Wbn(e));
  let s = ef[0];
  return {
    teamContext: {
      teamName: e,
      teamFilePath: m,
      leadAgentId: a,
      teammates: {
        [a]: {
          name: fs,
          agentType: fs,
          color: s,
          tmuxSessionName: "in-process",
          tmuxPaneId: "leader",
          cwd: he(),
          spawnedAt: Date.now(),
        },
      },
    },
    teammateColors: { assignments: new Map([[a, s]]), index: 1 },
  };
}
export { x as initializeSessionTeam };

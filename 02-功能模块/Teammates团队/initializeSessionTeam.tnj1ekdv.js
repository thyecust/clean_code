// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 38 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { K, he, TYt, QLn } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { ef } from "../../01-核心基础设施/共享小工具-未细化/chunk-sda3j0p4.js";
import { TZn, Wk, CXe } from "./chunk-g6nvp9mm.js";
import { getTeamFilePath as ioe, readTeamFileAsync as Pf, logTeamFileWriteFailure as DGt, writeTeamFileAsync as LGt, registerTeamForSessionCleanup as Wbn } from "./chunk-6b13bhw1.js";
import { ix } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { fs } from "./chunk-enjekn9t.js";
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

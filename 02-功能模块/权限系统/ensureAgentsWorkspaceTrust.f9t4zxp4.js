// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 206 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { B, Dx } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { Bo } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import { Nae } from "../../01-核心基础设施/设置-配置/chunk-avjbj8nf.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function S() {
  if (Ie(!1) || Boolean(a.IS_DEMO) || a.CLAUBBIT) return "skip";
  return Bo() && !Nae() ? "trusted" : "ask";
}
async function T(r, i, o) {
  switch (i) {
    case "skip":
      if (!a.CLAUBBIT && Bo()) {
        Dx(!0);
        let { primePlanSlugCollisions: t } =
          await import("../../01-核心基础设施/共享小工具-未细化/getPlanFilePath.t2ddc0h6.js");
        t(o);
      }
      {
        let { capturePolicySnapshot: t } = await import("./capturePolicySnapshot.y30rz57r.js");
        t();
      }
      return;
    case "trusted": {
      Dx(!0);
      let [{ primePlanSlugCollisions: t }, { capturePolicySnapshot: s }] =
        await Promise.all([
          import("../../01-核心基础设施/共享小工具-未细化/getPlanFilePath.t2ddc0h6.js"),
          import("./capturePolicySnapshot.y30rz57r.js"),
        ]);
      (t(o), s());
      return;
    }
    case "ask": {
      let [{ runSteps: t }, { TrustDialog: s }, { getCommands: n }] =
          await Promise.all([
            import("../../01-核心基础设施/共享小工具-未细化/runSteps.9skwgxk6.js"),
            import("./TrustDialog.syp7kdw2.js"),
            import("../斜杠命令-框架/getBuiltinCommands.8nr5y4mb.js"),
          ]),
        p = await n(Q(), o).catch(() => []);
      (await t(r, [(k) => e(s, { commands: p, onDone: () => k() })], {
        session: B(),
        storageV5: o,
      }),
        Dx(!0));
      let { clearPluginCache: c } = await import("../插件系统/clearPluginCache.zqb4jr60.js");
      c("post-trust: re-discover project @skills-dir plugins");
      let [
        { resetGrowthBook: m, initializeGrowthBook: u },
        { primePlanSlugCollisions: l },
        { logError: d },
        { capturePolicySnapshot: g },
      ] = await Promise.all([
        import("../../01-核心基础设施/共享小工具-未细化/ATIS_REQUEST_HEADER.9bwp2jqb.js"),
        import("../../01-核心基础设施/共享小工具-未细化/getPlanFilePath.t2ddc0h6.js"),
        import("./getInMemoryErrors.0ysd6ayc.js"),
        import("./capturePolicySnapshot.y30rz57r.js"),
      ]);
      (m({ preservePendingExposures: !0 }), u().catch(d), l(o), g());
      return;
    }
  }
}
export { S as agentsTrustDecision, T as ensureAgentsWorkspaceTrust };

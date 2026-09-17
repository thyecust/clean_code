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
import { checkHasTrustDialogAccepted } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { getCwd } from "../../01-核心基础设施/共享小工具-未细化/cwd-context.js";
import { shouldOfferTrustBackstop } from "../../01-核心基础设施/设置-配置/marketplace-helper-sources.js";
import { e } from "../../00-第三方库/react/react.kwtapczy.js";
function agentsTrustDecision() {
  if (Ie(!1) || Boolean(a.IS_DEMO) || a.CLAUBBIT) return "skip";
  return checkHasTrustDialogAccepted() && !shouldOfferTrustBackstop() ? "trusted" : "ask";
}
async function ensureAgentsWorkspaceTrust(r, i, o) {
  switch (i) {
    case "skip":
      if (!a.CLAUBBIT && checkHasTrustDialogAccepted()) {
        Dx(!0);
        let { primePlanSlugCollisions: t } =
          await import("../计划模式-Plan/计划模式-Plan.e5mh1avy.js");
        t(o);
      }
      {
        let { capturePolicySnapshot: t } = await import("../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js");
        t();
      }
      return;
    case "trusted": {
      Dx(!0);
      let [{ primePlanSlugCollisions: t }, { capturePolicySnapshot: s }] =
        await Promise.all([
          import("../计划模式-Plan/计划模式-Plan.e5mh1avy.js"),
          import("../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js"),
        ]);
      (t(o), s());
      return;
    }
    case "ask": {
      let [{ runSteps: t }, { TrustDialog: s }, { getCommands: n }] =
          await Promise.all([
            import("../../00-第三方库/_未识别/Ink终端渲染器/chunk-cq8x5zt4.js"),
            import("./TrustDialog.syp7kdw2.js"),
            import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js"),
          ]),
        p = await n(getCwd(), o).catch(() => []);
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
        import("../计划模式-Plan/计划模式-Plan.e5mh1avy.js"),
        import("../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js"),
        import("../../01-核心基础设施/共享小工具-未细化/chunk-22525f7p.js"),
      ]);
      (m({ preservePendingExposures: !0 }), u().catch(d), l(o), g());
      return;
    }
  }
}
export { agentsTrustDecision, ensureAgentsWorkspaceTrust };

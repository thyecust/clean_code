// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 204 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { kt } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { DA, EW } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { renderFableModelName, parseUserSpecifiedModel, Tn } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { RP } from "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { Ym } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { ySe, P_, Rl, rI, I3e, P3e, n2 } from "../../01-核心基础设施/模型目录-ModelCatalog/chunk-qgx6a5a0.js";
import { fw, Lh } from "../Teammates团队/chunk-mrfx53ye.js";
var s = `Usage: /model <name>. Available: ${RP.join(", ")}, default, or a full model ID.`,
  m = 15000;
async function h(a, t) {
  let n = a.trim();
  if (!n || EW.includes(n)) {
    let e = t.getAppState();
    return {
      type: "text",
      value: `${P3e(e)}
${s}`,
    };
  }
  if (DA.includes(n)) return { type: "text", value: s };
  return (
    i("tengu_model_command_inline", {
      args_hash: Tn(n),
      args_length: n.length,
    }),
    Ym(t.session, async () => {
      let e = await kt(ySe(n, t.storageV5, t.credentials), m);
      if (e === void 0)
        return {
          type: "text",
          value: `Couldn't confirm model '${fw(n)}' is available (the check timed out) \xB7 try again`,
        };
      if (!e.ok) return { type: "text", value: e.message };
      if (e.model !== null && n2(e.model))
        return (
          logFeatureSad("model_fable_consent", "noninteractive_set_blocked"),
          {
            type: "text",
            value: `${renderFableModelName(parseUserSpecifiedModel(e.model))} uses usage credits and needs a one-time consent \xB7 pick Fable from /model in an interactive session to set it up`,
          }
        );
      let o = await P_(t.session, t.getAppState, e.model, "command");
      if (o.decision === "block" || o.decision === "ask")
        return (
          logFeatureSad("model_switch", "blocked_by_hook"),
          {
            type: "text",
            value: rI(
              e.model,
              o.decision === "ask"
                ? `${o.reason ?? "confirmation required"} (run /model interactively to confirm)`
                : o.reason,
              o.messages,
            ),
          }
        );
      let l = I3e(
          t.session,
          e.model,
          t.getAppState,
          t.setAppState,
          !t.options.isNonInteractiveSession,
          "command",
          e.substitutedFrom,
          t.storageV5,
        ),
        r =
          e.substitutedFrom !== void 0 && e.model !== null
            ? `${Lh(e.substitutedFrom, e.model)}
`
            : "",
        d =
          o.messages.length > 0
            ? `
${o.messages.map(Rl).join(`
`)}`
            : "";
      return { type: "text", value: `${r}${l}${d}` };
    })
  );
}
export { h as call };

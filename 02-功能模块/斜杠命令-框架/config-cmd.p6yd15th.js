// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 215 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { HELP_FLAGS, INFO_SUBCOMMAND_ALIASES } from "../模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { mayHaveRemoteClient } from "../../01-核心基础设施/共享小工具-未细化/chunk-dajvcsw3.js";
import "../自动模式-AutoMode/unattended-serving-consent.js";
import { sanitizeForRelay } from "../远程控制-Bridge/chunk-5ne99rq3.js";
import "../推送通知-Push/推送通知-Push.8ab67cqd.js";
import "../Teammates团队/chunk-88ybhavr.js";
import "../Teammates团队/backend-registry.js";
import "../../01-核心基础设施/设置-配置/settings-config-model.js";
import { parseConfigShorthand, applyConfigShorthand, collapseShorthandResultOffBox, listConfigKeys } from "../记忆-CLAUDE.md/config-shorthand.js";
import "../../01-核心基础设施/核心工具-日期与本地化/核心工具-日期与本地化.ed6v6hnd.js";
import "../../01-核心基础设施/设置-配置/fast-mode.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/model-switch.js";
import "../../01-核心基础设施/共享小工具-未细化/propose-goal-feature-gate.js";
async function p(n, o) {
  let t = n.trim(),
    e = t.toLowerCase();
  if (!e || HELP_FLAGS.includes(e) || INFO_SUBCOMMAND_ALIASES.includes(e))
    return {
      type: "text",
      value: `Usage: /config key=value [key=value ...]
${listConfigKeys(o)}`,
    };
  let a = parseConfigShorthand(t);
  if (!a)
    return {
      type: "text",
      value: `Expected key=value, got "${sanitizeForRelay(t)}". Run /config to see what's available.`,
    };
  let s = await applyConfigShorthand(a, o),
    r = mayHaveRemoteClient(o.session);
  return {
    type: "text",
    value: s.map((i) => collapseShorthandResultOffBox(i, r)).join(`
`),
  };
}
export { p as call };

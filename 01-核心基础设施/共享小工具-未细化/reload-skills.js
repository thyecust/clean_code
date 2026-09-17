// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { n } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logFeatureOk, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { clearAgentDefinitionsCache, d3, Rk, resetSentSkillNames, clearCommandsCache } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { iM } from "../../02-功能模块/文件监听-Watch/chunk-mmg1rsp2.js";
async function reloadSkills() {
  (d3(), clearCommandsCache(), clearAgentDefinitionsCache(), resetSentSkillNames(), Rk.emit());
  try {
    (await iM.rehome(), logFeatureOk("skill_directory_reload"));
  } catch (r) {
    (n(
      `directory change: re-targeting the skill watcher failed (continuing with the previous watch): ${r}`,
      { level: "error" },
    ),
      logFeatureSad("skill_directory_reload", "rehome_failed"));
  }
}
export { reloadSkills };

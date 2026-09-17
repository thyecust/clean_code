// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 206 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { TB, EB } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "./chunk-w0pgmfvw.js";
import { XPt } from "../../01-核心基础设施/共享小工具-未细化/chunk-jkmndwnz.js";
import { ZVe, Re, ya } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { nte } from "../../01-核心基础设施/共享小工具-未细化/chunk-pcsvt5cv.js";
import { $E } from "../../01-核心基础设施/共享小工具-未细化/chunk-c822xsqz.js";
async function getWorkflowAuthoringAutoloadMessages(t, o, l) {
  let r = t.some((e) => m(e, o, (a) => a.type === "workflow_keyword_request"))
    ? "keyword"
    : t.some((e) =>
          m(
            e,
            o,
            (a) => a.type === "ultra_effort_enter" && a.reminderType === "full",
          ),
        )
      ? "ultracode"
      : void 0;
  if (r === void 0 || !nte(l)) return [];
  let s = XPt(),
    n = s.filter((e) => e.type === "text").map((e) => e.text).join(`

`),
    d = `:${$E}`;
  if (ZVe(ya([...(o ?? [])]), n) !== null) {
    if (EB().get(d)?.content !== n) TB($E, `bundled:${$E}`, n, null);
    return [];
  }
  (TB($E, `bundled:${$E}`, n, null),
    i("tengu_workflow_authoring_skill_autoload", { trigger: fromEnum(r) }),
    logFeatureOk("workflow_authoring_autoload"));
  let { formatSkillLoadingMetadata: f } = await import("../斜杠命令-框架/chunk-s195n5de.js");
  return [
    Re({ content: f($E), isMeta: !0, turnCompanion: !0 }),
    Re({ content: s, isMeta: !0, turnCompanion: !0 }),
  ];
}
function m(t, o, l) {
  return (
    t.type === "attachment" &&
    l(t.attachment) &&
    !o?.some((r) => r.uuid === t.uuid)
  );
}
export { getWorkflowAuthoringAutoloadMessages };

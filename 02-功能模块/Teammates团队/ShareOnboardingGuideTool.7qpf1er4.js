// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 82 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { he } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { createLazyValue } from "../../01-核心基础设施/核心工具-并发与缓存/lazy-value.js";
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { buildTool } from "../权限系统/chunk-qdy0h5k2.js";
import { SHARE_ONBOARDING_GUIDE_TOOL_NAME, SHARE_ONBOARDING_GUIDE_TOOL_DESCRIPTION } from "./share-onboarding-guide-tool.js";
import { isOnboardingGuideSharingEnabled, createOnboardingGuide, updateOnboardingGuide, deleteOnboardingGuide, listOnboardingGuides } from "./onboarding-guide-api.js";
import { s, c, Qe, X } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { readFile, stat } from "fs/promises";
import { join } from "path";
var k = createLazyValue(() =>
    Qe({
      mode: X(["check", "update", "create", "delete"])
        .default("check")
        .describe(
          "'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove a guide.",
        ),
      short_code: s()
        .regex(/^[A-Za-z0-9_-]{1,64}$/)
        .optional()
        .describe(
          "Short code of a specific guide to target (returned by a previous call). Honored by check, update, and delete \u2014 skips the org-wide lookup and targets this guide directly.",
        ),
    }),
  ),
  z = createLazyValue(() =>
    c({
      status: X([
        "created",
        "updated",
        "deleted",
        "has_existing",
        "unavailable",
      ]),
      share_url: s().optional(),
      short_code: s().optional(),
      message: s(),
    }),
  ),
  u = "ONBOARDING.md",
  h = 65536,
  ShareOnboardingGuideTool = buildTool({
    name: SHARE_ONBOARDING_GUIDE_TOOL_NAME,
    searchHint: "upload ONBOARDING.md and get a team share link",
    maxResultSizeChars: 1000,
    async description() {
      return SHARE_ONBOARDING_GUIDE_TOOL_DESCRIPTION;
    },
    isEnabled() {
      return isOnboardingGuideSharingEnabled();
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    get inputSchema() {
      return k();
    },
    get outputSchema() {
      return z();
    },
    async prompt() {
      return SHARE_ONBOARDING_GUIDE_TOOL_DESCRIPTION;
    },
    toAutoClassifierInput(t) {
      return `share onboarding guide (mode: ${t.mode ?? "check"})`;
    },
    isDestructive(t) {
      return t.mode === "delete";
    },
    renderToolUseMessage(t) {
      return t.mode && t.mode !== "check" ? t.mode : null;
    },
    create({ credentials: t }) {
      return {
        async call({ mode: a = "check", short_code: o }) {
          if (a === "delete")
            try {
              let e = o ?? (await p(t))?.short_code;
              if (!e) return i("No guide found for this org to delete.");
              return (
                await deleteOnboardingGuide(e, t),
                { data: { status: "deleted", message: `Guide ${e} deleted.` } }
              );
            } catch (e) {
              let r = e instanceof Error ? e.message : String(e);
              return i(`Delete didn't go through (${r}).`);
            }
          if (a === "check")
            try {
              let e = o
                ? (await listOnboardingGuides(t)).find((r) => r.short_code === o)
                : await p(t);
              if (e) {
                let r = join(he(), u),
                  d = null;
                try {
                  d = (await stat(r)).size;
                } catch (y) {
                  if (!W(y)) throw y;
                }
                if (d === null)
                  return {
                    data: {
                      status: "has_existing",
                      share_url: e.share_url,
                      short_code: e.short_code,
                      message: `A guide already exists for this org at ${e.share_url} (short_code: ${e.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).`,
                    },
                  };
                if (d > h)
                  return i(
                    `${u} is over ${h / 1024}KB. Trim it before sharing.`,
                  );
                let w = await readFile(r, "utf8"),
                  _ = await updateOnboardingGuide(e.short_code, w, t);
                return g("updated", _.share_url, _.short_code, !1);
              }
            } catch (e) {
              let r = e instanceof Error ? e.message : String(e);
              return i(
                `Upload didn't go through (${r}). Fall back to the manual share copy.`,
              );
            }
          let n = join(he(), u),
            l;
          try {
            l = (await stat(n)).size;
          } catch (e) {
            if (W(e))
              return i(
                `${u} not found in the current directory. Write the guide first.`,
              );
            throw e;
          }
          if (l > h)
            return i(`${u} is over ${h / 1024}KB. Trim it before sharing.`);
          let f = await readFile(n, "utf8");
          try {
            if (a === "update") {
              let r = o ?? (await p(t))?.short_code;
              if (r) {
                let d = await updateOnboardingGuide(r, f, t);
                return g("updated", d.share_url, d.short_code, !0);
              }
            }
            let e = await createOnboardingGuide(f, void 0, t);
            return g("created", e.share_url, e.short_code, !1);
          } catch (e) {
            let r = e instanceof Error ? e.message : String(e);
            return i(
              `Upload didn't go through (${r}). Fall back to the manual share copy.`,
            );
          }
        },
      };
    },
    mapToolResultToToolResultBlockParam(t, a) {
      return {
        tool_use_id: a,
        type: "tool_result",
        content: `[${t.status}] ${t.message}`,
      };
    },
  });
async function p(t) {
  let a = await listOnboardingGuides(t);
  if (a.length === 0) return;
  return a.reduce((o, n) => (o.updated_at > n.updated_at ? o : n));
}
function g(t, a, o, n) {
  let l = n
    ? `

Close with: "Here's your onboarding guide: ${a}" followed by the send-to-teammates line.`
    : "";
  return {
    data: {
      status: t,
      share_url: a,
      short_code: o,
      message: `Share link ${t}: ${a} (short_code: ${o})${l}`,
    },
  };
}
function i(t) {
  return { data: { status: "unavailable", message: t } };
}
export { ShareOnboardingGuideTool };

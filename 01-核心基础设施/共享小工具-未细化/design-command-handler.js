// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { l } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { DesignSessionState } from "../../02-功能模块/Memory-CLAUDE.md/chunk-9b6sc1gb.js";
import { postDesignConsent, revokeDesignConsent } from "../../02-功能模块/DesignSync/design-consent-and-grants.js";
var s = "Usage: /design consent | /design revoke",
  runDesignCommand = async (r, e) => {
    let n = r.trim().split(/\s+/).filter(Boolean)[0],
      a = "your Claude Design projects",
      o = e.toolState.get(DesignSessionState);
    if (n === "consent")
      try {
        return (
          await postDesignConsent(o, "agent_design_projects", e.credentials),
          {
            type: "text",
            value:
              "Design agent access granted for your Claude Design projects. Use /design revoke to undo.",
          }
        );
      } catch (t) {
        return {
          type: "text",
          value: `Couldn't record Design agent access for ${"your Claude Design projects"} \u2014 ${l(t)}. Try again, or run /design-login to authorize Claude Design for this account.`,
        };
      }
    if (n === "revoke")
      try {
        return (
          await revokeDesignConsent(o, "agent_design_projects", e.credentials),
          {
            type: "text",
            value:
              "Design agent access revoked for your Claude Design projects.",
          }
        );
      } catch (t) {
        return {
          type: "text",
          value: `Couldn't revoke Design agent access for ${"your Claude Design projects"} \u2014 ${l(t)}. Try again, or run /design-login to authorize Claude Design for this account.`,
        };
      }
    return { type: "text", value: s };
  };
export { runDesignCommand };

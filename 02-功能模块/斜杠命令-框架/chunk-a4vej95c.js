// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { St } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { isPolicyAllowed } from "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
function isWebSetupEnabled() {
  return !St() && isPolicyAllowed("allow_remote_sessions") && isPolicyAllowed("allow_quick_web_setup");
}
var e = {
    type: "local-jsx",
    name: "web-setup",
    description: "Set up Claude Code on the web with your GitHub account",
    availability: ["claude-ai"],
    isEnabled: isWebSetupEnabled,
    get isHidden() {
      return !isPolicyAllowed("allow_remote_sessions") || !isPolicyAllowed("allow_quick_web_setup");
    },
  },
  Mgr = e;
export { isWebSetupEnabled, Mgr as default };

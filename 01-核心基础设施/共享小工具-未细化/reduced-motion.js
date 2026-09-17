// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { useAppStateSelectorUnchecked } from "./app-state-context.js";
import { shouldReduceMotion } from "./chunk-dsg6bce8.js";
var NO_ANIMATION_INDEX = -100;
function useReducedMotion() {
  return shouldReduceMotion(useAppStateSelectorUnchecked((e) => e.settings.prefersReducedMotion));
}
export { NO_ANIMATION_INDEX, useReducedMotion };

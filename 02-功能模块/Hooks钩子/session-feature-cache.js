// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Gt, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
class SessionFeatureCache {
  pinnedFeatureValues;
  maxSubagentSpawnDepthFromGrowthBook;
  decstbmRendererEnabled;
  forkSubagentEnabledSource;
  bashFirstDescriptionTrimmed;
  bashFirstDescriptionTrimmedCompiledOnly;
  bashPromptSkillCommands;
  bashActFirstEnabled;
  defaultFileReadingLimits;
  suggestRolloutEnabled;
  sendUserFileDeferred;
  sessionStartWorkflowSizeGuideline;
  totalTokensReminderMode;
  totalTokensReminderBudget;
  totalTokensReminderAfterUserTurn;
  silentTurnReminderTurns;
  clientDataCapabilityLogged;
  sharedMemoryServedViaTools;
  stoneShellServed;
  tetherLiveGate;
  sandboxedAttemptGateEnabled;
  machinesSectionShown;
  workflowAuthoringSkillAvailable;
  staticSystemPromptEnabled;
  autoModeContextEnabled;
  shellDescription;
  agentProxyNote;
  keptDeferredToolsEnabled;
  segmentedTranscript;
  clear() {
    for (let o of Object.keys(this)) this[o] = void 0;
  }
}
var sessionFeatureCachesByHost = new Gt(() => new SessionFeatureCache());
function getSessionFeatureCache() {
  return sessionFeatureCachesByHost.of(B());
}
export { getSessionFeatureCache };

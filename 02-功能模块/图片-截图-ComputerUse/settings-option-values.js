// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var NOTIFICATION_CHANNELS = [
    "auto",
    "iterm2",
    "terminal_bell",
    "iterm2_with_bell",
    "kitty",
    "ghostty",
    "notifications_disabled",
  ],
  NOTIFICATION_TYPES = [
    "permission_prompt",
    "idle_prompt",
    "auth_success",
    "elicitation_dialog",
    "agent_needs_input",
    "agent_completed",
    "elicitation_url_dialog",
    "worker_permission_prompt",
    "push_notification",
    "computer_use_enter",
    "computer_use_exit",
    "quota_auto_resume_fired",
    "quota_auto_resume_stale",
    "quota_auto_resume_disabled",
  ],
  EDITOR_MODES = ["normal", "vim"],
  REMOTE_HOME_SETTINGS_MODES = ["forward", "keep_local"],
  TIME_FORMATS = ["auto", "12-hour", "24-hour", "24-hour-utc"],
  TEAMMATE_MODES = ["auto", "tmux", "iterm2", "in-process"],
  BUILTIN_THEME_NAMES = [
    "dark",
    "light",
    "light-daltonized",
    "dark-daltonized",
    "light-ansi",
    "dark-ansi",
  ],
  THEME_OPTIONS = ["auto", ...BUILTIN_THEME_NAMES],
  MODEL_PROPOSED_GOALS_MODES = ["auto", "alwaysAsk", "disabled"],
  AUTO_COMPACT_WINDOW_MIN = 1e5,
  AUTO_COMPACT_WINDOW_MAX = 1e6;
export { NOTIFICATION_CHANNELS, NOTIFICATION_TYPES, EDITOR_MODES, REMOTE_HOME_SETTINGS_MODES, TIME_FORMATS, TEAMMATE_MODES, BUILTIN_THEME_NAMES, THEME_OPTIONS, MODEL_PROPOSED_GOALS_MODES, AUTO_COMPACT_WINDOW_MIN, AUTO_COMPACT_WINDOW_MAX };

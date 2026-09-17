// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE =
    "Remote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.",
  REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE =
    "Error: You must be logged in to use Remote Control.\n\nRemote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.",
  REMOTE_CONTROL_DISCONNECTED_MESSAGE = "Remote Control disconnected.",
  LOGIN_SLASH_COMMAND = "/login",
  REMOTE_CONTROL_MALFORMED_RESPONSE_MESSAGE =
    "Remote Control got an unexpected server response \u2014 try again after updating Claude Code",
  REMOTE_CONTROL_ACCOUNT_UNVERIFIED_MESSAGE =
    "Remote Control could not verify the signed-in account \u2014 run /remote-control to reconnect",
  REMOTE_CONTROL_SIGNED_IN_ACCOUNT_CHANGED_MESSAGE =
    "signed-in claude.ai account or organization changed on this machine \u2014 run /remote-control to start a session for the current account, or /login to switch back, then /remote-control",
  REMOTE_CONTROL_HOST_SIGNED_OUT_MESSAGE =
    "Remote Control stopped \u2014 the app running this session is signed out of Claude. Sign in there, then turn Remote Control back on",
  REMOTE_CONTROL_HOST_ACCOUNT_CHANGED_MESSAGE =
    "Remote Control stopped \u2014 the app running this session is now signed in to a different Claude account",
  REMOTE_CONTROL_PREVIOUS_SESSION_UNAVAILABLE_MESSAGE =
    "Previous session is unavailable \u2014 run /remote-control to start a new one",
  BRIDGE_WORK_STATE_QUEUED = "queued";
export { REMOTE_CONTROL_SUBSCRIPTION_REQUIRED_MESSAGE, REMOTE_CONTROL_NOT_LOGGED_IN_MESSAGE, REMOTE_CONTROL_DISCONNECTED_MESSAGE, LOGIN_SLASH_COMMAND, REMOTE_CONTROL_MALFORMED_RESPONSE_MESSAGE, REMOTE_CONTROL_ACCOUNT_UNVERIFIED_MESSAGE, REMOTE_CONTROL_SIGNED_IN_ACCOUNT_CHANGED_MESSAGE, REMOTE_CONTROL_HOST_SIGNED_OUT_MESSAGE, REMOTE_CONTROL_HOST_ACCOUNT_CHANGED_MESSAGE, REMOTE_CONTROL_PREVIOUS_SESSION_UNAVAILABLE_MESSAGE, BRIDGE_WORK_STATE_QUEUED };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var NON_REPL_SUBCOMMANDS = new Set(["update", "upgrade", "doctor", "forward-home-settings"]);
function isMcpServeInvocation(o) {
  let n = o.indexOf("mcp");
  return n !== -1 && o[n + 1] === "serve";
}
function isAgentsJsonInvocation(o) {
  let n = o.indexOf("agents");
  return n !== -1 && o.includes("--json", n + 1);
}
function isPluginEvalInvocation(o) {
  return o.some(
    (n, e) => (n === "plugin" || n === "plugins") && o[e + 1] === "eval",
  );
}
function isRemoteControlInvocation(o) {
  return o.some((n) => n === "remote-control" || n === "rc");
}
export {
  NON_REPL_SUBCOMMANDS,
  isAgentsJsonInvocation,
  isMcpServeInvocation,
  isPluginEvalInvocation,
  isRemoteControlInvocation,
};

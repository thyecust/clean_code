// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
var RENAME_NOTICE = "/extra-usage is now /usage-credits",
  call = async (a, t) => {
    let { call: e } = await import("./usage-credits-cmd.ygye20n9.js");
    return {
      type: "text",
      value: `/extra-usage is now /usage-credits

${(await e(a, t)).value}`,
    };
  };
export { RENAME_NOTICE, call };

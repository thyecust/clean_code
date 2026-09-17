// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { truncateToCodeUnits } from "./string-utils.js";
import { TRUNCATE_MAX_LENGTH } from "../../02-功能模块/权限系统/chunk-z0pt04s8.js";
function truncateWithEllipsis(r) {
  return r.length <= TRUNCATE_MAX_LENGTH ? r : `${truncateToCodeUnits(r, TRUNCATE_MAX_LENGTH - 1)}\u2026`;
}
export { truncateWithEllipsis };

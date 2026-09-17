// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { Zlr, ecr, tcr, unt, k2e, dnt } from "../../00-第三方库/zod/zod.5ef0bk11.js";
function createCoercedZodString(o) {
  return Zlr(unt, o);
}
function createCoercedZodNumber(o) {
  return ecr(k2e, o);
}
function createCoercedZodBoolean(o) {
  return tcr(dnt, o);
}
var ZOD_ISSUE_CODES = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
var e;
(function (o) {})(e || (e = {}));
export { ZOD_ISSUE_CODES, createCoercedZodString, createCoercedZodNumber, createCoercedZodBoolean };

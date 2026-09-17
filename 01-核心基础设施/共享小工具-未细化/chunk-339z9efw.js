// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { isRemoteCoworkEntrypoint } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { replaceControlChars } from "./text-sanitization.js";
var r = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  MAX_NAME_LENGTH = 256,
  UNSAFE_CHARS_PATTERN = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function isValidName(e) {
  return e.length > 0 && e.length <= 256 && !UNSAFE_CHARS_PATTERN.test(e);
}
function escapeMarkupText(e) {
  return t(
    e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
  );
}
function t(e) {
  return e.replace(r, (n) => `&#${n.charCodeAt(0)};`);
}
function escapeAngleBrackets(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function escapePromptText(e) {
  return t(escapeAngleBrackets(String(e ?? "")));
}
function escapeMarkupAttribute(e) {
  return escapePromptText(e).replaceAll('"', "&quot;");
}
function i(e) {
  if (e.loadedFrom === void 0) return Boolean(e.isMcp);
  switch (e.loadedFrom) {
    case "skills":
    case "commands_DEPRECATED":
    case "plugin":
    case "managed":
    case "bundled":
      return !1;
    case "syncedSkills":
    case "mcp":
    case "memoryStore":
      return !0;
  }
}
function isModelInvocable(e) {
  if (e.loadedFrom === "syncedSkills") return !isRemoteOrCoworkSession();
  return i(e);
}
function isRemoteOrCoworkSession() {
  return (
    Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || isRemoteCoworkEntrypoint()
  );
}
function createEmptyCommandMetadata() {
  return {
    hooks: void 0,
    allowedTools: [],
    disallowedTools: [],
    executionContext: void 0,
    agent: void 0,
    background: void 0,
    model: void 0,
    effort: void 0,
    shell: void 0,
    paths: void 0,
    fallback: void 0,
    createdBy: void 0,
    displayName: void 0,
    metadata: void 0,
  };
}
function escapeCommandFrontmatter(e) {
  return {
    description: escapeSingleLineText(e.description),
    argumentHint: escapeOptionalSingleLineText(e.argumentHint),
    whenToUse: escapeOptionalSingleLineText(e.whenToUse),
    argumentNames: e.argumentNames.map(escapeSingleLineText),
  };
}
function escapeOptionalSingleLineText(e) {
  return e === void 0 ? void 0 : escapeSingleLineText(e);
}
function escapeSingleLineText(e) {
  return escapeAngleBrackets(replaceControlChars(e));
}
function escapeMultilineText(e) {
  return escapeAngleBrackets(
    e.replace(/\p{Cc}/gu, (n) =>
      n === "\t" ||
      n ===
        `
` ||
      n === "\r"
        ? n
        : "",
    ),
  );
}
export { MAX_NAME_LENGTH, UNSAFE_CHARS_PATTERN, isValidName, escapeMarkupText, escapeAngleBrackets, escapePromptText, escapeMarkupAttribute, isModelInvocable, isRemoteOrCoworkSession, createEmptyCommandMetadata, escapeCommandFrontmatter, escapeOptionalSingleLineText, escapeSingleLineText, escapeMultilineText };

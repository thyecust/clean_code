// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { ZQ } from "../../02-功能模块/运行宿主探测/运行宿主探测.ysz9apmz.js";
import { Sn } from "./chunk-jjr7hzzf.js";
var r = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  bXe = 256,
  bwt = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function wXe(e) {
  return e.length > 0 && e.length <= 256 && !bwt.test(e);
}
function QS(e) {
  return t(
    e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"),
  );
}
function t(e) {
  return e.replace(r, (n) => `&#${n.charCodeAt(0)};`);
}
function Hj(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Ic(e) {
  return t(Hj(String(e ?? "")));
}
function ooe(e) {
  return Ic(e).replaceAll('"', "&quot;");
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
function dfe(e) {
  if (e.loadedFrom === "syncedSkills") return !$bn();
  return i(e);
}
function $bn() {
  return (
    Boolean(a.CLAUDE_CODE_REMOTE) || Boolean(a.CLAUDE_CODE_IS_COWORK) || ZQ()
  );
}
function wwt() {
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
function A1e(e) {
  return {
    description: Twt(e.description),
    argumentHint: C1e(e.argumentHint),
    whenToUse: C1e(e.whenToUse),
    argumentNames: e.argumentNames.map(Twt),
  };
}
function C1e(e) {
  return e === void 0 ? void 0 : Twt(e);
}
function Twt(e) {
  return Hj(Sn(e));
}
function Ewt(e) {
  return Hj(
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
export { bXe, bwt, wXe, QS, Hj, Ic, ooe, dfe, $bn, wwt, A1e, C1e, Twt, Ewt };

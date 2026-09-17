// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { getFeatureValue_CACHED_MAY_BE_STALE } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { env as a } from "../设置-配置/chunk-zqr5ctyf.js";
import { truncateToCodePoints, truncateToCodeUnits } from "../核心工具-字符串与文本/string-utils.js";
import { logError } from "../../02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js";
import { estimateTokens, countMessageTokens } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { compressImageBlockToFitBytes } from "../../02-功能模块/图片-截图-ComputerUse/chunk-0dcnsftb.js";
var C = 0.5,
  l = 1600,
  d = 25000;
function u() {
  let e = a.MAX_MCP_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_velvet_ibis", {})?.mcp_tool;
  if (typeof t === "number" && Number.isFinite(t) && t > 0) return t;
  return d;
}
function stripTextBlockMeta(e) {
  if (!e || typeof e === "string" || !Array.isArray(e)) return e;
  let n = e,
    t = !1;
  for (let r of n)
    if (r.type === "text" && "_meta" in r && r._meta) {
      t = !0;
      break;
    }
  if (!t) return e;
  return n.map((r) => {
    if (r.type === "text" && "_meta" in r && r._meta) {
      let { _meta: o, ...s } = r;
      return s;
    }
    return r;
  });
}
function f(e) {
  return e.type === "text";
}
function p(e) {
  return e.type === "image";
}
function estimateContentTokens(e) {
  if (!e) return 0;
  if (typeof e === "string") return estimateTokens(e);
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, t) => {
    if (f(t)) return n + estimateTokens(t.text);
    else if (p(t)) return n + l;
    return n;
  }, 0);
}
function getMaxOutputChars() {
  return u() * 4;
}
function P() {
  return `

[OUTPUT TRUNCATED - exceeded ${u()} token limit]

The tool output was truncated. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data. If pagination is not available, inform the user that you are working with truncated output and results may be incomplete.`;
}
async function M(e, n) {
  let t = [],
    r = 0;
  for (let o of e)
    if (f(o)) {
      let s = n - r;
      if (s <= 0) break;
      if (o.text.length <= s) (t.push(o), (r += o.text.length));
      else {
        let i = truncateToCodeUnits(o.text, s);
        if (i) {
          let c = { type: "text", text: i };
          if (o._meta) c._meta = o._meta;
          t.push(c);
        }
        break;
      }
    } else if (p(o)) {
      let s = l * 4;
      if (r + s <= n) (t.push(o), (r += s));
      else {
        let i = n - r;
        if (i > 0) {
          let c = Math.floor(i * 0.75);
          try {
            let m = await compressImageBlockToFitBytes(o, c);
            if ((t.push(m), m.source.type === "base64"))
              r += m.source.data.length;
            else r += s;
          } catch {}
        }
      }
    } else t.push(o);
  return t;
}
async function shouldTruncateOutput(e, n) {
  if (!e) return !1;
  let t = estimateContentTokens(e);
  if (t <= u() * C) return !1;
  try {
    return (
      ((await countMessageTokens(
        typeof e === "string"
          ? [{ role: "user", content: e }]
          : [{ role: "user", content: e }],
        [],
        void 0,
        { credentials: n },
      )) ?? t) > u()
    );
  } catch (r) {
    return (logError(r), t > u());
  }
}
async function T(e) {
  if (!e) return e;
  let n = getMaxOutputChars(),
    t = P();
  if (typeof e === "string") return truncateToCodePoints(e, n) + t;
  else {
    let r = await M(e, n);
    return (r.push({ type: "text", text: t }), r);
  }
}
async function maybeTruncateOutput(e, n) {
  if (!(await shouldTruncateOutput(e, n))) return e;
  return await T(e);
}
export { stripTextBlockMeta, estimateContentTokens, getMaxOutputChars, shouldTruncateOutput, maybeTruncateOutput };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 203 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getCwd } from "../../01-核心基础设施/核心工具-未归类/cwd-context.js";
import { toJsonSchema } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { getToolPermissionContext } from "../权限系统/chunk-fjrcf22x.js";
import { isPathOutsideRoot, resolveRealpathAllowMissing, openFileForWrite, assertRegularFilePath, assertOpenFileMatchesPath, convertSchemaToJsonSchema } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { HooksError } from "../Hooks钩子/chunk-bzqqe6xh.js";
import { readEmbeddedAssetSync } from "../../01-核心基础设施/内嵌资源与模块互操作/embedded-text-asset.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
import { dedupe } from "../../01-核心基础设施/核心工具-数组与集合/chunk-d16fhdtx.js";
import { defineExportGetters } from "../../01-核心基础设施/内嵌资源与模块互操作/chunk-2c9tjhwd.js";
var N = {};
defineExportGetters(N, { call: () => ho, default: () => N, outputJsonSchemaOf: () => outputJsonSchemaOf });
import { mkdir, realpath } from "fs/promises";
import { relative, resolve } from "path";
var P = ".claude/types";
var f = "claude-code-mcp.d.ts";
var d = (o) => ({ type: "text", level: "error", value: o });
async function M(o, e, r) {
  let t = resolve(o, e),
    a = (s) => new HooksError(`${t}: ${s}`);
  try {
    await assertRegularFilePath(t, a);
    let s = await openFileForWrite(t);
    try {
      (await assertOpenFileMatchesPath(s, t, { realRoot: o, refused: a }),
        await s.truncate(0),
        await s.writeFile(r, "utf8"));
    } finally {
      await s.close();
    }
  } catch (s) {
    if (A(s) === "ELOOP")
      return d(`Did not write ${e}: ${t} is a symbolic link.`);
    throw s;
  }
  return;
}
var S = (o) => o.replace(/\s+/g, " ").trim().replace(/\*\//g, "* /");
function O(o, e) {
  let { description: r } = o,
    a = typeof r === "string" ? S(r) : "";
  return a === ""
    ? ""
    : `${e}/** ${a} */
`;
}
var _ = /^[A-Za-z_$][\w$]*$/;
var k = (o) => (_.test(o) ? o : jsonStringify(o));
function F(o) {
  return typeof o === "string" ||
    typeof o === "number" ||
    typeof o === "boolean" ||
    o === null
    ? jsonStringify(o)
    : "unknown";
}
var eo = 32;
function m(o, e = "", r = 0) {
  if (o === !0 || r > eo) return "unknown";
  if (o === !1) return "never";
  if (!isRecord(o)) return "unknown";
  if ("const" in o) return F(o.const);
  if (Array.isArray(o.enum)) return o.enum.map(F).join(" | ") || "never";
  if (Array.isArray(o.anyOf) || Array.isArray(o.oneOf)) {
    let t = (o.anyOf ?? o.oneOf).map((a) => m(a, e, r + 1));
    return t.length === 0 ? "unknown" : dedupe(t).join(" | ");
  }
  if (Array.isArray(o.allOf)) {
    let t = o.allOf.map((s) => m(s, e, r + 1));
    return t.length === 0
      ? "unknown"
      : t.map((s) => (s.includes(" | ") ? `(${s})` : s)).join(" & ");
  }
  if (Array.isArray(o.type))
    return (
      dedupe(o.type.map((t) => m({ ...o, type: t }, e, r + 1))).join(" | ") ||
      "unknown"
    );
  switch (o.type) {
    case "string":
      return "string";
    case "number":
    case "integer":
      return "number";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "array": {
      if (Array.isArray(o.items))
        return `[${o.items.map((s) => m(s, e, r + 1)).join(", ")}]`;
      let t = m(o.items, e, r + 1);
      return t.includes(" | ") || t.includes(" & ") || t.includes("/*")
        ? `Array<${t}>`
        : `${t}[]`;
    }
    case "object":
    case void 0: {
      if (!isRecord(o.properties)) {
        let l = o.type === "object",
          p = "$ref" in o;
        return l
          ? "{}"
          : p
            ? `unknown /* $ref ${S(String(o.$ref))} */`
            : "unknown";
      }
      let t = new Set(Array.isArray(o.required) ? o.required.map(String) : []),
        a = `${e}  `,
        s = Object.entries(o.properties).map(([l, p]) => {
          let h = isRecord(p) ? O(p, a) : "",
            I = t.has(l) ? "" : "?",
            T = m(p, a, r + 1);
          return `${h}${a}${k(l)}${I}: ${T}`;
        });
      return s.length === 0
        ? "{}"
        : `{
${s.join(`
`)}
${e}}`;
    }
    default:
      return "unknown";
  }
}
var u = (o, e, r = (t) => m(t.inputSchema, "    ")) => [
  "declare module 'claude-code' {",
  `  interface ${o} {`,
  ...[...e]
    .sort((t, a) => t.name.localeCompare(a.name))
    .map((t) => {
      let s =
          t.description === void 0
            ? ""
            : O({ description: t.description }, "    "),
        c = k(t.name);
      return `${s}    ${c}: ${r(t)}`;
    }),
  "  }",
  "}",
];
var so = (o) =>
  [
    "// The inputs of the built-in tools this build has, from each tool's",
    "// input schema. Merges into ToolCallInput (BuiltinToolInputs) so",
    '// `e.tool === "Bash"` narrows to the tool\'s arguments.',
    ...u("BuiltinToolInputs", o),
    "",
    "// The structured results of the same tools, from each tool's output",
    "// schema. Merges into ToolCallResult (BuiltinToolResults) so after",
    '// `e.tool === "Bash"` the `result` of `next(e)` is the tool\'s record.',
    ...u("BuiltinToolResults", o, (e) =>
      e.outputSchema !== void 0 ? m(e.outputSchema, "    ") : "unknown",
    ),
    "",
  ].join(`
`);
var io = (o) =>
  [
    "// The inputs of the MCP tools this session had, from each server's tools/list",
    "// inputSchema; written by `/plugin-types` (src/plugins/functionHooks/mcp-tool-types/mcp-tool-declarations.ts).",
    "// Merges into the engine's ToolCallInput (types/ McpToolInputs) so",
    '// `e.tool === "mcp__<server>__<tool>"` narrows to the tool\'s arguments.',
    "// Regenerate rather than edit.",
    "export {}",
    ...u("McpToolInputs", o),
    "",
  ].join(`
`);
function po(o) {
  let e = [];
  for (let r of o) {
    if (!r.name.startsWith("mcp__")) continue;
    if (r.inputJSONSchema === void 0) {
      logForDebugging(`plugin-types: ${r.name} has no inputJSONSchema; skipped`);
      continue;
    }
    e.push({
      name: r.name,
      inputSchema: r.inputJSONSchema,
      ...(r.description !== void 0 && { description: r.description }),
    });
  }
  return e;
}
var y = "claude-code.d.ts";
var H = "./claude-code.d.ts-4adb7067.txt.zst";
var U = readEmbeddedAssetSync(H, import.meta.dirname);
var G = U;
var uo = (o, e) =>
  `// Written by Claude Code ${o}.
${G}
` + so(e);
function outputJsonSchemaOf(o) {
  try {
    return toJsonSchema(o, { unrepresentable: "any" });
  } catch (e) {
    logForDebugging(`plugin-types: an output schema did not convert: ${e}`);
    return;
  }
}
var ho = async (o, e) => {
  let r = getCwd(),
    t = resolve(r, o.trim() || P),
    a = getToolPermissionContext(e),
    s = po(
      await Promise.all(
        e
          .getMcp()
          .tools.filter((i) => i.isMcp === !0)
          .map(async (i) => ({
            name: i.name,
            inputJSONSchema: i.inputJSONSchema,
            description: await i.description(
              {},
              {
                isNonInteractiveSession: e.options.isNonInteractiveSession,
                toolPermissionContext: a,
                tools: e.options.tools,
              },
            ),
          })),
      ),
    ),
    c = e.options.tools
      .filter((i) => i.isMcp !== !0)
      .map((i) => ({
        name: i.name,
        inputSchema: i.inputJSONSchema ?? convertSchemaToJsonSchema(i.inputSchema),
        ...(i.outputSchema !== void 0 && { outputSchema: outputJsonSchemaOf(i.outputSchema) }),
      })),
    l = new Set(s.map((i) => i.name.split("__")[1] ?? i.name)),
    p = await resolveRealpathAllowMissing(t),
    h = await realpath(r).catch(() => r);
  if (!isPathOutsideRoot(relative(r, t)) && isPathOutsideRoot(relative(h, p)))
    return d(
      `Did not write ${y} or ${f}: ${t} resolves outside the project (${p}).`,
    );
  await mkdir(p, { recursive: !0 });
  let T = [
    {
      name: y,
      text: uo(
        {
          ISSUES_EXPLAINER:
            "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.263",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-09-06T01:08:56Z",
          GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
          HOOKS_WORKER_URL:
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          DD_SOURCEMAP_GROUP: "darwin",
        }.VERSION,
        c,
      ),
    },
    { name: f, text: io(s) },
  ];
  for (let i of T) {
    let w = await M(p, i.name, i.text);
    if (w !== void 0) return w;
  }
  let v = resolve(p, y),
    C = resolve(p, f),
    Z =
      s.length === 0
        ? `Wrote ${C}: no MCP tools are connected, so it is empty (every mcp__* tool stays loosely typed).`
        : `Wrote ${C}: ${s.length} MCP ${pluralize(s.length, "tool")} from ${l.size} ${pluralize(l.size, "server")}.`;
  return {
    type: "text",
    value: [
      `Wrote ${v}: the plugin API (module 'claude-code', early access: it may change between releases) and ${c.length} built-in ${pluralize(c.length, "tool")}.`,
      Z,
      `Point the plugin's tsconfig.json (or jsconfig.json) at them: "include": ["${relative(r, p) || "."}", "hooks"] with "lib": ["es2023"] and "jsx": "react", "jsxFactory": "h"; the header of ${y} has the whole file. Then \`import type { Register } from "claude-code"\` types register(on, options), and e narrows per tool.`,
    ].join(`
`),
  };
};
export { ho as call, N as default, outputJsonSchemaOf };

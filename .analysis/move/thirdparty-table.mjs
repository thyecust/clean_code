// `00-第三方库/_未识别/` 归位的**判定表**。
//
//   node thirdparty-table.mjs              打印表格（给人审）
//   node thirdparty-table.mjs --emit <p>   落成 move.mjs 的计划 JSON
//
// 这个目录是第一遍分类的遗留：14 个子目录与顶层包目录**重复分组**
// （parse5 / zod / ink / react / @anthropic-ai/sdk / @azure / google-auth-library /
// https-proxy-agent 各有第二个家），`第三方库-其他` 一个目录里混着 semver、qrcode、
// fflate、AWS SDK 的 chunk。
//
// 判定只采**硬证据**，够不上的一律留在 `_未识别/`（铺平成一层）并注明：
//   · 它 import 了某个包自己的 chunk（依赖边是硬证据）
//   · 包名/API 名/错误串出现在文件里（`ZodError`、`graceful-fs.queue`、`zipSync`）
//   · 仓库自己的文档（REPLACED.md / VENDOR.md）已写明

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { ROOT } from "./lib.mjs";

const U = "00-第三方库/_未识别";

/** [源目录, 目标目录, 证据]。目标为 null 表示留在 `_未识别/`。 */
export const TABLE = [
  ["第三方库-parse5", "parse5", "imports ../../parse5/parse5.2zwbfepc.js，且含 annotation-xml / application/xhtml+xml 等 HTML 解析表"],
  ["zod(schema校验)", "zod", "含 `ZodError`"],
  ["React运行时-JSX", "react", "含 React 自身的报错串（`Objects are not valid as a React child`）与 react.context / react.fragment"],
  ["第三方库-@anthropic-ai-sdk", "@anthropic-ai/sdk", "含 anthropic-ratelimit-unified-* 响应头名，并 import 该包的 sdk.h4f48kbj.js"],
  ["第三方库-AWSSDK", "@aws-sdk", "BedrockClient / BedrockRuntimeClient / STSClient，且 import @aws-sdk/core 与 nested-clients"],
  ["第三方库-OpenTelemetry", "@opentelemetry", "目录自带 _source/@opentelemetry"],

  ["Ink终端渲染器", null, "导出 runSteps / showScreen，但 ink 的 _source 里没有这两个名字 —— 够不上，留原处"],
  ["第三方库-加密库", null, "内容是 Node crypto 的哈希/密钥原语，但定不到具体包"],
  ["第三方库-Nodepolyfill", null, "含 Deno.customInspect / ReadableStream 报错，疑似 fetch 类 polyfill，定不到包"],
  ["第三方库-Azure身份认证", null, "12KB，内容全是 google-chrome / google-chrome-stable —— 是浏览器启动器，与 Azure 无关；真正身份待定"],
  ["第三方库-Google认证", null, "705B，文件内无任何可读串"],
];

/** `第三方库-其他` 里逐个 chunk 定身份。 */
export const OTHERS = [
  ["chunk-jm5cswvd.js", "semver", "文件头注释即写明 `npm semver 7.7.3, whole package`"],
  ["chunk-x46ksw6d.js", "qrcode", "文件头注释写明 qrcode@1.5.4 + pngjs + dijkstrajs；`_source/` 与它同行"],
  ["zipSync.gv6wj3ch.js", "fflate", "导出 Zip / ZipDeflate / unzipSync / zipSync —— fflate 的 API"],
  ["chunk-7bsbdzwc.js", "ajv", "含 `ajv implementation error`，且 import ../../ajv/ajv.2q22bct4.js"],
  ["chunk-jtb5q5xr.js", "@aws-sdk", "含 x-amzn-request-id；被 @aws-sdk/core 与 Bedrock/认证模块引用"],
  ["chunk-cpfawwsx.js", "@aws-sdk", "SuppressedError 原语，被 4 个 AWS SDK chunk 引用"],
  ["chunk-gdyh44zt.js", "supports-color", "含 TEAMCITY_VERSION / no-color / no-hyperlink —— supports-color 的探测表"],
  ["chunk-8fpdwg2e.js", "graceful-fs", "含 ___graceful-fs.queue / graceful-fs.previous"],
  ["chunk-10wtfjv0.js", null, "只有 ParseError / invalid-retry / unknown-field 三个串，定不到包；被 Nodepolyfill 那份引用"],

  // `REPLACED.md` 记录的替换前原件（`.original.js`，不入索引），随它的 chunk 一起走
  ["chunk-jm5cswvd.original.js", "semver", "chunk-jm5cswvd.js 的原件"],
  ["chunk-x46ksw6d.original.js", "qrcode", "chunk-x46ksw6d.js 的原件"],
  ["chunk-jtb5q5xr.original.js", "@aws-sdk", "chunk-jtb5q5xr.js 的原件"],
  ["chunk-cpfawwsx.original.js", "@aws-sdk", "chunk-cpfawwsx.js 的原件"],
];

/** 与 chunk 同行的对照源码，用 `git mv` 整棵搬（move.mjs 不碰 `_source/`）。 */
export const SOURCE_MOVES = [
  ["第三方库-其他/_source", "qrcode/_source"],
  ["第三方库-AWSSDK/_source", "@aws-sdk/_source"],
  ["第三方库-OpenTelemetry/_source", "@opentelemetry/_source"],
];

/** 新包目录的索引归属。已有目录沿用既有模块名。 */
const MODULE_OF = {
  "@aws-sdk": ["第三方库 · AWS SDK", 0],
  "@opentelemetry": ["第三方库 · OpenTelemetry", 0],
  semver: ["第三方库 · semver", 0],
  qrcode: ["第三方库 · qrcode", 0],
  fflate: ["第三方库 · fflate", 0],
  "supports-color": ["第三方库 · supports-color", 0],
  "graceful-fs": ["第三方库 · graceful-fs", 0],
};

const filesIn = (dir, fm) => Object.values(fm).filter((v) => dirname(v.path) === dir).map((v) => basename(v.path));

/** `REPLACED.md` 记的替换前原件不入索引，得直接读目录。 */
const originalsIn = (relDir) => {
  const abs = join(ROOT, relDir);
  if (!existsSync(abs)) return [];
  return readdirSync(abs).filter((f) => f.endsWith(".original.js"));
};

if (process.argv.includes("--emit")) {
  const fm = JSON.parse(readFileSync(join(ROOT, "_index/file-map.json"), "utf8"));
  const moves = [];
  const modules = {};
  const push = (from, to) => moves.push({ from, to });

  for (const [src, dst, why] of TABLE) {
    if (!dst) continue;
    for (const f of [...filesIn(`${U}/${src}`, fm), ...originalsIn(`${U}/${src}`)])
      push(`${U}/${src}/${f}`, `00-第三方库/${dst}/${f}`);
    if (MODULE_OF[dst]) modules[`00-第三方库/${dst}`] = { module: MODULE_OF[dst][0], tier: MODULE_OF[dst][1] };
    void why;
  }
  for (const [f, pkg, why] of OTHERS) {
    if (!pkg) continue;
    push(`${U}/第三方库-其他/${f}`, `00-第三方库/${pkg}/${f}`);
    if (MODULE_OF[pkg]) modules[`00-第三方库/${pkg}`] = { module: MODULE_OF[pkg][0], tier: MODULE_OF[pkg][1] };
    void why;
  }
  // 留在 _未识别 的铺平到一层（去掉那 14 个误导性的分组子目录）
  for (const [src, dst] of TABLE) {
    if (dst) continue;
    for (const f of filesIn(`${U}/${src}`, fm)) push(`${U}/${src}/${f}`, `${U}/${f}`);
  }
  for (const [f, pkg] of OTHERS) if (!pkg) push(`${U}/第三方库-其他/${f}`, `${U}/${f}`);

  const out = process.argv[process.argv.indexOf("--emit") + 1];
  writeFileSync(out, JSON.stringify({ moves, modules }, null, 1));
  console.log(`计划已写出 -> ${out}（${moves.length} 条移动）`);
} else {
  console.log("# `_未识别/` 归位判定表\n");
  console.log("## 整个子目录的去向\n");
  console.log("| 现状 | 去向 | 证据 |");
  console.log("|---|---|---|");
  for (const [src, dst, why] of TABLE) console.log(`| ${U}/${src} | ${dst ? "**00-第三方库/" + dst + "**" : "留在 _未识别/（铺平）"} | ${why} |`);
  console.log("\n## `第三方库-其他` 里逐个 chunk 定身份\n");
  console.log("| 文件 | 去向 | 证据 |");
  console.log("|---|---|---|");
  for (const [f, pkg, why] of OTHERS) console.log(`| ${f} | ${pkg ? "**" + pkg + "**" : "留在 _未识别/"} | ${why} |`);
  console.log("\n## 用 `git mv` 整棵搬的对照源码（move.mjs 不碰 `_source/`）\n");
  for (const [a, b] of SOURCE_MOVES) console.log(`- ${U}/${a} → 00-第三方库/${b}`);
}

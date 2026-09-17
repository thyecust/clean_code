// 目录改名的**判定表** —— 人工拍板的产物，改写的执行交给 move.mjs。
//
//   node rename-table.mjs              打印表格（给人审）
//   node rename-table.mjs --emit <p>   落成 move.mjs 的计划 JSON
//
// 规则（用户已确认）：
//   1 `中文-英文` 两段式，`-` 分隔；括号式 `中文(English)` 一律改成 `中文-English`
//   2 **专名在前的保留**：`MCP客户端` / `GitHub集成` / `Hooks钩子` / `Vim模式` ——
//     专名是类属词的一部分时，硬改成「客户端-MCP」反而像翻译腔
//   3 纯英文目录补上中文功能名（`CodeReview` → `代码审查`）
//   4 描述词+专名的调成中文在前（`Advisor-模型设置` → `模型顾问`）
//   5 `00-第三方库/` 下的 npm 包名**不动**（那是包名，不是模块名）
//   6 目录改名时，同名的入口文件（`<目录名>.<hash>.js`）跟着改 —— 文件名本来就是目录名

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { ROOT, short } from "./lib.mjs";

/** 旧目录名（末级）→ 新目录名（末级）。值等于键表示不改。 */
export const RENAMES = {
  // ---- 01-核心基础设施 ----
  "安全文件系统(FS加固)": "安全文件系统-FS加固",

  // ---- 02-功能模块 ----
  // 纯英文 → 中文功能名
  "CodeReview": "代码审查",
  "DesignSync": "设计同步",
  "Memory-CLAUDE.md": "记忆-CLAUDE.md",
  "Bedrock-Vertex": "模型接入-Bedrock-Vertex",
  "Bridge-RemoteControl": "远程控制-Bridge",
  "ClaudeinChrome": "浏览器集成-ClaudeinChrome",
  "Git-Worktree": "工作树-Git",
  "Protobuf-gRPC": "协议-Protobuf-gRPC",

  // 描述词+专名 → 中文在前
  "Advisor-模型设置": "模型顾问",
  "AppState-状态管理": "状态管理-AppState",
  "Artifact发布-渲染": "制品发布-Artifact",
  "AutoMode-自动模式": "自动模式-AutoMode",
  "Channel-Slack集成": "通道集成-Slack",
  "ClaudeDesktop交接": "交接-ClaudeDesktop",
  "Cowork远程设备注册": "设备注册-Cowork",
  "Cron-定时任务": "定时任务-Cron",
  "Daemon-守护服务": "守护服务-Daemon",
  "Diff引擎": "差异引擎-Diff",
  "Fleet多会话视图": "多会话视图-Fleet",
  "Goal-目标模式": "目标模式-Goal",
  "Grove-隐私设置": "隐私设置-Grove",
  "Insights报告": "洞察报告-Insights",
  "Wellbeing-使用时长": "使用时长-Wellbeing",
  "Workflow编排": "编排-Workflow",

  // 括号式 → `-`
  "MCP传输(stdio-SSE-HTTP)": "MCP传输-stdio-SSE-HTTP",
  "MCP连接器(Connector)": "MCP连接器-Connector",
  "Notebook(.ipynb)": "Notebook-ipynb",
  "Routines(定时云任务)": "Routines-定时云任务",
  "向导(Wizard)UI": "向导UI-Wizard",
  "工具Design(MCP)": "工具Design-MCP",
  "推送通知(Push)": "推送通知-Push",
  "新手引导(Onboarding)": "新手引导-Onboarding",
  "目录同步(dir-sync)": "目录同步-dir-sync",
  "策略限制(PolicyLimits)": "策略限制-PolicyLimits",
  "终端环境探测(TUI-tmux)": "终端环境探测-TUI-tmux",
  "计划模式(Plan)": "计划模式-Plan",
  "跨会话消息(UDS)": "跨会话消息-UDS",
  "通知(Notifications)": "通知-Notifications",
  "键位绑定(Keybindings)": "键位绑定-Keybindings",

  // ---- 03-入口与运行时 ----
  "会话UI(REPL)": "会话UI-REPL",

  // 以下保持原样（专名在前，或已经是 `中文-英文`）—— 列出来是为了让表完整、可核对
  "MCP客户端": "MCP客户端",
  "GitHub集成": "GitHub集成",
  "GoogleDrive集成": "GoogleDrive集成",
  "Hooks钩子": "Hooks钩子",
  "Skills技能": "Skills技能",
  "Teammates团队": "Teammates团队",
  "Vim模式": "Vim模式",
  "IDE集成-LSP": "IDE集成-LSP",
  "CLI入口-Commander": "CLI入口-Commander",
  "Headless-SDK模式": "Headless-SDK模式",
  "ANSI-样式-布局原语": "ANSI-样式-布局原语",
  "HTTP-网络层": "HTTP-网络层",
};

/**
 * 模块显示名：新目录名 `-` → ` / `，并在拉丁词与中文之间补空格。
 * 两处细节：拉丁词内部连字符不拆（`目录同步-dir-sync` → `目录同步 / dir-sync`，
 * 而不是 `目录同步 / dir / sync`）；`会话UI` → `会话 UI`。
 */
export function displayName(leaf) {
  return leaf
    .split(/(?<![A-Za-z0-9])-(?![A-Za-z0-9])|(?<=[A-Za-z0-9])-(?=[一-鿿])|(?<=[一-鿿])-(?=[A-Za-z0-9])/)
    .map((seg) => seg.replace(/(?<=[一-鿿])(?=[A-Za-z])/g, " ").replace(/(?<=[A-Za-z0-9.])(?=[一-鿿])/g, " "))
    .join(" / ");
}

// ---------- 读当前目录 ----------

const fm = JSON.parse(readFileSync(join(ROOT, "_index/file-map.json"), "utf8"));
const dirs = new Map(); // 相对目录 -> { tier, files: [basename] }
for (const v of Object.values(fm)) {
  const d = dirname(v.path);
  if (!dirs.has(d)) dirs.set(d, { tier: v.tier, files: [], module: v.module });
  dirs.get(d).files.push(v.path.split("/").pop());
}

const entries = [];
const problems = [];
const autoKept = [];
for (const [oldDir, info] of dirs) {
  const top = oldDir.split("/")[0];
  if (top === "00-第三方库") continue;          // npm 包名不动（_未识别 由阶段 3 处理）
  const oldLeaf = oldDir.split("/").pop();
  let newLeaf = RENAMES[oldLeaf];
  if (newLeaf === undefined) { newLeaf = oldLeaf; autoKept.push(oldLeaf); }
  entries.push({
    oldDir, newDir: newLeaf === oldLeaf ? oldDir : join(dirname(oldDir), newLeaf),
    oldLeaf, newLeaf, changed: newLeaf !== oldLeaf, tier: info.tier, files: info.files,
    oldModule: info.module,
  });
}

// 新目录名不得互相撞、也不得撞上已有目录
{
  const seen = new Map();
  for (const e of entries) {
    if (seen.has(e.newDir)) problems.push(`两个目录都想叫 ${e.newDir}`);
    seen.set(e.newDir, e.oldDir);
    if (e.changed && dirs.has(e.newDir)) problems.push(`目标目录已存在: ${e.newDir}`);
  }
}

entries.sort((a, b) => a.oldDir.localeCompare(b.oldDir));

if (process.argv.includes("--emit")) {
  if (problems.length) { console.log(problems.join("\n")); process.exit(1); }
  const moves = [];
  const modules = {};
  for (const e of entries) {
    if (!e.changed) continue;
    moves.push({ from: e.oldDir, to: e.newDir });
    modules[e.newDir] = { module: displayName(e.newLeaf), tier: e.tier };
    // 同名入口文件跟着改：`CodeReview.ddrd6y06.js` → `代码审查.ddrd6y06.js`
    const entryFile = e.files.find((f) => f.startsWith(e.oldLeaf + ".") && f.endsWith(".js"));
    if (entryFile) moves.push({ from: `${e.oldDir}/${entryFile}`, to: `${e.newDir}/${e.newLeaf}${entryFile.slice(e.oldLeaf.length)}` });
  }
  const out = process.argv[process.argv.indexOf("--emit") + 1];
  writeFileSync(out, JSON.stringify({ moves, modules }, null, 1));
  console.log(`计划已写出 -> ${out}（${moves.length} 条移动，其中目录改名 ${Object.keys(modules).length} 个）`);
} else {
  const ch = entries.filter((e) => e.changed);
  console.log(`# 目录改名判定表\n`);
  console.log(`共 ${entries.length} 个目录 · 改名 ${ch.length} 个 · 保持 ${entries.length - ch.length} 个`);
  console.log(`（未在 RENAMES 里出现的目录默认保持不变，共 ${autoKept.length} 个：${autoKept.sort().join("、")}）\n`);
  console.log(`| 现状 | 改为 | 模块显示名 | 同名入口文件 |`);
  console.log(`|---|---|---|---|`);
  for (const e of entries) {
    const ef = e.files.find((f) => f.startsWith(e.oldLeaf + ".") && f.endsWith(".js"));
    const efCell = ef ? (e.changed ? `${ef} → ${e.newLeaf}${ef.slice(e.oldLeaf.length)}` : ef) : "—";
    const modCell = e.changed ? `${e.oldModule} → **${displayName(e.newLeaf)}**` : e.oldModule;
    console.log(`| ${e.changed ? "**" + e.oldLeaf + "**" : e.oldLeaf} | ${e.changed ? "**" + e.newLeaf + "**" : "（不变）"} | ${modCell} | ${efCell} |`);
  }
  if (problems.length) console.log(`\n问题：\n  ` + problems.join("\n  "));
}

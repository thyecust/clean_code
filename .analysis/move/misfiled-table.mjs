// 「放错模块 / 分层倒置」的归位判定表。
//
//   node misfiled-table.mjs              打印表格（给人审）
//   node misfiled-table.mjs --emit <p>   落成 move.mjs 的计划 JSON
//
// 判据是**跨模块引用密度**：一个文件被别的模块引用几十上百次、被自己所在目录引用 0–3 次，
// 说明它的位置从一开始就分错了。最典型的是「分层倒置」——`02-功能模块` 在向全树提供
// `01-核心基础设施` 的职责（配置、提示词模板），于是 `01` 那边只剩个残缺的影子。

export const MISFILED = [
  {
    from: "02-功能模块/模型接入-Bedrock-Vertex/chunk-27ncq5fr.js",
    to: "01-核心基础设施/提示词-SystemPrompt",
    why: "跨模块被引 244 次、**本目录内 0 次**；导出全是 prompt XML tag（ARTIFACT_FILE_CONTENT_TAG / BASH_STDOUT_TAG / WORKTREE_TAG / stripSystemReminders），没有一个是 Bedrock/Vertex 的",
  },
  {
    from: "02-功能模块/模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js",
    to: "01-核心基础设施/设置-配置",
    why: "跨模块 103 次、本目录内 3 次；25 个导出里 21 个是通用配置工具（getClaudeConfigDir / isSameAsConfigDir / parseProjectDirName / isSafeMode / parseEnvAssignments），只有 4 个是 Vertex 的",
  },
  {
    from: "02-功能模块/工具Bash-Shell/permission-rule-parsing.js",
    to: "02-功能模块/权限系统",
    why: "29 个引用方、**本目录内 0 次**；导出 resolveToolNameAlias / expandToolNameAlias / getBuiltinLegacyToolNames / WORKSPACE_MCP_SERVER_NAME —— 工具名别名解析，是权限规则解析的一部分",
  },
  {
    from: "02-功能模块/策略限制-PolicyLimits/chunk-8sw91yn5.js",
    to: "01-核心基础设施/核心工具-字符串与文本",
    why: "目录共 2 文件 55KB，它一个占 36KB 且被 10 个模块引用；导出 sanitizeTextForDisplay / stripDefaultIgnorableCharacters / buildAttributionHeader / truncateToTextLimit —— 文本清洗与展示，没有一个 policy-limit 符号",
  },
  {
    from: "02-功能模块/工作树-Git/resume-session-state.js",
    to: "02-功能模块/会话-历史-恢复",
    why: "34KB；字符串 agent_resolve_miss / bypassPermissions / cloud_session_status，调用点集中在会话恢复，与 worktree 无关",
  },
  {
    from: "02-功能模块/工具Glob-Grep-搜索/cli-command-handlers.js",
    to: "03-入口与运行时/CLI入口-Commander",
    why: "导出 confirmYesNo / createSubcommandRoot / setupTokenHandler / doctorHandler / installHandler —— 子命令处理器；该目录 3 个文件里只有 chunk-57axeagj 与搜索沾边",
  },
  {
    from: "02-功能模块/工具Glob-Grep-搜索/ConsoleOAuthFlow.n1ybswzm.js",
    to: "02-功能模块/认证-OAuth登录",
    why: "纯再导出桶：全文只有 `import { OAuthLoginScreen } from \"../认证-OAuth登录/chunk-xvt7fc9t.js\"` 加 5 条副作用 import，再 `export { … as ConsoleOAuthFlow }`",
  },
  {
    from: "03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js",
    to: "01-核心基础设施/核心工具-进程与信号",
    why: "import { setMaxListeners } from \"events\"，字符串 AbortError / recovery-timeout；是 AbortController 工具（PromptScopedAbortController 一族），与 Agent 循环无关",
  },
];

if (process.argv.includes("--emit")) {
  const out = process.argv[process.argv.indexOf("--emit") + 1];
  const moves = MISFILED.map(({ from, to }) => ({ from, to: `${to}/${from.split("/").pop()}` }));
  const fs = await import("node:fs");
  fs.writeFileSync(out, JSON.stringify({ moves }, null, 1));
  console.log(`计划已写出 -> ${out}（${moves.length} 条移动）`);
} else {
  console.log("# 放错模块 / 分层倒置 归位判定表\n");
  console.log("| 现状 | 改为 | 证据 |");
  console.log("|---|---|---|");
  for (const m of MISFILED) console.log(`| \`${m.from}\` | **${m.to}/** | ${m.why} |`);
}

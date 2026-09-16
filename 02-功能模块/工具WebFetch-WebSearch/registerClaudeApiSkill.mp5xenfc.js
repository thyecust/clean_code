// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { u } from "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Q } from "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-k6pta6f5.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { eo } from "../Skills技能/chunk-1zy5c8mf.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../Memory-CLAUDE.md/Memory-CLAUDE.md.vx19drc8.js";
import "../策略限制(PolicyLimits)/chunk-8sw91yn5.js";
import "../MCP客户端/chunk-3kmsshb6.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7xabjzfw.js";
import "../插件系统/chunk-7s6mt1vg.js";
import "../图表-Mermaid/chunk-743atbtj.js";
import "../Skills技能/chunk-sapykxw7.js";
import "../../01-核心基础设施/设置-配置/chunk-b536v45y.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-15vfjgmh.js";
import "../权限系统/chunk-t3b7pg2x.js";
import "../权限系统/chunk-fjrcf22x.js";
import "../权限系统/chunk-qdy0h5k2.js";
import "../../03-入口与运行时/核心应用-Agent循环/chunk-h3cty6gp.js";
import "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import "../Teammates团队/chunk-thxapyam.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-vp8yvx5r.js";
import "../工具ToolSearch/chunk-1m51pqtd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jzy6p47z.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-nfcecy7x.js";
import "../权限系统/chunk-pcxn6gwz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w4swsde7.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { readdir as h } from "fs/promises";
function l() {
  return import("./SKILL_MODEL_VARS.xb5anhsm.js");
}
function g(o) {
  let t = {};
  for (let [e, r] of Object.entries(o.SKILL_FILES))
    t[e] = e.endsWith(".md") ? s(r, o.SKILL_MODEL_VARS) : r;
  return t;
}
var m = {
  python: [".py", "requirements.txt", "pyproject.toml", "setup.py", "Pipfile"],
  typescript: [".ts", ".tsx", "tsconfig.json", "package.json"],
  java: [".java", "pom.xml", "build.gradle"],
  go: [".go", "go.mod"],
  ruby: [".rb", "Gemfile"],
  csharp: [".cs", ".csproj"],
  php: [".php", "composer.json"],
  curl: [],
};
async function f() {
  let o = Q(),
    t;
  try {
    t = await h(o);
  } catch {
    return null;
  }
  for (let [e, r] of Object.entries(m)) {
    if (r.length === 0) continue;
    for (let n of r)
      if (n.startsWith(".")) {
        if (t.some((a) => a.endsWith(n))) return e;
      } else if (t.includes(n)) return e;
  }
  return null;
}
function s(o, t) {
  let e = o,
    r;
  do ((r = e), (e = e.replace(/<!--[\s\S]*?-->\n?/g, "")));
  while (e !== r);
  return (
    (e = e.replace(/\{\{(\w+)\}\}/g, (n, a) =>
      Object.hasOwn(t, a) ? (t[a] ?? n) : n,
    )),
    e
  );
}
function L(o, t, e, r) {
  let n = [s(e.SKILL_PROMPT, e.SKILL_MODEL_VARS).trimEnd()];
  if (!r)
    n.push(`## Reference Files Unavailable

This skill's reference files could not be written to disk for this session, so the \`{lang}/\u2026\`, \`shared/\u2026\`, and \`curl/\u2026\` files cited above cannot be Read. Do not guess their contents \u2014 WebFetch the matching URL from \`shared/live-sources.md\`, included below, whenever the Reading Guide points at one of those files. If a cited \`shared/\u2026\` file has no matching URL below (skill-authored guides such as \`shared/prompt-audit.md\`, \`shared/agent-design.md\`, \`shared/platform-availability.md\`), state that the reference is unavailable this session and proceed best-effort from this document.

<doc path="shared/live-sources.md">
${s(e.SKILL_FILES["shared/live-sources.md"] ?? "", e.SKILL_MODEL_VARS).trim()}
</doc>`);
  if (o) {
    let a = `${o}/claude-api/README.md`,
      c = e.SKILL_FILES[a];
    if (c)
      n.push(`## Detected Language: ${o}

\`${a}\` is included below since every task starts there.${r ? " Read the other referenced files from the base directory on demand. That directory is session-scoped \u2014 after resuming a session, or if a Read under it ever fails, re-invoke this skill to re-extract." : ""}

<doc path="${a}">
${s(c, e.SKILL_MODEL_VARS).trim()}
</doc>`);
  } else if (p(t) !== "prompt-audit")
    n.push(
      r
        ? "No project language was auto-detected. Ask the user which language they are using (see Language Detection above), then Read the matching `{lang}/claude-api/README.md` (or `curl/examples.md` for cURL/raw HTTP or an unsupported language) from the base directory before anything else."
        : "No project language was auto-detected. Ask the user which language they are using (see Language Detection above) before writing code.",
    );
  if (t)
    n.push(`## User Request

${t}`);
  return n.join(`

`);
}
var b = [
    "Reference for the Claude API / Anthropic SDK \u2014 model ids, pricing, params, streaming, tool use, MCP, agents, caching, token counting, model migration.",
    'TRIGGER \u2014 read BEFORE opening the target file; don\'t skip because it "looks like a one-liner" \u2014 whenever: the prompt names Claude/Anthropic in any form (Claude, Anthropic, Fable, Opus, Sonnet, Haiku, `anthropic`, `@anthropic-ai`, `claude-*`, `us.anthropic.*`, `[1m]`); the user asks about an LLM (pricing/model choice/limits/caching) \u2014 never answer from memory; OR the task is LLM-shaped with provider unstated (agent/MCP/tool-definition/multi-agent/RAG/LLM-judge/computer-use; generate/summarize/extract/classify/rewrite/converse over NL; debugging refusals/cutoffs/streaming/tool-calls/tokens).',
    "SKIP only when another provider is being worked on (overrides all triggers): OpenAI/GPT/Gemini/Llama/Mistral/Cohere/Ollama named in the query; OR `grep -rE 'openai|langchain_openai|google.generativeai|genai|mistralai|cohere|ollama'` over the project hits (run this grep FIRST if no provider named \u2014 don't Read the file).",
  ].join(`
`),
  d = [
    "cost-optimize",
    "migrate",
    "managed-agents-onboard",
    "prompt-audit",
    "upgrade",
    "build-eval",
    "hillclimb",
  ];
function p(o) {
  let t = o.trim().toLowerCase().split(/\s+/)[0] ?? "";
  return d.find((e) => e === t) ?? "none";
}
function v({ disabled: o = !1 } = {}) {
  eo({
    name: "claude-api",
    menuDescription: "Build and debug apps that use the Claude API",
    description: b,
    allowedTools: ["WebFetch(domain:platform.claude.com)"],
    userInvocable: !0,
    isEnabled: () => !o,
    files: () => l().then(g),
    async getPromptForCommand(t, e, r) {
      let [n, a] = await Promise.all([f(), l()]);
      return (
        i("tengu_claude_api_skill_loaded", {
          detected_lang: u(n ?? "none"),
          subcommand: u(p(t)),
          has_args: t.trim().length > 0,
        }),
        [{ type: "text", text: L(n, t, a, typeof r === "string") }]
      );
    },
    async getArgumentCompletions(t, e) {
      if (t.length > 0) return [];
      let r = e.toLowerCase();
      return d
        .filter((n) => n.startsWith(r))
        .map((n) => ({ value: n, displayValue: n }));
    },
  });
}
export { v as registerClaudeApiSkill };

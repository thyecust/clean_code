// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 13 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { StdioMcpServerSchema } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { CLAUDE_DESKTOP_SUPPORTED_PLATFORMS, getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { readdir, readFile, stat as p } from "fs/promises";
import { homedir } from "os";
import { join as l } from "path";
async function g() {
  let o = getCurrentPlatform();
  if (!CLAUDE_DESKTOP_SUPPORTED_PLATFORMS.includes(o))
    throw Error(
      `Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`,
    );
  if (o === "macos")
    return l(
      homedir(),
      "Library",
      "Application Support",
      "Claude",
      "claude_desktop_config.json",
    );
  let i = a.USERPROFILE ? a.USERPROFILE.replace(/\\/g, "/") : null;
  if (i) {
    let e = `/mnt/c${i.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
    try {
      return (await p(e), e);
    } catch {}
  }
  try {
    try {
      let e = await readdir("/mnt/c/Users", { withFileTypes: !0 });
      for (let r of e) {
        if (
          r.name === "Public" ||
          r.name === "Default" ||
          r.name === "Default User" ||
          r.name === "All Users"
        )
          continue;
        let s = l(
          "/mnt/c/Users",
          r.name,
          "AppData",
          "Roaming",
          "Claude",
          "claude_desktop_config.json",
        );
        try {
          return (await p(s), s);
        } catch {}
      }
    } catch {}
  } catch (t) {
    n(`Failed scanning /mnt/c/Users for Claude Desktop config: ${t}`, {
      level: "error",
    });
  }
  throw Error(
    "Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.",
  );
}
async function readClaudeDesktopMcpServers() {
  if (!CLAUDE_DESKTOP_SUPPORTED_PLATFORMS.includes(getCurrentPlatform()))
    throw Error(
      "Unsupported platform - Claude Desktop integration only works on macOS and WSL.",
    );
  try {
    let o = await g(),
      i;
    try {
      i = await readFile(o, { encoding: "utf8" });
    } catch (s) {
      if (A(s) === "ENOENT") return {};
      throw s;
    }
    let t = xt(i);
    if (!t || typeof t !== "object") return {};
    let e = t.mcpServers;
    if (!e || typeof e !== "object") return {};
    let r = {};
    for (let [s, c] of Object.entries(e)) {
      if (!c || typeof c !== "object") continue;
      let f = StdioMcpServerSchema().safeParse(c);
      if (f.success) r[s] = f.data;
    }
    return r;
  } catch (o) {
    return (
      n(`Failed to read Claude Desktop MCP servers: ${o}`, { level: "error" }),
      {}
    );
  }
}
export { readClaudeDesktopMcpServers };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { A, Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { ja } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { execFileNoThrow } from "../Git-Worktree/git-exec-hardening.js";
import { getInstalledClaudePath } from "../../01-核心基础设施/共享小工具-未细化/claude-launcher-invocation.js";
import { getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { WB } from "../插件系统/chunk-q8w2zntw.js";
import { getXdgDataHome } from "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import { promises } from "fs";
import * as g from "os";
import * as o from "path";
var URL_HANDLER_BUNDLE_ID = "com.anthropic.claude-code-url-handler",
  p = "Claude Code URL Handler",
  w = "claude-code-url-handler.desktop",
  P = "Claude Code URL Handler.app",
  c = o.join(g.homedir(), "Applications", P),
  l = o.join(c, "Contents", "MacOS", "claude");
function d() {
  return o.join(getXdgDataHome(), "applications", w);
}
var u = `HKEY_CURRENT_USER\\Software\\Classes\\${WB}`,
  h = `${u}\\shell\\open\\command`,
  m = 86400000;
function k(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function C(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function D(e) {
  let t = o.join(c, "Contents");
  try {
    await promises.rm(c, { recursive: !0 });
  } catch (s) {
    if (A(s) !== "ENOENT") throw s;
  }
  await promises.mkdir(o.dirname(l), { recursive: !0 });
  let r = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${URL_HANDLER_BUNDLE_ID}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${WB}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  (await promises.writeFile(o.join(t, "Info.plist"), r),
    await promises.symlink(e, l),
    await execFileNoThrow(
      "/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister",
      ["-R", c],
      { useCwd: !1 },
    ),
    n(`Registered ${WB}:// protocol handler at ${c}`));
}
async function _(e) {
  await promises.mkdir(o.dirname(d()), { recursive: !0 });
  let t = `[Desktop Entry]
Name=${p}
Comment=Handle ${WB}:// deep links for Claude Code
${k(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${WB};
`;
  await promises.writeFile(d(), t);
  let r = await ja("xdg-mime");
  if (r) {
    let { code: i } = await execFileNoThrow(r, ["default", w, `x-scheme-handler/${WB}`], {
      useCwd: !1,
    });
    if (i !== 0)
      throw Object.assign(Error(`xdg-mime exited with code ${i}`), {
        code: "XDG_MIME_FAILED",
      });
  }
  n(`Registered ${WB}:// protocol handler at ${d()}`);
}
async function F(e) {
  for (let t of [
    ["add", u, "/ve", "/d", `URL:${p}`, "/f"],
    ["add", u, "/v", "URL Protocol", "/d", "", "/f"],
    ["add", h, "/ve", "/d", C(e), "/f"],
  ]) {
    let { code: r } = await execFileNoThrow("reg", t, { useCwd: !1 });
    if (r !== 0)
      throw Object.assign(Error(`reg add exited with code ${r}`), {
        code: "REG_FAILED",
      });
  }
  n(`Registered ${WB}:// protocol handler in Windows registry`);
}
async function L(e) {
  let t = e ?? (await E());
  switch ("darwin") {
    case "darwin":
      await D(t);
      break;
    case "linux":
      await _(t);
      break;
    case "win32":
      await F(t);
      break;
    default:
      throw Error("Unsupported platform: darwin");
  }
}
async function E() {
  let e = getInstalledClaudePath();
  try {
    return (await promises.realpath(e), e);
  } catch {
    return process.execPath;
  }
}
async function S(e) {
  try {
    switch ("darwin") {
      case "darwin":
        return (await promises.readlink(l)) === e;
      case "linux":
        return (await promises.readFile(d(), "utf8")).includes(k(e));
      case "win32": {
        let { stdout: t, code: r } = await execFileNoThrow("reg", ["query", h, "/ve"], {
          useCwd: !1,
        });
        return r === 0 && t.includes(C(e));
      }
      default:
        return !1;
    }
  } catch {
    return !1;
  }
}
async function ensureDeepLinkHandlerRegistered(e) {
  if (getInitialSettings().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("darwin")) return;
  let t = await E();
  if (await S(t)) return;
  let r = o.join(getClaudeConfigDir(), ".deep-link-register-failed");
  if (isHoverRestEnabled() && e !== void 0) {
    let i = await e.stat(STORAGE_KEYS.state("deep-link-register-failed"));
    if (i.ok && Date.now() - i.value.mtimeMs < m) return;
  } else
    try {
      let i = await promises.stat(r);
      if (Date.now() - i.mtimeMs < m) return;
    } catch {}
  try {
    if (
      (await L(t),
      logFeatureOk("deep_link_register"),
      n("Auto-registered claude-cli:// deep link protocol handler"),
      isHoverRestEnabled() && e !== void 0)
    )
      await e.delete(STORAGE_KEYS.state("deep-link-register-failed"));
    else await promises.rm(r, { force: !0 }).catch(() => {});
  } catch (i) {
    let s = Jr(i);
    if (
      (logFeatureBad("deep_link_register", s ?? "register_failed"),
      n(
        `Failed to auto-register deep link protocol handler: ${i instanceof Error ? i.message : String(i)}`,
        { level: "warn" },
      ),
      s === "EACCES" || s === "ENOSPC")
    )
      if (isHoverRestEnabled() && e !== void 0)
        await e.write(STORAGE_KEYS.state("deep-link-register-failed"), "", {
          publishDiscipline: "inPlace",
        });
      else await promises.writeFile(r, "").catch(() => {});
  }
}
export { URL_HANDLER_BUNDLE_ID, ensureDeepLinkHandlerRegistered };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../遥测-OpenTelemetry/analytics-fields.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, my, _Z, AHt, Tae } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { withTimeout } from "../核心工具-并发与缓存/async-timeout-utils.js";
import { hasUnverifiableAncestry, getFsSurface } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getClaudeConfigDir } from "./chunk-5ndhfaq9.js";
import { fileSuffixForOauthConfig } from "../../02-功能模块/认证-OAuth登录/chunk-9g2q4bjq.js";
import { hur, I } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { dedupe } from "../核心工具-数组与集合/chunk-d16fhdtx.js";
import { defineExportGetters } from "../内嵌资源与模块互操作/chunk-2c9tjhwd.js";
function isRunningWithBun() {
  return !0;
}
function isBunStandaloneExecutable() {
  return typeof Bun < "u" && Bun.isStandaloneExecutable === !0;
}
import { lstat, rmdir, unlink } from "fs/promises";
async function tryRemoveFileOrEmptyDirectory(t) {
  try {
    return (await unlink(t), "removed");
  } catch (o) {
    if (A(o) === "ENOENT") return "absent";
    try {
      return (await rmdir(t), "removed");
    } catch (E) {
      let _ = A(E);
      if (_ === "ENOTEMPTY" || _ === "EEXIST") return "directory";
      if (_ === "ENOENT") {
        if (
          await lstat(t).then(
            () => !1,
            (r) => A(r) === "ENOENT",
          )
        )
          return "absent";
        throw o;
      }
      throw _ === "ENOTDIR" ? o : E;
    }
  }
}
import { constants } from "fs";
import {
  open,
  readdir,
} from "fs/promises";
import { join } from "path";
function hasUnknownFileType(t) {
  return (
    !t.isDirectory() &&
    !t.isFile() &&
    !t.isSymbolicLink() &&
    !t.isFIFO() &&
    !t.isSocket() &&
    !t.isBlockDevice() &&
    !t.isCharacterDevice()
  );
}
async function getDirentFileInfo(t, o) {
  let E;
  if (!hasUnknownFileType(o))
    E = {
      isDirectory: o.isDirectory(),
      isFile: o.isFile(),
      isSymbolicLink: o.isSymbolicLink(),
    };
  else {
    let _ = await lstat(join(t, o.name));
    E = {
      isDirectory: _.isDirectory(),
      isFile: _.isFile(),
      isSymbolicLink: _.isSymbolicLink(),
      size: _.size,
    };
  }
  if (E.isDirectory && getCurrentPlatform() === "windows") {
    let _ = await Tae(join(t, o.name));
    switch (_.kind) {
      case "junction":
        return {
          isDirectory: !1,
          isFile: !1,
          isSymbolicLink: !0,
          linkTarget: _.target,
        };
      case "directory":
        break;
      case "absent":
        break;
      case "error":
        throw _.error;
    }
  }
  return E;
}
async function tryGetDirentFileInfo(t, o) {
  try {
    return await getDirentFileInfo(t, o);
  } catch (E) {
    if (W(E)) return;
    throw E;
  }
}
async function removePathRecursively(t) {
  let o;
  try {
    o = await lstat(t);
  } catch (E) {
    if (A(E) !== "ENOENT") throw E;
    return;
  }
  if (o.isFile()) {
    if (o.nlink > 1) await unlink(t);
    return;
  }
  if (o.isSymbolicLink()) {
    await unlink(t);
    return;
  }
  await removeDirectoryRecursive(t);
}
var K = 16;
async function removeDirectoryRecursive(t) {
  if ((await tryRemoveFileOrEmptyDirectory(t)) !== "directory") return;
  let E;
  try {
    E = await lstat(t);
  } catch (r) {
    if (A(r) === "ENOENT") return;
    throw r;
  }
  if (
    !E.isDirectory() ||
    E.isSymbolicLink() ||
    (getCurrentPlatform() === "windows" && (await _t(t)))
  ) {
    await tryRemoveFileOrEmptyDirectory(t);
    return;
  }
  let _;
  try {
    _ = await readdir(t);
  } catch (r) {
    let s = A(r);
    if (s === "ENOENT" || s === "ENOTDIR") return;
    throw r;
  }
  for (let r = 0; r < _.length; r += K)
    await Promise.all(_.slice(r, r + K).map((s) => removeDirectoryRecursive(join(t, s))));
  if ((await tryRemoveFileOrEmptyDirectory(t)) === "directory")
    throw Object.assign(Error("directory refilled during removal"), {
      code: "ENOTEMPTY",
      path: t,
    });
}
async function overwriteFileContents(t, o) {
  let E = getCurrentPlatform() === "windows" ? 0 : constants.O_NOFOLLOW | constants.O_NONBLOCK,
    _ = await open(t, constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC | E, 438);
  try {
    await _.writeFile(o, "utf-8");
  } finally {
    await _.close();
  }
}
async function _t(t) {
  let o = await Tae(t);
  if (o.kind === "error") throw o.error;
  return o.kind === "junction";
}
import { delimiter, isAbsolute } from "path";
function et(t) {
  let o = process.cwd();
  return t.filter((E) => !AHt(E, o));
}
function g(t) {
  return y(t, Bun.which(t));
}
function y(t, o) {
  return o;
}
var resolveExecutablePathAsync = async (t) => g(t),
  resolveExecutablePath = g;
function resolveCommandInPath(t, o) {
  let E = o
    .split(delimiter)
    .map((_) => normalizePathEntry(_))
    .filter((_) => st(_));
  return E.length === 0 ? null : nt(t, E.join(delimiter));
}
function normalizePathEntry(t, o = "darwin") {
  return o === "win32" ? t.replaceAll('"', "") : t;
}
function st(t) {
  if (!isAbsolute(t)) return !1;
  return !0;
}
function nt(t, o) {
  return y(t, Bun.which(t, { PATH: o }));
}
import {
  access,
  readlink,
} from "fs/promises";
import { homedir } from "os";
import { resolve } from "path";
function h() {
  return !1;
}
function w() {
  return;
}
function V() {
  return !1;
}
function pt() {
  if (getFsSurface().existsSync(join(getClaudeConfigDir(), ".config.json"))) return join(getClaudeConfigDir(), ".config.json");
  return getDefaultGlobalClaudeFilePath();
}
function getDefaultGlobalClaudeFilePath() {
  let t = `.claude${fileSuffixForOauthConfig()}.json`;
  return join(process.env.CLAUDE_CONFIG_DIR || homedir(), t);
}
function getGlobalClaudeFile() {
  return C().getGlobalClaudeFile();
}
async function Rt() {
  try {
    let { externalHttp: t } = await import("../HTTP-网络层/external-http.js");
    return (
      await t.head("http://1.1.1.1", { signal: AbortSignal.timeout(1000) }),
      !0
    );
  } catch {
    return !1;
  }
}
async function St() {
  return null;
}
async function c(t) {
  try {
    return !!(await resolveExecutablePathAsync(t));
  } catch {
    return !1;
  }
}
async function it() {
  let t = [];
  if (await c("npm")) t.push("npm");
  if (await c("yarn")) t.push("yarn");
  if (await c("pnpm")) t.push("pnpm");
  return t;
}
async function It() {
  let t = [];
  if (await c("bun")) t.push("bun");
  if (await c("deno")) t.push("deno");
  if (await c("node")) t.push("node");
  return t;
}
var BUILD_TOOL_COMMANDS = [
    "git",
    "node",
    "npm",
    "npx",
    "yarn",
    "pnpm",
    "bun",
    "deno",
    "tsc",
    "python",
    "python3",
    "py",
    "pip",
    "uv",
    "poetry",
    "ruby",
    "gem",
    "bundle",
    "rake",
    "dotnet",
    "msbuild",
    "nuget",
    "cl",
    "nmake",
    "cmake",
    "ninja",
    "make",
    "gcc",
    "g++",
    "clang",
    "cargo",
    "rustc",
    "go",
    "java",
    "javac",
    "mvn",
    "gradle",
    "docker",
  ],
  Ut = 1000;
async function xt(t) {
  try {
    return /appinstaller/i.test(await readlink(t));
  } catch {
    return !1;
  }
}
async function isVerifiablePath(t) {
  if (t === "" || _Z(t) || my(t)) return !1;
  return !(await hasUnverifiableAncestry(resolve(t)));
}
async function findCommandsOnPath(t, o) {
  let E = getCurrentPlatform() === "windows",
    _ = new Set(t),
    r = E
      ? (process.env.PATHEXT ?? ".COM;.EXE;.BAT;.CMD")
          .toLowerCase()
          .split(";")
          .filter(Boolean)
      : [],
    s = dedupe(
      (process.env.PATH ?? "")
        .split(delimiter)
        .map((e) => e.replace(/^"|"$/g, ""))
        .filter(Boolean),
    );
  await Promise.all(
    s.map(async (e) => {
      if (!(await isVerifiablePath(e))) return;
      let n;
      try {
        n = await readdir(e, { withFileTypes: !0 });
      } catch {
        return;
      }
      let L = E && /[\\/]microsoft[\\/]windowsapps[\\/]?$/i.test(e);
      for (let O of n) {
        if (O.isDirectory()) continue;
        let p = O.name;
        if (E) {
          let D = p.toLowerCase(),
            i = D.lastIndexOf(".");
          if (i <= 0 || !r.includes(D.slice(i))) continue;
          p = D.slice(0, i);
        }
        if (!_.has(p) || o.has(p)) continue;
        if (E) {
          if (L && (await xt(join(e, O.name)))) continue;
        } else {
          let D = join(e, O.name);
          if ((O.isSymbolicLink() || hasUnknownFileType(O)) && (await hasUnverifiableAncestry(resolve(D)))) continue;
          try {
            await access(D, constants.X_OK);
          } catch {
            continue;
          }
        }
        o.add(p);
      }
    }),
  );
}
async function Nt() {
  let t = new Set();
  try {
    await withTimeout(findCommandsOnPath(BUILD_TOOL_COMMANDS, t), Ut, "build tool PATH scan timed out");
  } catch {}
  return BUILD_TOOL_COMMANDS.filter((o) => t.has(o));
}
function getDetectedBuildTools() {
  return C().getDetectedBuildTools();
}
function lt(t) {
  try {
    if (!t.isWslEnvironment()) return !1;
    let o = resolveExecutablePath("npm");
    if (o === null) return !1;
    return o.startsWith("/mnt/c/");
  } catch (o) {
    return !1;
  }
}
function Pt() {
  return process.env.__CFBundleIdentifier === "com.conductor.app";
}
var JETBRAINS_IDES = [
  "pycharm",
  "intellij",
  "webstorm",
  "phpstorm",
  "rubymine",
  "clion",
  "goland",
  "rider",
  "datagrip",
  "appcode",
  "dataspell",
  "aqua",
  "gateway",
  "fleet",
  "jetbrains",
  "androidstudio",
];
function isWindsurfOrDevinPath(t) {
  let o = t.toLowerCase();
  return (
    o.includes("windsurf") ||
    o.includes("devin.app") ||
    o.includes("devin desktop") ||
    o.includes("devin-desktop") ||
    /appdata[\\/]local[\\/](programs[\\/])?devin[\\/]/.test(o)
  );
}
function at() {
  if (process.env.CURSOR_TRACE_ID) return "cursor";
  let t = process.env.VSCODE_GIT_ASKPASS_MAIN?.toLowerCase() ?? "";
  if (t.includes("cursor")) return "cursor";
  if (isWindsurfOrDevinPath(t)) return "windsurf";
  if (t.includes("antigravity")) return "antigravity";
  let o = process.env.__CFBundleIdentifier?.toLowerCase();
  if (o?.includes("vscodium")) return "codium";
  if (o?.includes("windsurf") || o?.includes("devin")) return "windsurf";
  if (o?.includes("com.google.android.studio")) return "androidstudio";
  if (o) {
    for (let E of JETBRAINS_IDES) if (o.includes(E)) return E;
  }
  if (process.env.VisualStudioVersion) return "visualstudio";
  if (process.env.TERMINAL_EMULATOR === "JetBrains-JediTerm") return "pycharm";
  if (process.env.TERM === "xterm-ghostty") return "ghostty";
  if (process.env.TERM?.includes("kitty")) return "kitty";
  if (process.env.TERM_PROGRAM) {
    if (/^devin([ -]desktop)?$/i.test(process.env.TERM_PROGRAM))
      return "windsurf";
    return process.env.TERM_PROGRAM;
  }
  if (process.env.TMUX) return "tmux";
  if (process.env.STY) return "screen";
  if (process.env.KONSOLE_VERSION) return "konsole";
  if (process.env.GNOME_TERMINAL_SERVICE) return "gnome-terminal";
  if (process.env.XTERM_VERSION) return "xterm";
  if (process.env.VTE_VERSION) return "vte-based";
  if (process.env.TERMINATOR_UUID) return "terminator";
  if (process.env.KITTY_WINDOW_ID) return "kitty";
  if (process.env.ALACRITTY_LOG) return "alacritty";
  if (process.env.TILIX_ID) return "tilix";
  if (process.env.WT_SESSION) return "windows-terminal";
  if (process.env.SESSIONNAME && process.env.TERM === "cygwin") return "cygwin";
  if (process.env.MSYSTEM) return process.env.MSYSTEM.toLowerCase();
  if (process.env.ConEmuANSI || process.env.ConEmuPID || process.env.ConEmuTask)
    return "conemu";
  if (process.env.WSL_DISTRO_NAME) return `wsl-${process.env.WSL_DISTRO_NAME}`;
  if (J()) return "ssh-session";
  if (process.env.TERM) {
    let E = process.env.TERM;
    if (E.includes("alacritty")) return "alacritty";
    if (E.includes("rxvt")) return "rxvt";
    if (E.includes("termite")) return "termite";
    return process.env.TERM;
  }
  if (!process.stdout.isTTY) return "non-interactive";
  return null;
}
class k {
  sources;
  globalClaudeFile;
  internetAccess;
  internetProbeOutcome;
  packageManagers;
  runtimes;
  detectedBuildTools;
  wslEnvironment;
  npmFromWindowsPath;
  deploymentEnvironment;
  primedWslInteropExists;
  primedHypervisorUuid;
  primedDockerenvExists;
  fallbackWslInteropExists;
  fallbackHypervisorUuid;
  fallbackDockerenvExists;
  constructor(t) {
    this.sources = t;
  }
  getGlobalClaudeFile() {
    return (this.globalClaudeFile ??= pt());
  }
  seedGlobalClaudeFile(t) {
    if (this.globalClaudeFile === void 0)
      return ((this.globalClaudeFile = t), "seeded");
    return this.globalClaudeFile === t ? "unchanged" : "conflict";
  }
  hasInternetAccess() {
    return (this.internetAccess ??= Rt().then(
      (t) => ((this.internetProbeOutcome = t), t),
    ));
  }
  getInternetProbeOutcome() {
    return this.internetProbeOutcome;
  }
  getPackageManagers() {
    return (this.packageManagers ??= it());
  }
  getRuntimes() {
    return (this.runtimes ??= It());
  }
  getDetectedBuildTools() {
    return (this.detectedBuildTools ??= Nt());
  }
  isWslEnvironment() {
    return (this.wslEnvironment ??= this.primedWslInteropExists ?? !1);
  }
  isNpmFromWindowsPath() {
    return (this.npmFromWindowsPath ??= lt(this));
  }
  hypervisorUuid() {
    return (
      this.primedHypervisorUuid ??
      (this.fallbackHypervisorUuid ??=
        this.sources.readHypervisorUuidSync() ?? "")
    );
  }
  isDockerenvPresent() {
    return (
      this.primedDockerenvExists ??
      (this.fallbackDockerenvExists ??= this.sources.dockerenvExistsSync())
    );
  }
  detectDeploymentEnvironment() {
    return (this.deploymentEnvironment ??= ut(this));
  }
  async prime() {
    this.primedWslInteropExists;
    return;
  }
}
var Mt = new j(
  () =>
    new k({
      wslInteropExistsSync: h,
      readHypervisorUuidSync: w,
      dockerenvExistsSync: V,
    }),
);
function C() {
  return Mt.of(B().host);
}
function primeSystemInfo() {
  return C().prime();
}
function isDockerenvPresent() {
  return C().isDockerenvPresent();
}
function Z() {
  return C().detectDeploymentEnvironment();
}
function ut(t) {
  if (Ie(process.env.CODESPACES)) return "codespaces";
  if (process.env.GITPOD_WORKSPACE_ID) return "gitpod";
  if (Ie(process.env.CODER) || process.env.CODER_WORKSPACE_NAME) return "coder";
  if (Ie(process.env.DEVPOD) || process.env.DEVPOD_WORKSPACE_UID)
    return "devpod";
  if (process.env.DAYTONA_WS_ID) return "daytona";
  if (Ie(process.env.GOOGLE_CLOUD_WORKSTATIONS))
    return "gcp-cloud-workstations";
  if (process.env.C9_PID || process.env.C9_USER) return "aws-cloud9";
  if (process.env.REPL_ID || process.env.REPL_SLUG) return "replit";
  if (process.env.PROJECT_DOMAIN) return "glitch";
  if (Ie(process.env.VERCEL)) return "vercel";
  if (process.env.RAILWAY_ENVIRONMENT_NAME || process.env.RAILWAY_SERVICE_NAME)
    return "railway";
  if (Ie(process.env.RENDER)) return "render";
  if (Ie(process.env.NETLIFY)) return "netlify";
  if (process.env.DYNO) return "heroku";
  if (process.env.FLY_APP_NAME || process.env.FLY_MACHINE_ID) return "fly.io";
  if (Ie(process.env.CF_PAGES)) return "cloudflare-pages";
  if (process.env.DENO_DEPLOYMENT_ID) return "deno-deploy";
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) return "aws-lambda";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_FARGATE") return "aws-fargate";
  if (process.env.AWS_EXECUTION_ENV === "AWS_ECS_EC2") return "aws-ecs";
  if (t.hypervisorUuid().startsWith("ec2")) return "aws-ec2";
  if (process.env.K_SERVICE) return "gcp-cloud-run";
  if (process.env.GOOGLE_CLOUD_PROJECT) return "gcp";
  if (process.env.WEBSITE_SITE_NAME || process.env.WEBSITE_SKU)
    return "azure-app-service";
  if (process.env.AZURE_FUNCTIONS_ENVIRONMENT) return "azure-functions";
  if (process.env.APP_URL?.includes("ondigitalocean.app"))
    return "digitalocean-app-platform";
  if (process.env.SPACE_CREATOR_USER_ID) return "huggingface-spaces";
  if (Ie(process.env.GITHUB_ACTIONS)) return "github-actions";
  if (Ie(process.env.GITLAB_CI)) return "gitlab-ci";
  if (process.env.CIRCLECI) return "circleci";
  if (process.env.BUILDKITE) return "buildkite";
  if (Ie(!1)) return "ci";
  if (process.env.KUBERNETES_SERVICE_HOST) return "kubernetes";
  if (t.isDockerenvPresent()) return "docker";
  if (T.platform === "darwin") return "unknown-darwin";
  if (T.platform === "linux") return "unknown-linux";
  if (T.platform === "win32") return "unknown-win32";
  return "unknown";
}
function J() {
  return !!(
    process.env.SSH_CONNECTION ||
    process.env.SSH_CLIENT ||
    process.env.SSH_TTY
  );
}
var T = {
  hasInternetAccess() {
    return C().hasInternetAccess();
  },
  probeInternalNetworkAccess: St,
  isCI: Ie(!1),
  platform: ["win32", "darwin"].includes("darwin") ? "darwin" : "linux",
  arch: "arm64",
  nodeVersion: process.version,
  terminal: at(),
  isSSH: J,
  getPackageManagers() {
    return C().getPackageManagers();
  },
  getRuntimes() {
    return C().getRuntimes();
  },
  isRunningWithBun: isRunningWithBun,
  isWslEnvironment() {
    return C().isWslEnvironment();
  },
  isNpmFromWindowsPath() {
    return C().isNpmFromWindowsPath();
  },
  isConductor: Pt,
  detectDeploymentEnvironment: Z,
};
function getHostPlatformForAnalytics() {
  let t = process.env.CLAUDE_CODE_HOST_PLATFORM;
  if (t === "win32" || t === "darwin" || t === "linux") return t;
  return T.platform;
}
var Bt = new Set([
  "zsh",
  "bash",
  "fish",
  "sh",
  "dash",
  "ash",
  "ksh",
  "tcsh",
  "csh",
  "nu",
  "nushell",
  "pwsh",
  "powershell",
  "cmd",
  "elvish",
  "xonsh",
  "ion",
]);
function normalizeShellNameForAnalytics(t) {
  if (!t) return fromSanitizer_SANITIZER_OUTPUT_ONLY("none");
  let o = t
    .split(/[/\\]/)
    .pop()
    .toLowerCase()
    .replace(/\.exe$/, "");
  return fromSanitizer_SANITIZER_OUTPUT_ONLY(Bt.has(o) ? o : "other");
}
function getShellForAnalytics() {
  return normalizeShellNameForAnalytics(process.env.SHELL || process.env.COMSPEC || "");
}
var BEDROCK_INFERENCE_PROFILE_PREFIXES = ["us", "eu", "apac", "jp", "au", "us-gov", "global"],
  z = ["us", "eu", "apac", "jp", "au", "global"];
var l = {};
defineExportGetters(l, {
  AGENT_PROXY_AUTH_TOKEN: () => ht,
  ANTHROPIC_API_KEY: () => bt,
  ANTHROPIC_AUTH_TOKEN: () => mt,
  ANTHROPIC_AWS_API_KEY: () => dt,
  ANTHROPIC_FEDERATION_RULE_ID: () => uo,
  ANTHROPIC_FOUNDRY_API_KEY: () => ft,
  ANTHROPIC_FOUNDRY_AUTH_TOKEN: () => Ft,
  ANTHROPIC_ORGANIZATION_ID: () => bo,
  ANTHROPIC_PROFILE: () => Go,
  ANTHROPIC_WORKSPACE_ID: () => mo,
  AWS_BEARER_TOKEN_BEDROCK: () => Ht,
  AWS_CONTAINER_CREDENTIALS_FULL_URI: () => gt,
  AWS_CONTAINER_CREDENTIALS_RELATIVE_URI: () => Wt,
  AWS_ROLE_ARN: () => vt,
  AWS_WEB_IDENTITY_TOKEN_FILE: () => Kt,
  CLAUDE_CODE_ACCOUNT_TAGGED_ID: () => fo,
  CLAUDE_CODE_ACCOUNT_UUID: () => Ho,
  CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR: () => kt,
  CLAUDE_CODE_API_KEY_HELPER_TTL_MS: () => Ro,
  CLAUDE_CODE_AUTH_FAIL_EXIT_MS: () => po,
  CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS: () => Mo,
  CLAUDE_CODE_CUSTOM_OAUTH_URL: () => oo,
  CLAUDE_CODE_DESIGN_OAUTH_CLIENT_ID: () => qt,
  CLAUDE_CODE_ENABLE_PROXY_AUTH_HELPER: () => So,
  CLAUDE_CODE_FEDERATION_CACHE_DIR: () => Bo,
  CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR: () => jt,
  CLAUDE_CODE_HFI_BEARER_TOKEN: () => Yt,
  CLAUDE_CODE_HOST_AUTH_ENV_VAR: () => eo,
  CLAUDE_CODE_HOST_AUTH_REFRESH_TIMEOUT_MS: () => ro,
  CLAUDE_CODE_HOST_CREDS_FILE: () => so,
  CLAUDE_CODE_OAUTH_401_WAIT_MS: () => Lo,
  CLAUDE_CODE_OAUTH_CLIENT_ID: () => $t,
  CLAUDE_CODE_OAUTH_REFRESH_TOKEN: () => Qt,
  CLAUDE_CODE_OAUTH_SCOPES: () => to,
  CLAUDE_CODE_OAUTH_TOKEN: () => Gt,
  CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR: () => Zt,
  CLAUDE_CODE_ORGANIZATION_UUID: () => Fo,
  CLAUDE_CODE_PROXY_AUTH_HELPER_TTL_MS: () => io,
  CLAUDE_CODE_RATE_LIMIT_TIER: () => Wo,
  CLAUDE_CODE_SDK_HAS_HOST_AUTH_REFRESH: () => _o,
  CLAUDE_CODE_SDK_HAS_OAUTH_REFRESH: () => Eo,
  CLAUDE_CODE_SESSION_ACCESS_TOKEN: () => no,
  CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH: () => No,
  CLAUDE_CODE_SKIP_ANTHROPIC_GOOGLE_CLOUD_AUTH: () => lo,
  CLAUDE_CODE_SKIP_AWS_CRED_CACHE: () => ao,
  CLAUDE_CODE_SKIP_BEDROCK_AUTH: () => Io,
  CLAUDE_CODE_SKIP_FOUNDRY_AUTH: () => xo,
  CLAUDE_CODE_SKIP_MANTLE_AUTH: () => Po,
  CLAUDE_CODE_SKIP_VERTEX_AUTH: () => Uo,
  CLAUDE_CODE_SUBSCRIPTION_TYPE: () => vo,
  CLAUDE_CODE_USER_EMAIL: () => Ko,
  CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR: () => Jt,
  CLAUDE_LOCAL_OAUTH_API_BASE: () => Do,
  CLAUDE_LOCAL_OAUTH_APPS_BASE: () => co,
  CLAUDE_LOCAL_OAUTH_CONSOLE_BASE: () => To,
  CLAUDE_SESSION_INGRESS_TOKEN_FILE: () => zt,
  CLAUDE_TRUSTED_DEVICE_TOKEN: () => Co,
  CLOUDSDK_AUTH_ACCESS_TOKEN: () => yt,
  ENVIRONMENT_SERVICE_KEY: () => wt,
  MCP_CLIENT_SECRET: () => Vt,
  MCP_XAA_IDP_CLIENT_SECRET: () => Xt,
  USE_LOCAL_OAUTH: () => Oo,
  USE_STAGING_OAUTH: () => Ao,
});
var bt = I.str(),
  mt = I.str(),
  Gt = I.str(),
  Ht = I.str(),
  dt = I.str(),
  ft = I.str(),
  Ft = I.str(),
  Kt = I.str(),
  vt = I.str(),
  Wt = I.str(),
  gt = I.str(),
  yt = I.str(),
  Yt = I.str(),
  ht = I.str(),
  wt = I.str(),
  Vt = I.str(),
  Xt = I.str(),
  kt = I.str(),
  Zt = I.str(),
  jt = I.str(),
  Jt = I.str(),
  zt = I.str(),
  Qt = I.str(),
  $t = I.str(),
  qt = I.str(),
  to = I.str(),
  oo = I.str(),
  Eo = I.bool(),
  _o = I.bool(),
  ro = I.int({ min: 1 }),
  eo = I.str(),
  so = I.str(),
  no = I.str(),
  Co = I.str(),
  Oo = I.bool(),
  Ao = I.bool(),
  Do = I.str(),
  co = I.str(),
  To = I.str(),
  Lo = I.int({ min: 0 }),
  po = I.int({ min: 0 }),
  Ro = I.int(),
  So = I.bool(),
  io = I.int(),
  Io = I.bool(),
  Uo = I.bool(),
  xo = I.bool(),
  No = I.bool(),
  lo = I.bool(),
  Po = I.bool(),
  ao = I.bool(),
  Mo = I.int({ min: 1, max: 2147483647 }),
  uo = I.str(),
  Bo = I.str(),
  bo = I.str(),
  mo = I.str(),
  Go = I.str(),
  Ho = I.str(),
  fo = I.str(),
  Fo = I.str(),
  Ko = I.str(),
  vo = I.str(),
  Wo = I.str();
var M = {};
defineExportGetters(M, {
  ANT_CLAUDE_CODE_METRICS_ENDPOINT: () => ZE,
  ANT_OTEL_EXPORTER_OTLP_ENDPOINT: () => yE,
  ANT_OTEL_EXPORTER_OTLP_HEADERS: () => YE,
  ANT_OTEL_EXPORTER_OTLP_PROTOCOL: () => hE,
  ANT_OTEL_LOGS_EXPORTER: () => wE,
  ANT_OTEL_METRICS_EXPORTER: () => VE,
  ANT_OTEL_RESOURCE_ATTRIBUTES: () => kE,
  ANT_OTEL_TRACES_EXPORTER: () => XE,
  BETA_TRACING_ENDPOINT: () => jE,
  CLAUDE_CODE_BENCH_LIVE_COUNTS: () => EE,
  CLAUDE_CODE_BYOC_ENABLE_DATADOG: () => OE,
  CLAUDE_CODE_DATADOG_FLUSH_INTERVAL_MS: () => nE,
  CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS: () => CE,
  CLAUDE_CODE_DEBUG_LOGS_DIR: () => ho,
  CLAUDE_CODE_DEBUG_LOG_LEVEL: () => Yo,
  CLAUDE_CODE_DEBUG_REPAINTS: () => wo,
  CLAUDE_CODE_DIAGNOSTICS_FILE: () => Vo,
  CLAUDE_CODE_ENHANCED_TELEMETRY_BETA: () => _E,
  CLAUDE_CODE_FRAME_TIMING_LOG: () => zo,
  CLAUDE_CODE_FRAME_TIMING_SAMPLE_EVERY: () => Qo,
  CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH: () => fE,
  CLAUDE_CODE_OTEL_DIAG_STDERR: () => AE,
  CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS: () => rE,
  CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS: () => sE,
  CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS: () => eE,
  CLAUDE_CODE_PERFETTO_TRACE: () => jo,
  CLAUDE_CODE_PERFETTO_WRITE_INTERVAL_S: () => Jo,
  CLAUDE_CODE_PROFILE_STARTUP: () => Zo,
  CLAUDE_CODE_SESSION_LOG: () => $o,
  CLAUDE_CODE_TEE_SDK_STDOUT: () => oE,
  CLAUDE_CODE_TERMINAL_RECORDING: () => tE,
  CLAUDE_DEBUG: () => go,
  CLAUDE_PTY_RECORD: () => qo,
  DEBUG: () => yo,
  DEBUG_CLAUDE_AGENT_SDK: () => Xo,
  DEBUG_SDK: () => ko,
  OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => GE,
  OTEL_EXPORTER_OTLP_ENDPOINT: () => LE,
  OTEL_EXPORTER_OTLP_HEADERS: () => pE,
  OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: () => SE,
  OTEL_EXPORTER_OTLP_LOGS_HEADERS: () => iE,
  OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: () => IE,
  OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: () => UE,
  OTEL_EXPORTER_OTLP_METRICS_HEADERS: () => xE,
  OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: () => NE,
  OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: () => lE,
  OTEL_EXPORTER_OTLP_PROTOCOL: () => RE,
  OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: () => PE,
  OTEL_EXPORTER_OTLP_TRACES_HEADERS: () => aE,
  OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: () => ME,
  OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => HE,
  OTEL_LOGS_EXPORTER: () => cE,
  OTEL_LOGS_EXPORT_INTERVAL: () => BE,
  OTEL_LOG_ASSISTANT_RESPONSES: () => KE,
  OTEL_LOG_RAW_API_BODIES: () => gE,
  OTEL_LOG_TOOL_CONTENT: () => vE,
  OTEL_LOG_TOOL_DETAILS: () => WE,
  OTEL_LOG_USER_PROMPTS: () => FE,
  OTEL_METRICS_EXPORTER: () => DE,
  OTEL_METRIC_EXPORT_INTERVAL: () => uE,
  OTEL_RESOURCE_ATTRIBUTES: () => mE,
  OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: () => dE,
  OTEL_TRACES_EXPORTER: () => TE,
  OTEL_TRACES_EXPORT_INTERVAL: () => bE,
});
var go = I.bool(),
  yo = I.str(),
  Yo = I.str(),
  ho = I.str(),
  wo = I.bool(),
  Vo = I.str(),
  Xo = I.bool(),
  ko = I.bool(),
  Zo = I.bool(),
  jo = I.str(),
  Jo = I.int(),
  zo = I.str(),
  Qo = I.int(),
  $o = I.str(),
  qo = I.str(),
  tE = I.str(),
  oE = I.bool(),
  EE = I.bool(),
  _E = I.bool(),
  rE = I.int(),
  eE = I.int(),
  sE = I.int(),
  nE = I.int({ min: 1 }),
  CE = I.int({ min: 1 }),
  OE = I.bool(),
  AE = I.bool(),
  DE = I.str(),
  cE = I.str(),
  TE = I.str(),
  LE = I.str(),
  pE = I.str(),
  RE = I.str(),
  SE = I.str(),
  iE = I.str(),
  IE = I.str(),
  UE = I.str(),
  xE = I.str(),
  NE = I.str(),
  lE = I.str(),
  PE = I.str(),
  aE = I.str(),
  ME = I.str(),
  uE = I.int(),
  BE = I.int(),
  bE = I.int(),
  mE = I.str(),
  GE = I.int({ min: 0 }),
  HE = I.int({ min: 0 }),
  dE = I.int({ min: 0 }),
  fE = I.int({ min: 1, digitsOnly: !0 }),
  FE = I.bool(),
  KE = I.triBool(),
  vE = I.bool(),
  WE = I.bool(),
  gE = I.bool(),
  yE = I.str(),
  YE = I.str(),
  hE = I.str(),
  wE = I.str(),
  VE = I.str(),
  XE = I.str(),
  kE = I.str(),
  ZE = I.str(),
  jE = I.str();
var u = {};
defineExportGetters(u, {
  CLAUDE_AX_PREPARK_MS: () => QE,
  CLAUDE_AX_SCREEN_READER: () => JE,
  CLAUDE_AX_STARTUP_QUIET_MS: () => zE,
  CLAUDE_CHROME_CLASSIFIER_FLOOR: () => $E,
  CLAUDE_CODE_ACCESSIBILITY: () => _e,
  CLAUDE_CODE_ACT_DONT_REDERIVE: () => re,
  CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: () => t_,
  CLAUDE_CODE_AMBER_ASTROLABE: () => Gr,
  CLAUDE_CODE_ARTIFACT_ASSETS: () => ue,
  CLAUDE_CODE_ARTIFACT_COMMENTS: () => Te,
  CLAUDE_CODE_ARTIFACT_COMMENTS_AUTOREACT: () => Le,
  CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK: () => Re,
  CLAUDE_CODE_ARTIFACT_COMMENT_FAST_ACK_FIXED: () => Se,
  CLAUDE_CODE_ARTIFACT_COMMENT_RESPONDER: () => pe,
  CLAUDE_CODE_ARTIFACT_DB: () => ie,
  CLAUDE_CODE_ARTIFACT_DELETE: () => Ue,
  CLAUDE_CODE_ARTIFACT_MULTI_FILE: () => Be,
  CLAUDE_CODE_ARTIFACT_OPEN_ACTION: () => Ne,
  CLAUDE_CODE_ARTIFACT_PIN: () => le,
  CLAUDE_CODE_ARTIFACT_PRESENCE: () => Me,
  CLAUDE_CODE_ARTIFACT_PREVIEW: () => xe,
  CLAUDE_CODE_ARTIFACT_ROOM: () => Pe,
  CLAUDE_CODE_ARTIFACT_TOOLSET: () => me,
  CLAUDE_CODE_ARTIFACT_TYPES: () => Ge,
  CLAUDE_CODE_ARTIFACT_TYPE_CATALOG: () => He,
  CLAUDE_CODE_ARTIFACT_TYPE_CLOUD_CREATE: () => de,
  CLAUDE_CODE_ARTIFACT_VERIFY: () => fe,
  CLAUDE_CODE_AUTO_CONNECT_IDE: () => Fe,
  CLAUDE_CODE_BASALT_COVE: () => s_,
  CLAUDE_CODE_BASH_OUTPUT_AUDIENCE_NOTE: () => De,
  CLAUDE_CODE_BASH_SANDBOX_SHOW_INDICATOR: () => Ke,
  CLAUDE_CODE_BG_TASKS_REPORT_RUNNING: () => L_,
  CLAUDE_CODE_BISON_CAIRN: () => Hr,
  CLAUDE_CODE_BREEZY_HORIZON: () => n_,
  CLAUDE_CODE_BUBBLEWRAP: () => ve,
  CLAUDE_CODE_CARVED_SLATE: () => ee,
  CLAUDE_CODE_CCR_EARLY_HYDRATE_PREFETCH: () => ge,
  CLAUDE_CODE_CCR_LAZY_SUBAGENT_HYDRATE: () => We,
  CLAUDE_CODE_CHILD_SESSION: () => ye,
  CLAUDE_CODE_CHROME_MCP_ORG_DENIED: () => Ye,
  CLAUDE_CODE_COLD_COMPACT: () => he,
  CLAUDE_CODE_COORDINATOR_FORCE_WORKER_INHERIT_MODEL: () => p_,
  CLAUDE_CODE_COWORK_FRAME_ARTIFACTS: () => i_,
  CLAUDE_CODE_COZY_TEAPOT: () => e_,
  CLAUDE_CODE_DAPPER_LAGOON: () => C_,
  CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING: () => x_,
  CLAUDE_CODE_DISABLE_ADMIN_ENV_UNION: () => I_,
  CLAUDE_CODE_DISABLE_ADVISOR_TOOL: () => N_,
  CLAUDE_CODE_DISABLE_AGENT_VIEW: () => l_,
  CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN: () => P_,
  CLAUDE_CODE_DISABLE_ARTIFACT: () => a_,
  CLAUDE_CODE_DISABLE_ATTACHMENTS: () => M_,
  CLAUDE_CODE_DISABLE_AUTO_MEMORY: () => u_,
  CLAUDE_CODE_DISABLE_BACKGROUND_TASKS: () => B_,
  CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_DEFAULT: () => m_,
  CLAUDE_CODE_DISABLE_BEDROCK_CONTENT_TYPE_GUARD: () => G_,
  CLAUDE_CODE_DISABLE_BG_EXIT_HANDOFF: () => H_,
  CLAUDE_CODE_DISABLE_BUNDLED_SKILLS: () => d_,
  CLAUDE_CODE_DISABLE_CFC_PROMPT: () => f_,
  CLAUDE_CODE_DISABLE_CLAUDE_API_SKILL: () => F_,
  CLAUDE_CODE_DISABLE_CLAUDE_CODE_SKILL: () => K_,
  CLAUDE_CODE_DISABLE_CLAUDE_MDS: () => v_,
  CLAUDE_CODE_DISABLE_CRON: () => W_,
  CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS: () => g_,
  CLAUDE_CODE_DISABLE_EXPLORE_PLAN_AGENTS: () => y_,
  CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY: () => Y_,
  CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING: () => h_,
  CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS: () => w_,
  CLAUDE_CODE_DISABLE_LAUNCH_COMPOSER: () => V_,
  CLAUDE_CODE_DISABLE_MCP_TASK_BACKGROUND: () => b_,
  CLAUDE_CODE_DISABLE_MEMORY_BULK_INFLATE: () => X_,
  CLAUDE_CODE_DISABLE_MEMORY_MASS_DELETE_HOLD: () => k_,
  CLAUDE_CODE_DISABLE_MEMORY_PERIODIC_RESYNC: () => Z_,
  CLAUDE_CODE_DISABLE_MEMORY_RO_UNSAVED_NOTICE: () => j_,
  CLAUDE_CODE_DISABLE_MEMORY_STREAM_LIST: () => J_,
  CLAUDE_CODE_DISABLE_MOUSE: () => $_,
  CLAUDE_CODE_DISABLE_MOUSE_CLICKS: () => q_,
  CLAUDE_CODE_DISABLE_NESTED_CHAIN_IDLE: () => tr,
  CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR: () => or,
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: () => Er,
  CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK: () => _r,
  CLAUDE_CODE_DISABLE_NOTIFICATION_PRESENCE_CHECK: () => rr,
  CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: () => er,
  CLAUDE_CODE_DISABLE_ORG_MEMORY: () => sr,
  CLAUDE_CODE_DISABLE_PERMISSION_PROMPT_NOTIFY_HOOKS: () => z_,
  CLAUDE_CODE_DISABLE_POLICY_SKILLS: () => nr,
  CLAUDE_CODE_DISABLE_PRECOMPACT_SKIP: () => Cr,
  CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK: () => Or,
  CLAUDE_CODE_DISABLE_TERMINAL_TITLE: () => cr,
  CLAUDE_CODE_DISABLE_THINKING: () => Lr,
  CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL: () => pr,
  CLAUDE_CODE_DISABLE_WORKFLOWS: () => Rr,
  CLAUDE_CODE_EDITOR_CODELIVERY: () => R_,
  CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT: () => ir,
  CLAUDE_CODE_ENABLE_AWAY_SUMMARY: () => Ir,
  CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH: () => Ur,
  CLAUDE_CODE_ENABLE_CFC: () => xr,
  CLAUDE_CODE_ENABLE_DESIGN_SYNC: () => Nr,
  CLAUDE_CODE_ENABLE_EXPERIMENTAL_ADVISOR_TOOL: () => lr,
  CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL: () => Pr,
  CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING: () => ar,
  CLAUDE_CODE_ENABLE_FUNCTION_HOOKS: () => hn,
  CLAUDE_CODE_ENABLE_LAUNCH_COMPOSER: () => Mr,
  CLAUDE_CODE_ENABLE_MENU_KIND_LANES: () => ur,
  CLAUDE_CODE_ENABLE_NARRATION: () => Yr,
  CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION: () => gr,
  CLAUDE_CODE_ENABLE_REFRESH_MCP_TOOLS: () => yr,
  CLAUDE_CODE_ENABLE_REMOTE_RECAP: () => hr,
  CLAUDE_CODE_ENABLE_SDK_FILE_CHECKPOINTING: () => wr,
  CLAUDE_CODE_ENABLE_TASKS: () => Vr,
  CLAUDE_CODE_ENABLE_TODO_TOOLS: () => Xr,
  CLAUDE_CODE_ENABLE_TOKEN_USAGE_ATTACHMENT: () => kr,
  CLAUDE_CODE_ENABLE_XAA: () => Zr,
  CLAUDE_CODE_EVAL_INTERVIEW_SESSION: () => bs,
  CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS: () => we,
  CLAUDE_CODE_EXPERIMENTAL_OBSERVER_AGENTS: () => Ve,
  CLAUDE_CODE_FLEETVIEW_SIMPLE: () => Br,
  CLAUDE_CODE_FORCE_MID_CONVERSATION_SYSTEM: () => Qe,
  CLAUDE_CODE_FORCE_SESSION_PERSISTENCE: () => Je,
  CLAUDE_CODE_FORCE_STRIKETHROUGH: () => ze,
  CLAUDE_CODE_FORCE_WINDOWS_CREDMAN: () => $e,
  CLAUDE_CODE_FORK_SUBAGENT: () => Xe,
  CLAUDE_CODE_FORWARD_SUBAGENT_TEXT: () => qe,
  CLAUDE_CODE_FORWARD_USER_INTENT: () => S_,
  CLAUDE_CODE_GAULT_KESTREL: () => fr,
  CLAUDE_CODE_GB_DISK_CACHE_WHEN_TELEMETRY_OFF: () => br,
  CLAUDE_CODE_GENTLE_PARASOL: () => __,
  CLAUDE_CODE_GLOB_HIDDEN: () => ke,
  CLAUDE_CODE_GLOB_NO_IGNORE: () => Ze,
  CLAUDE_CODE_GORSE_PLOVER: () => Fr,
  CLAUDE_CODE_HARBOR_KITE: () => jr,
  CLAUDE_CODE_HARBOR_KITE_CLOUD: () => zr,
  CLAUDE_CODE_HARBOR_KITE_PACING_OFF: () => Jr,
  CLAUDE_CODE_HIDE_CWD: () => je,
  CLAUDE_CODE_HOOKS_SAME_THREAD: () => Yn,
  CLAUDE_CODE_HOVER_REST: () => mr,
  CLAUDE_CODE_HUMBLE_HAMMOCK: () => D_,
  CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL: () => ts,
  CLAUDE_CODE_IDE_SKIP_VALID_CHECK: () => os,
  CLAUDE_CODE_INCLUDE_PARTIAL_MESSAGES: () => Es,
  CLAUDE_CODE_INTRO_FRAME: () => se,
  CLAUDE_CODE_JUNIPER_SUNDIAL: () => Wr,
  CLAUDE_CODE_KB_COHESION_FIXES: () => Ee,
  CLAUDE_CODE_LANTERN_PRISM: () => Qr,
  CLAUDE_CODE_LARCH_CISTERN: () => dr,
  CLAUDE_CODE_LUMINOUS_WHISTLE: () => A_,
  CLAUDE_CODE_MEMORY_PUSH_DELETE_MODE: () => Q_,
  CLAUDE_CODE_NANKEEN_KESTREL: () => U_,
  CLAUDE_CODE_NATIVE_CURSOR: () => _s,
  CLAUDE_CODE_NEW_INIT: () => rs,
  CLAUDE_CODE_NONBLOCKING_STDOUT: () => ss,
  CLAUDE_CODE_NO_FLICKER: () => es,
  CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE: () => ns,
  CLAUDE_CODE_PARCHMENT_FERN: () => Kr,
  CLAUDE_CODE_PEWTER_OWL: () => ys,
  CLAUDE_CODE_PEWTER_OWL_TOOL: () => Ys,
  CLAUDE_CODE_PLAN_MODE_REQUIRED: () => Cs,
  CLAUDE_CODE_PLUGIN_BINARY_ASSETS: () => Fs,
  CLAUDE_CODE_PLUGIN_DIR_WATCH: () => wn,
  CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE: () => fs,
  CLAUDE_CODE_PLUGIN_PREFER_HTTPS: () => vs,
  CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE: () => Ks,
  CLAUDE_CODE_POLISHED_DEWDROP: () => O_,
  CLAUDE_CODE_POLL_EVENTS: () => Os,
  CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY: () => Ws,
  CLAUDE_CODE_PROACTIVE: () => As,
  CLAUDE_CODE_PROMPT_CACHE_TTL: () => bn,
  CLAUDE_CODE_PROPAGATE_TRACEPARENT: () => gs,
  CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL: () => Ar,
  CLAUDE_CODE_REPORT_FINDINGS: () => Dr,
  CLAUDE_CODE_SEND_FEEDBACK: () => Tr,
  CLAUDE_CODE_SILENT_TURN_REMINDER: () => Ce,
  CLAUDE_CODE_SILENT_TURN_REMINDER_TEXT: () => Ae,
  CLAUDE_CODE_SILENT_TURN_REMINDER_TURNS: () => Oe,
  CLAUDE_CODE_SKILL_PROPOSALS: () => Ds,
  CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS: () => cs,
  CLAUDE_CODE_SKIP_PLUGIN_MCP_SERVERS_EXCEPT: () => Ts,
  CLAUDE_CODE_SKIP_PROJECT_BACKFILL: () => Ls,
  CLAUDE_CODE_SKIP_PROMPT_HISTORY: () => ps,
  CLAUDE_CODE_SKIP_REPO_UPLOAD: () => Rs,
  CLAUDE_CODE_STELLAR_DRIFT: () => c_,
  CLAUDE_CODE_SUBAGENT_CACHE_EVICT: () => Ss,
  CLAUDE_CODE_SUBAGENT_PROMPT_CACHE_TTL: () => mn,
  CLAUDE_CODE_SUPPRESS_SESSION_ATTRIBUTION: () => is,
  CLAUDE_CODE_SYNC_PLUGINS: () => Us,
  CLAUDE_CODE_SYNC_PLUGIN_INSTALL: () => Is,
  CLAUDE_CODE_SYNC_SKILLS: () => xs,
  CLAUDE_CODE_TAG_ISMETA_MESSAGES: () => Ns,
  CLAUDE_CODE_THINKING_DISPLAY_UPDATES: () => ce,
  CLAUDE_CODE_THISTLE_GREBE: () => o_,
  CLAUDE_CODE_THRIFTY_SONIC: () => r_,
  CLAUDE_CODE_TOASTY_THIMBLE: () => E_,
  CLAUDE_CODE_TODO_REMINDER_MODE: () => $r,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER: () => qr,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER_AFTER_USER_TURN: () => oe,
  CLAUDE_CODE_TOTAL_TOKENS_REMINDER_BUDGET: () => te,
  CLAUDE_CODE_TRANSCRIPT_LOCAL_GC: () => ls,
  CLAUDE_CODE_TURN_UPDATES: () => ne,
  CLAUDE_CODE_TWO_STAGE_CLASSIFIER: () => Ps,
  CLAUDE_CODE_USE_COWORK_PLUGINS: () => as,
  CLAUDE_CODE_USE_NATIVE_FILE_SEARCH: () => Ms,
  CLAUDE_CODE_USE_POWERSHELL_TOOL: () => us,
  CLAUDE_CODE_WALNUT_SPIRE: () => Bs,
  CLAUDE_CODE_WEBFETCH_CACHE_TTL_MS: () => Gs,
  CLAUDE_CODE_WEBFETCH_USE_CCR_PROXY: () => Hs,
  CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY: () => ds,
  CLAUDE_CODE_WEB_FETCH_AGENT: () => ms,
  CLAUDE_CODE_WILLOW_TERN: () => vr,
  CLAUDE_CODE_WISE_COMET: () => T_,
  CLAUDE_CODE_WORKFLOWS: () => Sr,
  CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS: () => js,
  CLAUDE_CODE_WORKFLOW_SIZE_WARNING_AGENTS: () => ks,
  CLAUDE_CODE_WORKFLOW_SIZE_WARNING_TOKENS: () => Zs,
  CLAUDE_DISABLE_ADOPT: () => hs,
  CLAUDE_IMPORT_CONVERSATIONS: () => ws,
  CLAUDE_RUNNER_DISABLE_AWAITING_ACTION_OVERRIDE: () => Vs,
  CLAUDE_WORKFLOW_NAME_ONLY: () => Xs,
  DISABLE_AUTOUPDATER: () => zs,
  DISABLE_AUTO_COMPACT: () => Js,
  DISABLE_BRIEF_MODE_STOP_HOOK: () => Qs,
  DISABLE_BUG_COMMAND: () => $s,
  DISABLE_COST_WARNINGS: () => qs,
  DISABLE_DOCTOR_COMMAND: () => tn,
  DISABLE_ERROR_REPORTING: () => on,
  DISABLE_EXTRA_USAGE_COMMAND: () => En,
  DISABLE_FEEDBACK_COMMAND: () => _n,
  DISABLE_GROWTHBOOK: () => rn,
  DISABLE_INSTALL_GITHUB_APP_COMMAND: () => en,
  DISABLE_INTERLEAVED_THINKING: () => sn,
  DISABLE_LOGIN_COMMAND: () => nn,
  DISABLE_LOGOUT_COMMAND: () => Cn,
  DISABLE_PROMPT_CACHING: () => On,
  DISABLE_PROMPT_CACHING_FABLE: () => Tn,
  DISABLE_PROMPT_CACHING_HAIKU: () => An,
  DISABLE_PROMPT_CACHING_MYTHOS: () => pn,
  DISABLE_PROMPT_CACHING_OPUS: () => Dn,
  DISABLE_PROMPT_CACHING_SONNET: () => cn,
  DISABLE_TELEMETRY: () => Rn,
  DISABLE_UPDATES: () => Sn,
  DISABLE_UPGRADE_COMMAND: () => In,
  EMBEDDED_SEARCH_TOOLS: () => gn,
  ENABLE_BETA_TRACING_DETAILED: () => Un,
  ENABLE_CLAUDEAI_MCP_SERVERS: () => xn,
  ENABLE_ENHANCED_TELEMETRY_BETA: () => Nn,
  ENABLE_LOCKLESS_UPDATES: () => ln,
  ENABLE_LSP_TOOL: () => Pn,
  ENABLE_MCP_LARGE_OUTPUT_FILES: () => an,
  ENABLE_PID_BASED_VERSION_LOCKING: () => Mn,
  ENABLE_PROMPT_CACHING_1H: () => un,
  ENABLE_PROMPT_CACHING_1H_BEDROCK: () => Bn,
  ENABLE_SESSION_BACKGROUNDING: () => Gn,
  ENABLE_SESSION_PERSISTENCE: () => Hn,
  ENABLE_TOOL_SEARCH: () => dn,
  FORCE_AUTOUPDATE_PLUGINS: () => fn,
  FORCE_CODE_TERMINAL: () => Fn,
  FORCE_PROMPT_CACHING_5M: () => Kn,
  FORCE_VCR: () => vn,
  INK_SCREEN_READER: () => qE,
  USE_API_CONTEXT_MANAGEMENT: () => yn,
});
var PROMPT_CACHE_TTL_VALUES = ["5m", "1h"];
var JE = I.triBool(),
  zE = I.int({ min: 0 }),
  QE = I.int({ min: 0 }),
  $E = I.triBool(),
  qE = I.bool(),
  t_ = I.bool(),
  o_ = I.str(),
  E_ = I.str(),
  __ = I.str(),
  r_ = I.triBool(),
  e_ = I.enum(["strict", "relaxed"]),
  s_ = I.bool(),
  n_ = I.str(),
  C_ = I.triBool(),
  O_ = I.enum(["drop", "block", "off"]),
  A_ = I.triBool(),
  D_ = I.triBool(),
  c_ = I.triBool(),
  T_ = I.triBool(),
  L_ = I.bool(),
  p_ = I.bool(),
  R_ = I.bool(),
  S_ = I.bool(),
  i_ = I.bool(),
  I_ = I.bool(),
  U_ = I.bool(),
  x_ = I.bool(),
  N_ = I.bool(),
  l_ = I.bool(),
  P_ = I.bool(),
  a_ = I.bool(),
  M_ = I.bool(),
  u_ = I.bool(),
  B_ = I.bool(),
  b_ = I.bool(),
  m_ = I.bool(),
  G_ = I.bool(),
  H_ = I.bool(),
  d_ = I.bool(),
  f_ = I.bool(),
  F_ = I.bool(),
  K_ = I.bool(),
  v_ = I.bool(),
  W_ = I.bool(),
  g_ = I.bool(),
  y_ = I.bool(),
  Y_ = I.bool(),
  h_ = I.bool(),
  w_ = I.triBool(),
  V_ = I.bool(),
  X_ = I.bool(),
  k_ = I.bool(),
  Z_ = I.bool(),
  j_ = I.bool(),
  J_ = I.bool(),
  z_ = I.bool(),
  Q_ = I.enum(["corroborate", "immediate", "never"]),
  $_ = I.triBool(),
  q_ = I.triBool(),
  tr = I.bool(),
  or = I.bool(),
  Er = I.bool(),
  _r = I.bool(),
  rr = I.bool(),
  er = I.bool(),
  sr = I.bool(),
  nr = I.bool(),
  Cr = I.bool(),
  Or = I.bool(),
  Ar = I.triBool(),
  Dr = I.bool(),
  cr = I.bool(),
  Tr = I.triBool(),
  Lr = I.bool(),
  pr = I.bool(),
  Rr = I.bool(),
  Sr = I.triBool(),
  ir = I.bool(),
  Ir = I.bool(),
  Ur = I.bool(),
  xr = I.triBool(),
  Nr = I.bool(),
  lr = I.bool(),
  Pr = I.bool(),
  ar = I.triBool(),
  Mr = I.bool(),
  ur = I.bool(),
  Br = I.bool(),
  br = I.bool(),
  mr = I.triBool(),
  Gr = I.bool(),
  Hr = I.triBool(),
  dr = I.bool(),
  fr = I.bool(),
  Fr = I.bool(),
  Kr = I.bool(),
  vr = I.bool(),
  Wr = I.int({ min: 1, digitsOnly: !0 }),
  gr = I.triBool(),
  yr = I.bool(),
  Yr = I.triBool(),
  hr = I.triBool(),
  wr = I.bool(),
  Vr = I.triBool(),
  Xr = I.bool(),
  kr = I.bool(),
  Zr = I.bool(),
  jr = I.str(),
  Jr = I.bool(),
  zr = I.bool(),
  Qr = I.bool(),
  $r = I.enum(["baseline", "off"]),
  qr = I.str(),
  te = I.int(),
  oe = I.triBool(),
  Ee = I.bool(),
  _e = I.bool(),
  re = I.triBool(),
  ee = I.triBool(),
  se = I.triBool(),
  ne = I.triBool(),
  Ce = I.triBool(),
  Oe = I.int({ min: 1 }),
  Ae = I.str(),
  De = I.triBool(),
  ce = I.triBool(),
  Te = I.triBool(),
  Le = I.triBool(),
  pe = I.triBool(),
  Re = I.triBool(),
  Se = I.triBool(),
  ie = I.triBool(),
  Ue = I.triBool(),
  xe = I.triBool(),
  Ne = I.triBool(),
  le = I.triBool(),
  Pe = I.triBool(),
  Me = I.triBool(),
  ue = I.triBool(),
  Be = I.triBool(),
  me = I.triBool(),
  Ge = I.triBool(),
  He = I.triBool(),
  de = I.triBool(),
  fe = I.triBool(),
  Fe = I.triBool(),
  Ke = I.bool(),
  ve = I.bool(),
  We = I.triBool(),
  ge = I.bool(),
  ye = I.bool(),
  Ye = I.bool(),
  he = I.bool(),
  we = I.bool(),
  Ve = I.bool(),
  Xe = I.triBool(),
  ke = I.bool(),
  Ze = I.bool(),
  je = I.bool(),
  Je = I.bool(),
  ze = I.bool(),
  Qe = I.bool(),
  $e = I.str(),
  qe = I.bool(),
  ts = I.bool(),
  os = I.bool(),
  Es = I.bool(),
  _s = I.bool(),
  rs = I.bool(),
  es = I.triBool(),
  ss = I.triBool(),
  ns = I.bool(),
  Cs = I.bool(),
  Os = I.bool(),
  As = I.bool(),
  Ds = I.bool(),
  cs = I.bool(),
  Ts = I.str(),
  Ls = I.bool(),
  ps = I.bool(),
  Rs = I.bool(),
  Ss = I.bool(),
  is = I.bool(),
  Is = I.bool(),
  Us = I.bool(),
  xs = I.bool(),
  Ns = I.bool(),
  ls = I.triBool(),
  Ps = I.bool(),
  as = I.bool(),
  Ms = I.bool(),
  us = I.triBool(),
  Bs = I.bool(),
  bs = I.bool(),
  ms = I.triBool(),
  Gs = I.int({ min: 1, digitsOnly: !0 }),
  Hs = I.bool(),
  ds = I.bool(),
  fs = I.bool(),
  Fs = I.bool(),
  Ks = I.bool(),
  vs = I.bool(),
  Ws = I.bool(),
  gs = I.bool(),
  ys = I.triBool(),
  Ys = I.triBool(),
  hs = I.bool(),
  ws = I.bool(),
  Vs = I.bool(),
  Xs = I.bool(),
  ks = I.int({ min: 1 }),
  Zs = I.int({ min: 1 }),
  js = I.int({ min: 0 }),
  Js = I.bool(),
  zs = I.bool(),
  Qs = I.bool(),
  $s = I.bool(),
  qs = I.bool(),
  tn = I.bool(),
  on = I.bool(),
  En = I.bool(),
  _n = I.bool(),
  rn = I.bool(),
  en = I.bool(),
  sn = I.bool(),
  nn = I.bool(),
  Cn = I.bool(),
  On = I.bool(),
  An = I.bool(),
  Dn = I.bool(),
  cn = I.bool(),
  Tn = I.bool(),
  pn = I.bool(),
  Rn = I.bool(),
  Sn = I.bool(),
  In = I.bool(),
  Un = I.bool(),
  xn = I.triBool(),
  Nn = I.bool(),
  ln = I.bool(),
  Pn = I.bool(),
  an = I.triBool(),
  Mn = I.triBool(),
  un = I.bool(),
  Bn = I.bool(),
  bn = I.enum(PROMPT_CACHE_TTL_VALUES),
  mn = I.enum(PROMPT_CACHE_TTL_VALUES),
  Gn = I.bool(),
  Hn = I.bool(),
  dn = I.str(),
  fn = I.bool(),
  Fn = I.bool(),
  Kn = I.bool(),
  vn = I.bool(),
  gn = I.bool(),
  yn = I.bool(),
  Yn = I.bool(),
  hn = I.triBool(),
  wn = I.triBool();
var b = {};
defineExportGetters(b, {
  ALACRITTY_LOG: () => iO,
  ANDROID_HOME: () => zC,
  ANDROID_SDK_ROOT: () => QC,
  APPDATA: () => UC,
  APP_URL: () => eD,
  AWS_CA_BUNDLE: () => vC,
  AWS_EXECUTION_ENV: () => ZA,
  AWS_LAMBDA_FUNCTION_NAME: () => kA,
  AZURE_FUNCTIONS_ENVIRONMENT: () => rD,
  BASH_ENV: () => zO,
  BAT_THEME: () => AD,
  BROWSER: () => nC,
  BUILDKITE: () => uA,
  BUN_CHROME_PATH: () => OD,
  BUN_CONFIG_FILE: () => qO,
  BUN_INSTALL: () => CD,
  CARGO_HOME: () => rA,
  CARGO_HTTP_CAINFO: () => gC,
  CF_PAGES: () => VA,
  CIRCLECI: () => MA,
  CLOUDSDK_CONFIG: () => oD,
  CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE: () => FC,
  CODER: () => HA,
  CODER_WORKSPACE_NAME: () => dA,
  CODESPACES: () => GA,
  COLORFGBG: () => oO,
  COLORTERM: () => tO,
  COMSPEC: () => $n,
  CONTAINER_SANDBOX_MOUNT_POINT: () => iC,
  CURL_CA_BUNDLE: () => fC,
  CURSOR_TRACE_ID: () => KO,
  ComSpec: () => tC,
  ConEmuANSI: () => bO,
  ConEmuPID: () => mO,
  ConEmuTask: () => GO,
  DAYTONA_WS_ID: () => KA,
  DEMO_VERSION: () => RD,
  DENO_CERT: () => WC,
  DENO_DEPLOYMENT_ID: () => XA,
  DISPLAY: () => CC,
  DOCKER_CONFIG: () => oA,
  DO_NOT_TRACK: () => EO,
  DYNO: () => wA,
  EDITOR: () => eC,
  FORCE_COLOR: () => qC,
  GCLOUD_PROJECT: () => zA,
  GCM_INTERACTIVE: () => VO,
  GH_CONFIG_DIR: () => jO,
  GH_ENTERPRISE_TOKEN: () => AA,
  GH_HOST: () => OA,
  GH_TOKEN: () => CA,
  GITHUB_ACTIONS: () => pA,
  GITHUB_ACTION_INPUTS: () => RA,
  GITHUB_ACTION_PATH: () => SA,
  GITHUB_ACTOR: () => iA,
  GITHUB_ACTOR_ID: () => IA,
  GITHUB_ENTERPRISE_TOKEN: () => cA,
  GITHUB_ENV: () => TA,
  GITHUB_EVENT_NAME: () => UA,
  GITHUB_EVENT_PATH: () => xA,
  GITHUB_REPOSITORY: () => NA,
  GITHUB_REPOSITORY_ID: () => lA,
  GITHUB_REPOSITORY_OWNER: () => PA,
  GITHUB_REPOSITORY_OWNER_ID: () => aA,
  GITHUB_TOKEN: () => DA,
  GITHUB_WORKSPACE: () => LA,
  GITLAB_CI: () => BA,
  GITPOD_WORKSPACE_ID: () => fA,
  GIT_ASKPASS: () => wO,
  GIT_CONFIG_COUNT: () => XO,
  GIT_CONFIG_GLOBAL: () => kO,
  GIT_CONFIG_NOSYSTEM: () => XC,
  GIT_CONFIG_SYSTEM: () => ZO,
  GIT_SSH_COMMAND: () => YO,
  GIT_SSL_CAINFO: () => VC,
  GIT_SSL_CAPATH: () => kC,
  GIT_TERMINAL_PROMPT: () => hO,
  GNOME_TERMINAL_SERVICE: () => RO,
  GNUPGHOME: () => sA,
  GOOGLE_APPLICATION_CREDENTIALS: () => QA,
  GOOGLE_CLOUD_PROJECT: () => JA,
  GOOGLE_CLOUD_WORKSTATIONS: () => FA,
  GRADLE_USER_HOME: () => nA,
  GRPC_DEFAULT_SSL_ROOTS_FILE_PATH: () => YC,
  HEX_CACERTS_PATH: () => wC,
  HISTFILE: () => BC,
  HOME: () => Vn,
  HTTPLIB2_CA_CERTS: () => KC,
  INTELLIJ_TERMINAL_COMMAND_BLOCKS: () => HO,
  INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: () => dO,
  IS_DEMO: () => pD,
  IS_SANDBOX: () => LD,
  ITERM_SESSION_ID: () => cO,
  JAVA_HOME: () => jC,
  JAVA_TOOL_OPTIONS: () => JC,
  KITTY_WINDOW_ID: () => TO,
  KONSOLE_VERSION: () => LO,
  KUBECONFIG: () => tA,
  KUBERNETES_SERVICE_HOST: () => nD,
  K_SERVICE: () => jA,
  LANG: () => AC,
  LC_ALL: () => DC,
  LC_TERMINAL: () => sO,
  LC_TIME: () => cC,
  LOCALAPPDATA: () => xC,
  MSYSTEM: () => BO,
  NETLIFY: () => hA,
  NIX_SSL_CERT_FILE: () => hC,
  NODE_EXTRA_CA_CERTS: () => mC,
  NODE_OPTIONS: () => bC,
  NO_COLOR: () => $C,
  NPM_CONFIG_GLOBALCONFIG: () => $O,
  NPM_CONFIG_USERCONFIG: () => QO,
  NoDefaultCurrentDirectoryInExePath: () => rC,
  P4PORT: () => DD,
  PATH: () => Xn,
  PATHEXT: () => _C,
  PIP_CERT: () => yC,
  PIP_CONFIG_FILE: () => EA,
  PLAYWRIGHT_BROWSERS_PATH: () => cD,
  PREFIX: () => Zn,
  PROJECT_DOMAIN: () => gA,
  PWD: () => kn,
  PYTHONSTARTUP: () => _A,
  ProgramFiles: () => EC,
  RENDER: () => YA,
  REPL_ID: () => vA,
  REPL_SLUG: () => WA,
  REQUESTS_CA_BUNDLE: () => dC,
  RUNNER_ENVIRONMENT: () => mA,
  RUNNER_OS: () => bA,
  RUSTUP_HOME: () => eA,
  SAFEUSER: () => NC,
  SESSIONNAME: () => UO,
  SHELL: () => Qn,
  SPACE_CREATOR_USER_ID: () => sD,
  SSH_AUTH_SOCK: () => yO,
  SSH_CLIENT: () => vO,
  SSH_CONNECTION: () => WO,
  SSH_TTY: () => gO,
  SSL_CERT_DIR: () => HC,
  SSL_CERT_FILE: () => GC,
  STY: () => xO,
  SUDO_GID: () => pC,
  SUDO_UID: () => LC,
  SUDO_USER: () => RC,
  SYSTEMROOT: () => qn,
  SystemRoot: () => oC,
  TEMP: () => zn,
  TERM: () => _O,
  TERMINAL: () => nO,
  TERMINAL_EMULATOR: () => CO,
  TERMINATOR_UUID: () => OO,
  TERMUX_VERSION: () => AO,
  TERM_PROGRAM: () => rO,
  TERM_PROGRAM_VERSION: () => eO,
  TILIX_ID: () => DO,
  TMP: () => Jn,
  TMPDIR: () => jn,
  TMUX: () => NO,
  TMUX_PANE: () => lO,
  TRACEPARENT: () => SD,
  TRACESTATE: () => iD,
  USER: () => TC,
  USERNAME: () => SC,
  USERPROFILE: () => IC,
  USE_BUILTIN_RIPGREP: () => TD,
  UV_THREADPOOL_SIZE: () => ZC,
  VERCEL: () => yA,
  VISUAL: () => sC,
  VSCODE_GIT_ASKPASS_MAIN: () => FO,
  VTE_VERSION: () => SO,
  WAYLAND_DISPLAY: () => OC,
  WEBSITE_SITE_NAME: () => ED,
  WEBSITE_SKU: () => _D,
  WSL_DISTRO_NAME: () => MO,
  WSL_INTEROP: () => uO,
  WT_SESSION: () => IO,
  XDG_CACHE_HOME: () => MC,
  XDG_CONFIG_HOME: () => PC,
  XDG_DATA_HOME: () => aC,
  XDG_RUNTIME_DIR: () => lC,
  XDG_STATE_HOME: () => uC,
  XTERM_VERSION: () => pO,
  ZDOTDIR: () => JO,
  ZED_TERM: () => aO,
  ZELLIJ: () => PO,
  __CFBundleIdentifier: () => fO,
  gcloud_project: () => $A,
  google_application_credentials: () => tD,
  google_cloud_project: () => qA,
});
var Vn = I.str(),
  Xn = I.str(),
  kn = I.str(),
  Zn = I.str(),
  jn = I.str(),
  Jn = I.str(),
  zn = I.str(),
  Qn = I.str(),
  $n = I.str(),
  qn = I.str(),
  tC = I.str(),
  oC = I.str(),
  EC = I.str(),
  _C = I.str(),
  rC = I.str(),
  eC = I.str(),
  sC = I.str(),
  nC = I.str(),
  CC = I.str(),
  OC = I.str(),
  AC = I.str(),
  DC = I.str(),
  cC = I.str(),
  TC = I.str(),
  LC = I.int({ min: 0, digitsOnly: !0 }),
  pC = I.int({ min: 0, digitsOnly: !0 }),
  RC = I.str(),
  SC = I.str(),
  iC = I.str(),
  IC = I.str(),
  UC = I.str(),
  xC = I.str(),
  NC = I.str(),
  lC = I.str(),
  PC = I.str(),
  aC = I.str(),
  MC = I.str(),
  uC = I.str(),
  BC = I.str(),
  bC = I.str(),
  mC = I.str(),
  GC = I.str(),
  HC = I.str(),
  dC = I.str(),
  fC = I.str(),
  FC = I.str(),
  KC = I.str(),
  vC = I.str(),
  WC = I.str(),
  gC = I.str(),
  yC = I.str(),
  YC = I.str(),
  hC = I.str(),
  wC = I.str(),
  VC = I.str(),
  XC = I.str(),
  kC = I.str(),
  ZC = I.str(),
  jC = I.str(),
  JC = I.str(),
  zC = I.str(),
  QC = I.str(),
  $C = I.rawStr(),
  qC = I.rawStr(),
  tO = I.str(),
  oO = I.str(),
  EO = I.str(),
  _O = I.str(),
  rO = I.str(),
  eO = I.str(),
  sO = I.str(),
  nO = I.str(),
  CO = I.str(),
  OO = I.str(),
  AO = I.str(),
  DO = I.str(),
  cO = I.str(),
  TO = I.str(),
  LO = I.str(),
  pO = I.str(),
  RO = I.str(),
  SO = I.str(),
  iO = I.str(),
  IO = I.str(),
  UO = I.str(),
  xO = I.str(),
  NO = I.str(),
  lO = I.str(),
  PO = I.str(),
  aO = I.str(),
  MO = I.str(),
  uO = I.str(),
  BO = I.str(),
  bO = I.str(),
  mO = I.str(),
  GO = I.str(),
  HO = I.str(),
  dO = I.str(),
  fO = I.str(),
  FO = I.str(),
  KO = I.rawStr(),
  vO = I.str(),
  WO = I.str(),
  gO = I.str(),
  yO = I.str(),
  YO = I.str(),
  hO = I.str(),
  wO = I.str(),
  VO = I.str(),
  XO = I.str(),
  kO = I.str(),
  ZO = I.str(),
  jO = I.str(),
  JO = I.str(),
  zO = I.str(),
  QO = I.str(),
  $O = I.str(),
  qO = I.str(),
  tA = I.str(),
  oA = I.str(),
  EA = I.str(),
  _A = I.str(),
  rA = I.str(),
  eA = I.str(),
  sA = I.str(),
  nA = I.str(),
  CA = I.str(),
  OA = I.str(),
  AA = I.str(),
  DA = I.str(),
  cA = I.str(),
  TA = I.str(),
  LA = I.str(),
  pA = I.str(),
  RA = I.rawStr(),
  SA = I.str(),
  iA = I.str(),
  IA = I.str(),
  UA = I.str(),
  xA = I.str(),
  NA = I.str(),
  lA = I.str(),
  PA = I.str(),
  aA = I.str(),
  MA = I.str(),
  uA = I.str(),
  BA = I.str(),
  bA = I.str(),
  mA = I.str(),
  GA = I.str(),
  HA = I.str(),
  dA = I.str(),
  fA = I.str(),
  FA = I.str(),
  KA = I.str(),
  vA = I.str(),
  WA = I.str(),
  gA = I.str(),
  yA = I.str(),
  YA = I.str(),
  hA = I.str(),
  wA = I.str(),
  VA = I.str(),
  XA = I.str(),
  kA = I.str(),
  ZA = I.str(),
  jA = I.str(),
  JA = I.str(),
  zA = I.str(),
  QA = I.str(),
  $A = I.str(),
  qA = I.str(),
  tD = I.str(),
  oD = I.str(),
  ED = I.str(),
  _D = I.str(),
  rD = I.str(),
  eD = I.str(),
  sD = I.str(),
  nD = I.str(),
  CD = I.str(),
  OD = I.str(),
  AD = I.str(),
  DD = I.str(),
  cD = I.str(),
  TD = I.str(),
  LD = I.str(),
  pD = I.str(),
  RD = I.str(),
  SD = I.str(),
  iD = I.str();
var m = {};
defineExportGetters(m, {
  AI_AGENT: () => nL,
  ALLOW_ANT_COMPUTER_USE_MCP: () => CL,
  ANTHROPIC_CONFIG_DIR: () => ID,
  BASH_MAX_OUTPUT_LENGTH: () => Mp,
  CCR_SESSION_PROFILE: () => OL,
  CLAUBBIT: () => AL,
  CLAUDECODE: () => DL,
  CLAUDE_AFK_COUNTDOWN_MS: () => up,
  CLAUDE_AFK_TIMEOUT_MS: () => Bp,
  CLAUDE_AFTER_LAST_COMPACT: () => UD,
  CLAUDE_AGENTS_SELECT: () => xD,
  CLAUDE_AGENT_SDK_CLIENT_APP: () => ND,
  CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS: () => cL,
  CLAUDE_AGENT_SDK_MCP_NO_PREFIX: () => TL,
  CLAUDE_AGENT_SDK_VERSION: () => lD,
  CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS: () => bp,
  CLAUDE_AUTOCOMPACT_PCT_OVERRIDE: () => PD,
  CLAUDE_AUTO_BACKGROUND_TASKS: () => LL,
  CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR: () => pL,
  CLAUDE_BG_AUTH_SNAPSHOT_PATH: () => aD,
  CLAUDE_BG_BACKEND: () => MD,
  CLAUDE_BG_CLAIM_AUTH: () => uD,
  CLAUDE_BG_DISPATCHER_RATE_LIMIT_TIER: () => BD,
  CLAUDE_BG_DISPATCHER_SUBSCRIPTION_TYPE: () => bD,
  CLAUDE_BG_ISOLATION: () => mD,
  CLAUDE_BG_MEMORY_TOGGLED_OFF: () => GD,
  CLAUDE_BG_POST_CLEAR_RESPAWN: () => HD,
  CLAUDE_BG_PTY_AUTH: () => dD,
  CLAUDE_BG_RENDEZVOUS_SOCK: () => fD,
  CLAUDE_BG_RV_AUTH: () => FD,
  CLAUDE_BG_SESSION_PERMISSION_RULES: () => KD,
  CLAUDE_BG_SOCKET_TOKENS_PATH: () => vD,
  CLAUDE_BG_SOURCE: () => WD,
  CLAUDE_BG_STARTUP_WEDGE_MS: () => mp,
  CLAUDE_BG_TCC_DISCLAIMED: () => gD,
  CLAUDE_BRIDGE_BASE_URL: () => yD,
  CLAUDE_BRIDGE_OAUTH_TOKEN: () => YD,
  CLAUDE_BRIDGE_REATTACH_GROUPING: () => hD,
  CLAUDE_BRIDGE_REATTACH_NO_BACKFILL: () => RL,
  CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY: () => SL,
  CLAUDE_BRIDGE_REATTACH_OWNER_ACCT: () => wD,
  CLAUDE_BRIDGE_REATTACH_OWNER_ORG: () => VD,
  CLAUDE_BRIDGE_REATTACH_SEQ: () => Gp,
  CLAUDE_BRIDGE_REATTACH_SESSION: () => XD,
  CLAUDE_BRIDGE_SESSION_INGRESS_URL: () => kD,
  CLAUDE_CHROME_PERMISSION_MODE: () => ZD,
  CLAUDE_CLIENT_PRESENCE_FILE: () => jD,
  CLAUDE_CODE_ACTION: () => JD,
  CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD: () => zD,
  CLAUDE_CODE_ADDITIONAL_PROTECTION: () => iL,
  CLAUDE_CODE_ADOPT_UNDERIVABLE_PARKED_PERMISSION: () => _p,
  CLAUDE_CODE_AGENT: () => QD,
  CLAUDE_CODE_ARTIFACT: () => $D,
  CLAUDE_CODE_ARTIFACTS_API_BASE_URL: () => tc,
  CLAUDE_CODE_ARTIFACTS_API_TOKEN: () => oc,
  CLAUDE_CODE_ARTIFACT_ASSET_BASE_URL: () => Ec,
  CLAUDE_CODE_ARTIFACT_AUTO_OPEN: () => qD,
  CLAUDE_CODE_ARTIFACT_LIVE_BASE_URL: () => _c,
  CLAUDE_CODE_ARTIFACT_SYNC_BASE_URL: () => rc,
  CLAUDE_CODE_ARTIFACT_VIEWER_BASE_URL: () => ec,
  CLAUDE_CODE_AUTO_BACKGROUND_WORKER_CHECKIN_SECONDS: () => Hp,
  CLAUDE_CODE_AUTO_COMPACT_WINDOW: () => sc,
  CLAUDE_CODE_AUTO_MODE_EXTERNAL_PERMISSIONS: () => IL,
  CLAUDE_CODE_BASE_REF: () => nc,
  CLAUDE_CODE_BASE_REFS: () => Cc,
  CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE: () => Oc,
  CLAUDE_CODE_BRIDGE_MCP_CARRIER: () => Ac,
  CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID: () => Dc,
  CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID: () => cc,
  CLAUDE_CODE_BRIDGE_PROMPT_SHA256: () => Tc,
  CLAUDE_CODE_BRIDGE_SESSION_ID: () => Lc,
  CLAUDE_CODE_BRIEF: () => UL,
  CLAUDE_CODE_BRIEF_UPLOAD: () => xL,
  CLAUDE_CODE_CCR_SURFACE: () => QL,
  CLAUDE_CODE_CLASSIFIER_SUMMARY: () => pc,
  CLAUDE_CODE_CONTAINER_ID: () => Rc,
  CLAUDE_CODE_COORDINATOR_WORKER_CHECKIN_SECONDS: () => dp,
  CLAUDE_CODE_DAEMON_COLD_START: () => NL,
  CLAUDE_CODE_DECSTBM: () => Sc,
  CLAUDE_CODE_DEV_RAW_CHANGELOG_URL: () => ic,
  CLAUDE_CODE_DIR_SYNC_DISABLE_ANCHORING: () => Ic,
  CLAUDE_CODE_DIR_SYNC_ENGINE: () => lc,
  CLAUDE_CODE_DIR_SYNC_FFWD: () => Pc,
  CLAUDE_CODE_DIR_SYNC_GIT: () => Nc,
  CLAUDE_CODE_DIR_SYNC_STREAM: () => ac,
  CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP: () => lL,
  CLAUDE_CODE_DISABLE_DIR_SYNC: () => xc,
  CLAUDE_CODE_DISABLE_HOOK_FORWARDING: () => Mc,
  CLAUDE_CODE_DISABLE_PLUGIN_FORWARDING: () => uc,
  CLAUDE_CODE_DISABLE_VITALS_EMITTER: () => Bc,
  CLAUDE_CODE_DISABLE_WORKING_SYNC: () => mc,
  CLAUDE_CODE_DONT_INHERIT_ENV: () => PL,
  CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING: () => Gc,
  CLAUDE_CODE_EMIT_SESSION_STATE_EVENTS: () => aL,
  CLAUDE_CODE_EMIT_TOOL_USE_SUMMARIES: () => ML,
  CLAUDE_CODE_ENTRYPOINT: () => Hc,
  CLAUDE_CODE_ENVIRONMENT_KIND: () => dc,
  CLAUDE_CODE_ENVIRONMENT_RUNNER_VERSION: () => fc,
  CLAUDE_CODE_EVAL_CONFINED: () => kL,
  CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER: () => uL,
  CLAUDE_CODE_EXIT_AFTER_STOP_DELAY: () => fp,
  CLAUDE_CODE_FORCE_BRIDGE: () => BL,
  CLAUDE_CODE_FORCE_EVALUATE_MEMORY: () => bL,
  CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL: () => mL,
  CLAUDE_CODE_FORCE_MEMORY_SURVEY: () => GL,
  CLAUDE_CODE_FORCE_TIP_ID: () => Fc,
  CLAUDE_CODE_GIT_BASH_PATH: () => Kc,
  CLAUDE_CODE_GLOB_TIMEOUT_SECONDS: () => Fp,
  CLAUDE_CODE_GOAL_CHECKIN_MINUTES: () => Kp,
  CLAUDE_CODE_HIDE_SETTINGS_HINT: () => vc,
  CLAUDE_CODE_HOLD_REPORT_PARK_AT_INIT: () => sp,
  CLAUDE_CODE_HOLD_UNANSWERED_PARKED_PERMISSION: () => Ep,
  CLAUDE_CODE_HOME_SEED_HOLD_TIMEOUT_MS: () => Wc,
  CLAUDE_CODE_HOME_SEED_VERDICT_TIMEOUT_MS: () => gc,
  CLAUDE_CODE_HOST_PLATFORM: () => yc,
  CLAUDE_CODE_IDE_HOST_OVERRIDE: () => Yc,
  CLAUDE_CODE_IDLE_THRESHOLD_MINUTES: () => vp,
  CLAUDE_CODE_IDLE_TOKEN_THRESHOLD: () => Wp,
  CLAUDE_CODE_IS_COWORK: () => HL,
  CLAUDE_CODE_LEGACY_BUNDLE: () => Uc,
  CLAUDE_CODE_LOOP_KEEPALIVE: () => dL,
  CLAUDE_CODE_LOOP_PERSISTENT: () => fL,
  CLAUDE_CODE_MANAGED_SETTINGS_PATH: () => hc,
  CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS: () => gp,
  CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH: () => yp,
  CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION: () => Yp,
  CLAUDE_CODE_MCP_ALLOWLIST_ENV: () => wc,
  CLAUDE_CODE_MCP_AUTO_BACKGROUND_MS: () => aR,
  CLAUDE_CODE_MCP_MEMORY_CGROUP: () => Sp,
  CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT: () => PR,
  CLAUDE_CODE_MOCK_REMOTE_SETTINGS: () => FL,
  CLAUDE_CODE_MOCK_TRIAL: () => KL,
  CLAUDE_CODE_OVERRIDE_DATE: () => Vc,
  CLAUDE_CODE_PARKED_PERMISSION_WAIT_MS: () => tp,
  CLAUDE_CODE_PARKED_STOP_RETIRES: () => ep,
  CLAUDE_CODE_PERFORCE_MODE: () => Xc,
  CLAUDE_CODE_PLAN_V2_AGENT_COUNT: () => hp,
  CLAUDE_CODE_PLAN_V2_EXPLORE_AGENT_COUNT: () => wp,
  CLAUDE_CODE_PLUGIN_ATTRIBUTION: () => kc,
  CLAUDE_CODE_PLUGIN_CACHE_DIR: () => Zc,
  CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS: () => Vp,
  CLAUDE_CODE_PLUGIN_SEED_DIR: () => jc,
  CLAUDE_CODE_POWERUP_ONBOARDING: () => Jc,
  CLAUDE_CODE_PROJECT_DIR_NAME: () => zc,
  CLAUDE_CODE_PWSH_PARSE_TIMEOUT_MS: () => Xp,
  CLAUDE_CODE_QUESTION_EXTENDED: () => $c,
  CLAUDE_CODE_QUESTION_PREVIEW_FORMAT: () => Qc,
  CLAUDE_CODE_RELAUNCH_TERMINAL_SIZE: () => qc,
  CLAUDE_CODE_REMOTE: () => vL,
  CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE: () => tT,
  CLAUDE_CODE_REMOTE_HERMETIC_MODE: () => WL,
  CLAUDE_CODE_REMOTE_MEMORY_DIR: () => oT,
  CLAUDE_CODE_REMOTE_RAW_EVENTS_FILE: () => ET,
  CLAUDE_CODE_REMOTE_SEND_KEEPALIVES: () => gL,
  CLAUDE_CODE_REMOTE_SESSION_ID: () => _T,
  CLAUDE_CODE_REMOTE_SESSION_ORIGIN: () => rT,
  CLAUDE_CODE_REMOTE_SETTINGS_PATH: () => eT,
  CLAUDE_CODE_REMOTE_SETTINGS_POLL_MS: () => kp,
  CLAUDE_CODE_REPL: () => yL,
  CLAUDE_CODE_REPO_CHECKOUTS: () => sT,
  CLAUDE_CODE_RESTRICTED: () => YL,
  CLAUDE_CODE_RESUME_FROM_SESSION: () => nT,
  CLAUDE_CODE_RESUME_INTERRUPTED_TURN: () => hL,
  CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS: () => VL,
  CLAUDE_CODE_RESUME_PROMPT: () => CT,
  CLAUDE_CODE_RESUME_SOURCE_ALIVE: () => wL,
  CLAUDE_CODE_RESUME_THRESHOLD_MINUTES: () => Zp,
  CLAUDE_CODE_RESUME_TOKEN_THRESHOLD: () => jp,
  CLAUDE_CODE_RESUME_TOLERATES_CONTEXT_APPENDS: () => rp,
  CLAUDE_CODE_RETIRE_UNANSWERED_PARKED_PERMISSION: () => op,
  CLAUDE_CODE_SAFE_MODE: () => XL,
  CLAUDE_CODE_SANDBOXED: () => ZL,
  CLAUDE_CODE_SCRIPT_CAPS: () => Jp,
  CLAUDE_CODE_SCROLL_SPEED: () => OT,
  CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS: () => zp,
  CLAUDE_CODE_SESSION_ID: () => AT,
  CLAUDE_CODE_SESSION_KIND: () => DT,
  CLAUDE_CODE_SESSION_NAME: () => cT,
  CLAUDE_CODE_SESSION_ORIGIN: () => TT,
  CLAUDE_CODE_SHELL: () => LT,
  CLAUDE_CODE_SHELL_PREFIX: () => pT,
  CLAUDE_CODE_SIMPLE: () => jL,
  CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT: () => RT,
  CLAUDE_CODE_SKILL_ATTRIBUTION: () => ST,
  CLAUDE_CODE_SPAWN_TIMESTAMP_MS: () => Qp,
  CLAUDE_CODE_SSE_PORT: () => $p,
  CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING: () => iT,
  CLAUDE_CODE_STOP_HOOK_BLOCK_CAP: () => qp,
  CLAUDE_CODE_SUBPROCESS_ENV_SCRUB: () => JL,
  CLAUDE_CODE_SUPERVISED: () => zL,
  CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD: () => $L,
  CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS: () => qL,
  CLAUDE_CODE_SYNC_PLUGINS_INSTALL_TIMEOUT_MS: () => oR,
  CLAUDE_CODE_SYNC_PLUGINS_MCP_TIMEOUT_MS: () => ER,
  CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS: () => tR,
  CLAUDE_CODE_SYNC_SESSION_REFS: () => np,
  CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS: () => _R,
  CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS: () => rR,
  CLAUDE_CODE_SYNTAX_HIGHLIGHT: () => Cp,
  CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE: () => IT,
  CLAUDE_CODE_TAGS: () => UT,
  CLAUDE_CODE_TASK_LIST_ID: () => NT,
  CLAUDE_CODE_TEAM_TEARDOWN_PARK_TIMEOUT_MS: () => eR,
  CLAUDE_CODE_TERMINAL_MCP_TOOLS: () => xT,
  CLAUDE_CODE_TEST_ALLOW_REAL_NETWORK: () => Op,
  CLAUDE_CODE_TEST_FIXTURES_ROOT: () => lT,
  CLAUDE_CODE_TEST_FORCE_DENY: () => Ap,
  CLAUDE_CODE_TEST_NO_GIT_BASH: () => Dp,
  CLAUDE_CODE_TEST_NO_PWSH: () => cp,
  CLAUDE_CODE_TMPDIR: () => PT,
  CLAUDE_CODE_TMUX_PREFIX: () => aT,
  CLAUDE_CODE_TMUX_PREFIX_CONFLICTS: () => Tp,
  CLAUDE_CODE_TMUX_SESSION: () => MT,
  CLAUDE_CODE_TMUX_TRUECOLOR: () => Lp,
  CLAUDE_CODE_TOOL_MEMORY_CGROUP_EXCLUDE: () => pp,
  CLAUDE_CODE_TOOL_MEMORY_LIMIT: () => Rp,
  CLAUDE_CODE_TRIGGER_ID: () => uT,
  CLAUDE_CODE_TUI_JUST_SWITCHED: () => ip,
  CLAUDE_CODE_TUI_TRIAL: () => Ip,
  CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE: () => BT,
  CLAUDE_CODE_ULTRAREVIEW_QUOTA_FIXTURE: () => bT,
  CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS: () => sR,
  CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED: () => Up,
  CLAUDE_CODE_WORKER_EPOCH: () => nR,
  CLAUDE_CODE_WORKSPACE_HOST_PATHS: () => mT,
  CLAUDE_CONFIG_DIR: () => GT,
  CLAUDE_COWORK_MEMORY_EXTRA_GUIDELINES: () => HT,
  CLAUDE_COWORK_MEMORY_GUIDELINES: () => dT,
  CLAUDE_COWORK_MEMORY_INDEX_CONTENT: () => fT,
  CLAUDE_COWORK_MEMORY_PATH_OVERRIDE: () => FT,
  CLAUDE_ENV_FILE: () => KT,
  CLAUDE_FORCE_DISPLAY_SURVEY: () => xp,
  CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME: () => vT,
  CLAUDE_INTERNAL_FC_OVERRIDES: () => WT,
  CLAUDE_JOB_DIR: () => gT,
  CLAUDE_MEMORY_STORES: () => yT,
  CLAUDE_PROJECT_UUID: () => YT,
  CLAUDE_PTY_HEARTBEAT_MS: () => CR,
  CLAUDE_PTY_HOST_EXEC: () => hT,
  CLAUDE_PTY_ORPHAN_CHECK_MS: () => OR,
  CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX: () => wT,
  CLAUDE_REMOTE_WORKFLOW_ARGS: () => VT,
  CLAUDE_REMOTE_WORKFLOW_SCRIPT: () => XT,
  CLAUDE_REPL_VARIANT: () => kT,
  CLAUDE_RUNNER_ACTIVITY_FD: () => AR,
  CLAUDE_RUNNER_FETCH_DEPTH: () => ZT,
  CLAUDE_SECURESTORAGE_CONFIG_DIR: () => jT,
  CLAUDE_SERVE_DRAIN_TIMEOUT_MS: () => DR,
  CLAUDE_SNIP: () => JT,
  CLAUDE_SSH_LOCAL_BINARY: () => zT,
  CLAUDE_SSH_VERSION: () => QT,
  CLAUDE_STAGE_FILE_ROOT: () => $T,
  CLAUDE_TMPDIR: () => qT,
  LOCAL_BRIDGE: () => Np,
  MCP_CONNECTION_NONBLOCKING: () => lp,
  MCP_CONNECT_TIMEOUT_MS: () => cR,
  MCP_DISCOVERY_CACHE: () => TR,
  MCP_DISCOVERY_CACHE_MAX_STALE_S: () => LR,
  MCP_DISCOVERY_CACHE_STRIKES: () => pR,
  MCP_DISCOVERY_CACHE_TTL_S: () => RR,
  MCP_OAUTH_CALLBACK_PORT: () => SR,
  MCP_OAUTH_CLIENT_METADATA_URL: () => tL,
  MCP_PROTOCOL_NEGOTIATION: () => iR,
  MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE: () => IR,
  MCP_SDK_GENERATION: () => xR,
  MCP_SERVER_CONNECTION_BATCH_SIZE: () => UR,
  MCP_TIMEOUT: () => NR,
  MCP_TOOL_TIMEOUT: () => lR,
  MCP_TRUNCATION_PROMPT_OVERRIDE: () => oL,
  SDK_NATIVE_BIN: () => EL,
  SESSION_INGRESS_URL: () => _L,
  SLASH_COMMAND_TOOL_CHAR_BUDGET: () => MR,
  TASK_MAX_OUTPUT_LENGTH: () => uR,
  TEST_ENABLE_SESSION_PERSISTENCE: () => Pp,
  ULTRAPLAN_PROMPT_FILE: () => rL,
  VCR_RECORD: () => ap,
  VITALS_EMITTER_BIN: () => eL,
  VOICE_STREAM_BASE_URL: () => sL,
});
var ID = I.str(),
  UD = I.str(),
  xD = I.str(),
  ND = I.str(),
  lD = I.str(),
  PD = I.str(),
  aD = I.str(),
  MD = I.str(),
  uD = I.str(),
  BD = I.str(),
  bD = I.str(),
  mD = I.str(),
  GD = I.str(),
  HD = I.bool(),
  dD = I.str(),
  fD = I.str(),
  FD = I.str(),
  KD = I.str(),
  vD = I.str(),
  WD = I.str(),
  gD = I.str(),
  yD = I.str(),
  YD = I.str(),
  hD = I.str(),
  wD = I.str(),
  VD = I.str(),
  XD = I.str(),
  kD = I.str(),
  ZD = I.str(),
  jD = I.str(),
  JD = I.str(),
  zD = I.str(),
  QD = I.str(),
  $D = I.str(),
  qD = I.str(),
  tc = I.str(),
  oc = I.str(),
  Ec = I.str(),
  _c = I.str(),
  rc = I.str(),
  ec = I.str(),
  sc = I.str(),
  nc = I.str(),
  Cc = I.str(),
  Oc = I.str(),
  Ac = I.enum(["1", "spent"]),
  Dc = I.str(),
  cc = I.str(),
  Tc = I.str(),
  Lc = I.str(),
  pc = I.str(),
  Rc = I.str(),
  Sc = I.str(),
  ic = I.str(),
  Ic = I.bool(),
  Uc = I.bool(),
  xc = I.bool(),
  Nc = I.bool(),
  lc = I.str(),
  Pc = I.str(),
  ac = I.str(),
  Mc = I.bool(),
  uc = I.bool(),
  Bc = I.bool(),
  mc = I.bool(),
  Gc = I.str(),
  Hc = I.str(),
  dc = I.str(),
  fc = I.str(),
  Fc = I.str(),
  Kc = I.str(),
  vc = I.str(),
  Wc = I.int({ min: 0 }),
  gc = I.int({ min: 0 }),
  yc = I.str(),
  Yc = I.str(),
  hc = I.str(),
  wc = I.str(),
  Vc = I.str(),
  Xc = I.str(),
  kc = I.str(),
  Zc = I.str(),
  jc = I.str(),
  Jc = I.str(),
  zc = I.str(),
  Qc = I.str(),
  $c = I.bool(),
  qc = I.str(),
  tT = I.str(),
  oT = I.str(),
  ET = I.str(),
  _T = I.str(),
  rT = I.str(),
  eT = I.str(),
  sT = I.str(),
  nT = I.str(),
  CT = I.str(),
  OT = I.str(),
  AT = I.str(),
  DT = I.str(),
  cT = I.str(),
  TT = I.enum(["claude_ai_chat"]),
  LT = I.str(),
  pT = I.str(),
  RT = I.str(),
  ST = I.str(),
  iT = I.str(),
  IT = I.str(),
  UT = I.str(),
  xT = I.str(),
  NT = I.str(),
  lT = I.str(),
  PT = I.str(),
  aT = I.str(),
  MT = I.str(),
  uT = I.str(),
  BT = I.str(),
  bT = I.str(),
  mT = I.str(),
  GT = I.str(),
  HT = I.str(),
  dT = I.str(),
  fT = I.str(),
  FT = I.str(),
  KT = I.str(),
  vT = I.str(),
  WT = I.str(),
  gT = I.str(),
  yT = I.str(),
  YT = I.str(),
  hT = I.str(),
  wT = I.str(),
  VT = I.str(),
  XT = I.str(),
  kT = I.str(),
  ZT = I.str(),
  jT = I.str(),
  JT = I.str(),
  zT = I.str(),
  QT = I.str(),
  $T = I.str(),
  qT = I.str(),
  tL = I.str(),
  oL = I.str(),
  EL = I.str(),
  _L = I.str(),
  rL = I.str(),
  eL = I.str(),
  sL = I.str(),
  nL = I.bool(),
  CL = I.bool(),
  OL = I.bool(),
  AL = I.bool(),
  DL = I.bool(),
  cL = I.bool(),
  TL = I.bool(),
  LL = I.bool(),
  pL = I.bool(),
  RL = I.bool(),
  SL = I.bool(),
  iL = I.bool(),
  IL = I.bool(),
  UL = I.bool(),
  xL = I.bool(),
  NL = I.bool(),
  lL = I.bool(),
  PL = I.bool(),
  aL = I.bool(),
  ML = I.bool(),
  uL = I.bool(),
  BL = I.bool(),
  bL = I.bool(),
  mL = I.bool(),
  GL = I.bool(),
  HL = I.bool(),
  dL = I.triBool(),
  fL = I.bool(),
  FL = I.str(),
  KL = I.bool(),
  vL = I.bool(),
  WL = I.bool(),
  gL = I.bool(),
  yL = I.triBool(),
  YL = I.bool(),
  hL = I.bool(),
  wL = I.str(),
  VL = I.str(),
  XL = I.bool(),
  kL = I.bool(),
  ZL = I.bool(),
  jL = I.bool(),
  JL = I.triBool(),
  zL = I.bool(),
  QL = I.str(),
  $L = I.bool(),
  qL = I.int({ min: 1 }),
  tp = I.int({ min: 0 }),
  op = I.bool(),
  Ep = I.bool(),
  _p = I.bool(),
  rp = I.bool(),
  ep = I.bool(),
  sp = I.bool(),
  np = I.bool(),
  Cp = I.str(),
  Op = I.bool(),
  Ap = I.rawStr(),
  Dp = I.str(),
  cp = I.str(),
  Tp = I.bool(),
  Lp = I.rawStr(),
  pp = I.str(),
  Rp = I.str(),
  Sp = I.str(),
  ip = I.str(),
  Ip = I.str(),
  Up = I.bool(),
  xp = I.bool(),
  Np = I.bool(),
  lp = I.triBool(),
  Pp = I.bool(),
  ap = I.bool(),
  Mp = I.int(),
  up = I.int(),
  Bp = I.int(),
  bp = I.int({ min: 1, max: 2147483647, digitsOnly: !0 }),
  mp = I.int(),
  Gp = I.int(),
  Hp = I.int({ min: 1, max: 86400, digitsOnly: !0 }),
  dp = I.int({ min: 1, max: 86400, digitsOnly: !0 }),
  fp = I.int(),
  Fp = I.int({ min: 1 }),
  Kp = I.int({ min: 0, max: 10080, digitsOnly: !0 }),
  vp = I.int(),
  Wp = I.int(),
  gp = I.int({ min: 1, digitsOnly: !0 }),
  yp = I.int({ min: 1, digitsOnly: !0 }),
  Yp = I.int({ min: 1, digitsOnly: !0 }),
  hp = I.int(),
  wp = I.int(),
  Vp = I.int(),
  Xp = I.int(),
  kp = I.int(),
  Zp = I.int(),
  jp = I.int(),
  Jp = I.int(),
  zp = I.int(),
  Qp = I.int(),
  $p = I.int(),
  qp = I.int(),
  tR = I.int({ min: 1 }),
  oR = I.int({ min: 1 }),
  ER = I.int({ min: 0 }),
  _R = I.int(),
  rR = I.int(),
  eR = I.int({ min: 1000, max: 60000 }),
  sR = I.int(),
  nR = I.int(),
  CR = I.int({ min: 1 }),
  OR = I.int({ min: 1 }),
  AR = I.int({ min: 3 }),
  DR = I.int({ min: 1 }),
  cR = I.int(),
  TR = I.triBool(),
  LR = I.int({ min: 1 }),
  pR = I.int({ min: 1 }),
  RR = I.int({ min: 1 }),
  SR = I.int({ min: 1 }),
  iR = I.str(),
  IR = I.int({ min: 1 }),
  UR = I.int({ min: 1 }),
  xR = I.str(),
  NR = I.int(),
  lR = I.int({ min: 1 }),
  PR = I.int(),
  aR = I.int(),
  MR = I.int({ min: 1 }),
  uR = I.int();
var G = {};
defineExportGetters(G, {
  ANTHROPIC_CUSTOM_MODEL_OPTION: () => XR,
  ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION: () => ZR,
  ANTHROPIC_CUSTOM_MODEL_OPTION_NAME: () => kR,
  ANTHROPIC_DEFAULT_FABLE_MODEL: () => GR,
  ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION: () => dR,
  ANTHROPIC_DEFAULT_FABLE_MODEL_NAME: () => HR,
  ANTHROPIC_DEFAULT_HAIKU_MODEL: () => yR,
  ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION: () => hR,
  ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME: () => YR,
  ANTHROPIC_DEFAULT_MODEL: () => bR,
  ANTHROPIC_DEFAULT_OPUS_MODEL: () => fR,
  ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION: () => KR,
  ANTHROPIC_DEFAULT_OPUS_MODEL_NAME: () => FR,
  ANTHROPIC_DEFAULT_SONNET_MODEL: () => vR,
  ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION: () => gR,
  ANTHROPIC_DEFAULT_SONNET_MODEL_NAME: () => WR,
  ANTHROPIC_MODEL: () => BR,
  ANTHROPIC_SMALL_FAST_MODEL: () => mR,
  CLAUDE_CODE_3P_PROBE_WROTE_OPUS_DEFAULT: () => VR,
  CLAUDE_CODE_3P_PROBE_WROTE_SONNET_DEFAULT: () => wR,
  CLAUDE_CODE_ALWAYS_ENABLE_EFFORT: () => sS,
  CLAUDE_CODE_AUTO_MODE_MODEL: () => zR,
  CLAUDE_CODE_BG_CLASSIFIER_MODEL: () => QR,
  CLAUDE_CODE_DISABLE_1M_CONTEXT: () => AS,
  CLAUDE_CODE_DISABLE_EXPLORE_INHERIT_CAP: () => _S,
  CLAUDE_CODE_DISABLE_FAST_MODE: () => nS,
  CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP: () => rS,
  CLAUDE_CODE_DISABLE_UNKNOWN_MODEL_WINDOW_ENFORCEMENT: () => DS,
  CLAUDE_CODE_EFFORT_LEVEL: () => eS,
  CLAUDE_CODE_MODEL_CATALOG: () => cS,
  CLAUDE_CODE_MODEL_CATALOG_URL: () => TS,
  CLAUDE_CODE_NO_MODEL_FALLBACK: () => ES,
  CLAUDE_CODE_SKIP_FAST_MODE_NETWORK_ERRORS: () => CS,
  CLAUDE_CODE_SKIP_FAST_MODE_ORG_CHECK: () => OS,
  CLAUDE_CODE_SUBAGENT_MODEL: () => jR,
  CLAUDE_CODE_SUBAGENT_MODEL_FORCE: () => JR,
  CLAUDE_CONTEXT_COLLAPSE: () => tS,
  CLAUDE_CONTEXT_COLLAPSE_MODEL: () => $R,
  FALLBACK_FOR_ALL_PRIMARY_MODELS: () => oS,
});
var BR = I.str(),
  bR = I.str(),
  mR = I.str(),
  GR = I.str(),
  HR = I.str(),
  dR = I.str(),
  fR = I.str(),
  FR = I.str(),
  KR = I.str(),
  vR = I.str(),
  WR = I.str(),
  gR = I.str(),
  yR = I.str(),
  YR = I.str(),
  hR = I.str(),
  wR = I.str(),
  VR = I.str(),
  XR = I.str(),
  kR = I.str(),
  ZR = I.str(),
  jR = I.str(),
  JR = I.bool(),
  zR = I.str(),
  QR = I.str(),
  $R = I.str(),
  tS = I.bool(),
  oS = I.str(),
  ES = I.bool(),
  _S = I.bool(),
  rS = I.bool(),
  eS = I.str(),
  sS = I.bool(),
  nS = I.bool(),
  CS = I.bool(),
  OS = I.bool(),
  AS = I.bool(),
  DS = I.bool(),
  cS = I.str(),
  TS = I.str();
var H = {};
defineExportGetters(H, {
  ALL_PROXY: () => US,
  ANTHROPIC_BETAS: () => uS,
  ANTHROPIC_CUSTOM_HEADERS: () => BS,
  API_FORCE_IDLE_TIMEOUT: () => hS,
  API_TIMEOUT_MS: () => YS,
  CLAUDE_BYTE_STREAM_IDLE_TIMEOUT_MS: () => JS,
  CLAUDE_CODE_ATTRIBUTION_HEADER: () => GS,
  CLAUDE_CODE_CERT_STORE: () => MS,
  CLAUDE_CODE_CLIENT_CERT: () => NS,
  CLAUDE_CODE_CLIENT_KEY: () => lS,
  CLAUDE_CODE_CLIENT_KEY_PASSPHRASE: () => PS,
  CLAUDE_CODE_DISABLE_MTLS_RELOAD_ON_STALE_CONNECTION: () => aS,
  CLAUDE_CODE_EAGER_FLUSH: () => qS,
  CLAUDE_CODE_EXTRA_BODY: () => bS,
  CLAUDE_CODE_EXTRA_METADATA: () => mS,
  CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS: () => FS,
  CLAUDE_CODE_FORCE_SYNC_OUTPUT: () => ti,
  CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES: () => ZS,
  CLAUDE_CODE_GZIP_REQUEST_BODIES: () => kS,
  CLAUDE_CODE_MAX_CONTEXT_TOKENS: () => fS,
  CLAUDE_CODE_MAX_OUTPUT_TOKENS: () => dS,
  CLAUDE_CODE_MAX_RETRIES: () => HS,
  CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY: () => KS,
  CLAUDE_CODE_MAX_TURNS: () => vS,
  CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS: () => _i,
  CLAUDE_CODE_RETRY_WATCHDOG: () => $S,
  CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS: () => Ei,
  CLAUDE_ENABLE_BYTE_WATCHDOG: () => wS,
  CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK: () => VS,
  CLAUDE_ENABLE_STREAM_WATCHDOG: () => XS,
  CLAUDE_MOCK_HEADERLESS_429: () => oi,
  CLAUDE_SLOW_FIRST_BYTE_MS: () => QS,
  CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS: () => zS,
  CLAUDE_STREAM_IDLE_TIMEOUT_MS: () => jS,
  HTTPS_PROXY: () => pS,
  HTTP_PROXY: () => LS,
  MAX_MCP_OUTPUT_TOKENS: () => yS,
  MAX_STRUCTURED_OUTPUT_RETRIES: () => gS,
  MAX_THINKING_TOKENS: () => WS,
  NO_PROXY: () => RS,
  all_proxy: () => xS,
  http_proxy: () => SS,
  https_proxy: () => iS,
  no_proxy: () => IS,
});
var LS = I.str(),
  pS = I.str(),
  RS = I.str(),
  SS = I.str(),
  iS = I.str(),
  IS = I.str(),
  US = I.str(),
  xS = I.str(),
  NS = I.str(),
  lS = I.str(),
  PS = I.str(),
  aS = I.bool(),
  MS = I.str(),
  uS = I.str(),
  BS = I.str(),
  bS = I.str(),
  mS = I.str(),
  GS = I.str(),
  HS = I.int(),
  dS = I.int(),
  fS = I.int(),
  FS = I.int(),
  KS = I.int({ min: 1 }),
  vS = I.str(),
  WS = I.int(),
  gS = I.int(),
  yS = I.int(),
  YS = I.int(),
  hS = I.int(),
  wS = I.triBool(),
  VS = I.bool(),
  XS = I.triBool(),
  kS = I.triBool(),
  ZS = I.triBool(),
  jS = I.int({ min: 1 }),
  JS = I.int({ min: 1 }),
  zS = I.int({ min: 1 }),
  QS = I.int({ min: 1 }),
  $S = I.bool(),
  qS = I.bool(),
  ti = I.bool(),
  oi = I.bool(),
  Ei = I.int(),
  _i = I.int({ min: 0 });
var d = {};
defineExportGetters(d, {
  AGENT_PROXY_URL: () => nI,
  ANTHROPIC_AWS_BASE_URL: () => Si,
  ANTHROPIC_AWS_WORKSPACE_ID: () => ii,
  ANTHROPIC_BASE_URL: () => Ai,
  ANTHROPIC_BEDROCK_BASE_URL: () => Ti,
  ANTHROPIC_BEDROCK_MANTLE_BASE_URL: () => Ri,
  ANTHROPIC_BEDROCK_REGION_PREFIX: () => Li,
  ANTHROPIC_BEDROCK_SERVICE_TIER: () => pi,
  ANTHROPIC_FOUNDRY_BASE_URL: () => ui,
  ANTHROPIC_FOUNDRY_RESOURCE: () => Bi,
  ANTHROPIC_GOOGLE_CLOUD_BASE_URL: () => Ni,
  ANTHROPIC_GOOGLE_CLOUD_LOCATION: () => Ui,
  ANTHROPIC_GOOGLE_CLOUD_PROJECT: () => Ii,
  ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID: () => xi,
  ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION: () => gi,
  ANTHROPIC_UNIX_SOCKET: () => yi,
  ANTHROPIC_VERTEX_BASE_URL: () => li,
  ANTHROPIC_VERTEX_PROJECT_ID: () => ai,
  AWS_ACCESS_KEY_ID: () => fi,
  AWS_CONFIG_FILE: () => Hi,
  AWS_DEFAULT_REGION: () => mi,
  AWS_ENDPOINT_URL: () => vi,
  AWS_ENDPOINT_URL_STS: () => Wi,
  AWS_PROFILE: () => Gi,
  AWS_REGION: () => bi,
  AWS_SECRET_ACCESS_KEY: () => Fi,
  AWS_SESSION_TOKEN: () => Ki,
  AWS_SHARED_CREDENTIALS_FILE: () => di,
  CCR_AGENT_PROXY_ENABLED: () => zi,
  CCR_AGENT_PROXY_FRAME_HOSTS: () => _I,
  CCR_AGENT_PROXY_INCLUDE_HOSTS: () => tI,
  CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED: () => oI,
  CCR_AGENT_PROXY_RELAY_MODE: () => qi,
  CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED: () => EI,
  CCR_ENABLE_BUNDLE: () => rI,
  CCR_FORCE_BUNDLE: () => eI,
  CCR_ON_BRANCH_DEFAULT_GUARD: () => sI,
  CLAUDE_CODE_AGENT_PROXY_GH_SHIM: () => $i,
  CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG: () => Qi,
  CLAUDE_CODE_API_BASE_URL: () => ci,
  CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY: () => Zi,
  CLAUDE_CODE_GB_BASE_URL: () => ji,
  CLAUDE_CODE_GB_REFRESH_INTERVAL_MS: () => Ji,
  CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: () => Yi,
  CLAUDE_CODE_PROXY_RESOLVES_HOSTS: () => wi,
  CLAUDE_CODE_SIMULATE_PROXY_USAGE: () => hi,
  CLAUDE_CODE_SKIP_HFI_VERSION_CHECK: () => CI,
  CLAUDE_CODE_USE_ANTHROPIC_AWS: () => ni,
  CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: () => Ci,
  CLAUDE_CODE_USE_BEDROCK: () => ri,
  CLAUDE_CODE_USE_FOUNDRY: () => si,
  CLAUDE_CODE_USE_GATEWAY: () => Vi,
  CLAUDE_CODE_USE_MANTLE: () => Oi,
  CLAUDE_CODE_USE_VERTEX: () => ei,
  CLAUDE_GATEWAY_ALLOW_LOOPBACK: () => Xi,
  CLAUDE_GATEWAY_LOG_LEVEL: () => ki,
  CLOUD_ML_REGION: () => Mi,
  _CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL: () => Di,
});
var ri = I.bool(),
  ei = I.bool(),
  si = I.bool(),
  ni = I.bool(),
  Ci = I.bool(),
  Oi = I.bool(),
  Ai = I.str(),
  Di = I.bool(),
  ci = I.str(),
  Ti = I.str(),
  Li = I.enum(z),
  pi = I.str(),
  Ri = I.str(),
  Si = I.str(),
  ii = I.str(),
  Ii = I.str(),
  Ui = I.str(),
  xi = I.str(),
  Ni = I.str(),
  li = I.str(),
  ai = I.str(),
  Mi = I.str(),
  ui = I.str(),
  Bi = I.str(),
  bi = I.str(),
  mi = I.str(),
  Gi = I.str(),
  Hi = I.str(),
  di = I.str(),
  fi = I.str(),
  Fi = I.str(),
  Ki = I.str(),
  vi = I.str(),
  Wi = I.str(),
  gi = I.str(),
  yi = I.str(),
  Yi = I.bool(),
  hi = I.bool(),
  wi = I.bool(),
  Vi = I.bool(),
  Xi = I.bool(),
  ki = I.str(),
  Zi = I.bool(),
  ji = I.str(),
  Ji = I.int(),
  zi = I.bool(),
  Qi = I.bool(),
  $i = I.bool(),
  qi = I.str(),
  tI = I.str(),
  oI = I.bool(),
  EI = I.bool(),
  _I = I.str(),
  rI = I.bool(),
  eI = I.bool(),
  sI = I.enum(["enforce", "observe", "off"]),
  nI = I.str(),
  CI = I.bool();
var AI = { ...l, ...d, ...G, ...u, ...H, ...b, ...M, ...m };
function f(t, o) {
  let E = Object.create(o);
  for (let [_, r] of Object.entries(t)) {
    let s = E,
      e;
    Object.defineProperty(E, _, {
      get: () => {
        let n = process.env[_];
        if (n !== s) ((e = r.parse(n)), (s = n));
        return e;
      },
      enumerable: !0,
      configurable: !0,
    });
  }
  return (
    Object.defineProperties(E, {
      set: {
        value: (_, r) => {
          process.env[_] = hur(r);
        },
      },
      unset: {
        value: (_) => {
          delete process.env[_];
        },
      },
    }),
    E
  );
}
var env = f(AI, T),
  DI = {},
  antEnv = f(DI, null),
  cI = import.meta.require("../../02-功能模块/跨会话消息-UDS/udsInboxShape.dasynwyz.js").udsInboxShape,
  udsEnv = f(cI, null);
export {
  isRunningWithBun,
  isBunStandaloneExecutable,
  tryRemoveFileOrEmptyDirectory,
  hasUnknownFileType,
  getDirentFileInfo,
  tryGetDirentFileInfo,
  removePathRecursively,
  removeDirectoryRecursive,
  overwriteFileContents,
  resolveExecutablePathAsync,
  resolveExecutablePath,
  resolveCommandInPath,
  normalizePathEntry,
  getDefaultGlobalClaudeFilePath,
  getGlobalClaudeFile,
  BUILD_TOOL_COMMANDS,
  isVerifiablePath,
  findCommandsOnPath,
  getDetectedBuildTools,
  JETBRAINS_IDES,
  isWindsurfOrDevinPath,
  primeSystemInfo,
  isDockerenvPresent,
  getHostPlatformForAnalytics,
  normalizeShellNameForAnalytics,
  getShellForAnalytics,
  PROMPT_CACHE_TTL_VALUES,
  BEDROCK_INFERENCE_PROFILE_PREFIXES,
  env,
  antEnv,
  udsEnv,
};

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { qt } from "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { b, z, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { m } from "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import { Bf, a_ } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { le, nt, ru } from "../../00-第三方库/zod/zod.3g334xwq.js";
import { bc, ja, a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { Sn } from "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import { PRn, ee, ZUe, hQ } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { Tb, Xge, lL } from "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import { S0 } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { _x } from "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import { tv } from "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import { Jqn, HBt, st, ULe, vde } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { L9n, pte, Fbe, Gce, kan, M9n, $9n } from "./chunk-548xet6h.js";
import { bD } from "../../01-核心基础设施/共享小工具-未细化/chunk-cyyrj58q.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { $x } from "../../01-核心基础设施/共享小工具-未细化/chunk-9v3x5my2.js";
import { join as J } from "path";
var Q = m(() =>
  nt({
    timestamp: le(),
    path: ru(["npm-global", "npm-local", "native"]),
    outcome: ru(["success", "failed"]),
    status: le(),
    version_from: le(),
    version_to: le().nullable(),
    error_code: le().nullable(),
  }),
);
function T() {
  return J(be(), ".last-update-result.json");
}
function O() {
  return Ce.state("last-update-result");
}
async function Wce(e, t) {
  if (M() && t) {
    let i = await t.write(O(), b(e), { mode: 438 & ~process.umask() });
    if (!i.ok)
      n(`Failed to record update result: ${i.error.code}`, { level: "error" });
    return;
  }
  try {
    await qt().atomicWrite(T(), b(e));
  } catch (i) {
    n(`Failed to record update result: ${i}`, { level: "error" });
  }
}
async function sFt(e) {
  let t;
  if (M() && e) {
    let i = await e.read([O()]);
    if (!i.ok)
      return (
        n(`Failed to read update result: ${i.error.code}`, { level: "error" }),
        null
      );
    let r = i.value.items[0];
    if (!r.found) return null;
    t = Buffer.from(r.value).toString("utf8");
  } else
    try {
      t = await qt().read(T());
    } catch (i) {
      if (!W(i)) n(`Failed to read update result: ${i}`, { level: "error" });
      return null;
    }
  try {
    let i = Q().safeParse(z(t));
    return i.success ? i.data : null;
  } catch {
    return null;
  }
}
import { readFile as Y } from "fs/promises";
function Z(e, t) {
  return t.includes(e.id) || e.idLike.some((i) => t.includes(i));
}
class E {
  sources;
  osRelease;
  pacman;
  deb;
  rpm;
  apk;
  packageManager;
  constructor(e) {
    this.sources = e;
  }
  getOsRelease() {
    return (this.osRelease ??= this.sources.readOsRelease().then(
      (e) => {
        let t = e.match(/^ID=["']?(\S+?)["']?\s*$/m),
          i = e.match(/^ID_LIKE=["']?(.+?)["']?\s*$/m);
        return { id: t?.[1] ?? "", idLike: i?.[1]?.split(" ") ?? [] };
      },
      () => null,
    ));
  }
  detectPacman() {
    return (this.pacman ??= this.ownsExecutable(["arch"], "pacman", ["-Qo"]));
  }
  detectDeb() {
    return (this.deb ??= this.ownsExecutable(["debian"], "dpkg", ["-S"]));
  }
  detectRpm() {
    return (this.rpm ??= this.ownsExecutable(
      ["fedora", "rhel", "suse"],
      "rpm",
      ["-qf"],
    ));
  }
  detectApk() {
    return (this.apk ??= this.ownsExecutable(["alpine"], "apk", [
      "info",
      "--who-owns",
    ]));
  }
  async ownsExecutable(e, t, i) {
    if (this.sources.platform() !== "linux") return !1;
    let r = await this.getOsRelease();
    if (r && !Z(r, e)) return !1;
    let s = await this.sources.execFileNoThrow(
      t,
      [...i, this.sources.execPath()],
      { timeout: 5000, useCwd: !1, useToolMemoryCgroup: !1 },
    );
    if (s.code === 0 && s.stdout)
      return (n(`Detected ${t} installation: ${s.stdout.trim()}`), !0);
    return !1;
  }
  detectHomebrew() {
    let e = this.sources.platform();
    if (e !== "macos" && e !== "linux" && e !== "wsl") return !1;
    let t = this.sources.execPath();
    if (t.includes("/Caskroom/"))
      return (n(`Detected Homebrew cask installation: ${t}`), !0);
    return !1;
  }
  getHomebrewCaskName() {
    return this.sources.execPath().match(/\/Caskroom\/([^/]+)\//)?.[1] ?? null;
  }
  detectWinget() {
    if (this.sources.platform() !== "windows") return !1;
    let e = this.sources.execPath();
    for (let t of [
      /Microsoft[/\\]WinGet[/\\]Packages/i,
      /Microsoft[/\\]WinGet[/\\]Links/i,
    ])
      if (t.test(e)) return (n(`Detected winget installation: ${e}`), !0);
    return !1;
  }
  detectMise() {
    let e = this.sources.execPath();
    if (/[/\\]mise[/\\]installs[/\\]/i.test(e))
      return (n(`Detected mise installation: ${e}`), !0);
    return !1;
  }
  detectAsdf() {
    let e = this.sources.execPath();
    if (/[/\\]\.?asdf[/\\]installs[/\\]/i.test(e))
      return (n(`Detected asdf installation: ${e}`), !0);
    return !1;
  }
  getPackageManager() {
    return (this.packageManager ??= this.detectPackageManager());
  }
  async detectPackageManager() {
    if (this.detectHomebrew()) return "homebrew";
    if (this.detectWinget()) return "winget";
    if (this.detectMise()) return "mise";
    if (this.detectAsdf()) return "asdf";
    if (await this.detectPacman()) return "pacman";
    if (await this.detectApk()) return "apk";
    if (await this.detectDeb()) return "deb";
    if (await this.detectRpm()) return "rpm";
    return "unknown";
  }
}
var te = new j(
  () =>
    new E({
      platform: P,
      readOsRelease: () => Y("/etc/os-release", "utf8"),
      execFileNoThrow: Fe,
      execPath: () => process.execPath || process.argv[0] || "",
    }),
);
function x() {
  return te.of(B().host);
}
function H() {
  return x().detectPacman();
}
function U() {
  return x().detectDeb();
}
function N() {
  return x().detectRpm();
}
function _() {
  return x().detectApk();
}
function Ppt() {
  return x().detectHomebrew();
}
function Lbe() {
  return x().getHomebrewCaskName();
}
function F() {
  return x().detectWinget();
}
function G() {
  return x().detectMise();
}
function K() {
  return x().detectAsdf();
}
function ute() {
  return x().getPackageManager();
}
import { lstat as ne, readFile as ie, realpath as V } from "fs/promises";
import { homedir as k } from "os";
import { stripVTControlCharacters as se } from "util";
import { delimiter as oe, join as g, posix as C, win32 as A } from "path";
function re() {
  let e = process.argv[1] || "",
    t = process.execPath || process.argv[0] || "";
  if (P() === "windows")
    ((e = e.split(A.sep).join(C.sep)), (t = t.split(A.sep).join(C.sep)));
  return [e, t];
}
async function ce() {
  let [e, t] = re();
  if (bc()) {
    let l =
      be().replace(/\\/g, "/").replace(/\/+$/, "") + "/local/node_modules/";
    if (t.startsWith(l)) return "npm-local";
    if (t.includes("/node_modules/@anthropic-ai/")) return "npm-global";
    if (
      Ppt() ||
      F() ||
      G() ||
      K() ||
      (await H()) ||
      (await U()) ||
      (await N()) ||
      (await _())
    )
      return "package-manager";
    return "native";
  }
  if (L9n()) return "npm-local";
  if (
    [
      "/usr/local/lib/node_modules",
      "/usr/lib/node_modules",
      "/opt/homebrew/lib/node_modules",
      "/opt/homebrew/bin",
      "/usr/local/bin",
      "/.nvm/versions/node/",
    ].some((l) => e.includes(l))
  )
    return "npm-global";
  if (e.includes("/npm/") || e.includes("/nvm/")) return "npm-global";
  let r = await a_("npm config get prefix", { reject: !1 }),
    s = r.exitCode === 0 ? r.stdout.trim() : null;
  if (s && e.startsWith(s)) return "npm-global";
  return "unknown";
}
class q {
  attempted = !1;
}
var X = new j(() => new q());
function Ran() {
  return X.of(B().host).attempted;
}
async function dte() {
  return ((X.of(B().host).attempted = !0), await ce());
}
async function ue() {
  if (bc()) {
    try {
      return await V(process.execPath);
    } catch {}
    try {
      let e = await ja("claude");
      if (e) return e;
    } catch {}
    try {
      return (
        await ae().stat(g(k(), ".local/bin/claude")),
        g(k(), ".local/bin/claude")
      );
    } catch {}
    return "native";
  }
  try {
    return process.argv[0] || "unknown";
  } catch {
    return "unknown";
  }
}
function de() {
  try {
    if (bc()) return process.execPath || "unknown";
    return process.argv[1] || "unknown";
  } catch {
    return "unknown";
  }
}
async function pe() {
  let e = ae(),
    t = [],
    i = g(k(), ".claude", "local");
  if (await pte()) t.push({ type: "npm-local", path: i });
  let r = ["@anthropic-ai/claude-code"];
  if (
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
    }.PACKAGE_URL &&
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
    }.PACKAGE_URL !== "@anthropic-ai/claude-code"
  )
    r.push(
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
      }.PACKAGE_URL,
    );
  let s = await Fe("npm", ["-g", "config", "get", "prefix"]);
  if (s.code === 0 && s.stdout) {
    let o = s.stdout.trim(),
      y = P() === "windows",
      d = y ? g(o, "claude") : g(o, "bin", "claude"),
      u = !1;
    try {
      (await e.stat(d), (u = !0));
    } catch {}
    if (u) {
      let p = !1;
      try {
        if ((await V(d)).includes("/Caskroom/")) p = Ppt();
      } catch {}
      if (!p) {
        let c = !1;
        for (let R of r) {
          let v = y ? g(o, "node_modules", R) : g(o, "lib", "node_modules", R);
          try {
            (await e.stat(v), (c = !0));
            break;
          } catch {}
        }
        if (c) t.push({ type: "npm-global", path: d });
      }
    } else
      for (let p of r) {
        let c = y ? g(o, "node_modules", p) : g(o, "lib", "node_modules", p);
        try {
          (await e.stat(c), t.push({ type: "npm-global-orphan", path: c }));
        } catch {}
      }
  }
  let l = g(k(), ".local", "bin", "claude");
  try {
    (await e.stat(l), t.push({ type: "native", path: l }));
  } catch {}
  if (ee().installMethod === "native") {
    let o = g(k(), ".local", "share", "claude");
    try {
      if ((await e.stat(o), !t.some((y) => y.type === "native")))
        t.push({ type: "native", path: o });
    } catch {}
  }
  return t;
}
function me(e, t) {
  let i = P() === "windows",
    r = t;
  if (i) r = t.split(A.sep).join(C.sep).toLowerCase();
  return e.some((s) => {
    let l = s;
    if (i) l = s.split(A.sep).join(C.sep).toLowerCase();
    let h = l.replace(/\/+$/, ""),
      o = s.replace(/[/\\]+$/, "");
    return h === r || o === "~/.local/bin" || o === "$HOME/.local/bin";
  });
}
async function fe(e) {
  let t = [],
    i = [Tb()];
  if (P() === "wsl" && S0()) i.unshift(_x);
  for (let o of i)
    try {
      let y = await ie(g(o, "managed-settings.json"), "utf-8"),
        d = z(y),
        u =
          d && typeof d === "object" ? d.strictPluginOnlyCustomization : void 0;
      if (u !== void 0 && typeof u !== "boolean")
        if (!Array.isArray(u))
          t.push({
            issue: `managed-settings.json: strictPluginOnlyCustomization has an invalid value (expected true or an array, got ${typeof u})`,
            fix: `The field is silently ignored (schema .catch rescues it). Set it to true, or an array of: ${Xge.join(", ")}.`,
          });
        else {
          let p = u.filter((c) => typeof c === "string" && !Xge.includes(c));
          if (p.length > 0)
            t.push({
              issue: `managed-settings.json: strictPluginOnlyCustomization has ${p.length} value(s) this client doesn't recognize: ${p.map(String).join(", ")}`,
              fix: `These are silently ignored (forwards-compat). Known surfaces for this version: ${Xge.join(", ")}. Either remove them, or this client is older than the managed-settings intended.`,
            });
        }
      if (d && typeof d === "object" && lL(d)) break;
    } catch {}
  let r = PRn();
  if (r)
    t.push({
      issue: `otelHeadersHelper is configured but its last invocation failed: ${r}`,
      fix: "Run the configured helper manually and confirm it prints a JSON object of string header values. If the value is a file path, confirm the file exists and is executable.",
    });
  let s = ee();
  if (e === "development") return t;
  if (e === "native") {
    let o = (a.PATH || "").split(oe),
      y = k(),
      d = g(y, ".local", "bin"),
      u = g(bD(), "claude");
    if (!(await ULe(u)) && !(await vde(u).catch(() => !1)))
      t.push({
        issue: `${u} was not created by the native installer (it is not a symlink into the versions/ directory), so auto-update leaves it untouched.`,
        fix: `If you put a launcher wrapper there on purpose, this is expected \u2014 new versions still install under $XDG_DATA_HOME/claude/versions, your launcher decides what runs, and automatic version cleanup is disabled on this machine (the installer cannot tell which version your launcher needs, so it keeps them all). To let Claude Code manage the launcher again, remove ${u} and run \`claude update\`.`,
      });
    if (!me(o, d))
      if (P() === "windows") {
        let c = d.split(C.sep).join(A.sep);
        t.push({
          issue: `Native installation exists but ${c} is not in your PATH`,
          fix: "Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.",
        });
      } else {
        let c = Fbe(),
          v = Gce()[c],
          S = v ? v.replace(k(), "~") : "your shell config file";
        t.push({
          issue:
            "Native installation exists but ~/.local/bin is not in your PATH",
          fix: `Run: echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${S} then open a new terminal or run: source ${S}`,
        });
      }
  }
  if (!Ie(process.env.DISABLE_INSTALLATION_CHECKS)) {
    if (e === "npm-local" && s.installMethod !== "local")
      t.push({
        issue: `Running from local installation but config install method is '${s.installMethod ?? "not set"}'`,
        fix: "Consider using native installation: `claude install`",
      });
    if (e === "native" && s.installMethod !== "native")
      t.push({
        issue: `Running native installation but config install method is '${s.installMethod ?? "not set"}'`,
        fix: "Run `claude install` to update configuration",
      });
  }
  if (e === "npm-global" && (await pte()))
    t.push({
      issue: "Local installation exists but not being used",
      fix: "Consider using native installation: `claude install`",
    });
  let l = await kan(),
    h = await M9n();
  if (e === "npm-local") {
    if (!(await ja("claude")) && !h)
      if (l)
        t.push({
          issue: "Local installation not accessible",
          fix: `Alias exists but points to invalid target: ${l}. Update alias: alias claude="~/.claude/local/claude"`,
        });
      else
        t.push({
          issue: "Local installation not accessible",
          fix: 'Create alias: alias claude="~/.claude/local/claude"',
        });
  }
  return t;
}
async function ge() {
  let e = "Claude Code-doctor-probe",
    t = tv(),
    i = Buffer.from("probe", "utf-8").toString("hex"),
    r = `add-generic-password -U -a "${t}" -s "${e}" -X "${i}"
`,
    s = await Bf("security", ["-i"], { input: r, reject: !1, timeout: 5000 });
  if (s.exitCode === 0)
    return (
      Bf("security", ["delete-generic-password", "-a", t, "-s", e], {
        reject: !1,
        timeout: 5000,
      }),
      null
    );
  let l = (s.stderr || s.stdout || "").trim().replace(/\s*\n\s*/g, "; ");
  return {
    issue: `macOS Keychain is not writable${l ? ` (${l})` : ""}. Console login will fail to save your API key.`,
    fix: "Run: security unlock-keychain ~/Library/Keychains/login.keychain-db \u2014 if that doesn't fix it, your login keychain password may be out of sync with your account password: open Keychain Access, select the 'login' keychain, then Edit \u2192 Change Password for Keychain 'login'.",
  };
}
function he() {
  if (!st.isSandboxingEnabled()) return [];
  if (st.canMaskCredentialWarningFire()) st.checkDependencies();
  let e = st.getMaskCredentialWarning();
  if (!e) return [];
  return e.split(" \xB7 ").map((t) => {
    if (t.includes("have an empty injectHosts"))
      return {
        issue: t.replace(/\.\s*If the adapter forced this.*$/, ""),
        fix: "If the adapter forced this (a filesystem.allowRead entry re-opened a denied credential path), remove the conflicting allowRead entry or the deny; if a parent/managed settings tier supplied this mask, sentinel-only is its intended posture (that channel cannot grant injection, so an injectHosts set there is stripped on load) and the entry can only be removed in the parent settings; otherwise set injectHosts or remove the entry",
      };
    if (t.includes("degrade to deny on macOS"))
      return {
        issue: t.replace(/\.\s*Note that switching them.*$/, ""),
        fix: "Set sandbox.filesystem.disabled: false in user or managed settings (overrides the GrowthBook policy; ignored if managed settings pin the filesystem layer), or remove the mask entries \u2014 a deny provides no protection while the relaxed filesystem policy is active",
      };
    return {
      issue: t.replace(/\s*Enable sandbox\.network\.tlsTerminate.*$/, ""),
      fix: HBt()
        ? "Set sandbox.enabled: true plus sandbox.network.tlsTerminate, or remove the mask entries \u2014 TLS termination is never enabled in scrub-only mode"
        : "Enable sandbox.network.tlsTerminate (or remove the mask entries)",
    };
  });
}
function ye() {
  if (P() !== "linux") return [];
  let e = [],
    t = st.getLinuxGlobPatternWarnings();
  if (t.length > 0) {
    let i = I(t);
    e.push({
      issue:
        "Glob patterns in sandbox permission rules are not fully supported on Linux",
      fix: `Found ${t.length} pattern(s): ${i}. On Linux, glob patterns in Edit/Read rules will be ignored.`,
    });
  }
  return e;
}
function I(e) {
  let t = e.map((s) => Sn(se(s)).trim()),
    i = t.slice(0, 3).join(", "),
    r = t.length - 3;
  return r > 0 ? `${i} (${r} more)` : i;
}
async function we() {
  let e = P();
  if (e !== "linux" && e !== "wsl") return [];
  if (!st.isSandboxingEnabled()) return [];
  let t = st.getConfig();
  if (t === void 0 || t.filesystem.disabled) return [];
  let { denyWithinAllow: i } = st.getFsWriteConfig(),
    r = await Promise.all(
      i.map(async (l) => {
        try {
          let h = await ne(l);
          return h.isFile() && h.size === 0 && (h.mode & 146) === 0;
        } catch {
          return !1;
        }
      }),
    ),
    s = new Set(i.filter((l, h) => r[h]));
  if (s.size === 0) return [];
  return [
    {
      issue: `Stale sandbox mask files left by a killed session: ${I([...s])}`,
      fix: 'Remove each with `rm <path>` while no other Claude Code session is running in that project \u2014 a 0-byte read-only file where a settings file belongs makes "Yes, and don\'t ask again" fail to save, and the sandbox binds it read-only again on every start',
    },
  ];
}
function xe() {
  let e = st.getUnbracketedIpv6DomainWarnings();
  if (e.length === 0) return [];
  return [
    {
      issue: "Sandbox network domain entries have unreliable spellings",
      fix: `Found: ${I(e)}. IPv6 literals must be bracketed, with any port 1-65535 and no leading zeros ("[::1]", "[::1]:443"); non-IPv6 entries must not contain wildcards in brackets, extra colons, "@", or path/query characters, and must use their canonical spelling (lowercase, no trailing dot, punycode). Until fixed, enforcement is conservative: a denied entry denies at least what any parseable reading denies (an entry with no parseable reading denies nothing); an allowed entry never allows more than written and may be removed entirely; bracketed IPv6-glob entries apply to in-process checks only, not the sandbox proxy.`,
    },
  ];
}
function Pe() {
  let e = st.getUnbracketedIpv6InjectHostWarnings();
  if (e.length === 0) return [];
  return [
    {
      issue:
        "Sandbox credential injectHosts entries can never match their destination",
      fix: `Found: ${I(e)}. Credential injection matches the bare, canonically-compressed destination address exactly and ignores ports \u2014 rewrite each entry as that bare form (e.g. "::1", "2001:db8::1"). Bracketed, zone-id, or non-canonical IPv6 spellings never match, so the credential is never injected there.`,
    },
  ];
}
async function Mbe({ probeKeychain: e = !1, storageV5: t } = {}) {
  let i = await dte(),
    r =
      typeof {
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
      } < "u" &&
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
      }.VERSION
        ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${$x()}`
        : "unknown",
    s = await ue(),
    l = de(),
    h = await pe(),
    o = await fe(i),
    { checkInstall: y } = await import("./checkInstall.sjndgd7g.js");
  for (let w of await y())
    if (w.type === "error")
      o.push({
        issue: w.message,
        fix: "Run claude install to repair the installation.",
      });
  if (
    (o.push(...ye()),
    o.push(...xe()),
    o.push(...Pe()),
    o.push(...he()),
    o.push(...(await we())),
    e)
  ) {
    let w = await ge();
    if (w) o.push(w);
  }
  if (i === "native") {
    let w = h.filter(
        (f) =>
          f.type === "npm-global" ||
          f.type === "npm-global-orphan" ||
          f.type === "npm-local",
      ),
      D = P() === "windows";
    for (let f of w)
      if (f.type === "npm-global") {
        let L = "npm -g uninstall @anthropic-ai/claude-code";
        if (
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.PACKAGE_URL &&
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.263",
            FEEDBACK_CHANNEL:
              "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-09-06T01:08:56Z",
            GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6",
            HOOKS_WORKER_URL:
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "darwin",
          }.PACKAGE_URL !== "@anthropic-ai/claude-code"
        )
          L += ` && npm -g uninstall ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}`;
        o.push({
          issue: `Leftover npm global installation at ${f.path}`,
          fix: `Run: ${L}`,
        });
      } else if (f.type === "npm-global-orphan")
        o.push({
          issue: `Orphaned npm global package at ${f.path}`,
          fix: D ? `Run: rmdir /s /q "${f.path}"` : `Run: rm -rf ${f.path}`,
        });
      else if (f.type === "npm-local")
        o.push({
          issue: `Leftover npm local installation at ${f.path}`,
          fix: D ? `Run: rmdir /s /q "${f.path}"` : `Run: rm -rf ${f.path}`,
        });
  }
  let u = ee().installMethod || "not set",
    p = null;
  if (i === "npm-global") {
    if (((p = (await $9n()).hasPermissions), !p && !hQ()))
      o.push({
        issue: "Can't auto-update: npm global folder isn't writable",
        fix: "Run `claude install` to switch to the native installer (no sudo)\nOr reinstall with a sudo-free npm (e.g. via nvm)\nOr `npm config set prefix ~/.npm-global`, add ~/.npm-global/bin to PATH, then reinstall",
      });
  }
  let c = Jqn(),
    R = {
      working: c.working ?? !0,
      mode: c.mode,
      systemPath: c.mode === "system" ? c.path : null,
    },
    v = i === "package-manager" ? await ute() : void 0,
    S = await sFt(t);
  return {
    installationType: i,
    version: r,
    installationPath: s,
    invokedBinary: l,
    configInstallMethod: u,
    autoUpdates: (() => {
      let w = hQ();
      return w ? `disabled (${ZUe(w)})` : "enabled";
    })(),
    hasUpdatePermissions: p,
    lastUpdateResult: S,
    multipleInstallations: h,
    warnings: o,
    packageManager: v,
    ripgrepStatus: R,
  };
}
export { Wce, sFt, Ppt, Lbe, ute, Ran, dte, Mbe };

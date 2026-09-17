// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { Z } from "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { lit as S, fromEnum, fromSanitizer_SANITIZER_OUTPUT_ONLY } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { cf, ph, r0, sQ, Ms, u0, r1, Te } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { TZ, dt, l, A, Jr, Jg, W, Nz, Rt, Bp, Kd } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { bc, env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { St, logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { lv, Ri, Wcr } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { getSettingsForSource, getInitialSettings } from "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import { externalHttp } from "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { Pr } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hN } from "../插件系统/chunk-ajtn749s.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { pe } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
import { access as Ae, chmod, writeFile as Me } from "fs/promises";
import { join as N } from "path";
function G() {
  return N(be(), "local");
}
function le() {
  return N(G(), "claude");
}
function L9n() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function se(e, t, r) {
  try {
    return (await Me(e, t, { encoding: "utf8", flag: "wx", mode: r }), !0);
  } catch (o) {
    if (A(o) === "EEXIST") return !1;
    throw o;
  }
}
async function Oe() {
  try {
    let e = G();
    (await ae().mkdir(e),
      await se(
        N(e, "package.json"),
        b({ name: "claude-local", version: "0.0.1", private: !0 }, null, 2),
      ));
    let t = N(e, "claude");
    if (
      await se(
        t,
        `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`,
        493,
      )
    )
      await chmod(t, 493);
    return !0;
  } catch (e) {
    return (
      n(`Failed to set up local package environment: ${e}`, { level: "error" }),
      !1
    );
  }
}
async function Nbe(e, t, r) {
  try {
    if (!(await Oe()))
      return (
        logFeatureBad("update_apply", "update_apply_env_setup_failed"),
        "install_failed"
      );
    let o = t ? t : e === "stable" ? "stable" : "latest",
      s = await execFileNoThrowWithCwd(
        "npm",
        [
          "install",
          `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${o}`,
        ],
        { cwd: G(), maxBuffer: 1e6, useToolMemoryCgroup: !1 },
      );
    if (s.code !== 0)
      return (
        logFeatureBad("update_apply", "update_apply_local_npm_failed"),
        n(`Failed to install Claude CLI package: ${s.stderr}`, {
          level: "error",
        }),
        s.code === 190 ? "in_progress" : "install_failed"
      );
    return (
      await Te((c) => ({ ...c, installMethod: "local" }), r),
      logFeatureOk("update_apply"),
      "success"
    );
  } catch (o) {
    return (
      logFeatureBad("update_apply", "update_apply_local_exception"),
      logError(o),
      "install_failed"
    );
  }
}
async function pte() {
  try {
    return (await Ae(N(G(), "node_modules", ".bin", "claude")), !0);
  } catch {
    return !1;
  }
}
function Fbe() {
  let e = a.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
import { existsSync } from "fs";
import { open as Ue, readFile, stat as Ne } from "fs/promises";
import { homedir as ce } from "os";
import { join as D } from "path";
var ue = /^\s*alias\s+claude\s*=/;
function Gce(e) {
  let t = e?.homedir ?? ce(),
    r = e?.env ?? process.env,
    o = e?.platform ?? "darwin",
    s = e?.fileExists ?? existsSync,
    c = r.ZDOTDIR || t,
    R =
      o === "darwin"
        ? ([".bash_profile", ".bash_login", ".profile"].find((p) =>
            s(D(t, p)),
          ) ?? ".bash_profile")
        : ".bashrc";
  return {
    zsh: D(c, ".zshrc"),
    bash: D(t, R),
    ...(o === "darwin" && { bashrc: D(t, ".bashrc") }),
    fish: D(t, ".config/fish/config.fish"),
  };
}
function aFt(e) {
  let t = !1;
  return {
    filtered: e.filter((o) => {
      if (ue.test(o)) {
        let s = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
        if (!s) s = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
        if (s && s[1]) {
          if (s[1].trim() === le()) return ((t = !0), !1);
        }
      }
      return !0;
    }),
    hadAlias: t,
  };
}
async function Opt(e) {
  try {
    return (await readFile(e, { encoding: "utf8" })).split(`
`);
  } catch (t) {
    if (Rt(t)) return null;
    if (Nz(t))
      return (n(`Skipping ${e}: path is a directory`, { level: "warn" }), null);
    throw t;
  }
}
async function lFt(e, t) {
  let r = await Ue(e, "w");
  try {
    (await r.writeFile(
      t.join(`
`),
      { encoding: "utf8" },
    ),
      await r.datasync());
  } finally {
    await r.close();
  }
}
var De = new Set([
  "EBUSY",
  "EOPNOTSUPP",
  "ENOTSUP",
  "ENOMEM",
  "ERR_FS_FILE_TOO_LARGE",
  "ENOTCONN",
  "EHOSTDOWN",
  "EHOSTUNREACH",
  "ETIMEDOUT",
]);
async function kan(e) {
  let t = Gce(e);
  for (let r of Object.values(t)) {
    let o = await Opt(r).catch((s) => {
      if (Kd(s) || Bp(s) || De.has(A(s) ?? ""))
        return (
          n(
            `Skipping unreadable shell config ${r} during alias scan: ${l(s)}`,
            { level: "warn" },
          ),
          null
        );
      throw s;
    });
    if (!o) continue;
    for (let s of o)
      if (ue.test(s)) {
        let c = s.match(/alias\s+claude=["']?([^"'\s]+)/);
        if (c && c[1]) return c[1];
      }
  }
  return null;
}
async function M9n(e) {
  let t = await kan(e);
  if (!t) return null;
  let r = e?.homedir ?? ce(),
    o = t.startsWith("~") ? t.replace("~", r) : t;
  try {
    let s = await Ne(o);
    if (s.isFile() || s.isSymbolicLink()) return t;
  } catch {}
  return null;
}
var U = pe(pg(), 1);
import { randomBytes } from "crypto";
import { constants } from "fs";
import {
  access as we,
  copyFile,
  readdir,
  rename,
  rm as We,
  stat as K,
  unlink,
  writeFile as me,
} from "fs/promises";
import { homedir as H } from "os";
import { basename, dirname, join as x } from "path";
async function iFt(e, t) {
  let r;
  for (let o = 1; o <= t.attempts; o++)
    try {
      return await e(AbortSignal.timeout(t.timeoutMs));
    } catch (s) {
      if (((r = s), o >= t.attempts)) break;
      t.onRetry?.(o, s);
      let c = 500 * 3 ** (o - 1);
      await Z(c * (0.75 + Math.random() * 0.5));
    }
  throw r;
}
var He = "https://downloads.claude.ai/claude-code-releases";
class Ee extends TZ {}
async function N9n() {
  try {
    let e = await r1("tengu_version_config", { minVersion: "0.0.0" });
    if (
      e.minVersion &&
      r0(
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
        e.minVersion,
      )
    )
      (console.error(`
It looks like your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}) needs an update.
A newer version (${e.minVersion} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.
`),
        Pr(1));
  } catch (e) {
    logError(e);
  }
}
var Ke = 300000;
class ve {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = new Set();
}
var je = new j(() => new ve());
function te() {
  return je.of(B().host);
}
var Ye = 1e4;
function xan() {
  return Math.max(0, Ye - process.uptime() * 1000);
}
function $be() {
  let e = te(),
    t = Date.now();
  if (t - e.lastAutoUpdateCheckAt < Ke)
    return (
      n(
        `auto-update check throttled (last check ${Math.round((t - e.lastAutoUpdateCheckAt) / 1000)}s ago)`,
      ),
      !0
    );
  return ((e.lastAutoUpdateCheckAt = t), !1);
}
async function Dpt() {
  return (await fte()).maxVersion;
}
async function fte() {
  let e = await xe(),
    t = !1,
    r = e.external || void 0,
    o = r ? (U.parse(r)?.version ?? void 0) : void 0;
  if (r && !o)
    (n(`tengu_max_version_config has invalid version '${r}' \u2014 ignoring`, {
      level: "error",
    }),
      i("tengu_max_version_config_invalid", { raw_value: Ms(r) }));
  return {
    maxVersion: o,
    forceDowngradeEnabled: e.external_force_downgrade === !0,
  };
}
function qce(e, t, r) {
  let o = r === "native_update" ? "Native installer" : "AutoUpdater",
    s = U.parse(e);
  if (s && s.compare(t) > 0)
    return (
      n(`${o}: force-downgrade active \u2014 moving from ${e} to ${t}`),
      !0
    );
  return (
    n(
      `${o}: force-downgrade flag set but current ${e} is not above ${t} \u2014 taking normal upgrade path`,
    ),
    !1
  );
}
async function F9n() {
  return (await xe()).external_message || void 0;
}
async function xe() {
  try {
    return await r1("tengu_max_version_config", {});
  } catch (e) {
    return (logError(e), {});
  }
}
function cFt(e) {
  let t = getInitialSettings()?.minimumVersion;
  if (t && !ph(e, t)) return `below your minimumVersion setting (${t})`;
  let r = getSettingsForSource("policySettings")?.requiredMaximumVersion;
  if (r) {
    let o = U.parse(r)?.version;
    if (!o)
      n(
        `requiredMaximumVersion '${r}' is not a valid semver version \u2014 ignoring`,
        { level: "error" },
      );
    else if (!sQ(e, o))
      return `above your organization's requiredMaximumVersion (${r})`;
  }
  return null;
}
function zce(e) {
  let t = cFt(e);
  if (t) n(`Skipping update to ${e}: ${t}`);
  return t !== null;
}
var z = 300000;
function Pe() {
  return x(be(), ".update.lock");
}
function X() {
  return Ce.state("update-lock");
}
async function ze(e) {
  let t = X(),
    r = await e.statMeta(t);
  if (r.ok) {
    if (Date.now() - r.value.mtimeMs < z) return !1;
    let c = await e.statMeta(t);
    if (c.ok) {
      if (Date.now() - c.value.mtimeMs < z) return !1;
      let R = await e.delete(t);
      if (!R.ok)
        return (
          n(
            `AutoUpdater: failed to remove stale update lock: ${R.error.code}`,
            { level: "error" },
          ),
          !1
        );
    } else if (c.error.code !== "NotFound")
      return (
        n(`AutoUpdater: failed to re-stat stale update lock: ${c.error.code}`, {
          level: "error",
        }),
        !1
      );
  } else if (r.error.code !== "NotFound")
    return (
      n(`AutoUpdater: failed to stat update lock: ${r.error.code}`, {
        level: "error",
      }),
      !1
    );
  let o = await e.write(t, `${process.pid}`, {
    precondition: { type: "ifAbsent" },
    mode: 438 & ~process.umask(),
  });
  if (o.ok) return !0;
  if (o.error.code === "AlreadyExists") return !1;
  return (
    n(`AutoUpdater: failed to create update lock: ${o.error.code}`, {
      level: "error",
    }),
    !1
  );
}
async function qe(e) {
  if (M() && e) return ze(e);
  let t = ae(),
    r = Pe();
  try {
    let o = await t.stat(r);
    if (Date.now() - o.mtimeMs < z) return !1;
    try {
      let c = await t.stat(r);
      if (Date.now() - c.mtimeMs < z) return !1;
      await t.unlink(r);
    } catch (c) {
      if (!W(c)) return (logError(c), !1);
    }
  } catch (o) {
    if (!W(o)) return (logError(o), !1);
  }
  try {
    return (
      await me(r, `${process.pid}`, { encoding: "utf8", flag: "wx" }),
      !0
    );
  } catch (o) {
    let s = A(o);
    if (s === "EEXIST") return !1;
    if (s === "ENOENT")
      try {
        return (
          await t.mkdir(be()),
          await me(r, `${process.pid}`, { encoding: "utf8", flag: "wx" }),
          !0
        );
      } catch (c) {
        if (A(c) === "EEXIST") return !1;
        return (
          n(`Failed to create config dir or update lock file: ${c}`, {
            level: "error",
          }),
          !1
        );
      }
    return (
      n(`AutoUpdater: failed to create update lock file ${r}: ${o}`, {
        level: "error",
      }),
      !1
    );
  }
}
async function Je(e) {
  if (M() && e) {
    let o = await e.read([X()]);
    if (!o.ok) {
      n(`AutoUpdater: failed to release update lock: ${o.error.code}`, {
        level: "error",
      });
      return;
    }
    let s = o.value.items[0];
    if (!s.found) return;
    if (Buffer.from(s.value).toString("utf8") === `${process.pid}`) {
      let c = await e.delete(X());
      if (!c.ok)
        n(`AutoUpdater: failed to release update lock: ${c.error.code}`, {
          level: "error",
        });
    }
    return;
  }
  let t = ae(),
    r = Pe();
  try {
    if ((await t.readFile(r, { encoding: "utf8" })) === `${process.pid}`)
      await t.unlink(r);
  } catch (o) {
    if (W(o)) return;
    n(`AutoUpdater: failed to release update lock file ${r}: ${o}`, {
      level: "error",
    });
  }
}
function re() {
  let e = process.execPath.replace(/\\/g, "/"),
    t = (a.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (
    e.includes("/.bun/install/global/") ||
    (t && e.startsWith(t + "/install/global/"))
  )
    return "bun";
  return a.isRunningWithBun() && !bc() ? "bun" : "npm";
}
async function ke() {
  let e = re() === "bun",
    t = null;
  if (e)
    t = await execFileNoThrowWithCwd("bun", ["pm", "bin", "-g"], {
      cwd: H(),
      useToolMemoryCgroup: !1,
    });
  else
    t = await execFileNoThrowWithCwd("npm", ["-g", "config", "get", "prefix"], {
      cwd: H(),
      useToolMemoryCgroup: !1,
    });
  if (t.code !== 0)
    return (
      n(
        `Failed to check ${e ? "bun" : "npm"} permissions (exit ${t.code}): ${t.stderr.trim()}`,
        { level: "error" },
      ),
      null
    );
  return t.stdout.trim() || null;
}
async function Ze() {
  let e = await ke();
  if (!e) return [];
  if (re() === "bun") return [x(e, "claude")];
  if (P() === "windows") return [x(e, "claude.cmd"), x(e, "claude.exe")];
  return [x(e, "bin", "claude")];
}
async function $9n() {
  try {
    let e = await ke();
    if (!e) return { hasPermissions: !1, npmPrefix: null };
    try {
      return (await we(e, constants.W_OK), { hasPermissions: !0, npmPrefix: e });
    } catch {
      return (
        n("Insufficient permissions for global npm install.", {
          level: "error",
        }),
        { hasPermissions: !1, npmPrefix: e }
      );
    }
  } catch (e) {
    return (logError(e), { hasPermissions: !1, npmPrefix: null });
  }
}
async function Ube(e) {
  let t = e === "stable" ? "stable" : "latest",
    r = await execFileNoThrowWithCwd(
      "npm",
      [
        "view",
        `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${t}`,
        "version",
        "--prefer-online",
      ],
      {
        abortSignal: AbortSignal.timeout(5000),
        cwd: H(),
        useToolMemoryCgroup: !1,
      },
    );
  if (r.code !== 0) {
    let o = r.stdout.trim();
    if (o && U.parse(o)) {
      if (
        (logFeatureSad("update_check", "update_check_npm_view_stderr_warning"),
        n(
          `npm view exited ${r.code} but printed a valid version (${o}) \u2014 treating stderr as a warning`,
        ),
        r.stderr)
      )
        n(`npm stderr: ${r.stderr.trim()}`);
      return o;
    }
    if (
      (logFeatureBad("update_check", "update_check_npm_view_failed"),
      n(`npm view failed with code ${r.code}`),
      r.stderr)
    )
      n(`npm stderr: ${r.stderr.trim()}`);
    else n("npm stderr: (empty)");
    if (r.stdout) n(`npm stdout: ${r.stdout.trim()}`);
    return null;
  }
  return (logFeatureOk("update_check"), r.stdout.trim() || null);
}
var ge = 5000,
  he = 3;
async function uFt(e) {
  if (St()) return null;
  let t = 0;
  try {
    let r = await iFt(
      (o) => (
        t++,
        hN.get(`${He}/${e}`, { timeout: ge, responseType: "text", signal: o })
      ),
      {
        attempts: he,
        timeoutMs: ge,
        onRetry: (o, s) => {
          n(
            `Failed to fetch ${e} from GCS on attempt ${o}/${he}, retrying: ${s}`,
          );
        },
      },
    );
    if (t > 1) logFeatureSad("update_check", "update_check_gcs_retry");
    else logFeatureOk("update_check");
    return r.data.trim();
  } catch (r) {
    return (
      logFeatureBad("update_check", "update_check_gcs_failed"),
      n(`Failed to fetch ${e} from GCS after ${t} attempt(s): ${r}`),
      null
    );
  }
}
async function Xe(e) {
  if (St()) return null;
  try {
    let r = (
      await externalHttp.get(`https://formulae.brew.sh/api/cask/${e}.json`, {
        timeout: 5000,
        responseType: "json",
      })
    ).data?.version;
    return (logFeatureOk("update_check"), typeof r === "string" ? r : null);
  } catch (t) {
    return (
      logFeatureBad("update_check", "update_check_homebrew_failed"),
      n(`Failed to fetch ${e} from formulae.brew.sh: ${t}`),
      null
    );
  }
}
async function hze(e, t) {
  let [r, o] = await Promise.all([Xe(e), uFt(t)]);
  return r ?? o;
}
function Vce() {
  return te().updateRestoreFailure;
}
async function Qe(e) {
  if (!e.updateRestoreFailure) return;
  if (await ne(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null)
    e.updateRestoreFailure = {
      originalPath: e.updateRestoreFailure.originalPath,
      preservedPath: await $e(e, e.updateRestoreFailure.preservedPath),
    };
}
function ne(e) {
  return we(e, constants.F_OK).then(
    () => !0,
    () => !1,
  );
}
function Se() {
  let e = x(dirname(process.execPath), "..", "..");
  return [x(e, ".."), e];
}
async function Re() {
  return (
    await Promise.all(
      Se().map((t) =>
        readdir(t, { withFileTypes: !0 })
          .then((r) =>
            r
              .filter((o) => o.isDirectory() && o.name.startsWith("."))
              .map((o) => x(t, o.name)),
          )
          .catch(() => []),
      ),
    )
  ).flat();
}
async function Q(e, t) {
  let r = await K(t, { bigint: !0 }).then(
    (o) => o.ino,
    () => 0n,
  );
  return r !== 0n && e.mintedPreservedInodes.has(r);
}
async function $e(e, t) {
  if (await Q(e, t)) return t;
  let r = basename(t),
    o = (await Re()).flatMap((s) => [x(s, r), x(s, "bin", r)]);
  for (let s of o) if (await Q(e, s)) return s;
  return null;
}
async function ee(e, t) {
  await ae().mkdir(dirname(t));
  try {
    let o = dirname(t),
      s = `${basename(t)}.restoring.`;
    for (let c of await readdir(o))
      if (c.startsWith(s)) await unlink(x(o, c)).catch(() => {});
  } catch {}
  let r = `${t}.restoring.${randomBytes(4).toString("hex")}`;
  try {
    await copyFile(e, r);
    try {
      await Ri(r, t);
    } catch (o) {
      let s = A(o);
      if (s === void 0 || !lv.has(s)) throw o;
      if (!(await ne(t))) throw o;
      try {
        await copyFile(r, t);
      } catch (c) {
        if (Wcr.has(A(c) ?? "")) await unlink(t).catch(() => {});
        throw c;
      }
      await unlink(r).catch(() => {});
    }
  } catch (o) {
    throw (await unlink(r).catch(() => {}), o);
  }
}
async function et(e, t) {
  let r = basename(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    o = new RegExp(`^${r}\\.old\\.(\\d+)$`),
    s = (
      await Promise.all(
        t.flatMap((p) =>
          [p, x(p, "bin")].map(async (E) =>
            (await readdir(E).catch(() => []))
              .map((T) => o.exec(T))
              .filter((T) => T !== null)
              .map((T) => ({ path: x(E, T[0]), ts: Number(T[1]) })),
          ),
        ),
      )
    ).flat(),
    R = (
      await Promise.all(s.map(async (p) => ((await Q(e, p.path)) ? [p] : [])))
    )
      .flat()
      .reduce((p, E) => (p === null || E.ts > p.ts ? E : p), null);
  if (!R) {
    n(
      `No preserved ${basename(process.execPath)}.old.<ts> found in ${t.length} retired dir(s) \u2014 sweep restore skipped`,
    );
    return;
  }
  try {
    (await ee(R.path, process.execPath),
      logFeatureOk("update_apply_heal", { heal_kind: S("sweep") }),
      n(
        `Restored missing ${process.execPath} from preserved copy ${R.path} before update attempt`,
      ));
  } catch (p) {
    let E = Jg(p);
    (logFeatureBad("update_apply_heal", "sweep_restore_failed", {
      ...(E && { err_code: E }),
      heal_kind: S("sweep"),
    }),
      n(
        `Failed to restore missing ${process.execPath} from preserved copy ${R.path}: ${p}`,
      ));
  }
}
async function Bbe(e, t) {
  let r = te();
  if (!(await qe(t)))
    return (
      logFeatureSad("update_apply", "update_apply_lock_contention"),
      n("Another process is currently installing an update", {
        level: "error",
      }),
      i("tengu_auto_updater_lock_contention", {
        pid: process.pid,
        currentVersion: Ms(
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
          }.VERSION,
        ),
      }),
      { status: "in_progress" }
    );
  let o = r.updateRestoreFailure;
  try {
    await tt();
    let s = re();
    if (s === "npm" && a.isNpmFromWindowsPath())
      return (
        logFeatureBad("update_apply", "update_apply_wsl_windows_npm"),
        n("Windows NPM detected in WSL environment", { level: "error" }),
        i("tengu_auto_updater_windows_npm_in_wsl", {
          currentVersion: Ms(
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
            }.VERSION,
          ),
        }),
        console.error(`
Error: Windows NPM detected in WSL

You're running Claude Code in WSL but using the Windows NPM installation from /mnt/c/.
This configuration is not supported for updates.

To fix this issue:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux NPM is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`),
        { status: "install_failed" }
      );
    let c = e
        ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${e}`
        : {
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
          }.PACKAGE_URL,
      R =
        P() === "windows" &&
        bc() &&
        process.execPath
          .replace(/\\/g, "/")
          .includes("/node_modules/@anthropic-ai/"),
      p = [];
    if (R) {
      let [, _] = Se(),
        w = (
          await Promise.all(
            (await Re()).map(async (d) =>
              (await Promise.all([
                readdir(d).catch(() => []),
                readdir(x(d, "bin")).catch(() => []),
              ]).then(([k, v]) =>
                [...k, ...v].some((I) => /\.exe\.old\.\d+$/.test(I)),
              ))
                ? [d]
                : [],
            ),
          )
        ).flat();
      if (w.length > 0)
        if (await ne(process.execPath))
          await Promise.all(
            w.map((d) =>
              We(d, { recursive: !0, force: !0 }).catch((m) =>
                n(`retired-dir cleanup failed: ${m}`),
              ),
            ),
          );
        else await et(r, w);
      let C = Date.now(),
        O = await K(process.execPath, { bigint: !0 })
          .then((d) => d.ino)
          .catch(() => 0n),
        F = [process.execPath];
      for (let d of await readdir(_).catch(() => []))
        for (let m of ["claude.exe", "cli.exe"]) {
          let k = x(_, d, m);
          if (k === process.execPath) continue;
          let v = await K(k, { bigint: !0 })
            .then((I) => I.ino)
            .catch(() => -1n);
          if (O && v === O) F.push(k);
        }
      for (let d of F) {
        let m = `${d}.old.${C}`;
        try {
          await rename(d, m);
        } catch {
          continue;
        }
        p.push([d, m]);
        let k = await K(m, { bigint: !0 }).then(
          (v) => v.ino,
          () => 0n,
        );
        if (k !== 0n) r.mintedPreservedInodes.add(k);
      }
    }
    let E = await execFileNoThrowWithCwd(s, ["install", "-g", c], {
        cwd: H(),
        useToolMemoryCgroup: !1,
      }),
      T = 0,
      oe = 0,
      q = [];
    if (p.length && E.code !== 0) {
      for (let [w, C] of p)
        try {
          await rename(C, w);
        } catch (O) {
          try {
            (await ee(C, w),
              n(`Restored ${w} by copy after rename failed: ${O}`),
              await unlink(C).catch((F) =>
                n(`Failed to remove ${C} after copy-restore: ${F}`),
              ));
          } catch (F) {
            let d = await $e(r, C),
              m;
            if (d !== null && d !== C)
              try {
                (await ee(d, w),
                  oe++,
                  n(
                    `Restored ${w} from retired-dir copy ${d} after rename (${O}) and copy (${F}) both failed`,
                  ));
                continue;
              } catch (v) {
                ((m = v),
                  n(`Failed to restore ${w} from retired-dir copy ${d}: ${v}`));
              }
            let k =
              d === null
                ? S("gone")
                : d === C
                  ? S("original_dir")
                  : S("retired_dir");
            if ((T++, q.length === 0)) {
              let v = Jg(O),
                I = Jg(F),
                ie = m === void 0 ? void 0 : Jg(m);
              logFeatureBad("update_apply", "update_apply_restore_failed", {
                ...(v && { rename_err_code: v }),
                ...(I && { copy_err_code: I }),
                ...(ie && { relocate_err_code: ie }),
                preserved_state: k,
              });
            }
            (q.push({ originalPath: w, preservedPath: d }),
              logError(
                dt(
                  new Ee(
                    `Failed to restore ${w} after install failure: rename: ${O}; copy: ${F}; preserved copy: ${d ?? "not found"}`,
                  ),
                  `Failed to restore executable after install failure: rename=${Jr(O) ?? "unknown"} copy=${Jr(F) ?? "unknown"} relocate=${m === void 0 ? (d === null ? "not_found" : "skipped") : (Jr(m) ?? "unknown")}`,
                ),
              ));
          }
        }
      if (oe > 0 && T === 0)
        logFeatureOk("update_apply_heal", { heal_kind: S("relocate") });
      let _ = new Set(p.map(([w]) => w));
      r.updateRestoreFailure =
        q[0] ??
        (r.updateRestoreFailure && !_.has(r.updateRestoreFailure.originalPath)
          ? r.updateRestoreFailure
          : null);
    }
    if (E.code !== 0) {
      let _ = `${E.stdout} ${E.stderr}`,
        w = rt(_),
        C = p.length === 0 ? "not_attempted" : T === 0 ? "restored" : "partial";
      if (w === "warning_only") {
        let F = await Ze(),
          d = e ? U.parse(e)?.version : void 0,
          m,
          k = !1;
        for (let v of F) {
          let I = await execFileNoThrowWithCwd(v, ["--version"], {
            abortSignal: AbortSignal.timeout(45000),
            cwd: H(),
            useToolMemoryCgroup: !1,
          });
          if (
            ((m = U.parse(I.stdout.trim().split(/\s+/)[0])?.version),
            (k =
              I.code === 0 &&
              m != null &&
              (d != null
                ? m === d
                : cf(
                    m,
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
                    }.VERSION,
                  ))),
            k)
          )
            break;
        }
        if (k)
          return (
            await Te((v) => ({ ...v, installMethod: "global" }), t),
            (r.updateRestoreFailure = null),
            logFeatureSad("update_apply", "update_apply_npm_install_stderr_warning"),
            n(
              `npm/bun exited ${E.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${m}): ${_}`,
            ),
            { status: "success" }
          );
      }
      if (
        (i("tengu_auto_updater_npm_failure", {
          npm_exit_code: E.code,
          package_manager: fromEnum(s),
          is_bundled_mode: bc(),
          platform: u0(P()),
          windows_self_rename: fromEnum(C),
          stderr_signature: fromEnum(w),
          npm_error_code: nt(_) ?? S("none"),
        }),
        P() === "windows" &&
          /\b(?:claude|cli)\.exe\b/i.test(_) &&
          (/\bEBUSY\b|resource busy or locked/i.test(_) ||
            (/\bEPERM\b|operation not permitted/i.test(_) &&
              (p.length > 0 ||
                /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(
                  _,
                )))))
      )
        return (
          logFeatureBad("update_apply", "update_apply_exe_locked"),
          n(
            `Failed to install new version of claude (running executable is locked): ${_}`,
            { level: "error" },
          ),
          { status: "install_failed", failureHint: "windows_running_exe_lock" }
        );
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(_))
        return (
          logFeatureBad("update_apply", "update_apply_no_permissions"),
          n("Insufficient permissions for global npm install.", {
            level: "error",
          }),
          { status: "no_permissions" }
        );
      if (w === "warning_only")
        return (
          logFeatureBad("update_apply", "update_apply_npm_install_stderr_warning"),
          n(
            `npm/bun exited ${E.code} with only warnings on stderr but the re-probe did not confirm an advance: ${_}`,
            { level: "error" },
          ),
          { status: "install_failed" }
        );
      return (
        logFeatureBad("update_apply", "update_apply_npm_install_failed"),
        n(`Failed to install new version of claude: ${_}`, { level: "error" }),
        { status: "install_failed" }
      );
    }
    return (
      await Te((_) => ({ ..._, installMethod: "global" }), t),
      (r.updateRestoreFailure = null),
      logFeatureOk("update_apply"),
      { status: "success" }
    );
  } finally {
    if (r.updateRestoreFailure !== null && r.updateRestoreFailure === o)
      await Qe(r);
    await Je(t);
  }
}
async function tt() {
  let e = Gce();
  for (let [, t] of Object.entries(e))
    try {
      let r = await Opt(t);
      if (!r) continue;
      let { filtered: o, hadAlias: s } = aFt(r);
      if (s) (await lFt(t, o), n(`Removed claude alias from ${t}`));
    } catch (r) {
      n(`Failed to remove alias from ${t}: ${r}`, { level: "error" });
    }
}
function rt(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e))
    return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (
    /\bE5\d\d\b/i.test(e) ||
    /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(
      e,
    )
  )
    return "registry_5xx";
  if (
    /\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) ||
    /\btimed[\s-]?out\b/i.test(e) ||
    /\btimeout\b/i.test(e)
  )
    return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e))
    return "ebusy";
  let t =
      /npm warn/i.test(e) ||
      /unknown user config/i.test(e) ||
      /npm notice/i.test(e),
    r =
      /npm err/i.test(e) ||
      /\b(EACCES|EPERM|ETARGET)\b/i.test(e) ||
      /code E/i.test(e);
  if (t && !r) return "warning_only";
  return "unknown";
}
function nt(e) {
  let t =
    /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(
      e,
    )?.[1];
  return t === void 0 ? void 0 : fromSanitizer_SANITIZER_OUTPUT_ONLY(t);
}
export {
  iFt,
  L9n,
  Nbe,
  pte,
  Fbe,
  Gce,
  aFt,
  Opt,
  lFt,
  kan,
  M9n,
  N9n,
  xan,
  $be,
  Dpt,
  fte,
  qce,
  F9n,
  cFt,
  zce,
  $9n,
  Ube,
  uFt,
  hze,
  Vce,
  Bbe,
};

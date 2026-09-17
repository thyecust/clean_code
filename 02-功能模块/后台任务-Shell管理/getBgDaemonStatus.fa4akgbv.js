// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 77 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { STORAGE_KEYS } from "../Teammates团队/storage-keys.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { pluralize } from "../../01-核心基础设施/核心工具-字符串与文本/string-utils.js";
import { getVerifiedDaemonLock } from "./daemon-lock.js";
import { getDaemonRuntimeDir, redactDaemonNonce, getRosterFilePath, getControlSocketPath } from "./chunk-djserjj5.js";
import { BG_PROTO, rosterKey, readRoster } from "./chunk-7wsy8vxb.js";
import { controlRequest } from "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import { tF } from "./chunk-jfk5mpe1.js";
import { DAEMON_CONFIG_MAX_BYTES, readDaemonConfigContent } from "../权限系统/chunk-3kjwvb3e.js";
import { getDaemonJsonPath, getDaemonLogPath } from "../../01-核心基础设施/共享小工具-未细化/daemon-paths.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { readFile, stat as f } from "fs/promises";
async function getBgDaemonStatus(e) {
  let r = await getVerifiedDaemonLock(1, e).catch(() => null),
    t = r?.logPath ?? getDaemonLogPath(),
    [n, i, o, a, k, b] = await Promise.all([
      controlRequest({ op: "ping", proto: BG_PROTO }, { timeoutMs: 1000 }).catch((l) => ({
        ok: !1,
        code: "ENOCONN",
        error: String(l),
      })),
      readRoster({ silent: !0 }, e),
      S(e),
      v(t, e),
      tF().catch(() => !1),
      y(getDaemonJsonPath(), e),
    ]),
    u;
  try {
    u = getControlSocketPath();
  } catch {
    u = getCurrentPlatform() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : "<unavailable>";
  }
  let d = null,
    g = null,
    p = [];
  if (n.ok) {
    let l = { ok: !1 },
      [c, m] = await Promise.all([
        controlRequest({ op: "list", proto: BG_PROTO }, { timeoutMs: 1000 }).catch(() => l),
        controlRequest({ op: "leases", proto: BG_PROTO }, { timeoutMs: 1000 }).catch(() => l),
      ]);
    if (c.ok && "jobs" in c) {
      d = countMatching(c.jobs, (s) => !s.outcome);
      let w =
        r?.version ??
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
        }.VERSION;
      g = countMatching(
        c.jobs,
        (s) => !s.outcome && s.cliVersion !== void 0 && s.cliVersion !== w,
      );
    }
    if (m.ok && "clients" in m) p = m.clients;
  }
  return {
    supervisor: r
      ? {
          pid: r.pid,
          version: r.version,
          uptimeSec: Math.floor((Date.now() - r.startedAt) / 1000),
        }
      : null,
    sockDir: getCurrentPlatform() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : getDaemonRuntimeDir(),
    controlSock: u,
    controlReachable: n.ok,
    controlError: n.ok ? void 0 : redactDaemonNonce(n.error),
    workersLive: d,
    workersSkewed: g,
    workersRoster: Object.keys(i.workers).length,
    rosterAgeSec: o ? Math.floor((Date.now() - o.mtimeMs) / 1000) : null,
    bgDisabled: r?.bgDisabled === !0,
    logPath: t,
    logSizeBytes: a?.size ?? null,
    serviceInstalled: k,
    configuredWorkers: b,
    leaseClients: p,
  };
}
async function S(e) {
  if (e) {
    let r = await e.statMeta(rosterKey()).catch(() => {
      return;
    });
    return r?.ok ? { mtimeMs: r.value.mtimeMs } : null;
  }
  return f(getRosterFilePath()).catch(() => null);
}
async function v(e, r) {
  if (r && e === getDaemonLogPath()) {
    let t = await r.statMeta(STORAGE_KEYS.state("daemon-log")).catch(() => {
      return;
    });
    return t?.ok ? { size: t.value.size } : null;
  }
  return f(e).catch(() => null);
}
async function y(e, r) {
  let t;
  if (r && e === getDaemonJsonPath()) {
    let o = await readDaemonConfigContent(r);
    if (o.kind !== "text") return 0;
    t = o.text;
  } else
    try {
      let o = await f(e);
      if (!o.isFile() || o.size > DAEMON_CONFIG_MAX_BYTES) return 0;
      t = await readFile(e, "utf8");
    } catch {
      return 0;
    }
  let n = xt(t, !1);
  if (n === null || typeof n !== "object") return 0;
  let i = 0;
  for (let [o, a] of Object.entries(n)) {
    if (o === "$schema") continue;
    i += Array.isArray(a) ? a.length : 1;
  }
  return i;
}
function formatBgDaemonStatus(e) {
  let r = ["", "bg sessions:"];
  if (
    (r.push(`  sock dir:     ${e.sockDir}`),
    r.push(
      `  control.sock: ${e.controlReachable ? "reachable" : `unreachable (${e.controlError ?? "unknown"})`}`,
    ),
    e.bgDisabled)
  )
    r.push(
      "  bg sessions:  disabled (start failure \u2014 see daemon.log; restart the service after fixing)",
    );
  if (e.workersLive !== null) {
    if (
      (r.push(
        `  bg workers:   ${e.workersLive} running (control.sock), ${e.workersRoster} in roster.json`,
      ),
      e.workersSkewed && e.workersSkewed > 0)
    )
      r.push(
        `                ${e.workersSkewed} from a different CLI version (most stay attachable and upgrade automatically once idle \u2014 exec runs never respawn)`,
      );
  } else
    r.push(
      `  bg workers:   ${e.workersRoster} in roster.json (${e.controlReachable ? "live count unavailable" : "control unreachable"})`,
    );
  if (
    (r.push(
      `  roster.json:  ${e.rosterAgeSec === null ? "absent" : `updated ${e.rosterAgeSec}s ago`}`,
    ),
    r.push(
      `  daemon.log:   ${e.logSizeBytes === null ? "absent" : `${B(e.logSizeBytes)} at ${e.logPath}`}`,
    ),
    !e.supervisor && !e.controlReachable && e.workersRoster > 0)
  )
    r.push(
      `  warning:      supervisor not running but ${e.workersRoster} ${pluralize(e.workersRoster, "worker")} in roster \u2014 running \`claude agents\` restarts the daemon and re-adopts still-running sessions; run \`claude daemon stop --any\` to reap them instead`,
    );
  return r.join(`
`);
}
function B(e) {
  if (e < 1024) return `${e}B`;
  if (e < 1048576) return `${(e / 1024).toFixed(1)}KB`;
  return `${(e / 1024 / 1024).toFixed(1)}MB`;
}
export { formatBgDaemonStatus, getBgDaemonStatus };

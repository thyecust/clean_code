// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 77 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { Ce } from "../Teammates团队/chunk-qe04h4c5.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { x } from "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import { Rh } from "./chunk-5jv5fvbn.js";
import { KY, g_, zI, VI } from "./chunk-djserjj5.js";
import { BG_PROTO, rosterKey, readRoster } from "./chunk-7wsy8vxb.js";
import { controlRequest } from "../../01-核心基础设施/共享小工具-未细化/chunk-9fpz6abc.js";
import { tF } from "./chunk-jfk5mpe1.js";
import { kle, Y0e } from "../权限系统/chunk-3kjwvb3e.js";
import { getDaemonJsonPath, getDaemonLogPath } from "../../01-核心基础设施/共享小工具-未细化/daemon-paths.js";
import { P } from "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { countMatching } from "../../01-核心基础设施/共享小工具-未细化/chunk-d16fhdtx.js";
import { readFile, stat as f } from "fs/promises";
async function getBgDaemonStatus(e) {
  let r = await Rh(1, e).catch(() => null),
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
    u = VI();
  } catch {
    u = P() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : "<unavailable>";
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
    sockDir: P() === "windows" ? "\\\\.\\pipe\\cc-daemon-*" : KY(),
    controlSock: u,
    controlReachable: n.ok,
    controlError: n.ok ? void 0 : g_(n.error),
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
  return f(zI()).catch(() => null);
}
async function v(e, r) {
  if (r && e === getDaemonLogPath()) {
    let t = await r.statMeta(Ce.state("daemon-log")).catch(() => {
      return;
    });
    return t?.ok ? { size: t.value.size } : null;
  }
  return f(e).catch(() => null);
}
async function y(e, r) {
  let t;
  if (r && e === getDaemonJsonPath()) {
    let o = await Y0e(r);
    if (o.kind !== "text") return 0;
    t = o.text;
  } else
    try {
      let o = await f(e);
      if (!o.isFile() || o.size > kle) return 0;
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
      `  warning:      supervisor not running but ${e.workersRoster} ${x(e.workersRoster, "worker")} in roster \u2014 running \`claude agents\` restarts the daemon and re-adopts still-running sessions; run \`claude daemon stop --any\` to reap them instead`,
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

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as RT } from "../../02-功能模块/文件监听-Watch/文件监听-Watch.3efypmps.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { getFileStorage } from "../文件存储-原子写入/file-storage.js";
import { Qs, Si } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../核心工具-路径与平台/chunk-h62vxw7j.js";
import { logForDebugging } from "../核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { xt } from "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import { createLazyValue } from "../核心工具-并发与缓存/lazy-value.js";
import { WORKER_KINDS } from "../../02-功能模块/认证-OAuth登录/daemon-worker-runtime.js";
import { DAEMON_CONFIG_MAX_BYTES, readDaemonConfigContent } from "../../02-功能模块/权限系统/chunk-3kjwvb3e.js";
import { getDaemonJsonPath } from "../../02-功能模块/守护服务-Daemon/daemon-paths.js";
import { s, v, c, $e } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { getCurrentPlatform } from "../核心工具-路径与平台/platform-detection.js";
import { stat } from "fs/promises";
import { basename, dirname, normalize } from "path";
function x(r) {
  return $e([r, v(r)])
    .optional()
    .transform((o) => (o === void 0 ? [] : Array.isArray(o) ? o : [o]));
}
var p = createLazyValue(() => {
  let r = Si(WORKER_KINDS, (o) => x(o.schema()));
  return c({ $schema: s().optional(), ...r });
});
function getDefaultDaemonConfig() {
  return p().parse({});
}
async function loadDaemonConfig(r, o) {
  let t;
  if (isHoverRestEnabled() && o !== void 0 && r === getDaemonJsonPath()) {
    let e = await D(o, r);
    if (!e.ok) return e.result;
    t = e.raw;
  } else
    try {
      let e = await stat(r).catch((d) =>
        A(d) === "ENOENT" ? null : Promise.reject(d),
      );
      if (e && (!e.isFile() || e.size > DAEMON_CONFIG_MAX_BYTES))
        return {
          ok: !1,
          error: `${r} is not a regular file (or exceeds 1MiB)`,
        };
      t = await getFileStorage().read(r);
    } catch (e) {
      if (A(e) === "ENOENT") return { ok: !0, config: getDefaultDaemonConfig(), unknownKeys: [] };
      return { ok: !1, error: `failed to read ${r}: ${l(e)}` };
    }
  let i = xt(t, !1);
  if (i === null) return { ok: !1, error: `failed to parse ${r} as JSON` };
  let f = p().safeParse(i);
  if (!f.success)
    return { ok: !1, error: `config validation failed: ${f.error.message}` };
  let a = new Set(Object.keys(p().shape)),
    u =
      typeof i === "object" && i !== null
        ? Object.keys(i).filter((e) => !a.has(e))
        : [];
  return { ok: !0, config: f.data, unknownKeys: u };
}
async function D(r, o) {
  let t = await readDaemonConfigContent(r);
  switch (t.kind) {
    case "text":
      return { ok: !0, raw: t.text };
    case "absent":
      return { ok: !1, result: { ok: !0, config: getDefaultDaemonConfig(), unknownKeys: [] } };
    case "refused":
      return {
        ok: !1,
        result: {
          ok: !1,
          error: `${o} is not a regular file (or exceeds 1MiB)`,
        },
      };
    case "failed":
      return {
        ok: !1,
        result: { ok: !1, error: `failed to read ${o}: ${t.error.code}` },
      };
    case "threw":
      return {
        ok: !1,
        result: { ok: !1, error: `failed to read ${o}: ${l(t.error)}` },
      };
  }
}
function watchDaemonConfigFile(r, o) {
  let t = dirname(r),
    i = normalize(t),
    f = basename(r),
    a = RT.watch(t, {
      persistent: !0,
      ignoreInitial: !0,
      depth: 0,
      usePolling: getCurrentPlatform() === "macos",
      interval: 100,
      ignored: (u) => {
        let e = normalize(u);
        return e !== i && basename(e) !== f;
      },
      awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
      atomic: !0,
      ignorePermissionErrors: !0,
    });
  return (
    a.on("add", o),
    a.on("change", o),
    a.on("unlink", o),
    a.on("error", (u) =>
      logForDebugging(`[daemon-config] watcher error: ${l(u)}`, { level: "warn" }),
    ),
    () => void a.close().catch(() => {})
  );
}
function diffDaemonConfigs(r, o) {
  let t = { stop: [], start: [], restart: [] };
  for (let i of Object.keys(WORKER_KINDS)) {
    let f = r[i] ?? [],
      a = o[i] ?? [],
      u = Math.max(f.length, a.length);
    for (let e = 0; e < u; e++) {
      let d = `${i}:${e}`,
        k = f[e],
        g = a[e];
      if (k !== void 0 && g === void 0)
        t.stop.push({ id: d, kind: i, previousConfig: k });
      else if (k === void 0 && g !== void 0)
        t.start.push({ id: d, kind: i, config: g });
      else if (!Qs(k, g))
        t.restart.push({ id: d, kind: i, config: g, previousConfig: k });
    }
  }
  return t;
}
export { getDefaultDaemonConfig, loadDaemonConfig, watchDaemonConfigFile, diffDaemonConfigs };

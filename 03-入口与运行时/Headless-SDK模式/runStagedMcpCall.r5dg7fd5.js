// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 70 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { mcpCallRequestSchema } from "../../02-功能模块/认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createAbortController } from "../核心应用-Agent循环/chunk-h3cty6gp.js";
import { Si } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { jsonStringify } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { l, A, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/核心工具-日志与脱敏/diagnostics-log.js";
import { getPluginToolStagingDir } from "../../01-核心基础设施/核心工具-路径与平台/temp-directory.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { SYNCED_FILE_ROOT, WORKING_FILESTORE_PREFIX, MAX_WORKING_FILE_BYTES, relUnderSyncDir, getSyncedFile, writeLaneRowFromWorker } from "../核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { parseIsoTimestamp } from "../../02-功能模块/记忆-CLAUDE.md/chunk-3ehd7vx0.js";
import { getCurrentPlatform } from "../../01-核心基础设施/核心工具-路径与平台/platform-detection.js";
import { isRecord } from "../../01-核心基础设施/核心工具-类型与数值/is-record.js";
import { constants } from "fs";
import {
  mkdir,
  mkdtemp,
  open as nt,
  realpath,
  rm as H,
  writeFile,
} from "fs/promises";
import { posix } from "path";
var { extname: it, join: x } = posix,
  st = 120000,
  lt = 600000,
  ut = 1000,
  ct = 2000,
  J = /^\{\{(in|out):([A-Za-z0-9_-]{1,64})\}\}$/,
  L = "cancelled by client";
function r(e, t, a, i) {
  return { staging: Q(e, t, a), telemetryCode: i };
}
function U(e, t) {
  if (typeof e === "string") {
    if (J.test(e)) t.add(e);
    return;
  }
  if (Array.isArray(e)) {
    for (let a of e) U(a, t);
    return;
  }
  if (isRecord(e)) for (let a of Object.values(e)) U(a, t);
}
function G(e, t) {
  if (typeof e === "string") {
    if (J.test(e)) return t.get(e) ?? e;
    return e;
  }
  if (Array.isArray(e)) return e.map((a) => G(a, t));
  if (isRecord(e)) return Si(e, (a) => G(a, t));
  return e;
}
function V(e) {
  let t = it(e);
  return /^\.[A-Za-z0-9]{1,8}$/.test(t) ? t : "";
}
async function runStagedMcpCall(e, t) {
  let a, i, h;
  try {
    let d = await ft(e, t);
    ((a = d.staging), (i = d.tool), (h = d.telemetryCode));
  } catch (d) {
    let N = A(d);
    a = Q("tool_error", `unexpected failure: ${N ?? l(d)}`);
  }
  if (t.signal?.aborted) return { staging: a, tool: i };
  if (a.ok) logFeatureOk("ccr_mcp_call_staged");
  else logFeatureBad("ccr_mcp_call_staged", h ?? a.error_code);
  return { staging: a, tool: i };
}
function Q(e, t, a) {
  return {
    ok: !1,
    error_code: e,
    detail: t.slice(0, ct).replace(/[\uD800-\uDBFF]$/, ""),
    ...(a !== void 0 && { retryable: a }),
  };
}
function dt(e) {
  if (typeof e === "string") return e;
  if (Array.isArray(e))
    return e
      .map((t) =>
        t !== null &&
        typeof t === "object" &&
        "text" in t &&
        typeof t.text === "string"
          ? t.text
          : "",
      )
      .filter(Boolean).join(`
`);
  return "";
}
async function ft(e, t) {
  let a = mcpCallRequestSchema().safeParse(e);
  if (!a.success) return r("tool_error", `invalid request: ${a.error.message}`);
  let i = a.data;
  if (getCurrentPlatform() === "windows")
    return r("tool_error", "staged mcp_call is not supported on this platform");
  if (i.output_files !== void 0 && i.expires_at === void 0)
    return r(
      "tool_error",
      "invalid request: expires_at is required when output_files are declared",
    );
  if (i.expires_at !== void 0) {
    let n = parseIsoTimestamp(i.expires_at);
    if (Number.isNaN(n))
      return r(
        "expired",
        `expires_at is not an RFC3339 timestamp with a zone: ${i.expires_at}`,
        void 0,
        "expires_at_unparseable",
      );
    if (Date.now() > n)
      return r("expired", `request expired at ${i.expires_at}`);
  }
  let h = [];
  for (let n of i.input_files ?? [])
    try {
      h.push({ spec: n, rel: relUnderSyncDir(WORKING_FILESTORE_PREFIX, n.lane_path) });
    } catch (s) {
      return r(
        "tool_error",
        `invalid input lane_path ${jsonStringify(n.lane_path)}: ${l(s)}`,
      );
    }
  let d = [],
    N = new Map();
  for (let n of i.output_files ?? []) {
    let s;
    try {
      s = relUnderSyncDir(WORKING_FILESTORE_PREFIX, n.lane_path);
    } catch (g) {
      return r(
        "tool_error",
        `invalid output lane_path ${jsonStringify(n.lane_path)}: ${l(g)}`,
      );
    }
    let p = N.get(s);
    if (p !== void 0)
      return r(
        "tool_error",
        `duplicate output lane_path: ${n.lane_path} collides with ${p}`,
      );
    (N.set(s, n.lane_path), d.push({ spec: n, rel: s }));
  }
  for (let [n, s] of [
    ["input", i.input_files ?? []],
    ["output", i.output_files ?? []],
  ]) {
    let p = new Set();
    for (let { name: g } of s) {
      if (p.has(g)) return r("tool_error", `duplicate ${n} name: ${g}`);
      p.add(g);
    }
  }
  let X = i.input_files !== void 0 || i.output_files !== void 0;
  if (X) {
    let n = new Set([
        ...h.map(({ spec: u }) => `{{in:${u.name}}}`),
        ...d.map(({ spec: u }) => `{{out:${u.name}}}`),
      ]),
      s = new Set();
    U(i.arguments ?? {}, s);
    let p = [...s].filter((u) => !n.has(u));
    if (p.length > 0)
      return r(
        "tool_error",
        `invalid request: args token names no declared file: ${p.join(", ")}`,
      );
    let g = d
      .filter(({ spec: u }) => !s.has(`{{out:${u.name}}}`))
      .map(({ spec: u }) => u.name);
    if (g.length > 0)
      return r(
        "tool_error",
        `invalid request: declared output not referenced by any {{out:NAME}} token in arguments: ${g.join(", ")}`,
      );
  }
  let w;
  try {
    let n;
    if (t.tempRoot === void 0) n = getPluginToolStagingDir();
    else ((n = t.tempRoot), await mkdir(n, { recursive: !0, mode: 448 }));
    ((w = await mkdtemp(x(n, "plugin-tool-"))),
      await mkdir(x(w, "in"), { mode: 448 }),
      await mkdir(x(w, "out"), { mode: 448 }));
  } catch (n) {
    if (w !== void 0) await H(w, { recursive: !0, force: !0 }).catch(() => {});
    let s = A(n);
    return (
      writeDiagnosticsEvent("warn", "ptc_staging_unavailable", { code: s ?? "temp_dir_refused" }),
      r("tool_error", `staging unavailable: ${s ?? "temp_dir_refused"}`)
    );
  }
  let O = w;
  try {
    let n = new Map(),
      s = [];
    for (let [o, { spec: _, rel: k }] of h.entries()) {
      if (t.signal?.aborted) return r("tool_error", L);
      let c = await getSyncedFile(k);
      if (c.kind === "not_found")
        return r("input_missing", `input not found: ${_.lane_path}`);
      if (c.kind === "error")
        return r(
          "tool_error",
          `input fetch failed for ${_.lane_path}: ${c.message}`,
          c.retryable,
        );
      let E = x(O, "in", `${o}${V(_.lane_path)}`);
      try {
        await writeFile(E, c.buf, { mode: 384 });
      } catch (M) {
        return r("tool_error", `input stage failed: ${A(M) ?? "unknown"}`);
      }
      (n.set(`{{in:${_.name}}}`, E),
        s.push({ lane_path: _.lane_path, etag: c.content_sha256 }));
    }
    let p = d.map(({ spec: o, rel: _ }, k) => {
        let c = x(O, "out", `${k}${V(o.lane_path)}`);
        return (n.set(`{{out:${o.name}}}`, c), { spec: o, rel: _, path: c });
      }),
      g = X ? Si(i.arguments ?? {}, (o) => G(o, n)) : (i.arguments ?? {}),
      u = Math.min(Math.max(i.timeout_ms ?? st, ut), lt),
      D = createAbortController(),
      I = !1,
      tt = setTimeout(() => {
        if (D.signal.aborted) return;
        ((I = !0), D.abort(Error("staged mcp_call timed out")));
      }, u),
      F = () => D.abort(t.signal?.reason);
    if (t.signal?.aborted) F();
    else t.signal?.addEventListener("abort", F, { once: !0 });
    let R;
    try {
      R = await t.call(g, D.signal);
    } catch (o) {
      if (I)
        return r("timeout", `tool did not complete within ${u}ms (${l(o)})`);
      if (t.signal?.aborted) return r("tool_error", `${L} (${l(o)})`);
      return r("tool_error", `tool call failed: ${l(o)}`);
    } finally {
      (clearTimeout(tt), t.signal?.removeEventListener("abort", F));
    }
    if (R.isError) {
      if (I) return r("timeout", `tool call exceeded ${u}ms`);
      if (t.signal?.aborted) return r("tool_error", L);
      let o = dt(R.content);
      return r("tool_error", o || "tool returned an error result");
    }
    let et = await realpath(O),
      j = [];
    for (let { spec: o, rel: _, path: k } of p) {
      if (t.signal?.aborted) return r("tool_error", L);
      let c;
      try {
        c = await realpath(k);
      } catch (m) {
        if (W(m))
          return r("tool_error", `tool did not produce output: ${o.name}`);
        return r(
          "tool_error",
          `output read failed for ${o.name}: ${A(m) ?? "unknown"}`,
        );
      }
      if (!c.startsWith(et + "/"))
        return r(
          "tool_error",
          `output path escapes the staging dir: ${o.name}`,
        );
      let E = MAX_WORKING_FILE_BYTES,
        M;
      try {
        let m = await nt(c, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
        try {
          let T = await m.stat();
          if (!T.isFile())
            return r("tool_error", `output is not a regular file: ${o.name}`);
          if (T.nlink > 1)
            return r("tool_error", `output has multiple hard links: ${o.name}`);
          if (T.size > E)
            return r(
              "output_too_large",
              `output ${o.name} is ${T.size} bytes (cap ${E})`,
            );
          let B = Number(T.size),
            Y = Buffer.allocUnsafe(B + 1),
            S = 0;
          for (;;) {
            let { bytesRead: v } = await m.read(Y, S, B + 1 - S, S);
            if (v === 0) break;
            S += v;
          }
          if (S !== B)
            return r(
              "tool_error",
              `output changed during collection: ${o.name}`,
            );
          M = Y.subarray(0, S);
        } finally {
          await m.close();
        }
      } catch (m) {
        if (W(m))
          return r("tool_error", `tool did not produce output: ${o.name}`);
        return r(
          "tool_error",
          `output read failed for ${o.name}: ${A(m) ?? "unknown"}`,
        );
      }
      let C = await writeLaneRowFromWorker(t.syncDir ?? SYNCED_FILE_ROOT, _, M, o.if_match);
      if (!C.ok)
        return r(
          C.reason === "too_large"
            ? "output_too_large"
            : C.reason === "conflict"
              ? "output_conflict"
              : "tool_error",
          `output write failed for ${o.lane_path}: ${C.error}`,
          C.retryable,
        );
      j.push({ lane_path: o.lane_path, etag: C.etag, bytes: M.length });
    }
    return (
      writeDiagnosticsEvent("info", "mcp_call_staged_ok", { inputs: s.length, outputs: j.length }),
      {
        staging: { ok: !0, outputs: j, inputs_used: s },
        tool: {
          content: R.content,
          structuredContent: R.structuredContent,
          _meta: R._meta,
        },
      }
    );
  } finally {
    await H(O, { recursive: !0, force: !0 }).catch(() => {});
  }
}
export { runStagedMcpCall };

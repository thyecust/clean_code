// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263

// [preload stripped] 原本在此预载 71 个依赖 chunk；经查它们均已由主入口初始化，已移除。
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { A, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeDiagnosticsEvent } from "../../01-核心基础设施/共享小工具-未细化/diagnostics-log.js";
import { STAGE_TMP_PREFIX, getStageFileRoot, getOutputsRoot, isManagedRemoteSession } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { getTrustedOrigin, getUntrustedOriginReason, httpClient } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { createWriteStream } from "fs";
import {
  chmod,
  mkdir,
  readdir,
  realpath,
  rename,
  stat as T,
  unlink,
} from "fs/promises";
import { Readable as I } from "stream";
import { pipeline } from "stream/promises";
import { posix } from "path";
var {
    basename: C,
    dirname: k,
    isAbsolute: R,
    join: b,
    normalize: Y,
    relative: L,
    sep: O,
  } = posix,
  M = getStageFileRoot(),
  N = getOutputsRoot(),
  H = "/uploads",
  Q = "/outputs",
  Z = 67108864,
  v = 30000,
  S = 60000;
function P(t, s) {
  let e = L(t, s);
  if (e === "" || e === "." || e.split(O).includes("..") || R(e)) return null;
  return e;
}
function B(t) {
  if (t.includes("\x00")) throw Error("mount_path contains null bytes");
  if (!R(t)) throw Error("mount_path must be absolute");
  if (t.split(O).includes(".."))
    throw Error('mount_path must not contain ".." segments');
  let s = Y(t);
  if (C(s).startsWith(STAGE_TMP_PREFIX))
    throw Error("mount_path names a reserved temporary-file name");
  let e = P(H, s);
  if (e !== null) return { dest: b(M, e), root: M, readOnly: !0 };
  let r = P(Q, s);
  if (r !== null) {
    if (!isManagedRemoteSession(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let d = Error(
        "staging under /outputs/ is only supported on managed remote sessions",
      );
      throw ((d.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER"), d);
    }
    return { dest: b(N, r), root: N, readOnly: !1 };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/");
}
function addDirectoryDestFromMountPath(t) {
  let s;
  try {
    s = B(t);
  } catch (e) {
    if (A(e) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER")
      throw Error("add_directory mount_path must be under /uploads/");
    throw e;
  }
  if (!s.readOnly)
    throw Error("add_directory mount_path must be under /uploads/");
  return s.dest;
}
function ee(t, s) {
  let e = L(t, s);
  if (e === ".." || e.startsWith(".." + O) || R(e)) {
    let r = Error("dest parent escaped stage root");
    throw ((r.code = "STAGE_PARENT_ESCAPE"), r);
  }
}
async function te(t, s) {
  let e = Date.now() - 2 * S,
    r;
  try {
    r = await readdir(t);
  } catch {
    return;
  }
  await Promise.all(
    r
      .filter((d) => d.startsWith(s))
      .map(async (d) => {
        let l = b(t, d);
        try {
          if ((await T(l)).mtimeMs < e) await unlink(l);
        } catch {}
      }),
  );
}
function re(t, s) {
  return t !== null && t.isFile() && (t.mtimeMs >= s || t.ctimeMs >= s);
}
function x(t) {
  return typeof t === "object" && t !== null && t.code === "EROFS";
}
function U(t, s) {
  let { kind: e, status: r } = Ps(s);
  return {
    kind: e,
    status: r,
    message: `${t} failed: ${e}${r ? ` ${r}` : ""}`,
  };
}
async function stageFile(t) {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID)
    return { ok: !1, error: "CLAUDE_CODE_REMOTE_SESSION_ID unset" };
  if (t.filestore_path) {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0)
      return (
        logFeatureBad("ccr_synced_file_stage", "unsupported_runner_kind"),
        logEvent("tengu_stage_file_completed", {
          ok: !1,
          synced_unsupported_runner_kind: !0,
          duration_ms: 0,
        }),
        {
          ok: !1,
          error: "synced-file staging not supported on this runner kind",
        }
      );
    let { stageSyncedFile: p, SYNCED_FILE_ROOT: j } =
      await import("../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js");
    return p(
      {
        mount_path: t.mount_path,
        filestore_path: t.filestore_path,
        content_sha256: t.content_sha256,
        expected_local_sha256: t.expected_local_sha256,
      },
      fetchFilestoreBytes,
      j,
    );
  }
  let e;
  try {
    e = B(t.mount_path);
  } catch (u) {
    if (A(u) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER")
      (logFeatureBad("ccr_stage_file_outputs", "unsupported_runner_kind"),
        logEvent("tengu_stage_file_completed", {
          ok: !1,
          outputs_unsupported_runner_kind: !0,
          duration_ms: 0,
        }));
    return { ok: !1, error: u instanceof Error ? u.message : String(u) };
  }
  let { dest: r, root: d, readOnly: l } = e;
  if (!t.force)
    try {
      if ((await T(r)).isFile())
        return (
          writeDiagnosticsEvent("debug", "stage_file_noop_already_present", {}),
          logEvent("tengu_stage_file_completed", {
            ok: !0,
            noop_already_present: !0,
            duration_ms: 0,
          }),
          { ok: !0, noop: "already_present" }
        );
    } catch {}
  let g = performance.now(),
    _ = Date.now(),
    n = () => Math.round(performance.now() - g),
    w = `${STAGE_TMP_PREFIX}${C(r)}.`,
    o = b(k(r), `${w}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    await mkdir(k(r), { recursive: !0 });
    let u = await realpath(d),
      p = await realpath(k(r));
    (ee(u, p), await te(k(r), w));
  } catch (u) {
    let p =
      typeof u === "object" && u !== null && "code" in u
        ? String(u.code)
        : "unknown";
    if (l && x(u) && !a.CLAUDE_STAGE_FILE_ROOT)
      return (
        logEvent("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          duration_ms: n(),
          bytes: 0,
        }),
        writeDiagnosticsEvent("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    if (
      (logEvent("tengu_stage_file_completed", { ok: !1, duration_ms: n() }),
      writeDiagnosticsEvent("warn", "stage_file_mkdir_failed", { code: p, duration_ms: n() }),
      !l)
    )
      logFeatureBad("ccr_stage_file_outputs", "mkdir_failed");
    return { ok: !1, error: `mkdir failed: ${p}` };
  }
  let c = await oe(t.mount_path, o);
  if (!c.ok) {
    if (
      (await unlink(o).catch(() => {}),
      l && c.errno === "EROFS" && !a.CLAUDE_STAGE_FILE_ROOT)
    )
      return (
        logEvent("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          duration_ms: n(),
          bytes: 0,
        }),
        writeDiagnosticsEvent("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    if (
      (logEvent("tengu_stage_file_completed", {
        ok: !1,
        gated: c.gated,
        duration_ms: n(),
      }),
      !l)
    )
      logFeatureBad("ccr_stage_file_outputs", "fetch_failed");
    return { ok: !1, error: c.error };
  }
  let m = c.bytes,
    h = n();
  try {
    if (!l) {
      let u = await T(r).catch(() => null);
      if (re(u, _))
        return (
          await unlink(o).catch(() => {}),
          logEvent("tengu_stage_file_completed", {
            ok: !0,
            noop: !0,
            duration_ms: n(),
            bytes: 0,
            outputs_root: !0,
          }),
          writeDiagnosticsEvent("info", "stage_file_noop_newer_local", { duration_ms: n() }),
          logFeatureOk("ccr_stage_file_outputs"),
          { ok: !0, noop: "newer_local" }
        );
    }
    (await chmod(o, l ? 292 : 420), await rename(o, r));
  } catch (u) {
    if ((await unlink(o).catch(() => {}), l && x(u) && !a.CLAUDE_STAGE_FILE_ROOT))
      return (
        logEvent("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          fetch_ms: h,
          duration_ms: n(),
          bytes: 0,
        }),
        writeDiagnosticsEvent("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    let p =
      typeof u === "object" && u !== null && "code" in u
        ? String(u.code)
        : "unknown";
    if (
      (logEvent("tengu_stage_file_completed", {
        ok: !1,
        fetch_ms: h,
        duration_ms: n(),
        bytes: m,
      }),
      writeDiagnosticsEvent("warn", "stage_file_write_failed", { code: p, duration_ms: n() }),
      !l)
    )
      logFeatureBad("ccr_stage_file_outputs", "write_failed");
    return { ok: !1, error: `write failed: ${p}` };
  }
  if (
    (logEvent("tengu_stage_file_completed", {
      ok: !0,
      fetch_ms: h,
      duration_ms: n(),
      bytes: m,
      outputs_root: !l,
    }),
    !l)
  )
    logFeatureOk("ccr_stage_file_outputs");
  return (
    writeDiagnosticsEvent("info", "stage_file_ok", {
      bytes: m,
      fetch_ms: h,
      duration_ms: n(),
      root: l ? "uploads" : "outputs",
    }),
    { ok: !0 }
  );
}
async function F() {
  let t = performance.now(),
    s = () => Math.round(performance.now() - t);
  try {
    let e = await httpClient.get("/worker/files", {
      auth: "session-jwt",
      host: "ccr-session",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: v,
    });
    if (!e.ok)
      return (
        writeDiagnosticsEvent("warn", "stage_file_list_gated", {
          reason: e.reason,
          duration_ms: s(),
        }),
        { ok: !1, error: `list gated: ${e.reason}`, gated: !0 }
      );
    if (e.status < 200 || e.status >= 300)
      return (
        writeDiagnosticsEvent("warn", "stage_file_list_failed", {
          kind: "http",
          status: e.status,
          duration_ms: s(),
        }),
        { ok: !1, error: `list failed: http ${e.status}` }
      );
    let r = e.data.filestore_jwt,
      d = e.data.filesystem_id;
    if (!r || !d)
      return { ok: !1, error: "list returned incomplete credential" };
    let l = getTrustedOrigin(e.data.filestore_url);
    if (e.data.filestore_url && !l)
      writeDiagnosticsEvent("warn", "stage_file_filestore_url_rejected", {
        reason: getUntrustedOriginReason(e.data.filestore_url),
      });
    return {
      ok: !0,
      cred: { filestoreJwt: r, filesystemId: d, filestoreUrl: l },
    };
  } catch (e) {
    let { kind: r, status: d, message: l } = U("list", e);
    return (
      writeDiagnosticsEvent("warn", "stage_file_list_failed", {
        kind: r,
        status: d,
        duration_ms: s(),
      }),
      { ok: !1, error: l }
    );
  }
}
async function oe(t, s) {
  let e = performance.now(),
    r = () => Math.round(performance.now() - e),
    d = await F();
  if (!d.ok) return d;
  let l = d.cred;
  for (let g = 0; g <= 1; g++) {
    let _ = new AbortController(),
      n,
      w = () => {
        if (n) n.refresh();
        else
          n = setTimeout(
            (o) => o.abort(Error("readFile stall: no bytes for 60s")),
            S,
            _,
          );
      };
    w();
    try {
      let o = await httpClient.post(
        "/v1/filestore/fs/readFile",
        { filesystem_id: l.filesystemId, path: t },
        {
          auth: "none",
          host: "api",
          baseUrl: l.filestoreUrl,
          headers: { Authorization: `Bearer ${l.filestoreJwt}` },
          responseType: "stream",
          timeout: 0,
          signal: _.signal,
          validateStatus: () => !0,
        },
      );
      if (!o.ok)
        return (
          clearTimeout(n),
          writeDiagnosticsEvent("warn", "stage_file_read_gated", {
            reason: o.reason,
            duration_ms: r(),
          }),
          { ok: !1, error: `read gated: ${o.reason}`, gated: !0 }
        );
      if (o.status === 401 && g === 0) {
        if ((clearTimeout(n), o.data instanceof I)) o.data.destroy();
        if (
          (writeDiagnosticsEvent("info", "stage_file_read_remint_jwt", { duration_ms: r() }),
          (d = await F()),
          !d.ok)
        )
          return d;
        l = d.cred;
        continue;
      }
      if (o.status < 200 || o.status >= 300) {
        if ((clearTimeout(n), o.data instanceof I)) o.data.destroy();
        return (
          writeDiagnosticsEvent("warn", "stage_file_read_failed", {
            kind: "http",
            status: o.status,
            duration_ms: r(),
          }),
          { ok: !1, error: `read failed: http ${o.status}` }
        );
      }
      let c = Number(o.response?.headers["content-length"] ?? -1);
      (o.data.on("data", w),
        await pipeline(o.data, createWriteStream(s, { flags: "wx" })),
        clearTimeout(n));
      let m = await T(s);
      if (c >= 0 && m.size !== c)
        return (
          writeDiagnosticsEvent("warn", "stage_file_read_truncated", {
            expected: c,
            got: m.size,
            duration_ms: r(),
          }),
          { ok: !1, error: `read truncated: got ${m.size} of ${c} bytes` }
        );
      return { ok: !0, bytes: m.size };
    } catch (o) {
      clearTimeout(n);
      let c =
        typeof o === "object" && o !== null && "code" in o
          ? String(o.code)
          : void 0;
      if (c && !("isAxiosError" in o))
        return (
          writeDiagnosticsEvent("warn", "stage_file_write_failed", { code: c, duration_ms: r() }),
          { ok: !1, error: `write failed: ${c}`, errno: c }
        );
      if (_.signal.aborted)
        return (
          writeDiagnosticsEvent("warn", "stage_file_read_stalled", {
            stall_ms: S,
            duration_ms: r(),
          }),
          { ok: !1, error: `read stalled: no bytes for ${S}ms` }
        );
      let { kind: m, status: h, message: u } = U("read", o);
      return (
        writeDiagnosticsEvent("warn", "stage_file_read_failed", {
          kind: m,
          status: h,
          duration_ms: r(),
        }),
        { ok: !1, error: u }
      );
    }
  }
  return (
    writeDiagnosticsEvent("warn", "stage_file_read_failed", {
      kind: "http",
      status: 401,
      duration_ms: r(),
    }),
    { ok: !1, error: "read failed: http 401" }
  );
}
async function fetchFilestoreBytes(t) {
  let s = performance.now(),
    e = () => Math.round(performance.now() - s),
    r = await F();
  if (!r.ok) return r;
  let { filestoreJwt: d, filesystemId: l, filestoreUrl: g } = r.cred;
  try {
    let _ = await httpClient.post(
      "/v1/filestore/fs/readFile",
      { filesystem_id: l, path: t },
      {
        auth: "none",
        host: "api",
        baseUrl: g,
        headers: { Authorization: `Bearer ${d}` },
        responseType: "arraybuffer",
        timeout: v,
        maxContentLength: Z,
      },
    );
    if (!_.ok)
      return (
        writeDiagnosticsEvent("warn", "stage_file_read_gated", {
          reason: _.reason,
          duration_ms: e(),
        }),
        { ok: !1, error: `read gated: ${_.reason}`, gated: !0 }
      );
    if (_.status < 200 || _.status >= 300)
      return (
        writeDiagnosticsEvent("warn", "stage_file_read_failed", {
          kind: "http",
          status: _.status,
          duration_ms: e(),
        }),
        { ok: !1, error: `read failed: http ${_.status}` }
      );
    return { ok: !0, buf: Buffer.from(_.data) };
  } catch (_) {
    let { kind: n, status: w, message: o } = U("read", _);
    return (
      writeDiagnosticsEvent("warn", "stage_file_read_failed", {
        kind: n,
        status: w,
        duration_ms: e(),
      }),
      { ok: !1, error: o }
    );
  }
}
export {
  addDirectoryDestFromMountPath,
  fetchFilestoreBytes,
  stageFile,
};

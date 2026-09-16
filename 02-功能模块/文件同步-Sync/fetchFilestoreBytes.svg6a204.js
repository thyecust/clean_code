// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { A, Ps } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import { q } from "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import { EEt, Goe, i$e, AEt } from "../计划模式(Plan)/计划模式(Plan).e5mh1avy.js";
import { i } from "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import { y, f } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import { VQe, Hor, ht } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-y7b7kf5n.js";
import "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-1bqqnyc1.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-q599wyee.js";
import "../../01-核心基础设施/核心工具-常量与消息/核心工具-常量与消息.602x2b1z.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-3kbr3k57.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a5errgr8.js";
import "../权限系统/chunk-ynkf3yy4.js";
import "../Teammates团队/chunk-811z9z0t.js";
import "../../01-核心基础设施/核心工具-其他/核心工具-其他.myj0fw5d.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qjqntsq2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-035vf5et.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { createWriteStream as G } from "fs";
import {
  chmod as z,
  mkdir as J,
  readdir as W,
  realpath as D,
  rename as V,
  stat as T,
  unlink as E,
} from "fs/promises";
import { Readable as I } from "stream";
import { pipeline as X } from "stream/promises";
import { posix as K } from "path";
var {
    basename: C,
    dirname: k,
    isAbsolute: R,
    join: b,
    normalize: Y,
    relative: L,
    sep: O,
  } = K,
  M = Goe(),
  N = i$e(),
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
  if (C(s).startsWith(EEt))
    throw Error("mount_path names a reserved temporary-file name");
  let e = P(H, s);
  if (e !== null) return { dest: b(M, e), root: M, readOnly: !0 };
  let r = P(Q, s);
  if (r !== null) {
    if (!AEt(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
      let d = Error(
        "staging under /outputs/ is only supported on managed remote sessions",
      );
      throw ((d.code = "STAGE_OUTPUTS_UNSUPPORTED_RUNNER"), d);
    }
    return { dest: b(N, r), root: N, readOnly: !1 };
  }
  throw Error("mount_path must be under /uploads/ or /outputs/");
}
function he(t) {
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
    r = await W(t);
  } catch {
    return;
  }
  await Promise.all(
    r
      .filter((d) => d.startsWith(s))
      .map(async (d) => {
        let l = b(t, d);
        try {
          if ((await T(l)).mtimeMs < e) await E(l);
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
async function ke(t) {
  if (!a.CLAUDE_CODE_REMOTE_SESSION_ID)
    return { ok: !1, error: "CLAUDE_CODE_REMOTE_SESSION_ID unset" };
  if (t.filestore_path) {
    if (a.CLAUDE_CODE_ENVIRONMENT_KIND !== void 0)
      return (
        f("ccr_synced_file_stage", "unsupported_runner_kind"),
        i("tengu_stage_file_completed", {
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
      await import("../../01-核心基础设施/共享小工具-未细化/SYNCED_FILE_ROOT.j08b0ggt.js");
    return p(
      {
        mount_path: t.mount_path,
        filestore_path: t.filestore_path,
        content_sha256: t.content_sha256,
        expected_local_sha256: t.expected_local_sha256,
      },
      se,
      j,
    );
  }
  let e;
  try {
    e = B(t.mount_path);
  } catch (u) {
    if (A(u) === "STAGE_OUTPUTS_UNSUPPORTED_RUNNER")
      (f("ccr_stage_file_outputs", "unsupported_runner_kind"),
        i("tengu_stage_file_completed", {
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
          q("debug", "stage_file_noop_already_present", {}),
          i("tengu_stage_file_completed", {
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
    w = `${EEt}${C(r)}.`,
    o = b(k(r), `${w}${Date.now()}.${Math.random().toString(36).slice(2)}`);
  try {
    await J(k(r), { recursive: !0 });
    let u = await D(d),
      p = await D(k(r));
    (ee(u, p), await te(k(r), w));
  } catch (u) {
    let p =
      typeof u === "object" && u !== null && "code" in u
        ? String(u.code)
        : "unknown";
    if (l && x(u) && !a.CLAUDE_STAGE_FILE_ROOT)
      return (
        i("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          duration_ms: n(),
          bytes: 0,
        }),
        q("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    if (
      (i("tengu_stage_file_completed", { ok: !1, duration_ms: n() }),
      q("warn", "stage_file_mkdir_failed", { code: p, duration_ms: n() }),
      !l)
    )
      f("ccr_stage_file_outputs", "mkdir_failed");
    return { ok: !1, error: `mkdir failed: ${p}` };
  }
  let c = await oe(t.mount_path, o);
  if (!c.ok) {
    if (
      (await E(o).catch(() => {}),
      l && c.errno === "EROFS" && !a.CLAUDE_STAGE_FILE_ROOT)
    )
      return (
        i("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          duration_ms: n(),
          bytes: 0,
        }),
        q("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    if (
      (i("tengu_stage_file_completed", {
        ok: !1,
        gated: c.gated,
        duration_ms: n(),
      }),
      !l)
    )
      f("ccr_stage_file_outputs", "fetch_failed");
    return { ok: !1, error: c.error };
  }
  let m = c.bytes,
    h = n();
  try {
    if (!l) {
      let u = await T(r).catch(() => null);
      if (re(u, _))
        return (
          await E(o).catch(() => {}),
          i("tengu_stage_file_completed", {
            ok: !0,
            noop: !0,
            duration_ms: n(),
            bytes: 0,
            outputs_root: !0,
          }),
          q("info", "stage_file_noop_newer_local", { duration_ms: n() }),
          y("ccr_stage_file_outputs"),
          { ok: !0, noop: "newer_local" }
        );
    }
    (await z(o, l ? 292 : 420), await V(o, r));
  } catch (u) {
    if ((await E(o).catch(() => {}), l && x(u) && !a.CLAUDE_STAGE_FILE_ROOT))
      return (
        i("tengu_stage_file_completed", {
          ok: !0,
          noop: !0,
          fetch_ms: h,
          duration_ms: n(),
          bytes: 0,
        }),
        q("debug", "stage_file_noop_readonly_mount", { duration_ms: n() }),
        { ok: !0, noop: "readonly_mount" }
      );
    let p =
      typeof u === "object" && u !== null && "code" in u
        ? String(u.code)
        : "unknown";
    if (
      (i("tengu_stage_file_completed", {
        ok: !1,
        fetch_ms: h,
        duration_ms: n(),
        bytes: m,
      }),
      q("warn", "stage_file_write_failed", { code: p, duration_ms: n() }),
      !l)
    )
      f("ccr_stage_file_outputs", "write_failed");
    return { ok: !1, error: `write failed: ${p}` };
  }
  if (
    (i("tengu_stage_file_completed", {
      ok: !0,
      fetch_ms: h,
      duration_ms: n(),
      bytes: m,
      outputs_root: !l,
    }),
    !l)
  )
    y("ccr_stage_file_outputs");
  return (
    q("info", "stage_file_ok", {
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
    let e = await ht.get("/worker/files", {
      auth: "session-jwt",
      host: "ccr-session",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: v,
    });
    if (!e.ok)
      return (
        q("warn", "stage_file_list_gated", {
          reason: e.reason,
          duration_ms: s(),
        }),
        { ok: !1, error: `list gated: ${e.reason}`, gated: !0 }
      );
    if (e.status < 200 || e.status >= 300)
      return (
        q("warn", "stage_file_list_failed", {
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
    let l = VQe(e.data.filestore_url);
    if (e.data.filestore_url && !l)
      q("warn", "stage_file_filestore_url_rejected", {
        reason: Hor(e.data.filestore_url),
      });
    return {
      ok: !0,
      cred: { filestoreJwt: r, filesystemId: d, filestoreUrl: l },
    };
  } catch (e) {
    let { kind: r, status: d, message: l } = U("list", e);
    return (
      q("warn", "stage_file_list_failed", {
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
      let o = await ht.post(
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
          q("warn", "stage_file_read_gated", {
            reason: o.reason,
            duration_ms: r(),
          }),
          { ok: !1, error: `read gated: ${o.reason}`, gated: !0 }
        );
      if (o.status === 401 && g === 0) {
        if ((clearTimeout(n), o.data instanceof I)) o.data.destroy();
        if (
          (q("info", "stage_file_read_remint_jwt", { duration_ms: r() }),
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
          q("warn", "stage_file_read_failed", {
            kind: "http",
            status: o.status,
            duration_ms: r(),
          }),
          { ok: !1, error: `read failed: http ${o.status}` }
        );
      }
      let c = Number(o.response?.headers["content-length"] ?? -1);
      (o.data.on("data", w),
        await X(o.data, G(s, { flags: "wx" })),
        clearTimeout(n));
      let m = await T(s);
      if (c >= 0 && m.size !== c)
        return (
          q("warn", "stage_file_read_truncated", {
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
          q("warn", "stage_file_write_failed", { code: c, duration_ms: r() }),
          { ok: !1, error: `write failed: ${c}`, errno: c }
        );
      if (_.signal.aborted)
        return (
          q("warn", "stage_file_read_stalled", {
            stall_ms: S,
            duration_ms: r(),
          }),
          { ok: !1, error: `read stalled: no bytes for ${S}ms` }
        );
      let { kind: m, status: h, message: u } = U("read", o);
      return (
        q("warn", "stage_file_read_failed", {
          kind: m,
          status: h,
          duration_ms: r(),
        }),
        { ok: !1, error: u }
      );
    }
  }
  return (
    q("warn", "stage_file_read_failed", {
      kind: "http",
      status: 401,
      duration_ms: r(),
    }),
    { ok: !1, error: "read failed: http 401" }
  );
}
async function se(t) {
  let s = performance.now(),
    e = () => Math.round(performance.now() - s),
    r = await F();
  if (!r.ok) return r;
  let { filestoreJwt: d, filesystemId: l, filestoreUrl: g } = r.cred;
  try {
    let _ = await ht.post(
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
        q("warn", "stage_file_read_gated", {
          reason: _.reason,
          duration_ms: e(),
        }),
        { ok: !1, error: `read gated: ${_.reason}`, gated: !0 }
      );
    if (_.status < 200 || _.status >= 300)
      return (
        q("warn", "stage_file_read_failed", {
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
      q("warn", "stage_file_read_failed", {
        kind: n,
        status: w,
        duration_ms: e(),
      }),
      { ok: !1, error: o }
    );
  }
}
export {
  he as addDirectoryDestFromMountPath,
  se as fetchFilestoreBytes,
  ke as stageFile,
};

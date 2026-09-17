// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { writeFileAtomicWithOptions } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { jsonStringify, getFsSurface } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { getSecureStorageDir } from "../../01-核心基础设施/共享小工具-未细化/keychain-access.js";
import { MAX_CREDENTIAL_FILE_BYTES } from "../../01-核心基础设施/共享小工具-未细化/max-credential-file-bytes.js";
import { constants } from "fs";
import { lstat, mkdir, open as p } from "fs/promises";
import { basename, dirname, isAbsolute, join as _ } from "path";
function f() {
  let e = getSecureStorageDir();
  return { storeDir: e, storePath: _(e, ".credentials.json") };
}
var k = constants.O_NONBLOCK,
  c = 1048576;
async function N(e) {
  try {
    return {
      kind: "open",
      fileHandle: await p(e, constants.O_RDONLY | constants.O_NOFOLLOW | k),
    };
  } catch (r) {
    let n = A(r);
    if (n === "ELOOP") return { kind: "refused-symlink" };
    return { kind: "error", code: n };
  }
}
async function D(e, r) {
  let n = constants.O_WRONLY | constants.O_CREAT | constants.O_TRUNC;
  try {
    return { kind: "open", fileHandle: await p(e, n | constants.O_NOFOLLOW, r) };
  } catch (t) {
    let a = A(t);
    if (a === "ELOOP") return { kind: "refused-symlink" };
    return { kind: "error", code: a };
  }
}
function S(e) {
  return e.length > 0 && !e.includes("\x00") && isAbsolute(e);
}
var B = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);
function m(e) {
  return e === "ENOENT"
    ? { state: "absent" }
    : { state: "read-failed", code: e };
}
function w(e) {
  return e === "ENOENT" ? "absent" : "read-failed";
}
function v(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed";
}
async function E(e) {
  let { storePath: r } = f(),
    n = await N(r);
  switch (n.kind) {
    case "refused-symlink":
      return { state: "refused-symlink" };
    case "error":
      return e(n.code) === "absent"
        ? { state: "absent" }
        : { state: "read-failed", code: n.code };
    case "open": {
      let { fileHandle: t } = n,
        a,
        l,
        C;
      try {
        let o = await t.stat();
        if (!o.isFile()) {
          if (o.isDirectory())
            return e("EISDIR") === "absent"
              ? { state: "absent" }
              : { state: "read-failed", code: "EISDIR" };
          return { state: "corrupt" };
        }
        if (o.size > c) return { state: "corrupt" };
        ((l = o.uid), (C = o.mode));
        let i = Buffer.alloc(Math.min(o.size, c) + 1),
          d = 0;
        for (;;) {
          let { bytesRead: g } = await t.read(i, d, i.length - d, d);
          if (g === 0) break;
          if (((d += g), d === i.length)) {
            if (i.length > c) return { state: "corrupt" };
            let O = Buffer.alloc(c + 1);
            (i.copy(O, 0, 0, d), (i = O));
          }
        }
        a = i.toString("utf8", 0, d);
      } catch (o) {
        let i = A(o);
        return e(i) === "absent"
          ? { state: "absent" }
          : { state: "read-failed", code: i };
      } finally {
        await t.close().catch(() => {});
      }
      let u;
      try {
        u = JSON.parse(a);
      } catch {
        return { state: "corrupt" };
      }
      if (u === null) return { state: "absent" };
      return { state: "present", data: u, uid: l, mode: C };
    }
  }
}
var y = {
  readCredentials() {
    return E(w);
  },
  readCredentialsStrict() {
    return E((e) => v(e, "darwin"));
  },
  async writeCredentials(e) {
    let { storeDir: r, storePath: n } = f();
    try {
      (await getFsSurface().mkdir(r), await writeFileAtomicWithOptions(n, jsonStringify(e), { mode: 384, exactMode: 384 }));
    } catch (t) {
      return { state: "write-failed", code: A(t) };
    }
    return { state: "written" };
  },
  async deleteCredentials() {
    let { storePath: e } = f();
    return R(e);
  },
  async discardSpentCredentialFile(e) {
    return R(e);
  },
  async readHandoffCredential(e, { symlinkAtPath: r }) {
    if (!S(e)) return { state: "read-failed", code: "EINVAL" };
    let n;
    if (r === "follow")
      try {
        n = await p(e, constants.O_RDONLY | k);
      } catch (t) {
        return m(A(t));
      }
    else {
      let t = await N(e);
      switch (t.kind) {
        case "refused-symlink":
          return { state: "read-failed", code: "ELOOP" };
        case "error":
          return m(t.code);
        case "open":
          n = t.fileHandle;
      }
    }
    try {
      if (!(await n.stat()).isFile())
        return { state: "read-failed", code: "EINVAL" };
      let t = Buffer.alloc(MAX_CREDENTIAL_FILE_BYTES + 1),
        a = 0;
      for (;;) {
        let { bytesRead: l } = await n.read(t, a, t.length - a, a);
        if (l === 0) break;
        if (((a += l), a > MAX_CREDENTIAL_FILE_BYTES)) return { state: "read-failed", code: "EFBIG" };
      }
      return { state: "present", contents: t.toString("utf8", 0, a) };
    } catch (t) {
      return m(A(t));
    } finally {
      await n.close().catch(() => {});
    }
  },
  async writeHandoffCredential(e, r) {
    if (!S(e)) return { state: "write-failed", code: "EINVAL" };
    if (!B.has(basename(e))) return { state: "write-failed", code: "EINVAL" };
    try {
      await mkdir(dirname(e), { recursive: !0, mode: 448 });
    } catch (t) {
      return { state: "write-failed", code: A(t) };
    }
    let n = await D(e, 384);
    switch (n.kind) {
      case "refused-symlink":
        return { state: "write-failed", code: "ELOOP" };
      case "error":
        return { state: "write-failed", code: n.code };
      case "open":
        try {
          return (
            await n.fileHandle.writeFile(r, { encoding: "utf8" }),
            { state: "written" }
          );
        } catch (t) {
          return { state: "write-failed", code: A(t) };
        } finally {
          await n.fileHandle.close().catch(() => {});
        }
    }
  },
  async probeCredentials() {
    let { storePath: e } = f(),
      r;
    try {
      r = await lstat(e, { bigint: !0 });
    } catch (n) {
      let t = A(n);
      return w(t) === "absent"
        ? { state: "absent" }
        : { state: "read-failed", code: t };
    }
    if (r.isSymbolicLink()) return { state: "read-failed", code: "ELOOP" };
    return {
      state: "present",
      version: `${r.dev}:${r.ino}:${r.size}:${r.mtimeNs}`,
    };
  },
};
async function R(e) {
  try {
    return (await getFsSurface().unlink(e), { state: "deleted" });
  } catch (r) {
    let n = A(r);
    if (n === "ENOENT") return { state: "deleted" };
    return { state: "delete-failed", code: n };
  }
}
var I = Symbol("secureStorage.CredentialsStoreHandle");
function credentialsStoreFor(e, r = y) {
  return isHoverRestEnabled() && e !== void 0 ? T(r) : void 0;
}
function sessionServicesFor(e) {
  return { storageV5: e, credentials: credentialsStoreFor(e) };
}
function T(e = y) {
  return { ...e, [I]: "CredentialsStoreHandle" };
}
export { credentialsStoreFor, sessionServicesFor };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { isHoverRestEnabled } from "../../01-核心基础设施/核心工具-路径与平台/chunk-h62vxw7j.js";
import { getClaudeConfigDir } from "../模型接入-Bedrock-Vertex/chunk-5ndhfaq9.js";
import { fileSuffixForOauthConfig } from "./chunk-9g2q4bjq.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { jsonStringify, jsonParse, getFsSurface, logForDebugging } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Cs } from "../../00-第三方库/graceful-fs/chunk-8fpdwg2e.js";
import { CREDENTIALS_SUFFIX, getSecureStorageDir, getKeychainServiceName, getKeychainAccountName, KEYCHAIN_CACHE_TTL_MS, getKeychainState, KEYCHAIN_READ_FAILURE_BACKOFF_MS, invalidateKeychainCache } from "./keychain-access.js";
import { Bf } from "../../00-第三方库/which-isexe/isexe.knmpyrza.js";
import { execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING, execFileNoThrow } from "../工作树-Git/git-exec-hardening.js";
import { writeFileAtomic } from "../../01-核心基础设施/安全文件系统-FS加固/atomic-file-write.js";
import { homedir } from "os";
import { join as x } from "path";
var SECURE_STORAGE_READ_FAILED_SENTINEL = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage } from "async_hooks";
import { join as U } from "path";
var P = new AsyncLocalStorage(),
  R = Promise.resolve();
async function withSecureStorageWriteLock(e) {
  if (P.getStore()) return e();
  let t = R,
    r = Promise.withResolvers();
  R = r.promise;
  try {
    await t;
    let a = getSecureStorageDir();
    await getFsSurface().mkdir(a);
    let o = await Cs(U(a, ".storage-write"), {
      realpath: !1,
      retries: { retries: 10, minTimeout: 100, maxTimeout: 1000 },
      stale: 15000,
      onCompromised: (s) =>
        logForDebugging(`[secureStorage] write lock compromised: ${l(s)}`, { level: "warn" }),
    });
    try {
      return await P.run(!0, e);
    } finally {
      await o().catch((s) =>
        logForDebugging(`[secureStorage] write lock release failed: ${l(s)}`, {
          level: "warn",
        }),
      );
    }
  } finally {
    r.resolve();
  }
}
async function runSecureStorageWriteWithoutLock(e) {
  return P.run(!0, e);
}
function d(e, t, r) {
  return withSecureStorageWriteLock(async () => {
    e.invalidateCache?.();
    let a = await (e.readAsyncStrict?.(r) ?? e.readAsync(r));
    if (a === SECURE_STORAGE_READ_FAILED_SENTINEL) return { success: !1, transient: !0 };
    let o = a ?? {},
      s = t(o);
    return s === o ? { success: !0 } : await e.update(s, r);
  });
}
function v(e, t) {
  let r = {
    name: `${e.name}-with-${t.name}-fallback`,
    read(a) {
      let o = e.read(a);
      if (o !== null && o !== void 0) return o;
      return t.read(a) || {};
    },
    async readAsync(a) {
      let o = await e.readAsync();
      if (o !== null && o !== void 0) return o;
      return (await t.readAsync(a)) || {};
    },
    async readAsyncStrict(a) {
      let o = await (e.readAsyncStrict?.() ?? e.readAsync());
      if (o === SECURE_STORAGE_READ_FAILED_SENTINEL) return SECURE_STORAGE_READ_FAILED_SENTINEL;
      if (o !== null) return o;
      return (await (t.readAsyncStrict?.(a) ?? t.readAsync(a))) || {};
    },
    invalidateCache() {
      (e.invalidateCache?.(), t.invalidateCache?.());
    },
    mutate(a, o) {
      return d(r, a, o);
    },
    async update(a, o) {
      let s = await e.readAsync(),
        i = await e.update(a);
      if (i.success) {
        if (s === null) await t.delete(o);
        return (logFeatureOk("secure_storage_credentials_write"), i);
      }
      if (i.transient)
        return (
          logFeatureSad(
            "secure_storage_credentials_write",
            "primary_transient_skip_fallback",
          ),
          i
        );
      let u = await t.update(a, o);
      if (u.success) {
        if (s !== null) await e.delete();
        return (
          logFeatureSad("secure_storage_credentials_write", "plaintext_fallback_used"),
          { success: !0, warning: u.warning }
        );
      }
      return (
        logFeatureBad("secure_storage_credentials_write", "primary_and_fallback_failed"),
        { success: !1 }
      );
    },
    async delete(a) {
      let o = (await t.readAsync(a)) !== null,
        [s, i] = await Promise.all([e.delete(), t.delete(a)]);
      return s || (o && i);
    },
  };
  return r;
}
var m = 2000,
  H = 4032,
  K = 44,
  W = 36,
  E = {
    name: "keychain",
    read() {
      let e = getKeychainState(),
        t = e.cache;
      if (Date.now() - t.cachedAt < KEYCHAIN_CACHE_TTL_MS) return t.data;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < KEYCHAIN_READ_FAILURE_BACKOFF_MS) return t.data;
      try {
        let a = getKeychainServiceName(CREDENTIALS_SUFFIX),
          o = getKeychainAccountName(),
          s = execSyncWithDefaults_BLOCKS_EVENT_LOOP_WILL_FREEZE_UI_MAKE_SURE_YOU_KNOW_WHAT_YOU_ARE_DOING(`security find-generic-password -a "${o}" -w -s "${a}"`, {
            timeout: m,
          });
        if (s) {
          let i = jsonParse(s);
          return ((e.cache = { data: i, cachedAt: Date.now() }), i);
        }
      } catch (a) {}
      if (t.data !== null)
        return (
          logForDebugging("[keychain] read failed; serving stale cache", { level: "warn" }),
          (e.cache = { data: t.data, cachedAt: Date.now() }),
          t.data
        );
      return ((e.cache = { data: null, cachedAt: Date.now() }), null);
    },
    async readAsync() {
      let e = getKeychainState(),
        t = e.cache;
      if (Date.now() - t.cachedAt < KEYCHAIN_CACHE_TTL_MS) return t.data;
      if (e.readInFlight) return e.readInFlight;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < KEYCHAIN_READ_FAILURE_BACKOFF_MS) return null;
      let a = e.generation,
        o = k().then((s) => {
          if (a !== e.generation) return s === SECURE_STORAGE_READ_FAILED_SENTINEL ? null : s;
          if (((e.readInFlight = null), s === SECURE_STORAGE_READ_FAILED_SENTINEL)) {
            if (
              (logForDebugging("[keychain] readAsync failed; not caching a null", {
                level: "warn",
              }),
              (e.lastReadFailure = Date.now()),
              t.data !== null)
            )
              e.cache = { data: t.data, cachedAt: Date.now() };
            return t.data;
          }
          let i = s ?? t.data;
          return (
            (e.cache = { data: i, cachedAt: Date.now() }),
            (e.lastReadFailure = null),
            i
          );
        });
      return ((e.readInFlight = o), o);
    },
    async readAsyncStrict() {
      let e = getKeychainState(),
        t = e.generation,
        r = await k();
      if (r !== SECURE_STORAGE_READ_FAILED_SENTINEL && t === e.generation)
        ((e.cache = { data: r ?? e.cache.data, cachedAt: Date.now() }),
          (e.lastReadFailure = null));
      return r;
    },
    invalidateCache() {
      invalidateKeychainCache();
    },
    mutate(e) {
      return d(E, e);
    },
    async update(e) {
      let t = getKeychainState();
      invalidateKeychainCache();
      try {
        let r = getKeychainServiceName(CREDENTIALS_SUFFIX),
          a = getKeychainAccountName(),
          o = jsonStringify(e),
          s = Buffer.from(o, "utf-8").toString("hex"),
          i = `add-generic-password -U -a "${a}" -s "${r}" -X "${s}"
`,
          u;
        if (i.length <= H)
          u = await Bf("security", ["-i"], {
            input: i,
            stdio: ["pipe", "pipe", "pipe"],
            reject: !1,
            timeout: m,
          });
        else
          (logForDebugging(
            `Keychain payload (${o.length}B JSON) exceeds security -i stdin limit; using argv`,
            { level: "warn" },
          ),
            (u = await Bf(
              "security",
              ["add-generic-password", "-U", "-a", a, "-s", r, "-X", s],
              { stdio: ["ignore", "pipe", "pipe"], reject: !1, timeout: m },
            )));
        if (u.exitCode !== 0) return { success: !1, transient: u.timedOut };
        return (
          (t.cache = { data: e, cachedAt: Date.now() }),
          t.generation++,
          (t.readInFlight = null),
          { success: !0 }
        );
      } catch (r) {
        return { success: !1 };
      }
    },
    async delete() {
      invalidateKeychainCache();
      try {
        let e = getKeychainServiceName(CREDENTIALS_SUFFIX),
          t = getKeychainAccountName();
        return (
          await execFileNoThrow("security", ["delete-generic-password", "-a", t, "-s", e], {
            timeout: m,
            useCwd: !1,
          }),
          !0
        );
      } catch (e) {
        return !1;
      }
    },
  };
async function k() {
  try {
    let e = getKeychainServiceName(CREDENTIALS_SUFFIX),
      t = getKeychainAccountName(),
      { stdout: r, code: a } = await execFileNoThrow(
        "security",
        ["find-generic-password", "-a", t, "-w", "-s", e],
        { useCwd: !1, preserveOutputOnError: !1, timeout: m },
      );
    if (a === 0 && r) return jsonParse(r.trim());
    if (a === 0 || a === K || a === W) return null;
    return SECURE_STORAGE_READ_FAILED_SENTINEL;
  } catch (e) {
    return null;
  }
}
var h;
function isKeychainLocked() {
  if (h !== void 0) return h;
  return (
    (h = Bf("security", ["show-keychain-info"], {
      reject: !1,
      stdio: ["ignore", "pipe", "pipe"],
      timeout: m,
    })
      .then((e) => e.exitCode === 36)
      .catch(() => !1)),
    h
  );
}
import { chmod } from "fs/promises";
import { join as G } from "path";
function c() {
  let e = getSecureStorageDir(),
    t = ".credentials.json";
  return { storageDir: e, storagePath: G(e, ".credentials.json") };
}
var T = "Warning: Storing credentials in plaintext.";
function X(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return null;
  return SECURE_STORAGE_READ_FAILED_SENTINEL;
}
var V = {
  async read() {
    let { storagePath: e } = c();
    try {
      let t = await getFsSurface().readFile(e, { encoding: "utf8" });
      return jsonParse(t);
    } catch {
      return null;
    }
  },
  async readStrict() {
    let { storagePath: e } = c(),
      t;
    try {
      t = await getFsSurface().readFile(e, { encoding: "utf8" });
    } catch (r) {
      return X(A(r), "darwin");
    }
    try {
      return jsonParse(t);
    } catch {
      return null;
    }
  },
  async write(e) {
    try {
      let { storageDir: t, storagePath: r } = c();
      return (
        await getFsSurface().mkdir(t),
        await writeFileAtomic(r, jsonStringify(e), 384),
        await chmod(r, 384),
        { success: !0, warning: T }
      );
    } catch {
      return { success: !1 };
    } finally {
      if (isHoverRestEnabled()) invalidateCredentialsCopyCache();
    }
  },
  async remove() {
    let { storagePath: e } = c();
    try {
      return (await getFsSurface().unlink(e), !0);
    } catch (t) {
      if (A(t) === "ENOENT") return !0;
      return !1;
    } finally {
      if (isHoverRestEnabled()) invalidateCredentialsCopyCache();
    }
  },
};
function J(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return SECURE_STORAGE_READ_FAILED_SENTINEL;
    default: {
      let t = e;
      return SECURE_STORAGE_READ_FAILED_SENTINEL;
    }
  }
}
function q(e) {
  return {
    async read() {
      let { storagePath: t } = c(),
        r = p(),
        a = r.generation,
        o = await w(e.readCredentials(), r);
      return (I(r, o, t, a), o.state === "present" ? o.data : null);
    },
    async readStrict() {
      let { storagePath: t } = c(),
        r = p(),
        a = r.generation,
        o = await w(e.readCredentialsStrict(), r);
      return (I(r, o, t, a), J(o));
    },
    async write(t) {
      let { storagePath: r } = c(),
        a = p(),
        o = a.generation,
        s = await w(e.writeCredentials(t), a);
      if (s.state === "written" && o === a.generation) D(a, r, jsonStringify(t));
      else S(a);
      return s.state === "written"
        ? { success: !0, warning: T }
        : { success: !1 };
    },
    async remove() {
      let { storagePath: t } = c(),
        r = p(),
        a = r.generation,
        o = await w(e.deleteCredentials(), r);
      if (o.state === "deleted" && a === r.generation) D(r, t, null);
      else S(r);
      return o.state === "deleted";
    },
  };
}
async function w(e, t) {
  try {
    return await e;
  } catch (r) {
    throw (S(t), r);
  }
}
class F {
  copy = void 0;
  generation = 0;
}
var Z = new j(() => new F());
function p() {
  return Z.of(B().host);
}
function D(e, t, r) {
  ((e.copy = { storagePath: t, text: r }), e.generation++);
}
function I(e, t, r, a) {
  if (a !== e.generation) {
    S(e);
    return;
  }
  switch (t.state) {
    case "present":
      D(e, r, jsonStringify(t.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      D(e, r, null);
      return;
    case "read-failed":
      S(e);
      return;
    default: {
      let o = t;
      S(e);
    }
  }
}
function S(e) {
  ((e.copy = void 0), e.generation++);
}
function invalidateCredentialsCopyCache() {
  S(p());
}
function C(e) {
  return isHoverRestEnabled() && e !== void 0 ? q(e) : V;
}
var _ = {
  name: "plaintext",
  read(e) {
    let { storagePath: t } = c();
    try {
      let r = isHoverRestEnabled() && e?.fromStoreCopy === !0 ? p().copy : void 0;
      if (r !== void 0 && r.storagePath === t) {
        if (r.text === null) return null;
        return JSON.parse(r.text);
      }
      let a = getFsSurface().readFileSync(t, { encoding: "utf8" });
      return jsonParse(a);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    invalidateCredentialsCopyCache();
  },
  readAsync(e) {
    return C(e).read();
  },
  readAsyncStrict(e) {
    return C(e).readStrict();
  },
  mutate(e, t) {
    return d(_, e, t);
  },
  update(e, t) {
    return C(t).write(e);
  },
  delete(e) {
    return C(e).remove();
  },
};
class N {
  memo;
  handedIn;
  prime(e, t) {
    if (this.memo !== void 0) return;
    this.handedIn = { enabled: e, ...t() };
  }
  resolve(e, t) {
    if (this.memo !== void 0) return this.memo;
    try {
      let r = e(),
        a = this.handedIn;
      if (
        a !== void 0 &&
        a.legacyPath === r.legacyPath &&
        a.configPath === r.configPath
      )
        this.memo = a.enabled;
      else this.memo = t(r);
    } catch {
      this.memo = !1;
    }
    return this.memo;
  }
  reset() {
    ((this.memo = void 0), (this.handedIn = void 0));
  }
}
var ee = new j(() => new N());
function te() {
  return ee.of(B().host);
}
function re() {
  return {
    legacyPath: x(getClaudeConfigDir(), ".config.json"),
    configPath: x(process.env.CLAUDE_CONFIG_DIR || homedir(), `.claude${fileSuffixForOauthConfig()}.json`),
  };
}
function primeWindowsCredManBackendEnabled(e) {
  te().prime(e, re);
}
var O;
function getSecureStorage() {
  if (O) return O;
  return v(E, _);
}
export { SECURE_STORAGE_READ_FAILED_SENTINEL, withSecureStorageWriteLock, runSecureStorageWriteWithoutLock, isKeychainLocked, invalidateCredentialsCopyCache, primeWindowsCredManBackendEnabled, getSecureStorage };

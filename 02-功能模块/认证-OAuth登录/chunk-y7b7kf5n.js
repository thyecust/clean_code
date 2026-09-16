// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { be } from "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import { F1 } from "./chunk-9g2q4bjq.js";
import { y, f, g } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { l, A } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { Cs } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { $5, A_, Sx, tv, Q5t, MU, eHn, wA } from "../../01-核心基础设施/共享小工具-未细化/chunk-h3avap4w.js";
import { Bf } from "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import { YQ, Fe } from "../Git-Worktree/chunk-9ys1bnqr.js";
import { On } from "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import { homedir as Q } from "os";
import { join as x } from "path";
var hc = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage as L } from "async_hooks";
import { join as U } from "path";
var P = new L(),
  R = Promise.resolve();
async function Xxn(e) {
  if (P.getStore()) return e();
  let t = R,
    r = Promise.withResolvers();
  R = r.promise;
  try {
    await t;
    let a = A_();
    await ae().mkdir(a);
    let o = await Cs(U(a, ".storage-write"), {
      realpath: !1,
      retries: { retries: 10, minTimeout: 100, maxTimeout: 1000 },
      stale: 15000,
      onCompromised: (s) =>
        n(`[secureStorage] write lock compromised: ${l(s)}`, { level: "warn" }),
    });
    try {
      return await P.run(!0, e);
    } finally {
      await o().catch((s) =>
        n(`[secureStorage] write lock release failed: ${l(s)}`, {
          level: "warn",
        }),
      );
    }
  } finally {
    r.resolve();
  }
}
async function Uar(e) {
  return P.run(!0, e);
}
function d(e, t, r) {
  return Xxn(async () => {
    e.invalidateCache?.();
    let a = await (e.readAsyncStrict?.(r) ?? e.readAsync(r));
    if (a === hc) return { success: !1, transient: !0 };
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
      if (o === hc) return hc;
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
        return (y("secure_storage_credentials_write"), i);
      }
      if (i.transient)
        return (
          g(
            "secure_storage_credentials_write",
            "primary_transient_skip_fallback",
          ),
          i
        );
      let u = await t.update(a, o);
      if (u.success) {
        if (s !== null) await e.delete();
        return (
          g("secure_storage_credentials_write", "plaintext_fallback_used"),
          { success: !0, warning: u.warning }
        );
      }
      return (
        f("secure_storage_credentials_write", "primary_and_fallback_failed"),
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
      let e = MU(),
        t = e.cache;
      if (Date.now() - t.cachedAt < Q5t) return t.data;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < eHn) return t.data;
      try {
        let a = Sx($5),
          o = tv(),
          s = YQ(`security find-generic-password -a "${o}" -w -s "${a}"`, {
            timeout: m,
          });
        if (s) {
          let i = z(s);
          return ((e.cache = { data: i, cachedAt: Date.now() }), i);
        }
      } catch (a) {}
      if (t.data !== null)
        return (
          n("[keychain] read failed; serving stale cache", { level: "warn" }),
          (e.cache = { data: t.data, cachedAt: Date.now() }),
          t.data
        );
      return ((e.cache = { data: null, cachedAt: Date.now() }), null);
    },
    async readAsync() {
      let e = MU(),
        t = e.cache;
      if (Date.now() - t.cachedAt < Q5t) return t.data;
      if (e.readInFlight) return e.readInFlight;
      let r = e.lastReadFailure;
      if (r !== null && Date.now() - r < eHn) return null;
      let a = e.generation,
        o = k().then((s) => {
          if (a !== e.generation) return s === hc ? null : s;
          if (((e.readInFlight = null), s === hc)) {
            if (
              (n("[keychain] readAsync failed; not caching a null", {
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
      let e = MU(),
        t = e.generation,
        r = await k();
      if (r !== hc && t === e.generation)
        ((e.cache = { data: r ?? e.cache.data, cachedAt: Date.now() }),
          (e.lastReadFailure = null));
      return r;
    },
    invalidateCache() {
      wA();
    },
    mutate(e) {
      return d(E, e);
    },
    async update(e) {
      let t = MU();
      wA();
      try {
        let r = Sx($5),
          a = tv(),
          o = b(e),
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
          (n(
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
      wA();
      try {
        let e = Sx($5),
          t = tv();
        return (
          await Fe("security", ["delete-generic-password", "-a", t, "-s", e], {
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
    let e = Sx($5),
      t = tv(),
      { stdout: r, code: a } = await Fe(
        "security",
        ["find-generic-password", "-a", t, "-w", "-s", e],
        { useCwd: !1, preserveOutputOnError: !1, timeout: m },
      );
    if (a === 0 && r) return z(r.trim());
    if (a === 0 || a === K || a === W) return null;
    return hc;
  } catch (e) {
    return null;
  }
}
var h;
function Yxn() {
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
import { chmod as Y } from "fs/promises";
import { join as G } from "path";
function c() {
  let e = A_(),
    t = ".credentials.json";
  return { storageDir: e, storagePath: G(e, ".credentials.json") };
}
var T = "Warning: Storing credentials in plaintext.";
function X(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return null;
  return hc;
}
var V = {
  async read() {
    let { storagePath: e } = c();
    try {
      let t = await ae().readFile(e, { encoding: "utf8" });
      return z(t);
    } catch {
      return null;
    }
  },
  async readStrict() {
    let { storagePath: e } = c(),
      t;
    try {
      t = await ae().readFile(e, { encoding: "utf8" });
    } catch (r) {
      return X(A(r), "darwin");
    }
    try {
      return z(t);
    } catch {
      return null;
    }
  },
  async write(e) {
    try {
      let { storageDir: t, storagePath: r } = c();
      return (
        await ae().mkdir(t),
        await On(r, b(e), 384),
        await Y(r, 384),
        { success: !0, warning: T }
      );
    } catch {
      return { success: !1 };
    } finally {
      if (M()) IQ();
    }
  },
  async remove() {
    let { storagePath: e } = c();
    try {
      return (await ae().unlink(e), !0);
    } catch (t) {
      if (A(t) === "ENOENT") return !0;
      return !1;
    } finally {
      if (M()) IQ();
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
      return hc;
    default: {
      let t = e;
      return hc;
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
      if (s.state === "written" && o === a.generation) D(a, r, b(t));
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
      D(e, r, b(t.data));
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
function IQ() {
  S(p());
}
function C(e) {
  return M() && e !== void 0 ? q(e) : V;
}
var _ = {
  name: "plaintext",
  read(e) {
    let { storagePath: t } = c();
    try {
      let r = M() && e?.fromStoreCopy === !0 ? p().copy : void 0;
      if (r !== void 0 && r.storagePath === t) {
        if (r.text === null) return null;
        return JSON.parse(r.text);
      }
      let a = ae().readFileSync(t, { encoding: "utf8" });
      return z(a);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    IQ();
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
    legacyPath: x(be(), ".config.json"),
    configPath: x(process.env.CLAUDE_CONFIG_DIR || Q(), `.claude${F1()}.json`),
  };
}
function Jxn(e) {
  te().prime(e, re);
}
var O;
function yn() {
  if (O) return O;
  return v(E, _);
}
export { hc, Xxn, Uar, Yxn, IQ, Jxn, yn };

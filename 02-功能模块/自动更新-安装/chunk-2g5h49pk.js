// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { runtimeEnvironment, isSemverGreaterThan, isSemverAtLeast, isSemverLessThan, getVersionForAnalytics, getPlatformForAnalytics, initializeGrowthBook, getFeatureValue_CACHED_MAY_BE_STALE, saveGlobalConfig, getGlobalConfig } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { j, B } from "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import { Ie, po } from "../../00-第三方库/lodash/lodash.207999qb.js";
import { sleep } from "../../01-核心基础设施/共享小工具-未细化/async-timeout-utils.js";
import { createLazyValue } from "../../01-核心基础设施/共享小工具-未细化/lazy-value.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { fromEnum } from "../../01-核心基础设施/共享小工具-未细化/analytics-fields.js";
import { R, q0, ge, l, A, Jg, Po, W } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { Et, b, z, ae, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { logError } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { logEvent } from "../../01-核心基础设施/共享小工具-未细化/analytics-event-queue.js";
import { logFeatureOk, logFeatureBad, logFeatureSad } from "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import { execFileNoThrowWithCwd } from "../Git-Worktree/git-exec-hardening.js";
import { writeFileAtomicSync } from "../../01-核心基础设施/安全文件系统(FS加固)/atomic-file-write.js";
import { isCancel, isAxiosError } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { isClaudeDownloadsHost, externalHttp } from "../../01-核心基础设施/共享小工具-未细化/external-http.js";
import { Cs, Vlr } from "../../00-第三方库/_未识别/第三方库-其他/chunk-8fpdwg2e.js";
import { getProcessCommand } from "../../01-核心基础设施/核心工具-进程与信号/process-identity.js";
import { isNativeInstallerSymlink, isNpmShimExecutable } from "../../03-入口与运行时/核心应用-Agent循环/核心应用-Agent循环.wmzgeczq.js";
import { hN } from "../插件系统/chunk-ajtn749s.js";
import { SR, UH, tf } from "../../00-第三方库/_未识别/第三方库-@anthropic-ai-sdk/chunk-k58dgrhz.js";
import {
  iFt,
  Fbe,
  Gce,
  aFt,
  Opt,
  lFt,
  fte,
  qce,
  zce,
} from "./chunk-548xet6h.js";
import { dte } from "./chunk-brx72pf1.js";
import { getXdgStateHome, getXdgCacheHome, getClaudeVersionsDir, getLocalBinDir } from "../../01-核心基础设施/共享小工具-未细化/user-directories.js";
import { pg } from "../../00-第三方库/_未识别/第三方库-其他/chunk-jm5cswvd.js";
import { s, T, c, it, fe, k } from "../../00-第三方库/zod/zod.5ef0bk11.js";
import { toESM } from "../../01-核心基础设施/共享小工具-未细化/chunk-2c9tjhwd.js";
var ht = toESM(pg(), 1);
import { constants } from "fs";
import {
  access,
  chmod as sn,
  copyFile,
  mkdir,
  readdir as be,
  readlink,
  realpath,
  rename,
  rm as ke,
  rmdir,
  stat as K,
  symlink,
  unlink,
  utimes,
  writeFile,
} from "fs/promises";
import { homedir } from "os";
import { randomBytes } from "crypto";
import {
  basename as _t,
  delimiter,
  dirname,
  join as V,
  resolve,
} from "path";
import { createHash as Re } from "crypto";
import { createReadStream, createWriteStream } from "fs";
import { chmod as It, rm as Mt } from "fs/promises";
import { join as Ft } from "path";
import { Readable as Dt, Transform as je } from "stream";
import { pipeline } from "stream/promises";
import { createZstdDecompress } from "zlib";
import { createHash as $t, createPublicKey, verify } from "crypto";
function Oe() {
  return `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB
UZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr
mYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7
ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV
NX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y
0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs
IdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi
p5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw
H6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw
1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0
lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp
IgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==
-----END PUBLIC KEY-----
`;
}
var Ve = Buffer.from("claude-code-manifest-v1\x00"),
  $e = "2.1.207",
  ze = "flag";
var Tt = 1,
  xt = "RSASSA-PKCS1-v1_5-SHA512",
  Ct = createLazyValue(() =>
    c({
      schema: k(Tt),
      algorithm: k(xt),
      signature: s().min(1),
      publicKeySha256: s().regex(/^[0-9a-f]{64}$/),
    }),
  ),
  Se = createLazyValue(() =>
    it({
      version: s(),
      manifestSignatureEnforcement: s().optional(),
      platforms: fe(
        s(),
        it({ checksum: s(), size: T().optional(), binary: s().optional() }),
      ),
    }),
  );
class rT extends R {
  reason;
  constructor(e, t) {
    super(
      `Release verification failed for Claude Code ${e} (${t}). The update was not installed.`,
      "Release manifest signature verification failed",
      t,
    );
    ((this.name = "ManifestSignatureError"), (this.reason = t));
  }
}
function Ue({
  manifestBytes: e,
  sidecar: t,
  expectedVersion: r,
  publicKeyPem: d,
}) {
  let p = Ct().safeParse(t);
  if (!p.success) throw new rT(r, "sidecar_malformed");
  let { signature: o, publicKeySha256: _ } = p.data;
  if (Buffer.from(o, "base64").toString("base64") !== o)
    throw new rT(r, "sidecar_malformed");
  let w;
  try {
    w = createPublicKey(d);
  } catch {
    throw new rT(r, "key_mismatch");
  }
  let v = $t("sha256")
    .update(w.export({ type: "spki", format: "der" }))
    .digest("hex");
  if (_ !== v) throw new rT(r, "key_mismatch");
  let S = !1;
  try {
    S = verify("sha512", Buffer.concat([Ve, e]), w, Buffer.from(o, "base64"));
  } catch {
    S = !1;
  }
  if (!S) throw new rT(r, "signature_invalid");
  let F;
  try {
    let I = Se().safeParse(z(e.toString("utf8")));
    F = I.success ? I.data : void 0;
  } catch {
    F = void 0;
  }
  if (!F || F.version !== r) throw new rT(r, "version_mismatch");
  return F;
}
var Ae = "https://downloads.claude.ai/claude-code-releases";
function Pe(e, t) {
  return isClaudeDownloadsHost(e) ? hN.get(e, t) : externalHttp.get(e, t);
}
var Ge = 30000,
  qe = 3;
async function Lt(e = "latest", t, r) {
  let d = Date.now(),
    p = 0;
  try {
    let o = await iFt(
        (w) => (
          p++,
          Pe(`${t}/${e}`, {
            timeout: Ge,
            responseType: "text",
            signal: w,
            ...r,
          })
        ),
        {
          attempts: qe,
          timeoutMs: Ge,
          onRetry: (w, v) => {
            n(
              `Version check failed on attempt ${w}/${qe}, retrying: ${v instanceof Error ? v.message : String(v)}`,
            );
          },
        },
      ),
      _ = Date.now() - d;
    if (
      (logEvent("tengu_version_check_success", { latency_ms: _, attempt: p }), p > 1)
    )
      logFeatureSad("update_check", "update_check_binary_repo_retry");
    else logFeatureOk("update_check");
    return o.data.trim();
  } catch (o) {
    let _ = Date.now() - d,
      w = o instanceof Error ? o.message : String(o),
      v = _e(o);
    (logFeatureBad("update_check", "update_check_binary_repo_failed"),
      logEvent("tengu_version_check_failure", {
        latency_ms: _,
        http_status: v,
        is_timeout: Me(o),
        attempt: p,
        platform: getPlatformForAnalytics(Xt()),
        channel: fromEnum(e),
      }));
    let S = new R(
      `Failed to fetch version from ${t}/${e} after ${p} attempt(s): ${w}`,
      "Failed to fetch version from binary repo",
    );
    throw (
      n(`Failed to fetch version from ${t}/${e} after ${p} attempt(s): ${w}`, {
        level: "error",
      }),
      S
    );
  }
}
async function Hpt(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r))
      throw new R(
        `Version ${r} is not available for installation. Use 'stable' or 'latest'.`,
        "Test-fixture version rejected outside test builds",
      );
    return r;
  }
  let t = e;
  if (t !== "stable" && t !== "latest" && t !== "rc")
    throw new R(
      `Invalid channel: ${e}. Use 'latest' or 'stable'`,
      "Invalid release channel",
    );
  if (t === "rc")
    throw new R(
      `Invalid channel: ${e}. Use 'stable' or 'latest'`,
      "Invalid release channel",
    );
  return Lt(t, Ae);
}
var _r = createLazyValue(() =>
  c({ dist: c({ integrity: s().min(1), tarball: s().min(1).optional() }) }),
);
var Ot = 120000,
  le = 3,
  Ke = 600000;
function Vt() {
  return Number(a.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || Ot;
}
function zt() {
  return Number(a.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || Ke;
}
class mze extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}
function Ye(e) {
  if (isAxiosError(e) && e.response) return !1;
  let t = tf(e)?.code;
  if (t === "ECONNABORTED" || t === "ETIMEDOUT") return !1;
  if (t !== void 0 && (UH.has(t) || SR.has(t))) return !0;
  return q0(e, "aborted");
}
async function We(e, t, r, d = {}, p) {
  let o,
    _ = !1,
    w = !1;
  for (let v = 1; v <= le; v++) {
    let S = new AbortController(),
      F = !1,
      I = !1,
      P,
      E,
      x,
      M = () => {
        if (P) (clearTimeout(P), (P = void 0));
        if (E) (clearTimeout(E), (E = void 0));
      },
      C = () => {
        if (P) P.refresh();
        else P = setTimeout((D) => D.abort("stall"), Vt(), S);
      };
    try {
      (C(), (E = setTimeout((U) => U.abort("deadline"), zt(), S)));
      let D = await Pe(e, {
          timeout: Ke,
          responseType: "stream",
          signal: S.signal,
          ...d,
        }),
        N = Re("sha256"),
        L = p ? Re("sha256") : void 0,
        G = L ?? N,
        ne = new je({
          transform(U, O, q) {
            (C(), G.update(U), q(null, U));
          },
        });
      if (((x = createWriteStream(r, { highWaterMark: 4194304 })), x.on("drain", C), p)) {
        let U = 0,
          O = new je({
            transform(q, J, ie) {
              if (((U += q.length), U > p.decompressedSize)) {
                ie(
                  new R(
                    `Decompressed binary exceeds the manifest size of ${p.decompressedSize} bytes`,
                    "Decompressed binary larger than manifest size",
                  ),
                );
                return;
              }
              (N.update(q), ie(null, q));
            },
          });
        await pipeline(D.data, ne, createZstdDecompress(), O, x, { signal: S.signal });
      } else await pipeline(D.data, ne, x, { signal: S.signal });
      if (((F = !0), M(), p)) {
        let U = L?.digest("hex");
        if (U !== p.checksum)
          throw new R(
            `Checksum mismatch: expected ${p.checksum}, got ${U} (compressed)`,
            "Checksum mismatch during compressed binary download",
          );
      }
      let Y = N.digest("hex");
      if (Y !== t)
        throw Object.assign(
          new R(
            `Checksum mismatch: expected ${t}, got ${Y}`,
            "Checksum mismatch during binary download",
          ),
          { deterministic: p !== void 0 },
        );
      return (
        (I = !0),
        await It(r, 493),
        { checksumRetried: _, dropRetried: w }
      );
    } catch (D) {
      M();
      let N = qt(D)
        ? Object.assign(
            new R(
              `Checksum mismatch: zstd decoder rejected the frame (${A(D)})`,
              "zstd decoder rejected the frame",
            ),
            { cause: D },
          )
        : D;
      if (isAxiosError(N) && N.response?.data instanceof Dt) N.response.data.destroy();
      if (x && !I) {
        let q = x;
        (await new Promise((J) => q.close(() => J())),
          await Mt(r, { force: !0 }).catch((J) =>
            n(
              `Failed to remove partial download: ${J instanceof Error ? J.message : String(J)}`,
              { level: "error" },
            ),
          ));
      }
      let L = S.signal.aborted ? S.signal.reason : void 0,
        G = L === "deadline",
        ne = !G && (L === "stall" || isCancel(N));
      if (G)
        throw Object.assign(
          new R("Download timed out: exceeded the total deadline"),
          { attempt: v },
        );
      let Y = N instanceof Error && N.message.includes("Checksum mismatch"),
        U = !F && (Ye(N) || tf(N)?.code === "ERR_STREAM_PREMATURE_CLOSE"),
        O = ne ? new mze() : ge(N);
      if (((o = O), (ne || Y || U) && !Ht(N) && v < le)) {
        if (Y) _ = !0;
        else if (U) w = !0;
        (n(
          `Download ${Y ? "checksum mismatch" : ne ? "stalled" : "connection dropped"} on attempt ${v}/${le}, retrying...`,
        ),
          await sleep(1000));
        continue;
      }
      if (U) {
        let q = A(O);
        throw Object.assign(
          new R(
            `The connection dropped while downloading the update (attempt ${v}/${le}: ${O.message}). Check your network \u2014 proxies sometimes cut off large downloads.`,
            "Connection dropped repeatedly during binary download",
          ),
          { attempt: v, connectionDrop: !0, cause: O, ...(q && { code: q }) },
        );
      }
      throw Object.assign(O, { attempt: v });
    }
  }
  throw o ?? Error("Download failed after all retries");
}
function Xe(e) {
  let t = getFeatureValue_CACHED_MAY_BE_STALE("tengu_elegant_pancake", null);
  return e === "always" ? t !== !1 : t === !0;
}
function Ut() {
  return ze;
}
function Bt() {
  return Xe(Ut());
}
function jt(e) {
  return e === "always" || (e === "flag" && Xe("flag"));
}
async function Qe(
  e,
  t,
  {
    authConfig: r,
    signaturePolicy: d,
    platform: p,
    startTime: o,
    purpose: _ = "download",
  },
) {
  let w = _ === "download",
    v,
    S,
    F = !1,
    I = Ipt(p);
  try {
    let x = await Ce(`${e}/${t}/manifest.json`, {
      timeout: 1e4,
      ...r,
      responseType: "arraybuffer",
      maxContentLength: 1048576,
    });
    ((F = x.dropRetried), (v = Buffer.from(x.data)));
    let M = Se().safeParse(z(v.toString("utf8")));
    if (!M.success)
      throw new R(
        `Manifest for ${t} is not a valid release manifest`,
        "Release manifest failed schema validation",
      );
    S = M.data;
  } catch (x) {
    let M = Date.now() - o,
      C = x instanceof Error ? x.message : String(x);
    if (w) logFeatureBad("update_download", "update_download_manifest_failed");
    throw (
      logEvent("tengu_binary_manifest_fetch_failure", {
        latency_ms: M,
        http_status: _e(x),
        is_timeout: Me(x),
        platform: getPlatformForAnalytics(p),
      }),
      n(`Failed to fetch manifest from ${e}/${t}/manifest.json: ${C}`, {
        level: "error",
      }),
      x
    );
  }
  let P = !1,
    E = !1;
  if (d !== "skip") {
    let x = `${e}/${t}/manifest.json.raw-sig.json`,
      M = Date.now(),
      C;
    try {
      let D,
        N = !1;
      try {
        let L = await Ce(x, {
          timeout: 1e4,
          ...r,
          responseType: "json",
          maxContentLength: 65536,
        });
        ((F ||= L.dropRetried), (D = L.data));
      } catch (L) {
        if (((C = _e(L)), C !== 404)) throw new rT(t, "sidecar_fetch_failed");
        if (d !== "allow-unsigned-legacy") throw new rT(t, "sidecar_missing");
        N = !0;
      }
      if (N)
        (logFeatureSad("update_manifest_signature", "unsigned_legacy"),
          n(
            `No manifest signature published for ${t} (predates ${$e}); continuing with checksum-only verification`,
            { level: "warn" },
          ));
      else {
        let L = Ue({
          manifestBytes: v,
          sidecar: D,
          expectedVersion: t,
          publicKeyPem: Oe(),
        });
        n(`Verified manifest signature for ${t}`);
        let G = L.platforms[p];
        if (G && G.binary !== I) throw new rT(t, "binary_name_mismatch");
        if (
          ((S = L),
          (P = !0),
          d === "require-enforcing-release" &&
            !jt(L.manifestSignatureEnforcement))
        )
          throw new rT(t, "release_predates_enforcement");
        ((E = !0), logFeatureOk("update_manifest_signature"));
      }
    } catch (D) {
      if (!(D instanceof rT)) throw D;
      await initializeGrowthBook().catch(() => null);
      let N = Bt();
      if (
        (logEvent("tengu_binary_manifest_signature_failed", {
          reason: fromEnum(D.reason),
          http_status: C,
          enforced: N,
          platform: getPlatformForAnalytics(p),
          latency_ms: Date.now() - M,
        }),
        N)
      ) {
        if (D.reason === "release_predates_enforcement")
          (logFeatureSad("update_manifest_signature", D.reason),
            n(
              `${t} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`,
              { level: "warn" },
            ));
        else {
          if ((logFeatureBad("update_manifest_signature", D.reason), w))
            logFeatureBad("update_download", "update_download_manifest_signature");
          n(`Manifest signature check failed for ${x}: ${D.reason}`, {
            level: "error",
          });
        }
        throw D;
      }
      (logFeatureSad("update_manifest_signature", D.reason),
        n(
          `Manifest signature check failed for ${x}: ${D.reason} (enforcement disabled; continuing)`,
          { level: "warn" },
        ));
    }
  }
  return {
    manifest: S,
    manifestAuthenticated: P,
    signatureVerified: E,
    metadataDropRetried: F,
  };
}
async function Gt(e, t, r, { authConfig: d, signaturePolicy: p }) {
  let o = ae();
  await o.rm(t, { recursive: !0, force: !0 });
  let _ = G4(),
    w = Ipt(_),
    v = Date.now();
  logEvent("tengu_binary_download_attempt", {});
  let [S, F] = await Promise.all([
      Qe(r, e, {
        authConfig: d,
        signaturePolicy: p,
        platform: _,
        startTime: v,
      }),
      Ce(`${r}/${e}/manifest.zst.json`, {
        timeout: 1e4,
        ...d,
        responseType: "json",
        maxContentLength: 1048576,
      }).catch((O) => {
        n(`No compressed manifest for ${e}: ${l(O)}`);
        return;
      }),
    ]),
    { manifest: I, signatureVerified: P } = S,
    E = F?.data,
    x = S.metadataDropRetried || F?.dropRetried === !0,
    M = I.platforms[_];
  if (!M)
    throw (
      logFeatureBad("update_download", "update_download_platform_not_found"),
      logEvent("tengu_binary_platform_not_found", {}),
      new R(
        `Native binaries for ${_} are not available on this release channel (version ${e} ships: ${Object.keys(I.platforms).sort().join(", ")}).`,
        "Native binaries not available for platform on this channel",
      )
    );
  let C = M.checksum,
    D = E?.platforms?.[_]?.checksum,
    N = M.size,
    L =
      D !== void 0 &&
      /^[a-f0-9]{64}$/.test(D) &&
      N !== void 0 &&
      Number.isInteger(N) &&
      N > 0
        ? { checksum: D, decompressedSize: N }
        : void 0,
    G = `${r}/${e}/${_}/${w}`;
  await o.mkdir(t);
  let ne = Ft(t, w),
    Y = L !== void 0,
    U = Y ? `${G}.zst` : G;
  try {
    let O;
    if (L)
      try {
        O = await We(U, C, ne, d || {}, L);
      } catch (ce) {
        if (_e(ce) === void 0 && !Wt(ce)) throw ce;
        ((Y = !1),
          (U = G),
          n(
            `Compressed binary unusable (${ce instanceof Error ? ce.message : String(ce)}), falling back to ${G}`,
          ));
      }
    let { checksumRetried: q, dropRetried: J } =
        O ?? (await We(U, C, ne, d || {})),
      ie = Date.now() - v;
    if (L && !Y) logFeatureSad("update_download", "update_download_zst_fallback");
    else if (q) logFeatureSad("update_download", "update_download_checksum_retry");
    else if (J || x) logFeatureSad("update_download", "update_download_drop_retry");
    else logFeatureOk("update_download");
    return (
      logEvent("tengu_binary_download_success", { latency_ms: ie, compressed: Y }),
      { signatureVerified: P, expectedChecksum: C }
    );
  } catch (O) {
    let q = Date.now() - v,
      J = O instanceof Error ? O.message : String(O),
      ie = J.includes("Checksum mismatch");
    if (ie) logFeatureBad("update_download", "update_download_checksum_mismatch");
    else if (O instanceof mze)
      logFeatureBad("update_download", "update_download_stall_timeout");
    else if (Kt(O)) logFeatureBad("update_download", "update_download_connection_drop");
    else logFeatureBad("update_download", "update_download_binary_failed");
    throw (
      logEvent("tengu_binary_download_failure", {
        latency_ms: q,
        http_status: _e(O),
        is_timeout: Me(O),
        is_checksum_mismatch: ie,
        attempt: Yt(O),
        platform: getPlatformForAnalytics(_),
        compressed: Y,
      }),
      n(`Failed to download binary from ${U}: ${J}`, { level: "error" }),
      O
    );
  }
}
function Ze(e, { explicitVersionRequested: t, requireEnforcingRelease: r }) {
  return r
    ? "require-enforcing-release"
    : t && isSemverLessThan(e, $e)
      ? "allow-unsigned-legacy"
      : "require";
}
async function Je(e, t, r) {
  let d = G4(),
    {
      manifest: p,
      manifestAuthenticated: o,
      signatureVerified: _,
    } = await Qe(Ae, e, {
      signaturePolicy: Ze(e, r),
      platform: d,
      startTime: Date.now(),
      purpose: "reverify",
    });
  if (!o)
    return (
      n(
        `Manifest for retained ${e} is unauthenticated; activating the retained copy without a checksum comparison`,
        { level: "warn" },
      ),
      { signatureVerified: !1, binaryMatches: !0, expectedChecksum: void 0 }
    );
  let w = p.platforms[d]?.checksum,
    v = w !== void 0 && (await ve(t, w));
  if (!v)
    n(
      `Retained ${e} does not match its signed manifest checksum; re-downloading`,
    );
  return { signatureVerified: _, binaryMatches: v, expectedChecksum: w };
}
function et(e) {
  if (!isAxiosError(e) || e.response) return !1;
  let t = tf(e)?.code;
  return t !== void 0 && (SR.has(t) || t === "ETIMEDOUT");
}
async function ye(e) {
  let t = Re("sha256");
  return (await pipeline(createReadStream(e), t), t.digest("hex"));
}
async function ve(e, t) {
  try {
    return (await ye(e)) === t;
  } catch (r) {
    return (
      n(`Could not hash ${e} (${A(r) ?? ge(r).name}); treating as mismatched`),
      !1
    );
  }
}
async function tt(
  e,
  t,
  { explicitVersionRequested: r, requireEnforcingRelease: d },
) {
  let { signatureVerified: p, expectedChecksum: o } = await Gt(e, t, Ae, {
    signaturePolicy: Ze(e, {
      explicitVersionRequested: r,
      requireEnforcingRelease: d,
    }),
  });
  return { downloadType: "binary", signatureVerified: p, expectedChecksum: o };
}
function _e(e) {
  if (isAxiosError(e) && e.response) return e.response.status;
  return;
}
function Me(e) {
  if (e instanceof mze) return !0;
  if (isCancel(e)) return !0;
  if (isAxiosError(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (
    e !== null &&
    typeof e === "object" &&
    "code" in e &&
    e.code === "ETIMEDOUT"
  )
    return !0;
  let t = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return t.includes("timeout") || t.includes("timed out");
}
function qt(e) {
  return A(e)?.startsWith("ZSTD_error_") === !0;
}
function Wt(e) {
  let t = e instanceof Error ? e.message : String(e);
  return (
    t.includes("Checksum mismatch") || t.includes("exceeds the manifest size")
  );
}
function Ht(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "deterministic" in e &&
    e.deterministic === !0
  );
}
function Kt(e) {
  return (
    e !== null &&
    typeof e === "object" &&
    "connectionDrop" in e &&
    e.connectionDrop === !0
  );
}
function Yt(e) {
  if (
    e !== null &&
    typeof e === "object" &&
    "attempt" in e &&
    typeof e.attempt === "number"
  )
    return e.attempt;
  return;
}
function Xt() {
  try {
    return G4();
  } catch {
    return "unknown";
  }
}
async function Ce(e, t) {
  let r = !1;
  for (let d = 1; ; d++)
    try {
      return { data: (await Pe(e, t)).data, dropRetried: r };
    } catch (p) {
      if (d >= le || !Ye(p)) throw p;
      ((r = !0),
        n(
          `Fetch of ${e} connection dropped on attempt ${d}/${le}, retrying...`,
        ),
        await sleep(1000));
    }
}
import { lstat, readdir as Zt } from "fs/promises";
import { basename as Jt, join as en } from "path";
function de() {
  return !po(void 0);
}
var tn = 7200000;
function Fe(e) {
  if (e <= 1) return !1;
  try {
    return (process.kill(e, 0), !0);
  } catch {
    return !1;
  }
}
function nn(e, t) {
  if (!Fe(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = getProcessCommand(e);
    if (!r) return !0;
    let d = r.toLowerCase(),
      p = t.toLowerCase();
    return d.includes("claude") || d.includes(p);
  } catch {
    return !0;
  }
}
function ue(e) {
  let t = ae();
  try {
    let r = t.readFileSync(e, { encoding: "utf8" });
    if (!r || r.trim() === "") return null;
    let d = z(r);
    if (typeof d.pid !== "number" || !d.version || !d.execPath) return null;
    return d;
  } catch {
    return null;
  }
}
function he(e) {
  let t = ue(e);
  if (!t) return !1;
  let { pid: r, execPath: d } = t;
  if (!Fe(r)) return !1;
  if (!nn(r, d))
    return (
      n(
        `Lock PID ${r} is running but does not appear to be Claude - treating as stale`,
      ),
      !1
    );
  let p = ae();
  try {
    let o = p.statSync(e);
    if (Date.now() - o.mtimeMs > tn) {
      if (!Fe(r)) return !1;
    }
  } catch {}
  return !0;
}
function rn(e, t) {
  writeFileAtomicSync(e, b(t, null, 2));
}
async function nt(e, t) {
  let r = ae(),
    d = Jt(e);
  if (he(t)) {
    let o = ue(t);
    return (n(`Cannot acquire lock for ${d} - held by PID ${o?.pid}`), null);
  }
  let p = {
    pid: process.pid,
    version: d,
    execPath: process.execPath,
    acquiredAt: Date.now(),
  };
  try {
    if ((rn(t, p), ue(t)?.pid !== process.pid)) return null;
    return (
      n(`Acquired PID lock for ${d} (PID ${process.pid})`),
      () => {
        try {
          if (ue(t)?.pid === process.pid)
            (r.unlinkSync(t), n(`Released PID lock for ${d}`));
        } catch (_) {
          n(`Failed to release lock for ${d}: ${_}`);
        }
      }
    );
  } catch (o) {
    return (n(`Failed to acquire lock for ${d}: ${o}`), null);
  }
}
async function rt(e, t) {
  let r = await nt(e, t);
  if (!r) return !1;
  let d = () => {
    try {
      r();
    } catch {}
  };
  return (
    process.on("exit", d),
    process.on("SIGINT", d),
    process.on("SIGTERM", d),
    !0
  );
}
async function at(e, t, r) {
  let d = await nt(e, t);
  if (!d) return !1;
  try {
    return (await r(), !0);
  } finally {
    d();
  }
}
async function ot(e) {
  let t = ae(),
    r = 0,
    d;
  try {
    d = (await Zt(e)).filter((p) => p.endsWith(".lock"));
  } catch (p) {
    if (W(p)) return 0;
    return (
      n(`Failed to readdir locks directory: ${ge(p).message}`, {
        level: "error",
      }),
      0
    );
  }
  for (let p of d) {
    let o = en(e, p);
    try {
      if ((await lstat(o)).isDirectory())
        (t.rmSync(o, { recursive: !0, force: !0 }),
          r++,
          n(`Cleaned up legacy directory lock: ${p}`));
      else if (!he(o)) (t.unlinkSync(o), r++, n(`Cleaned up stale lock: ${p}`));
    } catch {}
    await new Promise((_) => setImmediate(_));
  }
  return r;
}
var De = 2,
  Ne = 604800000,
  mn = !1;
function G4() {
  let e = a.platform,
    t = "arm64";
  if (!t) {
    let r = Error("Unsupported architecture: arm64");
    throw (
      n("Native installer does not support architecture: arm64", {
        level: "error",
      }),
      r
    );
  }
  if (mn) t = "arm64";
  if (e === "linux") {
    if (runtimeEnvironment.isAndroidEnvironment()) return `linux-${t}-android`;
    if (runtimeEnvironment.isMuslEnvironment()) return `linux-${t}-musl`;
  }
  return `${e}-${t}`;
}
function Ipt(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function Q() {
  let e = G4(),
    t = Ipt(e);
  return {
    versions: getClaudeVersionsDir(),
    staging: V(getXdgCacheHome(), "claude", "staging"),
    locks: V(getXdgStateHome(), "claude", "locks"),
    executable: V(getLocalBinDir(), t),
  };
}
async function re(e) {
  try {
    let t = await K(e);
    if (!t.isFile() || t.size === 0) return !1;
    return (t.mode & constants.S_IXUSR) !== 0;
  } catch {
    return !1;
  }
}
async function Le(e) {
  let t = Q(),
    r = [t.versions, t.staging, t.locks];
  await Promise.all(r.map((o) => mkdir(o, { recursive: !0 })));
  let d = dirname(t.executable);
  if (
    (await mkdir(d, { recursive: !0 }),
    !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".")
  )
    throw Error(
      `Invalid version string "${e}": contains path-unsafe characters`,
    );
  let p = V(t.versions, e);
  try {
    await writeFile(p, "", { encoding: "utf8", flag: "wx" });
  } catch (o) {
    if (A(o) !== "EEXIST") throw o;
    try {
      if ((await K(p)).size === 0) {
        let _ = new Date();
        await utimes(p, _, _);
      }
    } catch {}
  }
  return { stagingPath: V(t.staging, e), installPath: p };
}
async function wt(e, t, r = 0) {
  let d = Q(),
    p = we(d, e);
  if ((await mkdir(d.locks, { recursive: !0 }), de())) {
    let _ = 0,
      w = r + 1,
      v = r > 0 ? 1000 : 100,
      S = r > 0 ? 5000 : 500;
    while (_ < w) {
      if (
        await at(e, p, async () => {
          try {
            await t();
          } catch (I) {
            throw (
              n(`Native installer version-lock callback failed: ${I}`, {
                level: "error",
              }),
              I
            );
          }
        })
      )
        return (
          logEvent("tengu_version_lock_acquired", {
            is_pid_based: !0,
            is_lifetime_lock: !1,
            attempts: _ + 1,
          }),
          !0
        );
      if ((_++, _ < w)) {
        let I = Math.min(v * Math.pow(2, _ - 1), S);
        await sleep(I);
      }
    }
    return (
      logEvent("tengu_version_lock_failed", {
        is_pid_based: !0,
        is_lifetime_lock: !1,
        attempts: w,
      }),
      Ee(e, Error("Lock held by another process")),
      !1
    );
  }
  let o = null;
  try {
    try {
      o = await Cs(e, {
        stale: Ne,
        retries: {
          retries: r,
          minTimeout: r > 0 ? 1000 : 100,
          maxTimeout: r > 0 ? 5000 : 500,
        },
        lockfilePath: p,
        onCompromised: (_) => {
          n(
            `NON-FATAL: Version lock was compromised during operation: ${_.message}`,
            { level: "info" },
          );
        },
      });
    } catch (_) {
      return (
        logEvent("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !1,
        }),
        Ee(e, _),
        !1
      );
    }
    try {
      return (
        await t(),
        logEvent("tengu_version_lock_acquired", {
          is_pid_based: !1,
          is_lifetime_lock: !1,
        }),
        !0
      );
    } catch (_) {
      throw (
        n(`tryWithVersionLock: callback failed under version lock: ${l(_)}`, {
          level: "error",
        }),
        _
      );
    }
  } finally {
    if (o) await o();
  }
}
var lt = [100, 500, 2000];
class gze extends R {
  constructor() {
    super(
      "Staged binary no longer matches the verified checksum; refusing to install",
      "Staged binary checksum mismatch at install",
    );
  }
}
async function yt(e, t, r) {
  await mkdir(dirname(t), { recursive: !0 });
  let d;
  for (let p = 1; p <= lt.length + 1; p++) {
    let o = `${t}.tmp.${process.pid}.${Date.now()}.${p}`;
    try {
      if (
        (await copyFile(e, o), await sn(o, 493), r !== void 0 && (await ye(o)) !== r)
      )
        throw new gze();
      return (
        await rename(o, t),
        n(
          `Atomically installed binary to ${t}` +
            (p > 1 ? ` (attempt ${p})` : ""),
        ),
        { attempts: p }
      );
    } catch (_) {
      d = _;
      try {
        await unlink(o);
      } catch {}
      let w = A(_),
        v = w === "EBUSY" || (w === "EPERM" && !1),
        S = lt[p - 1];
      if (!v || S === void 0) throw _;
      (n(
        `atomicMoveToInstallPath attempt ${p} failed with ${w}; retrying in ${S}ms`,
      ),
        await sleep(S));
    }
  }
  throw d;
}
async function pn(e, t, r) {
  try {
    let d = V(e, "node_modules", "@anthropic-ai"),
      o = (await be(d)).find((v) => v.startsWith("claude-cli-native-"));
    if (!o)
      throw (
        logEvent("tengu_native_install_package_failure", {
          stage_find_package: !0,
          error_package_not_found: !0,
        }),
        Error("Could not find platform-specific native package")
      );
    let _ = V(d, o, "cli");
    try {
      await K(_);
    } catch {
      throw (
        logEvent("tengu_native_install_package_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0,
        }),
        Error("Native binary not found in staged package")
      );
    }
    let { attempts: w } = await yt(_, t, r);
    return (
      await ke(e, { recursive: !0, force: !0 }),
      logEvent("tengu_native_install_package_success", { install_attempts: w }),
      { moveRetried: w > 1 }
    );
  } catch (d) {
    let p = l(d);
    if (!(
      p.includes("Could not find platform-specific") ||
      p.includes("Native binary not found")
    ))
      if (
        (logEvent("tengu_native_install_package_failure", {
          stage_atomic_move: !0,
          error_move_failed: !0,
        }),
        logFeatureBad("update_apply", "update_apply_native_move_failed"),
        Po(d))
      )
        n(`installVersionFromPackage: atomic move failed: ${p}`, {
          level: "error",
        });
      else logError(ge(d));
    else
      (logFeatureBad("update_apply", "update_apply_native_staging_missing"),
        n(`installVersionFromPackage: ${p}`, { level: "error" }));
    throw d;
  }
}
async function gn(e, t, r) {
  try {
    let d = G4(),
      p = Ipt(d),
      o = V(e, p);
    try {
      await K(o);
    } catch (w) {
      throw (
        logEvent("tengu_native_install_binary_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0,
          error_code: Jg(w),
        }),
        Error("Staged binary not found")
      );
    }
    let { attempts: _ } = await yt(o, t, r);
    return (
      await ke(e, { recursive: !0, force: !0 }),
      logEvent("tengu_native_install_binary_success", { install_attempts: _ }),
      { moveRetried: _ > 1 }
    );
  } catch (d) {
    if (d instanceof gze)
      (logEvent("tengu_native_install_binary_failure", {
        stage_atomic_move: !0,
        error_checksum_mismatch: !0,
      }),
        logFeatureBad("update_apply", "update_apply_staged_checksum_mismatch"));
    else if (!l(d).includes("Staged binary not found"))
      (logEvent("tengu_native_install_binary_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0,
        error_code: Jg(d),
      }),
        logFeatureBad("update_apply", "update_apply_native_move_failed"));
    else logFeatureBad("update_apply", "update_apply_native_staging_missing");
    if (Po(d))
      n(`installVersionFromBinary: atomic move failed: ${l(d)}`, {
        level: "error",
      });
    else logError(ge(d));
    throw d;
  }
}
async function _n(e, t, r, d) {
  if (r === "npm") return pn(e, t, d);
  return gn(e, t, d);
}
var hn = new j(() => new Map());
async function ut(
  e,
  {
    forceReinstall: t,
    explicitVersionRequested: r,
    requireEnforcingRelease: d,
  },
) {
  let { stagingPath: p, installPath: o } = await Le(e),
    { executable: _ } = Q(),
    w = Ie("true") ? `${p}.${process.pid}.${Date.now()}` : p,
    v = hn.of(B().host),
    S = v.get(e),
    F = !(S && (S.enforcingRelease || !d)),
    I = {
      wasNewInstall: !1,
      moveRetried: !1,
      activationFailed: !1,
      activationRefused: !1,
      skippedUnverifiedRelease: !0,
    },
    P = F ? void 0 : S?.checksum,
    E = t || !(await vt(e));
  if (!E && F)
    try {
      let C = await Je(e, o, {
        explicitVersionRequested: r,
        requireEnforcingRelease: d,
      });
      if (((P = C.expectedChecksum), !C.binaryMatches)) E = !0;
      else if (C.signatureVerified)
        v.set(e, { enforcingRelease: d, checksum: P });
    } catch (C) {
      if (C instanceof rT) {
        if (d && C.reason === "release_predates_enforcement") return I;
        throw C;
      }
      if (!r || d || !et(C)) throw C;
      n(
        `Could not re-verify retained ${e} (${ge(C).name}); offline, activating as requested`,
        { level: "warn" },
      );
    }
  else if (!E && S?.checksum !== void 0) {
    if (!(await ve(o, S.checksum)))
      (n(
        `Retained ${e} no longer matches the checksum verified earlier in this process; re-downloading`,
        { level: "warn" },
      ),
        v.delete(e),
        (E = !0));
  }
  let x = !1;
  if (E) {
    n(
      t
        ? `Force reinstalling native installer version ${e}`
        : `Downloading native installer version ${e}`,
    );
    let C, D;
    try {
      ({
        downloadType: C,
        signatureVerified: D,
        expectedChecksum: P,
      } = await tt(e, w, {
        explicitVersionRequested: r,
        requireEnforcingRelease: d,
      }));
    } catch (N) {
      if (d && N instanceof rT && N.reason === "release_predates_enforcement")
        return I;
      throw N;
    }
    if ((({ moveRetried: x } = await _n(w, o, C, P)), D))
      v.set(e, { enforcingRelease: d, checksum: P });
  } else n(`Version ${e} already installed, updating symlink`);
  await kn(_);
  let M = await $n(_, o, { expectedChecksum: P });
  if (M !== "updated" && !(await re(_))) {
    let C = !1;
    try {
      (await K(o), (C = !0));
    } catch {}
    throw (
      logFeatureBad("update_apply", "update_apply_native_symlink_failed"),
      Error(
        `Failed to create executable at ${_}. Source file exists: ${C}. Either ${_} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`,
      )
    );
  }
  return {
    wasNewInstall: E,
    moveRetried: x,
    activationFailed: M === "failed",
    activationRefused: M === "refused",
    skippedUnverifiedRelease: !1,
  };
}
async function vt(e) {
  let { installPath: t } = await Le(e);
  return re(t);
}
async function wn() {
  if (await yn()) return !0;
  let { executable: e } = Q();
  return (await re(e)) && !(await isNpmShimExecutable(e).catch(() => !1));
}
async function yn() {
  let { versions: e, executable: t } = Q(),
    r = !1,
    d = [{ versions: e, executable: t }],
    [p, o] = await Promise.all([
      realpath(e).catch(() => e),
      realpath(dirname(t)).catch(() => dirname(t)),
    ]),
    _ = V(o, _t(t));
  if (p !== e || _ !== t) d.push({ versions: p, executable: _ });
  return d.some((w) => vn(process.execPath, { ...w, isWindows: !1 }));
}
function vn(e, { versions: t, executable: r, isWindows: d }) {
  let p = (w) => (d ? w.replaceAll("\\", "/").toLowerCase() : w),
    o = p(e),
    _ = p(t).replace(/\/+$/, "") + "/";
  return o.startsWith(_) || o === p(r);
}
function bn() {
  try {
    let e = getFeatureValue_CACHED_MAY_BE_STALE("tengu_canary", {});
    return (typeof e.external === "string" && ht.valid(e.external)) || null;
  } catch (e) {
    return (
      n(`getCanaryVersion: GB read failed, falling through: ${l(e)}`),
      null
    );
  }
}
async function En(e, t = !1) {
  let r = Date.now(),
    { executable: d } = Q(),
    p = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    { maxVersion: o, forceDowngradeEnabled: _ } = await fte(),
    w =
      _ &&
      !t &&
      p &&
      !!o &&
      qce(
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
        o,
        "native_update",
      ),
    v = w ? o : await Hpt(e);
  n(`Checking for native installer update to version ${v}`);
  let S = p && (await wn());
  if (e === "latest" && !w) {
    let C = bn(),
      D = C && o && isSemverGreaterThan(C, o);
    if (C && isSemverGreaterThan(C, v) && !D)
      (n(`Native installer: canary ${C} active, overriding ${v}`), (v = C));
    else if (D)
      n(`Native installer: canary ${C} exceeds maxVersion ${o}, not applying`);
  }
  if (!w && !t && o && isSemverGreaterThan(v, o)) {
    if (
      (n(
        `Native installer: maxVersion ${o} is set, capping update from ${v} to ${o}`,
      ),
      isSemverAtLeast(
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
        o,
      ))
    )
      return (
        n(
          `Native installer: current version ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION} is already at or above maxVersion ${o}, skipping update`,
        ),
        logEvent("tengu_native_update_skipped_max_version", {
          latency_ms: Date.now() - r,
          max_version: getVersionForAnalytics(o),
          available_version: getVersionForAnalytics(v),
        }),
        { success: !0, wasSkipped: !0, latestVersion: v }
      );
    v = o;
  }
  if (
    !t &&
    v ===
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
      }.VERSION &&
    (await vt(v)) &&
    (await re(d))
  )
    return (
      n(`Found ${v} at ${d}, skipping install`),
      logEvent("tengu_native_update_complete", {
        latency_ms: Date.now() - r,
        was_new_install: !1,
        was_force_reinstall: !1,
        was_already_running: !0,
      }),
      { success: !0, wasSkipped: !0, latestVersion: v }
    );
  if (!t && zce(v))
    return (
      logEvent("tengu_native_update_skipped_minimum_version", {
        latency_ms: Date.now() - r,
        target_version: getVersionForAnalytics(v),
      }),
      { success: !0, wasSkipped: !0, latestVersion: v }
    );
  if (w)
    logEvent("tengu_native_update_forced_downgrade", {
      from_version: {
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
      to_version: getVersionForAnalytics(v),
    });
  let F = !1,
    I = !1,
    P = !1,
    E = !1,
    x = !1,
    M;
  if (Ie("true"))
    (({
      wasNewInstall: F,
      moveRetried: I,
      activationFailed: P,
      activationRefused: E,
      skippedUnverifiedRelease: x,
    } = await ut(v, {
      forceReinstall: t,
      explicitVersionRequested: !p,
      requireEnforcingRelease: S,
    })),
      (M = Date.now() - r));
  else {
    let { installPath: C } = await Le(v);
    if (t) await Tn(C);
    let D = await wt(
      C,
      async () => {
        ({
          wasNewInstall: F,
          moveRetried: I,
          activationFailed: P,
          activationRefused: E,
          skippedUnverifiedRelease: x,
        } = await ut(v, {
          forceReinstall: t,
          explicitVersionRequested: !p,
          requireEnforcingRelease: S,
        }));
      },
      3,
    );
    if (((M = Date.now() - r), !D)) {
      let N = Q(),
        L;
      if (de()) {
        let G = we(N, C);
        if (he(G)) L = ue(G)?.pid;
      }
      return (
        logFeatureSad("update_apply", "update_apply_native_lock_failed"),
        logEvent("tengu_native_update_lock_failed", {
          latency_ms: M,
          lock_holder_pid: L,
        }),
        { success: !1, latestVersion: v, lockFailed: !0, lockHolderPid: L }
      );
    }
  }
  if (x)
    return (
      logEvent("tengu_native_update_skipped_unverified_release", {
        latency_ms: M,
        target_version: getVersionForAnalytics(v),
      }),
      n(
        `Native installer: resolved ${v} predates manifest signature enforcement; staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.263", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-09-06T01:08:56Z", GIT_SHA: "37ae3f38d765199d54a6913cd61c6c9ad8576cc6", HOOKS_WORKER_URL: "./src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}`,
        { level: "warn" },
      ),
      {
        success: !0,
        wasSkipped: !0,
        skippedUnverifiedRelease: !0,
        latestVersion: v,
      }
    );
  if (P)
    logFeatureSad("update_apply", "update_apply_native_activation_failed_old_binary_kept");
  else if (E)
    logFeatureSad(
      "update_apply",
      "update_apply_native_activation_refused_external_launcher",
    );
  else if (I) logFeatureSad("update_apply", "update_apply_native_move_retry");
  else logFeatureOk("update_apply");
  return (
    logEvent("tengu_native_update_complete", {
      latency_ms: M,
      was_new_install: F,
      was_force_reinstall: t,
    }),
    n(`Successfully updated to version ${v}`),
    { success: !0, latestVersion: v }
  );
}
async function kn(e) {
  try {
    (await rmdir(e), n(`Removed empty directory at ${e}`));
  } catch (t) {
    let r = A(t);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY")
      n(`Could not remove directory at ${e}: ${t}`);
  }
}
async function $n(e, t, { expectedChecksum: r } = {}) {
  if (G4().startsWith("win32"))
    try {
      let w = dirname(e);
      await mkdir(w, { recursive: !0 });
      let v;
      try {
        v = await K(e);
      } catch {}
      if (v)
        try {
          let I = await K(t);
          if (v.size === I.size && (r === void 0 || (await ve(e, r))))
            return "noop";
        } catch {}
      let S = `${e}.new.${process.pid}.${Date.now()}.${randomBytes(4).toString("hex")}`;
      try {
        await copyFile(t, S);
      } catch (I) {
        if (W(I)) throw Error(`Source file does not exist: ${t}`);
        throw I;
      }
      let F;
      try {
        F = r === void 0 || (await ye(S)) === r;
      } catch (I) {
        throw (await unlink(S).catch(() => {}), I);
      }
      if (!F)
        return (
          await unlink(S).catch(() => {}),
          n(
            `Refusing to install a launcher copy of ${t} that does not match its signed checksum`,
            { level: "error" },
          ),
          "failed"
        );
      try {
        let I = v !== void 0;
        if (!I)
          try {
            await rename(S, e);
          } catch (P) {
            let E = A(P);
            if (E !== "EEXIST" && E !== "EPERM" && E !== "EBUSY") throw P;
            I = !0;
          }
        if (I) {
          let P = `${e}.old.${Date.now()}`;
          await rename(e, P);
          try {
            await rename(S, e);
          } catch (E) {
            try {
              await rename(P, e);
            } catch (x) {
              let M = Error(`Failed to restore old executable: ${x}`, {
                cause: E,
              });
              throw (logError(M), M);
            }
            throw E;
          }
          await unlink(P).catch(() => {});
        }
      } catch (I) {
        throw (await unlink(S).catch(() => {}), I);
      }
      return "updated";
    } catch (w) {
      return (
        n(`Failed to copy executable from ${t} to ${e}: ${w}`, {
          level: "error",
        }),
        "failed"
      );
    }
  let o = dirname(e);
  try {
    (await mkdir(o, { recursive: !0 }), n(`Created directory ${o} for symlink`));
  } catch (w) {
    return (
      n(`Failed to create directory ${o}: ${w}`, { level: "error" }),
      "failed"
    );
  }
  try {
    return (await symlink(t, e), n(`Created symlink ${e} -> ${t}`), "updated");
  } catch (w) {
    if (A(w) !== "EEXIST")
      return (
        n(`Failed to create symlink from ${e} to ${t}: ${w}`, {
          level: "error",
        }),
        "failed"
      );
  }
  if (!(await isNativeInstallerSymlink(e)) && !(await isNpmShimExecutable(e).catch(() => !1)))
    return (
      n(
        `Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`,
        { level: "warn" },
      ),
      "refused"
    );
  let _ = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return (
      await symlink(t, _),
      await rename(_, e),
      n(`Atomically updated symlink ${e} -> ${t}`),
      "updated"
    );
  } catch (w) {
    try {
      await unlink(_);
    } catch {}
    return (
      n(`Failed to create symlink from ${e} to ${t}: ${w}`, { level: "error" }),
      "failed"
    );
  }
}
async function Bce(e = !1) {
  if (Ie(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let t = await dte();
  if (t === "development") return [];
  let r = getGlobalConfig();
  if (!(e || t === "native" || r.installMethod === "native")) return [];
  let p = Q(),
    o = [],
    _ = [],
    w = dirname(p.executable),
    v = resolve(w),
    F = G4().startsWith("win32");
  try {
    await access(w);
  } catch {
    (o.push({
      message: `claude command at ${p.executable} missing or broken (${w} does not exist)`,
      userActionRequired: !0,
      type: "error",
    }),
      _.push("bin_dir_missing"));
  }
  if (F) {
    if (!(await re(p.executable)))
      (o.push({
        message: `claude command at ${p.executable} missing or broken`,
        userActionRequired: !0,
        type: "error",
      }),
        _.push("executable_missing"));
  } else
    try {
      let P = await readlink(p.executable),
        E = resolve(dirname(p.executable), P);
      if (!(await re(E)))
        (o.push({
          message: `claude command at ${p.executable} missing or broken (symlink points to ${P})`,
          userActionRequired: !0,
          type: "error",
        }),
          _.push("executable_invalid"));
    } catch (P) {
      if (W(P))
        (o.push({
          message: `claude command at ${p.executable} missing or broken`,
          userActionRequired: !0,
          type: "error",
        }),
          _.push("executable_missing"));
      else if (!(await re(p.executable)))
        (o.push({
          message: `claude command at ${p.executable} missing or broken (not a valid Claude binary)`,
          userActionRequired: !0,
          type: "error",
        }),
          _.push("executable_invalid"));
    }
  if (
    !(a.PATH || "").split(delimiter).some((P) => {
      try {
        let E = resolve(P);
        if (F) return E.toLowerCase() === v.toLowerCase();
        return E === v;
      } catch {
        return !1;
      }
    })
  )
    if ((_.push("not_in_path"), F)) {
      let P = w.replaceAll("/", "\\");
      o.push({
        message: `Native installation exists but ${P} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
        userActionRequired: !0,
        type: "path",
      });
    } else {
      let P = Fbe(),
        x = Gce()[P],
        M = x ? x.replace(homedir(), "~") : "your shell config file";
      o.push({
        message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${M} && source ${M}`,
        userActionRequired: !0,
        type: "path",
      });
    }
  if (_.length === 0) logFeatureOk("native_check_install");
  else logFeatureSad("native_check_install", _[0]);
  return o;
}
class bt {
  inFlight = null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}
var Sn = new j(() => new bt());
function jce(e, t = !1, r) {
  if (t) return dt(e, t, r);
  let d = Sn.of(B().host);
  if (d.inFlight)
    return (n("installLatest: joining in-flight call"), d.inFlight);
  let p = dt(e, t, r);
  d.begin(p);
  let o = () => {
    d.reset();
  };
  return (p.then(o, o), p);
}
async function dt(e, t = !1, r) {
  let d = await En(e, t);
  if (!d.success)
    return {
      latestVersion: null,
      wasUpdated: !1,
      lockFailed: d.lockFailed,
      lockHolderPid: d.lockHolderPid,
    };
  if (d.skippedUnverifiedRelease)
    return {
      latestVersion: d.latestVersion,
      wasUpdated: !1,
      wasSkipped: !0,
      skippedUnverifiedRelease: !0,
      lockFailed: !1,
    };
  if (getGlobalConfig().installMethod !== "native")
    (await saveGlobalConfig(
      (o) => ({
        ...o,
        installMethod: "native",
        autoUpdates: !1,
        autoUpdatesProtectedForNative: !0,
      }),
      r,
    ),
      n(
        'Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection',
      ));
  return (
    oFt(),
    {
      latestVersion: d.latestVersion,
      wasUpdated: d.success && !d.wasSkipped,
      wasSkipped: d.wasSkipped,
      lockFailed: !1,
    }
  );
}
async function Rn(e) {
  try {
    let t = await readlink(e),
      r = resolve(dirname(e), t);
    if (await re(r)) return r;
  } catch {}
  return null;
}
function we(e, t) {
  let r = _t(t);
  return V(e.locks, `${r}.lock`);
}
async function q4() {
  let e = Q();
  if (!process.execPath.includes(e.versions)) return;
  let t = resolve(process.execPath);
  try {
    let r = we(e, t);
    if ((await mkdir(e.locks, { recursive: !0 }), de())) {
      if (!(await rt(t, r))) {
        (logEvent("tengu_version_lock_failed", {
          is_pid_based: !0,
          is_lifetime_lock: !0,
        }),
          Ee(t, Error("Lock already held by another process")));
        return;
      }
      (logEvent("tengu_version_lock_acquired", {
        is_pid_based: !0,
        is_lifetime_lock: !0,
      }),
        n(`Acquired PID lock on running version: ${t}`));
    } else {
      let d;
      try {
        ((d = await Cs(t, {
          stale: Ne,
          retries: 0,
          lockfilePath: r,
          onCompromised: (p) => {
            n(
              `NON-FATAL: Lock on running version was compromised: ${p.message}`,
              { level: "info" },
            );
          },
        })),
          logEvent("tengu_version_lock_acquired", {
            is_pid_based: !1,
            is_lifetime_lock: !0,
          }),
          n(`Acquired mtime-based lock on running version: ${t}`),
          Et(async () => {
            try {
              await d?.();
            } catch {}
          }));
      } catch (p) {
        if (W(p)) {
          n(`Cannot lock current version - file does not exist: ${t}`, {
            level: "info",
          });
          return;
        }
        (logEvent("tengu_version_lock_failed", {
          is_pid_based: !1,
          is_lifetime_lock: !0,
        }),
          Ee(t, p));
        return;
      }
    }
  } catch (r) {
    if (W(r)) {
      n(`Cannot lock current version - file does not exist: ${t}`, {
        level: "info",
      });
      return;
    }
    n(`NON-FATAL: Failed to lock current version during execution ${l(r)}`, {
      level: "info",
    });
  }
}
function Ee(e, t) {
  n(
    `NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${l(t)}`,
    { level: "error" },
  );
}
async function Tn(e) {
  let t = Q(),
    r = we(t, e);
  try {
    (await unlink(r), n(`Force-removed lock file at ${r}`));
  } catch (d) {
    n(`Failed to force-remove lock file: ${l(d)}`);
  }
}
async function oFt() {
  await Promise.resolve();
  let e = Q(),
    t = Date.now() - 3600000;
  if (G4().startsWith("win32")) {
    let o = dirname(e.executable);
    try {
      let _ = await be(o),
        w = 0;
      for (let v of _) {
        let S = /^claude\.exe\.(?:old\.(\d+)|new\.\d+\.(\d+)\.[0-9a-f]+)$/.exec(
          v,
        );
        if (!S) continue;
        try {
          let F = V(o, v);
          if (Number(S[1] ?? S[2]) >= t || (await K(F)).mtime.getTime() >= t)
            continue;
          (await unlink(F), w++);
        } catch {}
      }
      if (w > 0) n(`Cleaned up ${w} old Windows executables on startup`);
    } catch (_) {
      if (!W(_)) n(`Failed to clean up old Windows executables: ${_}`);
    }
  }
  try {
    let o = await be(e.staging),
      _ = 0;
    for (let w of o) {
      let v = V(e.staging, w);
      try {
        if ((await K(v)).mtime.getTime() < t)
          (await ke(v, { recursive: !0, force: !0 }),
            _++,
            n(`Cleaned up old staging directory: ${w}`));
      } catch {}
    }
    if (_ > 0)
      (n(`Cleaned up ${_} orphaned staging directories`),
        logEvent("tengu_native_staging_cleanup", { cleaned_count: _ }));
  } catch (o) {
    if (!W(o)) n(`Failed to clean up staging directories: ${o}`);
  }
  if (de()) {
    let o = await ot(e.locks);
    if (o > 0)
      (n(`Cleaned up ${o} stale version locks`),
        logEvent("tengu_native_stale_locks_cleanup", { cleaned_count: o }));
  }
  let r;
  try {
    r = await be(e.versions);
  } catch (o) {
    if (!W(o))
      (n(`Failed to readdir versions directory: ${o}`),
        logFeatureSad("native_cleanup_versions", "readdir_failed"));
    else logFeatureOk("native_cleanup_versions");
    return;
  }
  let d = [],
    p = 0;
  for (let o of r) {
    let _ = V(e.versions, o);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(o)) {
      try {
        if ((await K(_)).mtime.getTime() < t)
          (await unlink(_), p++, n(`Cleaned up orphaned temp install file: ${o}`));
      } catch {}
      continue;
    }
    try {
      let w = await K(_);
      if (!w.isFile()) continue;
      if (w.size > 0 && (w.mode & 73) === 0) continue;
      d.push({
        name: o,
        path: _,
        resolvedPath: resolve(_),
        mtime: w.mtime,
        size: w.size,
      });
    } catch {}
  }
  if (p > 0)
    (n(`Cleaned up ${p} orphaned temp install files`),
      logEvent("tengu_native_temp_files_cleanup", { cleaned_count: p }));
  if (d.length === 0) {
    logFeatureOk("native_cleanup_versions");
    return;
  }
  if (
    !(await isNativeInstallerSymlink(e.executable)) &&
    !(await isNpmShimExecutable(e.executable).catch(() => !1))
  ) {
    (n(
      `Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`,
    ),
      logFeatureSad("native_cleanup_versions", "skipped_external_launcher"));
    return;
  }
  try {
    let o = process.execPath,
      _ = new Set();
    if (o && o.includes(e.versions)) _.add(resolve(o));
    let w = await Rn(e.executable);
    if (w) _.add(w);
    else if (G4().startsWith("win32"))
      try {
        let E = await K(e.executable);
        for (let x of d) if (x.size === E.size) _.add(x.resolvedPath);
      } catch {}
    for (let E of d) {
      if (_.has(E.resolvedPath)) continue;
      let x = we(e, E.resolvedPath),
        M = !1;
      if (de()) M = he(x);
      else
        try {
          M = await Vlr(E.resolvedPath, { stale: Ne, lockfilePath: x });
        } catch {
          M = !1;
        }
      if (M)
        (_.add(E.resolvedPath),
          n(`Protecting locked version from cleanup: ${E.name}`));
      await new Promise((C) => setImmediate(C));
    }
    let v = d
        .filter((E) => !_.has(E.resolvedPath))
        .sort((E, x) => x.mtime.getTime() - E.mtime.getTime()),
      S = [
        ...v.filter((E) => E.size > 0).slice(De),
        ...v.filter((E) => E.size === 0 && E.mtime.getTime() < t),
      ];
    if (S.length === 0) {
      (logEvent("tengu_native_version_cleanup", {
        total_count: d.length,
        deleted_count: 0,
        protected_count: _.size,
        retained_count: De,
        lock_failed_count: 0,
        error_count: 0,
      }),
        logFeatureOk("native_cleanup_versions"));
      return;
    }
    let F = 0,
      I = 0,
      P = 0;
    if (
      (await Promise.all(
        S.map(async (E) => {
          try {
            let x = !0,
              M = await wt(E.path, async () => {
                if (E.size === 0) {
                  let C = await K(E.path);
                  if (C.size > 0 || C.mtime.getTime() >= t) {
                    x = !1;
                    return;
                  }
                }
                await unlink(E.path);
              });
            if (M && x) F++;
            else if (!M)
              (I++,
                n(
                  `Skipping deletion of ${E.name} - locked by another process`,
                ));
          } catch (x) {
            (P++,
              n(`Failed to delete version ${E.name}: ${x}`, {
                level: "error",
              }));
          }
        }),
      ),
      logEvent("tengu_native_version_cleanup", {
        total_count: d.length,
        deleted_count: F,
        protected_count: _.size,
        retained_count: De,
        lock_failed_count: I,
        error_count: P,
      }),
      P > 0)
    )
      logFeatureSad("native_cleanup_versions", "delete_errors");
    else if (I > 0) logFeatureSad("native_cleanup_versions", "lock_failed");
    else logFeatureOk("native_cleanup_versions");
  } catch (o) {
    if (!W(o))
      (logError(Error(`Version cleanup failed: ${o}`)),
        logFeatureSad("native_cleanup_versions", "unexpected_error"));
    else logFeatureOk("native_cleanup_versions");
  }
}
async function nOe() {
  let e = Q();
  try {
    if (
      await isNpmShimExecutable(e.executable).catch((t) => {
        if (W(t)) return !1;
        throw t;
      })
    ) {
      (n(`Skipping removal of ${e.executable} - appears to be npm-managed`),
        logFeatureOk("native_remove_symlink"));
      return;
    }
    if (!(await isNativeInstallerSymlink(e.executable))) {
      (n(
        `Skipping removal of ${e.executable} - not created by the native installer`,
      ),
        logFeatureOk("native_remove_symlink"));
      return;
    }
    (await unlink(e.executable),
      n(`Removed claude symlink at ${e.executable}`),
      logFeatureOk("native_remove_symlink"));
  } catch (t) {
    if (W(t)) {
      logFeatureOk("native_remove_symlink");
      return;
    }
    (n(`Failed to remove claude symlink: ${t}`, { level: "error" }),
      logFeatureBad("native_remove_symlink", "unlink_failed"));
  }
}
async function Can() {
  let e = [],
    t = Gce(),
    r = !1;
  for (let [d, p] of Object.entries(t))
    try {
      let o = await Opt(p);
      if (!o) continue;
      let { filtered: _, hadAlias: w } = aFt(o);
      if (w)
        (await lFt(p, _),
          e.push({
            message: `Removed claude alias from ${p}. Run: unalias claude`,
            userActionRequired: !0,
            type: "alias",
          }),
          n(`Cleaned up claude alias from ${d} config`));
    } catch (o) {
      ((r = !0),
        n(`Failed to clean up claude alias from ${p}: ${o}`, {
          level: "error",
        }),
        e.push({
          message: `Failed to clean up ${p}: ${o}`,
          userActionRequired: !1,
          type: "error",
        }));
    }
  if (r) logFeatureSad("native_cleanup_aliases", "config_write_failed");
  else logFeatureOk("native_cleanup_aliases");
  return e;
}
async function xn(e) {
  try {
    let t = await execFileNoThrowWithCwd("npm", ["config", "get", "prefix"], {
      useToolMemoryCgroup: !1,
    });
    if (t.code !== 0 || !t.stdout)
      return { success: !1, error: "Failed to get npm global prefix" };
    let r = t.stdout.trim(),
      d = !1;
    async function p(o, _) {
      try {
        return (await unlink(o), n(`Manually removed ${_}: ${o}`), !0);
      } catch {
        return !1;
      }
    }
    if (G4().startsWith("win32")) {
      let o = V(r, "claude.cmd"),
        _ = V(r, "claude.ps1"),
        w = V(r, "claude");
      if (await p(o, "bin script")) d = !0;
      if (await p(_, "PowerShell script")) d = !0;
      if (await p(w, "bin executable")) d = !0;
    } else {
      let o = V(r, "bin", "claude");
      if (await p(o, "bin symlink")) d = !0;
    }
    if (d) {
      n(`Successfully removed ${e} manually`);
      let o = G4().startsWith("win32")
        ? V(r, "node_modules", e)
        : V(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${o}`,
      };
    } else return { success: !1 };
  } catch (t) {
    return (
      n(`Manual removal failed: ${t}`, { level: "error" }),
      { success: !1, error: `Manual removal failed: ${t}` }
    );
  }
}
async function ft(e) {
  let { code: t, stderr: r } = await execFileNoThrowWithCwd("npm", ["uninstall", "-g", e], {
    cwd: process.cwd(),
    useToolMemoryCgroup: !1,
  });
  if (t === 0)
    return (n(`Removed global npm installation of ${e}`), { success: !0 });
  else if (r && !r.includes("npm ERR! code E404")) {
    if (r.includes("npm error code ENOTEMPTY")) {
      (n(`Failed to uninstall global npm package ${e}: ${r}`, {
        level: "error",
      }),
        n("Attempting manual removal due to ENOTEMPTY error"));
      let d = await xn(e);
      if (d.success) return { success: !0, warning: d.warning };
      else if (d.error)
        return {
          success: !1,
          error: `Failed to remove global npm installation of ${e}: ${r}. Manual removal also failed: ${d.error}`,
        };
    }
    return (
      n(`Failed to uninstall global npm package ${e}: ${r}`, {
        level: "error",
      }),
      {
        success: !1,
        error: `Failed to remove global npm installation of ${e}: ${r}`,
      }
    );
  }
  return { success: !1 };
}
async function van() {
  let e = [],
    t = [],
    r = 0,
    d = !1,
    p = !1,
    o = await ft("@anthropic-ai/claude-code");
  if (o.success) {
    if ((r++, o.warning)) t.push(o.warning);
  } else if (o.error) (e.push(o.error), (d = !0));
  if (
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
    }.PACKAGE_URL &&
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
    }.PACKAGE_URL !== "@anthropic-ai/claude-code"
  ) {
    let w = await ft(
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
      }.PACKAGE_URL,
    );
    if (w.success) {
      if ((r++, w.warning)) t.push(w.warning);
    } else if (w.error) (e.push(w.error), (d = !0));
  }
  let _ = V(homedir(), ".claude", "local");
  try {
    (await ke(_, { recursive: !0 }),
      r++,
      n(`Removed local installation at ${_}`));
  } catch (w) {
    if (!W(w))
      (e.push(`Failed to remove ${_}: ${w}`),
        n(`Failed to remove local installation: ${w}`, { level: "error" }),
        (p = !0));
  }
  if (e.length === 0) logFeatureOk("native_cleanup_npm");
  else if (r > 0) logFeatureSad("native_cleanup_npm", "partial_errors");
  else if (d && !p) logFeatureBad("native_cleanup_npm", "npm_uninstall_failed");
  else if (p && !d) logFeatureBad("native_cleanup_npm", "local_install_remove_failed");
  else logFeatureBad("native_cleanup_npm", "npm_uninstall_failed");
  return { removed: r, errors: e, warnings: t };
}
export { rT, Hpt, mze, G4, Ipt, gze, Bce, jce, q4, oFt, nOe, Can, van };

// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../00-第三方库/lodash/lodash.207999qb.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-510m1t2d.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../../00-第三方库/lodash/lodash.2x3q7cfh.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { b, z } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/ANSI-样式-布局原语/chunk-jn6xbhjn.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
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
import { As } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0ypv8gq2.js";
import "../Hooks钩子/chunk-9em0d4k5.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-qja3ebvp.js";
import "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../Git-Worktree/chunk-bk9696gx.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
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
import "../../01-核心基础设施/共享小工具-未细化/chunk-yz7dtpc3.js";
import { Dce } from "../../01-核心基础设施/共享小工具-未细化/chunk-kax7bdqv.js";
import { uu } from "../../01-核心基础设施/共享小工具-未细化/chunk-bgwm3fhf.js";
import "../Bridge-RemoteControl/chunk-4zd60pbm.js";
import "../Teammates团队/chunk-enjekn9t.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../Bedrock-Vertex/chunk-p991cddr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-kkf7jbwd.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
import { createPublicKey as l, verify as g } from "crypto";
function y(t) {
  let r = { header: !1, verify: !0, checkExpiry: !0, help: !1 };
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    switch (n) {
      case "--help":
      case "-h":
        r.help = !0;
        break;
      case "--header":
        r.header = !0;
        break;
      case "--verify":
        r.verify = !0;
        break;
      case "--no-verify":
        r.verify = !1;
        break;
      case "--no-check-expiry":
        r.checkExpiry = !1;
        break;
      case "--api-url": {
        let o = t[++e];
        if (o === void 0)
          throw Error("decode-token: --api-url requires a value");
        r.apiUrl = o;
        break;
      }
      default:
        if (n.startsWith("-")) throw Error(`decode-token: unknown flag ${n}`);
        if (r.token !== void 0)
          throw Error("decode-token: at most one positional token argument");
        r.token = n;
    }
  }
  return r;
}
function w(t) {
  let e = t
    .trim()
    .replace(/^sk-ant-[a-z0-9]+-/i, "")
    .split(".");
  if (e.length !== 3 || !e[0] || !e[1] || !e[2])
    throw Error(
      "decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments " +
        `(after stripping any sk-ant- prefix), got ${e.length}`,
    );
  return { headerB64: e[0], payloadB64: e[1], signatureB64: e[2] };
}
function u(t, r) {
  if (!/^[A-Za-z0-9_-]+$/.test(t))
    throw Error(
      `decode-token: ${r} is not valid base64url (unexpected characters)`,
    );
  let e = Buffer.from(t, "base64url").toString("utf8"),
    n;
  try {
    n = z(e);
  } catch (o) {
    throw Error(`decode-token: ${r} is not valid JSON: ${o}`);
  }
  if (n === null || typeof n !== "object" || Array.isArray(n))
    throw Error(`decode-token: ${r} is not a JSON object`);
  return n;
}
var E = { ES256: "EC", RS256: "RSA" };
function S(t, r = Math.floor(Date.now() / 1000), e = 60) {
  let { exp: n, nbf: o } = t;
  if (typeof n !== "number")
    throw Error("decode-token: token has no numeric `exp` claim");
  if (r > n + e)
    throw Error(
      `decode-token: token EXPIRED at ${new Date(n * 1000).toISOString()} (${Math.round(r - n)}s ago)`,
    );
  if (typeof o === "number" && r + e < o)
    throw Error(
      `decode-token: token not valid until ${new Date(o * 1000).toISOString()}`,
    );
}
async function m(t) {
  let r = t.header.alg,
    e = t.header.kid;
  if (typeof r !== "string" || typeof e !== "string")
    throw Error(
      "decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key",
    );
  let n = E[r];
  if (!n)
    throw Error(
      `decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`,
    );
  let o;
  try {
    o = await t.fetchFn(t.jwksUrl, {
      ...As({ url: t.jwksUrl }),
      signal: AbortSignal.timeout(30000),
    });
  } catch (a) {
    throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`);
  }
  if (!o.ok)
    throw Error(
      `decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`,
    );
  let s = (await o.json()).keys?.find((a) => a.kid === e);
  if (!s)
    throw Error(
      `decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 ` +
        "token may be signed by a different environment (try --api-url).",
    );
  if (s.kty !== n)
    throw Error(
      `decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`,
    );
  let c = "sha256",
    d =
      r === "ES256"
        ? { key: l({ key: s, format: "jwk" }), dsaEncoding: "ieee-p1363" }
        : { key: l({ key: s, format: "jwk" }) },
    k = Buffer.from(`${t.headerB64}.${t.payloadB64}`, "utf8"),
    f = Buffer.from(t.signatureB64, "base64url");
  if (!g(c, k, d, f))
    throw Error("decode-token: signature verification FAILED");
  if (t.checkExpiry !== !1) S(t.payload);
  return { kid: e };
}
var h = 16384,
  x = 5000;
async function v(t = process.stdin) {
  if (t.isTTY) return "";
  let r = [],
    e = 0;
  for await (let n of t) {
    let o = Buffer.from(n);
    if (((e += o.length), e > h))
      throw Error(
        `decode-token: stdin exceeds ${h / 1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`,
      );
    r.push(o);
  }
  return Buffer.concat(r).toString("utf8");
}
async function _(t, r, e = process.stdin, n = x) {
  if (t?.trim()) return t.trim();
  let o = r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();
  if (o) return o;
  let i = (await uu(v(e), n, "decode-token: reading token from stdin")).trim();
  if (i) return i;
  throw Error(
    "decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.",
  );
}
var O = `Usage: claude self-hosted-runner decode-token [token] [options]

Decode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its
claims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix
automatically. Pipe to jq to extract a single claim.

Token source (first non-empty wins):
  1. Positional argument
  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN
  3. Piped stdin

Signature verification against <api-url>/v1/code/.well-known/jwks.json is ON
by default, as is the exp/nbf check (60s skew). Prints "verified (kid=\u2026,
sig+exp)" to stderr on success; exits 1 on verification failure, expiry, or
JWKS fetch error. Does NOT pin iss/aud/token-type \u2014 compare those from the
decoded claims if your auth model depends on them.

Options:
  --header           Print the JWT header instead of the claims.
  --no-verify        Skip signature verification and the JWKS fetch. For
                     offline inspection only \u2014 do NOT feed the output to an
                     auth decision.
  --no-check-expiry  Skip the exp/nbf check (signature still verified). For
                     forensics ("was this token ever issued by us?").
  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL
                     or the built-in default).
  --verify           (Deprecated \u2014 verification is the default. Kept so older
                     wrapper scripts don't break.)
  --help, -h         Show this help.

Examples:
  # In an --exec-path wrapper: who created this session? Signature is
  # verified by default, so a tampered token exits non-zero here.
  # Use jq -re (not -r) when the claim gates an auth decision \u2014 jq -r prints
  # the literal string "null" and exits 0 when the claim is missing.
  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\
    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }

  # Offline inspection (no network, no auth decision)
  claude self-hosted-runner decode-token --no-verify

  # Decode a different token by piping it (unset the env var first)
  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\
    claude self-hosted-runner decode-token --no-verify
`;
async function C(t) {
  let r;
  try {
    r = y(t);
  } catch (e) {
    (process.stderr.write(`${e instanceof Error ? e.message : e}
`),
      process.exit(1));
  }
  if (r.help) (process.stdout.write(O), process.exit(0));
  try {
    let e = await _(r.token, process.env),
      { headerB64: n, payloadB64: o, signatureB64: i } = w(e),
      s = u(n, "header"),
      c = u(o, "payload");
    if (r.verify) {
      let f = `${(r.apiUrl ?? Dce()).replace(/\/+$/, "")}/v1/code/.well-known/jwks.json`,
        { kid: p } = await m({
          headerB64: n,
          payloadB64: o,
          signatureB64: i,
          header: s,
          payload: c,
          jwksUrl: f,
          fetchFn: fetch,
          checkExpiry: r.checkExpiry,
        }),
        a = r.checkExpiry ? "sig+exp" : "sig only, exp SKIPPED";
      process.stderr.write(`verified (kid=${p}, ${a})
`);
    }
    let d = r.header ? s : c;
    (process.stdout.write(`${b(d, null, 2)}
`),
      process.exit(0));
  } catch (e) {
    (process.stderr.write(`${e instanceof Error ? e.message : e}
`),
      process.exit(1));
  }
}
export { C as selfHostedRunnerDecodeTokenMain };

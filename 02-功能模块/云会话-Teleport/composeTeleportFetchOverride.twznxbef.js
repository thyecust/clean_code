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
import "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-w76kejwn.js";
import { Tc, Is, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import "../Bedrock-Vertex/chunk-5ndhfaq9.js";
import "../后台任务-Shell管理/chunk-z5vtnzjg.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-1wezmyx2.js";
import "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { UR } from "../认证-OAuth登录/chunk-wk0e3dz4.js";
import "../../00-第三方库/axios/axios.t0fczzmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-an83zrbx.js";
import "../../00-第三方库/lodash/lodash.0vqzb8ad.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-78nzsrc6.js";
import "../../00-第三方库/zod/zod.3g334xwq.js";
import { a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import "../Bedrock-Vertex/chunk-27ncq5fr.js";
import "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import "../../00-第三方库/which-isexe/ isexe.knmpyrza.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-twnwwsbr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-0d0nn4ae.js";
import "../../01-核心基础设施/核心工具-路径与平台/核心工具-路径与平台.bt5mxc9p.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-rsr7cnyv.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-7beprh8k.js";
import "../Git-Worktree/chunk-9ys1bnqr.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-862jyk0r.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/安全文件系统(FS加固).gbme4p3n.js";
import "../../01-核心基础设施/核心工具-字符串与文本/chunk-01cse5zg.js";
import "../会话-历史-恢复/chunk-mkmy4cx2.js";
import "../../01-核心基础设施/安全文件系统(FS加固)/chunk-h64ek850.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-km6n9zrg.js";
import "../Teammates团队/chunk-qe04h4c5.js";
import { mn } from "../../01-核心基础设施/共享小工具-未细化/chunk-z5tdbda7.js";
import "../../01-核心基础设施/设置-配置/设置-配置.aqbb35ee.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-jjr7hzzf.js";
import "../../00-第三方库/jsonc-parser/jsonc-parser.aa158d2j.js";
import "../权限系统/chunk-e4pfvp7x.js";
import "../图片-截图-ComputerUse/chunk-x87xxkp4.js";
import "../工具Bash-Shell/chunk-4pap8y5n.js";
import "../运行宿主探测/运行宿主探测.ysz9apmz.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-24x3spwe.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-fx8qr1md.js";
import "../../03-入口与运行时/CLI入口-Commander/chunk-6rfqqsva.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-svk2cp17.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-2f8axr19.js";
import "../../01-核心基础设施/核心工具-进程与信号/chunk-ckrdhhqd.js";
import { $he } from "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import { ZD } from "../认证-OAuth登录/chunk-7rf7w8yf.js";
import "../../01-核心基础设施/模型目录-ModelCatalog/模型目录-ModelCatalog.3msq3jt8.js";
import { HOe, Cte, _we, Gcn, qcn } from "../../01-核心基础设施/共享小工具-未细化/chunk-qv8z365a.js";
import { Z4 } from "../../01-核心基础设施/共享小工具-未细化/chunk-95411q5e.js";
import { nwe } from "../../01-核心基础设施/共享小工具-未细化/chunk-1brq31d3.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-a7cfts2d.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-v2wxtqf7.js";
import "../../01-核心基础设施/共享小工具-未细化/chunk-qng0dgw4.js";
import "../../00-第三方库/lru-cache/lru-cache.8crev50p.js";
import "../../01-核心基础设施/核心工具-路径与平台/chunk-13kdp2ag.js";
var P = 60000,
  L = 15000;
function D() {
  let r = a.API_TIMEOUT_MS;
  return r !== void 0 && r > 0 ? Math.min(L, Math.floor(r / 2)) : L;
}
var H = 4096,
  E = 5000;
async function U(r, d = E) {
  let u = r.body?.getReader();
  if (!u) return null;
  let c = [],
    y = 0,
    p = !1,
    o = setTimeout(() => {
      ((p = !0), u.cancel().catch(() => {}));
    }, d);
  try {
    for (;;) {
      let { done: g, value: t } = await u.read();
      if (g || p) break;
      if (((y += t.byteLength), y > H))
        return (u.cancel().catch(() => {}), null);
      c.push(t);
    }
  } catch {
    return null;
  } finally {
    clearTimeout(o);
  }
  if (p) return null;
  try {
    let g = Buffer.concat(c).toString("utf8"),
      e = Is(g)?.error?.type;
    return typeof e === "string" ? e : null;
  } catch {
    return null;
  }
}
function Q(r, d) {
  return B(r, nwe(), d);
}
function x(r) {
  if (typeof r === "string") return r;
  if (r instanceof URL) return r.href;
  return r.url;
}
function O(r) {
  return (
    typeof r === "object" &&
    r !== null &&
    "defer_loading" in r &&
    r.defer_loading === !0
  );
}
function I(r, d) {
  if (
    (d?.method ?? (r instanceof Request ? r.method : "GET")).toUpperCase() !==
    "POST"
  )
    return !1;
  let c;
  try {
    c = new URL(x(r)).pathname;
  } catch {
    return !1;
  }
  return c.endsWith("/v1/messages");
}
function B(
  r,
  d,
  u,
  {
    dispatchTimeoutMs: c = P,
    errorBodyReadTimeoutMs: y = E,
    headersAbortLatchFloorMs: p = D(),
  } = {},
) {
  if (!d) return r;
  let o = (t, e) => (r ? r(t, e) : $he(t, e));
  return async (t, e) => {
    let f = HOe();
    if (f.status !== "active") return o(t, e);
    if (!I(t, e)) return o(t, e);
    let b = e?.body;
    if (typeof b !== "string") return o(t, e);
    let T = !1,
      _ = null,
      h;
    try {
      let l = Is(b);
      ((T = l.stream === !0),
        (_ = typeof l.model === "string" ? l.model : null),
        (h = l.tools));
    } catch {
      return o(t, e);
    }
    if (!T) return o(t, e);
    if (f.marker.model !== void 0 && _ !== null && _ !== f.marker.model)
      return (_we("model_mismatch"), o(t, e));
    if (!Gcn(u())) return o(t, e);
    let R;
    try {
      R =
        h === void 0
          ? null
          : mn(
              Tc(
                Array.isArray(h)
                  ? [h.some((s) => O(s)), h.filter((s) => !O(s))]
                  : h,
              ),
            );
    } catch {
      return (
        _we("relay_compose_error"),
        n(
          "teleport relay tools-fingerprint computation failed \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    if (!qcn(_, R)) return o(t, e);
    let v = `${f.ingressOrigin}/v2/ccr-sessions/${f.remoteSessionId}/teleport/conversations/${f.marker.conversation_uuid}/completion`;
    if (!UR(v))
      return (
        Cte("relay_unreachable", "relay url failed the CCR origin gate"),
        o(t, e)
      );
    let m;
    try {
      let s = new Headers(e?.headers);
      ((m = new Headers()),
        m.set("content-type", s.get("content-type") ?? "application/json"));
      let l = s.get("anthropic-beta");
      if (l !== null) m.set("anthropic-beta", l);
      for (let [F, M] of Object.entries(ZD())) m.set(F, M);
      m.set("anthropic-version", f.marker.anthropic_version);
    } catch {
      return (
        _we("relay_compose_error"),
        n(
          "teleport relay request composition failed \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    let i,
      S = performance.now(),
      k = new AbortController(),
      C = setTimeout((s) => s.abort(), c, k),
      w = k.signal;
    try {
      i = await $he(v, {
        ...(await Z4(v)),
        method: "POST",
        headers: m,
        body: b,
        signal: e?.signal ? AbortSignal.any([e.signal, w]) : w,
        redirect: "error",
      });
    } catch (s) {
      if (w.aborted && !e?.signal?.aborted)
        return (
          Cte(
            "relay_dispatch_timeout",
            `relay dispatch timed out after ${c}ms`,
          ),
          n(
            "teleport relay dispatch timed out \u2014 reverting to standard behavior",
            { level: "warn" },
          ),
          o(t, e)
        );
      if (
        e?.signal?.aborted ||
        (s instanceof DOMException && s.name === "AbortError")
      ) {
        let l = performance.now() - S;
        if (l >= p)
          return (
            Cte(
              "relay_dispatch_timeout",
              `caller signal aborted after ${Math.round(l)}ms awaiting relay headers`,
            ),
            n(
              "teleport relay dispatch aborted after a long headers wait \u2014 reverting to standard behavior",
              { level: "warn" },
            ),
            o(t, e)
          );
        throw s;
      }
      return (
        _we("relay_transport_error"),
        n(
          "teleport relay transport error \u2014 standard path for this turn, latch stays armed",
          { level: "warn" },
        ),
        o(t, e)
      );
    } finally {
      clearTimeout(C);
    }
    if (!i.ok) {
      if (i.status === 409) {
        if ((await U(i, y)) === "teleport_relay_refused")
          return (
            Cte(
              "relay_refused",
              "relay http 409 with the refusal discriminant",
            ),
            n("teleport relay refused \u2014 reverting to standard behavior", {
              level: "warn",
            }),
            o(t, e)
          );
      } else i.body?.cancel().catch(() => {});
      return (
        _we("relay_unavailable"),
        n(
          `teleport relay unavailable (http ${i.status}) \u2014 standard path for this turn, latch stays armed`,
          { level: "warn" },
        ),
        o(t, e)
      );
    }
    let A = (i.headers.get("content-type") ?? "").toLowerCase();
    if (!A.includes("text/event-stream"))
      return (
        i.body?.cancel().catch(() => {}),
        Cte("relay_not_sse", `relay 200 with content-type ${A}`),
        o(t, e)
      );
    return i;
  };
}
export { Q as composeTeleportFetchOverride };

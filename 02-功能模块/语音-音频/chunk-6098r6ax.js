// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.263
import { default as at } from "../../00-第三方库/axios/axios.t0fczzmz.js";
import { getOauthConfig as Vt } from "../认证-OAuth登录/chunk-9g2q4bjq.js";
import { M } from "../../01-核心基础设施/共享小工具-未细化/chunk-h62vxw7j.js";
import { env as a } from "../../01-核心基础设施/设置-配置/chunk-zqr5ctyf.js";
import { Jr } from "../../00-第三方库/@anthropic-ai/sdk/sdk.h4f48kbj.js";
import { z, n } from "../../01-核心基础设施/核心工具-日志与脱敏/核心工具-日志与脱敏.38sny42z.js";
import { St, U1 } from "../Bedrock-Vertex/chunk-27ncq5fr.js";
import { getUserAgent as ex, isAnthropicAuthEnabled as cl, getClaudeAIOAuthTokens as Yt, getClaudeAIOAuthTokensAsync as Qi, checkAndRefreshOAuthTokenIfNeeded as Ss, H } from "../认证-OAuth登录/认证-OAuth登录.419zdfz3.js";
import { getWebSocketTLSOptions as Ab, getWebSocketProxyUrl as Cb } from "../../00-第三方库/https-proxy-agent/https-proxy-agent + undici.1t3vmhtr.js";
import { Ext } from "../../01-核心基础设施/共享小工具-未细化/chunk-jj2wxn4x.js";
import { getClientPlatform as Um } from "../../01-核心基础设施/共享小工具-未细化/chunk-qdhvxsk2.js";
import m from "ws";
var V = '{"type":"KeepAlive"}',
  F = '{"type":"CloseStream"}',
  L = "/api/ws/speech_to_text/voice_stream",
  U = 8000,
  x = { safety: 5000, noData: 1500 };
function A(e, s, d) {
  return typeof e === "number" && Number.isInteger(e) && e >= s && e <= d
    ? String(e)
    : "unknown";
}
function D(e) {
  return Jr(e)?.toLowerCase() ?? "unknown";
}
var N = 1500;
async function probeVoiceConnectivity() {
  if (St() || U1()) return "skipped_privacy";
  try {
    let e = await at.get(`${Vt().BASE_API_URL}/api/hello`, {
        headers: { "User-Agent": ex() },
        timeout: N,
        validateStatus: () => !0,
        maxRedirects: 0,
      }),
      s = A(e.status, 100, 599);
    return e.headers["cf-mitigated"] !== void 0
      ? `cf_mitigated_${s}`
      : `http_${s}`;
  } catch (e) {
    let s = at.isAxiosError(e) ? e.code : void 0;
    return s === "ECONNABORTED" || s === "ETIMEDOUT"
      ? "timeout"
      : "fetch_failed";
  }
}
function B() {
  if (a.CLAUDE_CODE_VOICE_FORWARD_INTERIMS_TYPED) return !0;
  return H("tengu_brick_follow", !1);
}
function isVoiceStreamAvailable() {
  if (!cl()) return !1;
  let e = Yt();
  return e !== null && e.accessToken !== null;
}
var j = 1024;
function W(e) {
  let s = new Set(),
    d = [],
    u = 0;
  for (let C of e) {
    let p = C.replace(/,/g, " ")
      .replace(/[^\x20-\x7E]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!p || s.has(p)) continue;
    let E = p.length + (d.length > 0 ? 1 : 0);
    if (u + E > j) break;
    (s.add(p), d.push(p), (u += E));
  }
  return d.join(",");
}
async function connectVoiceStream(e, s, d) {
  let u;
  if (M() && d !== void 0) (await Ss({ credentials: d }), (u = await Qi(d)));
  else (await Ss(), (u = Yt()));
  if (!u?.accessToken)
    return (n("[voice_stream] No OAuth token available"), null);
  let C =
    a.VOICE_STREAM_BASE_URL ||
    Vt().BASE_API_URL.replace("https://", "wss://").replace("http://", "ws://");
  if (a.VOICE_STREAM_BASE_URL)
    n(
      `[voice_stream] Using VOICE_STREAM_BASE_URL override: ${a.VOICE_STREAM_BASE_URL}`,
    );
  let p = B(),
    E = new URLSearchParams({
      encoding: "linear16",
      sample_rate: "16000",
      channels: "1",
      endpointing_ms: "300",
      utterance_end_ms: "1000",
      language: s?.language ?? "en",
      use_conversation_engine: "true",
      ...(p && { forward_interims: "typed" }),
    }),
    T = `${C}${L}?${E.toString()}`;
  n(`[voice_stream] Connecting to ${T}`);
  let O = {
    Authorization: `Bearer ${u.accessToken}`,
    "User-Agent": ex(),
    "x-app": "cli",
    "anthropic-client-platform": Um(),
  };
  if (s?.keyterms?.length) {
    let t = W(s.keyterms);
    if (t) O["x-config-keyterms"] = t;
  }
  let R = Ab(),
    b = { headers: O, proxy: Cb(T), tls: R || void 0 };
  Ext(T, m);
  let i = new m(T, b),
    f = null,
    y = !1,
    I = !1,
    S = !1,
    g = !1,
    k = !1,
    _ = null,
    v = null,
    w = {
      send(t) {
        if (i.readyState !== m.OPEN) return;
        if (S) {
          n(
            `[voice_stream] Dropping audio chunk after CloseStream: ${String(t.length)} bytes`,
          );
          return;
        }
        (n(`[voice_stream] Sending audio chunk: ${String(t.length)} bytes`),
          i.send(Buffer.from(t)));
      },
      finalize() {
        if (g || S) return Promise.resolve("ws_already_closed");
        return (
          (g = !0),
          new Promise((t) => {
            let c = setTimeout(() => _?.("safety_timeout"), x.safety),
              r = setTimeout(() => _?.("no_data_timeout"), x.noData);
            if (
              ((v = () => {
                (clearTimeout(r), (v = null));
              }),
              (_ = (o) => {
                if (
                  (clearTimeout(c), clearTimeout(r), (_ = null), (v = null), l)
                ) {
                  n(
                    `[voice_stream] Promoting unreported interim before ${o} resolve`,
                  );
                  let P = l;
                  ((l = ""), e.onTranscript(P, !0));
                }
                (n(`[voice_stream] Finalize resolved via ${o}`), t(o));
              }),
              i.readyState === m.CLOSED || i.readyState === m.CLOSING)
            ) {
              _("ws_already_closed");
              return;
            }
            setTimeout(() => {
              if (((S = !0), i.readyState === m.OPEN))
                (n("[voice_stream] Sending CloseStream (finalize)"), i.send(F));
            }, 0);
          })
        );
      },
      close() {
        if (((S = !0), f)) (clearInterval(f), (f = null));
        if (((y = !1), i.readyState === m.OPEN)) i.close();
      },
      isConnected() {
        return y && i.readyState === m.OPEN;
      },
    };
  i.on("open", () => {
    (n("[voice_stream] WebSocket connected"),
      (y = !0),
      (I = !0),
      n("[voice_stream] Sending initial KeepAlive"),
      i.send(V),
      (f = setInterval(
        (t) => {
          if (t.readyState === m.OPEN)
            (n("[voice_stream] Sending periodic KeepAlive"), t.send(V));
        },
        U,
        i,
      )),
      e.onReady(w));
  });
  let l = "";
  function h(t) {
    if (!l) return;
    n(`[voice_stream] Promoting unreported interim to final (${t})`);
    let c = l;
    ((l = ""), e.onTranscript(c, !0));
  }
  return (
    i.on("message", (t) => {
      let c = t.toString();
      n(`[voice_stream] Message received (${String(c.length)} chars)`);
      let r;
      try {
        r = z(c);
      } catch {
        return;
      }
      switch (r.type) {
        case "TranscriptInterim":
        case "TranscriptText": {
          let o = r.data;
          if (
            (n(`[voice_stream] ${r.type} (${String(o?.length ?? 0)} chars)`), S)
          )
            v?.();
          if (o) ((l = o), e.onTranscript(o, !1));
          break;
        }
        case "TranscriptEndpoint": {
          n(
            `[voice_stream] TranscriptEndpoint received (${String(l.length)} chars pending)`,
          );
          let o = l;
          if (((l = ""), o)) e.onTranscript(o, !0);
          if (S) _?.("post_closestream_endpoint");
          break;
        }
        case "TranscriptError": {
          let o =
            r.description ?? r.error_code ?? "unknown transcription error";
          if (
            (n(`[voice_stream] TranscriptError: ${o}`),
            h("TranscriptError"),
            !g)
          )
            e.onError(o);
          break;
        }
        case "error": {
          let o =
            r.message ??
            `unstructured error frame (keys: ${Object.keys(r).join(", ")})`;
          if ((n(`[voice_stream] Server error: ${o}`), h("server error"), !g))
            e.onError(o);
          break;
        }
        default:
          break;
      }
    }),
    i.on("close", (t, c) => {
      let r = c?.toString() ?? "";
      if (
        (n(`[voice_stream] WebSocket closed: code=${String(t)} reason="${r}"`),
        (y = !1),
        f)
      )
        (clearInterval(f), (f = null));
      if (
        (h("ws close"), _?.("ws_close"), !g && !k && t !== 1000 && t !== 1005)
      )
        e.onError(
          `Connection closed: code ${String(t)}${r ? ` \u2014 ${r}` : ""}`,
          I ? void 0 : { connectFailureCode: `ws_closed_${A(t, 1000, 4999)}` },
        );
      e.onClose();
    }),
    i.on("unexpected-response", (t, c) => {
      let r = c.statusCode ?? 0;
      if (r === 101) {
        n("[voice_stream] unexpected-response fired with 101; ignoring");
        return;
      }
      if (
        (n(
          `[voice_stream] Upgrade rejected: status=${String(r)} cf-mitigated=${String(c.headers["cf-mitigated"])} cf-ray=${String(c.headers["cf-ray"])}`,
        ),
        (k = !0),
        c.resume(),
        t.destroy?.(),
        g)
      )
        return;
      e.onError(`WebSocket upgrade rejected with HTTP ${String(r)}`, {
        fatal: r >= 400 && r < 500,
        connectFailureCode:
          c.headers["cf-mitigated"] !== void 0
            ? `cf_mitigated_${A(r, 100, 599)}`
            : `upgrade_rejected_${A(r, 100, 599)}`,
      });
    }),
    i.on("error", (t) => {
      if (
        (n(`[voice_stream] WebSocket error: ${t.message}`, { level: "error" }),
        h("ws error"),
        !g)
      )
        e.onError(
          `Voice stream connection error: ${t.message}`,
          I ? void 0 : { connectFailureCode: `ws_error_${D(t)}` },
        );
    }),
    w
  );
}
export { probeVoiceConnectivity, isVoiceStreamAvailable, connectVoiceStream };
